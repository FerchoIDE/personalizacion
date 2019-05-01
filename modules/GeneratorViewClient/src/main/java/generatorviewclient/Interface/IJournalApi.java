package generatorviewclient.Interface;

import java.util.List;

import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;

public interface IJournalApi {

	/**
     * M�todo getListJournalFolders
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
     *  @throws PortalException 
     */
	public JSONArray getListJournalFolders(Long groupId,String brand,String code_hotel) throws PortalException;
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
		     * M�todo getWCAndJournalFolder
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
		     *  @throws PortalException 
		     */
	public List<JournalArticle> getWCAndJournalFolder(Long groupId,String brand,String code_hotel) throws PortalException;
	//busqueda recursiva de webcontents x M, CH y tipo getWCAndJournalFolderType((portletGroupId,"AQUA","","AQC");
	/**
     * M�todo getWCAndJournalFolderType
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
     *  @throws PortalException
     */
	public List<JournalArticle> getWCByJournalFolderAndStructureType(Long groupId,String brand,String code_hotel,String type) throws PortalException;
	/**
     * M�todo getWCAndJournalFolderByName
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
     *  @throws PortalException 
     */
	public List<JournalArticle> getWCAndJournalFolderByName(Long groupId,String brand,String code_hotel,String name,String type) throws PortalException;
	/**
     * M�todo searchWebContentByCodeHotel, B�squeda a primer nivel,si existe devuelve el webcontent,sino un array vacio
     * @param groupId Id del s�tio
     * @param folderId Id de la carpeta marca donde se hace la b�squeda
     * @param code C�digo de hotel para la b�squeda
     * @return <ul>
     *  <li>Resultados de la b�squeda List<JournalArticle></li>
     *  </ul>
     */
	public List<JournalArticle> searchWebContentByCodeHotelFirstLevel(Long groupId,String structureName,String code) throws PortalException;

	public JournalArticle saveWC(String json) throws PortalException;
	
	public JournalArticle updateWC(String json) throws PortalException;

	
	
}
