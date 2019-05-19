package generatorviewclient.api.impl;

import java.util.ArrayList;
import java.util.List;

import com.liferay.asset.kernel.model.AssetTag;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.util.Validator;

import generatorviewclient.api.IassetTags;

public class AssetTagsApi extends QueriesLiferayApi implements IassetTags  {
	
	@Override
	public List<AssetTag> getTagsByname(Long groupId,String name) throws PortalException {
		if(name.length() >= 2){
		return getTags(groupId, name);
		}
		return new ArrayList<>();
		}
}
