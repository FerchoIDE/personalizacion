package generatorviewclient.portlet.resource;

import com.liferay.asset.kernel.model.AssetTag;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.AssetTagsApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import java.util.List;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getTags"
        },
        service = MVCResourceCommand.class
)
public class GetTags implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        System.out.println("GetTags Service");
        ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        System.out.println("--------portletGroupId===" + portletGroupId);
        String nameTag = resourceRequest.getParameter("nameTag");
        JSONArray targResult = JSONFactoryUtil.createJSONArray();
        try {
            List<AssetTag> result =  new AssetTagsApi().getTagsByname(portletGroupId,nameTag);
            result.forEach(assetTag -> {
                JSONObject tagObject = JSONFactoryUtil.createJSONObject();
                tagObject.put("id",assetTag.getTagId());
                tagObject.put("name",assetTag.getName());
                targResult.put(tagObject);
            });

            resourceResponse.getPortletOutputStream().write(targResult.toJSONString().getBytes());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
}
