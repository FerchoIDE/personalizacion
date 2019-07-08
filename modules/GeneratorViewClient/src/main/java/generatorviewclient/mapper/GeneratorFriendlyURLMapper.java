package generatorviewclient.mapper;

import com.liferay.portal.kernel.portlet.DefaultFriendlyURLMapper;
import com.liferay.portal.kernel.portlet.FriendlyURLMapper;
import com.liferay.portal.kernel.portlet.LiferayPortletURL;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import org.osgi.service.component.annotations.Component;

import java.util.Map;

@Component(
        property = {
                "com.liferay.portlet.friendly-url-routes=META-INF/friendly-url-routes/routes.xml",
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
        },
        service = FriendlyURLMapper.class
)
public class GeneratorFriendlyURLMapper extends DefaultFriendlyURLMapper {
    @Override
    public String getMapping() {
        return _MAPPING;
    }

    @Override
    protected boolean isAllPublicRenderParameters(Map<String, String> routeParameters) {
        return true;//super.isAllPublicRenderParameters(routeParameters);
    }

    @Override
    public String buildPath(LiferayPortletURL liferayPortletURL) {
      //  System.out.println("++++++++++++"+liferayPortletURL.toString());
        String _url = super.buildPath(liferayPortletURL);
       // System.out.println("------------"+_url);
        return _url;
    }


    private static final String _MAPPING = "generator";
}
