package generatorviewclient.config;

import java.util.Date;
import java.util.Map;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Modified;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.portlet.DefaultConfigurationAction;

import generatorviewclient.constants.Contants;

@Component(
        configurationPid = "generatorviewclient.config.ConfigPersonalizacion",
        immediate = true,
        configurationPolicy = ConfigurationPolicy.OPTIONAL,
        service = ConfigurationAction.class
)
public class ConfigurationAction extends DefaultConfigurationAction{

    @Activate
    @Modified
    public void activate(Map<Object, Object> properties) {
        System.out.println("Configuración actualizada 1.3  " + new Date().toString());
        _configuration = ConfigurableUtil.createConfigurable(ConfigPersonalizacion.class, properties);
        if (_configuration != null) {
            System.out.println(_configuration.name());
            //Contants.DLFILEENTRY_BASE=_configuration.DLFileEntryFolderBase();
            Contants.DLFILEENTRY_BASE= 123L;//_configuration.DLFileEntryFolderBase();
            Contants.JOURNAL_HOTEL=123L;//_configuration.JournalFolderHotelBase();
            String[] STRUCTURE_IDS={"35835","35826","35796","35956","35832","35823","35912","35962","35812","35968","35820","35965","35959","35823"};
            Contants.STRUCTURE_IDS=STRUCTURE_IDS;//_configuration.JournalFolderHotelBase();

           // Contants.JOURNAL_HOTEL=_configuration.JournalFolderHotelBase();
/*            for (String iterable_element : Contants.STRUCTURE_IDS) {
                System.out.println("Registro actual en la configuración, info="+iterable_element);

            }
            */

        } else {
            System.out.println("No hay datos en la configuración inicial");
        }
    }

    private volatile ConfigPersonalizacion _configuration;

}
