package generatorviewclient.portlet.resource;

import java.util.ArrayList;
import java.util.List;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import com.liferay.asset.kernel.model.AssetCategory;
import com.liferay.asset.kernel.model.AssetVocabulary;
import com.liferay.asset.kernel.service.AssetCategoryLocalServiceUtil;
import com.liferay.asset.kernel.service.AssetVocabularyLocalService;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;

import generatorviewclient.constants.GeneratorViewClientPortletKeys;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getCategories"
        },
        service = MVCResourceCommand.class
)
public class GetCategories implements MVCResourceCommand {

	@Override
	public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse)
			throws PortletException {
        try {
            System.out.println("GetCategories Service");
                ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
                long portletGroupId = themeDisplay.getLayout().getGroupId();
                System.out.println("--------portletGroupId===" + portletGroupId);

                List<AssetVocabulary> listVocabulary = this.assetVocabularyLocalService.getAssetVocabularies(0, this.assetVocabularyLocalService.getAssetVocabulariesCount());
               
                JSONArray allFiles =JSONFactoryUtil.createJSONArray();
                JSONObject filesObjectInner = null;
            	JSONObject categoryObject = null;
            	
                for (AssetVocabulary vocabulary : listVocabulary) {
                	
                	JSONArray subCategoryObject = JSONFactoryUtil.createJSONArray();
                	
                	List<AssetCategory> vocabularyCategories = vocabulary.getCategories();
                	
                	for(AssetCategory category:vocabularyCategories)
                	{ 	
                	categoryObject = JSONFactoryUtil.createJSONObject();
                	
                	if(AssetCategoryLocalServiceUtil.getChildCategories(category.getCategoryId()).size()!=0) {
                	
                		categoryObject.put(category.getName(), 
                				getsubCategoryObject(category,vocabulary.isMultiValued(), vocabulary.getName()));
                    	
                	}else {
                		if(vocabulary.getName().equalsIgnoreCase("Marcas"))
                			continue;
                	categoryObject.put("name", category.getName());
                	categoryObject.put("categoryId", category.getCategoryId());
                	categoryObject.put("vocabularyId", category.getVocabularyId());
                	categoryObject.put("parentCategoryId", category.getParentCategoryId());
                	categoryObject.put("isMultiValue", vocabulary.isMultiValued());
                	categoryObject.put("parentName", vocabulary.getName());
                	}
                	 	
                	subCategoryObject.put(categoryObject);
                	}
                	
                	filesObjectInner = JSONFactoryUtil.createJSONObject();
        			filesObjectInner.put(vocabulary.getName(), subCategoryObject);
        			allFiles.put(filesObjectInner);
                    
                }
                
           
             System.out.println("GetCategories After  service ");
            System.out.println(allFiles.toJSONString());

            resourceResponse.getPortletOutputStream().write(allFiles.toJSONString().getBytes());

        } catch (Exception e) {
            System.out.println("------------------"+e.getMessage());
            e.printStackTrace();
        }
		return false;
	}
	
	protected JSONArray getsubCategoryObject(AssetCategory category, boolean isMultiValued, String parentName) {
		
		JSONArray subCategoryObject = JSONFactoryUtil.createJSONArray();
		JSONObject categoryObject = null;
    	
    	List<AssetCategory> vocabularyCategories = AssetCategoryLocalServiceUtil.getChildCategories(category.getCategoryId());
    	
    	for(AssetCategory subCategory:vocabularyCategories)
    	{ 	
    		
    
    	categoryObject = JSONFactoryUtil.createJSONObject();
    	categoryObject.put("name", subCategory.getName());
    	categoryObject.put("categoryId", subCategory.getCategoryId());
    	categoryObject.put("vocabularyId", subCategory.getVocabularyId());
    	categoryObject.put("parentCategoryId", subCategory.getParentCategoryId());
    	categoryObject.put("isMultiValue", isMultiValued);
    	categoryObject.put("parentName", parentName);
    	
    	
    	
    	
    	subCategoryObject.put(categoryObject);
    	}
		
		return subCategoryObject;
	}
	
	 @Reference(unbind="-")
	    private AssetVocabularyLocalService assetVocabularyLocalService;
	   

}
