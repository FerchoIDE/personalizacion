package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import com.liferay.portal.kernel.util.LocaleUtil;
import generatorviewclient.constants.Contants;

import com.liferay.asset.kernel.model.AssetCategory;
import com.liferay.asset.kernel.model.AssetTag;
import com.liferay.asset.kernel.service.AssetCategoryLocalServiceUtil;
import com.liferay.asset.kernel.service.AssetTagLocalServiceUtil;
import com.liferay.document.library.kernel.model.DLFileEntry;
import com.liferay.document.library.kernel.model.DLFolder;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFolderLocalServiceUtil;
import com.liferay.dynamic.data.mapping.model.DDMForm;
import com.liferay.dynamic.data.mapping.model.DDMFormField;
import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.model.JournalFolder;
import com.liferay.journal.model.impl.JournalArticleImpl;
import com.liferay.journal.model.impl.JournalFolderImpl;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.service.JournalArticleResourceLocalServiceUtil;
import com.liferay.journal.service.JournalFolderLocalServiceUtil;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQueryFactoryUtil;
import com.liferay.portal.kernel.dao.orm.PropertyFactoryUtil;
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.PortalClassLoaderUtil;
import com.liferay.portal.kernel.util.PwdGenerator;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.workflow.WorkflowConstants;
import generatorviewclient.util.XMLUtil;

public class QueriesLiferayApi {
	   private static final Log log = LogFactoryUtil.getLog(QueriesLiferayApi.class);
	   
	   
	   protected List<AssetTag> getTags(Long groupId,String name) throws PortalException{
		   DynamicQuery queryTag = DynamicQueryFactoryUtil.forClass(AssetTag.class, "assetTag",PortalClassLoaderUtil.getClassLoader());
		   queryTag.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		   queryTag.add( RestrictionsFactoryUtil.ilike("name",new StringBuilder("%").append(name).append("%").toString()));
	       List<AssetTag> tagsResults = AssetTagLocalServiceUtil.dynamicQuery(queryTag);		
	       return tagsResults;
	   }
	   
	 
	   
	   protected List<JournalArticle> getFoldersWCByNameAndType(Long groupId,Long parent,String namefile,String type,List<JournalArticle> journalArray) throws PortalException{
	        List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	            for (JournalFolder object : listFolders) {
	                if(getWCByJournalFolderAndTypeAndName(groupId, object.getFolderId(),type,namefile)!= null && !getWCByJournalFolderAndTypeAndName(groupId, object.getFolderId(),type,namefile).isEmpty()){
	                    for (JournalArticle ja : getWCByJournalFolderAndTypeAndName(groupId, object.getFolderId(),type,namefile)) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    }
	                }
	               // if(getFoldersWCByNameAndType(groupId,object.getFolderId(),namefile,type,journalArray)!= null && !getFoldersWCByNameAndType(groupId,object.getFolderId(),namefile,type,journalArray).isEmpty()){
	                if(!Validator.isNull(object.getFolderId())) { 
	                getFoldersWCByNameAndType(groupId,object.getFolderId(),namefile,type,journalArray);
	                }
	            }
	        }
	        return journalArray;
	    }

	    protected List<JournalArticle> getFoldersWCByName(Long groupId,Long parent,String namefile,List<JournalArticle> journalArray) throws PortalException{
	        List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	            for (JournalFolder object : listFolders) {
	                if(getWCByJournalFolderAndName(groupId, object.getFolderId(),namefile)!= null && !getWCByJournalFolderAndName(groupId, object.getFolderId(),namefile).isEmpty()){
	                    for (JournalArticle ja : getWCByJournalFolderAndName(groupId, object.getFolderId(),namefile)) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    }
	                }
	               // if(getFoldersWCByName(groupId,object.getFolderId(),namefile,journalArray)!= null && !getFoldersWCByName(groupId,object.getFolderId(),namefile,journalArray).isEmpty()){
	                if(!Validator.isNull(object.getFolderId())){
	                	getFoldersWCByName(groupId,object.getFolderId(),namefile,journalArray);
	                }
	            }
	        }
	        return journalArray;
	    }

	    protected List<JournalArticle> getFoldersWCByNameSI(Long groupId,Long parent,String namefile,Long structureId,List<JournalArticle> journalArray) throws PortalException{
	        List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	            for (JournalFolder object : listFolders) {
	                if(getWCByJournalFolderAndNameSI(groupId, object.getFolderId(),namefile,structureId)!= null && !getWCByJournalFolderAndNameSI(groupId, object.getFolderId(),namefile,structureId).isEmpty()){
	                    for (JournalArticle ja : getWCByJournalFolderAndNameSI(groupId, object.getFolderId(),namefile,structureId)) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    }
	                }
	               // if(getFoldersWCByNameSI(groupId,object.getFolderId(),namefile,structureId,journalArray)!= null && !getFoldersWCByNameSI(groupId,object.getFolderId(),namefile,structureId,journalArray).isEmpty()){
	                if(!Validator.isNull(object.getFolderId()) ) {
	                	getFoldersWCByNameSI(groupId,object.getFolderId(),namefile,structureId,journalArray);
	                }
	            }
	        }
	        return journalArray;
	    }


	    /*Secciï¿½n de journal folders*/

	    protected Long getFolderWC(Long siteID,String nameFolder,Long parentFolder){
	        List<Long> listIdFolders = new ArrayList<>();
	        DynamicQuery queryJournalFolder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	        queryJournalFolder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
	        queryJournalFolder.add( RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
	        queryJournalFolder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	        List<com.liferay.journal.model.impl.JournalFolderImpl> journalfolderResults = JournalArticleResourceLocalServiceUtil.dynamicQuery(queryJournalFolder);
	        for (com.liferay.journal.model.impl.JournalFolderImpl dlFolder : journalfolderResults) {
	            listIdFolders.add(dlFolder.getFolderId());
	        }
	        return listIdFolders.get(0);
	    }

	    protected JournalArticle copyJournalByApi(Long userId,Long groupId,String oldArticleId,String newArticleId) throws PortalException{
	        return JournalArticleLocalServiceUtil.copyArticle(userId, groupId, oldArticleId, newArticleId, true, 1.0);

	    }

	    	protected List<JournalFolder> getSubFolderByJournalFolderParent(Long groupId,Long idFolder) throws PortalException{
	          	return  JournalFolderLocalServiceUtil.getFolders(groupId, idFolder);
	        } 	     
	    
	    protected List<JournalFolder> getALLJournalFolders(Long siteID){
	    	DynamicQuery queryJournalFolder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	    	queryJournalFolder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	    	List<JournalFolder> journalfolderResults = JournalArticleResourceLocalServiceUtil.dynamicQuery(queryJournalFolder);		
	    	return journalfolderResults;
	    }
	    protected JournalFolderImpl getJournalFolderByName(Long siteID,Long parentFolder,String nameFolder){
	        DynamicQuery queryJournalFolder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	        queryJournalFolder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
	        queryJournalFolder.add( RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
	        queryJournalFolder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	        List<com.liferay.journal.model.impl.JournalFolderImpl> journalfolderResults = JournalArticleResourceLocalServiceUtil.dynamicQuery(queryJournalFolder);
	        return journalfolderResults.get(0);
	    }

	    protected List<JournalArticleImpl> getWCByJournalFolderAndTypeStructure(Long groupId,Long folderId,String structureKey) throws PortalException{
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.eq("DDMStructureKey", structureKey));
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }
	    
	    protected List<JournalArticleImpl> getWCByJournalFolderAndTypeStructureTitle(Long groupId,Long folderId,String structureKey,String title) throws PortalException{
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.eq("DDMStructureKey", structureKey));
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        queryJournal.add(RestrictionsFactoryUtil.ilike("urlTitle", new StringBuilder("%").append(title).append("%").toString()));

	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }

	    protected List<JournalArticleImpl> getWCByJournalFolderAndTypeStructureTitleStructureId(Long groupId,Long folderId,Long structureId,String title) throws PortalException{
	    	DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(structureId);
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.eq("structureId", structureId));
		    queryJournal.add( RestrictionsFactoryUtil.eq("DDMStructureKey",ddmStructure.getStructureKey()));	   
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        queryJournal.add(RestrictionsFactoryUtil.ilike("urlTitle", new StringBuilder("%").append(title).append("%").toString()));

	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }
	    
	    //Ancla
	    protected List<JournalArticleImpl> getWCByJournalFolderAndTypeStructureId(Long groupId,Long folderId,Long structureId) throws PortalException{
	        DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(structureId);
	    	DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add( RestrictionsFactoryUtil.eq("DDMStructureKey",ddmStructure.getStructureKey()));	   
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }

	    
	    protected List<JournalArticle> getWCByJournalFolders(Long groupId,Long parentFolderId) throws PortalException{
	    	return JournalArticleLocalServiceUtil.getArticles(groupId, parentFolderId);
	    }
	    
	    protected List<JournalArticle> getWCByJournalFolder(Long groupId,Long folderId) throws PortalException{
	    	  DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
		        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		        List<JournalArticle> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
		        if(journalResults.size()>0){
		            return journalResults;
		        }
		        return new ArrayList<>();
	    }

	    //getWCByJournalFolderAndName
	    protected List<JournalArticleImpl> getWCByJournalFolderAndName(Long groupId,Long folderId,String structureKey,String namefile) throws PortalException{
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.ilike("urlTitle", new StringBuilder("%").append(namefile).append("%").toString()));
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }


	    protected List<JournalArticleImpl> getWCByJournalFolderAndTypeAndName(Long groupId,Long folderId,String structureKey,String namefile) throws PortalException{
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.ilike("urlTitle", new StringBuilder("%").append(namefile).append("%").toString()));
	        queryJournal.add(RestrictionsFactoryUtil.eq("DDMStructureKey", structureKey));
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }

	    
	    
	    
	    protected List<JournalArticleImpl> getWCByJournalFolderAndName(Long groupId,Long folderId,String namefile) throws PortalException{
	    	DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.like("urlTitle", new StringBuilder("%").append(namefile).append("%").toString()));
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }
	    protected List<JournalArticleImpl> getWCByJournalFolderAndNameSI(Long groupId,Long folderId,String namefile,Long structureId) throws PortalException{
	        DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(structureId);
	    	System.out.println("DDM"+ddmStructure.getStructureKey());
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("DDMStructureKey",ddmStructure.getStructureKey()));
	        queryJournal.add(RestrictionsFactoryUtil.ilike("urlTitle", new StringBuilder("%").append(namefile).append("%").toString()));

	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }
	    
	    
	    protected List<Long> journalByBrandFolder(long parentFolder,Long siteID){
	        List<Long> listIdFolders = new ArrayList<>();
	        DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	        query_journal_folder.add( RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
	        query_journal_folder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	        List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
	        for (com.liferay.journal.model.impl.JournalFolderImpl journalArticleResourceImpl : ja_1) {
	            listIdFolders.add(journalArticleResourceImpl.getFolderId());
	        }
	        return listIdFolders;
	    }

	    protected Long journalByCodeFolder(long parentFolder,String nameFolder,Long siteID){
	        DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	        query_journal_folder.add(PropertyFactoryUtil.forName("groupId").eq(new Long(siteID)));
	        query_journal_folder.add(PropertyFactoryUtil.forName("parentFolderId").eq(new Long(parentFolder)));
	        List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
	        for (com.liferay.journal.model.impl.JournalFolderImpl journalArticleResourceImpl : ja_1) {
	            if(journalArticleResourceImpl.getName().equals(nameFolder)){
	                return journalArticleResourceImpl.getFolderId();

	            }
	        }
	        return parentFolder;

	    }
	   


	    protected List<DDMStructure> getStruct(String nameStructure,Long siteID) {
	        DynamicQuery query = DDMStructureLocalServiceUtil.dynamicQuery()
	                .add(PropertyFactoryUtil.forName("name").like(nameStructure))
	                .add(PropertyFactoryUtil.forName("groupId").eq(new Long(siteID)));
	        List<DDMStructure> structures = DDMStructureLocalServiceUtil.dynamicQuery(query);
	        List<DDMStructure> valid_structures = new ArrayList<>();
	        for (DDMStructure ddmStructure : structures) {
	            if(validStructure(ddmStructure.getStructureId())==true){
	                valid_structures.add(ddmStructure);
	            }
	        }
	        if (valid_structures.size() > 0) {
	            log.info("Estrucruras Validas:"+valid_structures.size() );
	            return valid_structures;
	        }
	        return new ArrayList<>();
	    }

	    protected List<JournalFolderImpl> journalRootFolder(long parentFolder,String nameFolder,Long siteID){
	        DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	        query_journal_folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
	        query_journal_folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
	        query_journal_folder.add(RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	        List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
	        return ja_1;
	    }

	    protected Long getFolder(Long siteID,String nameFolder,Long parentFolder){
	        List<Long> listIdFolders = new ArrayList<>();
	        DynamicQuery folder = DynamicQueryFactoryUtil.forClass(com.liferay.document.library.kernel.model.DLFolder.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	        folder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	        folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
	        folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
	        List<com.liferay.document.library.kernel.model.DLFolder> Folders = DLFolderLocalServiceUtil.dynamicQuery(folder);
	        for (DLFolder dlFolder : Folders) {
	            listIdFolders.add(dlFolder.getFolderId());
	        }
	        return listIdFolders.get(0);
	    }


	    protected boolean validStructure(Long id){
	        for (String structureID : Contants.STRUCTURE_IDS) {
	            if(structureID.equals(String.valueOf(id))) return true;
	        }
	        return false;
	    }

	    /*Obtiene archivos y folder por nombre y folder actual*/
	    protected List<DLFileEntry> getFilesByName(Long groupId,Long idCurrentFolder,String namefile){
	        DynamicQuery query = DynamicQueryFactoryUtil.forClass(DLFileEntry.class, "DLFileEntry",PortalClassLoaderUtil.getClassLoader());
	        query.add(RestrictionsFactoryUtil.ilike("title", new StringBuilder("%").append(namefile).append("%").toString()));
	        query.add(PropertyFactoryUtil.forName("folderId").eq(idCurrentFolder));
	        query.add(PropertyFactoryUtil.forName("groupId").eq(new Long(groupId)));
	        return  DLFileEntryLocalServiceUtil.dynamicQuery(query);

	    }



	    protected String validateType(String key){
	        switch (key) {
	            case "checkbox":
	            	return "boolean";
	            case "ddm-documentlibrary":
	                return "document_library";
	            case "ddm-image":
	                return "image";
	            case "ddm-link-to-page":
	                return "link_to_layout";
	            case "ddm-separator":
	                return "selection_break";
	            case "ddm-text-html":
	                return "text_area";
	            case "select":
	                return "list";
	            case "text":
	                return "text";
	            case "textarea":
	                return "text_box";
	            default:
	                return key;
	        }
	        }


	protected JournalArticle createNewWC(org.json.JSONObject jsonObject) throws PortalException{

		Long folderId = jsonObject.getLong("folderId");
		Long userId = jsonObject.getLong("userId");
		Long groupId = jsonObject.getLong("groupId");
		String localeDefault= jsonObject.getString("localeDefault");
		String title= jsonObject.getString("title");
		String ddmStructure= jsonObject.getString("ddmStructure");
		String ddmTemplate= jsonObject.getString("ddmTemplate");
		String description= jsonObject.getString("description");
		String aviableLocales= jsonObject.getString("aviableLocales");

		ServiceContext serviceContext = new ServiceContext();
		serviceContext.setScopeGroupId(groupId);
		serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);

		Map<Locale, String> titleMap = new HashMap<Locale, String>();
		Map<Locale, String> descriptionMap = new HashMap<Locale, String>();

		for(String localItem:aviableLocales.split(",")){
			titleMap.put(LocaleUtil.fromLanguageId(localItem), title);
			descriptionMap.put(LocaleUtil.fromLanguageId(localItem), description);
		}

		String rootElement = XMLUtil.transformJson(jsonObject);

		System.out.println(rootElement);

		JournalArticle article = JournalArticleLocalServiceUtil.addArticle(userId,
				groupId, folderId, titleMap, descriptionMap, rootElement,
				ddmStructure, ddmTemplate, serviceContext);

		if(!Validator.isNull(article)){
			String[] tags = null;
			if(jsonObject.has("tags")){
				tags = parseTags(jsonObject.getJSONArray("tags"));
			}

			long[] cats = null;
			if(jsonObject.has("categories")){
				cats = parseCategories(jsonObject.getJSONArray("categories"));
			}

			addCategoriesAndTags(userId, article, cats, tags);

		}

		return article;
	}
	    protected JournalArticle createNewWC(String json) throws PortalException{
	        JSONObject jsonObj = JSONFactoryUtil.createJSONObject(json);
	        Long folderId = jsonObj.getLong("folderId");
	        Long userId = jsonObj.getLong("userId");
	        Long groupId = jsonObj.getLong("groupId");
	        String localeDefault= jsonObj.get("localeDefault").toString();
	        String title= jsonObj.get("title").toString();
	        String ddmStructure= jsonObj.get("ddmStructure").toString();
	        String ddmTemplate= jsonObj.get("ddmTemplate").toString();
	        String description= jsonObj.get("description").toString();
	        String aviableLocales= jsonObj.get("aviableLocales").toString();  

	        ServiceContext serviceContext = new ServiceContext();
	        serviceContext.setScopeGroupId(groupId);
	        serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);

	        Map<Locale, String> titleMap = new HashMap<Locale, String>();
	    	titleMap.put(LocaleUtil.fromLanguageId(localeDefault), title);
			titleMap.put(LocaleUtil.fromLanguageId("en_US"), title);
	        Map<Locale, String> descriptionMap = new HashMap<Locale, String>();
	        descriptionMap.put(LocaleUtil.fromLanguageId(localeDefault), description);
	        descriptionMap.put(LocaleUtil.fromLanguageId("en_US"), description);

	        JSONArray campos = jsonObj.getJSONArray("fields");
	        String xmlFinal = "";
	        for (int i = 0; i < campos.length(); i++) {
	            if(campos.getJSONObject(i).get("nestedFields")!=null){
	                if(campos.getJSONObject(i).get("type").equals("ddm-separator")){
	                    xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            "selection_break",
	                            "",
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));
	                }
	                else if(campos.getJSONObject(i).get("type").equals("select")){
	                	if(campos.getJSONObject(i).get("multiple").toString().equals("true")){
	                		  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
			                            validateType(campos.getJSONObject(i).get("type").toString()),
			                            evaluateContent("select_multiple"
			                                    , campos.getJSONObject(i).getJSONArray("values")),
			                            campos.getJSONObject(i).get("indexType").toString(),
			                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
	                		  }else{
	                			  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
				                            validateType(campos.getJSONObject(i).get("type").toString()),
				                            evaluateContent("select"
				                                    , campos.getJSONObject(i).getJSONArray("values")),
				                            campos.getJSONObject(i).get("indexType").toString(),
				                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
		                	  
	                		  }
	                }
	                else{
	                    xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            validateType(campos.getJSONObject(i).get("type").toString()),
	                            evaluateContent(campos.getJSONObject(i).get("type").toString()
	                                    , campos.getJSONObject(i).getJSONArray("values")),
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));
	                }
	            }else{
	                if(campos.getJSONObject(i).get("type").equals("ddm-separator")){
	                    xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            "selection_break",
	                            "",
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            "");
	                }
	                else if(campos.getJSONObject(i).get("type").equals("select")){
	                	if(campos.getJSONObject(i).get("multiple").toString().equals("true")){
	                		  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
			                            validateType(campos.getJSONObject(i).get("type").toString()),
			                            evaluateContent("select_multiple"
			                                    , campos.getJSONObject(i).getJSONArray("values")),
			                            campos.getJSONObject(i).get("indexType").toString(),
			                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
	                		  }else{
	                			  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
				                            validateType(campos.getJSONObject(i).get("type").toString()),
				                            evaluateContent("select"
				                                    , campos.getJSONObject(i).getJSONArray("values")),
				                            campos.getJSONObject(i).get("indexType").toString(),
				                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
		                	  
	                		  }
	                }
	                else{
	                    xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            validateType(campos.getJSONObject(i).get("type").toString()),
	                            evaluateContent(campos.getJSONObject(i).get("type").toString()
	                                    , campos.getJSONObject(i).getJSONArray("values")),
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            "");
	                }
	            }

	        }
	        String rootElement="<?xml version=\"1.0\"?><root available-locales=\""+aviableLocales+"\" default-locale=\""+localeDefault+"\">"+xmlFinal+"</root>";
	       
	        
	       JournalArticle article = JournalArticleLocalServiceUtil.addArticle(userId,
	                groupId, folderId, titleMap, descriptionMap, rootElement,
	                ddmStructure, ddmTemplate, serviceContext);
	        if(!Validator.isNull(article)){
		        if(!jsonObj.getJSONArray("tags").isNull(0) && !jsonObj.getJSONArray("categories").isNull(0)){
		        	addCategoriesAndTags(userId, article, parseCategories(jsonObj.getJSONArray("categories")), parseTags(jsonObj.getJSONArray("tags")));
		        }else if(!Validator.isNull(jsonObj.getJSONArray("tags")) && Validator.isNull(jsonObj.getJSONArray("categories"))){
		        	addCategoriesAndTags(userId, article, null, parseTags(jsonObj.getJSONArray("tags")));	
		        }else if(Validator.isNull(jsonObj.getJSONArray("tags")) && !Validator.isNull(jsonObj.getJSONArray("categories"))){
		        	addCategoriesAndTags(userId, article,parseCategories(jsonObj.getJSONArray("categories")) , null);	
		        }else {
		        	addCategoriesAndTags(userId, article,null, null);	
		        }
	        }
	        
	        return article;
	    }
	    
	    protected static void addCategoriesAndTags(Long userId,JournalArticle article,long[] assetCategoryIds,String[] assetTagNames) throws PortalException{
	    	 JournalArticleLocalServiceUtil.updateAsset(article.getUserId(), article, assetCategoryIds, assetTagNames, null,new Double(0));
	    }
	    
	    protected String[] parseTags(JSONArray tags){
	    	 String[] myArray= new String[tags.length()];  
		        for (int i = 0; i < tags.length(); i++) {
		        	myArray[i]=tags.getString(i);
				}
		   return myArray;
	    }
	    
	    protected long[] parseCategories(JSONArray categories){
	    	 long[] myArray= new long[categories.length()];  
		        for (int i = 0; i < categories.length(); i++) {
		        	myArray[i]=categories.getLong(i);
				}
		   return myArray;
	    }

	protected String[] parseTags(org.json.JSONArray tags){
		String[] myArray= new String[tags.length()];
		for (int i = 0; i < tags.length(); i++) {
			myArray[i]=tags.getString(i);
		}
		return myArray;
	}

	protected long[] parseCategories(org.json.JSONArray categories){
		long[] myArray= new long[categories.length()];
		for (int i = 0; i < categories.length(); i++) {
			myArray[i]=categories.getLong(i);
		}
		return myArray;
	}




	    protected JournalArticle UpdateWC(String json) throws PortalException{
	        JSONObject jsonObj = JSONFactoryUtil.createJSONObject(json);
	        Long folderId = jsonObj.getLong("folderId");
	        Long userId = jsonObj.getLong("userId");
	        Long groupId = jsonObj.getLong("groupId");
	        String localeDefault= jsonObj.get("localeDefault").toString();
	        String title= jsonObj.get("title").toString();  
	        String description= jsonObj.get("description").toString();  
	        String aviableLocales= jsonObj.get("aviableLocales").toString();  
	        Long articleId= jsonObj.getLong("articleId");
	        
	        ServiceContext serviceContext = new ServiceContext();
	        serviceContext.setScopeGroupId(groupId);
	        serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);

	        Map<Locale, String> titleMap = new HashMap<Locale, String>();
	        titleMap.put(LocaleUtil.fromLanguageId("es_ES"), title);
			titleMap.put(LocaleUtil.fromLanguageId("en_US"), title);
	        Map<Locale, String> descriptionMap = new HashMap<Locale, String>();
	        descriptionMap.put(LocaleUtil.fromLanguageId("es_ES"), description);
	        descriptionMap.put(LocaleUtil.fromLanguageId("en_US"), description);
	        JSONArray campos = jsonObj.getJSONArray("fields");
	        String xmlFinal = "";
	        for (int i = 0; i < campos.length(); i++) {
	            if(campos.getJSONObject(i).get("nestedFields")!=null){
	                if(campos.getJSONObject(i).get("type").equals("ddm-separator")){
	                    xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            "selection_break",
	                            "",
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));
	                }
	                else if(campos.getJSONObject(i).get("type").equals("select")){
	                	if(campos.getJSONObject(i).get("multiple").toString().equals("true")){
	                		  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
			                            validateType(campos.getJSONObject(i).get("type").toString()),
			                            evaluateContent("select_multiple"
			                                    , campos.getJSONObject(i).getJSONArray("values")),
			                            campos.getJSONObject(i).get("indexType").toString(),
			                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
	                		  }else{
	                			  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
				                            validateType(campos.getJSONObject(i).get("type").toString()),
				                            evaluateContent("select"
				                                    , campos.getJSONObject(i).getJSONArray("values")),
				                            campos.getJSONObject(i).get("indexType").toString(),
				                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
		                	  
	                		  }
	                }
	                else{
	                    xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            validateType(campos.getJSONObject(i).get("type").toString()),
	                            evaluateContent(campos.getJSONObject(i).get("type").toString()
	                                    , campos.getJSONObject(i).getJSONArray("values")),
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));
	                }
	            }else{
	                if(campos.getJSONObject(i).get("type").equals("ddm-separator")){
	                    xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            "selection_break",
	                            "",
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            "");
	                }
	                else if(campos.getJSONObject(i).get("type").equals("select")){
	                	if(campos.getJSONObject(i).get("multiple").toString().equals("true")){
	                		  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
			                            validateType(campos.getJSONObject(i).get("type").toString()),
			                            evaluateContent("select_multiple"
			                                    , campos.getJSONObject(i).getJSONArray("values")),
			                            campos.getJSONObject(i).get("indexType").toString(),
			                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
	                		  }else{
	                			  xmlFinal = xmlFinal + getBaseXML(campos.getJSONObject(i).get("name").toString(),
				                            validateType(campos.getJSONObject(i).get("type").toString()),
				                            evaluateContent("select"
				                                    , campos.getJSONObject(i).getJSONArray("values")),
				                            campos.getJSONObject(i).get("indexType").toString(),
				                            readJson(campos.getJSONObject(i).get("nestedFields").toString()));                	
		                	  
	                		  }
	                }
	                else{
	                    xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                            validateType(campos.getJSONObject(i).get("type").toString()),
	                            evaluateContent(campos.getJSONObject(i).get("type").toString()
	                                    , campos.getJSONObject(i).getJSONArray("values")),
	                            campos.getJSONObject(i).get("indexType").toString(),
	                            "");
	                }
	            }

	        }
	        String rootElement="<?xml version=\"1.0\"?><root available-locales=\""+aviableLocales+"\" default-locale=\""+localeDefault+"\">"+xmlFinal+"</root>";

	        JournalArticle JournalToUpdate = JournalArticleLocalServiceUtil.getArticle(articleId);
	        JournalArticle JournalToInfo = JournalArticleLocalServiceUtil.getLatestArticle(JournalToUpdate.getResourcePrimKey());
	        JournalToInfo.setFolderId(folderId);
	        JournalToInfo.setUserId(userId);
	        JournalToInfo.setDescription(description);
	        JournalToInfo.setTitle(title);
	        JournalToInfo.setContent(rootElement);
	        JournalArticle article = JournalArticleLocalServiceUtil.updateArticle(JournalToInfo.getUserId(), JournalToInfo.getGroupId(), JournalToInfo.getFolderId(), JournalToInfo.getArticleId(), JournalToInfo.getVersion()+0.1, JournalToInfo.getContent(), serviceContext);
	        if(!Validator.isNull(article)){
		        if(!jsonObj.getJSONArray("tags").isNull(0) && !jsonObj.getJSONArray("categories").isNull(0)){
		        	addCategoriesAndTags(userId, article, parseCategories(jsonObj.getJSONArray("categories")), parseTags(jsonObj.getJSONArray("tags")));
		        }else if(!Validator.isNull(jsonObj.getJSONArray("tags")) && Validator.isNull(jsonObj.getJSONArray("categories"))){
		        	addCategoriesAndTags(userId, article, null, parseTags(jsonObj.getJSONArray("tags")));	
		        }else if(Validator.isNull(jsonObj.getJSONArray("tags")) && !Validator.isNull(jsonObj.getJSONArray("categories"))){
		        	addCategoriesAndTags(userId, article,parseCategories(jsonObj.getJSONArray("categories")) , null);	
		        }else {
		        	addCategoriesAndTags(userId, article,null, null);	
		        }
	        }
	        
	        return article;
	    }

	    protected String readJson(String nested) throws JSONException{
	        JSONArray campos = JSONFactoryUtil.createJSONArray(nested);
	        StringBuilder xmlFinal= new StringBuilder();
	        for (int i = 0; i < campos.length(); i++) {
	            if(campos.getJSONObject(i).get("nestedFields")!=null){
	                if(campos.getJSONObject(i).get("type").equals("ddm-separator")){
	                                xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                                "selection_break",
	                                "",
	                                campos.getJSONObject(i).get("indexType").toString(),
	                                readJson(campos.getJSONObject(i).get("nestedFields").toString())));
	                }else if(campos.getJSONObject(i).get("type").equals("select")){
	                	if(campos.getJSONObject(i).get("multiple").toString().equals("true")){
	                		        xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
			                        validateType(campos.getJSONObject(i).get("type").toString()),
			                        evaluateContent("select_multiple",
			                        campos.getJSONObject(i).getJSONArray("values")),
			                        campos.getJSONObject(i).get("indexType").toString(),
			                        readJson(campos.getJSONObject(i).get("nestedFields").toString())));                	
	                		  }else{
	                			    xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
				                    validateType(campos.getJSONObject(i).get("type").toString()),
				                    evaluateContent("select", 
				                    campos.getJSONObject(i).getJSONArray("values")),
				                    campos.getJSONObject(i).get("indexType").toString(),
				                    readJson(campos.getJSONObject(i).get("nestedFields").toString())));                	
		                	  }
	                	}else
	                	{
		                			xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
		                            validateType(campos.getJSONObject(i).get("type").toString()),
		                            evaluateContent(campos.getJSONObject(i).get("type").toString(),
		                            campos.getJSONObject(i).getJSONArray("values")),
		                            campos.getJSONObject(i).get("indexType").toString(),
		                            readJson(campos.getJSONObject(i).get("nestedFields").toString())));
	                }
	            }else{
	                if(campos.getJSONObject(i).get("type").equals("ddm-separator")){
	                				xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
	                			    "selection_break",
	                                "",
	                                campos.getJSONObject(i).get("indexType").toString(),
	                                ""));
	            }else if(campos.getJSONObject(i).get("type").equals("select")){
	                	if(campos.getJSONObject(i).get("multiple").toString().equals("true")){
	                		        xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
			                        validateType(campos.getJSONObject(i).get("type").toString()),
			                        evaluateContent("select_multiple",
			                        campos.getJSONObject(i).getJSONArray("values")),
			                        campos.getJSONObject(i).get("indexType").toString(),
			                        readJson(campos.getJSONObject(i).get("nestedFields").toString())));                	
	            }else{
	                			    xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
				                    validateType(campos.getJSONObject(i).get("type").toString()),
				                    evaluateContent("select",
				                    campos.getJSONObject(i).getJSONArray("values")),
				                    campos.getJSONObject(i).get("indexType").toString(),
				                    readJson(campos.getJSONObject(i).get("nestedFields").toString())));                	
		                	  
	                		  }
	            }else{
	            	                 xmlFinal.append(getBaseXML(campos.getJSONObject(i).get("name").toString(),
	            	                 validateType(campos.getJSONObject(i).get("type").toString()),
	                                 evaluateContent(campos.getJSONObject(i).get("type").toString(),
	                                 campos.getJSONObject(i).getJSONArray("values")),
	                                 campos.getJSONObject(i).get("indexType").toString(),
	                                 ""));
	                }
	            }
	        }
	        return xmlFinal.toString();
	    }


	    protected String getBaseXML(String name,String type,String values,String indexType,String child){
	        return"<dynamic-element name=\""+name+"\" instance-id=\""+getInstance()+"\" type=\""+type+"\" index-type=\""+indexType+"\">"+ values + child + "</dynamic-element>";
	    }

	    protected JSONArray example(long ddmStructureId) throws PortalException{

	        DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(
	                ddmStructureId);

	        DDMForm ddmForm = ddmStructure.getDDMForm();

	        Map<String, DDMFormField> ddmFormFieldsMap =
	                ddmForm.getDDMFormFieldsMap(true);

	        return itStructure(ddmFormFieldsMap);
	    }

	    protected JSONArray itStructure(Map<String, DDMFormField> ddmFormFieldsMap){
	        JSONArray array =JSONFactoryUtil.createJSONArray();
	        JSONObject structureObject =null;
	        for (Map.Entry<String, DDMFormField> entry : ddmFormFieldsMap.entrySet()) {
	            structureObject = JSONFactoryUtil.createJSONObject();
	            structureObject.put("name", entry.getKey());
	            structureObject.put("type", entry.getValue().getType());
	            structureObject.put("localizable", entry.getValue().isLocalizable());
	            structureObject.put("repetible", entry.getValue().isRepeatable());
	            Locale locale = new Locale("en", "US");
	            structureObject.put("label", entry.getValue().getLabel().getString(locale));
	            structureObject.put("aviableLocales", entry.getValue().getLabel().getAvailableLocales());
	            if(entry.getValue().getNestedDDMFormFieldsMap()!=null){
	                if(!itStructure(entry.getValue().getNestedDDMFormFieldsMap()).isNull(0))
	                    structureObject.put("child",itStructure(entry.getValue().getNestedDDMFormFieldsMap()));
	            }
	            array.put(structureObject);

	        }

	        return array;

	    }




	    protected JSONArray itStructureParse(Map<String, DDMFormField> ddmFormFieldsMap){
	        JSONArray array =JSONFactoryUtil.createJSONArray();
	        JSONObject structureObject =null;
	        for (Map.Entry<String, DDMFormField> entry : ddmFormFieldsMap.entrySet()) {
	            structureObject = JSONFactoryUtil.createJSONObject();
	            structureObject.put("name", entry.getKey());
	            structureObject.put("type", entry.getValue().getType());
	            structureObject.put("localizable", entry.getValue().isLocalizable());
	            structureObject.put("repetible", entry.getValue().isRepeatable());
	            Locale locale = new Locale("en", "US");
	            structureObject.put("label", entry.getValue().getLabel().getString(locale));
	            structureObject.put("aviableLocales", entry.getValue().getLabel().getAvailableLocales());
	            if(entry.getValue().getNestedDDMFormFieldsMap()!=null){
	                if(!itStructure(entry.getValue().getNestedDDMFormFieldsMap()).isNull(0))
	                    structureObject.put("child",itStructure(entry.getValue().getNestedDDMFormFieldsMap()));
	            }
	            array.put(structureObject);

	        }

	        return array;

	    }

	    protected String setCDATA(String data){
	        return "<![CDATA["+data+"]]>";
	    }

	    protected StringBuilder getInstance(){
	        StringBuilder instanceId = new StringBuilder(8);
	        String key = PwdGenerator.KEY1 + PwdGenerator.KEY2 + PwdGenerator.KEY3;
	        for (int i = 0; i< 8; i++) {
	            int pos = (int)Math.floor(Math.random() * key.length());
	            instanceId.append(key.charAt(pos));
	        }
	        return instanceId;
	    }


	    protected String getValueXML(String value_ES,String value_EN){
	        return "<dynamic-content language-id=\"es_ES\">"+setCDATA(value_ES)+"</dynamic-content>" +
	                "<dynamic-content language-id=\"en_US\">"+setCDATA(value_ES)+"</dynamic-content>";

	    }


	    protected String setCDATARadio(String data){
	        return "<![CDATA[[\""+data+"\"]]]>";
	    }
	   
	    //falta la implementacion de fecha de radio button de integer de documents and media, los campos estan cruzados guarda en ingles lo de español y es necesario q se envien los 2 idiomas para que guarde
	    // le agregue validaciones y separe los caso para algunos tipos de datos como chekbox y textarea
	    protected String evaluateContent(String type,JSONArray values){
	    	StringBuilder xmlDynamicContent= new StringBuilder();
	        switch (type) {
	        	case "ddm-decimal":
	        		if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "ddm-geolocation":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "radio":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATARadio(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATARadio(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	        	case "checkbox":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	        	case "ddm-documentlibrary":
		            	if(values.getJSONObject(0).get("en_US")!=null)
							xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
		            	if(values.getJSONObject(0).get("es_ES")!=null)
							xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
		                return xmlDynamicContent.toString();
	        	case "ddm-image":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	        	case "ddm-link-to-page":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "ddm-text-html":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "ddm-journal-article":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(setCDATA("{\"classPK\":\""+values.getJSONObject(0).get("en_US").toString()+"\",\"className\":\"com.liferay.journal.model.JournalArticle\"}"))+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA("{\"classPK\":\""+values.getJSONObject(0).get("es_ES").toString()+"\",\"className\":\"com.liferay.journal.model.JournalArticle\"}")+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "select_multiple":
	            	StringBuilder options_en= new StringBuilder();
	            	StringBuilder options_es= new StringBuilder();
	               for (int i = 0; i < values.length(); i++) {
	            	   if(values.getJSONObject(0).get("es_ES")!=null)
	            		   options_es.append("<option>"+setCDATA(values.getJSONObject(i).get("es_ES").toString())+"</option>");
	            	   if(values.getJSONObject(0).get("en_US")!=null)
	            		   options_en.append("<option>"+setCDATA(values.getJSONObject(i).get("en_US").toString())+"</option>");	   
	            	  }
	               if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+options_es+"</dynamic-content>");
	               if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"en_US\">"+options_es+"</dynamic-content>");
	               return xmlDynamicContent.toString();
	            case "select":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "text":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            case "ddm-date":
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	            default:
	            	if(values.getJSONObject(0).get("en_US")!=null)
						xmlDynamicContent.append("<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>");
	            	if(values.getJSONObject(0).get("es_ES")!=null)
						xmlDynamicContent.append( "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>");
	                return xmlDynamicContent.toString();
	        }

	    }
	    protected List<JournalArticleImpl> getWCByCode(Long groupId,String structureId,String code) throws PortalException{
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.ilike("content", new StringBuilder("%><![CDATA[").append(code).append("]]></dynamic-content>%").toString()));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        queryJournal.add(PropertyFactoryUtil.forName("DDMStructureKey").eq(new String(structureId)));
	        log.info("antes de dynamicQuery");
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
            log.info("despues de dynamicQuery");
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }

	    protected List<JournalArticleImpl> getWCByCodeFolder(Long groupId,String structureId,String code,Long parentFolderId) throws PortalException{
	        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
	        queryJournal.add(RestrictionsFactoryUtil.ilike("content", new StringBuilder("%><![CDATA[").append(code).append("]]></dynamic-content>%").toString()));
	        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
	        queryJournal.add( RestrictionsFactoryUtil.eq("parentFolderId",new Long(parentFolderId)));
	        queryJournal.add(PropertyFactoryUtil.forName("DDMStructureKey").eq(new String(structureId)));
	        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
	        if(journalResults.size()>0){
	            return journalResults;
	        }
	        return new ArrayList<>();
	    }

	    protected List<JournalArticle> getFoldersWCByCode(Long groupId,String nameStructure,String code) throws PortalException{
	        List<JournalArticle> journalArray = new ArrayList<>();
	        log.info("antes de getStruct");
	        List<DDMStructure> structureKey = getStruct("%>"+nameStructure+"<%", groupId);
            log.info("despues de getStruct");
            List<JournalArticleImpl> result =  getWCByCode(groupId,structureKey.get(0).getStructureKey(),code);
            log.info("despues de getWCByCode");
	        if(!Validator.isNull(result) && !result.isEmpty()){
	            for (JournalArticle ja : result) {
	                if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                    journalArray.add(ja);
	                }
	            }
	        }

	        return journalArray;
	    }
	    
	    protected List<JournalArticle> getFoldersWCByCodeFolderId(Long groupId,String nameStructure,String code,Long folderId) throws PortalException{
	        List<JournalArticle> journalArray = new ArrayList<>();
	        List<DDMStructure> structureKey = getStruct("%>"+nameStructure+"<%", groupId);
	        if(!Validator.isNull(getWCByCodeFolder(groupId,structureKey.get(0).getStructureKey(),code,folderId)) && !getWCByCodeFolder(groupId,structureKey.get(0).getStructureKey(),code,folderId).isEmpty()){
	            for (JournalArticle ja : getWCByCodeFolder(groupId,structureKey.get(0).getStructureKey(),code,folderId)) {
	                if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                    journalArray.add(ja);
	                }
	            }
	        }

	        return journalArray;
	    }
	    
	    
	    protected List<JournalArticle> getFoldersWCByCode(Long groupId,String nameStructure,String code,Long filderId) throws PortalException{
	        List<JournalArticle> journalArray = new ArrayList<>();
	        List<DDMStructure> structureKey = getStruct("%>"+nameStructure+"<%", groupId);
	        if(getWCByCode(groupId,structureKey.get(0).getStructureKey(),code)!= null && !getWCByCode(groupId,structureKey.get(0).getStructureKey(),code).isEmpty()){
	            for (JournalArticle ja : getWCByCode(groupId,structureKey.get(0).getStructureKey(),code)) {
	                if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                    journalArray.add(ja);
	                }
	            }
	        }

	        return journalArray;
	    }

	    protected List<DDMStructure> getStructureByName(String nameStructure,Long siteID) {
	        DynamicQuery query = DDMStructureLocalServiceUtil.dynamicQuery()
	                .add(PropertyFactoryUtil.forName("name").like("%>"+nameStructure+"<%"))
	                .add(PropertyFactoryUtil.forName("groupId").eq(new Long(siteID)));
	        List<DDMStructure> structures = DDMStructureLocalServiceUtil.dynamicQuery(query);
	        List<DDMStructure> valid_structures = new ArrayList<DDMStructure>();
	        for (DDMStructure ddmStructure : structures) {
	            if(validStructure(ddmStructure.getStructureId())){
	                valid_structures.add(ddmStructure);
	            }
	        }
	        if (valid_structures.size() > 0) {
	            log.info("Estrucruras Validas:"+valid_structures.size() );
	            return valid_structures;
	        }
	        return new ArrayList<>();
	    }
	    
	    protected List<JournalArticle> getJournalFoldersAndWCByTypeTitleS(Long groupId, Long folderId, String title,Long structureId, List<JournalArticle> journalArray) throws PortalException {
			List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(folderId));
	        if(!Validator.isNull(listFolders)  && listFolders.size() > 0){
	            for (JournalFolder object : listFolders) {
	                if(getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, object.getFolderId(),structureId,title)!= null && !getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, object.getFolderId(),structureId,title).isEmpty()){
	                    for (JournalArticle ja : getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, object.getFolderId(),structureId,title)) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    }
	                }
	               // if(getJournalFoldersAndWCByTypeTitleS(groupId,object.getFolderId(),title,structureId,journalArray)!= null && !getJournalFoldersAndWCByTypeTitleS(groupId,object.getFolderId(),title,structureId,journalArray).isEmpty()){
	                if(!Validator.isNull(object.getFolderId())) {
	                getJournalFoldersAndWCByTypeTitleS(groupId,object.getFolderId(),title,structureId,journalArray);
	                }
	            }
	        }
	        return journalArray;
		}
	    protected List<JournalArticle> getJournalFoldersAndWCByTypeTitle(Long groupId, Long hotelCode, String type,
				String title, List<JournalArticle> journalArray) throws PortalException {
			    List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(hotelCode));
		        if(!Validator.isNull(listFolders)&& listFolders.size() > 0){
		            for (JournalFolder object : listFolders) {
		                if(getWCByJournalFolderAndTypeStructureTitle(groupId, object.getFolderId(),type,title)!= null && !getWCByJournalFolderAndTypeStructure(groupId, object.getFolderId(),type).isEmpty()){
		                    for (JournalArticle ja : getWCByJournalFolderAndTypeStructureTitle(groupId, object.getFolderId(),type,title)) {
		                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
		                            journalArray.add(ja);
		                        }
		                    }
		                }
		                //if(getJournalFoldersAndWCByTypeTitle(groupId,object.getFolderId(),type,title,journalArray)!= null && !getJournalFoldersAndWCByTypeTitle(groupId,object.getFolderId(),type,title,journalArray).isEmpty()){
		                if(!Validator.isNull(object.getFolderId())) {
		                getJournalFoldersAndWCByTypeTitle(groupId,object.getFolderId(),type,title,journalArray);
		                }
		            }
		        }
		        return journalArray;
		}

	    protected List<JournalArticle> getJournalFoldersAndWCByTypeId(Long groupId,Long parent,Long structureId,List<JournalArticle> journalArray) throws PortalException{
	        List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	            for (JournalFolder object : listFolders) {
	                if(getWCByJournalFolderAndTypeStructureId(groupId, object.getFolderId(),structureId)!= null && !getWCByJournalFolderAndTypeStructureId(groupId, object.getFolderId(),structureId).isEmpty()){
	                    for (JournalArticle ja : getWCByJournalFolderAndTypeStructureId(groupId, object.getFolderId(),structureId)) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    }
	                }
	                //if(getJournalFoldersAndWCByTypeId(groupId,object.getFolderId(),structureId,journalArray)!= null && !getJournalFoldersAndWCByTypeId(groupId,object.getFolderId(),structureId,journalArray).isEmpty()){
	                if(!Validator.isNull(object.getFolderId())){
	                getJournalFoldersAndWCByTypeId(groupId,object.getFolderId(),structureId,journalArray);
	                }
	            }
	        }
	        return journalArray;
	    }
	    
	    protected List<JournalArticle> getJournalFoldersAndWCByType(Long groupId,Long parent,String type,List<JournalArticle> journalArray) throws PortalException{
	        List<JournalFolder> listFolders =getSubFolderByJournalFolderParent(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	            for (JournalFolder object : listFolders) {
	                if(getWCByJournalFolderAndTypeStructure(groupId, object.getFolderId(),type)!= null && !getWCByJournalFolderAndTypeStructure(groupId, object.getFolderId(),type).isEmpty()){
	                    for (JournalArticle ja :getWCByJournalFolderAndTypeStructure(groupId, object.getFolderId(),type)) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    }
	                }
	                //if(getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray)!= null && !getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray).isEmpty()){
	                if(!Validator.isNull(object.getFolderId())){ 
	                getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray);
	                }
	            }
	        }
	        return journalArray;
	    }
	    
	    protected List<JournalArticle> getJournalFoldersAndWC(Long groupId,Long parent,List<JournalArticle> journalArray) throws PortalException{
	        List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	        for (JournalFolder journalFolder : listFolders) {
			 if(getWCByJournalFolder(groupId, journalFolder.getFolderId())!= null && !getWCByJournalFolder(groupId, journalFolder.getFolderId()).isEmpty()){
				 for (JournalArticle ja : getWCByJournalFolder(groupId, journalFolder.getFolderId())) {
	                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                            journalArray.add(ja);
	                        }
	                    
				 }
			 }
			 if(!Validator.isNull(journalFolder.getFolderId())){ 
             getJournalFoldersAndWC(groupId,journalFolder.getFolderId(),journalArray);
             }
	        }
	        }   
	        return journalArray;
	    }
	   
	    protected JSONArray getJournalFoldersJson(Long groupId,Long parent,JSONArray filesArray) throws PortalException{
	        List<JournalFolder> listFolders =JournalFolderLocalServiceUtil.getFolders(groupId, new Long(parent));
	        if(!Validator.isNull(listFolders) && listFolders.size() > 0){
	            JSONObject filesObject=null;
	            for (JournalFolder object : listFolders) {
	                filesObject=JSONFactoryUtil.createJSONObject();
	                filesObject.put("folderId", object.getFolderId());
	                filesObject.put("nameFolder", object.getName());
	                filesArray.put(filesObject);
	   			 if(!Validator.isNull(object.getFolderId())){ 
	   				 	// if(getJournalFoldersJson(groupId,object.getFolderId(),filesArray)!= null && !getJournalFoldersJson(groupId,object.getFolderId(),filesArray).isNull(0)){
	                    getJournalFoldersJson(groupId,object.getFolderId(),filesArray);
	                }

	            }
	        }
	        return filesArray;
	    }
	    protected JSONArray getJournalFoldersJsonOneLevel(Long groupId,Long parent,JSONArray filesArray) throws PortalException{
	        List<JournalFolder> listFolders =JournalFolderLocalServiceUtil.getFolders(groupId, new Long(parent));
	        if(listFolders != null && listFolders.size() > 0){
	            JSONObject filesObject=null;
	            for (JournalFolder object : listFolders) {
	                filesObject=JSONFactoryUtil.createJSONObject();
	                filesObject.put("folderId", object.getFolderId());
	                filesObject.put("nameFolder", object.getName());
	                filesArray.put(filesObject);
	            }
	        }
	        return filesArray;
	    }
	    
	    

		protected List<Long> getCategoriesByName(Long groupId,String name) throws PortalException{		
		   List<Long> cat=new ArrayList<Long>();
			List<AssetCategory> listCategories = getCategoryByName(groupId, name);
			listCategories.stream().forEach((category)-> {
				cat.add(category.getPrimaryKey());

				});
		return cat;
		}
		
		protected long[] getWebcontentByCategories(Long groupId,String categoryName) throws PortalException{		
			    long[] cate=new long[getCategoryByName(groupId, categoryName).size()];
				List<AssetCategory> listCategories = getCategoryByName(groupId, categoryName);
				for (int i = 0; i < listCategories.size(); i++) {
					cate[i]=new Long(listCategories.get(i).getPrimaryKey());
				}
				return cate;
		}
		
		
		
			protected List<JournalArticle> getWCBycategoryAndName(Long groupId,Long resourcePrimKey,String nameWebcontent,Long structureId) throws PortalException{
		        DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(structureId);
				List<JournalArticle> journal = new ArrayList<>();
		        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		        queryJournal.add( RestrictionsFactoryUtil.eq("resourcePrimKey", new Long(resourcePrimKey)));
		        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		        queryJournal.add( RestrictionsFactoryUtil.eq("DDMStructureKey",ddmStructure.getStructureKey()));
		        queryJournal.add(RestrictionsFactoryUtil.ilike("urlTitle", new StringBuilder("%").append(nameWebcontent).append("%").toString()));

		        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
		        if(journalResults.size()>0){
		        	for (JournalArticle ja : journalResults) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                    	journal.add(ja);
	                    }
	                }
		        }
		        return journal;
		    }
			
			protected List<JournalArticle> getWCByJournalCategoryIdAndType(Long groupId,Long resourcePrimKey,Long structureId) throws PortalException{
		        DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(structureId);
				List<JournalArticle> journal = new ArrayList<>();
		        DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		        queryJournal.add( RestrictionsFactoryUtil.eq("resourcePrimKey", new Long(resourcePrimKey)));
		        queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		        queryJournal.add( RestrictionsFactoryUtil.eq("DDMStructureKey",ddmStructure.getStructureKey()));
		        //queryJournal.setLimit(start, end);
		        List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);
		        if(journalResults.size()>0){
		        	for (JournalArticle ja : journalResults) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion()) && !ja.isInTrash()){
	                    	journal.add(ja);
	                    }
	                }
		        }
		        return journal;
		    }
			protected List<AssetCategory> getCategoryByName(Long groupId,String name) {
				DynamicQuery categories = DynamicQueryFactoryUtil.forClass(AssetCategory.class, "category",PortalClassLoaderUtil.getClassLoader());
				categories.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
				categories.add( RestrictionsFactoryUtil.eq("name",name));
				List<AssetCategory> vlidAsset =AssetCategoryLocalServiceUtil.dynamicQuery(categories);
				return vlidAsset;
			}

}
