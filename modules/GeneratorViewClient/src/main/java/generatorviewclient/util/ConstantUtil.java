package generatorviewclient.util;

import com.liferay.journal.model.JournalFolder;
import com.liferay.portal.kernel.exception.PortalException;

import java.util.HashMap;
import java.util.Map;

public abstract class ConstantUtil {
    public static Long VOCABULARY_BRAND_ID=35660L;
    public static Long FOLDER_DESTINATION_ID=35815L;

    public static Long HOTEL_STRUCTURE_ID=35835L;
    public static Long ROOM_STRUCTURE_ID=35826L;
    public static Long RATE_STRUCTURE_ID=35796L;
    public static Long BAR_STRUCTURE_ID=35956L;
    public static Long RESTAURANT_STRUCTURE_ID=35832L;
    public static Long BRAND_STRUCTURE_ID=35912L;
    public static Long SPA_STRUCTURE_ID=35829L;
    public static Long GYM_STRUCTURE_ID=35962L;
    public static Long DESTINATION_STRUCTURE_ID=35812L;
    public static Long FACILITY_STRUCTURE_ID=35820L;
    public static Long GENERIC_STRUCTURE_ID=35965L;
    public static Long KIDSCLUB_STRUCTURE_ID=35959L;
    public static Long MEETING_STRUCTURE_ID=35823L;

    public static Long HOTEL_STRUCTURE_KEY=200950L;
    public static Long ROOM_STRUCTURE_KEY=201291L;
    public static Long RATE_STRUCTURE_KEY=39858L;
    public static Long BAR_STRUCTURE_KEY=48306L;
    public static Long RESTAURANT_STRUCTURE_KEY=200191L;
    public static Long BRAND_STRUCTURE_KEY=42072L;
    public static Long SPA_STRUCTURE_KEY=200204L;
    public static Long GYM_STRUCTURE_KEY=48320L;
    public static Long DESTINATION_STRUCTURE_KEY=115809L;
    public static Long FACILITY_STRUCTURE_KEY=116421L;
    public static Long GENERIC_STRUCTURE_KEY=48345L;
    public static Long KIDSCLUB_STRUCTURE_KEY=48316L;
    public static Long MEETING_STRUCTURE_KEY=200208L;


    public static Long DOCUMENT_MEDIA_BASE_FOLDER_ID=34905L;
    public static Long JOURNAL_BASE_FOLDER_ID=35838L;





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
        _mp.put("roomLinkHotel",ROOM_STRUCTURE_ID);
        _mp.put("destinationLinkHotel",DESTINATION_STRUCTURE_ID);
        return _mp;

    }

}
