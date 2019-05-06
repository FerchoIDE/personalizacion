package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.List;

import generatorviewclient.api.IJournalApi;
import generatorviewclient.constants.Contants;

import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.model.JournalFolder;
import com.liferay.journal.model.impl.JournalFolderImpl;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.service.JournalFolderLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.service.ServiceContext;


public class JournalApi implements IJournalApi {
	  private static final Log _log = LogFactoryUtil.getLog(JournalApi.class);
	  private static QueriesLiferayApi _query = new QueriesLiferayApi();

	  
		@Override
		public JSONArray getListJournalFoldersByBrand(Long groupId, Long brand)
				throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        return _query.getJournalFoldersJsonOneLevel(groupId, brand, filesArray);
	        
		}
		
		
		@Override
		public JSONArray getListJournalFoldersByBrand(Long groupId, String brand) throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			if(brand!=null){
				Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
				return _query.getJournalFoldersJsonOneLevel(groupId, brandFolder, filesArray);
			}
			else{
				 return _query.getJournalFoldersJsonOneLevel(groupId, idBase, filesArray);

			}
			
		}
	    @Override
		public JSONArray getListJournalFoldersBrand(Long groupId) throws PortalException {
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        return _query.getJournalFoldersJsonOneLevel(groupId, idBase, filesArray);
		}
	  
	    @Override
	    public JSONArray getListJournalFolders(Long groupId,String brand,String codeHotel) throws PortalException{
	        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        long idBase= getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	        if(codeHotel!=null && brand!=null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
	            filesArray=_query.getJournalFoldersJson(groupId, hotelCode, filesArray);
	            if(JournalFolderLocalServiceUtil.getFolder(hotelCode)!=null){
	            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
	 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(hotelCode); 
	 	        filesObject.put("folderId", object.getFolderId());
	 	        filesObject.put("nameFolder", object.getName());
	 	        filesArray.put(filesObject);
	            }
	            return filesArray;
	        
	        }
	        else if(codeHotel==null && brand!=null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            filesArray=_query.getJournalFoldersJson(groupId, brandFolder, filesArray);
	            if(JournalFolderLocalServiceUtil.getFolder(brandFolder)!=null){
	            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
	 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(brandFolder); 
	 	        filesObject.put("folderId", object.getFolderId());
	 	        filesObject.put("nameFolder", object.getName());
	 	        filesArray.put(filesObject);
	            }
	            return filesArray;
	        }
	        else if(brand==null && codeHotel!=null){
	        	   filesArray=_query.getJournalFoldersJson(groupId, idBase, filesArray);
		            if(JournalFolderLocalServiceUtil.getFolder(idBase)!=null){
		            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
		 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(idBase); 
		 	        filesObject.put("folderId", object.getFolderId());
		 	        filesObject.put("nameFolder", object.getName());
		 	        filesArray.put(filesObject);
		            }
		            return filesArray;
	        }else{
	            return _query.getJournalFoldersJson(groupId, idBase, filesArray);
	        }

	    }

	    @Override
	    public JSONArray getListJournalFoldersByCode(Long groupId,Long codeBrand) throws PortalException{
	        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        if(_query.getJournalFoldersJson(groupId, codeBrand, filesArray)!= null){
	            return _query.getJournalFoldersJson(groupId, codeBrand, filesArray);
	        }
	        return filesArray;
	    }
	  
	    @Override
	    public List<JournalArticle> getWCByFolder(Long groupId,Long folderId) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	        if(folderId!=null && groupId!=null){
	            journalArray=_query.getJournalFoldersAndWC(groupId, folderId, journalArray);
	            if(_query.getWCByJournalFolder(groupId, folderId)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, folderId)) {
	                    journalArray.add(journal);
	                }
	            }
	            return journalArray;

	        }
	        return new ArrayList<>();
	    }
	   
	    @Override
	    public List<JournalArticle> getWCByName(Long groupId,String brand,String codeHotel,String name) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	        long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	        if(codeHotel!=null && brand!=null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray=_query.getFoldersWCByName(groupId, idBase,name, journalArray);
	            if(_query.getWCByJournalFolder(groupId, hotelCode)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, hotelCode)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	        }
	        else if(brand!=null && codeHotel==null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            journalArray=_query.getFoldersWCByName(groupId, idBase,name, journalArray);
	            if(_query.getWCByJournalFolderAndName(groupId, idBase,name)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }
	        else if(codeHotel!=null && brand==null){
	            journalArray=_query.getFoldersWCByName(groupId, idBase,name, journalArray);
	            if(_query.getWCByJournalFolderAndName(groupId, idBase,name)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndName(groupId, idBase,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }else{
	            journalArray=_query.getFoldersWCByName(groupId, idBase,name, journalArray);
	            if(_query.getWCByJournalFolderAndName(groupId, idBase,name)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndName(groupId, idBase,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }

	    }
	    @Override
	    public List<JournalArticle> getWCAndJournalFolder(Long groupId,String brand,String codeHotel) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	        long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	        if(codeHotel!=null && brand!=null){
	           System.out.println("case1");
	        	Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray=_query.getJournalFoldersAndWC(groupId, hotelCode, journalArray);
	            if(_query.getWCByJournalFolder(groupId, hotelCode)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, hotelCode)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	        }
	        else if(brand!=null && codeHotel==null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            journalArray=_query.getJournalFoldersAndWC(groupId, brandFolder, journalArray);
	            if(_query.getWCByJournalFolder(groupId, brandFolder)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, brandFolder)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }
	        else if(codeHotel!=null && brand==null){
	            journalArray=_query.getJournalFoldersAndWC(groupId, idBase, journalArray);
	            if(_query.getWCByJournalFolder(groupId, idBase)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, idBase)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }else{
	            journalArray=_query.getJournalFoldersAndWC(groupId, idBase, journalArray);
	            if(_query.getWCByJournalFolder(groupId, idBase)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, idBase)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }


	    }
	    //getJournalFoldersAndWCByType
	    @Override
	    public List<JournalArticle> getWCByJournalFolderAndStructureType(Long groupId,String brand,String codeHotel,String nameStructure) throws PortalException{
	        if(_query.getStructureByName(nameStructure, groupId)!=null && !_query.getStructureByName(nameStructure, groupId).isEmpty()){
	            List<DDMStructure> ddm = _query.getStructureByName(nameStructure, groupId);
	            List<JournalArticle> journalArray= new ArrayList<>();
	            long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	            if(brand!=null && codeHotel!=null){//B�squeda por Marca y Codigo de Hotlel
	                Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	                Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
	                journalArray = _query.getJournalFoldersAndWCByType(groupId, hotelCode,ddm.get(0).getStructureKey(), journalArray);
	                if(_query.getWCByJournalFolderAndTypeStructure(groupId, hotelCode,ddm.get(0).getStructureKey())!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructure(groupId, idBase,ddm.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	                
	              
	            }
	            else if(brand!=null && codeHotel==null){//B�squeda por marca
	                Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	                journalArray = _query.getJournalFoldersAndWCByType(groupId, brandFolder,ddm.get(0).getStructureKey(), journalArray);
	                if(_query.getWCByJournalFolderAndTypeStructure(groupId, brandFolder,ddm.get(0).getStructureKey())!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructure(groupId, brandFolder,ddm.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;

	            }
	            else{//Si no se cumplen estos casos B�squeda desde la raiz
	            	 journalArray = _query.getJournalFoldersAndWCByType(groupId, idBase,ddm.get(0).getStructureKey(), journalArray);
		                if(_query.getWCByJournalFolderAndTypeStructure(groupId, idBase,ddm.get(0).getStructureKey())!=null){
			                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructure(groupId, idBase,ddm.get(0).getStructureKey())) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
			                        journalArray.add(journal);
			                    }
			                }
			            }
		                return journalArray;
	            }
	        }
	        else{
	            return new ArrayList<>();
	        }

	    }
	    @Override
	    public List<JournalArticle> getWCAndJournalFolderByName(Long groupId,String brand,String codeHotel,String name) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	        long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	        if(codeHotel!=null && brand!=null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray =  _query.getFoldersWCByName(groupId, hotelCode,name, journalArray);
              if(_query.getWCByJournalFolderAndName(groupId, hotelCode,name)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
              return journalArray;

	        }
	        else if(brand!=null && codeHotel==null){
	            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
              journalArray =  _query.getFoldersWCByName(groupId, brandFolder,name, journalArray);
              if(_query.getWCByJournalFolderAndName(groupId, brandFolder,name)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
              return journalArray;
	            
	        }else{
	        	 journalArray =  _query.getFoldersWCByName(groupId, idBase,name, journalArray);
	                if(_query.getWCByJournalFolderAndName(groupId, idBase,name)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndName(groupId, idBase,name)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	        }


	    }
	    @Override
		public List<JournalArticle> getWCAndJournalFolderByName(Long groupId, String brand, String codeHotel, String name,
				Long structureId) throws PortalException {
	    	  List<JournalArticle> journalArray= new ArrayList<>();
	          long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	          if(codeHotel!=null && brand!=null){
	              Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	              Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
	              journalArray = _query.getFoldersWCByNameSI(groupId, hotelCode,name,structureId, journalArray);
	                if(_query.getWCByJournalFolderAndNameSI(groupId, hotelCode,name,structureId)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndNameSI(groupId, hotelCode,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          
	          }
	          else if(brand!=null && codeHotel==null){
	              Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
	              journalArray = _query.getFoldersWCByNameSI(groupId, brandFolder,name,structureId, journalArray);
	                if(_query.getWCByJournalFolderAndNameSI(groupId, brandFolder,name,structureId)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndNameSI(groupId, brandFolder,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          }
	          else if(codeHotel!=null && brand==null){
	        	  journalArray = _query.getFoldersWCByNameSI(groupId, idBase,name,structureId, journalArray);
	                if(_query.getWCByJournalFolderAndNameSI(groupId, idBase,name,structureId)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndNameSI(groupId, idBase,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          }else{
	        	  journalArray = _query.getFoldersWCByNameSI(groupId, idBase,name,structureId, journalArray);
	                if(_query.getWCByJournalFolderAndNameSI(groupId, idBase,name,structureId)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndNameSI(groupId, idBase,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          }
		}
	    
	    
	    @Override
	    public List<JournalArticle> searchWebContentByCodeHotelFirstLevel(Long groupId,String structureName,String code) throws PortalException{
	        if(_query.getFoldersWCByCode(groupId, structureName, code)!=null){
	            return _query.getFoldersWCByCode(groupId, structureName, code);
	        }else{
	            return new ArrayList<>();
	        }
	    }
	    @Override
		public List<JournalArticle> searchWebContentByCodeHotelFirstLevelByFolder(Long groupId, String structureName,
				String code,Long folderId) throws PortalException {
	    	if(_query.getFoldersWCByCodeFolderId(groupId, structureName, code,folderId)!=null){
	            return _query.getFoldersWCByCodeFolderId(groupId, structureName, code,folderId);
	        }else{
	            return new ArrayList<>();
	        }
		}
	    

	    /***M�todos privados****/

	    private long getHotelFolderRootByConfigurationFolderWebcontent(Long groupId) throws PortalException{
	        JournalFolderImpl idFolder = null;
	        for (String baseFileEntry : Contants.JOURNAL_HOTEL) {
	            if(idFolder!=null){
	                idFolder= _query.getJournalFolderByName(groupId, idFolder.getFolderId(), baseFileEntry);
	            }
	            else{
	                idFolder= _query.getJournalFolderByName(groupId, new Long(0), baseFileEntry);
	            }
	            _log.info("Folder webcontent:"+idFolder.getName()+"id:"+idFolder.getFolderId());
	        }
	        return idFolder.getFolderId();
	    }
	  
	 @Override
	    public JournalArticle saveWC(String json) throws PortalException {
	        return _query.createNewWC(json);
	    }

	    @Override
	    public JournalArticle updateWC(String json) throws PortalException {
	        return _query.UpdateWC(json);
	    }

		@Override
		public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, String brand, String codeHotel, String TypeContent) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			List<DDMStructure> ddmSt = _query.getStructureByName(TypeContent, groupId);
			if(codeHotel!=null && brand!=null){
			Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
			Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
			journalArray = _query.getJournalFoldersAndWCByType(groupId, hotelCode, ddmSt.get(0).getStructureKey(), journalArray);
			if(_query.getWCByJournalFolderAndTypeStructure(groupId, hotelCode, ddmSt.get(0).getStructureKey())!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructure(groupId, hotelCode, ddmSt.get(0).getStructureKey())) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
            return journalArray;	
			}
			else if(codeHotel==null && brand!=null){
				Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
				journalArray = _query.getJournalFoldersAndWCByType(groupId, brandFolder, ddmSt.get(0).getStructureKey(), journalArray);
				if(_query.getWCByJournalFolderAndTypeStructure(groupId, brandFolder, ddmSt.get(0).getStructureKey())!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructure(groupId, brandFolder, ddmSt.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;	
	              }
			else if(brand==null){
				journalArray = _query.getJournalFoldersAndWCByType(groupId, idBase, ddmSt.get(0).getStructureKey(), journalArray);
				if(_query.getWCByJournalFolderAndTypeStructure(groupId, idBase, ddmSt.get(0).getStructureKey())!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructure(groupId, idBase, ddmSt.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;
			}
			return journalArray;
			
		}

		@Override
		public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, Long folderId, Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			return _query.getJournalFoldersAndWCByTypeId(groupId, folderId, structureId, journalArray);	
		}
		
		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, String brand, String codeHotel,
				Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			if(codeHotel!=null && brand!=null){
			Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
			Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
			journalArray = _query.getJournalFoldersAndWCByTypeId(groupId, hotelCode, structureId, journalArray);
			if(_query.getWCByJournalFolderAndTypeStructureId(groupId, hotelCode, structureId)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureId(groupId, hotelCode, structureId)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
            return journalArray;	
			}
			else if(codeHotel==null && brand!=null){
				Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
				journalArray = _query.getJournalFoldersAndWCByTypeId(groupId, brandFolder, structureId, journalArray);
				if(_query.getWCByJournalFolderAndTypeStructureId(groupId, brandFolder, structureId)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureId(groupId, brandFolder, structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;	}
			else if(brand==null){
				journalArray = _query.getJournalFoldersAndWCByTypeId(groupId, idBase, structureId, journalArray);
				if(_query.getWCByJournalFolderAndTypeStructureId(groupId, idBase, structureId)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureId(groupId, idBase, structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;			}
			return journalArray;
		}

		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, String brand, String codeHotel, String title,String TypeContent) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			List<DDMStructure> ddmSt = _query.getStructureByName(TypeContent, groupId);
			if(codeHotel!=null && brand!=null){
			Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
			Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
			journalArray = _query.getJournalFoldersAndWCByTypeTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title, journalArray);
			if(_query.getWCByJournalFolderAndTypeStructureTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
            return journalArray;
			}
			else if(codeHotel==null && brand!=null){
				Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
				journalArray = _query.getJournalFoldersAndWCByTypeTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title, journalArray);
				if(_query.getWCByJournalFolderAndTypeStructureTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;		
	              }
			else if(brand==null){
				journalArray = _query.getJournalFoldersAndWCByTypeTitle(groupId, idBase, ddmSt.get(0).getStructureKey(),title, journalArray);
				if(_query.getWCByJournalFolderAndTypeStructureTitle(groupId, idBase, ddmSt.get(0).getStructureKey(),title)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureTitle(groupId, idBase, ddmSt.get(0).getStructureKey(),title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;				}
			return journalArray;
			
		}

		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, Long folderId, String title,Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			return _query.getJournalFoldersAndWCByTypeTitleS(groupId, folderId,title,structureId, journalArray);
			
		}
		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, String brand, String codeHotel, String title,
				Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			if(codeHotel!=null && brand!=null){
			Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
			Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
			journalArray = _query.getJournalFoldersAndWCByTypeTitleS(groupId, hotelCode,title,structureId, journalArray);
			if(_query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, hotelCode,structureId,title)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, hotelCode,structureId,title)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
            return journalArray;
			}
			else if(codeHotel==null && brand!=null){
				Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
				journalArray = _query.getJournalFoldersAndWCByTypeTitleS(groupId, brandFolder,title,structureId, journalArray);
				if(_query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, brandFolder,structureId,title)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, brandFolder,structureId,title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;			}
			else if(brand==null){
				journalArray = _query.getJournalFoldersAndWCByTypeTitleS(groupId, idBase,title,structureId, journalArray);
				if(_query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, idBase,structureId,title)!=null){
		                for (JournalArticle journal : _query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, idBase,structureId,title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;		
	         }
			return journalArray;
			
		}
		
		


		

		@Override
		public List<JournalArticle> getWCByFolderId(Long groupId,Long folderId) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();   
	            if(_query.getWCByJournalFolder(groupId, folderId)!=null){
	                for (JournalArticle journal : _query.getWCByJournalFolder(groupId, folderId)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	    }
		 @Override
		    public JSONArray createFolderNestedFolderId(Long userId,Long groupId,Long parentFolderId,String name) throws PortalException{
		        ServiceContext serviceContext = new ServiceContext();
		        serviceContext.setScopeGroupId(groupId);
		        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		        JSONObject filesObject =JSONFactoryUtil.createJSONObject();
		        JournalFolder object = JournalFolderLocalServiceUtil.addFolder(userId, groupId, parentFolderId, name, name, serviceContext);
		        filesObject.put("folderId", object.getFolderId());
		        filesObject.put("nameFolder", object.getName());
		        filesArray.put(filesObject);
		        return filesArray;
		    }
}

