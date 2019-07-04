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
import javax.servlet.http.HttpServletResponse;
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
            resourceResponse.setContentType("application/json");

            System.out.println("before service SaveDocumentMedia");
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            Long userId = themeDisplay.getUserId();

            if (userId == null || userId==0) {
                generateError(resourceResponse.getPortletOutputStream(), "Es requerido iniciar Sesion");
                return true;
            }

            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);
            String brand = jsonObject.optString("brand",null);
            String codeHotel = jsonObject.optString("codeHotel",null);
            String description = jsonObject.getString("description");
            String newFolder = jsonObject.getString("newFolder");

            Long folderId = jsonObject.optLong("folderId",0L);
            if (folderId == null || folderId==0L) {
                folderId = new FileEntryApi().getBaseFolder(portletGroupId, brand, codeHotel);
            }

            if(newFolder!=null && !newFolder.isEmpty()){
                for(String folderName :newFolder.split("/")){
                    if(folderName==null || folderName.isEmpty())
                        throw new Exception("La ruta no debe iniciar con \"/\", y no se debe tener separadores \"/\" juntos");
                   Folder folder = new FileEntryApi().createIfNoExistFolder(folderId,portletGroupId,folderName,folderName) ;
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
                resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                        Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
                resourceResponse.getPortletOutputStream().write(resp.toString().getBytes());
               return true;
            }

        } catch (Exception e) {
            System.out.println("Error------------------" + e.getMessage());
            e.printStackTrace();
            String errorMessage = e.getMessage();
            if(e instanceof com.liferay.document.library.kernel.exception.FolderNameException){
                errorMessage="Error en el nombre del Folder";
            }else if(e instanceof com.liferay.document.library.kernel.exception.DuplicateFolderNameException){
                errorMessage="El nombre del Folder ya existe \""+e.getMessage()+"\"";
            }else if(errorMessage==null || errorMessage.isEmpty()){
                errorMessage=e.toString();
            }
            resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                    Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
           // throw new PortletException(e.getMessage(),e);
            try {
                generateError(resourceResponse.getPortletOutputStream(), errorMessage);
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
