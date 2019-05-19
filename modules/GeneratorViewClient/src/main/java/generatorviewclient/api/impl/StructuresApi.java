package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.List;

import generatorviewclient.api.IStructuresApi;
import generatorviewclient.constants.Contants;

import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.PropertyFactoryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.Validator;

public class StructuresApi extends QueriesLiferayApi implements IStructuresApi {
    private static final Log _log = LogFactoryUtil.getLog(JournalApi.class);

    @Override
    public List<DDMStructure> getAllStructuresBySite(Long groupId) throws PortalException {
        List<DDMStructure> structures = DDMStructureLocalServiceUtil.getStructures(groupId);
        List<DDMStructure> valid_structures = new ArrayList<>();
        for (DDMStructure ddmStructure : structures) {
            if(validStructure(ddmStructure.getStructureId())==true){
                valid_structures.add(ddmStructure);
            }
        }
        if (valid_structures.size() > 0) {
            _log.info("Estrucruras Validas:"+valid_structures.size() );
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
            _log.info("Estrucruras Validas:"+valid_structures.size() );
            return valid_structures;
        }
        return new ArrayList<>();
    }

    protected boolean validStructure(Long id){
        for (String structureID : Contants.STRUCTURE_IDS) {
            if(structureID.equals(String.valueOf(id))) return true;
        }
        return false;
    }


	@Override
	public JSONArray getAllStructuresBySiteMenu(Long groupId, String language) throws PortalException {
		JSONArray arrayStructures=JSONFactoryUtil.createJSONArray();
		JSONObject structure=null;
		for (DDMStructure iterable_element : new StructuresApi().getAllStructuresBySite(groupId)) {
			structure=JSONFactoryUtil.createJSONObject();
			if(!Validator.isNull(language))
			structure.put("name", iterable_element.getName(language));
			else
			structure.put("name", iterable_element.getName());
			structure.put("structureId", iterable_element.getStructureId());
			structure.put("primaryKey", iterable_element.getPrimaryKey());
			structure.put("StructureKey", iterable_element.getStructureKey());
			arrayStructures.put(structure);			
		}
		return arrayStructures;

	}

}
