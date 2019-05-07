package generatorviewclient.portlet.resource;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.FileUtil;
import generatorviewclient.api.impl.FileEntryApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getDocuments"
        },
        service = MVCResourceCommand.class
)
public class GetDocumentMedia implements MVCResourceCommand {
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
            com.liferay.portal.kernel.json.JSONArray array;
            if(jsonObject.has("folderId")){

                array = new FileEntryApi().getFilesByCurrentFolderAndName(portletGroupId,jsonObject.getLong("folderId"),"");
            }else if(jsonObject.has("nameFolder")){
                array = new FileEntryApi().getFilesByName(portletGroupId,brand,jsonObject.getString("nameFolder"),codeHotel);
                //getWCByName
            }else{
                array =
                       new FileEntryApi().getFilesAndFolder(portletGroupId,brand,"",codeHotel);
                //getListJournalFolders

            }
            resourceResponse.getPortletOutputStream().write(array.toJSONString().getBytes());

        } catch (Exception e) {
            System.out.println("------------------"+e.getMessage());
            e.printStackTrace();
        }
        return false;
    }
}
