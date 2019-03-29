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

import java.util.HashMap;
import java.util.Map;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.osgi.service.component.annotations.Component;

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

		Template template = (Template)renderRequest.getAttribute(
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

			System.out.println(jsonString);
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

			template.put("data", map);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		template.put("contextPath", renderRequest.getContextPath());
		Map<String, Boolean> collapseInfo = new HashMap<>();
		collapseInfo.put("accordionPrincipalHeading", false);
		collapseInfo.put("accordionGeneralHeading", true);
		template.put("collapseInfo", collapseInfo);

		return "NewStructure";
	}

}