package generatorviewclient.portlet.action;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalService;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.util.comparator.ArticleModifiedDateComparator;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
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
                    journalArticleService.getStructureArticles(portletGroupId, s, 0, 20, comparator);
            //journalArticleService.getStructureArticles(keys);

            if (lst != null) {
                lst.forEach(journalArticle -> {
                    boolean isLast = false;

                    try {
                        isLast = journalArticleService.isLatestVersion(
                                journalArticle.getGroupId(),
                                journalArticle.getArticleId(),
                                journalArticle.getVersion(),
                                journalArticle.getStatus());
                    } catch (Exception ex) {
                    }

                    if (isLast) {
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
                    }
                });
            }

            return new AbstractMap.SimpleEntry<>(s, lstElement);
        }).collect(
                Collectors.toMap(
                        AbstractMap.SimpleEntry::getKey,
                        AbstractMap.SimpleEntry::getValue));

        Map<String, String> mapHeader = new HashMap<>();
        mapHeader.put("id", "Identificador");
        mapHeader.put("lastUpdated", "Fecha Modificación");
        mapHeader.put("marca", "Marca");
        mapHeader.put("title", "Titulo");
        mapHeader.put("version", "Versión");

        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);

        template.put("contextPath", renderRequest.getContextPath());
        template.put("data", mpResult);
        template.put("header", mapHeader);
        template.put(
                "keys",
                Arrays.asList("id", "title", "version", "marca", "lastUpdated"));

        PortletURL navigationURL = renderResponse.createRenderURL();

        navigationURL.setParameter("mvcRenderCommandName", "NewStructure");

        PortletURL editURL = renderResponse.createRenderURL();

        editURL.setParameter("mvcRenderCommandName", "EditStructure");

        template.put("navigationNewURL", navigationURL.toString());
        template.put("navigationEditURL", editURL.toString());
        template.put("STRUCTURE_ID", getStructureID());
        template.put("STRUCTURE_KEY", getStructureKEY());

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

    private JournalArticleLocalService journalArticleService =
            JournalArticleLocalServiceUtil.getService();
    private final SimpleDateFormat sdf = new SimpleDateFormat(
            "dd-MM-yyyy HH:mm");

}