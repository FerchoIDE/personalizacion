package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.kernel.workflow.WorkflowConstants;
import generatorviewclient.api.impl.JournalApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.FileUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;

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

            if (userId == null || userId == 0) {
                generateError(resourceResponse.getPortletOutputStream(), "Es requerido iniciar Sesion");
                return true;
            }
            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);

            String ddmStructure = jsonObject.getString("ddmStructure");
            Long folderId;
            if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.ROOM_STRUCTURE_KEY))) {
                folderId = new JournalApi().getBaseFolder(portletGroupId, jsonObject.getString("brand"), jsonObject.getString("hotel"));
                folderId = new JournalApi().getBaseFolderByName(portletGroupId, folderId, ConstantUtil.FOLDER_ROOM_NAME);
            } else if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.GENERIC_STRUCTURE_KEY))) {
                folderId = new JournalApi().getBaseFolder(portletGroupId, jsonObject.getString("brand"), jsonObject.getString("hotel"));
                folderId = new JournalApi().getBaseFolderByName(portletGroupId, folderId, ConstantUtil.FOLDER_GENERIC_NAME);
            } else if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.BAR_STRUCTURE_KEY)) ||
                    ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.RESTAURANT_STRUCTURE_KEY)) ||
                    ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.SPA_STRUCTURE_KEY)) ||
                    ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.GYM_STRUCTURE_KEY)) ||
                    ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.FACILITY_STRUCTURE_KEY)) ||
                    ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.KIDSCLUB_STRUCTURE_KEY)) ||
                    ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.MEETING_STRUCTURE_KEY))) {
                folderId = new JournalApi().getBaseFolder(portletGroupId, jsonObject.getString("brand"), jsonObject.getString("hotel"));
                folderId = new JournalApi().getBaseFolderByName(portletGroupId, folderId, ConstantUtil.FOLDER_FACILITY_NAME);

            } else if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.HOTEL_STRUCTURE_KEY)))
                folderId = new JournalApi().getBaseFolder(portletGroupId, jsonObject.getString("brand"), jsonObject.getString("hotel"));
            else if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.BRAND_STRUCTURE_KEY)))
                folderId = new JournalApi().getBaseFolder(portletGroupId, jsonObject.getString("brand"), null);
            else if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.RATE_STRUCTURE_KEY))) {
                folderId = ConstantUtil.FOLDER_RATES_ID;
                folderId = new JournalApi().getBaseFolderByName(portletGroupId, folderId,jsonObject.getString("brand"));
            }
            else if (ddmStructure.equalsIgnoreCase(String.valueOf(ConstantUtil.DESTINATION_STRUCTURE_KEY)))
                folderId = ConstantUtil.FOLDER_DESTINATION_ID;
            else {
                generateError(resourceResponse.getPortletOutputStream(), "No esta definida la estructura a guardar");
                return true;
            }


            jsonObject.put("userId", userId);
            jsonObject.put("groupId", portletGroupId);
            jsonObject.put("folderId", folderId);

            if(jsonObject.has("brandId")){
                Long brandId = jsonObject.optLong("brandId");
                if(brandId!=0)
                    jsonObject.getJSONArray("categories").put(brandId);
                else{
                    JSONArray jsonArray = jsonObject.optJSONArray("brandId");
                    if(jsonArray!=null){
                        jsonArray.forEach(o ->jsonObject.getJSONArray("categories").put(o) );
                    }
                }

            }
            if(jsonObject.has("hotelId")){
                jsonObject.getJSONArray("categories").put(jsonObject.getLong("hotelId"));
            }

            System.out.println(jsonObject.toString());

            JournalArticle journalArticle = new JournalApi().saveWC(jsonObject);
            if (journalArticle == null) {
                generateError(resourceResponse.getPortletOutputStream(), "No se pudo guardar el contenido");
            }

            JSONObject mpObject = new JSONObject();
            mpObject.put("description", journalArticle.getDescriptionMap());
            mpObject.put("id", journalArticle.getResourcePrimKey());
            mpObject.put("image", journalArticle.getArticleImageURL(themeDisplay));
            mpObject.put("title", journalArticle.getTitleCurrentValue());
            long _month = Period.between(journalArticle.getStatusDate().toInstant().atZone(ZoneId.systemDefault())
                    .toLocalDate(), LocalDate.now()).toTotalMonths();
            mpObject.put("date", String.format("%d meses", _month));
            mpObject.put("status", WorkflowConstants.getStatusLabel(journalArticle.getStatus()));
            mpObject.put("user", journalArticle.getStatusByUserName());
            try {
                mpObject.put("structureName", journalArticle.getDDMStructure().getNameCurrentValue());
                mpObject.put("structureId", journalArticle.getDDMStructure().getStructureId());
            } catch (Exception e) {
            }


            try {
                mpObject.put("path", ConstantUtil.fullPath(journalArticle.getFolder()));
            } catch (Exception ex) {

            }
            mpObject.put("all", mpObject.toString());
            resourceResponse.getPortletOutputStream().write(mpObject.toString().getBytes());
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
