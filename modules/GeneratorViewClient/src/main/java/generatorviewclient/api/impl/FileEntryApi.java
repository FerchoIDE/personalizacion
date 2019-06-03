package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.List;

import generatorviewclient.api.IFileEntryApi;
import generatorviewclient.constants.Contants;
import com.liferay.document.library.kernel.model.DLFileEntry;
import com.liferay.document.library.kernel.model.DLFolder;
import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLAppServiceUtil;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFolderLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.repository.model.FileEntry;
import com.liferay.portal.kernel.repository.model.Folder;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.Base64;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.workflow.WorkflowConstants;

public class FileEntryApi extends QueriesLiferayApi implements IFileEntryApi {
    private static final Log _log = LogFactoryUtil.getLog(FileEntryApi.class);

    public Long getBaseFolder(Long groupId,String brand,String code_hotel) throws PortalException {
    	_log.info("getBaseFolder");
    	if(code_hotel!=null && brand!=null) {
            Long brandFolder =  getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
            Long hc =  getFolder(groupId, code_hotel, brandFolder);
            return hc;
        }else if(brand!=null && code_hotel==null){
            return getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
        }
        return Contants.DLFILEENTRY_BASE;
    }

    /*Funcion para crear folder*/
    public Folder createFolder(Long parentFolderId,
    						 Long groupId,
    						 String name,
    						 String description) throws PortalException{
    	 ServiceContext serviceContext = new ServiceContext();
	     serviceContext.setScopeGroupId(groupId);
	     serviceContext.setWorkflowAction(WorkflowConstants.ACTION_PUBLISH);

		return DLAppServiceUtil.addFolder(groupId, parentFolderId, name, description, serviceContext);
    }
    
    @Override
    public JSONObject saveFile(Long groupId,Long userId,Long folderId,String image,String name,String description,String mimeType){
   JSONObject filesObject = null;
        try {
            ServiceContext serviceContext = new ServiceContext();
            serviceContext.setScopeGroupId(groupId);
            byte[] imageByte = Base64.decode(image);

            if ( getFilesByName(groupId, folderId, name) != null &&  getFilesByName(groupId, folderId, name).size() > 0) {
                filesObject = JSONFactoryUtil.createJSONObject();
                filesObject.put("errorMessage","No se a podido guardar:El nombre del archivo ya existe");
                filesObject.put("status","BAD");
                return filesObject;
            } else {
                FileEntry file = DLAppLocalServiceUtil.addFileEntry(userId, groupId, folderId, name, mimeType, imageByte, serviceContext);
                filesObject = JSONFactoryUtil.createJSONObject();
                filesObject.put("idFile", file.getFileEntryId());
                filesObject.put("filename", file.getFileName());
                String url = "/documents/" + file.getGroupId() + "/" + file.getFolderId() + "/" + file.getFileName() + "/" + file.getUuid() + "?t=" + System.currentTimeMillis();
                filesObject.put("fullPath", url.replace(" ", "%20"));
                filesObject.put("imageThumbnail", url.replace(" ", "%20") + "&imageThumbnail=1");
                filesObject.put("all",filesObject.toJSONString());
                return filesObject;

            }
        } catch (PortalException e) {
            e.printStackTrace();
            filesObject = JSONFactoryUtil.createJSONObject();
            filesObject.put("errorMessage", e.getMessage());
            filesObject.put("status", "BAD");
            return filesObject;
        }
    }

    @Override
    public JSONArray getFilesByCurrentFolderAndName(Long groupId,Long currentFolder,String name) throws PortalException{
        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        filesArray=getFoldersAndFilesByName(groupId, currentFolder, name, filesArray);
        if( getFilesByName(groupId, currentFolder, name)!=null){
            for (DLFileEntry file :  getFilesByName(groupId, currentFolder, name)) {
                filesArray.put(mapping(file));

            }
        }
        return filesArray;
    }

    @Override
    public JSONArray getFilesByName(Long groupId,String brand,String name,String code_hotel) throws PortalException{


        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        if(code_hotel!=null && brand!=null){
            Long brandFolder= getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
            Long hc= getFolder(groupId, code_hotel, brandFolder);
            filesArray=getFoldersAndFilesByName(groupId, hc, name, filesArray);
            if( getFilesByName(groupId, hc, name)!=null){
                for (DLFileEntry file :  getFilesByName(groupId, hc, name)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }
        else if(brand!=null && code_hotel==null){
            Long brandFolder= getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
            filesArray=getFoldersAndFilesByName(groupId, brandFolder, name, filesArray);
            if( getFilesByName(groupId, brandFolder, name)!=null){
                for (DLFileEntry file :  getFilesByName(groupId, brandFolder, name)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }
        else if(code_hotel!=null && brand==null){
            filesArray=getFoldersAndFilesByName(groupId, Contants.DLFILEENTRY_BASE, name, filesArray);
            if( getFilesByName(groupId, Contants.DLFILEENTRY_BASE, name)!=null){
                for (DLFileEntry file :  getFilesByName(groupId, Contants.DLFILEENTRY_BASE, name)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }else{
            filesArray=getFoldersAndFilesByName(groupId, Contants.DLFILEENTRY_BASE, name, filesArray);
            if(getFilesByName(groupId, Contants.DLFILEENTRY_BASE, name)!=null){
                for (DLFileEntry file :  getFilesByName(groupId, Contants.DLFILEENTRY_BASE, name)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }

    }

    @Override
    public JSONArray getListFolders(Long groupId,String brand,String code_hotel) throws PortalException{
        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        if(code_hotel!=null && brand!=null){
            Long brandFolder= getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
            Long hc= getFolder(groupId, code_hotel, brandFolder);
            return getFoldersJson(groupId, hc, null, filesArray);
        }
        else if(brand!=null && code_hotel==null){
            Long brandFolder= getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);

            return getFoldersJson(groupId, brandFolder,null,  filesArray);
        }
        else if(code_hotel!=null && brand==null){
            return getFoldersJson(groupId, Contants.DLFILEENTRY_BASE,null, filesArray);
        }else{
            return getFoldersJson(groupId, Contants.DLFILEENTRY_BASE,null,  filesArray);
        }

    }

    @Override
    public JSONArray getFilesAndFolder(Long groupId,String brand,String type,String code_hotel) throws PortalException{

        JSONArray filesArray=JSONFactoryUtil.createJSONArray();
        if(code_hotel!=null && brand!=null){
            Long brandFolder= getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
            Long hc= getFolder(groupId, code_hotel, brandFolder);
            filesArray=getFoldersAndFilesByfolderJson(groupId, hc, type, filesArray);
            List<DLFileEntry> result = getFilesByFolder(groupId, hc);
            if(result!=null){
                for (DLFileEntry file : result) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }
        else if(brand!=null && code_hotel==null){
            Long brandFolder= getFolder(groupId, brand, Contants.DLFILEENTRY_BASE);
            filesArray=getFoldersAndFilesByfolderJson(groupId, brandFolder, type, filesArray);
            if(getFilesByFolder(groupId, brandFolder)!=null){
                for (DLFileEntry file : getFilesByFolder(groupId, brandFolder)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }
        else if(code_hotel!=null && brand==null){
            if(getFilesByFolder(groupId, Contants.DLFILEENTRY_BASE)!=null){
                for (DLFileEntry file : getFilesByFolder(groupId, Contants.DLFILEENTRY_BASE)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }else{
            if(getFilesByFolder(groupId, Contants.DLFILEENTRY_BASE)!=null){
                for (DLFileEntry file : getFilesByFolder(groupId, Contants.DLFILEENTRY_BASE)) {
                    filesArray.put(mapping(file));
                }
            }
            return filesArray;
        }

    }

    private JSONArray getFoldersAndFilesByName(Long groupId,Long parent,String namefile,JSONArray filesArray) throws PortalException{
        List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, new Long(parent));
        if(Validator.isNull(listFolders) && listFolders.size() > 0){
            JSONObject filesObject=null;
            for (DLFolder object : listFolders) {
                System.out.println("folder:"+ object.getFolderId());
                if( getFilesByName(groupId, object.getFolderId(),namefile)!= null && ! getFilesByName(groupId, object.getFolderId(),namefile).isEmpty()){
                    for (DLFileEntry file :  getFilesByName(groupId, object.getFolderId(),namefile)) {
                        filesObject=JSONFactoryUtil.createJSONObject();
                        filesObject.put("idFile", file.getFileEntryId());
                        filesObject.put("filename", file.getFileName());
                        filesObject.put("path", file.getFolder().getPath());
                        String url="/documents/"+file.getGroupId()+"/"+file.getFolderId()+"/"+file.getFileName()+"/"+file.getUuid()+"?t="+System.currentTimeMillis();;
                        filesObject.put("fullPath",url.replace(" ", "%20") );
                        filesObject.put("imageThumbnail",url.replace(" ", "%20")+"&imageThumbnail=1");
                        filesArray.put(filesObject);
                    }
                }
                if(!Validator.isNull(object.getFolderId())){
                //if(getFoldersAndFilesByName(groupId,object.getFolderId(),namefile,filesArray)!= null && !getFoldersAndFilesByName(groupId,object.getFolderId(),namefile,filesArray).isNull(0)){

                    getFoldersAndFilesByName(groupId,object.getFolderId(),namefile,filesArray);
                }
            }
        }
        return filesArray;
    }

    private List<DLFolder> getSubFolderByFolderParent(Long groupId,Long idFolder){
        List<DLFolder> dlFolders = DLFolderLocalServiceUtil.getFolders(groupId, idFolder);
        if(dlFolders.size()>0){
            return dlFolders;
        }
        return new ArrayList<>();
    }

    /*Mapeo entidad DLFILEENTRY*/
    private JSONObject mapping(DLFileEntry file) throws PortalException{
        JSONObject filesObject=null;
        filesObject=JSONFactoryUtil.createJSONObject();
        filesObject.put("idFile", file.getFileEntryId());
        filesObject.put("filename", file.getFileName());
        filesObject.put("path", file.getFolder().getPath());
        String url="/documents/"+file.getGroupId()+"/"+file.getFolderId()+"/"+file.getFileName()+"/"+file.getUuid()+"?t="+System.currentTimeMillis();;
        filesObject.put("fullPath",url.replace(" ", "%20") );
        filesObject.put("imageThumbnail",url.replace(" ", "%20")+"&imageThumbnail=1");
        filesObject.put("all", filesObject.toJSONString());
        return filesObject;

    }
   @Override
   public JSONObject updateFileEntry(Long groupId,Long userId,Long fileEntryId,Long folderId,String image,String name,String description,String mimeType){
	   JSONObject filesObject = null;
	   FileEntry fileToUpdate;
       try {
           ServiceContext serviceContext = new ServiceContext();
           serviceContext.setScopeGroupId(groupId);
           byte[] imageByte = Base64.decode(image);
           fileToUpdate = DLAppLocalServiceUtil.getFileEntry(fileEntryId);
           if(Validator.isNull(fileToUpdate)){
               filesObject = JSONFactoryUtil.createJSONObject();
               filesObject.put("errorMessage","No se a podido actualizar:El archivo no se encontro");
               filesObject.put("status","BAD");
               return filesObject;
           } else {
			   FileEntry file = DLAppLocalServiceUtil.updateFileEntry(userId, fileEntryId,name, fileToUpdate.getMimeType(), name, description, "", true, imageByte, serviceContext);
               filesObject = JSONFactoryUtil.createJSONObject();
               filesObject.put("idFile", file.getFileEntryId());
               filesObject.put("filename", file.getFileName());
               String url = "/documents/" + file.getGroupId() + "/" + file.getFolderId() + "/" + file.getFileName() + "/" + file.getUuid() + "?t=" + System.currentTimeMillis();
               filesObject.put("fullPath", url.replace(" ", "%20"));
               filesObject.put("imageThumbnail", url.replace(" ", "%20") + "&imageThumbnail=1");
               filesObject.put("all",filesObject.toJSONString());
               return filesObject;

           }
       } catch (PortalException e) {
           e.printStackTrace();
           filesObject = JSONFactoryUtil.createJSONObject();
           filesObject.put("errorMessage", e.getMessage());
           filesObject.put("status", "BAD");
           return filesObject;
       } 
	   
   }
   
   
   
   @Override
   public JSONObject removeFileEntry(Long groupId,Long fileEntryId){
	   JSONObject filesObject = null;
	   FileEntry fileToDelete;
       try {
           ServiceContext serviceContext = new ServiceContext();
           serviceContext.setScopeGroupId(groupId);
           fileToDelete = DLAppLocalServiceUtil.getFileEntry(fileEntryId);
           if(Validator.isNull(fileToDelete)){
               filesObject = JSONFactoryUtil.createJSONObject();
               filesObject.put("errorMessage","No se a podido eliminar:El archivo no se encontro");
               filesObject.put("status","BAD");
               return filesObject;
           } else {
        	   DLFileEntry file = DLFileEntryLocalServiceUtil.deleteDLFileEntry(fileEntryId);
               filesObject = JSONFactoryUtil.createJSONObject();
               filesObject.put("idFile", file.getFileEntryId());
               filesObject.put("filename", file.getFileName());
               String url = "/documents/" + file.getGroupId() + "/" + file.getFolderId() + "/" + file.getFileName() + "/" + file.getUuid() + "?t=" + System.currentTimeMillis();
               filesObject.put("fullPath", url.replace(" ", "%20"));
               filesObject.put("imageThumbnail", url.replace(" ", "%20") + "&imageThumbnail=1");
               filesObject.put("all",filesObject.toJSONString());
               return filesObject;

           }
       } catch (PortalException e) {
           e.printStackTrace();
           filesObject = JSONFactoryUtil.createJSONObject();
           filesObject.put("errorMessage", e.getMessage());
           filesObject.put("status", "BAD");
           return filesObject;
       } 
	   
   }

    /*Recupera la informacion de los folders*/
    private JSONArray getFoldersJson(Long groupId,Long parent,String nameParent,JSONArray filesArray) throws PortalException{
        List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, new Long(parent));
        if(listFolders != null && listFolders.size() > 0){
            JSONObject filesObject=null;
            for (DLFolder object : listFolders) {
                filesObject=JSONFactoryUtil.createJSONObject();
                filesObject.put("folderId", object.getFolderId());
                String newNameParent;
                if(nameParent==null) {
                    filesObject.put("nameFolder", object.getName());
                    newNameParent=object.getName();
                }else {
                    filesObject.put("nameFolder", nameParent + "/" + object.getName());
                    newNameParent=nameParent + "/" + object.getName();
                }
                filesArray.put(filesObject);
                ///ojo con esto// TODO: 2019-04-15
                //if(getFoldersJson(groupId,object.getFolderId(),newNameParent,filesArray)!= null && !getFoldersJson(groupId,object.getFolderId(),newNameParent,filesArray).isNull(0)){
                getFoldersJson(groupId,object.getFolderId(),newNameParent,filesArray);
                //}

            }
        }
        return filesArray;
    }
    private List<DLFileEntry> getFilesByFolder(Long siteID,Long idFolder) throws PortalException{
        List<DLFileEntry> results = DLFileEntryLocalServiceUtil.getFileEntries(siteID,idFolder);
        if(results.size()>0){
            return results;
        }
        return new ArrayList<>();
    }

    public JSONArray getFolders(Long groupId,Long parent,String type) throws PortalException{
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
               // if(getFolders(groupId,object.getFolderId(),type)!= null && !getFolders(groupId,object.getFolderId(),type).isNull(0)){
                    folderObject.put("child", getFolders(groupId,object.getFolderId(),type));
               // }
                folderArray.put(folderObject);
            }
        }
        return folderArray;
    }


    public JSONArray getFoldersAndFilesByfolderJson(Long groupId,Long parent,String type,JSONArray filesArray) throws PortalException{
        List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, new Long(parent));
        if(listFolders != null && listFolders.size() > 0){
            JSONObject filesObject=null;
            for (DLFolder object : listFolders) {
                System.out.println(object.getName());
                List<DLFileEntry> result = getFilesByFolder(groupId, object.getFolderId());
                if(result!= null && !result.isEmpty()){
                    for (DLFileEntry file : result) {
                        filesObject=JSONFactoryUtil.createJSONObject();

                        filesObject.put("idFile", file.getFileEntryId());
                        filesObject.put("filename", file.getFileName());
                        filesObject.put("path", file.getFolder().getPath());
                        String url="/documents/"+file.getGroupId()+"/"+file.getFolderId()+"/"+file.getFileName()+"/"+file.getUuid()+"?t="+System.currentTimeMillis();;
                        filesObject.put("fullPath",url.replace(" ", "%20") );
                        filesObject.put("imageThumbnail",url.replace(" ", "%20")+"&imageThumbnail=1");
                        filesObject.put("all", filesObject.toJSONString());
                        filesArray.put(filesObject);
                    }

                }
               // if(getFoldersAndFilesByfolderJson(groupId,object.getFolderId(),type,filesArray)!= null && !getFoldersAndFilesByfolderJson(groupId,object.getFolderId(),type,filesArray).isNull(0)){
                    getFoldersAndFilesByfolderJson(groupId,object.getFolderId(),type,filesArray);
                //}
            }
        }
        return filesArray;
    }

    @SuppressWarnings("unused")
    private JSONArray ReadJSON(JSONArray folders,JSONArray filesArray) throws PortalException{
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

    public DLFolder getFolderByName(Long groupId,String name) throws PortalException{
        return	DLFolderLocalServiceUtil.getFolder(groupId, Contants.DLFILEENTRY_BASE, name);
    }
}
