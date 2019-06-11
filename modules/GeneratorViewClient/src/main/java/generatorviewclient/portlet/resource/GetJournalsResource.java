package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.model.JournalFolder;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.kernel.workflow.WorkflowConstants;
import generatorviewclient.api.impl.FileEntryApi;
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
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getJournals"
        },
        service = MVCResourceCommand.class
)
public class GetJournalsResource implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        System.out.println("--------------+++++++++------");
        try {
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject = new JSONObject(body);
            System.out.println(jsonObject);
            resourceResponse.setCharacterEncoding("UTF-8");
            resourceResponse.setContentType("application/json");

           //String brand = jsonObject.getString("brand");
            Long brand = jsonObject.optLong("brand",0L);
           // String codeHotel = jsonObject.getString("codeHotel");
            Long codeHotel = jsonObject.optLong("codeHotel",0L);
            String nameField = jsonObject.getString("nameField");

            Long categoryId=0L;
            if(codeHotel!=null && codeHotel!=0L)
                categoryId = codeHotel;
            else if(brand!=null && brand!=0L)
                categoryId = brand;



          /* if(ConstantUtil.isDestination(nameField) && folderId == null)
               folderId =ConstantUtil.FOLDER_DESTINATION_ID;

            if (folderId == null) {
                folderId = new JournalApi().getBaseFolder(portletGroupId, brand, codeHotel);
            }

           */


            //    jsonObject.put("folderId",ConstantUtil.FOLDER_DESTINATION_ID);

            List<JournalArticle> array = new LinkedList<>();
            /*
            if (jsonObject.has("folderId")) {
                if(ConstantUtil.isFacility(nameField)){
                    array = new JournalApi().getWebcontentRecursiveByTypeFacilities(portletGroupId, jsonObject.getLong("folderId"), ConstantUtil.getStructureIdFacility());
                }else {
                    array = new JournalApi().getWebcontentRecursiveByType(portletGroupId, jsonObject.getLong("folderId"), ConstantUtil.getStructureId().get(nameField));
                }
            } else if (jsonObject.has("nameFolder")) {
                if(ConstantUtil.isFacility(nameField)){
                    array = new JournalApi().getWCAndJournalFolderByNameFacilities(portletGroupId, brand, codeHotel, jsonObject.getString("nameFolder"), ConstantUtil.getStructureIdFacility());
                }else {
                    array = new JournalApi().getWCAndJournalFolderByName(portletGroupId, brand, codeHotel, jsonObject.getString("nameFolder"), ConstantUtil.getStructureId().get(nameField));
                }
                //getWCByName
            } else {
                if(ConstantUtil.isFacility(nameField)){
                    array = new JournalApi().getWebcontentRecursiveByTypesFacilities(portletGroupId, brand, codeHotel, ConstantUtil.getStructureIdFacility());
                }else {
                   // array = new JournalApi().getWebcontentRecursiveByType(portletGroupId, brand, codeHotel, ConstantUtil.getStructureId().get(nameField));
                    array = new JournalApi().getWebContentsByCategoryIdAndType(portletGroupId, brand, codeHotel, ConstantUtil.getStructureId().get(nameField));
                }
                //getListJournalFolders
            }*/

            if(jsonObject.has("folderId")) {
                categoryId = jsonObject.getLong("folderId");
            }



            Long structureId =  ConstantUtil.getStructureId().get(nameField);
            /*if(structureId== ConstantUtil.DESTINATION_STRUCTURE_ID ||
            structureId == ConstantUtil.RATE_STRUCTURE_ID)
                categoryId = 0L;*/
            if(ConstantUtil.isFacility(nameField)){
                if (jsonObject.has("nameFolder")) {
                    categoryId = 0L;
                    array = new JournalApi().getWebContentsByNameCategoryIdAndTypefacility(portletGroupId, categoryId, ConstantUtil.getStructureIdFacility(), jsonObject.getString("nameFolder"));
                } else {
                    array = new JournalApi().getWebContentsCategoryAndTypeFacility(portletGroupId, categoryId, ConstantUtil.getStructureIdFacility());
                }

            }else {

                if (jsonObject.has("nameFolder")) {
                    categoryId = 0L;
                    array = new JournalApi().getWebContentsByNameCategoryIdAndType(portletGroupId, categoryId, structureId, jsonObject.getString("nameFolder"));
                } else {
                    array = new JournalApi().getWebContentsByCategoryIdAndType(portletGroupId, categoryId, structureId);
                }
            }
            System.out.println("categoryId==="+categoryId);


            JSONArray lsResult = new JSONArray();

            array.forEach(journalArticle -> {
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
                lsResult.put(mpObject);

            });
            resourceResponse.getPortletOutputStream().write(lsResult.toString().getBytes());
        } catch (Exception e) {
            e.printStackTrace();
            try {
                resourceResponse.getWriter().write(e.getMessage());
            } catch (IOException e1) {
                e1.printStackTrace();
            }
            return true;
        }
        return false;
    }


}
