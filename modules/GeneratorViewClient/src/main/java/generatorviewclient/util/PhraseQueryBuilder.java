package generatorviewclient.util;

import com.liferay.portal.kernel.search.Query;
import com.liferay.portal.kernel.search.generic.MatchQuery;
import com.liferay.portal.kernel.util.StringPool;

public class PhraseQueryBuilder {
    public Query build(String field, String value) {
    MatchQuery.Type type = MatchQuery.Type.PHRASE;

    if (_prefix) {
        type = MatchQuery.Type.PHRASE_PREFIX;
    }

    if (_trailingStarAware && value.endsWith(StringPool.STAR)) {
        value = value.substring(0, value.length() - 1);

        type = MatchQuery.Type.PHRASE_PREFIX;
    }

    MatchQuery matchQuery = new MatchQuery(field, value);

    matchQuery.setType(type);

    if (_boost != null) {
        matchQuery.setBoost(_boost);
    }

    if (_slop != null) {
        matchQuery.setSlop(_slop);
    }

    return matchQuery;
}

    public void setBoost(float boost) {
        _boost = boost;
    }

    public void setPrefix(boolean prefix) {
        _prefix = prefix;
    }

    public void setSlop(int slop) {
        _slop = slop;
    }

    public void setTrailingStarAware(boolean trailingStarAware) {
        _trailingStarAware = trailingStarAware;
    }

    private Float _boost;
    private boolean _prefix;
    private Integer _slop;
    private boolean _trailingStarAware;

}
