package generatorviewclient.portlet.action;

import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalService;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.dynamic.data.mapping.util.DDMUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.JsonUtil;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.*;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=NewStructure"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientNewMVCRenderCommand
        implements MVCRenderCommand {

    DDMStructureLocalService structureLocalService =
            DDMStructureLocalServiceUtil.getService();

    @Override
    public String render(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws PortletException {
        if (structureLocalService == null)
            structureLocalService =
                    DDMStructureLocalServiceUtil.getService();

        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);

        String structureId = renderRequest.getParameter("structureId");
/*
String path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json";

if (structureId.equalsIgnoreCase("200950"))
	path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json";
else if (structureId.equalsIgnoreCase("39858"))
	path =
		"/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-promociones.json";
else if (structureId.equalsIgnoreCase("201291"))
	path = "/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-habitaion.json";*/
        try {
            DDMStructure ddmStructure = structureLocalService.getDDMStructure(
                    Long.valueOf(structureId));

            String jsonString = DDMUtil.getDDMFormJSONString(
                    ddmStructure.getFullHierarchyDDMForm());

           // System.out.println(jsonString);
            System.out.println(ddmStructure.getNameMap());
            System.out.println(ddmStructure.getModelClassName());

            Map map = new JsonUtil()
                    .loadFile(jsonString.getBytes("UTF-8"))
                    //.loadFile(path)
                    //.loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-promociones.json")

                    //.loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-habitaion.json")
                    .transformStructure(
                            ddmStructure.getNameMap(),
                            ddmStructure.getModelClassName());

            System.out.println(map);
            template.put("data", map);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        template.put("contextPath", renderRequest.getContextPath());
        Map<String, Boolean> collapseInfo = new HashMap<>();
        collapseInfo.put("accordionPrincipalHeading", false);
        collapseInfo.put("accordionGeneralHeading", true);
        template.put("collapseInfo", collapseInfo);
        template.put("structureId", structureId);

        template.put("brands", getBrands());
        template.put("hotels", getHotels());
        template.put("isOnLoad", true);
        template.put("hotelsXBrands", new LinkedList<>());


        return "NewStructure";
    }

    public List<AbstractMap.SimpleEntry> getBrands(){
        List<AbstractMap.SimpleEntry> result = new LinkedList<>();
        result.add(new AbstractMap.SimpleEntry("FI","Fiesta Inn"));
        result.add(new AbstractMap.SimpleEntry("FA","Fiesta Americana"));
        result.add(new AbstractMap.SimpleEntry("FAG","Grand Fiesta Americana"));
        result.add(new AbstractMap.SimpleEntry("EX","Explorean"));
        result.add(new AbstractMap.SimpleEntry("AQUA","Live Aqua"));
        return result;

    }
    public Map<String,List<AbstractMap.SimpleEntry>> getHotels(){
        Map<String,List<AbstractMap.SimpleEntry>> result = new HashMap<>();
        List<AbstractMap.SimpleEntry> lst1 = new LinkedList<>();
        lst1.add(new AbstractMap.SimpleEntry("AGP","AGP"));
        result.put("FI",lst1);

        List<AbstractMap.SimpleEntry> lst2 = new LinkedList<>();
        lst2.add(new AbstractMap.SimpleEntry("GAL","GAL"));
        lst2.add(new AbstractMap.SimpleEntry("HSA","HSA"));
        lst2.add(new AbstractMap.SimpleEntry("FAA","FAA"));
        lst2.add(new AbstractMap.SimpleEntry("FAV","FAV"));
        lst2.add(new AbstractMap.SimpleEntry("FAC","FAC"));
        lst2.add(new AbstractMap.SimpleEntry("FAM","FAM"));
        lst2.add(new AbstractMap.SimpleEntry("FXS","FXS"));
        lst2.add(new AbstractMap.SimpleEntry("FCC","FCC"));
        result.put("FA",lst2);


        List<AbstractMap.SimpleEntry> lst3 = new LinkedList<>();
        lst3.add(new AbstractMap.SimpleEntry("GPV","GPV"));
        lst3.add(new AbstractMap.SimpleEntry("FCB","FCB"));
        lst3.add(new AbstractMap.SimpleEntry("FLC","FLC"));
        lst3.add(new AbstractMap.SimpleEntry("FBC","FBC"));
        lst3.add(new AbstractMap.SimpleEntry("FGG","FGG"));
        result.put("FAG",lst3);

        return result;

    }
}