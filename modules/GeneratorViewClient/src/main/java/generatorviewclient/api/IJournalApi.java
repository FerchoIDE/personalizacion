package generatorviewclient.api;

import java.util.List;
import java.util.Map;

import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;

public interface IJournalApi {

 
    /**
     * M�todo getListJournalFoldersByCode
     * @param groupId Id del s�tio
     * @param codeBrand codigo carpeta donde se hace la b�squeda
     * @return <ul>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  </ul>
     *  @throws PortalException
     */
    public JSONArray getListJournalFoldersByCode(Long groupId,Long codeBrand) throws PortalException;
    /**
     * M�todo getWCByFolder
     * @param groupId Id del s�tio
     * @param folderID codigo carpeta/marca donde se hace la b�squeda
     * @return <ul>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  </ul>
     *  @throws PortalException
     */
    public List<JournalArticle> getWCByFolder(Long groupId,Long folderId) throws PortalException;
    /**
     * M�todo createFolderNestedFolderId
     * @param groupId Id del s�tio
     * @param brand Nombre de la carpeta marca donde se hace la b�squeda
     * @param type tipo de archivo a buscar(No se filtra)
     * @param code_hotel Nombre de la carpeta c�difgo de hotel para la b�squeda
     * @return <ul>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  </ul>
     * @throws PortalException
     */
    public JSONArray createFolderNestedFolderId(Long userId,Long groupId,Long parentFolderId,String name) throws PortalException;
    /**
     * M�todo getWCByName
     * @param groupId Id del s�tio
     * @param brand Nombre de la carpeta marca donde se hace la b�squeda
     * @param type tipo de archivo a buscar(No se filtra)
     * @param code_hotel Nombre de la carpeta c�difgo de hotel para la b�squeda
     * @return <ul>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  </ul>
     */
    public List<JournalArticle> getWCByName(Long groupId,String brand,String code_hotel,String name) throws PortalException;
    //busqueda recursiva de webcontents x M y CH getAllWCAndJournalFolder((portletGroupId,"AQUA","","AQC");
    /**
     * Mï¿½todo getWCAndJournalFolder
     * @param groupId Id del sï¿½tio
     * @param brand Nombre de la carpeta marca donde se hace la bï¿½squeda
     * @param type tipo de archivo a buscar(No se filtra)
     * @param code_hotel Nombre de la carpeta cï¿½difgo de hotel para la bï¿½squeda
     * @return <ul>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  </ul>
     *  @throws PortalException
     */
    public List<JournalArticle> getWCAndJournalFolder(Long groupId,String brand,String code_hotel) throws PortalException;
    //busqueda recursiva de webcontents x M, CH y tipo getWCAndJournalFolderType((portletGroupId,"AQUA","","AQC");
    /**
     * Mï¿½todo getWCAndJournalFolderType
     * @param groupId Id del sï¿½tio
     * @param brand Nombre de la carpeta marca donde se hace la bï¿½squeda
     * @param type tipo de archivo a buscar(No se filtra)
     * @param code_hotel Nombre de la carpeta cï¿½difgo de hotel para la bï¿½squeda
     * @return <ul>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  <li>case 1: code_hotel!=null && brand!=null JSONArray </li>
     *  <li>case 2: brand!=null && code_hotel==null JSONArray </li>
     *  </ul>
     *  @throws PortalException
     */
    public List<JournalArticle> getWCByJournalFolderAndStructureType(Long groupId,String brand,String code_hotel,String type) throws PortalException;
   
  

    public JournalArticle saveWC(String json) throws PortalException;

    public JournalArticle updateWC(String json) throws PortalException;

    /**/



    /*busqueda tosdos los contenidos recursivos de un tipo
    groupid,
    marca,(podria ser opcional) Convierte la marca en el Id del folder
    code hotel(podria ser opcional)Convierte la Hotel en el Id del folder
    tipo de contenido (Id de la estructura) si este es null es sobre todos los contenidos
     */
    public List<JournalArticle> getWebcontentRecursiveByType(Long groupId,String marca,String codeHotel,String TypeContent) throws PortalException;
    
    /*busqueda tosdos los contenidos recursivos de un tipo y folder en especifico
     * 
     Long groupId, Id del sitio 123 Long
     Long folderId, idFolder donde comenzara la busqueda 12344 Long
     Long typeContent id de la estructura 12345 Long
    groupid,
      */
    public List<JournalArticle> getWebcontentRecursiveByType(Long groupId,Long folderId,Long typeContent) throws PortalException;

    
    /*busqueda tosdos los contenidos recursivos de un tipo y folder en especifico
     * 
     Long groupId, Id del sitio 12345 Long 
     String marca, Toma la maraca y extrae el valor del id FA String
     String codeHotel, Toma el valor del folder Hotel  FAA String
     Long typeContent id de la estructura 12345 Long
      */
    public List<JournalArticle> getWebcontentRecursiveByType(Long groupId,String marca,String codeHotel,Long typeContent) throws PortalException;



    /*busqueda todos los contenidos recursivos de un tipo que conincidan en el titulo
    groupid, 12345 Long
    marca,(podria ser opcional) FA
    code hotel(podria ser opcional) FAA 
    tipo de contenido (Id de la estructura) si este es null es sobre todos los contenidos Hotels
    titulo del contenido, considerar usar like y no sensible a mayusculas minusculas Sushi Corner - FCC
     */
    public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId,String marca,String codeHotel,String title,String contentType) throws PortalException;
    /*Obtiene los Web contents dentro del nombre de folder marca -> Hotel  que se le indique ademas del FolderId
     * Long groupId Nombre del sitio 1234 Long 
     * folderId Id de folder donde comenzara la busqueda
     * String name Nombre del titulo a buscar  
     * 
     * */
    public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId,Long folderId,String title,Long structureId) throws PortalException;

    /*Obtiene los Web contents dentro del nombre de folder marca -> Hotel  que se le indique ademas del FolderId
     Long groupId,12345
     String marca, FA
     String codeHotel, FAA
     String title, Fiesta ... 
     Long structureId 12345
     * 
     * */
    public List<JournalArticle> getWebcontentRecursiveByTitle(Long groupId,String marca,String codeHotel,String title,Long structureId) throws PortalException;

    /*Obtiene los Web contents dentro del nombre de folder marca -> Hotel  que se le indique ademas del FolderId
     * Long groupId Nombre del sitio
     * String brand Nombre de la carpeta marca
     * String code_hotel Nombre del carpeta de hotel 
     * String name Nombre del titulo a buscar  
     *  Long structureId Id de la estructura 
     * */
    public List<JournalArticle> getWCAndJournalFolderByName(Long groupId,String brand,String code_hotel,String name) throws PortalException;
 
    /*Obtiene los Web contents dentro del nombre de folder marca -> Hotel  que se le indique ademas del FolderId
     * Long groupId Nombre del sitio
     * String brand Nombre de la carpeta marca
     * String code_hotel Nombre del carpeta de hotel 
     * String name Nombre del titulo a buscar 
     * Long structureId Id de la estructura 
     * 
     * */
    public List<JournalArticle> getWCAndJournalFolderByName(Long groupId,String brand,String code_hotel,String name,Long structureId) throws PortalException;
    /*Obtiene los Web contents dentro del folderId que se le indique*/
    public List<JournalArticle> getWCByFolderId(Long groupId, Long folderId) throws PortalException;

    /*todas las carpetas dentro de
    groupid, id del sitio 
    brand, Nombre de la carpeta marca
    code hotel Nombre de la carpeta Hotel
    
     public JSONArray getListJournalFolders(Long groupId,String brand,String code_hotel) throws PortalException;

     */

    public JSONArray getListJournalFolders(Long groupId,String brand,String code_hotel) throws PortalException;


    /*buscar si un codigo de hotel ya existe, si existe indicar el titulo dle hotel
    code hotel
    Busca sin recursividad, solo obtiene el primer nivel 
    groupId Id del s�tio
    structureName Nombre de la estructura Hotels
    code Es el codigo de Hotel dentro del xml
    
        public List<JournalArticle> searchWebContentByCodeHotelFirstLevel(Long groupId,String structureName,String code) throws PortalException;

     */
    public List<JournalArticle> searchWebContentByCodeHotelFirstLevel(Long groupId,String structureName,String code) throws PortalException;
  
    /*buscar si un codigo de hotel ya existe, si existe indicar el titulo dle hotel
    code hotel
    Busca sin recursividad, solo obtiene el primer nivel 
    groupId Id del s�tio
    structureName Nombre de la estructura Hotels
    folderId Parte a trav�s del folder que le indiques 
    code Es el codigo de Hotel dentro del xml
    
        public List<JournalArticle> searchWebContentByCodeHotelFirstLevel(Long groupId,String structureName,String code) throws PortalException;

     */
    public List<JournalArticle> searchWebContentByCodeHotelFirstLevelByFolder(Long groupId,String structureName,String code,Long folderId) throws PortalException;


    /* un arreglo de listado de marcas
    groupid,
    
    Obtiene todas la carpetas de origen es decir despues de la base Posadas/Hotel que es donde se encuentra el listado de folder que son los folder de marca
     */

    public JSONArray getListJournalFoldersBrand(Long groupId) throws PortalException;

    /* un arreglo de listado hoteles
    groupid,
    marca
    Nota: Todo parte de la ruta base
    
    marca/brand Id del folder de marca o cualquier folder
    groupid Id del sitio
    getListJournalFoldersByBrand(groupid,brand);
     */
    
    public JSONArray getListJournalFoldersByBrand(Long groupId,Long brand) throws PortalException;
    
   
    
    /* un arreglo de listado hoteles
    groupid,
    marca
    Nota: Todo parte de la ruta base
   
    brand/marca Busca a trav�s de un string el nombre de la carpeta,convierte en Id y hace la misma operaci�n 
                 que el m�todo de arriba.
           
    groupid Id del sitio
    getListJournalFoldersByBrand(groupid,brand);
     */
    public JSONArray getListJournalFoldersByBrand(Long groupId,String brand) throws PortalException;

   
    /*
    Recuperar un contenido y la estructura asociada a este IdArticle Map 
    uuid=ca0ec3c4-5b54-11e8-9cfb-5bb8e3634f62,
    id=126317, Se consulta por este elemento de la estructura de Webcontet
    resourcePrimKey=126318,
    groupId=20142,
    companyId=20115,
    userId=20155,
    userName=Test Test,
    createDate=2018-11-09 12:31:53.481,
    modifiedDate=2019-03-07 07:16:03.851,
    folderId=119341,
    classNameId=0,
    classPK=0,
    
    Map<JournalArticle, DDMStructure> map = new JournalApi().getWCandStructureById(126317);
 			for (Map.Entry<JournalArticle, DDMStructure> entry : map.entrySet()) {
 			    System.out.println(entry.getKey() + "VS" + entry.getValue());
 			}
     */
    public Map<JournalArticle, DDMStructure> getWCandStructureById(Long articleId) throws PortalException;
}
