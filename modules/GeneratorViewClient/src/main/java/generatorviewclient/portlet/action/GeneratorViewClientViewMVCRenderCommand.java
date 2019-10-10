package generatorviewclient.portlet.action;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalService;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.util.comparator.ArticleModifiedDateComparator;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.search.*;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.OrderByComparator;
import com.liferay.portal.kernel.util.OrderByComparatorFactoryUtil;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.WebKeys;

import generatorviewclient.constants.GeneratorViewClientPortletKeys;

import java.text.SimpleDateFormat;

import java.util.*;
import java.util.stream.Collectors;

import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceURL;

import generatorviewclient.util.ConstantUtil;
import org.osgi.service.component.annotations.Component;

/**
 * @author kelceyguillenbejarano
 */
@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=View", "mvc.command.name=/"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientViewMVCRenderCommand
        implements MVCRenderCommand {

    @Override
    public String render(
            RenderRequest renderRequest, RenderResponse renderResponse) {
        if (journalArticleService == null) {
            journalArticleService =
                    JournalArticleLocalServiceUtil.getService();

            System.out.println("-------------nullllllllll==" + journalArticleService);
        }
        ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        System.out.println("--------portletGroupId===" + portletGroupId);
        Long userId = PortalUtil.getUserId(renderRequest);

        if (userId == null || userId == 0) {
            System.out.println("-------------no loginnnnn==");
            return "Header";
        }


        List<String> keysLst = Arrays.asList(String.valueOf(ConstantUtil.HOTEL_STRUCTURE_KEY), String.valueOf(ConstantUtil.ROOM_STRUCTURE_KEY),
                String.valueOf(ConstantUtil.RATE_STRUCTURE_KEY), String.valueOf(ConstantUtil.BAR_STRUCTURE_KEY),
                String.valueOf(ConstantUtil.RESTAURANT_STRUCTURE_KEY), String.valueOf(ConstantUtil.BRAND_STRUCTURE_KEY),
                String.valueOf(ConstantUtil.SPA_STRUCTURE_KEY), String.valueOf(ConstantUtil.GYM_STRUCTURE_KEY),
                String.valueOf(ConstantUtil.DESTINATION_STRUCTURE_KEY), String.valueOf(ConstantUtil.FACILITY_STRUCTURE_KEY),
                String.valueOf(ConstantUtil.GENERIC_STRUCTURE_KEY), String.valueOf(ConstantUtil.KIDSCLUB_STRUCTURE_KEY),
                String.valueOf(ConstantUtil.MEETING_STRUCTURE_KEY));
        OrderByComparator comparator = new ArticleModifiedDateComparator(false); // OrderByComparatorFactoryUtil.create("DLFileEntry", "createDate/modifiedDate", true/false);

        Map<String, List<Map<String, String>>> mpResult = keysLst.stream().map(s -> {
            //String[] keys = new String[1];
            //keys[0] = s;
            List<Map<String, String>> lstElement = new LinkedList<>();

            List<JournalArticle> lst =
                    getArticlesByStructure(portletGroupId, renderRequest, s);
            // journalArticleService.getArticlesByStructureId(portletGroupId, s, 0, 20, comparator);
            //journalArticleService.getStructureArticles(keys);

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

                        if (s.equalsIgnoreCase(String.valueOf(ConstantUtil.HOTEL_STRUCTURE_ID)))
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
                    //}
                });
            }

            return new AbstractMap.SimpleEntry<>(s, lstElement);
        }).collect(
                Collectors.toMap(
                        AbstractMap.SimpleEntry::getKey,
                        AbstractMap.SimpleEntry::getValue));

        Map<String, Integer> mpCount = keysLst.stream().map(s -> {
            int countArticles = getCountArticlesByStructure(portletGroupId,renderRequest, s);//journalArticleService.getStructureArticlesCount(portletGroupId, s);
            System.out.println("-------count==" + countArticles);
            if (countArticles % 20 == 0) {
                return new AbstractMap.SimpleEntry<>(s, countArticles / 20);
            } else {
                return new AbstractMap.SimpleEntry<>(s, ((countArticles - (countArticles % 20)) / 20) + 1);
            }
        }).collect(
                Collectors.toMap(
                        AbstractMap.SimpleEntry::getKey,
                        AbstractMap.SimpleEntry::getValue));

        Map<String, String> mapHeader = new HashMap<>();
        mapHeader.put("articleId", "Identificador");
        mapHeader.put("lastUpdated", "Fecha Modificación");
        mapHeader.put("marca", "Marca");
        mapHeader.put("title", "Título");
        mapHeader.put("version", "Versión");

        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);

        template.put("contextPath", renderRequest.getContextPath());
        template.put("data", mpResult);
        template.put("dataCount", mpCount);
        template.put("header", mapHeader);
        template.put(
                "keys",
                Arrays.asList("articleId", "title", "version", "marca", "lastUpdated"));

        PortletURL navigationURL = renderResponse.createRenderURL();

        navigationURL.setParameter("mvcRenderCommandName", "NewStructure");

        PortletURL editURL = renderResponse.createRenderURL();

        editURL.setParameter("mvcRenderCommandName", "EditStructure");

        PortletURL searchURL = renderResponse.createRenderURL();

        searchURL.setParameter("mvcRenderCommandName", "search");
        System.out.println("search url====" + searchURL.toString());

        template.put("navigationNewURL", navigationURL.toString());
        template.put("navigationEditURL", editURL.toString());
        template.put("navigationSearchURL", searchURL.toString());
        template.put("STRUCTURE_ID", getStructureID());
        template.put("STRUCTURE_KEY", getStructureKEY());
        template.put("isOnDelete", false);

        ResourceURL resourceURL = renderResponse.createResourceURL();
        resourceURL.setResourceID("getJournals");
        System.out.println("-.-.-..-.-.-.--..-.-" + resourceURL.toString());

        return "View";
    }

    private static Map<String, Long> getStructureID() {
        Map<String, Long> result = new HashMap<>();
        result.put("HOTEL", ConstantUtil.HOTEL_STRUCTURE_ID);
        result.put("ROOM", ConstantUtil.ROOM_STRUCTURE_ID);
        result.put("RATE", ConstantUtil.RATE_STRUCTURE_ID);
        result.put("PUB", ConstantUtil.BAR_STRUCTURE_ID);
        result.put("RESTAURANT", ConstantUtil.RESTAURANT_STRUCTURE_ID);
        result.put("BRAND", ConstantUtil.BRAND_STRUCTURE_ID);
        result.put("SPA", ConstantUtil.SPA_STRUCTURE_ID);
        result.put("GYM", ConstantUtil.GYM_STRUCTURE_ID);
        result.put("DESTINATION", ConstantUtil.DESTINATION_STRUCTURE_ID);
        result.put("FACILITY", ConstantUtil.FACILITY_STRUCTURE_ID);
        result.put("GENERIC", ConstantUtil.GENERIC_STRUCTURE_ID);
        result.put("KIDSCLUB", ConstantUtil.KIDSCLUB_STRUCTURE_ID);
        result.put("MEETING", ConstantUtil.MEETING_STRUCTURE_ID);

        return result;
    }

    private static Map<String, String> getStructureKEY() {
        Map<String, String> result = new HashMap<>();
        result.put("HOTEL", String.valueOf(ConstantUtil.HOTEL_STRUCTURE_KEY));
        result.put("ROOM", String.valueOf(ConstantUtil.ROOM_STRUCTURE_KEY));
        result.put("RATE", String.valueOf(ConstantUtil.RATE_STRUCTURE_KEY));
        result.put("PUB", String.valueOf(ConstantUtil.BAR_STRUCTURE_KEY));
        result.put("RESTAURANT", String.valueOf(ConstantUtil.RESTAURANT_STRUCTURE_KEY));
        result.put("BRAND", String.valueOf(ConstantUtil.BRAND_STRUCTURE_KEY));
        result.put("SPA", String.valueOf(ConstantUtil.SPA_STRUCTURE_KEY));
        result.put("GYM", String.valueOf(ConstantUtil.GYM_STRUCTURE_KEY));
        result.put("DESTINATION", String.valueOf(ConstantUtil.DESTINATION_STRUCTURE_KEY));
        result.put("FACILITY", String.valueOf(ConstantUtil.FACILITY_STRUCTURE_KEY));
        result.put("GENERIC", String.valueOf(ConstantUtil.GENERIC_STRUCTURE_KEY));
        result.put("KIDSCLUB", String.valueOf(ConstantUtil.KIDSCLUB_STRUCTURE_KEY));
        result.put("MEETING", String.valueOf(ConstantUtil.MEETING_STRUCTURE_KEY));
        return result;
    }

    private int getCountArticlesByStructure(Long portletGroupId,RenderRequest renderRequest, String structureKey) {
        SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(renderRequest));
        searchContext.setEntryClassNames(new String[]{JournalArticle.class.getName()});
        long[] groupIds = {portletGroupId};
        searchContext.setGroupIds(groupIds);

        BooleanQuery fullQuery = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query1 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query2 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query3 = BooleanQueryFactoryUtil.create(searchContext);


        query.addExactTerm("latest", Boolean.TRUE);
        query1.addExactTerm("head", Boolean.TRUE);
        query2.addExactTerm("ddmStructureKey", structureKey);
        query3.addExactTerm("groupId", portletGroupId);

        try {
            fullQuery.add(query1, BooleanClauseOccur.MUST);
            fullQuery.add(query, BooleanClauseOccur.MUST);
            fullQuery.add(query2, BooleanClauseOccur.MUST);
            fullQuery.add(query3, BooleanClauseOccur.MUST);

            return Long.valueOf(IndexSearcherHelperUtil.searchCount(searchContext, fullQuery)).intValue();
        } catch (Exception ex) {

            ex.printStackTrace();
            return 0;
        }
    }

    private List<JournalArticle> getArticlesByStructure(Long portletGroupId, RenderRequest renderRequest, String structureKey) {
        SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(renderRequest));
        searchContext.setEntryClassNames(new String[]{JournalArticle.class.getName()});
        searchContext.setSorts(new Sort("modified_sortable", true));
        long[] groupIds = {portletGroupId};
        searchContext.setGroupIds(groupIds);

        searchContext.setStart(0);
        searchContext.setEnd(20);

        BooleanQuery fullQuery = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query1 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query2 = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query3 = BooleanQueryFactoryUtil.create(searchContext);


        query.addExactTerm("latest", Boolean.TRUE);
        query1.addExactTerm("head", Boolean.TRUE);
        query2.addExactTerm("ddmStructureKey", structureKey);
        query3.addExactTerm("groupId", portletGroupId);
        List<JournalArticle> lstArticles = new ArrayList<>();

        try {
            fullQuery.add(query1, BooleanClauseOccur.MUST);
            fullQuery.add(query, BooleanClauseOccur.MUST);
            fullQuery.add(query2, BooleanClauseOccur.MUST);
            fullQuery.add(query3, BooleanClauseOccur.MUST);

            Hits hits = IndexSearcherHelperUtil.search(searchContext, fullQuery);// SearchEngineUtil.search(searchContext, fullQuery);
            System.out.println(portletGroupId+"--structureKey==="+structureKey+"---count hitss===="+hits.getLength());
            for (Document doc : hits.getDocs()) {
                System.out.println("Articleid===" + doc.getField(Field.ARTICLE_ID).getValue());

                System.out.println("localized_title===" + doc.getField("localized_title").getValue());
                System.out.println("groupId===" + doc.getField("groupId").getValue());
               /* doc.getFields().forEach((s, field) -> {
                    System.out.println(s + "---" + field.getValue());
                });*/
                JournalArticle ja = JournalArticleLocalServiceUtil.fetchLatestArticle(portletGroupId,
                        doc.getField(Field.ARTICLE_ID).getValue(), 0);
                System.out.println( "---Article===" + ja.getId());
                lstArticles.add(ja);
            }
        } catch (Exception ex) {

            ex.printStackTrace();
        }
        return lstArticles;
    }

    private JournalArticleLocalService journalArticleService =
            JournalArticleLocalServiceUtil.getService();
    private final SimpleDateFormat sdf = new SimpleDateFormat(
            "dd-MM-yyyy HH:mm");

}