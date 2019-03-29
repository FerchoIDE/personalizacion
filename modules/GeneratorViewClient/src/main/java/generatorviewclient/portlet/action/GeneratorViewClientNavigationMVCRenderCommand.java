package generatorviewclient.portlet.action;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.util.ReleaseInfo;
import com.liferay.portal.kernel.util.WebKeys;

import generatorviewclient.constants.GeneratorViewClientPortletKeys;

import javax.portlet.PortletURL;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.osgi.service.component.annotations.Component;

/**
 * @author kelceyguillenbejarano
 */
@Component(
	immediate = true,
	property = {
			"javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
			"mvc.command.name=Navigation"
	},
	service = MVCRenderCommand.class
)
public class GeneratorViewClientNavigationMVCRenderCommand
	implements MVCRenderCommand {

	@Override
	public String render(
		RenderRequest renderRequest, RenderResponse renderResponse) {

		System.out.println(
			"----------GeneratorViewClientNavigationMVCRenderCommand--------------");

		Template template = (Template)renderRequest.getAttribute(
			WebKeys.TEMPLATE);

		PortletURL navigationURL = renderResponse.createRenderURL();

		navigationURL.setParameter("mvcRenderCommandName", "View");

		template.put("navigationURL", navigationURL.toString());

		template.put("releaseInfo", ReleaseInfo.getReleaseInfo());

		return "Navigation";
	}

}