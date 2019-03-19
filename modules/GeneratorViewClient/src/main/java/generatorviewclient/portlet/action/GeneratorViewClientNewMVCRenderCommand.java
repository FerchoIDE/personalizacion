package generatorviewclient.portlet.action;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.JsonUtil;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=NewStructure"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientNewMVCRenderCommand
        implements MVCRenderCommand  {

    @Override
    public String render(RenderRequest renderRequest, RenderResponse renderResponse) throws PortletException {
        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);
        System.out.println(renderRequest);
        Enumeration enu = renderRequest.getAttributeNames();
        while(enu.hasMoreElements())
            System.out.println(enu.nextElement());
        Enumeration enu1 = renderRequest.getParameterNames();
        while(enu1.hasMoreElements())
            System.out.println(enu1.nextElement());
String structureId=renderRequest.getParameter("structureId");

String path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json";
if(structureId.equalsIgnoreCase("200950"))
    path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json";
else if(structureId.equalsIgnoreCase("39858"))
    path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-promociones.json";
else if(structureId.equalsIgnoreCase("201291"))
    path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-habitaion.json";
            Map map = new JsonUtil()
                 .loadFile(path)
                //.loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-promociones.json")

                //.loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-habitaion.json")
                .transformStructure();

        template.put("contextPath", renderRequest.getContextPath());
        Map<String,Boolean> collapseInfo = new HashMap<String,Boolean>();
        collapseInfo.put("accordionPrincipalHeading",false);
        collapseInfo.put("accordionGeneralHeading",true);
        template.put("collapseInfo",collapseInfo);
        template.put("data", map);
        return "NewStructure";
    }
}
