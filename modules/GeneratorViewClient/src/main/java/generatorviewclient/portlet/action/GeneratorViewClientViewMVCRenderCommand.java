package generatorviewclient.portlet.action;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.JsonUtil;
import org.osgi.service.component.annotations.Component;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.HashMap;
import java.util.Map;

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

    @Override
    public String render(
            RenderRequest renderRequest, RenderResponse renderResponse) {

        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);


        Map map = new JsonUtil()
               // .loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json")
                .loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-promociones.json")

                //.loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-habitaion.json")
                .transformStructure();

        template.put("contextPath", renderRequest.getContextPath());
        Map<String,Boolean> collapseInfo = new HashMap<String,Boolean>();
        collapseInfo.put("accordionPrincipalHeading",false);
        collapseInfo.put("accordionGeneralHeading",true);
        template.put("collapseInfo",collapseInfo);
        template.put("data", map);
        return "View";
    }
}