package generatorviewclient.portlet.action;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalService;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.JsonUtil;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @author kelceyguillenbejarano
 */
@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=View",
                "mvc.command.name=/"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientViewMVCRenderCommand
        implements MVCRenderCommand {


    private JournalArticleLocalService journalArticleService= JournalArticleLocalServiceUtil.getService();
    private final SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm");

    @Override
    public String render(
            RenderRequest renderRequest, RenderResponse renderResponse) {
        List<String> keysLst = Arrays.asList("200950","201291","39858","48306","200191","48316","200204");


        Map<String,List<Map<String,String>>> mpResult = keysLst.stream().map(s -> {
            String[] keys = new String[1];
            keys[0] = s;
            List<Map<String,String>> lstElement = new LinkedList<>();
            List<JournalArticle> lst =journalArticleService.getStructureArticles(keys);
            if(lst!=null) {
                lst.forEach(journalArticle -> {
                    boolean isLast = false;
                    try {
                        isLast = journalArticleService.isLatestVersion(journalArticle.getGroupId(), journalArticle.getArticleId(), journalArticle.getVersion(), journalArticle.getStatus());
                    } catch (Exception ex) {
                    }
                    if (isLast) {
                        Map<String, String> mapElement = new HashMap<>();
                        try {
                            if (s.equalsIgnoreCase("200950"))
                                mapElement.put("marca", journalArticle.getFolder().getName());
                            else
                                mapElement.put("marca", journalArticle.getFolder().getParentFolder().getName());

                        } catch (Exception ex) {
                        }

                        mapElement.put("id", journalArticle.getArticleId());
                        mapElement.put("title", journalArticle.getTitle(journalArticle.getDefaultLanguageId()));
                        mapElement.put("version", String.valueOf(journalArticle.getVersion()));
                        mapElement.put("lastUpdated", sdf.format(journalArticle.getModifiedDate()));
                        lstElement.add(mapElement);
                    }

                });
            }
            return new AbstractMap.SimpleEntry<>(s, lstElement);
        }).collect(Collectors.toMap(AbstractMap.SimpleEntry::getKey, AbstractMap.SimpleEntry::getValue));


        Map<String,String> mapHeader = new HashMap<>();
        mapHeader.put("id","Identificador");
        mapHeader.put("title","Titulo");
        mapHeader.put("version","Versión");
        mapHeader.put("marca","Marca");
        mapHeader.put("lastUpdated","Fecha Modificación");



        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);
        template.put("contextPath", renderRequest.getContextPath());
        template.put("data",mpResult);
        template.put("header",mapHeader);
        template.put("keys",Arrays.asList("id","title","version","marca","lastUpdated"));

        PortletURL navigationURL = renderResponse.createRenderURL();

        navigationURL.setParameter("mvcRenderCommandName", "NewStructure");

        template.put("navigationNewURL", navigationURL.toString());

        return "View";

    }
}