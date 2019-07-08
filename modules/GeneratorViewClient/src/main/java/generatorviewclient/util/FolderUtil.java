package generatorviewclient.util;

import com.liferay.asset.kernel.model.AssetCategory;
import com.liferay.asset.kernel.service.AssetCategoryLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.journal.model.JournalFolder;
import com.liferay.journal.service.JournalFolderLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.repository.model.Folder;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.LocaleUtil;

import javax.portlet.PortletException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public abstract class FolderUtil {

    public static Long createFolder(Long groupId, Long userId, String name, String description, long parentFolderId) throws PortletException {
        try {
            //ServiceContext serviceContext = ServiceContextFactory.getInstance(DLFolder.class.getName(), resourceRequest);
            ServiceContext serviceContext = new ServiceContext();
            Folder folder = DLAppLocalServiceUtil.addFolder(userId, groupId, parentFolderId, name, description, serviceContext);
            return folder.getFolderId();
        } catch (Exception e1) {
            e1.printStackTrace();
            throw new PortletException(e1);
        }
    }
    public static Long createFolderIfNotExist(Long groupId, Long userId, String name, String description, long parentFolderId) throws PortletException {
        try {
            //ServiceContext serviceContext = ServiceContextFactory.getInstance(DLFolder.class.getName(), resourceRequest);
            ServiceContext serviceContext = new ServiceContext();
            Folder folder = DLAppLocalServiceUtil.getFolder(groupId,parentFolderId, name);
            if(folder!=null)
                return folder.getFolderId();
            folder = DLAppLocalServiceUtil.addFolder(userId, groupId, parentFolderId, name, description, serviceContext);
            return folder.getFolderId();
        } catch (Exception e1) {
            e1.printStackTrace();
            throw new PortletException(e1);
        }
    }

    public static Long createFolderJournal(Long groupId, Long userId, String name, String description, long parentFolderId) throws PortletException {
        try {
            //ServiceContext serviceContext = ServiceContextFactory.getInstance(DLFolder.class.getName(), resourceRequest);
            ServiceContext serviceContext = new ServiceContext();
            JournalFolder folder = JournalFolderLocalServiceUtil.addFolder(userId, groupId, parentFolderId, name, description, serviceContext);
            return folder.getFolderId();
        } catch (Exception e1) {
            e1.printStackTrace();
            throw new PortletException(e1);
        }
    }

    public static Long createFolderJournalIfNotExist(Long groupId, Long userId, String name, String description, long parentFolderId) throws PortletException {
        try {
            //ServiceContext serviceContext = ServiceContextFactory.getInstance(DLFolder.class.getName(), resourceRequest);
            ServiceContext serviceContext = new ServiceContext();
            JournalFolder folder =JournalFolderLocalServiceUtil.fetchFolder(groupId, parentFolderId, name);
            if(folder!=null)
                return folder.getFolderId();
             folder = JournalFolderLocalServiceUtil.addFolder(userId, groupId, parentFolderId, name, description, serviceContext);
            return folder.getFolderId();
        } catch (Exception e1) {
            e1.printStackTrace();
            throw new PortletException(e1);
        }
    }

    public static Long createCategory(Long vocabularyId, Long groupId, String title, String description, Long userId, Long parentCategoryId) throws PortletException {

        Map<Locale, String> titleMap = new HashMap<Locale, String>();
        titleMap.put(LocaleUtil.fromLanguageId("es_ES"), title);
        titleMap.put(LocaleUtil.fromLanguageId("en_US"), title);

        Map<Locale, String> descriptionMap = new HashMap<Locale, String>();
        descriptionMap.put(LocaleUtil.fromLanguageId("es_ES"), description);
        descriptionMap.put(LocaleUtil.fromLanguageId("en_US"), description);

        String[] categoryProperties = {""};
        ServiceContext serviceContext = new ServiceContext();
        AssetCategory ac =AssetCategoryLocalServiceUtil.fetchCategory(groupId,parentCategoryId,title,vocabularyId);
        if(ac!=null)
            return ac.getCategoryId();
        try {
             ac = AssetCategoryLocalServiceUtil.
                    addCategory(
                            userId, groupId, parentCategoryId, titleMap, descriptionMap, vocabularyId, categoryProperties, serviceContext);
            return ac.getCategoryId();
        } catch (PortalException e) {
            e.printStackTrace();
            throw new PortletException(e);
        }
    }
}
