package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalService;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.util.comparator.ArticleModifiedDateComparator;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.search.*;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.OrderByComparator;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.FileUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
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
                "mvc.command.name=getPage"
        },
        service = MVCResourceCommand.class
)
public class GetPage implements MVCResourceCommand {
    private final SimpleDateFormat sdf = new SimpleDateFormat(
            "dd-MM-yyyy HH:mm");

    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        try {
            resourceResponse.setContentType("application/json");
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            System.out.println("--------portletGroupId===" + portletGroupId);
            Long userId = PortalUtil.getUserId(resourceRequest);
            if (userId == null || userId == 0) {
                resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                        Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
                generateError(resourceResponse.getPortletOutputStream(), "Es requerido iniciar Sesion");
                return true;
            }

            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);
            String structureId = jsonObject.getString("structureId");
            int page = jsonObject.getInt("page");

            OrderByComparator comparator = new ArticleModifiedDateComparator(false); // OrderByComparatorFactoryUtil.create("DLFileEntry", "createDate/modifiedDate", true/false);
            JournalArticleLocalService journalArticleService = JournalArticleLocalServiceUtil.getService();
            List<Map<String, String>> lstElement = new LinkedList<>();
            List<JournalArticle> lst =
                    // journalArticleService.getArticlesByStructureId(portletGroupId, structureId, page*20, page*20+20, comparator);
                    getArticlesByStructure(portletGroupId, resourceRequest, structureId, page * 20, page * 20 + 20);
            if (lst != null) {
                lst.forEach(journalArticle -> {
                   /* boolean isLast = false;

                    try {
                        isLast = journalArticleService.isLatestVersion(
                                journalArticle.getGroupId(),
                                journalArticle.getArticleId(),
                                journalArticle.getVersion(),
                                journalArticle.getStatus());
                    } catch (Exception ex) {
                    }

                    if (isLast) {*/
                    Map<String, String> mapElement = new HashMap<>();

                    try {
                        // System.out.println(
                        //	journalArticle.getDDMStructure());

                        if (structureId.equalsIgnoreCase(String.valueOf(ConstantUtil.HOTEL_STRUCTURE_ID)))
                            mapElement.put(
                                    "marca",
                                    journalArticle.getFolder().getName());
                        else
                            mapElement.put(
                                    "marca",
                                    journalArticle.getFolder().getParentFolder().getName());

                    } catch (Exception ex) {
                        mapElement.put(
                                "marca",
                                "unknown");

                    }

                    mapElement.put("id", String.valueOf(journalArticle.getId()));
                    mapElement.put("articleId", journalArticle.getArticleId());
                    mapElement.put(
                            "lastUpdated",
                            sdf.format(journalArticle.getModifiedDate()));
                    mapElement.put(
                            "title",
                            journalArticle.getTitle(
                                    journalArticle.getDefaultLanguageId()));
                    mapElement.put(
                            "version",
                            String.valueOf(journalArticle.getVersion()));
                    lstElement.add(mapElement);
                    // }
                });
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

    private List<JournalArticle> getArticlesByStructure(Long portletGroupId, ResourceRequest resourceRequest, String structureKey, int start, int end) {
        SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(resourceRequest));
        searchContext.setEntryClassNames(new String[]{JournalArticle.class.getName()});
        searchContext.setSorts(new Sort("modified_sortable", true));
        long[] groupIds = {portletGroupId};
        searchContext.setGroupIds(groupIds);

        searchContext.setStart(start);
        searchContext.setEnd(end);

        BooleanQuery fullQuery = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query1 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query2 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query3 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query4 = BooleanQueryFactoryUtil.create(searchContext);


        query.addExactTerm("latest", Boolean.TRUE);
        query1.addExactTerm("head", Boolean.TRUE);
        query2.addExactTerm("ddmStructureKey", structureKey);
        query3.addExactTerm("groupId", portletGroupId);
        query4.addExactTerm("status","8");
        List<JournalArticle> lstArticles = new ArrayList<>();

        try {
            fullQuery.add(query1, BooleanClauseOccur.MUST);
            fullQuery.add(query, BooleanClauseOccur.MUST);
            fullQuery.add(query2, BooleanClauseOccur.MUST);
            fullQuery.add(query3, BooleanClauseOccur.MUST);
            fullQuery.add(query4, BooleanClauseOccur.MUST_NOT);

            Hits hits = IndexSearcherHelperUtil.search(searchContext, fullQuery);// SearchEngineUtil.search(searchContext, fullQuery);
            for (Document doc : hits.getDocs()) {
               /* JournalArticle ja = JournalArticleLocalServiceUtil.fetchLatestArticle(portletGroupId,
                        doc.getField(Field.ARTICLE_ID).getValue(), 0);*/
                JournalArticle ja = JournalArticleLocalServiceUtil.getLatestArticle(portletGroupId,
                        doc.getField(Field.ARTICLE_ID).getValue());
                if(ja!=null)
                    lstArticles.add(ja);
            }
        } catch (Exception ex) {

            ex.printStackTrace();
        }
        return lstArticles;
    }
}
