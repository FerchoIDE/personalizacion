package generatorviewclient.portlet.resource;

import com.liferay.journal.model.JournalArticle;
import com.liferay.journal.util.impl.JournalUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.search.*;
import com.liferay.portal.kernel.search.generic.BooleanQueryImpl;
import com.liferay.portal.kernel.search.generic.QueryTermImpl;
import com.liferay.portal.kernel.search.generic.TermQueryImpl;
import com.liferay.portal.kernel.util.PortalUtil;
import generatorviewclient.constants.GeneratorViewClientPortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + GeneratorViewClientPortletKeys.GeneratorViewClient,
                "mvc.command.name=searchContent"
        },
        service = MVCResourceCommand.class
)
public class SearchContent implements MVCResourceCommand {
    public void addExactRequiredTerm(BooleanQuery query, String field, String value)  {
        TermQueryImpl termQuery = new TermQueryImpl(new QueryTermImpl(field, value));
        try {
            query.add(termQuery, BooleanClauseOccur.MUST);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
    @Override
    public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse) throws PortletException {
        SearchContext searchContext = SearchContextFactory. getInstance(PortalUtil.getHttpServletRequest( resourceRequest ));
        searchContext.setEntryClassNames( new String[] { JournalArticle.class.getName() } );
       // searchContext.setSorts(new Sort(Field.PRIORITY,false));
       searchContext.setStart(0);
        searchContext.setEnd(20);
       // searchContext.setAttribute("head", Boolean.TRUE);
       // searchContext.setAttribute("latest", Boolean.TRUE);

        BooleanQuery fullQuery = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query = BooleanQueryFactoryUtil.create(searchContext);
        BooleanQuery query2 = BooleanQueryFactoryUtil.create(searchContext);
        //addExactRequiredTerm(query, Field.TITLE, "*hotel*");

       // addExactRequiredTerm(query, Field.STATUS, String.valueOf(0)); // No drafts
        //addExactRequiredTerm(query, "head", Boolean.TRUE.toString()); // Only the most recent version

        try {
          query.addExactTerm("latest", Boolean.TRUE);
           // query.addExactTerm(Field.ENTRY_CLASS_NAME, JournalArticle.class.getName());
           query2.addTerms( Field.KEYWORDS, "queretaro",true);
           // fullQuery.addTerms( Field.KEYWORDS, "queretaro",true);
          //query.addTerms( Field.KEYWORDS, "hotel",true);
          //  fullQuery.addTerm( Field.TITLE, "*hotel*");
            //searchQuery.addRequiredTerm("head",true);
           fullQuery.add(query2, BooleanClauseOccur.MUST);
            fullQuery.add(query, BooleanClauseOccur.MUST);

            Hits hits =  SearchEngineUtil.search(searchContext, fullQuery);
           // JournalUtil.getArticles(hits);
            System.out.println("-------------");
            System.out.println(hits.getLength());
            System.out.println(hits.getCollatedSpellCheckResult());
            for(String suggestion:hits.getQuerySuggestions()){
                System.out.println(suggestion);
            }
            System.out.println(hits.getQuerySuggestions().length);
            int i=0;
            for(Document doc : hits.getDocs()){
            //if(hits.getDocs().length>0){
               // Document doc = hits.getDocs()[0];
                System.out.println((i++)+"--version==="+doc.getField("version").getValue());
                System.out.println("localized_title==="+doc.getField("localized_title").getValue());
                if(doc.hasField("assetTagNames"))
                    System.out.println("assetTagNames==="+doc.getField("assetTagNames").getValue());
                System.out.println("entryClassName==="+doc.getField("entryClassName").getValue());
                if(doc.hasField("latest"))
                    System.out.println("latest==="+doc.getField("latest").getValue());
                if(doc.hasField("head"))
                    System.out.println("head==="+doc.getField("head").getValue());
                if(doc.hasField(Field.PRIORITY))
                    System.out.println("Field.PRIORITY==="+doc.getField(Field.PRIORITY).getValue());
                if(doc.hasField(Field.RATINGS))
                    System.out.println("Field.RATINGS==="+doc.getField(Field.RATINGS).getValue());

               // doc.getField("version")
                        //localized_title
                //articleId
                //entryClassPK
                //assetTagNames
                //latest
                //ddmStructureKey
                //priority
                doc.getFields().forEach((s, field) -> {
                    System.out.println(s+"---"+field.getValue());
                });
            }
            /*for(Document doc : hits.getDocs()){
                System.out.println("*************");
                System.out.println(doc.getFields());
            }*/
        } catch (Exception e) { e.printStackTrace(); }

        return true;
    }
}
