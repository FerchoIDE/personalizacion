package generatorviewclient.liferayservice;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;

import generatorviewclient.config.ConfigPersonalizacion;
import generatorviewclient.constants.Contants;
import generatorviewclient.models.Files;
import com.liferay.document.library.kernel.model.DLFileEntry;
import com.liferay.document.library.kernel.model.DLFolder;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFolderLocalServiceUtil;
import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.model.impl.JournalArticleImpl;
import com.liferay.journal.model.impl.JournalFolderImpl;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.service.JournalArticleResourceLocalServiceUtil;
import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQueryFactoryUtil;
import com.liferay.portal.kernel.dao.orm.PropertyFactoryUtil;
import com.liferay.portal.kernel.dao.orm.QueryDefinition;
import com.liferay.portal.kernel.dao.orm.QueryUtil;
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.PortalClassLoaderUtil;
import com.liferay.portal.kernel.workflow.WorkflowConstants;

@Component(configurationPid = "generatorviewclient.config.ConfigPersonalizacion")
public class JournalArticleServices {
	private static final Log log = LogFactoryUtil.getLog(JournalArticleServices.class);
	
	/*Obtiene lista de archivos por folder de marca y codigo de hotel*/
	public JSONArray getFilesAndFolder(Long groupId,String brand,String code_hotel) throws PortalException{
		long id_base=getRootFolderByConfiguration(groupId);
		Long brandFolder=getFolder(groupId, brand, id_base);
		long currentDateTime = System.currentTimeMillis();
		JSONArray allFiles =JSONFactoryUtil.createJSONArray();
		JSONObject filesObject = null;
		List<DLFileEntry> files_brand = getFilesByFolder(groupId, brandFolder);
		for (DLFileEntry files : files_brand) {
			filesObject = JSONFactoryUtil.createJSONObject();
			filesObject.put("path", files.getFolder().getPath());
			filesObject.put("idFile", files.getFileEntryId());
			filesObject.put("fileName", files.getFileName());
			filesObject.put("fullPath",  "/documents/"+files.getGroupId()+"/"+files.getFolderId()+"/"+files.getFileName()+"/"+files.getUuid()+"?t="+currentDateTime);
			filesObject.put("all", filesObject.toJSONString());
			allFiles.put(filesObject);

		}
		Long hc=getFolder(groupId, code_hotel, brandFolder);
		List<DLFileEntry> files_HotelCode = getFilesByFolder(groupId, hc);
		 for (DLFileEntry files : files_HotelCode) {
			 filesObject = JSONFactoryUtil.createJSONObject();
				filesObject.put("path", files.getFolder().getPath());
				filesObject.put("idFile", files.getFileEntryId());
				filesObject.put("fileName", files.getFileName());
				filesObject.put("fullPath",  "/documents/"+files.getGroupId()+"/"+files.getFolderId()+"/"+files.getFileName());
			 	filesObject.put("all", filesObject.toJSONString());
				allFiles.put(filesObject);
				}
	   JSONArray folders = getFolders(groupId, hc);
	   JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	   JSONArray results = ReadJSON(folders,filesArray);
	   for (int index = 0;index < results.length(); index++) {
	        JSONObject jsonObject = results.getJSONObject(index);
	        if(jsonObject.length()>0){
	        	filesObject = JSONFactoryUtil.createJSONObject();
				filesObject.put("path", jsonObject.getString("idFile"));
				filesObject.put("idFile", jsonObject.getString("filename"));
				filesObject.put("fileName",jsonObject.getString("path"));
				filesObject.put("fullPath",  jsonObject.getString("fullPath"));
				filesObject.put("all", filesObject.toJSONString());
				allFiles.put(filesObject);

	        }
	        
	        }
	   System.out.println(allFiles.toJSONString());
	   return allFiles;
	}
	
  
	public JSONArray ReadJSON(JSONArray folders,JSONArray filesArray) throws PortalException{
		JSONObject folderObject=null;
		for (int index = 0;index < folders.length(); index++) {
			    folderObject = JSONFactoryUtil.createJSONObject();
		        JSONObject jsonObject = folders.getJSONObject(index);
		        if(!jsonObject.getString("filename").isEmpty()){
		        	folderObject.put("path", jsonObject.getString("path"));
		        	folderObject.put("filename", jsonObject.getString("filename"));
		        	folderObject.put("idFile", jsonObject.getString("idFile"));
		        	folderObject.put("fullPath", jsonObject.getString("fullPath"));
		      
		        }
		        filesArray.put(folderObject);
		        if(jsonObject.getJSONArray("child")!=null){
		        	JSONArray childsNodesJsonObject = jsonObject.getJSONArray("child");
		        	ReadJSON(childsNodesJsonObject,filesArray);
		      
		        }
		        else if(jsonObject.getJSONArray("files")!=null){
		        	JSONArray childsNodesJsonObject = jsonObject.getJSONArray("files");
		         	ReadJSON(childsNodesJsonObject,filesArray);
		       }
		        
		      }
		return filesArray;
	}
	
	public JSONArray getFilesAndFolders(Long groupId,String brand,String type,String code_hotel) throws PortalException{
		long id_base=getRootFolderByConfiguration(groupId);
		Long brandFolder=getFolder(groupId, brand, id_base);
		getFilesByFolder(groupId, brandFolder);
		Long hc=getFolder(groupId, code_hotel, brandFolder);
		getFilesByFolder(groupId, hc);
        return getFolders(groupId,hc);
	}
	
	public List<DDMStructure> getAllStructuresBySite(Long groupId) throws PortalException {
	DynamicQuery query = DDMStructureLocalServiceUtil.dynamicQuery()
                 .add(PropertyFactoryUtil.forName("groupId").eq(groupId));
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
	
	public List<DDMStructure> getAllStructuresBySite1(Long siteID) {
        DynamicQuery query = DDMStructureLocalServiceUtil.dynamicQuery()
                 .add(PropertyFactoryUtil.forName("groupId").eq(siteID));
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
	
	
	public List<DDMStructure> getStructureByID(Long structureId,Long siteID) {
        DynamicQuery query = DDMStructureLocalServiceUtil.dynamicQuery()
                 .add(PropertyFactoryUtil.forName("structureId").eq(structureId))
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
	
	
	public boolean validStructure(Long id){
		for (String structureID : Contants.STRUCTURE_IDS) {
			if(Long.parseLong(structureID) ==id) return true;
			else return false;
		}
		return false;
	}
	
	public List<DDMStructure> getStructureByName(String nameStructure,Long siteID) {
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
				DynamicQuery folder = DynamicQueryFactoryUtil.forClass(DLFolder.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
				folder.add( RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
				folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
				folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
				List<DLFolder> Folders = DLFolderLocalServiceUtil.dynamicQuery(folder);
				for (DLFolder dlFolder : Folders) {
					listIdFolders.add(dlFolder.getFolderId());
					log.info("Folder:"+dlFolder);
				}
				return listIdFolders.get(0);
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
	public List<JournalFolderImpl> getRateFolder1(long parentFolder,String nameFolder,Long siteID){
		DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
		query_journal_folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
		List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
		return ja_1;
		}
    
    
    public DLFolder getFolderByName(Long groupId,String name) throws PortalException{
    Long base_folder = getRootFolderByConfiguration(groupId);
    return	DLFolderLocalServiceUtil.getFolder(groupId, base_folder, name);
    }
    
    public List<DLFolder> getSubFolderByFolderParent(Long groupId,Long idFolder){
    	List<DLFolder> dlFolders = DLFolderLocalServiceUtil.getFolders(groupId, idFolder);
    	if(dlFolders.size()>0){
    		return dlFolders;
    	}
      return new ArrayList<>();
    }
    
    public List<DLFileEntry> getFilesByFolder(Long siteID,Long idFolder) throws PortalException{
    	List<DLFileEntry> results = DLFileEntryLocalServiceUtil.getFileEntries(siteID,idFolder);
    	if(results.size()>0){
    		return results;
    	}
    	return new ArrayList<>();
    }
    /*Marca codigo_hotel tipo*/
	public long getRootFolderByConfiguration(Long groupId) throws PortalException{
	
		DLFolder idFolder = null;
		for (String baseFileEntry : Contants.DLFILEENTRY_BASE) {
			if(idFolder==null){
				DLFolder _idFolder = DLFolderLocalServiceUtil.getFolder(34843L);
//				System.out.println(_idFolder.getParentFolder().getFolderId());
				System.out.println(_idFolder.getGroupId());
				System.out.println(_idFolder.getName());


			 idFolder= DLFolderLocalServiceUtil.getFolder(groupId, 0, baseFileEntry);
			}
			else{
			 idFolder= DLFolderLocalServiceUtil.getFolder(groupId, idFolder.getFolderId(), baseFileEntry);
			}
			log.info(idFolder.getName()+"id:"+idFolder.getFolderId());
			}
			
		
		return idFolder.getFolderId();
	}

	@SuppressWarnings("unchecked")
	public List<generatorviewclient.models.Files> getFoldersAndFiles(Long groupId,Long parent) throws PortalException{
		QueryDefinition queryDefinition = new QueryDefinition(WorkflowConstants.STATUS_ANY, QueryUtil.ALL_POS, QueryUtil.ALL_POS, null);
		List<Object> foldersAndFileEntriesAndFileShortcuts= DLFolderLocalServiceUtil.getFoldersAndFileEntriesAndFileShortcuts(groupId, parent, null, true, queryDefinition);
		for (Object folderAndFileEntryAndFileShortcut: foldersAndFileEntriesAndFileShortcuts) {
			if (folderAndFileEntryAndFileShortcut instanceof DLFileEntry) {
		    	DLFileEntry fileEntry = (DLFileEntry)folderAndFileEntryAndFileShortcut;	
		        log.info("filename:________"+fileEntry.getFileName());
		    }
			else if (folderAndFileEntryAndFileShortcut instanceof DLFolder) {
		    	DLFolder subFolder = (DLFolder) folderAndFileEntryAndFileShortcut;
		        log.info("sub:__________"+subFolder.getName());
		        if(subFolder!=null){
		        	getFoldersAndFiles(groupId, subFolder.getFolderId());
		        }
		    } 
	     }
		 return new ArrayList<>();
	}
	
	
	public List<generatorviewclient.models.Files> getFolderquertys(Long groupId,Long parent) throws PortalException{
		List<generatorviewclient.models.Files> files= new ArrayList<>();
		generatorviewclient.models.Files file= null;
		
		List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, parent);
		if(listFolders != null && listFolders.size() > 0){
			for (DLFolder object : listFolders) {
					if(getFilesByFolder(groupId, object.getFolderId())!= null && !getFilesByFolder(groupId, object.getFolderId()).isEmpty()){
					for (DLFileEntry fileentry : getFilesByFolder(groupId, object.getFolderId())) {
						file= new Files();
						file.setFileentry(fileentry);
						files.add(file);
					}
					
				}
				if(getFolderquertys(groupId,object.getFolderId())!= null && !getFolderquertys(groupId,object.getFolderId()).isEmpty()){
					log.info("entro");
					getFolderquertys(groupId,object.getFolderId());
				}
				
			}
		}
		return files;
	}
	
	public JSONArray getFolders(Long groupId,Long parent) throws PortalException{
		List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, parent);
		JSONArray filesArray,folderArray=JSONFactoryUtil.createJSONArray();
	    JSONObject folderObject=null,filesObject=null; 
	    long currentDateTime = System.currentTimeMillis();
		if(listFolders != null && listFolders.size() > 0){
			for (DLFolder object : listFolders) {
				folderObject=JSONFactoryUtil.createJSONObject();
				folderObject.put("name", object.getName());
				folderObject.put("code", object.getFolderId());
				filesArray = JSONFactoryUtil.createJSONArray();
				if(getFilesByFolder(groupId, object.getFolderId())!= null && !getFilesByFolder(groupId, object.getFolderId()).isEmpty()){
					for (DLFileEntry file : getFilesByFolder(groupId, object.getFolderId())) {
						filesObject=JSONFactoryUtil.createJSONObject();
						filesObject.put("idFile", file.getFileEntryId());
						filesObject.put("filename", file.getFileName());
						filesObject.put("path", file.getFolder().getPath());
						filesObject.put("fullPath", "/documents/"+file.getGroupId()+"/"+file.getFolderId()+"/"+file.getFileName()+"/"+file.getUuid()+"?t="+currentDateTime);
						filesArray.put(filesObject);
					}
					folderObject.put("files", filesArray);
				}
				if(getFolders(groupId,object.getFolderId())!= null && !getFolders(groupId,object.getFolderId()).isNull(0)){
					folderObject.put("child", getFolders(groupId,object.getFolderId()));
				}
				folderArray.put(folderObject);
			}
		}
		return folderArray;
	}
	
	



	@Activate
	@Modified
	public void activate(Map<String, Object> properties) {
	
		System.out.println("Configuración actualizada  " + new Date().toString());
		
		/*
		 * Demonstrate updates to the configuration object for this bundle. 
		 */
	
		_configuration = ConfigurableUtil.createConfigurable(ConfigPersonalizacion.class, properties);
		
		if (_configuration != null) {
			System.out.println("---------"+_configuration.StructureId());
			System.out.println("---------"+_configuration.DLFileEntryFolderBase());
			Contants.STRUCTURE_IDS=_configuration.StructureId();
			String[] DLFILEENTRY_BASE = { "Marcas","Media" };
			Contants.DLFILEENTRY_BASE= DLFILEENTRY_BASE;//_configuration.DLFileEntryFolderBase();
			if(Contants.STRUCTURE_IDS!=null){
				for (String iterable_element : Contants.STRUCTURE_IDS) {
					System.out.println("Registro actual en la configuración, info="+iterable_element);

				}
			}
			if(Contants.DLFILEENTRY_BASE!=null) {
				for (String iterable_element : Contants.DLFILEENTRY_BASE) {
					System.out.println("Registro actual en la configuración, info=" + iterable_element);

				}
			}
			
		} else {
			System.out.println("No hay datos en la configuración inicial");
		}
	}

    private volatile ConfigPersonalizacion _configuration;
 
    }