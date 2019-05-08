package generatorviewclient.portlet.resource;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.FileEntryApi;
import generatorviewclient.api.impl.JournalApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.FileUtil;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getFoldersJournal"
        },
        service = MVCResourceCommand.class
)
public class GetFoldersJournal implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        try {
            System.out.println("before service ");
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            System.out.println("--------portletGroupId===" + portletGroupId);

            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject =  new JSONObject(body);
            String brand = jsonObject.getString("brand");
            String codeHotel = jsonObject.getString("codeHotel");


            com.liferay.portal.kernel.json.JSONArray array =

                    //new JournalArticleServices().getFilesAndFolder(portletGroupId,"AQUA","AQC");
                    new JournalApi().getListJournalFolders(portletGroupId, brand,  codeHotel);

            // System.out.println("after  service ");
            //  System.out.println(array.toJSONString());

            resourceResponse.getPortletOutputStream().write(array.toJSONString().getBytes());


        } catch (Exception e) {
            System.out.println("------------------" + e.getMessage());
            e.printStackTrace();
        }
        return false;
    }
}
