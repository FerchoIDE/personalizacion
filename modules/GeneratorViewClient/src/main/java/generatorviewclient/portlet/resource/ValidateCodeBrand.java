package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.FileEntryApi;
import generatorviewclient.api.impl.JournalApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.FileUtil;
import generatorviewclient.util.FolderUtil;
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
                "mvc.command.name=validateCodeBrand"
        },
        service = MVCResourceCommand.class
)
public class ValidateCodeBrand implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        Long userId = themeDisplay.getUserId();
        String body = null;
        try {
            body = FileUtil.getBuffer(resourceRequest.getReader());
        } catch (IOException e) {
            e.printStackTrace();
            throw new PortletException(e);
        }
        System.out.println("step 0 " + body);
        JSONObject jsonObject = new JSONObject(body);
        String brand = jsonObject.getString("brand");

        try {
            JSONObject jsonObjecResponse = new JSONObject();
            List<JournalArticle> result = new JournalApi().searchWebContentByCodeHotelFirstLevel(portletGroupId, "Marcas", brand);
            System.out.println("step 1 " + result.size());
            if (result.isEmpty()) {

                Long parentFolder = new FileEntryApi().getBaseFolder(portletGroupId, null, null);
                System.out.println("step 2 " + parentFolder);
                Long folderBrand = FolderUtil.createFolder(portletGroupId, userId, brand, "Folder by " + brand, parentFolder);
                System.out.println("step 3 " + folderBrand);
                FolderUtil.createFolder(portletGroupId, userId, ConstantUtil.FOLDER_RATE_NAME, "Folder by Rates " + brand, folderBrand);
                System.out.println("step 4  Created Folder");

                Long parentFolderJournal = new JournalApi().getBaseFolder(portletGroupId, null, null);
                System.out.println("step 5 " + parentFolderJournal);
                Long folderBrandJournal = FolderUtil.createFolderJournal(portletGroupId, userId, brand, "Folder by " + brand, parentFolderJournal);
                System.out.println("step 6 " + folderBrandJournal);
                FolderUtil.createFolderJournal(portletGroupId, userId, brand, "Folder by Rates " + brand, ConstantUtil.FOLDER_RATES_ID);

                System.out.println("step 7  Created Folder Journal");

                Long categoryId = FolderUtil.createCategory(ConstantUtil.VOCABULARY_BRAND_ID, portletGroupId, brand, "Category from " + brand, userId, 0L);
                System.out.println("step 8 " + categoryId);

                jsonObjecResponse.put("status", "OK");
                jsonObjecResponse.put("categoryId", categoryId);
            } else {
                jsonObjecResponse.put("status", "BAD");
                jsonObjecResponse.put("message", result.get(0).getTitleCurrentValue());
            }
            resourceResponse.getPortletOutputStream().write(jsonObjecResponse.toString().getBytes());
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            throw new PortletException(e);

        }
    }
}
