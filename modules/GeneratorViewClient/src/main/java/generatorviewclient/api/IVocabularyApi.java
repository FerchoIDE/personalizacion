package generatorviewclient.api;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;

public interface IVocabularyApi {

	JSONArray getCategoriesByGroupAndVacabularyIdAllLevels(Long groupId, Long vocabularyId, Long parentCategoryId)
			throws PortalException;

	JSONArray getCategoriesByGroupAndVacabularyFirstLevel(Long groupId, Long vocabularyId, Long parentCategoryId)
			throws PortalException;

	JSONArray getVocabulariesByGroup(Long groupId) throws PortalException;

	JSONArray getCategories(Long groupId) throws PortalException;

}
