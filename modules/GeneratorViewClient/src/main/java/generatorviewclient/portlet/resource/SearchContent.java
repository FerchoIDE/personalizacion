package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.util.impl.JournalUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.search.*;
import com.liferay.portal.kernel.search.filter.BooleanFilter;
import com.liferay.portal.kernel.search.filter.TermFilter;
import com.liferay.portal.kernel.search.filter.TermsFilter;
import com.liferay.portal.kernel.search.generic.BooleanQueryImpl;
import com.liferay.portal.kernel.search.generic.QueryTermImpl;
import com.liferay.portal.kernel.search.generic.TermQueryImpl;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.FileUtil;
import generatorviewclient.util.FullTextQueryBuilder;
import generatorviewclient.util.SimpleKeywordTokenizer;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.PortletURL;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.*;

import static generatorviewclient.util.JsonUtil.generateError;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=searchContent"
        },
        service = MVCResourceCommand.class
)
public class SearchContent implements MVCResourceCommand {
    private final SimpleDateFormat sdf = new SimpleDateFormat(
            "dd-MM-yyyy HH:mm");


    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        resourceResponse.setContentType("application/json");
        try {
            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);
            String querySearch = jsonObject.getString("querySearch");
            int page = jsonObject.getInt("page");


            SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(resourceRequest));
            searchContext.setSorts(new Sort("modified_sortable", true));

            searchContext.setStart(page * 20);
            searchContext.setEnd(page * 20 + 20);

            BooleanQuery fullQuery = new BooleanQueryImpl();
            Query query2 = generateQuery(searchContext, querySearch);// BooleanQueryFactoryUtil.create(searchContext);

            BooleanFilter bf = new BooleanFilter();

            BooleanFilter bfTF1 = new BooleanFilter();
            BooleanFilter bfTF2 = new BooleanFilter();
            TermsFilter tf1 = new TermsFilter("groupId");//,String.valueOf(portletGroupId));
            tf1.addValue(String.valueOf(portletGroupId));
            TermsFilter tf2 = new TermsFilter("scopeGroupId");//,String.valueOf(portletGroupId));
            tf2.addValue(String.valueOf(portletGroupId));
            bfTF2.add(tf1, BooleanClauseOccur.MUST);
            bfTF2.add(tf2, BooleanClauseOccur.MUST);
            bfTF1.add(bfTF2, BooleanClauseOccur.MUST);
            bf.add(bfTF1, BooleanClauseOccur.MUST);

            BooleanFilter bfTF3 = new BooleanFilter();
            TermFilter tf3 = new TermFilter("entryClassName", "com.liferay.journal.model.JournalArticle");
            TermFilter tf4 = new TermFilter("latest", "true");
            TermFilter tf5 = new TermFilter("status", "8");
            bfTF3.add(tf3, BooleanClauseOccur.MUST);
            bfTF3.add(tf4, BooleanClauseOccur.MUST);
            bfTF3.add(tf5, BooleanClauseOccur.MUST_NOT);
            bf.add(bfTF3, BooleanClauseOccur.SHOULD);

            fullQuery.add(query2, BooleanClauseOccur.MUST);
            fullQuery.setPreBooleanFilter(bf);


            Hits hits = IndexSearcherHelperUtil.search(searchContext, fullQuery);

            List<Map<String, String>> lstElement = new LinkedList<>();
            for (Document doc : hits.getDocs()) {
                System.out.println("localized_title===" + doc.getField("localized_title").getValue());

                doc.getFields().forEach((s, field) -> {
                    System.out.println(s + "---" + field.getValue());
                });
                Map<String, String> mapElement = new HashMap<>();
                /*JournalArticle ja = JournalArticleLocalServiceUtil.fetchLatestArticle(portletGroupId,
                        doc.getField(Field.ARTICLE_ID).getValue(), 0);*/

                JournalArticle ja = JournalArticleLocalServiceUtil.getLatestArticle(portletGroupId,
                        doc.getField(Field.ARTICLE_ID).getValue());

                mapElement.put("id", String.valueOf(ja.getId()));
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

            resourceResponse.getPortletOutputStream().write(new JSONArray(lstElement).toString().getBytes());
        } catch (Exception ex) {
            resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                    Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
            try {
                generateError(resourceResponse.getPortletOutputStream(), ex.getMessage());
            } catch (Exception exi) {
                exi.printStackTrace();
                throw new PortletException(exi);
            }
        }
        return true;
    }

    private Query generateQuery(SearchContext searchContext, String query) {

        return new FullTextQueryBuilder(new SimpleKeywordTokenizer()).build(query);

    }

    private static Map<String, String> getStructureKEY() {
        Map<String, String> result = new HashMap<>();
        result.put(String.valueOf(ConstantUtil.HOTEL_STRUCTURE_KEY), "HOTEL");
        result.put(String.valueOf(ConstantUtil.ROOM_STRUCTURE_KEY), "ROOM");
        result.put(String.valueOf(ConstantUtil.RATE_STRUCTURE_KEY), "RATE");
        result.put(String.valueOf(ConstantUtil.BAR_STRUCTURE_KEY), "BAR");
        result.put(String.valueOf(ConstantUtil.RESTAURANT_STRUCTURE_KEY), "RESTAURANTE");
        result.put(String.valueOf(ConstantUtil.BRAND_STRUCTURE_KEY), "MARCA");
        result.put(String.valueOf(ConstantUtil.SPA_STRUCTURE_KEY), "SPA");
        result.put(String.valueOf(ConstantUtil.GYM_STRUCTURE_KEY), "GYM");
        result.put(String.valueOf(ConstantUtil.DESTINATION_STRUCTURE_KEY), "DESTINOS");
        result.put(String.valueOf(ConstantUtil.FACILITY_STRUCTURE_KEY), "FACILITY");
        result.put(String.valueOf(ConstantUtil.GENERIC_STRUCTURE_KEY), "GENERIC");
        result.put(String.valueOf(ConstantUtil.KIDSCLUB_STRUCTURE_KEY), "KIDSCLUB");
        result.put(String.valueOf(ConstantUtil.MEETING_STRUCTURE_KEY), "MEETING");
        return result;
    }
}
