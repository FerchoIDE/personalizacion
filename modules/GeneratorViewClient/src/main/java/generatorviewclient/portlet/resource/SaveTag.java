package generatorviewclient.portlet.resource;

import com.liferay.asset.kernel.model.AssetTag;
import com.liferay.asset.kernel.service.AssetTagLocalServiceUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.kernel.workflow.WorkflowConstants;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.FileUtil;
import generatorviewclient.util.JsonUtil;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletResponse;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=saveTag"
        },
        service = MVCResourceCommand.class
)
public class SaveTag implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        resourceResponse.setContentType("application/json");

        System.out.println("before service SaveTag");
        try {
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            Long userId = themeDisplay.getUserId();

            if (userId == null || userId == 0) {
                JsonUtil.generateError(resourceResponse.getPortletOutputStream(), "Es requerido iniciar Sesion");
                return true;
            }

            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);
            String name = jsonObject.optString("name", null);

            ServiceContext serviceContext = new ServiceContext();
            serviceContext.setScopeGroupId(portletGroupId);
            serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);

            AssetTag assetTag = AssetTagLocalServiceUtil.addTag(userId, portletGroupId, name, serviceContext);
            JSONObject mpObject = new JSONObject();
            mpObject.put("id", assetTag.getTagId());
            mpObject.put("name", assetTag.getName());
            resourceResponse.getPortletOutputStream().write(mpObject.toString().getBytes());
            return false;
        } catch (Exception e) {
            System.out.println("Error------------------" + e.getMessage());
            resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                    Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
            try {
                JsonUtil.generateError(resourceResponse.getPortletOutputStream(), e.getMessage());
            } catch (Exception ex) {

            }
        }
        return true;
    }
}
