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
import javax.servlet.http.HttpServletResponse;

import static generatorviewclient.util.JsonUtil.generateError;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=deleteJournal"
        },
        service = MVCResourceCommand.class
)
public class DeleteJournal implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        try {
            resourceResponse.setContentType("application/json");
            System.out.println("before service DeleteJournal");
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            Long userId = themeDisplay.getUserId();

            if (userId == null || userId == 0) {
                resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                        Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
                generateError(resourceResponse.getPortletOutputStream(), "Es requerido iniciar Sesion");
                return true;
            }
            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);
            String articleId = jsonObject.getString("articleId");
            JournalArticle journalArticle = new JournalApi().moveToTrash(userId,portletGroupId,articleId);
            if(journalArticle!=null)
                resourceResponse.getPortletOutputStream().write("{\"status\":\"OK\"}".getBytes());
            else
                resourceResponse.getPortletOutputStream().write("{\"status\":\"BAD\"}".getBytes());
            return false;
        }catch(Exception ex){
            resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                    Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
            try {
                generateError(resourceResponse.getPortletOutputStream(), ex.getMessage());
            } catch (Exception exi) {
                exi.printStackTrace();
                throw new PortletException(exi);
            }
        }

            return true;
    }
    }
