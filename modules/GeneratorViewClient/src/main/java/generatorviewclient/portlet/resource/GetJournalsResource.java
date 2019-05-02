package generatorviewclient.portlet.resource;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.liferayservice.JournalArticleServices;
import generatorviewclient.util.FileUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=getJournals"
        },
        service = MVCResourceCommand.class
)
public class GetJournalsResource implements MVCResourceCommand {
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        System.out.println("--------------+++++++++------");
        try {
            ThemeDisplay themeDisplay = (ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);
            long portletGroupId = themeDisplay.getLayout().getGroupId();
            String body = FileUtil.getBuffer(resourceRequest.getReader());
            JSONObject jsonObject =  new JSONObject(body);
            System.out.println(jsonObject);
            resourceResponse.setCharacterEncoding("UTF-8");
            resourceResponse.setContentType("application/json");

            String brand = jsonObject.getString("brand");
            String codeHotel = jsonObject.getString("codeHotel");
            com.liferay.portal.kernel.json.JSONArray array;
            if(jsonObject.has("folderId")){

                array = new JournalArticleServices().getFilesByCurrentFolderAndName(portletGroupId,jsonObject.getLong("folderId"),"");
            }else if(jsonObject.has("nameFolder")){
                array = new JournalArticleServices().getWCByName(portletGroupId,brand,jsonObject.getString("nameFolder"),codeHotel);
                //getWCByName
            }else{
                array = new JournalArticleServices().getListJournalFolders(portletGroupId,brand,codeHotel);
                //getListJournalFolders
            }



           // String result = new JSONArray(getData()).toString();
            System.out.println(array.toJSONString());
            resourceResponse.getPortletOutputStream().write(array.toJSONString().getBytes());
        } catch (Exception e) {
            e.printStackTrace();
            try {
                resourceResponse.getWriter().write(e.getMessage());
            } catch (IOException e1) {
                e1.printStackTrace();
            }
            return true;
        }
        return false;
    }




    public static List getData(){
        List result = new LinkedList();

        Map mp3 = new HashMap();
        mp3.put("id","11111");
        mp3.put("name","Room Jr");
        mp3.put("description","Room jr para persona nuevas");
        mp3.put("path","/room");
        result.add(mp3);

        Map mp2 = new HashMap();
        mp2.put("id","11222");
        mp2.put("name","Room lux");
        mp2.put("description","Room lux para persona nuevas");
        mp2.put("path","/room");
        result.add(mp2);



        Map mp1 = new HashMap();
        mp1.put("id","11333");
        mp1.put("name","Room Suite");
        mp1.put("description","Room suite para persona nuevas");
        mp1.put("path","/room/suite");
        result.add(mp1);


        Map mp = new HashMap();
        mp.put("id","11444");
        mp.put("name","Room presidencial");
        mp.put("description","Room presidencial para persona nuevas");
        mp.put("path","/");
        result.add(mp);

        return result;
    }
}
