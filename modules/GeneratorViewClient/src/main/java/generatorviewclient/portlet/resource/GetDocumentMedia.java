package generatorviewclient.portlet.resource;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.liferayservice.JournalArticleServices;
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

                array = new JournalArticleServices().getFilesByCurrentFolderAndName(portletGroupId,jsonObject.getLong("folderId"),"");
            }else if(jsonObject.has("nameFolder")){
                array = new JournalArticleServices().getFilesByName(portletGroupId,brand,jsonObject.getString("nameFolder"),codeHotel);
                //getWCByName
            }else{
                array =
                        // new JournalArticleServices().getFiles((portletGroupId,"AQUA","","AQC");//busqueda recursiva de archivos x M y CH
                        // new JournalArticleServices().getFilesByName((portletGroupId,"AQUA","","AQC","junior");//busqueda recursiva de folder y archivos x M, CH y NH
                        // new JournalArticleServices().getFolders((portletGroupId,"AQUA","","AQC");//busqueda recursiva de folder  x M y CH
                        // new JournalArticleServices().getFilesByCurrentFolder((portletGroupId,currentFolder);//busqueda recursiva de Files  x M y CH
                        // new JournalArticleServices().getFilesByByCurrentFolderAndName((portletGroupId,currentFolder,"junior");//busqueda recursiva de Files  x M y CH


                        //new JournalArticleServices().getFilesAndFolder(portletGroupId,"AQUA","AQC");
                        new JournalArticleServices().getFilesAndFolder(portletGroupId,brand,"",codeHotel);
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
