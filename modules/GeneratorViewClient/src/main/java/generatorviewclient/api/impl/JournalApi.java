package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import generatorviewclient.api.IJournalApi;
import generatorviewclient.constants.Contants;

import com.liferay.asset.kernel.model.AssetEntry;
import com.liferay.asset.kernel.service.AssetEntryLocalServiceUtil;
import com.liferay.asset.kernel.service.persistence.AssetEntryQuery;
import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.model.JournalArticleResource;
import com.liferay.journal.model.JournalFolder;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.service.JournalArticleResourceLocalServiceUtil;
import com.liferay.journal.service.JournalFolderLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.Validator;


public class JournalApi extends QueriesLiferayApi implements IJournalApi {
	 private static final Log _log = LogFactoryUtil.getLog(JournalApi.class);

	public Long getBaseFolder(Long groupId,String brand,String code_hotel) throws PortalException {
		if(!Validator.isNull(code_hotel)&& !Validator.isNull(brand)) {
			Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
			Long hotelCode= getFolderWC(groupId, code_hotel, brandFolder);
			return hotelCode;
		}else if(!Validator.isNull(brand) && Validator.isNull(code_hotel)){
			return getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
		}
		return Contants.JOURNAL_HOTEL;
	}

	 /*Crear  folder para web content*/
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
	  
		@Override
		public JSONArray getListJournalFoldersByBrand(Long groupId, Long brand)
				throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        return getJournalFoldersJsonOneLevel(groupId, brand, filesArray);
	        
		}
		
		
		@Override
		public JSONArray getListJournalFoldersByBrand(Long groupId, String brand) throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
			if(!Validator.isNull(brand)){
				Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
				return  getJournalFoldersJsonOneLevel(groupId, brandFolder, filesArray);
			}
			else{
				 return  getJournalFoldersJsonOneLevel(groupId, Contants.JOURNAL_HOTEL, filesArray);

			}
			
		}
	    @Override
		public JSONArray getListJournalFoldersBrand(Long groupId) throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        return  getJournalFoldersJsonOneLevel(groupId, Contants.JOURNAL_HOTEL, filesArray);
		}
	  
	    @Override
	    public JSONArray getListJournalFolders(Long groupId,String brand,String codeHotel) throws PortalException{
	        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        if(!Validator.isNull(codeHotel)&& !Validator.isNull(brand)) {
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	            filesArray= getJournalFoldersJson(groupId, hotelCode, filesArray);
	            if(JournalFolderLocalServiceUtil.getFolder(hotelCode)!=null){
	            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
	 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(hotelCode); 
	 	        filesObject.put("folderId", object.getFolderId());
	 	        filesObject.put("nameFolder", object.getName());
	 	        filesArray.put(filesObject);
	            }
	            return filesArray;
	        
	        }
	        else if(Validator.isNull(codeHotel)&& !Validator.isNull(brand)) {
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            filesArray= getJournalFoldersJson(groupId, brandFolder, filesArray);
	            if(JournalFolderLocalServiceUtil.getFolder(brandFolder)!=null){
	            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
	 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(brandFolder); 
	 	        filesObject.put("folderId", object.getFolderId());
	 	        filesObject.put("nameFolder", object.getName());
	 	        filesArray.put(filesObject);
	            }
	            return filesArray;
	        }
	        else if(Validator.isNull(codeHotel) && !Validator.isNull(brand)) {
	        	   filesArray= getJournalFoldersJson(groupId, Contants.JOURNAL_HOTEL, filesArray);
		            if(JournalFolderLocalServiceUtil.getFolder(Contants.JOURNAL_HOTEL)!=null){
		            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
		 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(Contants.JOURNAL_HOTEL); 
		 	        filesObject.put("folderId", object.getFolderId());
		 	        filesObject.put("nameFolder", object.getName());
		 	        filesArray.put(filesObject);
		            }
		            return filesArray;
	        }else{
	            return  getJournalFoldersJson(groupId, Contants.JOURNAL_HOTEL, filesArray);
	        }

	    }

	    @Override
	    public JSONArray getListJournalFoldersByCode(Long groupId,Long codeBrand) throws PortalException{
	        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        if(getJournalFoldersJson(groupId, codeBrand, filesArray)!= null){
	            return  getJournalFoldersJson(groupId, codeBrand, filesArray);
	        }
	        return filesArray;
	    }
	  
	    @Override
	    public List<JournalArticle> getWCByFolder(Long groupId,Long folderId) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	        if(!Validator.isNull(folderId) && !Validator.isNull(groupId)){
	            journalArray= getJournalFoldersAndWC(groupId, folderId, journalArray);
	            if(!Validator.isNull(getWCByJournalFolder(groupId, folderId))){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, folderId)) {
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
	        if(!Validator.isNull(codeHotel) && !Validator.isNull(brand)){
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray= getFoldersWCByName(groupId, Contants.JOURNAL_HOTEL,name, journalArray);
	            if(!Validator.isNull(getWCByJournalFolder(groupId, hotelCode))){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, hotelCode)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	        }
	        else if(!Validator.isNull(brand) && Validator.isNull(codeHotel)){
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            journalArray= getFoldersWCByName(groupId, Contants.JOURNAL_HOTEL,name, journalArray);
	            if( getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }
	        else if(Validator.isNull(brand) && !Validator.isNull(codeHotel)){
	            journalArray= getFoldersWCByName(groupId, Contants.JOURNAL_HOTEL,name, journalArray);
	            if( getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }else{
	            journalArray= getFoldersWCByName(groupId, Contants.JOURNAL_HOTEL,name, journalArray);
	            if( getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
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
	        if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
	        	Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray= getJournalFoldersAndWC(groupId, hotelCode, journalArray);
	            if(getWCByJournalFolder(groupId, hotelCode)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, hotelCode)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	        }
	        
	        else if(!Validator.isNull(brand) && Validator.isNull(codeHotel)){
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            journalArray= getJournalFoldersAndWC(groupId, brandFolder, journalArray);
	            if(getWCByJournalFolder(groupId, brandFolder)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, brandFolder)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }
	        else if(Validator.isNull(brand) && !Validator.isNull(codeHotel)){
	            journalArray= getJournalFoldersAndWC(groupId, Contants.JOURNAL_HOTEL, journalArray);
	            if(getWCByJournalFolder(groupId, Contants.JOURNAL_HOTEL)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, Contants.JOURNAL_HOTEL)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }else{
	            journalArray= getJournalFoldersAndWC(groupId, Contants.JOURNAL_HOTEL, journalArray);
	            if(getWCByJournalFolder(groupId, Contants.JOURNAL_HOTEL)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, Contants.JOURNAL_HOTEL)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }


	    }
	    //getJournalFoldersAndWCByType
	    @Override
	    public List<JournalArticle> getWCByJournalFolderAndStructureType(Long groupId,String brand,String codeHotel,Long structureId) throws PortalException{
	       
	            DDMStructure ddm =  DDMStructureLocalServiceUtil.getDDMStructure(structureId);
	            List<JournalArticle> journalArray= new ArrayList<>();
	            if(brand!=null && codeHotel!=null){//Bï¿½squeda por Marca y Codigo de Hotlel
	                Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	                Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	                journalArray =  getJournalFoldersAndWCByType(groupId, hotelCode,ddm.getStructureKey(), journalArray);
	                if( getWCByJournalFolderAndTypeStructure(groupId, hotelCode,ddm.getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, Contants.JOURNAL_HOTEL,ddm.getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	                
	              
	            }
	            else if(!Validator.isNull(brand) && Validator.isNull(codeHotel)){//Bï¿½squeda por marca
	                Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	                journalArray =  getJournalFoldersAndWCByType(groupId, brandFolder,ddm.getStructureKey(), journalArray);
	                if( getWCByJournalFolderAndTypeStructure(groupId, brandFolder,ddm.getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, brandFolder,ddm.getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;

	            }
	            else{//Si no se cumplen estos casos Bï¿½squeda desde la raiz
	            	 journalArray =  getJournalFoldersAndWCByType(groupId, Contants.JOURNAL_HOTEL,ddm.getStructureKey(), journalArray);
		                if( getWCByJournalFolderAndTypeStructure(groupId, Contants.JOURNAL_HOTEL,ddm.getStructureKey())!=null){
			                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, Contants.JOURNAL_HOTEL,ddm.getStructureKey())) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
			                        journalArray.add(journal);
			                    }
			                }
			            }
		                return journalArray;
	            }
	       
	       	    }
	    @Override
	    public List<JournalArticle> getWCAndJournalFolderByName(Long groupId,String brand,String codeHotel,String name) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	         if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	            Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray =   getFoldersWCByName(groupId, hotelCode,name, journalArray);
             if( getWCByJournalFolderAndName(groupId, hotelCode,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
             return journalArray;

	        }
	        else if(!Validator.isNull(brand) && Validator.isNull(codeHotel)){
	            Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
             journalArray =   getFoldersWCByName(groupId, brandFolder,name, journalArray);
             if( getWCByJournalFolderAndName(groupId, brandFolder,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
             return journalArray;
	            
	        }else{
	        	 journalArray =   getFoldersWCByName(groupId, Contants.JOURNAL_HOTEL,name, journalArray);
	                if( getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, Contants.JOURNAL_HOTEL,name)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
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
	          if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
	              Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	              Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	              journalArray =  getFoldersWCByNameSI(groupId, hotelCode,name,structureId, journalArray);
	                if(getWCByJournalFolderAndNameSI(groupId, hotelCode,name,structureId)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, hotelCode,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          
	          }
	          else if(!Validator.isNull(brand) && Validator.isNull(codeHotel)){
	              Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
	              journalArray =  getFoldersWCByNameSI(groupId, brandFolder,name,structureId, journalArray);
	                if( getWCByJournalFolderAndNameSI(groupId, brandFolder,name,structureId)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, brandFolder,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          }
	          else if(Validator.isNull(brand) && !Validator.isNull(codeHotel)){
	        	  journalArray =  getFoldersWCByNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId, journalArray);
	                if( getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          }else{
	        	  journalArray =  getFoldersWCByNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId, journalArray);
	                if( getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	          }
		}
	    
	    
	    @Override
	    public List<JournalArticle> searchWebContentByCodeHotelFirstLevel(Long groupId,String structureName,String code) throws PortalException{
	        if( getFoldersWCByCode(groupId, structureName, code)!=null){
	            return  getFoldersWCByCode(groupId, structureName, code);
	        }else{
	            return new ArrayList<>();
	        }
	    }
	    @Override
		public List<JournalArticle> searchWebContentByCodeHotelFirstLevelByFolder(Long groupId, String structureName,
				String code,Long folderId) throws PortalException {
	    	if( getFoldersWCByCodeFolderId(groupId, structureName, code,folderId)!=null){
	            return  getFoldersWCByCodeFolderId(groupId, structureName, code,folderId);
	        }else{
	            return new ArrayList<>();
	        }
		}
	    

	    /***Mï¿½todos privados****/

	   
	  
	 @Override
	    public JournalArticle saveWC(String json) throws PortalException {
	        return  createNewWC(json);
	    }

		public JournalArticle saveWC(org.json.JSONObject jsonObject) throws PortalException {
			return  createNewWC(jsonObject);
		}

	    @Override
	    public JournalArticle updateWC(String json) throws PortalException {
	        return  UpdateWC(json);
	    }



		@Override
		public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, Long folderId, Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			journalArray =  getJournalFoldersAndWCByTypeId(groupId, folderId, structureId, journalArray);
			if(getWCByJournalFolderAndTypeStructureId(groupId, folderId, structureId)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, folderId, structureId)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
			return journalArray;
			}
		
		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByType(
				Long groupId, 
				String brand, 
				String codeHotel,
				Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
			Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
			Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
			journalArray =  getJournalFoldersAndWCByTypeId(groupId, hotelCode, structureId, journalArray);
			if(getWCByJournalFolderAndTypeStructureId(groupId, hotelCode, structureId)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, hotelCode, structureId)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
           return journalArray;	
			}
			else if(Validator.isNull(codeHotel) && !Validator.isNull(brand)){
				Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
				journalArray =  getJournalFoldersAndWCByTypeId(groupId, brandFolder, structureId, journalArray);
				if( getWCByJournalFolderAndTypeStructureId(groupId, brandFolder, structureId)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, brandFolder, structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;	
	              }
			else if(Validator.isNull(brand)){
				journalArray =  getJournalFoldersAndWCByTypeId(groupId, Contants.JOURNAL_HOTEL, structureId, journalArray);
				if( getWCByJournalFolderAndTypeStructureId(groupId, Contants.JOURNAL_HOTEL, structureId)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, Contants.JOURNAL_HOTEL, structureId)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;			
	           }
			return journalArray;
		}

		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, Long folderId, String title,Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			return  getJournalFoldersAndWCByTypeTitleS(groupId, folderId,title,structureId, journalArray);
			
		}
		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, String brand, String codeHotel, String title,
				Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
			Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
			Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
			journalArray =  getJournalFoldersAndWCByTypeTitleS(groupId, hotelCode,title,structureId, journalArray);
			if( getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, hotelCode,structureId,title)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, hotelCode,structureId,title)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
           return journalArray;
			}
			else if(Validator.isNull(codeHotel) && !Validator.isNull(brand)){
				Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
				journalArray =  getJournalFoldersAndWCByTypeTitleS(groupId, brandFolder,title,structureId, journalArray);
				if( getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, brandFolder,structureId,title)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, brandFolder,structureId,title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;			}
			else if(Validator.isNull(brand)){
				journalArray =  getJournalFoldersAndWCByTypeTitleS(groupId, Contants.JOURNAL_HOTEL,title,structureId, journalArray);
				if( getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, Contants.JOURNAL_HOTEL,structureId,title)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, Contants.JOURNAL_HOTEL,structureId,title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
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
	            if(getWCByJournalFolders(groupId, folderId)!=null){
	                for (JournalArticle journal :  getWCByJournalFolders(groupId, folderId)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	    }
		
		 
		 @Override
			public Map<JournalArticle, DDMStructure> getWCandStructureById(Long articleId) throws PortalException {
				Map<JournalArticle, DDMStructure> map = new HashMap<JournalArticle, DDMStructure>();
				JournalArticle curentArticle = JournalArticleLocalServiceUtil.getJournalArticle(articleId);
				if(curentArticle!=null){
					DDMStructure ddmStructure = DDMStructureLocalServiceUtil.getDDMStructure(curentArticle.getDDMStructure().getStructureId());
					map.put(curentArticle, ddmStructure);
				}
				return map;
			}


		@Override
		public List<JournalArticle> getWebcontentRecursiveByTypeFacilities(Long groupId, Long folderId,
				Long[] structuresId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			if(structuresId.length>0) {
			for(Long structureId : structuresId)
			{
			journalArray =  getJournalFoldersAndWCByTypeId(groupId, folderId, structureId, journalArray);
			if(getWCByJournalFolderAndTypeStructureId(groupId, folderId, structureId)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, folderId, structureId)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
	                        journalArray.add(journal);
	                    }
	                }
	            }
			}
			}
			return journalArray;
		}


		@Override
		public List<JournalArticle> getWCAndJournalFolderByNameFacilities(Long groupId, String brand, String codeHotel,
				String name, Long[] structuresId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			if(structuresId.length>0) {
				for(Long structureId : structuresId)
				{
					if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
			              Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
			              Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
			              journalArray =  getFoldersWCByNameSI(groupId, hotelCode,name,structureId, journalArray);
			                if(getWCByJournalFolderAndNameSI(groupId, hotelCode,name,structureId)!=null){
				                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, hotelCode,name,structureId)) {
				                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
				                        journalArray.add(journal);
				                    }
				                }
				            }
			          }
			          else if(!Validator.isNull(brand) && Validator.isNull(codeHotel)){
			              Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
			              journalArray =  getFoldersWCByNameSI(groupId, brandFolder,name,structureId, journalArray);
			                if( getWCByJournalFolderAndNameSI(groupId, brandFolder,name,structureId)!=null){
				                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, brandFolder,name,structureId)) {
				                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
				                        journalArray.add(journal);
				                    }
				                }
				            }
			          }
			          
			          else if(Validator.isNull(brand) && !Validator.isNull(codeHotel)){
			        	  journalArray =  getFoldersWCByNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId, journalArray);
			                if( getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)!=null){
				                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)) {
				                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
				                        journalArray.add(journal);
				                    }
				                }
				            }
			          }else{
			        	  journalArray =  getFoldersWCByNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId, journalArray);
			                if( getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)!=null){
				                for (JournalArticle journal :  getWCByJournalFolderAndNameSI(groupId, Contants.JOURNAL_HOTEL,name,structureId)) {
				                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
				                        journalArray.add(journal);
				                    }
				                }
				            }		          
				}
				}
				}
			return journalArray;
		}

		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByTypesFacilities(Long groupId,String brand,String codeHotel,Long[] structuresId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			if(structuresId.length>0) {
				for(Long structureId : structuresId)
				{
					if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
					Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
					Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
					journalArray =  getJournalFoldersAndWCByTypeId(groupId, hotelCode, structureId, journalArray);
					if(getWCByJournalFolderAndTypeStructureId(groupId, hotelCode, structureId)!=null){
			                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, hotelCode, structureId)) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
			                        journalArray.add(journal);
			                    }
			                }
			            }
					}
					
					else if(Validator.isNull(codeHotel) && !Validator.isNull(brand)){
						Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
						journalArray =  getJournalFoldersAndWCByTypeId(groupId, brandFolder, structureId, journalArray);
						if( getWCByJournalFolderAndTypeStructureId(groupId, brandFolder, structureId)!=null){
				                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, brandFolder, structureId)) {
				                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
				                        journalArray.add(journal);
				                    }
				                }
				            }
			       }
					
					else if(Validator.isNull(brand)){
						journalArray =  getJournalFoldersAndWCByTypeId(groupId, Contants.JOURNAL_HOTEL, structureId, journalArray);
						if( getWCByJournalFolderAndTypeStructureId(groupId, Contants.JOURNAL_HOTEL, structureId)!=null){
				                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureId(groupId, Contants.JOURNAL_HOTEL, structureId)) {
				                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
				                        journalArray.add(journal);
				                    }
				                }
				            }
			           }
				}
				}
			return journalArray;
		}
		@Override
		public List<JournalArticle> getWebContentsByNameAndCategoryAndType(Long groupId,String categoryName,Long structureId,String nameWebcontent) throws PortalException {
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			long[] anyCategoryIds=getWebcontentByCategories(groupId, categoryName);
			List<JournalArticle> journal = new ArrayList<>();
			assetEntryQuery.setAnyCategoryIds(anyCategoryIds);
			assetEntryQuery.setClassName("com.liferay.journal.model.JournalArticle");
			List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
			for (AssetEntry assetEntry : assetEntryList) {
			    JournalArticleResource journalArticleResource = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(assetEntry.getClassPK());
			    journal.addAll(getWCBycategoryAndName(groupId, journalArticleResource.getResourcePrimKey(), nameWebcontent, structureId));
			}
			return journal;
		}
		
		@Override
		public List<JournalArticle> getWebContentsByNameCategoryIdAndType(Long groupId,long categoryId,Long structureId,String nameWebcontent) throws PortalException {
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			List<JournalArticle> journal = new ArrayList<>();
			assetEntryQuery.setAnyCategoryIds(new long[] { categoryId });
			assetEntryQuery.setClassName("com.liferay.journal.model.JournalArticle");
			List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
			for (AssetEntry assetEntry : assetEntryList) {
			    JournalArticleResource journalArticleResource = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(assetEntry.getClassPK());
			    journal.addAll(getWCBycategoryAndName(groupId, journalArticleResource.getResourcePrimKey(), nameWebcontent, structureId));
			}
			return journal;
		}
		@Override
		public List<JournalArticle> getWebContentsByNameCategoryIdAndTypefacility(Long groupId,long categoryId,Long[] structuresId,String nameWebcontent) throws PortalException {
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			List<JournalArticle> journal = new ArrayList<>();
			assetEntryQuery.setAnyCategoryIds(new long[] { categoryId });
			assetEntryQuery.setClassName("com.liferay.journal.model.JournalArticle");
			List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
			for (AssetEntry assetEntry : assetEntryList) {
				for (Long structureId : structuresId) {
					 JournalArticleResource journalArticleResource = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(assetEntry.getClassPK());
					 journal.addAll(getWCByJournalCategoryIdAndType(groupId, journalArticleResource.getResourcePrimKey(), structureId));

				}
				}
			return journal;
		}
		
		@Override
		public JournalArticle moveToTrash(Long userId,Long groupId,String articleId){
		JournalArticle journalTrash = null,journal;
		try {
			 journal= JournalArticleLocalServiceUtil.getArticle(groupId, articleId);
			 journalTrash = JournalArticleLocalServiceUtil.moveArticleToTrash(userId,groupId, journal.getArticleId());
		} catch (PortalException e) {
			_log.error(e.getCause());
		}
		return journalTrash;
		}
		
		@Override
		public List<JournalArticle> getWebContentsByCategoryIdAndType(Long groupId,long categoryId,Long structureId) throws PortalException {
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			List<JournalArticle> journal = new ArrayList<>();
			assetEntryQuery.setAnyCategoryIds(new long[] { categoryId });
			assetEntryQuery.setClassName("com.liferay.journal.model.JournalArticle");
			List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
			for (AssetEntry assetEntry : assetEntryList) {
			    JournalArticleResource journalArticleResource = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(assetEntry.getClassPK());
			    journal.addAll(getWCByJournalCategoryIdAndType(groupId, journalArticleResource.getResourcePrimKey(), structureId));
			}
			return journal;
		}
		
		@Override
		public List<JournalArticle> getWebContentsCategoryAndType(Long groupId,String categoryName,Long structureId) throws PortalException {
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			long[] anyCategoryIds=getWebcontentByCategories(groupId, categoryName);
			List<JournalArticle> journal = new ArrayList<>();
			assetEntryQuery.setAnyCategoryIds(anyCategoryIds);
			assetEntryQuery.setClassName("com.liferay.journal.model.JournalArticle");
			List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
			for (AssetEntry assetEntry : assetEntryList) {
			    JournalArticleResource journalArticleResource = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(assetEntry.getClassPK());
			    journal.addAll(getWCByJournalCategoryIdAndType(groupId, journalArticleResource.getResourcePrimKey(), structureId));
			}
			return journal;
		}
		@Override
		public List<JournalArticle> getWebContentsCategoryAndTypeFacility(Long groupId,String categoryName,Long[] structuresId) throws PortalException {
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			long[] anyCategoryIds=getWebcontentByCategories(groupId, categoryName);
			List<JournalArticle> journal = new ArrayList<>();
			assetEntryQuery.setAnyCategoryIds(anyCategoryIds);
			assetEntryQuery.setClassName("com.liferay.journal.model.JournalArticle");
			List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
			for (AssetEntry assetEntry : assetEntryList) {
				for (Long structureId : structuresId) {
					 JournalArticleResource journalArticleResource = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(assetEntry.getClassPK());
					 journal.addAll(getWCByJournalCategoryIdAndType(groupId, journalArticleResource.getResourcePrimKey(), structureId));

				}
			}
			return journal;
		}
			/*Deprecate @Override
			public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, String brand, String codeHotel, String TypeContent) throws PortalException {
				List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
				Long Contants.JOURNAL_HOTEL=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
				List<DDMStructure> ddmSt =  getStructureByName(TypeContent, groupId);
				if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
				Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
				Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
				journalArray =  getJournalFoldersAndWCByType(groupId, hotelCode, ddmSt.get(0).getStructureKey(), journalArray);
				if( getWCByJournalFolderAndTypeStructure(groupId, hotelCode, ddmSt.get(0).getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, hotelCode, ddmSt.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;	
				}
				else if(Validator.isNull(codeHotel) && !Validator.isNull(brand)){
					Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
					journalArray =  getJournalFoldersAndWCByType(groupId, brandFolder, ddmSt.get(0).getStructureKey(), journalArray);
					if( getWCByJournalFolderAndTypeStructure(groupId, brandFolder, ddmSt.get(0).getStructureKey())!=null){
			                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, brandFolder, ddmSt.get(0).getStructureKey())) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
			                        journalArray.add(journal);
			                    }
			                }
			            }
		              return journalArray;	
		              }
				else if(Validator.isNull(brand)){
					journalArray =  getJournalFoldersAndWCByType(groupId, Contants.JOURNAL_HOTEL, ddmSt.get(0).getStructureKey(), journalArray);
					if( getWCByJournalFolderAndTypeStructure(groupId, Contants.JOURNAL_HOTEL, ddmSt.get(0).getStructureKey())!=null){
			                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, Contants.JOURNAL_HOTEL, ddmSt.get(0).getStructureKey())) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
			                        journalArray.add(journal);
			                    }
			                }
			            }
		              return journalArray;
				}
				return journalArray;
				
			}*/

			/*@Override
			public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, String brand, String codeHotel, String title,String TypeContent) throws PortalException {
				List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
				Long Contants.JOURNAL_HOTEL=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
				List<DDMStructure> ddmSt =  getStructureByName(TypeContent, groupId);
				if(!Validator.isNull(brand) && !Validator.isNull(codeHotel)){
				Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
				Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
				journalArray =  getJournalFoldersAndWCByTypeTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title, journalArray);
				if( getWCByJournalFolderAndTypeStructureTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title)!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title)) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;
				}
				else if(Validator.isNull(codeHotel) && !Validator.isNull(brand)){
					Long brandFolder= getFolderWC(groupId, brand, Contants.JOURNAL_HOTEL);
					journalArray =  getJournalFoldersAndWCByTypeTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title, journalArray);
					if( getWCByJournalFolderAndTypeStructureTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title)!=null){
			                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title)) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
			                        journalArray.add(journal);
			                    }
			                }
			            }
		              return journalArray;		
		              }
				else if(Validator.isNull(brand)){
					journalArray =  getJournalFoldersAndWCByTypeTitle(groupId, Contants.JOURNAL_HOTEL, ddmSt.get(0).getStructureKey(),title, journalArray);
					if( getWCByJournalFolderAndTypeStructureTitle(groupId, Contants.JOURNAL_HOTEL, ddmSt.get(0).getStructureKey(),title)!=null){
			                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitle(groupId, Contants.JOURNAL_HOTEL, ddmSt.get(0).getStructureKey(),title)) {
			                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion()) && !journal.isInTrash()){
			                        journalArray.add(journal);
			                    }
			                }
			            }
		              return journalArray;				}
				return journalArray;
				
			}

			*/
}

