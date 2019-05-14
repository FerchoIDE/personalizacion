package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.JournalApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.FileUtil;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import java.io.IOException;
import java.util.List;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=validateCodeHotel"
        },
        service = MVCResourceCommand.class
)
public class ValidateCodeHotel implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();

        String body = null;
        try {
            body = FileUtil.getBuffer(resourceRequest.getReader());
        } catch (IOException e) {
            e.printStackTrace();
            throw new PortletException(e);
        }
        JSONObject jsonObject =  new JSONObject(body);
        String codeHotel = jsonObject.getString("codeHotel");

        try {
            JSONObject jsonObjecResponse = new JSONObject();
            List<JournalArticle> result = new JournalApi().searchWebContentByCodeHotelFirstLevel(portletGroupId,"hotel",codeHotel);
            if(result.isEmpty()){

                jsonObjecResponse.put("result","OK");
            }else{
                jsonObjecResponse.put("result","BAD");
                jsonObjecResponse.put("message",result.get(0).getTitle());
            }
            resourceResponse.getPortletOutputStream().write(jsonObjecResponse.toString().getBytes());
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            throw new PortletException(e);

        }
    }
}
