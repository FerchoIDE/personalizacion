package generatorviewclient.portlet.action;

import java.text.SimpleDateFormat;
import java.util.AbstractMap;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceURL;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalService;
import com.liferay.journal.util.comparator.ArticleModifiedDateComparator;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.OrderByComparator;
import com.liferay.portal.kernel.util.WebKeys;

import generatorviewclient.constants.GeneratorViewClientPortletKeys;

/**
 * @author kelceyguillenbejarano
 */
@Component(
		immediate = true,
		property = {
				"javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
				"mvc.command.name=View", "mvc.command.name=/"
		},
		service = MVCRenderCommand.class
)
public class GeneratorViewClientViewMVCRenderCommand
	implements MVCRenderCommand {

	@Override
	public String render(
		RenderRequest renderRequest, RenderResponse renderResponse) {

		ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
		long portletGroupId = themeDisplay.getLayout().getGroupId();
		System.out.println("--------portletGroupId===" + portletGroupId);
		List<String> keysLst = Arrays.asList(
			"200950");
		OrderByComparator comparator = new ArticleModifiedDateComparator(false); // OrderByComparatorFactoryUtil.create("DLFileEntry", "createDate/modifiedDate", true/false);

		Map<String, List<Map<String, String>>> mpResult = keysLst.stream().map(s -> {
			//String[] keys = new String[1];
			//keys[0] = s;
			List<Map<String, String>> lstElement = new LinkedList<>();
			List<JournalArticle> lst =
					journalArticleService.getStructureArticles(portletGroupId,s,0,10,comparator);
				//journalArticleService.getStructureArticles(keys);

			if (lst!= null) {
				lst.forEach(journalArticle -> {
					boolean isLast = false;

					try {
						isLast = journalArticleService.isLatestVersion(
							journalArticle.getGroupId(),
							journalArticle.getArticleId(),
							journalArticle.getVersion(),
							journalArticle.getStatus());
					} catch (Exception ex) {
					}

					if (isLast) {
						Map<String, String> mapElement = new HashMap<>();

						try {
						   // System.out.println(
						//	journalArticle.getDDMStructure());

							if (s.equalsIgnoreCase("200950"))
								mapElement.put(
									"marca",
									journalArticle.getFolder().getName());
							else
								mapElement.put(
									"marca",
									journalArticle.getFolder().getParentFolder().getName());

						} catch (Exception ex) {
						}

						mapElement.put("id", journalArticle.getArticleId());
						mapElement.put(
							"lastUpdated",
							sdf.format(journalArticle.getModifiedDate()));
						mapElement.put(
							"title",
							journalArticle.getTitle(
								journalArticle.getDefaultLanguageId()));
						mapElement.put(
							"version",
							String.valueOf(journalArticle.getVersion()));
						lstElement.add(mapElement);
					}
				});
			}

			return new AbstractMap.SimpleEntry<>(s, lstElement);
		}).collect(
			Collectors.toMap(
				AbstractMap.SimpleEntry::getKey,
				AbstractMap.SimpleEntry::getValue));

		Map<String, String> mapHeader = new HashMap<>();
		mapHeader.put("id", "Identificador");
		mapHeader.put("lastUpdated", "Fecha Modificación");
		mapHeader.put("marca", "Marca");
		mapHeader.put("title", "Titulo");
		mapHeader.put("version", "Versión");

		Template template = (Template)renderRequest.getAttribute(
			WebKeys.TEMPLATE);

		template.put("contextPath", renderRequest.getContextPath());
		template.put("data", mpResult);
		template.put("header", mapHeader);
		template.put(
			"keys",
			Arrays.asList("id", "title", "version", "marca", "lastUpdated"));

		PortletURL navigationURL = renderResponse.createRenderURL();

		navigationURL.setParameter("mvcRenderCommandName", "NewStructure");

		template.put("navigationNewURL", navigationURL.toString());

		ResourceURL resourceURL = renderResponse.createResourceURL();
		resourceURL.setResourceID("getJournals");
		System.out.println("-.-.-..-.-.-.--..-.-"+resourceURL.toString());

		return "View";
	}

	@Reference(unbind="-")
	private JournalArticleLocalService journalArticleService;
	
	private final SimpleDateFormat sdf = new SimpleDateFormat(
		"dd-MM-yyyy HH:mm");

}