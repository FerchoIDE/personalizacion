package generatorviewclient.portlet.resource;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.liferayservice.JournalArticleServices;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getFoldersMedia"
        },
        service = MVCResourceCommand.class
)
public class GetFoldersMedia implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        try {
            System.out.println("before service ");
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            System.out.println("--------portletGroupId===" + portletGroupId);


            com.liferay.portal.kernel.json.JSONArray array =
                    // new JournalArticleServices().getFiles((portletGroupId,"AQUA","","AQC");//busqueda recursiva de archivos x M y CH
                    // new JournalArticleServices().getFilesByName((portletGroupId,"AQUA","","AQC","junior");//busqueda recursiva de folder y archivos x M, CH y NH
                    // new JournalArticleServices().getFolders((portletGroupId,"AQUA","","AQC");//busqueda recursiva de folder  x M y CH
                    // new JournalArticleServices().getFilesByCurrentFolder((portletGroupId,currentFolder);//busqueda recursiva de Files  x M y CH
                    // new JournalArticleServices().getFilesByByCurrentFolderAndName((portletGroupId,currentFolder,"junior");//busqueda recursiva de Files  x M y CH


                    //new JournalArticleServices().getFilesAndFolder(portletGroupId,"AQUA","AQC");
                    new JournalArticleServices().getListFolders(portletGroupId, "AQUA",  "AQC");

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
