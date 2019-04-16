package generatorviewclient.liferayservice;


import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.journal.model.JournalFolder;
import com.liferay.journal.service.JournalFolderLocalServiceUtil;
import com.liferay.portal.kernel.repository.model.FileEntry;
import com.liferay.portal.kernel.service.ServiceContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Modified;

import generatorviewclient.constants.Contants;
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
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.PortalClassLoaderUtil;
import com.liferay.portal.kernel.util.Base64;

@Component(configurationPid = "generatorviewclient.config.ConfigPersonalizacion",
		configurationPolicy = ConfigurationPolicy.OPTIONAL, immediate = true)
public class JournalArticleServices {
	private static final Log log = LogFactoryUtil.getLog(JournalArticleServices.class);


	/*************************Inicia la secci�n de llamados***************************/

	//busqueda recursiva de archivos x M y CH getFiles((portletGroupId,"AQUA","","AQC");
	public JSONArray getFilesAndFolder(Long groupId,String brand,String type,String code_hotel) throws PortalException{

		JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		long id_base=getRootFolderByConfiguration(groupId);
		if(code_hotel!=null && brand!=null){
			Long brandFolder=getFolder(groupId, brand, id_base);
			Long hc=getFolder(groupId, code_hotel, brandFolder);
			filesArray=getFoldersAndFilesByfolderJson(groupId, hc, type, filesArray);
			if(getFilesByFolder(groupId, hc)!=null){
				for (DLFileEntry file : getFilesByFolder(groupId, hc)) {
					filesArray.put(mapping(file));
				}
			}
			return filesArray;
		}
		else if(brand!=null && code_hotel==null){
			Long brandFolder=getFolder(groupId, brand, id_base);
			filesArray=getFoldersAndFilesByfolderJson(groupId, brandFolder, type, filesArray);
			if(getFilesByFolder(groupId, brandFolder)!=null){
				for (DLFileEntry file : getFilesByFolder(groupId, brandFolder)) {
					filesArray.put(mapping(file));
				}
			}
			return filesArray;
		}
		else if(code_hotel!=null && brand==null){
			if(getFilesByFolder(groupId, id_base)!=null){
				for (DLFileEntry file : getFilesByFolder(groupId, id_base)) {
					filesArray.put(mapping(file));
				}
			}
			return filesArray;
		}else{
			if(getFilesByFolder(groupId, id_base)!=null){
				for (DLFileEntry file : getFilesByFolder(groupId, id_base)) {
					filesArray.put(mapping(file));
				}
			}
			return filesArray;
		}

	}


	public JSONObject mapping(DLFileEntry file) throws PortalException{
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

	//getFolders((portletGroupId,"AQUA","","AQC");//busqueda recursiva de folder  x M y CH
	public JSONArray getListFolders(Long groupId,String brand,String code_hotel) throws PortalException{
		JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		long id_base=getRootFolderByConfiguration(groupId);
		if(code_hotel!=null && brand!=null){
			Long brandFolder=getFolder(groupId, brand, id_base);
			Long hc=getFolder(groupId, code_hotel, brandFolder);
			return getFoldersJson(groupId, hc, null,filesArray);
		}
		else if(brand!=null && code_hotel==null){
			Long brandFolder=getFolder(groupId, brand, id_base);

			return getFoldersJson(groupId, brandFolder,null, filesArray);
		}
		else if(code_hotel!=null && brand==null){
			return getFoldersJson(groupId, id_base,null, filesArray);
		}else{
			return getFoldersJson(groupId, id_base,null, filesArray);
		}

	}



	//getFilesByName((portletGroupId,"AQUA","","AQC","junior");//busqueda recursiva de folder y archivos x M, CH y NH
	public JSONArray getFilesByName(Long groupId,String brand,String name,String code_hotel) throws PortalException{
		JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		long id_base=getRootFolderByConfiguration(groupId);
		Long brandFolder=getFolder(groupId, brand, id_base);
		Long hc=getFolder(groupId, code_hotel, brandFolder);
		filesArray=getFoldersAndFilesByName(groupId, hc, name, filesArray);
		if(getFilesByName(groupId, hc, name)!=null){
			for (DLFileEntry file : getFilesByName(groupId, hc, name)) {
				filesArray.put(mapping(file));
			}
		}
		return filesArray;
	}


	//getFilesByCurrentFolderAndName((portletGroupId,"AQUA","","AQC","junior");//busqueda recursiva de folder y archivos x M, CH y NH
	public JSONArray getFilesByCurrentFolderAndName(Long groupId,Long currentFolder,String name) throws PortalException{
		JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		filesArray=getFoldersAndFilesByName(groupId, currentFolder, name, filesArray);
		if(getFilesByName(groupId, currentFolder, name)!=null){
			for (DLFileEntry file : getFilesByName(groupId, currentFolder, name)) {
				filesArray.put(mapping(file));

			}
		}
		return filesArray;
	}

	/*Recupera la informacion de los folders*/
	public JSONArray getFoldersJson(Long groupId,Long parent,String nameParent,JSONArray filesArray) throws PortalException{
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

	/*Permite salvar un archivo a trav�s de base64*/
	public JSONArray saveFile(Long groupId,Long userId,Long folderId,String image,String name,String description,String mimeType) throws FileNotFoundException{

		JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		try {
			ServiceContext serviceContext = new ServiceContext();
			serviceContext.setScopeGroupId(groupId);
			byte[] imageByte=Base64.decode(image);

			if(getFilesByName(groupId, folderId, name)!=null && getFilesByName(groupId, folderId, name).size()>0){
				JSONObject filesObject=null;
				filesObject=JSONFactoryUtil.createJSONObject();
				filesObject.put("message","No se a podido guardar");
				filesObject.put("causa", "El nombre del archivo ya existe");
				filesArray.put(filesObject);
				return filesArray;
			}
			else{
				JSONObject filesObject=null;
				FileEntry file = DLAppLocalServiceUtil.addFileEntry(userId, groupId, folderId, name, mimeType, imageByte, serviceContext);
				filesObject=JSONFactoryUtil.createJSONObject();
				filesObject.put("idFile", file.getFileEntryId());
				filesObject.put("filename", file.getFileName());
				String url="/documents/"+file.getGroupId()+"/"+file.getFolderId()+"/"+file.getFileName()+"/"+file.getUuid()+"?t="+System.currentTimeMillis();;
				filesObject.put("fullPath",url.replace(" ", "%20") );
				filesObject.put("imageThumbnail",url.replace(" ", "%20")+"&imageThumbnail=1");
				filesArray.put(filesObject);
				return filesArray;

			}
		} catch (PortalException e) {
			e.printStackTrace();
		}
		return filesArray;

	}




	//getListJournalFolders((portletGroupId,"AQUA","","AQC");//busqueda recursiva de folder  x M y CH
	public JSONArray getListJournalFolders(Long groupId,String brand,String code_hotel) throws PortalException{
		JSONArray filesArray=JSONFactoryUtil.createJSONArray();
		long id_base= getHotelFolderRootByConfigurationFolderWebcontent(groupId);
		if(code_hotel!=null && brand!=null){
			Long brandFolder=getFolderWC(groupId, brand, id_base);
			Long hc=getFolderWC(groupId, code_hotel, brandFolder);
			return getJournalFoldersJson(groupId, hc,null, filesArray);
		}
		else if(brand!=null && code_hotel==null){
			Long brandFolder=getFolderWC(groupId, brand, id_base);
			return getJournalFoldersJson(groupId, brandFolder,null, filesArray);
		}
		else if(code_hotel!=null && brand==null){
			return getJournalFoldersJson(groupId, id_base,null, filesArray);
		}else{
			return getJournalFoldersJson(groupId, id_base,null, filesArray);
		}

	}




	//busqueda recursiva de webcontents x M y CH getAllWCAndJournalFolder((portletGroupId,"AQUA","","AQC");
	public List<JournalArticle> getWCAndJournalFolder(Long groupId,String brand,String code_hotel) throws PortalException{
		List<JournalArticle> journalArray= new ArrayList<>();
		long id_base=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
		Long brandFolder=getFolderWC(groupId, brand, id_base);
		Long hc=getFolderWC(groupId, code_hotel, brandFolder);
		journalArray=getJournalFoldersAndWC(groupId, hc, journalArray);
		if(getWCByJournalFolder(groupId, hc)!=null){
			for (JournalArticle journal : getWCByJournalFolder(groupId, hc)) {
				journalArray.add(journal);
			}
		}
		return journalArray;
	}

	//busqueda recursiva de webcontents x M, CH y tipo getWCAndJournalFolderType((portletGroupId,"AQUA","","AQC");
	public List<JournalArticle> getWCAndJournalFolderType(Long groupId,String brand,String code_hotel,String type) throws PortalException{
		if(getStructureByName(type, groupId)!=null && !getStructureByName(type, groupId).isEmpty()){
			List<DDMStructure> ddm = getStructureByName(type, groupId);
			List<JournalArticle> journalArray= new ArrayList<>();
			long id_base=getHotelFolderRootByConfigurationFolderWebcontent(groupId);
			Long brandFolder=getFolderWC(groupId, brand, id_base);
			Long hc=getFolderWC(groupId, code_hotel, brandFolder);
			journalArray=getJournalFoldersAndWCByType(groupId, hc,ddm.get(0).getStructureKey(), journalArray);
			if(getWCByJournalFolderAndType(groupId, hc,ddm.get(0).getStructureKey())!=null){
				for (JournalArticle journal : getWCByJournalFolderAndType(groupId, hc,ddm.get(0).getStructureKey())) {
					journalArray.add(journal);
				}
			}
			return journalArray;
		}
		return new ArrayList<>();
	}







	/*************************Termina la secci�n de llamados***************************/

	/*Recupera la informacion de los JournalFolder*/
	public JSONArray getJournalFoldersJson(Long groupId,Long parent,String nameParent,JSONArray filesArray) throws PortalException{
		List<JournalFolder> listFolders = JournalFolderLocalServiceUtil.getFolders(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			JSONObject filesObject=null;
			for (JournalFolder object : listFolders) {
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
				// TODO: 2019-04-15 Ojo con esta parte
				if(getFoldersJson(groupId,object.getFolderId(),newNameParent,filesArray)!= null && !getFoldersJson(groupId,object.getFolderId(),newNameParent,filesArray).isNull(0)){
					getFoldersJson(groupId,object.getFolderId(),newNameParent,filesArray);
				}

			}
		}
		return filesArray;
	}
	/*Obtiene archivos y folder por nombre y folder actual*/
	public List<DLFileEntry> getFilesByName(Long groupId,Long idCurrentFolder,String namefile){
		DynamicQuery query = DynamicQueryFactoryUtil.forClass(DLFileEntry.class, "DLFileEntry",PortalClassLoaderUtil.getClassLoader());
		query.add(RestrictionsFactoryUtil.like("title", new StringBuilder("%").append(namefile).append("%").toString()));
		query.add(PropertyFactoryUtil.forName("folderId").eq(idCurrentFolder));
		query.add(PropertyFactoryUtil.forName("groupId").eq(new Long(groupId)));
		return  DLFileEntryLocalServiceUtil.dynamicQuery(query);

	}





	public JSONArray getFoldersAndFilesByName(Long groupId,Long parent,String namefile,JSONArray filesArray) throws PortalException{
		List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			JSONObject filesObject=null;
			for (DLFolder object : listFolders) {
				System.out.println("folder:"+ object.getFolderId());
				if(getFilesByName(groupId, object.getFolderId(),namefile)!= null && !getFilesByName(groupId, object.getFolderId(),namefile).isEmpty()){
					for (DLFileEntry file : getFilesByName(groupId, object.getFolderId(),namefile)) {
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
				if(getFoldersAndFilesByName(groupId,object.getFolderId(),namefile,filesArray)!= null && !getFoldersAndFilesByName(groupId,object.getFolderId(),namefile,filesArray).isNull(0)){
					getFoldersAndFilesByName(groupId,object.getFolderId(),namefile,filesArray);
				}
			}
		}
		return filesArray;
	}


	public JSONArray getFoldersAndFilesByfolderJson(Long groupId,Long parent,String type,JSONArray filesArray) throws PortalException{
		List<DLFolder> listFolders = getSubFolderByFolderParent(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			JSONObject filesObject=null;
			for (DLFolder object : listFolders) {
				System.out.println(object.getName());
				if(getFilesByFolder(groupId, object.getFolderId())!= null && !getFilesByFolder(groupId, object.getFolderId()).isEmpty()){
					for (DLFileEntry file : getFilesByFolder(groupId, object.getFolderId())) {
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
				if(getFoldersAndFilesByfolderJson(groupId,object.getFolderId(),type,filesArray)!= null && !getFoldersAndFilesByfolderJson(groupId,object.getFolderId(),type,filesArray).isNull(0)){
					getFoldersAndFilesByfolderJson(groupId,object.getFolderId(),type,filesArray);
				}
			}
		}
		return filesArray;
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
		return getFolders(groupId,hc,type);
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


	public boolean validStructure(Long id){
		for (String structureID : Contants.STRUCTURE_IDS) {
			log.info("structure id uno: "+structureID);
			log.info("structure id dos: "+id);
			if(structureID.equals(String.valueOf(id))) return true;
		}
		return false;
	}

	public List<DDMStructure> getStructureByName(String nameStructure,Long siteID) {
		DynamicQuery query = DDMStructureLocalServiceUtil.dynamicQuery()
				.add(PropertyFactoryUtil.forName("name").like("%>"+nameStructure+"<%"))
				.add(PropertyFactoryUtil.forName("groupId").eq(new Long(siteID)));
		List<DDMStructure> structures = DDMStructureLocalServiceUtil.dynamicQuery(query);
		List<DDMStructure> valid_structures = new ArrayList<DDMStructure>();
		for (DDMStructure ddmStructure : structures) {
			log.info(ddmStructure);
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
				idFolder= DLFolderLocalServiceUtil.getFolder(groupId, 0, baseFileEntry);
			}
			else{
				idFolder= DLFolderLocalServiceUtil.getFolder(groupId, idFolder.getFolderId(), baseFileEntry);
			}
			log.info(idFolder.getName()+"id:"+idFolder.getFolderId());
		}
		return idFolder.getFolderId();
	}



	public List<JournalFolderImpl> getRateFolder1(long parentFolder,String nameFolder,Long siteID){
		DynamicQuery query_journal_folder = DynamicQueryFactoryUtil.forClass(com.liferay.journal.model.impl.JournalFolderImpl.class, "journalFolder",PortalClassLoaderUtil.getClassLoader());
		query_journal_folder.add(RestrictionsFactoryUtil.eq("name", nameFolder));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("parentFolderId", new Long(parentFolder)));
		query_journal_folder.add(RestrictionsFactoryUtil.eq("groupId",new Long(siteID)));
		List<com.liferay.journal.model.impl.JournalFolderImpl> ja_1 = JournalArticleResourceLocalServiceUtil.dynamicQuery(query_journal_folder);
		return ja_1;
	}





	/*@SuppressWarnings("unchecked")
	public List<com.consistent.service.application.models.Files> getFoldersAndFiles(Long groupId,Long parent,String type) throws PortalException{
		QueryDefinition queryDefinition = new QueryDefinition(WorkflowConstants.STATUS_ANY, QueryUtil.ALL_POS, QueryUtil.ALL_POS, null);
		List<Object> foldersAndFileEntriesAndFileShortcuts= DLFolderLocalServiceUtil.getFoldersAndFileEntriesAndFileShortcuts(groupId, parent, null, true, queryDefinition);
		for (Object folderAndFileEntryAndFileShortcut: foldersAndFileEntriesAndFileShortcuts) {
			if (folderAndFileEntryAndFileShortcut instanceof DLFileEntry) {
		    	DLFileEntry fileEntry = (DLFileEntry)folderAndFileEntryAndFileShortcut;

		    }
			else if (folderAndFileEntryAndFileShortcut instanceof DLFolder) {
		    	DLFolder subFolder = (DLFolder) folderAndFileEntryAndFileShortcut;

		        if(subFolder!=null){
		        	getFoldersAndFiles(groupId, subFolder.getFolderId(), type);
		        }
		    }
	     }
		 return new ArrayList<>();
	}*/




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
				if(getFolders(groupId,object.getFolderId(),type)!= null && !getFolders(groupId,object.getFolderId(),type).isNull(0)){
					folderObject.put("child", getFolders(groupId,object.getFolderId(),type));
				}
				folderArray.put(folderObject);
			}
		}
		return folderArray;
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

	public long getHotelFolderRootByConfigurationFolderWebcontent(Long groupId) throws PortalException{
		JournalFolderImpl idFolder = null;
		for (String baseFileEntry : Contants.JOURNAL_HOTEL) {
			if(idFolder!=null){
				idFolder= getJournalFolderByName(groupId, idFolder.getFolderId(), baseFileEntry);
			}
			else{
				idFolder= getJournalFolderByName(groupId, new Long(0), baseFileEntry);
			}
			log.info("Folder webcontent:"+idFolder.getName()+"id:"+idFolder.getFolderId());
		}
		return idFolder.getFolderId();
	}

	public List<JournalArticle> getWCByJournalFolder(Long groupId,Long folderId) throws PortalException{
		List<JournalArticle> results = JournalArticleLocalServiceUtil.getArticles(groupId, folderId);
		if(results.size()>0){
			return results;
		}
		return new ArrayList<>();
	}

	public List<JournalArticle> getJournalFoldersAndWC(Long groupId,Long parent,List<JournalArticle> journalArray) throws PortalException{
		List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			for (JournalFolder object : listFolders) {
				System.out.println(object.getName());
				if(getWCByJournalFolder(groupId, object.getFolderId())!= null && !getWCByJournalFolder(groupId, object.getFolderId()).isEmpty()){
					for (JournalArticle ja : getWCByJournalFolder(groupId, object.getFolderId())) {
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

	public List<JournalArticleImpl> getWCByJournalFolderAndType(Long groupId,Long folderId,String structureKey) throws PortalException{
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


	public List<JournalArticle> getJournalFoldersAndWCByType(Long groupId,Long parent,String type,List<JournalArticle> journalArray) throws PortalException{
		List<JournalFolder> listFolders = getSubFolderByJournalFolderParent(groupId, new Long(parent));
		if(listFolders != null && listFolders.size() > 0){
			for (JournalFolder object : listFolders) {
				System.out.println(object.getName());
				if(getWCByJournalFolderAndType(groupId, object.getFolderId(),type)!= null && !getWCByJournalFolderAndType(groupId, object.getFolderId(),type).isEmpty()){
					for (JournalArticle ja : getWCByJournalFolderAndType(groupId, object.getFolderId(),type)) {
						if(JournalArticleLocalServiceUtil.isLatestVersion(groupId, ja.getArticleId(), ja.getVersion())){
							journalArray.add(ja);
						}else{
							journalArray.add(JournalArticleLocalServiceUtil.getLatestArticle(ja.getResourcePrimKey()));
						}
					}
				}
				if(getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray)!= null && !getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray).isEmpty()){
					getJournalFoldersAndWCByType(groupId,object.getFolderId(),type,journalArray);
				}
			}
		}
		return journalArray;
	}









	/*Secci�n de journal folders*/


//


	@Activate
	@Modified
	public void activate(Map<String, Object> properties) {

		System.out.println("Configuraci�nn actualizada  " + new Date().toString());
		System.out.println("properties===="+properties);

		_configuration = ConfigurableUtil.createConfigurable(generatorviewclient.config.ConfigPersonalizacion.class, properties);

		System.out.println("_configuration===="+_configuration);
		if (_configuration != null /*&&
				_configuration.StructureId()!=null&&
				_configuration.DLFileEntryFolderBase()!=null&&
				_configuration.JournalFolderHotelBase()!=null*/) {
			Contants.STRUCTURE_IDS=_configuration.StructureId();
			//Contants.DLFILEENTRY_BASE=_configuration.DLFileEntryFolderBase();
			String[] DLFILEENTRY_BASE = { "Marcas","Media" };
			Contants.DLFILEENTRY_BASE= DLFILEENTRY_BASE;//_configuration.DLFileEntryFolderBase();
			Contants.JOURNAL_HOTEL=_configuration.JournalFolderHotelBase();
			/*for (String iterable_element : Contants.STRUCTURE_IDS) {
				System.out.println("Registro actual en la configuraci�n, info="+iterable_element);

			}
			for (String iterable_element : Contants.DLFILEENTRY_BASE) {
				System.out.println("Registro actual en la configuraci�n, info="+iterable_element);

			}
			for (String iterable_element : Contants.JOURNAL_HOTEL) {
				System.out.println("Registro actual en la configuraci�n, info="+iterable_element);

			}*/

		} else {
			System.out.println("No hay datos en la configuraci�n inicial");
		}
	}

	private volatile generatorviewclient.config.ConfigPersonalizacion _configuration;

}
