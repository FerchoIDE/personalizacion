package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.FileEntryApi;
import generatorviewclient.api.impl.JournalApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.FileUtil;
import generatorviewclient.util.FolderUtil;
import generatorviewclient.util.JsonUtil;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletResponse;
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
    private static final Log LOG = LogFactoryUtil.getLog(ValidateCodeHotel.class);

    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        Long userId = themeDisplay.getUserId();

        resourceResponse.setContentType("application/json");
        String body = null;
        try {
            body = FileUtil.getBuffer(resourceRequest.getReader());
        } catch (IOException e) {
            e.printStackTrace();
            resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                    Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
            try {
                JsonUtil.generateError(resourceResponse.getPortletOutputStream(), e.getMessage());
            } catch (IOException ex) {
                ex.printStackTrace();
            }
            return true;
        }
        LOG.info("step 0 "+ body);
        JSONObject jsonObject = new JSONObject(body);
        String brand = jsonObject.getString("brand");
        Long brandId = jsonObject.getLong("brandId");
        String codeHotel = jsonObject.getString("codeHotel");

        try {
            JSONObject jsonObjecResponse = new JSONObject();
            List<JournalArticle> result = new JournalApi().searchWebContentByCodeHotelFirstLevel(portletGroupId, "Hoteles", codeHotel);
            LOG.info("step 1 "+ result.size());
            if (result.isEmpty()) {
                Long parentFolder = new FileEntryApi().getBaseFolder(portletGroupId, brand, null);
                LOG.info("step 2 "+ parentFolder);
                Long folderHotel = FolderUtil.createFolderIfNotExist(portletGroupId, userId, codeHotel, "Folder by " + codeHotel, parentFolder);
                LOG.info("step 3 "+ folderHotel);
                FolderUtil.createFolderIfNotExist(portletGroupId, userId, ConstantUtil.FOLDER_ROOM_NAME, "Folder by Rooms " + codeHotel, folderHotel);
                FolderUtil.createFolderIfNotExist(portletGroupId, userId, ConstantUtil.FOLDER_FACILITY_NAME, "Folder by Facility " + codeHotel, folderHotel);
              //  FolderUtil.createFolder(portletGroupId, userId, "Destinations", "Folder by Destinations " + codeHotel, folderHotel);
                FolderUtil.createFolderIfNotExist(portletGroupId, userId, ConstantUtil.FOLDER_GENERIC_NAME, "Folder by Generics " + codeHotel, folderHotel);
                LOG.info("step 4  Created Folder");

                Long parentFolderJournal = new JournalApi().getBaseFolder(portletGroupId, brand, null);
                LOG.info("step 5 "+ parentFolderJournal);
                Long folderHotelJournal = FolderUtil.createFolderJournalIfNotExist(portletGroupId, userId, codeHotel, "Folder by " + codeHotel, parentFolderJournal);
                LOG.info("step 6 "+ folderHotelJournal);
                FolderUtil.createFolderJournalIfNotExist(portletGroupId, userId, ConstantUtil.FOLDER_ROOM_NAME, "Folder by Rooms " + codeHotel, folderHotelJournal);
                FolderUtil.createFolderJournalIfNotExist(portletGroupId, userId, ConstantUtil.FOLDER_FACILITY_NAME, "Folder by Facility " + codeHotel, folderHotelJournal);
               // FolderUtil.createFolderJournal(portletGroupId, userId, "Destinations", "Folder by Destinations " + codeHotel, folderHotelJournal);
                FolderUtil.createFolderJournalIfNotExist(portletGroupId, userId, ConstantUtil.FOLDER_GENERIC_NAME, "Folder by Generics " + codeHotel, folderHotelJournal);

                LOG.info("step 7  Created Folder Journal");

                Long categoryId = FolderUtil.createCategory(ConstantUtil.VOCABULARY_BRAND_ID,portletGroupId,codeHotel,"Category from "+codeHotel,userId,brandId);
                LOG.info("step 8 "+ categoryId);

                jsonObjecResponse.put("status", "OK");
                jsonObjecResponse.put("categoryId", categoryId);
            } else {
                jsonObjecResponse.put("status", "BAD");
                jsonObjecResponse.put("message", result.get(0).getTitleCurrentValue());
            }
            resourceResponse.getPortletOutputStream().write(jsonObjecResponse.toString().getBytes());
            return false;
        } catch (Exception e) {
            LOG.error(e);
            resourceResponse.setProperty(ResourceResponse.HTTP_STATUS_CODE,
                    Integer.toString(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));
            try {
                JsonUtil.generateError(resourceResponse.getPortletOutputStream(), e.getMessage());
            } catch (IOException ex) {
                ex.printStackTrace();
            }

        }
        return true;
    }

}
