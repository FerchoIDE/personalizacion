package generatorviewclient.Impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import generatorviewclient.constants.Contants;
import com.liferay.document.library.kernel.model.DLFileEntry;
import com.liferay.document.library.kernel.model.DLFolder;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFolderLocalServiceUtil;
import com.liferay.dynamic.data.mapping.model.DDMForm;
import com.liferay.dynamic.data.mapping.model.DDMFormField;
import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.model.DDMTemplate;
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
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.PortalClassLoaderUtil;
import com.liferay.portal.kernel.util.PwdGenerator;
import com.liferay.portal.kernel.workflow.WorkflowConstants;

public class QueriesLiferayApi {
	private static final Log log = LogFactoryUtil.getLog(QueriesLiferayApi.class);

	
	
	public List<JournalArticle> getFoldersWCByNameAndType(Long groupId,Long parent,String namefile,String type,List<JournalArticle> journalArray) throws PortalException{
		List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			for (JournalFolder object : listFolders) {
				System.out.println("folder:"+ object.getFolderId());
				if(getWCByJournalFolderAndTypeAndName(groupId, object.getFolderId(),type,namefile)!= null && !getWCByJournalFolderAndTypeAndName(groupId, object.getFolderId(),type,namefile).isEmpty()){
					for (JournalArticle ja : getWCByJournalFolderAndTypeAndName(groupId, object.getFolderId(),type,namefile)) {
							 if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
					    		 journalArray.add(ja);
					    	 }else{
					    		 journalArray.add(JournalArticleLocalServiceUtil.getLatestArticle(ja.getResourcePrimKey()));
					    	 }
					}	
				}
				if(getFoldersWCByNameAndType(groupId,object.getFolderId(),namefile,type,journalArray)!= null && !getFoldersWCByNameAndType(groupId,object.getFolderId(),namefile,type,journalArray).isEmpty()){
					getFoldersWCByNameAndType(groupId,object.getFolderId(),namefile,type,journalArray);
				}
			}
		}
		return journalArray;
	}
	
	public List<JournalArticle> getFoldersWCByName(Long groupId,Long parent,String namefile,List<JournalArticle> journalArray) throws PortalException{
		List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			for (JournalFolder object : listFolders) {
				System.out.println("folder:"+ object.getFolderId());
				if(getWCByJournalFolderAndName(groupId, object.getFolderId(),namefile)!= null && !getWCByJournalFolderAndName(groupId, object.getFolderId(),namefile).isEmpty()){
					for (JournalArticle ja : getWCByJournalFolderAndName(groupId, object.getFolderId(),namefile)) {
							 if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
					    		 journalArray.add(ja);
					    	 }else{
					    		 journalArray.add(JournalArticleLocalServiceUtil.getLatestArticle(ja.getResourcePrimKey()));
					    	 }
					}	
				}
				if(getFoldersWCByName(groupId,object.getFolderId(),namefile,journalArray)!= null && !getFoldersWCByName(groupId,object.getFolderId(),namefile,journalArray).isEmpty()){
					getFoldersWCByName(groupId,object.getFolderId(),namefile,journalArray);
				}
			}
		}
		return journalArray;
	}
	
	

	
	  public List<JournalFolderImpl> getRateFolder1(long parentFolder,String nameFolder,Long siteID){
		DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
		query_journal_folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
		List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
		return ja_1;
		}

	/*Secci�n de journal folders*/	
	
	public Long getFolderWC(Long siteID,String nameFolder,Long parentFolder){
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

public JournalArticle copyJorunal(Long userId,Long groupId,String oldArticleId,String newArticleId) throws PortalException{
	return JournalArticleLocalServiceUtil.copyArticle(userId, groupId, oldArticleId, newArticleId, true, 1.0);

}	
	
public List<JournalFolder> getSubFolderByJournalFolderParent(Long groupId,Long idFolder){
	    List<JournalFolder> dlFolders = JournalFolderLocalServiceUtil.getFolders(groupId, idFolder);
	    	if(dlFolders.size()>0){
	    		return dlFolders;
	    	}
	      return new ArrayList<>();
}  
public JournalFolderImpl getJournalFolderByName(Long siteID,Long parentFolder,String nameFolder){
	DynamicQuery queryJournalFolder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
	queryJournalFolder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
	queryJournalFolder.add( RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
	queryJournalFolder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
	List<com.liferay.journal.model.impl.JournalFolderImpl> journalfolderResults = JournalArticleResourceLocalServiceUtil.dynamicQuery(queryJournalFolder);		
	return journalfolderResults.get(0);
}

	public List<JournalArticleImpl> getWCByJournalFolderAndTypeStructure(Long groupId,Long folderId,String structureKey) throws PortalException{
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
	
	public List<JournalArticle> getWCByJournalFolder(Long groupId,Long folderId) throws PortalException{
		List<JournalArticle> results = JournalArticleLocalServiceUtil.getArticles(groupId, folderId);
		if(results.size()>0){
			return results;
		}
		return new ArrayList<>();
	}
	
	//getWCByJournalFolderAndName
	public List<JournalArticleImpl> getWCByJournalFolderAndName(Long groupId,Long folderId,String structureKey,String namefile) throws PortalException{
		DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		queryJournal.add(RestrictionsFactoryUtil.ilike("title", new StringBuilder("%>").append(namefile).append("<%").toString()));
		queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
		queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);		
		if(journalResults.size()>0){
		return journalResults;
		}
		return new ArrayList<>();
	}
	
	
	public List<JournalArticleImpl> getWCByJournalFolderAndTypeAndName(Long groupId,Long folderId,String structureKey,String namefile) throws PortalException{
		DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		queryJournal.add(RestrictionsFactoryUtil.ilike("title", new StringBuilder("%>").append(namefile).append("<%").toString()));
		queryJournal.add(RestrictionsFactoryUtil.eq("DDMStructureKey", structureKey));
		queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
		queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);		
		if(journalResults.size()>0){
		return journalResults;
		}
		return new ArrayList<>();
	}

	public List<JournalArticleImpl> getWCByJournalFolderAndName(Long groupId,Long folderId,String namefile) throws PortalException{
		DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		queryJournal.add(RestrictionsFactoryUtil.ilike("title", new StringBuilder("%>").append(namefile).append("<%").toString()));
		queryJournal.add( RestrictionsFactoryUtil.eq("folderId", new Long(folderId)));
		queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);		
		if(journalResults.size()>0){
		return journalResults;
		}
		return new ArrayList<>();
	}
	
	public List<Long> journalByBrandFolder(long parentFolder,Long siteID){
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
	
	public Long journalByCodeFolder(long parentFolder,String nameFolder,Long siteID){
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
	public JournalArticle getJournalArticleByFolderId(long folderId,String language,Long siteID,String name_structure){
		log.info("Get data folder:"+folderId);
		List<DDMStructure> ddmStructures = new ArrayList<>();
		if(ddmStructures==null || ddmStructures.size() < 0){
		if(getStruct("%>"+name_structure+"<%",siteID).size() > 0){
			ddmStructures= getStruct("%>"+name_structure+"<%",siteID);
		}
		}
		for (DDMStructure ddmStructure : ddmStructures) {
			log.info("Get metadata by structure ID:"+ddmStructure.getStructureId());
			String structureId = ddmStructure.getStructureKey(); // replace with real structure ID
			DynamicQuery dynamicQuery = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journal",PortalClassLoaderUtil.getClassLoader());			
			dynamicQuery.add(PropertyFactoryUtil.forName("groupId").eq(new Long(siteID)));
			dynamicQuery.add(PropertyFactoryUtil.forName("DDMStructureKey").eq(new String(structureId)));
			dynamicQuery.add(PropertyFactoryUtil.forName("folderId").eq(new Long(folderId)));
			    if(JournalArticleLocalServiceUtil.dynamicQuery(dynamicQuery).size()>0){
			    	List<com.liferay.journal.model.impl.JournalArticleImpl> ja=JournalArticleLocalServiceUtil.dynamicQuery(dynamicQuery);
			    	  List<JournalArticle> lastest = getLatestVersionArticle(ja,siteID);
					    for (JournalArticle journalArticleImpl : lastest) {
						   	log.info("Get info"+journalArticleImpl);
							return journalArticleImpl;
					    }
			    }
		}
		
		
			return new JournalArticleImpl();    
}
	
	public List<JournalArticle> getLatestVersionArticle(List<JournalArticleImpl> ja,Long siteID) {
		List<JournalArticle> journalList = new ArrayList<JournalArticle>();
			JournalArticle latestArticle ;
			for (JournalArticle journalArticle : ja) {
				try {
					 latestArticle = JournalArticleLocalServiceUtil.getLatestArticle(journalArticle.getResourcePrimKey());
					if (journalList.contains(latestArticle)) {
						continue;
					} else {
						journalList.add(latestArticle);
					}
				} catch (PortalException | SystemException e) {
					e.printStackTrace();
				}
			}
			return journalList;

		}
	
	public List<DDMStructure> getStruct(String nameStructure,Long siteID) {
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
	
	public List<JournalFolderImpl> journalRootFolder(long parentFolder,String nameFolder,Long siteID){
		DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
		query_journal_folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
		List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
		return ja_1;
		}

	public Long getFolder(Long siteID,String nameFolder,Long parentFolder){
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
	
	
	public boolean validStructure(Long id){
		for (String structureID : Contants.STRUCTURE_IDS) {
			log.info("structure id uno: "+structureID);
			log.info("structure id dos: "+id);
			if(structureID.equals(String.valueOf(id))) return true;
		}
		return false;
	}
	
	/*Obtiene archivos y folder por nombre y folder actual*/
	public List<DLFileEntry> getFilesByName(Long groupId,Long idCurrentFolder,String namefile){
		DynamicQuery query = DynamicQueryFactoryUtil.forClass(DLFileEntry.class, "DLFileEntry",PortalClassLoaderUtil.getClassLoader());
		query.add(RestrictionsFactoryUtil.ilike("title", new StringBuilder("%").append(namefile).append("%").toString()));
		query.add(PropertyFactoryUtil.forName("folderId").eq(idCurrentFolder));
		query.add(PropertyFactoryUtil.forName("groupId").eq(new Long(groupId)));
		return  DLFileEntryLocalServiceUtil.dynamicQuery(query);
		
	}
	
	
	
	public String validateType(String key){
		switch (key) {
		case "ddm-text-html":
		return "text_area";
		case "checkbox":
		return "boolean";
		case "select":
		return "list";
		default:
		return key;
		}
	}
	
	
	public JournalArticle createNewWC(String json) throws PortalException{
		JSONObject jsonObj = JSONFactoryUtil.createJSONObject(json);
		System.out.println(jsonObj.toJSONString());
		System.out.println(jsonObj.get("folderId"));
		
		String folderId = jsonObj.get("folderId").toString();
		String userId = jsonObj.get("userId").toString();
		String groupId = jsonObj.get("groupId").toString();
		String localeDefault= jsonObj.get("localeDefault").toString();
		String title= jsonObj.get("title").toString();
		String ddmStructure= jsonObj.get("ddmStructure").toString();
		String ddmTemplate= jsonObj.get("ddmTemplate").toString();
		String description= jsonObj.get("description").toString();
		
		ServiceContext serviceContext = new ServiceContext();
		serviceContext.setScopeGroupId(Long.parseLong(groupId));
		serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);
		
		Locale locale= new Locale(localeDefault);
		Map<Locale, String> titleMap = new HashMap<Locale, String>();
		titleMap.put(locale, title);
		Map<Locale, String> descriptionMap = new HashMap<Locale, String>();
		descriptionMap.put(locale, description);

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
		}else{
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
		System.out.println("xmlFinal");
		System.out.println(xmlFinal);
		String rootElement="<?xml version=\"1.0\"?><root available-locales=\"es_ES,en_US\" default-locale=\""+localeDefault+"\">"+xmlFinal+"</root>";
		
		JournalArticle objectSave = JournalArticleLocalServiceUtil.addArticle(Long.parseLong(userId),
				Long.parseLong(groupId), Long.parseLong(folderId), titleMap, null, rootElement,
				ddmStructure, ddmTemplate, serviceContext);
		return objectSave;
	}
	
	
	
	
	public JournalArticle UpdateWC(String json) throws PortalException{
		JSONObject jsonObj = JSONFactoryUtil.createJSONObject(json);
		System.out.println(jsonObj.toJSONString());
		System.out.println(jsonObj.get("folderId"));
		
		String folderId = jsonObj.get("folderId").toString();
		String userId = jsonObj.get("userId").toString();
		String groupId = jsonObj.get("groupId").toString();
		String localeDefault= jsonObj.get("localeDefault").toString();
		String title= jsonObj.get("title").toString();
		String articleId= jsonObj.get("articleId").toString();
		ServiceContext serviceContext = new ServiceContext();
		serviceContext.setScopeGroupId(Long.parseLong(groupId));
		serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);
		
		Locale locale= new Locale(localeDefault);
		Map<Locale, String> titleMap = new HashMap<Locale, String>();
		titleMap.put(locale, title);
		Map<Locale, String> descriptionMap = new HashMap<Locale, String>();
		descriptionMap.put(locale, title);

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
		}else{
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
		System.out.println("xmlFinal");
		System.out.println(xmlFinal);
		String rootElement="<?xml version=\"1.0\"?><root available-locales=\"es_ES,en_US\" default-locale=\""+localeDefault+"\">"+xmlFinal+"</root>";
		
		JournalArticle JournalToUpdate = JournalArticleLocalServiceUtil.getArticle(Long.parseLong(articleId));
		JournalArticle JournalToInfo = JournalArticleLocalServiceUtil.getLatestArticle(JournalToUpdate.getResourcePrimKey());
		JournalToInfo.setFolderId(Long.parseLong(folderId));
		JournalToInfo.setUserId(Long.parseLong(userId));
		JournalToInfo.setTitle(folderId);
		JournalToInfo.setContent(rootElement);
		JournalArticle objectSave = JournalArticleLocalServiceUtil.updateArticle(JournalToInfo.getUserId(), JournalToInfo.getGroupId(), JournalToInfo.getFolderId(), JournalToInfo.getArticleId(), JournalToInfo.getVersion()+0.1, JournalToInfo.getContent(), serviceContext);
		return objectSave;
	}
	
	
	
	
	public String readJson(String nested) throws JSONException{
		JSONArray campos = JSONFactoryUtil.createJSONArray(nested);
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
				else{
				
				xmlFinal = xmlFinal +getBaseXML(campos.getJSONObject(i).get("name").toString(),
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
		return xmlFinal;
		}
	
	
	  public String getBaseXML(String name,String type,String values,String indexType,String child){
	  return"<dynamic-element name=\""+name+"\" instance-id=\""+getInstance()+"\" type=\""+type+"\" index-type=\""+indexType+"\">"+ values + child + "</dynamic-element>";
	  } 
	
	public JSONArray example(long ddmStructureId) throws PortalException{
		
		DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getStructure(
				ddmStructureId);

			DDMForm ddmForm = ddmStructure.getDDMForm();

			Map<String, DDMFormField> ddmFormFieldsMap =
				ddmForm.getDDMFormFieldsMap(true);
			
			System.out.println(itStructure(ddmFormFieldsMap));
			return itStructure(ddmFormFieldsMap);
	}
	
	public JSONArray itStructure(Map<String, DDMFormField> ddmFormFieldsMap){
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
			System.out.println(entry.getKey());
		    System.out.println(entry.getValue().getType());	    
			if(entry.getValue().getNestedDDMFormFieldsMap()!=null){
				if(!itStructure(entry.getValue().getNestedDDMFormFieldsMap()).isNull(0))
				structureObject.put("child",itStructure(entry.getValue().getNestedDDMFormFieldsMap()));
			}
			array.put(structureObject);
	
		}
		
		return array;

	}
	
	
	
	
	public JSONArray itStructureParse(Map<String, DDMFormField> ddmFormFieldsMap){
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
			System.out.println(entry.getKey());
		    System.out.println(entry.getValue().getType());	    
			if(entry.getValue().getNestedDDMFormFieldsMap()!=null){
				if(!itStructure(entry.getValue().getNestedDDMFormFieldsMap()).isNull(0))
				structureObject.put("child",itStructure(entry.getValue().getNestedDDMFormFieldsMap()));
			}
			array.put(structureObject);
	
		}
		
		return array;

	}
	
   public String setCDATA(String data){
     return "<![CDATA["+data+"]]>";
   }

   public StringBuilder getInstance(){
   StringBuilder instanceId = new StringBuilder(8);
   String key = PwdGenerator.KEY1 + PwdGenerator.KEY2 + PwdGenerator.KEY3;
     for (int i = 0; i< 8; i++) {
            int pos = (int)Math.floor(Math.random() * key.length());
            instanceId.append(key.charAt(pos));
        }
     return instanceId;
   }
 
  
   public String getValueXML(String value_ES,String value_EN){
	     return "<dynamic-content language-id=\"es_ES\">"+setCDATA(value_ES)+"</dynamic-content>" +
	    		"<dynamic-content language-id=\"en_US\">"+setCDATA(value_ES)+"</dynamic-content>";

	   } 
   
   
   
   public String evaluateContent(String type,JSONArray values){
	   String xml="";
	  	switch (type) {
		case "ddm-text-html":
			if(values.getJSONObject(0).get("en_US")!=null && values.getJSONObject(0).get("es_ES")!=null)
				xml+= "<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>" +
			    		"<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>";
		return xml;
		case "checkbox":
			if(values.getJSONObject(0).get("en_US")!=null && values.getJSONObject(0).get("es_ES")!=null)
				xml+= "<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>" +
			    		"<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>";
		return xml;
		case "ddm-journal-article":
			if(values.getJSONObject(0).get("en_US")!=null && values.getJSONObject(0).get("es_ES")!=null)
				xml+= "<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>" +
			    		"<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>";
		return xml;
		case "select":
			String options_en="";
			String options_es="";
			for (int i = 0; i < values.length(); i++) {
				if(values.getJSONObject(i).get("en_US")!=null && values.getJSONObject(i).get("es_ES")!=null)
					options_en+= "<option>"+setCDATA(values.getJSONObject(i).get("en_US").toString())+"</option>";
				    options_es+= "<option>"+setCDATA(values.getJSONObject(i).get("es_ES").toString())+"</option>";
						
		}
		xml="<dynamic-content language-id=\"en_US\">"+options_en+"</dynamic-content>"+
			"<dynamic-content language-id=\"es_ES\">"+options_es+"</dynamic-content>";
		return xml;
		default:
		if(values.getJSONObject(0).get("en_US")!=null && values.getJSONObject(0).get("es_ES")!=null)
		xml+= "<dynamic-content language-id=\"es_ES\">"+setCDATA(values.getJSONObject(0).get("en_US").toString())+"</dynamic-content>" +
		      "<dynamic-content language-id=\"en_US\">"+setCDATA(values.getJSONObject(0).get("es_ES").toString())+"</dynamic-content>";
		return xml;
		}
	 
   } 
   
	public List<JournalArticleImpl> getWCByCode(Long groupId,String structureId,String code) throws PortalException{
		DynamicQuery queryJournal = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalArticleImpl.class, "journalArticle",PortalClassLoaderUtil.getClassLoader());
		queryJournal.add(RestrictionsFactoryUtil.ilike("content", new StringBuilder("%><![CDATA[").append(code).append("]]></dynamic-content>%").toString()));
		queryJournal.add( RestrictionsFactoryUtil.eq("groupId",new Long(groupId)));
		queryJournal.add(PropertyFactoryUtil.forName("DDMStructureKey").eq(new String(structureId)));
		List<com.liferay.journal.model.impl.JournalArticleImpl> journalResults =JournalArticleLocalServiceUtil.dynamicQuery(queryJournal);		
		if(journalResults.size()>0){
		return journalResults;
		}
		return new ArrayList<>();
	}
	
	
	public List<JournalArticle> getFoldersWCByCode(Long groupId,String nameStructure,String code) throws PortalException{
		List<JournalArticle> journalArray = new ArrayList<>();
		List<DDMStructure> structureKey = getStruct("%>"+nameStructure+"<%", groupId);
				if(getWCByCode(groupId,structureKey.get(0).getStructureKey(),code)!= null && !getWCByCode(groupId,structureKey.get(0).getStructureKey(),code).isEmpty()){
					for (JournalArticle ja : getWCByCode(groupId,structureKey.get(0).getStructureKey(),code)) {
							 if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
					    		 journalArray.add(ja);
					    	 }else{
					    		 journalArray.add(JournalArticleLocalServiceUtil.getLatestArticle(ja.getResourcePrimKey()));
					    	 }
					}	
				}
			
		return journalArray;
	}
	
	public List<DDMStructure> getStructureByName(String nameStructure,Long siteID) {
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
	
	
	
}
