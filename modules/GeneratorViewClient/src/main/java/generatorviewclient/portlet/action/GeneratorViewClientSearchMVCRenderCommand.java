package generatorviewclient.portlet.action;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.search.*;
import com.liferay.portal.kernel.search.filter.BooleanFilter;
import com.liferay.portal.kernel.search.filter.TermFilter;
import com.liferay.portal.kernel.search.filter.TermsFilter;
import com.liferay.portal.kernel.search.generic.BooleanQueryImpl;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.FullTextQueryBuilder;
import generatorviewclient.util.SimpleKeywordTokenizer;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.text.SimpleDateFormat;
import java.util.*;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=search"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientSearchMVCRenderCommand implements MVCRenderCommand {
    private final SimpleDateFormat sdf = new SimpleDateFormat(
            "dd-MM-yyyy HH:mm");

    @Override
    public String render(RenderRequest renderRequest, RenderResponse renderResponse) throws PortletException {
         System.out.println("-------before GeneratorViewClientSearchMVCRenderCommand-------");
        ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        String querySearch = renderRequest.getParameter("query");
        System.out.println("querySearch======"+querySearch);
        try {

            SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(renderRequest));
            //searchContext.setEntryClassNames(new String[]{JournalArticle.class.getName()});
            searchContext.setSorts(new Sort("modified_sortable",true));

            searchContext.setStart(0);
            searchContext.setEnd(20);
//             searchContext.setAttribute("head", Boolean.TRUE);
//             searchContext.setAttribute("latest", Boolean.TRUE);

            BooleanQuery fullQuery = new BooleanQueryImpl();
            Query query2 = generateQuery(searchContext,querySearch);// BooleanQueryFactoryUtil.create(searchContext);

            BooleanFilter bf = new BooleanFilter();

            BooleanFilter bfTF1 = new BooleanFilter();
            BooleanFilter bfTF2 = new BooleanFilter();
            TermsFilter tf1 = new TermsFilter("groupId");//,String.valueOf(portletGroupId));
            tf1.addValue(String.valueOf(portletGroupId));
            TermsFilter tf2 = new TermsFilter("scopeGroupId");//,String.valueOf(portletGroupId));
            tf2.addValue(String.valueOf(portletGroupId));
            bfTF2.add(tf1,BooleanClauseOccur.MUST);
            bfTF2.add(tf2,BooleanClauseOccur.MUST);
            bfTF1.add(bfTF2,BooleanClauseOccur.MUST);
            bf.add(bfTF1,BooleanClauseOccur.MUST);

            BooleanFilter bfTF3 = new BooleanFilter();
            TermFilter tf3 = new TermFilter("entryClassName","com.liferay.journal.model.JournalArticle");
            TermFilter tf4 = new TermFilter("latest","true");
            TermFilter tf5 = new TermFilter("status","8");
            bfTF3.add(tf3,BooleanClauseOccur.MUST);
            bfTF3.add(tf4,BooleanClauseOccur.MUST);
            bfTF3.add(tf5,BooleanClauseOccur.MUST_NOT);
            bf.add(bfTF3,BooleanClauseOccur.SHOULD);


            //addExactRequiredTerm(query, Field.TITLE, "*hotel*");

            // addExactRequiredTerm(query, Field.STATUS, String.valueOf(0)); // No drafts
            //addExactRequiredTerm(query, "head", Boolean.TRUE.toString()); // Only the most recent version


            // query.addExactTerm(Field.ENTRY_CLASS_NAME, JournalArticle.class.getName());
          //  query2.addTerm(Field.ANY, "*"+querySearch+"*");
           // query2.addTerms(Field.KEYWORDS, querySearch, true);

            // fullQuery.addTerms( Field.KEYWORDS, "queretaro",true);
            //query.addTerms( Field.KEYWORDS, "hotel",true);
            //  fullQuery.addTerm( Field.TITLE, "*hotel*");
            //searchQuery.addRequiredTerm("head",true);
            fullQuery.add(query2, BooleanClauseOccur.MUST);
            fullQuery.setPreBooleanFilter(bf);
           // fullQuery.add(query, BooleanClauseOccur.MUST);
           // fullQuery.add(query3, BooleanClauseOccur.MUST);


            Hits hits = IndexSearcherHelperUtil.search(searchContext, fullQuery);// SearchEngineUtil.search(searchContext, fullQuery);
            // JournalUtil.getArticles(hits);
            System.out.println("-------------");
            System.out.println(hits.getLength());
            System.out.println(hits.getCollatedSpellCheckResult());
            for (String suggestion : hits.getQuerySuggestions()) {
                System.out.println(suggestion);
            }
            System.out.println(hits.getQuerySuggestions().length);
            int i = 0;
            List<Map<String, String>> lstElement = new LinkedList<>();
            for (Document doc : hits.getDocs()) {
                //if(hits.getDocs().length>0){
                // Document doc = hits.getDocs()[0];
               /* System.out.println("score======"+doc.get("_score"));
                System.out.println("score======"+doc.get("score"));
                System.out.println((i++) + "--version===" + doc.getField("version").getValue());*/
                System.out.println("localized_title===" + doc.getField("localized_title").getValue());
                System.out.println("titleesES===" + doc.getField("titleesES"));
                System.out.println("title===" + doc.getField("title"));
              /*  if (doc.hasField("assetTagNames"))
                    System.out.println("assetTagNames===" + doc.getField("assetTagNames").getValue());
                System.out.println("entryClassName===" + doc.getField("entryClassName").getValue());
                if (doc.hasField("latest"))
                    System.out.println("latest===" + doc.getField("latest").getValue());
                if (doc.hasField("head"))
                    System.out.println("head===" + doc.getField("head").getValue());
                if (doc.hasField(Field.PRIORITY))
                    System.out.println("Field.PRIORITY===" + doc.getField(Field.PRIORITY).getValue());
                if (doc.hasField(Field.RATINGS))
                    System.out.println("Field.RATINGS===" + doc.getField(Field.RATINGS).getValue());

                // doc.getField("version")
                //localized_title
                //articleId
                //entryClassPK
                //assetTagNames
                //latest
                //ddmStructureKey
                //priority
                System.out.println("articleId===" + doc.getField(Field.ARTICLE_ID).getValue());
                System.out.println("entryClassPK===" + doc.getField(Field.ENTRY_CLASS_PK).getValue());
                System.out.println("CLASS_PK===" + doc.getField(Field.CLASS_PK).getValue());
//                System.out.println("ASSET_CATEGORY_IDS===" + doc.getField(Field.ASSET_CATEGORY_IDS).getValue());
                if (doc.hasField(Field.ASSET_VOCABULARY_IDS))
                    System.out.println("ASSET_VOCABULARY_IDS===" + doc.getField(Field.ASSET_VOCABULARY_IDS).getValue());
                if(i==4)
                {
                    doc.getFields().forEach((s, field) -> {
                        System.out.println(s + "---" + field.getValue());
                    });
                }
                doc.getFields().forEach((s, field) -> {
                    System.out.println(s + "---" + field.getValue());
                });*/
                Map<String, String> mapElement = new HashMap<>();
                JournalArticle ja = JournalArticleLocalServiceUtil.fetchLatestArticle(portletGroupId,
                        doc.getField(Field.ARTICLE_ID).getValue(),0);
                if(ja==null ) {
                    System.out.println("Conttt---articleId===" + doc.getField(Field.ARTICLE_ID).getValue());
                    continue;
                }
                System.out.println("getGroupId===="+ja.getId()+"---folder=="+ja.getFolder().buildTreePath());
                mapElement.put("id",String.valueOf( ja.getId()));
                mapElement.put("articleId", doc.getField(Field.ARTICLE_ID).getValue());

                Long modifiedDate = Long.parseLong(doc.getField("modified_sortable").getValue());
                mapElement.put(
                        "lastUpdated",
                        sdf.format(new Date(modifiedDate)));
                mapElement.put(
                        "title",
                        ja.getTitle(
                                ja.getDefaultLanguageId()));
                mapElement.put(
                        "version",
                        doc.getField("version").getValue());
                mapElement.put(
                        "type",
                        getStructureKEY().get(doc.getField("ddmStructureKey").getValue()));
                lstElement.add(mapElement);
            }
            Template template = (Template) renderRequest.getAttribute(
                    WebKeys.TEMPLATE);
            template.put("data",lstElement);
            PortletURL editURL = renderResponse.createRenderURL();

            editURL.setParameter("mvcRenderCommandName", "EditStructure");

            PortletURL searchURL = renderResponse.createRenderURL();

            searchURL.setParameter("mvcRenderCommandName", "search");

            Map<String, String> mapHeader = new HashMap<>();
            mapHeader.put("articleId", "Identificador");
            mapHeader.put("lastUpdated", "Fecha Modificación");
            mapHeader.put("type", "Tipo");
            mapHeader.put("title", "Título");
            mapHeader.put("version", "Versión");
            int countArticles = hits.getLength();
            if(countArticles%20==0){
                countArticles=countArticles/20;
            }else{
                countArticles=( (countArticles-(countArticles%20))/20)+1;
            }

            template.put("dataCount", countArticles);
            template.put("header", mapHeader);

            template.put(
                    "keys",
                    Arrays.asList("articleId", "title", "version", "type", "lastUpdated"));


            template.put("navigationEditURL", editURL.toString());
            template.put("navigationSearchURL", searchURL.toString());
            template.put("contextPath", renderRequest.getContextPath());
            template.put("querySearch", querySearch);
        }catch(Exception ex){
            ex.printStackTrace();
            throw new PortletException(ex);
        }

        return "Search";
    }
    private static Map<String, String> getStructureKEY() {
        Map<String, String> result = new HashMap<>();
        result.put( String.valueOf(ConstantUtil.HOTEL_STRUCTURE_KEY),"HOTEL");
        result.put(String.valueOf(ConstantUtil.ROOM_STRUCTURE_KEY),"ROOM");
        result.put( String.valueOf(ConstantUtil.RATE_STRUCTURE_KEY),"RATE");
        result.put( String.valueOf(ConstantUtil.BAR_STRUCTURE_KEY),"BAR");
        result.put( String.valueOf(ConstantUtil.RESTAURANT_STRUCTURE_KEY),"RESTAURANTE");
        result.put(String.valueOf(ConstantUtil.BRAND_STRUCTURE_KEY),"MARCA");
        result.put( String.valueOf(ConstantUtil.SPA_STRUCTURE_KEY),"SPA");
        result.put( String.valueOf(ConstantUtil.GYM_STRUCTURE_KEY),"GYM");
        result.put( String.valueOf(ConstantUtil.DESTINATION_STRUCTURE_KEY),"DESTINOS");
        result.put(String.valueOf(ConstantUtil.FACILITY_STRUCTURE_KEY),"FACILITY");
        result.put( String.valueOf(ConstantUtil.GENERIC_STRUCTURE_KEY),"GENERIC");
        result.put( String.valueOf(ConstantUtil.KIDSCLUB_STRUCTURE_KEY),"KIDSCLUB");
        result.put(String.valueOf(ConstantUtil.MEETING_STRUCTURE_KEY),"MEETING");
        return result;
    }


    private Query generateQuery(SearchContext searchContext, String query){

       return  new FullTextQueryBuilder(new SimpleKeywordTokenizer()).build(query);
    }
}
