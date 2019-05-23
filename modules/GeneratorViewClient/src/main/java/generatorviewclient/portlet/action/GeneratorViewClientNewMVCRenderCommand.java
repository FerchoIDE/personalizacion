package generatorviewclient.portlet.action;

import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.model.DDMTemplate;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalService;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.dynamic.data.mapping.util.DDMUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.LocaleUtil;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.VocabularyApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.JsonUtil;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.*;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=NewStructure"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientNewMVCRenderCommand
        implements MVCRenderCommand {

    DDMStructureLocalService structureLocalService =
            DDMStructureLocalServiceUtil.getService();
    VocabularyApi vocabularyApi = new VocabularyApi();

    @Override
    public String render(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws PortletException {
        ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        if (structureLocalService == null)
            structureLocalService =
                    DDMStructureLocalServiceUtil.getService();

        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);

        String structureId = renderRequest.getParameter("structureId");
        try {
            DDMStructure ddmStructure = structureLocalService.getDDMStructure(
                    Long.valueOf(structureId));

            template.put("structureKey", ddmStructure.getStructureKey());

            String jsonString = DDMUtil.getDDMFormJSONString(
                    ddmStructure.getFullHierarchyDDMForm());

            Map map = new JsonUtil()
                    .loadFile(jsonString.getBytes("UTF-8"))
                    .transformStructure(
                            ddmStructure.getNameMap(),
                            ddmStructure.getModelClassName());

            System.out.println(map);
            Boolean hasParent =  ddmStructure.getParentStructureId()!=0 ;
            template.put("hasParent", hasParent);
            template.put("data", map);
            Map names = new HashMap();
            ddmStructure.getNameMap().forEach((locale, s) -> {
                names.put(locale.toString(),s);
            });
            template.put("name",names);
            template.put("rootFields",ddmStructure.getRootFieldNames());
            List<DDMTemplate> templates = ddmStructure.getTemplates();/*.stream().map(ddmTemplate -> {
                        HashMap<String, Object> _map = new HashMap<>();
                        _map.put("value", ddmTemplate.getTemplateId());
                        _map.put("label", ddmTemplate.getNameMap());
                        return _map;
                    }
            ).collect(Collectors.toList());*/
            List lstTemplates = new LinkedList<>();
            for(DDMTemplate _template:templates){
                Map _object = new HashMap();
                _object.put("value", _template.getTemplateKey());
                Map<String,String> _name = new HashMap<>();
                _name.put("es_ES",_template.getName("es_ES"));
                _name.put("en_US",_template.getName("en_US"));

                _object.put("label", _name);
                lstTemplates.add(_object);
            }

System.out.println("antes de asignar -------------");
            template.put("selectTempl", lstTemplates);
        } catch (Exception ex) {
            System.out.println("++++------------"+ex.getMessage());
            ex.printStackTrace(System.out);
            ex.printStackTrace();
            new PortletException(ex);
        }

        template.put("contextPath", renderRequest.getContextPath());
        Map<String, Boolean> collapseInfo = new HashMap<>();
        collapseInfo.put("accordionPrincipalHeading", false);
        collapseInfo.put("accordionGeneralHeading", true);
        template.put("collapseInfo", collapseInfo);

        template.put("structureId", structureId);

        try {
            //getCategoriesByGroupAndVacabularyFirstLevel

            template.put("categoryBrands", vocabularyApi.getCategoriesByGroupAndVacabularyIdAllLevels(portletGroupId, 35660L, 0L));
        } catch (PortalException e) {
            e.printStackTrace();
            new PortletException(e);
        }
        template.put("isOnLoad", true);
        template.put("hotelsXBrands", new LinkedList<>());


        return "NewStructure";
    }

    public List<AbstractMap.SimpleEntry> getBrands(Long groupId) {

        List<AbstractMap.SimpleEntry> result = new LinkedList<>();
      /*  result.add(new AbstractMap.SimpleEntry("FI","Fiesta Inn"));
        result.add(new AbstractMap.SimpleEntry("FA","Fiesta Americana"));
        result.add(new AbstractMap.SimpleEntry("FAG","Grand Fiesta Americana"));
        result.add(new AbstractMap.SimpleEntry("EX","Explorean"));
        result.add(new AbstractMap.SimpleEntry("AQUA","Live Aqua"));*/
        return result;

    }

    public Map<String, List<AbstractMap.SimpleEntry>> getHotels() {
        Map<String, List<AbstractMap.SimpleEntry>> result = new HashMap<>();
        List<AbstractMap.SimpleEntry> lst1 = new LinkedList<>();
        lst1.add(new AbstractMap.SimpleEntry("AGP", "AGP"));
        result.put("FI", lst1);

        List<AbstractMap.SimpleEntry> lst2 = new LinkedList<>();
        lst2.add(new AbstractMap.SimpleEntry("GAL", "GAL"));
        lst2.add(new AbstractMap.SimpleEntry("HSA", "HSA"));
        lst2.add(new AbstractMap.SimpleEntry("FAA", "FAA"));
        lst2.add(new AbstractMap.SimpleEntry("FAV", "FAV"));
        lst2.add(new AbstractMap.SimpleEntry("FAC", "FAC"));
        lst2.add(new AbstractMap.SimpleEntry("FAM", "FAM"));
        lst2.add(new AbstractMap.SimpleEntry("FXS", "FXS"));
        lst2.add(new AbstractMap.SimpleEntry("FCC", "FCC"));
        result.put("FA", lst2);


        List<AbstractMap.SimpleEntry> lst3 = new LinkedList<>();
        lst3.add(new AbstractMap.SimpleEntry("GPV", "GPV"));
        lst3.add(new AbstractMap.SimpleEntry("FCB", "FCB"));
        lst3.add(new AbstractMap.SimpleEntry("FLC", "FLC"));
        lst3.add(new AbstractMap.SimpleEntry("FBC", "FBC"));
        lst3.add(new AbstractMap.SimpleEntry("FGG", "FGG"));
        result.put("FAG", lst3);

        return result;

    }
}