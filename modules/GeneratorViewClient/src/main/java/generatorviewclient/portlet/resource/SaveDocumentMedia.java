package generatorviewclient.portlet.resource;

import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.repository.model.Folder;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.FileEntryApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.FileUtil;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Iterator;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=saveDocument"
        },
        service = MVCResourceCommand.class
)
public class SaveDocumentMedia implements MVCResourceCommand {
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
            String brand = jsonObject.getString("brand");
            String codeHotel = jsonObject.getString("codeHotel");
            String description = jsonObject.getString("description");
            String newFolder = jsonObject.getString("newFolder");

            Long folderId = jsonObject.getLong("folderId");
            if (folderId == null) {
                folderId = new FileEntryApi().getBaseFolder(portletGroupId, brand, codeHotel);
            }

            if(newFolder!=null && !newFolder.isEmpty()){
                for(String folderName :newFolder.split("/")){
                   Folder folder = new FileEntryApi().createFolder(folderId,portletGroupId,folderName,folderName) ;
                   folderId = folder.getFolderId();
                }

            }
            JSONObject jsonFile = jsonObject.getJSONObject("file");
            System.out.println(jsonFile.getString("fileData"));

            com.liferay.portal.kernel.json.JSONObject resp = new FileEntryApi().saveFile(portletGroupId, userId, folderId,
                    jsonFile.getString("fileData"), jsonFile.getString("fileName"),
                    description, jsonFile.getString("fileType"));
            if (!resp.getString("status").equalsIgnoreCase("BAD")) {
                Folder folder = DLAppLocalServiceUtil.getFolder(folderId);
                String name="";
                Iterator<Folder> it = folder.getAncestors().iterator();
                while(it.hasNext()){
                    name=it.next().getName()+"/"+name;
                }
                name=name+"/"+folder.getName();
                resp.put("path", name);
                System.out.println(resp.toString());
                resourceResponse.getPortletOutputStream().write(resp.toString().getBytes());
                return false;
            } else {
                resourceResponse.getPortletOutputStream().write(resp.toString().getBytes());
                return true;
            }

        } catch (Exception e) {
            System.out.println("------------------" + e.getMessage());
            e.printStackTrace();
            try {
                generateError(resourceResponse.getPortletOutputStream(), e.getMessage());
            } catch (Exception ex) {

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
