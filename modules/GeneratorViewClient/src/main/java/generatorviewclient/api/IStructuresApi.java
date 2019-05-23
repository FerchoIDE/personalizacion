package generatorviewclient.api;

import java.util.List;

import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;

public interface IStructuresApi {

    public List<DDMStructure> getAllStructuresBySite(Long groupId) throws PortalException;
    
    /*Devuelve info basica de la estructura en formato json*/
    public JSONArray getAllStructuresBySiteMenu(Long groupId,String language) throws PortalException;

}
