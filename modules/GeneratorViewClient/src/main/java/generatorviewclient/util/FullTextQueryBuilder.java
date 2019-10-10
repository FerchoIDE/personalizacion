package generatorviewclient.util;

import com.liferay.portal.kernel.search.*;
import com.liferay.portal.kernel.search.generic.BooleanQueryImpl;
import com.liferay.portal.kernel.search.generic.MatchQuery;
import com.liferay.portal.kernel.search.generic.WildcardQueryImpl;
import com.liferay.portal.kernel.util.CharPool;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.StringUtil;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FullTextQueryBuilder {
    public FullTextQueryBuilder(KeywordTokenizer keywordTokenizer) {
        _keywordTokenizer = keywordTokenizer;
    }


    public Query build( String keywords){
        List<String> lstTokenizer = new SimpleKeywordTokenizer().tokenize(keywords);
        BooleanQuery queryBoolean =  new BooleanQueryImpl();
        List<String> lstWildCards = Arrays.asList("assetCategoryTitles", "assetCategoryTitles_es_ES","userName","userName");
        lstWildCards.forEach(field -> {
            BooleanQuery queryWCG = new BooleanQueryImpl();
            lstTokenizer.forEach(token -> {
                Query queryWC = new WildcardQueryImpl(field,"*" + token+"*");
                try {
                    queryWCG.add(queryWC, BooleanClauseOccur.SHOULD);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            });
            try {
                queryBoolean.add(queryWCG, BooleanClauseOccur.SHOULD);
            } catch (ParseException e) {
                e.printStackTrace();
            }

        });

        List<String> lstMatches = Arrays.asList("assetTagNames", "comments","content","description",
                "properties","localized_title","url","articleId","classPK","contentesES","descriptionesES","entryClassPK",
                "title_es_ES");

        lstMatches.forEach(field -> {
            BooleanQuery queryBooleanMatch = new BooleanQueryImpl();
            BooleanQuery queryBooleanMatchMust = new BooleanQueryImpl();
            MatchQuery mq1 = new MatchQuery(field, keywords);
            mq1.setType(MatchQuery.Type.BOOLEAN);
            try {
                queryBooleanMatchMust.add(mq1, BooleanClauseOccur.SHOULD);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            MatchQuery mq2 = new MatchQuery(field, keywords);
            if(field.equalsIgnoreCase("description")){
                mq2.setType(MatchQuery.Type.PHRASE);
                mq2.setSlop(50);

            }else {
                mq2.setType(MatchQuery.Type.PHRASE_PREFIX);
            }
            try {
                queryBooleanMatchMust.add(mq2, BooleanClauseOccur.SHOULD);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            try {
                queryBooleanMatch.add(queryBooleanMatchMust, BooleanClauseOccur.MUST);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            MatchQuery mq3 = new MatchQuery(field, keywords);
            mq3.setType(MatchQuery.Type.PHRASE);
            mq3.setBoost(2.0f);
            try {
                queryBooleanMatch.add(mq3, BooleanClauseOccur.SHOULD);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            try {
                queryBoolean.add(queryBooleanMatch, BooleanClauseOccur.SHOULD);
            } catch (ParseException e) {
                e.printStackTrace();
            }

        });

        return queryBoolean;

    }
    public Query build(String[] fields, String keywords){
        BooleanQuery fullQuery = new BooleanQueryImpl();
        for(String field:fields){
            Query query = build(field,keywords);
            try {
                fullQuery.add(query,BooleanClauseOccur.SHOULD);
            } catch (ParseException e) {
                e.printStackTrace();
            }

        }
        return fullQuery;
    }
    public Query build(String field, String keywords) {
        BooleanQueryImpl booleanQueryImpl = new BooleanQueryImpl();

        List<String> tokens = _keywordTokenizer.tokenize(keywords);

        List<String> phrases = new ArrayList<>(tokens.size());
        List<String> words = new ArrayList<>(tokens.size());

        for (String token : tokens) {
            if (StringUtil.startsWith(token, CharPool.QUOTE)) {
                phrases.add(StringUtil.unquote(token));
            }
            else {
                words.add(token);
            }
        }

        for (String phrase : phrases) {
            booleanQueryImpl.add(
                    createPhraseQuery(field, phrase), BooleanClauseOccur.MUST);
        }

        if (!words.isEmpty()) {
            addSentenceQueries(
                    field, StringUtil.merge(words, StringPool.SPACE),
                    booleanQueryImpl);
        }

        booleanQueryImpl.add(
                createExactMatchQuery(field, keywords), BooleanClauseOccur.SHOULD);

        return booleanQueryImpl;
    }

    public void setAutocomplete(boolean autocomplete) {
        _autocomplete = autocomplete;
    }

    public void setExactMatchBoost(float exactMatchBoost) {
        _exactMatchBoost = exactMatchBoost;
    }

    public void setProximitySlop(int proximitySlop) {
        _proximitySlop = proximitySlop;
    }

    protected void addSentenceQueries(
            String field, String sentence, BooleanQueryImpl booleanQueryImpl) {

        booleanQueryImpl.add(
                createMandatoryQuery(field, sentence), BooleanClauseOccur.MUST);

        if (_proximitySlop != null) {
            booleanQueryImpl.add(
                    createProximityQuery(field, sentence),
                    BooleanClauseOccur.SHOULD);
        }
    }

    protected Query createWildCardQuery(String field, String value) {
        return new WildcardQueryImpl(field,value);
    }

    protected Query createAutocompleteQuery(String field, String value) {
        PhraseQueryBuilder builder = new PhraseQueryBuilder();

        builder.setPrefix(true);

        return builder.build(field, value);
    }

    protected Query createExactMatchQuery(String field, String keywords) {
        PhraseQueryBuilder builder = new PhraseQueryBuilder();

        builder.setBoost(_exactMatchBoost);

        return builder.build(field, keywords);
    }

    protected Query createMandatoryQuery(String field, String sentence) {
        Query matchQuery = createMatchQuery(field, sentence);

        if (!_autocomplete) {
            return matchQuery;
        }

        BooleanQueryImpl booleanQueryImpl = new BooleanQueryImpl();

        booleanQueryImpl.add(matchQuery, BooleanClauseOccur.SHOULD);

        booleanQueryImpl.add(
                createAutocompleteQuery(field, sentence),
                BooleanClauseOccur.SHOULD);

        return booleanQueryImpl;
    }

    protected Query createMatchQuery(String field, String value) {
        return new MatchQuery(field, value);
    }

    protected Query createPhraseQuery(String field, String phrase) {
        PhraseQueryBuilder builder = new PhraseQueryBuilder();

        builder.setTrailingStarAware(true);

        return builder.build(field, phrase);
    }

    protected Query createProximityQuery(String field, String value) {
        PhraseQueryBuilder builder = new PhraseQueryBuilder();

        builder.setSlop(_proximitySlop);

        return builder.build(field, value);
    }

    private boolean _autocomplete;
    private float _exactMatchBoost;
    private final KeywordTokenizer _keywordTokenizer;
    private Integer _proximitySlop;

}

