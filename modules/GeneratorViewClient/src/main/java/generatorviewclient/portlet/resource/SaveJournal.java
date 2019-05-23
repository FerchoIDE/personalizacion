package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
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
import java.io.OutputStream;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=saveJournal"
        },
        service = MVCResourceCommand.class
)
public class SaveJournal implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        try {
            System.out.println("before service SaveDocumentMedia");
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            Long userId = themeDisplay.getUserId();

            if (userId == null) {
                generateError(resourceResponse.getPortletOutputStream(), "Es requerido iniciar Sesion");
                return true;
            }
            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);

            Long folderId;
            if(jsonObject.getString("ddmStructure").equalsIgnoreCase("200950"))
                folderId = new JournalApi().getBaseFolder(portletGroupId,jsonObject.getString("brand"),null);
            else
                folderId = new JournalApi().getBaseFolder(portletGroupId,null,null);


            jsonObject.put("userId",userId);
            jsonObject.put("groupId",portletGroupId);
            jsonObject.put("folderId",folderId);
            System.out.println(jsonObject.toString());
            JournalArticle journalArticle = new JournalApi().saveWC(jsonObject.toString());
            return false;
        } catch (Exception e) {
            System.out.println("------------------" + e.getMessage());
            e.printStackTrace();
            try {
                generateError(resourceResponse.getPortletOutputStream(), e.getMessage());
            } catch (Exception ex) {
                ex.printStackTrace();
                throw new PortletException(ex);
            }
            return true;
        }
    }

    private void generateError(OutputStream outputStream, String errorMessage) throws IOException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("status", "BAD");
        jsonObject.put("errorMessage", errorMessage);
        outputStream.write(jsonObject.toString().getBytes());
    }
}
