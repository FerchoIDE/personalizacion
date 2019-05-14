package generatorviewclient.util;

import com.liferay.journal.model.JournalFolder;
import com.liferay.portal.kernel.exception.PortalException;

import java.util.HashMap;
import java.util.Map;

public abstract class ConstantUtil {
    public static Long VOCABULARY_ID=35660L;
    public static Long FOLDER_DESTINATION_ID=35815L;
    public static String fullPath(JournalFolder folder) {
        String folderName = folder.getName();
        JournalFolder parent = null;
        try {
            parent = folder.getParentFolder();
        } catch (PortalException e) {
            e.printStackTrace();
        }

        if (parent == null) {
            return "/" + folderName;
        } else {
            return fullPath(parent) + "/" + folderName;
        }
    }

    public static boolean isFacility(String nameField){
        return nameField!=null && nameField.equalsIgnoreCase("facilityLinkHotel");
    }

    public static boolean isDestination(String nameField){
        return nameField!=null && nameField.equalsIgnoreCase("destinationLinkHotel");
    }
    public static  Long[]  getStructureIdFacility() {

        Long[] _lDat2 = {35956L, 35832L, 35912L, 35962L, 35820L, 35959L, 35823L};
        return _lDat2;
    }
    public static Map<String,Long> getStructureId(){
        //roomLinkHotel
        //facilityLinkHotel
        //destinationLinkHotel
        Map<String,Long> _mp = new HashMap<>();
        _mp.put("roomLinkHotel",35826L);
        _mp.put("destinationLinkHotel",35812L);
        return _mp;
       /* _mp.put("",35835L);
        _mp.put("",35826L);
        _mp.put("",35796L);
        _mp.put("",35956L);
        _mp.put("",35832L);
        _mp.put("",35823L);
        _mp.put("",35912L);
        _mp.put("",35962L);
        _mp.put("",35812L);
        _mp.put("",35968L);
        _mp.put("",35820L);
        _mp.put("",35965L);
        _mp.put("",35959L);
        _mp.put("",35823L);*/

    }
    /*
    35835">Hot
            35826">Hab
            35796">Pro
            35956">Bar
            35832">Res
            35823">Marcas
            35912">Spa
            35962">Gim
            35812">Destinos
            35968">Geolocation
            35820">Instalaciones
            35965">Gen
            35959">Club
            35823">Sala
            */
}
