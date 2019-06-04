package generatorviewclient.config;

import java.util.Date;
import java.util.Map;

import generatorviewclient.util.ConstantUtil;
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
      
        /*Invocar estos metodos para la obtencion de folders
    	List<DLFolder> file = DLFolderLocalServiceUtil.getRepositoryFolders(54349, 0, DLFolderLocalServiceUtil.getDLFoldersCount());
    	for (DLFolder dlFolder : file) {
    		if(dlFolder.getName().equals("Marcas") || dlFolder.getName().equals("Media"))
    		System.out.println(dlFolder.getName()+"id "+dlFolder.getFolderId()+"pa "+dlFolder.getTreePath());
    	}
    	List<JournalFolder> file = JournalFolderLocalServiceUtil.getFolders(54349L);
    			//getRepositoryFolders(54349, 0, DLFolderLocalServiceUtil.getDLFoldersCount());
    	for (JournalFolder dlFolder : file) {
    		if(dlFolder.getName().equals("Hotel")|| dlFolder.getName().equals("Posadas"))
    		System.out.println(dlFolder.getName()+"id "+dlFolder.getFolderId()+"pa "+dlFolder.getParentFolderId());
    	}*/
        if (_configuration != null) {
            System.out.println(_configuration.name());
            //Contants.DLFILEENTRY_BASE=_configuration.DLFileEntryFolderBase();
            Contants.DLFILEENTRY_BASE=ConstantUtil.DOCUMENT_MEDIA_BASE_FOLDER_ID;// _configuration.DLFileEntryFolderBaseId();//_configuration.DLFileEntryFolderBase();
            Contants.JOURNAL_HOTEL=ConstantUtil.JOURNAL_BASE_FOLDER_ID;//_configuration.JournalFolderHotelBaseId();//_configuration.JournalFolderHotelBase();
            String[] STRUCTURE_IDS={String.valueOf(ConstantUtil.HOTEL_STRUCTURE_ID),String.valueOf(ConstantUtil.ROOM_STRUCTURE_ID),
                    String.valueOf(ConstantUtil.RATE_STRUCTURE_ID),String.valueOf(ConstantUtil.BAR_STRUCTURE_ID),
                    String.valueOf(ConstantUtil.RESTAURANT_STRUCTURE_ID),String.valueOf(ConstantUtil.BRAND_STRUCTURE_ID),
                    String.valueOf(ConstantUtil.SPA_STRUCTURE_ID),String.valueOf(ConstantUtil.GYM_STRUCTURE_ID),
                    String.valueOf(ConstantUtil.DESTINATION_STRUCTURE_ID),String.valueOf(ConstantUtil.FACILITY_STRUCTURE_ID),
                    String.valueOf(ConstantUtil.GENERIC_STRUCTURE_ID),String.valueOf(ConstantUtil.KIDSCLUB_STRUCTURE_ID),
                    String.valueOf(ConstantUtil.MEETING_STRUCTURE_ID)};

            Contants.STRUCTURE_IDS=STRUCTURE_IDS;//_configuration.JournalFolderHotelBase();


        } else {
            System.out.println("No hay datos en la configuración inicial");
        }
    }

    private volatile ConfigPersonalizacion _configuration;

}
