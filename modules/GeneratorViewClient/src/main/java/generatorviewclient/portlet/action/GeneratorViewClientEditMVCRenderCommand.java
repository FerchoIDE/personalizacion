package generatorviewclient.portlet.action;

import com.liferay.asset.kernel.model.AssetCategory;
import com.liferay.asset.kernel.model.AssetTag;
import com.liferay.asset.kernel.service.AssetCategoryLocalServiceUtil;
import com.liferay.asset.kernel.service.AssetTagLocalServiceUtil;
import com.liferay.dynamic.data.mapping.model.DDMStructure;
import com.liferay.dynamic.data.mapping.model.DDMTemplate;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalService;
import com.liferay.dynamic.data.mapping.service.DDMStructureLocalServiceUtil;
import com.liferay.dynamic.data.mapping.storage.DDMFormValues;
import com.liferay.dynamic.data.mapping.storage.Fields;
import com.liferay.dynamic.data.mapping.util.DDMUtil;
import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.service.JournalArticleLocalService;
import com.liferay.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.journal.util.JournalConverter;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.template.Template;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import generatorviewclient.api.impl.VocabularyApi;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import generatorviewclient.util.ConstantUtil;
import generatorviewclient.util.JsonUtil;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=EditStructure"
        },
        service = MVCRenderCommand.class
)
public class GeneratorViewClientEditMVCRenderCommand  implements MVCRenderCommand {
    DDMStructureLocalService structureLocalService ;
    VocabularyApi vocabularyApi = new VocabularyApi();
    private JournalArticleLocalService journalArticleService ;
    @Reference
    private JournalConverter _journalConverter;


    @Override
    public String render(RenderRequest renderRequest, RenderResponse renderResponse) throws PortletException {
        System.out.println("-------GeneratorViewClientEditMVCRenderCommand-------");
        ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
        long portletGroupId = themeDisplay.getLayout().getGroupId();
        System.out.println("-------befGeneratorViewClientEditMVCRenderCommand-------");
        if (structureLocalService == null)
            structureLocalService =
                    DDMStructureLocalServiceUtil.getService();
        if (journalArticleService == null)
            journalArticleService =
                    JournalArticleLocalServiceUtil.getService();

        Template template = (Template) renderRequest.getAttribute(
                WebKeys.TEMPLATE);
        String articleId = renderRequest.getParameter("articleId");
        JournalArticle journalArticle;
        try {
            journalArticle = journalArticleService.getJournalArticle(Long.parseLong(articleId));
        } catch (PortalException e) {
            e.printStackTrace();
            throw  new PortletException(e);
        }

        Map titleMap = new HashMap();
        journalArticle.getTitleMap().forEach((locale, s) -> {
            titleMap.put(locale.toString(), s);
        });
        template.put("titleMap",titleMap);
        Map descriptionMap = new HashMap();
        journalArticle.getDescriptionMap().forEach((locale, s) -> {
            descriptionMap.put(locale.toString(), s);
        });
        template.put("descriptionMap",descriptionMap);

        List<AssetCategory> categories = AssetCategoryLocalServiceUtil.getCategories(JournalArticle.class.getName(), journalArticle.getResourcePrimKey());
        List<AssetTag> tags = AssetTagLocalServiceUtil.getTags(JournalArticle.class.getName(), journalArticle.getResourcePrimKey());

        template.put("categoriesCurrent",categories);
        template.put("tagsCurrent",tags);
        String structureId = journalArticle.getDDMStructureKey();

        try {
          //  System.out.println(journalArticle.getContent());


            DDMStructure ddmStructure = journalArticle.getDDMStructure();

            Fields fields = _getDDMStructureFields(ddmStructure, journalArticle.getContent());

            //DDMFormValues ddmFormValues = _journalConverter.getDDMFormValues(
                //    ddmStructure, fields);

            //String content = DDMUtil.getDDMFormValuesJSONString(ddmFormValues);
            //System.out.println(content);

            template.put("structureKey", ddmStructure.getStructureKey());

            String jsonString = DDMUtil.getDDMFormJSONString(
                    ddmStructure.getFullHierarchyDDMForm());

            Map map = new JsonUtil()
                    .loadFile(jsonString.getBytes("UTF-8"))
                    .setValues(fields)
                    .transformStructure(
                            ddmStructure.getNameMap(),
                            ddmStructure.getModelClassName());

            System.out.println(map);
            Boolean hasParent = ddmStructure.getParentStructureId() != 0;
            template.put("hasParent", hasParent);
            template.put("data", map);
            Map names = new HashMap();
            ddmStructure.getNameMap().forEach((locale, s) -> {
                names.put(locale.toString(), s);
            });
            template.put("name", names);
            template.put("rootFields", ddmStructure.getRootFieldNames());
            List<DDMTemplate> templates = ddmStructure.getTemplates();/*.stream().map(ddmTemplate -> {
                        HashMap<String, Object> _map = new HashMap<>();
                        _map.put("value", ddmTemplate.getTemplateId());
                        _map.put("label", ddmTemplate.getNameMap());
                        return _map;
                    }
            ).collect(Collectors.toList());*/
            List lstTemplates = new LinkedList<>();
            for (DDMTemplate _template : templates) {
                Map _object = new HashMap();
                _object.put("value", _template.getTemplateKey());
                Map<String, String> _name = new HashMap<>();
                _name.put("es_ES", _template.getName("es_ES"));
                _name.put("en_US", _template.getName("en_US"));

                _object.put("label", _name);
                lstTemplates.add(_object);
            }

            System.out.println("antes de asignar -------------");
            template.put("selectTempl", lstTemplates);
        } catch (Exception ex) {
            System.out.println("++++------------" + ex.getMessage());
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

            template.put("categoryBrands", vocabularyApi.getCategoriesByGroupAndVacabularyIdAllLevels(portletGroupId, ConstantUtil.VOCABULARY_BRAND_ID, 0L));
        } catch (PortalException e) {
            e.printStackTrace();
            new PortletException(e);
        }
            template.put("isOnLoad", false);
            if(renderRequest.getParameter("brandIdSelectedN")!=null)
                template.put("brandIdSelected",Long.parseLong(renderRequest.getParameter("brandIdSelectedN")));
            if(renderRequest.getParameter("hotelIdSelectedN")!=null)
                template.put("hotelIdSelected",Long.parseLong(renderRequest.getParameter("hotelIdSelectedN")));
            if(renderRequest.getParameter("brandSelectedN")!=null)
                template.put("brandSelected",renderRequest.getParameter("brandSelectedN"));
            if(renderRequest.getParameter("hotelSelectedN")!=null)
                template.put("hotelSelected",renderRequest.getParameter("hotelSelectedN"));
            template.put("nested", false);
        template.put("hotelsXBrands", new LinkedList<>());


        return "NewStructure";
    }


    private Fields _getDDMStructureFields(
            DDMStructure ddmStructure, String content) {

        if (ddmStructure == null) {
            return null;
        }

        try {
            Fields fields = _journalConverter.getDDMFields(
                    ddmStructure, content);

            return fields;
        }
        catch (Exception e) {
            return null;
        }
    }
}
