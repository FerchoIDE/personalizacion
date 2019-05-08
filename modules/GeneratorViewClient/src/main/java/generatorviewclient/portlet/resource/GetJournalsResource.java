package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.model.JournalFolder;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.kernel.workflow.WorkflowConstants;
import generatorviewclient.api.impl.JournalApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
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
import java.util.LinkedList;
import java.util.List;

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

            String brand = jsonObject.getString("brand");
            String codeHotel = jsonObject.getString("codeHotel");
            List<JournalArticle> array = new LinkedList<>();
            if (jsonObject.has("folderId")) {

                // array = new JournalApi().getFilesByCurrentFolderAndName(portletGroupId,jsonObject.getLong("folderId"),"");
            } else if (jsonObject.has("nameFolder")) {
                // array = new JournalApi().getWCByName(portletGroupId,brand,jsonObject.getString("nameFolder"),codeHotel);
                //getWCByName
            } else {
                array = new JournalApi().getWebcontentRecursiveByType(portletGroupId, brand, codeHotel, "Habitación");
                //getListJournalFolders
            }
            JSONArray lsResult = new JSONArray();

            array.forEach(journalArticle -> {
                JSONObject mpObject = new JSONObject();
                mpObject.put("description", journalArticle.getDescriptionMap());
                mpObject.put("id", journalArticle.getId());
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
                    mpObject.put("path", fullPath(journalArticle.getFolder()));
                } catch (Exception ex) {

                }
                mpObject.put("all", mpObject.toString());
                lsResult.put(mpObject);

            });

//            System.out.println(new JSONArray(lsResult).toString());
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

    protected String fullPath(JournalFolder folder) {
        String folderName = folder.getName();
        JournalFolder parent = null;
        try {
            parent = folder.getParentFolder();
        } catch (PortalException e) {
            e.printStackTrace();
        }

        if (parent == null) {
            return "/" + folderName;
        } else {
            return fullPath(parent) + "/" + folderName;
        }
    }
}
