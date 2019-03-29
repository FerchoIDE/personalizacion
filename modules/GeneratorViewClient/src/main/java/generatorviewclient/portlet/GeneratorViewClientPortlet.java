package generatorviewclient.portlet;

import com.liferay.portal.portlet.bridge.soy.SoyPortlet;

import generatorviewclient.constants.GeneratorViewClientPortletKeys;

import javax.portlet.*;

import org.osgi.service.component.annotations.Component;

/**
 * @author kelceyguillenbejarano
 */
@Component(
	immediate = true,
	property = {
		"javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user",
			"com.liferay.portlet.header-portlet-css=/View.css",
			"com.liferay.portlet.add-default-resource=true",
			"com.liferay.portlet.application-type=full-page-application",
			"com.liferay.portlet.application-type=widget",
			"com.liferay.portlet.display-category=category.sample",
			"com.liferay.portlet.layout-cacheable=true",
			"com.liferay.portlet.preferences-owned-by-group=true",
			"com.liferay.portlet.private-request-attributes=false",
			"com.liferay.portlet.private-session-attributes=false",
			"com.liferay.portlet.render-weight=50",
			"com.liferay.portlet.scopeable=true",
			"com.liferay.portlet.use-default-template=true",
			"javax.portlet.display-name=Hello Soy Portlet1",
			"javax.portlet.expiration-cache=0",
			"javax.portlet.init-param.copy-request-parameters=true",
			"javax.portlet.init-param.template-path=/",
			"javax.portlet.init-param.view-template=View",
			"javax.portlet.supports.mime-type=text/html"

	},
	service = Portlet.class
)
public class GeneratorViewClientPortlet extends SoyPortlet {

/* @Override
	public void render(
			RenderRequest renderRequest, RenderResponse renderResponse)
		throws IOException, PortletException {

		Template template = getTemplate(renderRequest);

		ThemeDisplay themeDisplay = (ThemeDisplay)renderRequest.getAttribute(
			WebKeys.THEME_DISPLAY);

		System.out.println(
			"----------GeneratorViewClientPortlet--------------"+template+"--"+themeDisplay);

		template.put("layouts", themeDisplay.getLayouts());

		PortletURL navigationURL = renderResponse.createRenderURL();

		navigationURL.setParameter("mvcRenderCommandName", "Navigation");

		template.put("navigationURL", navigationURL.toString());

		template.put("releaseInfo", ReleaseInfo.getReleaseInfo());

		super.render(renderRequest, renderResponse);
	}*/

}