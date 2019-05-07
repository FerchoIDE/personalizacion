package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import com.liferay.journal.model.impl.JournalArticleImpl;
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


public class JournalApi extends QueriesLiferayApi implements IJournalApi {
	  private static final Log _log = LogFactoryUtil.getLog(JournalApi.class);
	  
		@Override
		public JSONArray getListJournalFoldersByBrand(Long groupId, Long brand)
				throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        return  getJournalFoldersJsonOneLevel(groupId, brand, filesArray);
	        
		}
		
		
		@Override
		public JSONArray getListJournalFoldersByBrand(Long groupId, String brand) throws PortalException {
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			if(brand!=null){
				Long brandFolder= getFolderWC(groupId, brand, idBase);
				return  getJournalFoldersJsonOneLevel(groupId, brandFolder, filesArray);
			}
			else{
				 return  getJournalFoldersJsonOneLevel(groupId, idBase, filesArray);

			}
			
		}
	    @Override
		public JSONArray getListJournalFoldersBrand(Long groupId) throws PortalException {
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        return  getJournalFoldersJsonOneLevel(groupId, idBase, filesArray);
		}
	  
	    @Override
	    public JSONArray getListJournalFolders(Long groupId,String brand,String codeHotel) throws PortalException{
	        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        long idBase= getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	        if(codeHotel!=null && brand!=null){
	            Long brandFolder= getFolderWC(groupId, brand, idBase);
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
	        else if(codeHotel==null && brand!=null){
	            Long brandFolder= getFolderWC(groupId, brand, idBase);
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
	        else if(brand==null && codeHotel!=null){
	        	   filesArray= getJournalFoldersJson(groupId, idBase, filesArray);
		            if(JournalFolderLocalServiceUtil.getFolder(idBase)!=null){
		            JSONObject filesObject= JSONFactoryUtil.createJSONObject();
		 	        JournalFolder object = JournalFolderLocalServiceUtil.getFolder(idBase); 
		 	        filesObject.put("folderId", object.getFolderId());
		 	        filesObject.put("nameFolder", object.getName());
		 	        filesArray.put(filesObject);
		            }
		            return filesArray;
	        }else{
	            return  getJournalFoldersJson(groupId, idBase, filesArray);
	        }

	    }

	    @Override
	    public JSONArray getListJournalFoldersByCode(Long groupId,Long codeBrand) throws PortalException{
	        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
	        if( getJournalFoldersJson(groupId, codeBrand, filesArray)!= null){
	            return  getJournalFoldersJson(groupId, codeBrand, filesArray);
	        }
	        return filesArray;
	    }
	  
	    @Override
	    public List<JournalArticle> getWCByFolder(Long groupId,Long folderId) throws PortalException{
	        List<JournalArticle> journalArray= new ArrayList<>();
	        if(folderId!=null && groupId!=null){
	            journalArray= getJournalFoldersAndWC(groupId, folderId, journalArray);
	            if( getWCByJournalFolder(groupId, folderId)!=null){
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
	        long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	        if(codeHotel!=null && brand!=null){
	            Long brandFolder= getFolderWC(groupId, brand, idBase);
	            Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray= getFoldersWCByName(groupId, idBase,name, journalArray);
	            if( getWCByJournalFolder(groupId, hotelCode)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, hotelCode)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	        }
	        else if(brand!=null && codeHotel==null){
	            Long brandFolder= getFolderWC(groupId, brand, idBase);
	            journalArray= getFoldersWCByName(groupId, idBase,name, journalArray);
	            if( getWCByJournalFolderAndName(groupId, idBase,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, brandFolder,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }
	        else if(codeHotel!=null && brand==null){
	            journalArray= getFoldersWCByName(groupId, idBase,name, journalArray);
	            if( getWCByJournalFolderAndName(groupId, idBase,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, idBase,name)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }else{
	            journalArray= getFoldersWCByName(groupId, idBase,name, journalArray);
	            if( getWCByJournalFolderAndName(groupId, idBase,name)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndName(groupId, idBase,name)) {
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
	        	Long brandFolder= getFolderWC(groupId, brand, idBase);
	            Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	            journalArray= getJournalFoldersAndWC(groupId, hotelCode, journalArray);
	            if( getWCByJournalFolder(groupId, hotelCode)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, hotelCode)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;

	        }
	        else if(brand!=null && codeHotel==null){
	            Long brandFolder= getFolderWC(groupId, brand, idBase);
	            journalArray= getJournalFoldersAndWC(groupId, brandFolder, journalArray);
	            if( getWCByJournalFolder(groupId, brandFolder)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, brandFolder)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }
	        else if(codeHotel!=null && brand==null){
	            journalArray= getJournalFoldersAndWC(groupId, idBase, journalArray);
	            if( getWCByJournalFolder(groupId, idBase)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, idBase)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
	            return journalArray;
	        }else{
	            journalArray= getJournalFoldersAndWC(groupId, idBase, journalArray);
	            if( getWCByJournalFolder(groupId, idBase)!=null){
	                for (JournalArticle journal :  getWCByJournalFolder(groupId, idBase)) {
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
	        if( getStructureByName(nameStructure, groupId)!=null && ! getStructureByName(nameStructure, groupId).isEmpty()){
	            List<DDMStructure> ddm =  getStructureByName(nameStructure, groupId);
	            List<JournalArticle> journalArray= new ArrayList<>();
	            long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
	            if(brand!=null && codeHotel!=null){//B�squeda por Marca y Codigo de Hotlel
	                Long brandFolder= getFolderWC(groupId, brand, idBase);
	                Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
	                journalArray =  getJournalFoldersAndWCByType(groupId, hotelCode,ddm.get(0).getStructureKey(), journalArray);
	                if( getWCByJournalFolderAndTypeStructure(groupId, hotelCode,ddm.get(0).getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, idBase,ddm.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;
	                
	              
	            }
	            else if(brand!=null && codeHotel==null){//B�squeda por marca
	                Long brandFolder= getFolderWC(groupId, brand, idBase);
	                journalArray =  getJournalFoldersAndWCByType(groupId, brandFolder,ddm.get(0).getStructureKey(), journalArray);
	                if( getWCByJournalFolderAndTypeStructure(groupId, brandFolder,ddm.get(0).getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, brandFolder,ddm.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	                return journalArray;

public class JournalApi implements IJournalApi {
    private static final Log _log = LogFactoryUtil.getLog(JournalApi.class);
    private static QueriesLiferayApi _query = new QueriesLiferayApi();


    @Override
    public JSONArray getListJournalFolders(Long groupId,String brand,String codeHotel) throws PortalException{
        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        long idBase= getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        if(codeHotel!=null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
            return getJournalFoldersJson(groupId, hotelCode, filesArray);
        }
        else if(codeHotel==null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersJson(groupId, brandFolder, filesArray);
        }
        else if(brand==null && codeHotel!=null){
            return getJournalFoldersJson(groupId, idBase, filesArray);
        }else{
            return getJournalFoldersJson(groupId, idBase, filesArray);
        }

    }

    @Override
    public JSONArray getListJournalFoldersByCode(Long groupId,Long codeBrand) throws PortalException{
        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        if(getJournalFoldersJson(groupId, codeBrand, filesArray)!= null){
            return getJournalFoldersJson(groupId, codeBrand, filesArray);
        }
        return filesArray;
    }

    @Override
    public List<JournalArticle> getWCByFolder(Long groupId,Long folderId) throws PortalException{
        List<JournalArticle> journalArray= new ArrayList<>();
        if(folderId!=null && groupId!=null){
            journalArray=getJournalFoldersAndWC(groupId, folderId, journalArray);
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
    public List<JournalArticle> getWCByName(Long groupId,String brand,String codeHotel,String name) throws PortalException{
        List<JournalArticle> journalArray= new ArrayList<>();
        long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        if(codeHotel!=null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
            return _query.getFoldersWCByName(groupId, hotelCode,name, journalArray);

        }
        else if(brand!=null && codeHotel==null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return _query.getFoldersWCByName(groupId, brandFolder,name, journalArray);

        }
        else if(codeHotel!=null && brand==null){
            return _query.getFoldersWCByName(groupId, idBase,name, journalArray);

        }else{
            return _query.getFoldersWCByName(groupId, idBase,name, journalArray);
        }

    }
    @Override
    public List<JournalArticle> getWCAndJournalFolder(Long groupId,String brand,String codeHotel) throws PortalException{
        List<JournalArticle> journalArray= new ArrayList<>();
        long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        if(codeHotel!=null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
            return getJournalFoldersAndWC(groupId, hotelCode, journalArray);


        }
        else if(brand!=null && codeHotel==null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersAndWC(groupId, brandFolder, journalArray);

        }
        else if(codeHotel!=null && brand==null){
            return getJournalFoldersAndWC(groupId, idBase, journalArray);

        }else{
            return getJournalFoldersAndWC(groupId, idBase, journalArray);

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
                return getJournalFoldersAndWCByType(groupId, hotelCode,ddm.get(0).getStructureKey(), journalArray);

            }
            else if(brand!=null && codeHotel==null){//B�squeda por marca
                Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
                return getJournalFoldersAndWCByType(groupId, brandFolder,ddm.get(0).getStructureKey(), journalArray);

            }
            else{//Si no se cumplen estos casos B�squeda desde la raiz
                return getJournalFoldersAndWCByType(groupId, idBase,ddm.get(0).getStructureKey(), journalArray);

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
            return _query.getFoldersWCByName(groupId, hotelCode,name, journalArray);


        }
        else if(brand!=null && codeHotel==null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return _query.getFoldersWCByName(groupId, brandFolder,name, journalArray);

        }
        else if(codeHotel!=null && brand==null){
            return _query.getFoldersWCByName(groupId, idBase,name, journalArray);

        }else{
            return _query.getFoldersWCByName(groupId, idBase,name, journalArray);

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
            return _query.getFoldersWCByNameSI(groupId, hotelCode,name,structureId, journalArray);
        }
        else if(brand!=null && codeHotel==null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return _query.getFoldersWCByNameSI(groupId, brandFolder,name,structureId, journalArray);

        }
        else if(codeHotel!=null && brand==null){
            return _query.getFoldersWCByNameSI(groupId, idBase,name,structureId, journalArray);

        }else{
            journalArray=_query.getFoldersWCByName(groupId, idBase,name, journalArray);
            return _query.getFoldersWCByNameSI(groupId, idBase,name,structureId, journalArray);

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
>>>>>>> develop

	    /***M�todos privados****/

	    private long getHotelFolderRootByConfigurationFolderWebcontent(Long groupId) throws PortalException{
	        JournalFolderImpl idFolder = null;
	        for (String baseFileEntry : Contants.JOURNAL_HOTEL) {
	            if(idFolder!=null){
	                idFolder=  getJournalFolderByName(groupId, idFolder.getFolderId(), baseFileEntry);
	            }
	            else{
	                idFolder=  getJournalFolderByName(groupId, new Long(0), baseFileEntry);
	            }
	            _log.info("Folder webcontent:"+idFolder.getName()+"id:"+idFolder.getFolderId());
	        }
	        return idFolder.getFolderId();
	    }
	  
	 @Override
	    public JournalArticle saveWC(String json) throws PortalException {
	        return  createNewWC(json);
	    }

	    @Override
	    public JournalArticle updateWC(String json) throws PortalException {
	        return  UpdateWC(json);
	    }

		@Override
		public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, String brand, String codeHotel, String TypeContent) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			List<DDMStructure> ddmSt =  getStructureByName(TypeContent, groupId);
			if(codeHotel!=null && brand!=null){
			Long brandFolder= getFolderWC(groupId, brand, idBase);
			Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
			journalArray =  getJournalFoldersAndWCByType(groupId, hotelCode, ddmSt.get(0).getStructureKey(), journalArray);
			if( getWCByJournalFolderAndTypeStructure(groupId, hotelCode, ddmSt.get(0).getStructureKey())!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, hotelCode, ddmSt.get(0).getStructureKey())) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
            return journalArray;	
			}
			else if(codeHotel==null && brand!=null){
				Long brandFolder= getFolderWC(groupId, brand, idBase);
				journalArray =  getJournalFoldersAndWCByType(groupId, brandFolder, ddmSt.get(0).getStructureKey(), journalArray);
				if( getWCByJournalFolderAndTypeStructure(groupId, brandFolder, ddmSt.get(0).getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, brandFolder, ddmSt.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;	
	              }
			else if(brand==null){
				journalArray =  getJournalFoldersAndWCByType(groupId, idBase, ddmSt.get(0).getStructureKey(), journalArray);
				if( getWCByJournalFolderAndTypeStructure(groupId, idBase, ddmSt.get(0).getStructureKey())!=null){
		                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructure(groupId, idBase, ddmSt.get(0).getStructureKey())) {
		                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
		                        journalArray.add(journal);
		                    }
		                }
		            }
	              return journalArray;
			}
			return journalArray;
			
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
    private JSONArray getJournalFoldersJson(Long groupId,Long parent,JSONArray filesArray) throws PortalException{
        List<JournalFolder> listFolders =JournalFolderLocalServiceUtil.getFolders(groupId, new Long(parent));
        if(listFolders != null && listFolders.size() > 0){
            JSONObject filesObject=null;
            for (JournalFolder object : listFolders) {
                filesObject=JSONFactoryUtil.createJSONObject();
                filesObject.put("folderId", object.getFolderId());
                filesObject.put("nameFolder", object.getName());
                filesArray.put(filesObject);
                if(getJournalFoldersJson(groupId,object.getFolderId(),filesArray)!= null && !getJournalFoldersJson(groupId,object.getFolderId(),filesArray).isNull(0)){
                    getJournalFoldersJson(groupId,object.getFolderId(),filesArray);
                }

            }
        }
        return filesArray;
    }

    private JSONArray getJournalFoldersJsonOneLevel(Long groupId,Long parent,JSONArray filesArray) throws PortalException{
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


    private List<JournalArticle> getJournalFoldersAndWC(Long groupId,Long parent,List<JournalArticle> journalArray) throws PortalException{
        List<JournalFolder> listFolders = _query.getSubFolderByJournalFolderParent(groupId, new Long(parent));
        if(listFolders != null && listFolders.size() > 0){
            for (JournalFolder object : listFolders) {
                if(_query.getWCByJournalFolder(groupId, object.getFolderId())!= null && !_query.getWCByJournalFolder(groupId, object.getFolderId()).isEmpty()){
                    for (JournalArticle ja : _query.getWCByJournalFolder(groupId, object.getFolderId())) {
                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
                            journalArray.add(ja);
                        }else{
                            journalArray.add(JournalArticleLocalServiceUtil.getLatestArticle(ja.getResourcePrimKey()));
                        }
                    }
                }
                if(getJournalFoldersAndWC(groupId,object.getFolderId(),journalArray)!= null && !getJournalFoldersAndWC(groupId,object.getFolderId(),journalArray).isEmpty()){
                    getJournalFoldersAndWC(groupId,object.getFolderId(),journalArray);
                }
            }
        }
        return journalArray;
    }
    private List<JournalArticle> getJournalFoldersAndWCByType(Long groupId,Long parent,String type,List<JournalArticle> journalArray) throws PortalException{
       // List<JournalArticle> _journalArray = new LinkedList<>();
        List<JournalFolder> listFolders = _query.getSubFolderByJournalFolderParent(groupId, new Long(parent));

		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, Long folderId, String title,Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			return  getJournalFoldersAndWCByTypeTitleS(groupId, folderId,title,structureId, journalArray);
			
		}
		
		@Override
		public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, String brand, String codeHotel, String title,
				Long structureId) throws PortalException {
			List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
			Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			if(codeHotel!=null && brand!=null){
			Long brandFolder= getFolderWC(groupId, brand, idBase);
			Long hotelCode= getFolderWC(groupId, codeHotel, brandFolder);
			journalArray =  getJournalFoldersAndWCByTypeTitleS(groupId, hotelCode,title,structureId, journalArray);
			if( getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, hotelCode,structureId,title)!=null){
	                for (JournalArticle journal :  getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, hotelCode,structureId,title)) {
	                    if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, journal.getArticleId(), journal.getVersion())){
	                        journalArray.add(journal);
	                    }
	                }
	            }
       // System.out.println(listFolders.size());
        if(listFolders != null && listFolders.size() > 0){
            for (JournalFolder object : listFolders) {
                System.out.println(object.getName()+"----"+object.buildTreePath());
                List<JournalArticleImpl> _listRes = _query.getWCByJournalFolderAndTypeStructure(groupId, object.getFolderId(),type);
                System.out.println(parent+"-Numero de WC encontrados antes version:"+_listRes.size());
                if(_listRes!= null && !_listRes.isEmpty()){
                    for (JournalArticle ja : _listRes) {
                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
                            journalArray.add(ja);
                        }
                    }
                }
                System.out.println(parent+"-Numero de WC encontrados:"+journalArray.size());
                 List<JournalArticle> _lstResJA = getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray);
                System.out.println(parent+"-Numero de WC encontrados despues:"+_lstResJA.size());


                // TODO: 2019-05-05 Revisar esto xq no tiene sentido
                  /*
                if(getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray)!= null && !getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray).isEmpty()){
                    getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray);
                }*/
            }
        }
        System.out.println(parent+"----------return getJournalFoldersAndWCByType");
        return journalArray;
    }

    private List<JournalArticle> getJournalFoldersAndWCByTypeId(Long groupId,Long parent,Long structureId,List<JournalArticle> journalArray) throws PortalException{
        List<JournalFolder> listFolders = _query.getSubFolderByJournalFolderParent(groupId, new Long(parent));
        if(listFolders != null && listFolders.size() > 0){
            for (JournalFolder object : listFolders) {
                if(_query.getWCByJournalFolderAndTypeStructureId(groupId, object.getFolderId(),structureId)!= null && !_query.getWCByJournalFolderAndTypeStructureId(groupId, object.getFolderId(),structureId).isEmpty()){
                    for (JournalArticle ja : _query.getWCByJournalFolderAndTypeStructureId(groupId, object.getFolderId(),structureId)) {
                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
                            journalArray.add(ja);
                        }
                    }
                }
                if(getJournalFoldersAndWCByTypeId(groupId,object.getFolderId(),structureId,journalArray)!= null && !getJournalFoldersAndWCByTypeId(groupId,object.getFolderId(),structureId,journalArray).isEmpty()){
                    getJournalFoldersAndWCByTypeId(groupId,object.getFolderId(),structureId,journalArray);
                }
            }
        }
        return journalArray;
    }

    @Override
    public JournalArticle saveWC(String json) throws PortalException {
        return _query.createNewWC(json);
    }

    @Override
    public JournalArticle updateWC(String json) throws PortalException {
        // TODO Auto-generated method stub
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
            return getJournalFoldersAndWCByType(groupId, hotelCode, ddmSt.get(0).getStructureKey(), journalArray);
        }
        else if(codeHotel==null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersAndWCByType(groupId, brandFolder, ddmSt.get(0).getStructureKey(), journalArray);
        }
        else if(brand==null){
            return getJournalFoldersAndWCByType(groupId, idBase, ddmSt.get(0).getStructureKey(), journalArray);
        }
        return journalArray;

    }

    @Override
    public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, Long folderId, Long structureId) throws PortalException {
        List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
        return getJournalFoldersAndWCByTypeId(groupId, folderId, structureId, journalArray);
    }


    @Override
    public List<JournalArticle> getWebcontentRecursiveByType(Long groupId, String brand, String codeHotel,
                                                             Long structureId) throws PortalException {
        List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
        Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        if(codeHotel!=null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
            return getJournalFoldersAndWCByTypeId(groupId, hotelCode, structureId, journalArray);
        }
        else if(codeHotel==null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersAndWCByTypeId(groupId, brandFolder, structureId, journalArray);
        }
        else if(brand==null){
            return getJournalFoldersAndWCByTypeId(groupId, idBase,structureId, journalArray);
        }
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
            return getJournalFoldersAndWCByTypeTitle(groupId, hotelCode, ddmSt.get(0).getStructureKey(),title, journalArray);
        }
        else if(codeHotel==null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersAndWCByTypeTitle(groupId, brandFolder, ddmSt.get(0).getStructureKey(),title, journalArray);
        }
        else if(brand==null){
            return getJournalFoldersAndWCByTypeTitle(groupId, idBase, ddmSt.get(0).getStructureKey(),title, journalArray);
        }
        return journalArray;

    }

    private List<JournalArticle> getJournalFoldersAndWCByTypeTitle(Long groupId, Long hotelCode, String type,
                                                                   String title, List<JournalArticle> journalArray) throws PortalException {
        List<JournalFolder> listFolders = _query.getSubFolderByJournalFolderParent(groupId, new Long(hotelCode));
        if(listFolders != null && listFolders.size() > 0){
            for (JournalFolder object : listFolders) {
                if(_query.getWCByJournalFolderAndTypeStructureTitle(groupId, object.getFolderId(),type,title)!= null && !_query.getWCByJournalFolderAndTypeStructure(groupId, object.getFolderId(),type).isEmpty()){
                    for (JournalArticle ja : _query.getWCByJournalFolderAndTypeStructureTitle(groupId, object.getFolderId(),type,title)) {
                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
                            journalArray.add(ja);
                        }
                    }
                }
                if(getJournalFoldersAndWCByTypeTitle(groupId,object.getFolderId(),type,title,journalArray)!= null && !getJournalFoldersAndWCByTypeTitle(groupId,object.getFolderId(),type,title,journalArray).isEmpty()){
                    getJournalFoldersAndWCByTypeTitle(groupId,object.getFolderId(),type,title,journalArray);
                }
            }
        }
        return journalArray;
    }

    @Override
    public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, Long folderId, String title,Long structureId) throws PortalException {
        List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
        return getJournalFoldersAndWCByTypeTitleS(groupId, folderId,title,structureId, journalArray);

    }

    @Override
    public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId, String brand, String codeHotel, String title,
                                                              Long structureId) throws PortalException {
        List<JournalArticle> journalArray= new ArrayList<JournalArticle>();
        Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        if(codeHotel!=null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            Long hotelCode=_query.getFolderWC(groupId, codeHotel, brandFolder);
            return getJournalFoldersAndWCByTypeTitleS(groupId, hotelCode,title,structureId, journalArray);
        }
        else if(codeHotel==null && brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersAndWCByTypeTitleS(groupId, brandFolder,title,structureId, journalArray);
        }
        else if(brand==null){
            return getJournalFoldersAndWCByTypeTitleS(groupId, idBase,title,structureId, journalArray);
        }
        return journalArray;

    }

    private List<JournalArticle> getJournalFoldersAndWCByTypeTitleS(Long groupId, Long folderId, String title,Long structureId, List<JournalArticle> journalArray) throws PortalException {
        List<JournalFolder> listFolders = _query.getSubFolderByJournalFolderParent(groupId, new Long(folderId));
        if(listFolders != null && listFolders.size() > 0){
            for (JournalFolder object : listFolders) {
                if(_query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, object.getFolderId(),structureId,title)!= null && !_query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, object.getFolderId(),structureId,title).isEmpty()){
                    for (JournalArticle ja : _query.getWCByJournalFolderAndTypeStructureTitleStructureId(groupId, object.getFolderId(),structureId,title)) {
                        if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
                            journalArray.add(ja);
                        }
                    }
                }
                if(getJournalFoldersAndWCByTypeTitleS(groupId,object.getFolderId(),title,structureId,journalArray)!= null && !getJournalFoldersAndWCByTypeTitleS(groupId,object.getFolderId(),title,structureId,journalArray).isEmpty()){
                    getJournalFoldersAndWCByTypeTitleS(groupId,object.getFolderId(),title,structureId,journalArray);
                }
            }
        }
        return journalArray;
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
        Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        if(brand!=null){
            Long brandFolder=_query.getFolderWC(groupId, brand, idBase);
            return getJournalFoldersJsonOneLevel(groupId, brandFolder, filesArray);
        }
        return filesArray;
    }

    @Override
    public JSONArray getListJournalFoldersBrand(Long groupId) throws PortalException {
        Long idBase=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        return getJournalFoldersJsonOneLevel(groupId, idBase, filesArray);
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










}

