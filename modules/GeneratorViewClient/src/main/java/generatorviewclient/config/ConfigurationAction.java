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
	System.out.println("Configuraciónn actualizada  " + new Date().toString());
	_configuration = ConfigurableUtil.createConfigurable(ConfigPersonalizacion.class, properties);	
	if (_configuration != null) {
		System.out.println(_configuration.name());
		Contants.STRUCTURE_IDS=_configuration.StructureId();
		Contants.DLFILEENTRY_BASE=_configuration.DLFileEntryFolderBase();
		Contants.JOURNAL_HOTEL=_configuration.JournalFolderHotelBase();
		for (String iterable_element : Contants.STRUCTURE_IDS) {
			System.out.println("Registro actual en la configuración, info="+iterable_element);

		}
		for (String iterable_element : Contants.DLFILEENTRY_BASE) {
			System.out.println("Registro actual en la configuración, info="+iterable_element);

		}
		for (String iterable_element : Contants.JOURNAL_HOTEL) {
			System.out.println("Registro actual en la configuración, info="+iterable_element);

		}
		
	} else {
		System.out.println("No hay datos en la configuración inicial");
	}
	}

    private volatile ConfigPersonalizacion _configuration;
 
}
