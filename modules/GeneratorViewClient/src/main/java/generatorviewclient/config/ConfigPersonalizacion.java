package generatorviewclient.config;

import com.liferay.portal.configuration.metatype.annotations.ExtendedObjectClassDefinition;

import aQute.bnd.annotation.metatype.Meta;

@ExtendedObjectClassDefinition(category = "Posadas", scope = ExtendedObjectClassDefinition.Scope.SYSTEM)
@Meta.OCD( localization = "content/Language",id = "generatorviewclient.config.ConfigPersonalizacion",name = "Liferay api personalization")
public interface ConfigPersonalizacion {
	/*Restaurant,Meeting room,Gym,Bar,Spa,Fiesta Kids Club,Generic,Brand,Basic Web Content,Destination,Rate,Hotels,Room,Facility*/
	@Meta.AD(deflt = "32889|32886|34996|34990|32883|34993|34999|34987|31256|34978|34975|34984|34981|32880", required = false, description = "Get id Base Structures Liferay")
    public String[] StructureId();
	
	@Meta.AD(deflt = "POSADA|HOTEL", required = false, description = "Get id Base Folders")
    public String[] DLFileEntryFolderBase();
	
}