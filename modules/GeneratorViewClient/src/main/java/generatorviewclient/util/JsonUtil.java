package generatorviewclient.util;

import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Option;
import com.jayway.jsonpath.PathNotFoundException;
import com.jayway.jsonpath.spi.json.JsonOrgJsonProvider;
import com.jayway.jsonpath.spi.json.JsonProvider;
import com.jayway.jsonpath.spi.mapper.JsonOrgMappingProvider;
import com.jayway.jsonpath.spi.mapper.MappingProvider;

import java.io.*;

import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;

import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.dynamic.data.mapping.storage.DDMFormValues;
import com.liferay.dynamic.data.mapping.storage.Field;
import com.liferay.dynamic.data.mapping.storage.Fields;
import com.liferay.journal.model.JournalArticle;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.repository.model.FileEntry;
import com.liferay.portal.kernel.repository.model.Folder;
import com.liferay.portal.kernel.workflow.WorkflowConstants;
import generatorviewclient.api.impl.FileEntryApi;
import generatorviewclient.api.impl.JournalApi;
import org.json.JSONArray;
import org.json.JSONObject;

public class JsonUtil {

	public static void main(String[] args) {
		/*Configuration.setDefaults(new Configuration.Defaults() {

			private final JsonProvider jsonProvider = new JsonOrgJsonProvider();
			private final MappingProvider mappingProvider =
				new JsonOrgMappingProvider();

			@Override
			public JsonProvider jsonProvider() {
				return jsonProvider;
			}

			@Override
			public MappingProvider mappingProvider() {
				return mappingProvider;
			}

			@Override
			public Set<Option> options() {
				return EnumSet.noneOf(Option.class);
			}

		});
		JsonUtil jsonUtil =
			new JsonUtil().loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json");

		String defaultLanguage = jsonUtil .get("$.defaultLanguageId");
		List<String> availableLanguageId = jsonUtil.getList(
			"$.availableLanguageIds");

	Map<String, String> titleEstructure = jsonUtil.getMap("$.fields.[0].label");
		String nameEstructure = jsonUtil.get("$.fields.[0].name");

		List<Object> fields = jsonUtil.getList("$.fields.[0].nestedFields");
		List<Object> fieldsResult = fields.stream()
				.map(object -> {
					if (((Map)object).containsKey("type") &&
					 "ddm-separator".equalsIgnoreCase((String)((Map)object).get("type")))

						return processElementNested((Map)object);
					else return object;
				}).collect(Collectors.toList());

		System.out.println("defaultLanguage:"+defaultLanguage);
		System.out.println("availableLanguageId:"+availableLanguageId);
		System.out.println("titleEstructure:"+titleEstructure);
		System.out.println("nameEstructure:"+nameEstructure);
		fieldsResult.forEach(System.out::println);
		//System.out.println("fieldsResult:"+fieldsResult);*/
	}

	public static void main1(String[] args) throws IOException {
		RandomAccessFile aFile = new RandomAccessFile("test.txt", "r");

		FileChannel inChannel = aFile.getChannel();

		MappedByteBuffer buffer = inChannel.map(
			FileChannel.MapMode.READ_ONLY, 0, inChannel.size());

		buffer.load();

		for (int i = 0; i < buffer.limit(); i++) {
			System.out.print((char)buffer.get());
		}

		buffer.clear(); // do something with the data and clear/compact it.
		inChannel.close();
		aFile.close();
	}

	public <T> T get(String jsonPath) {
		return JsonPath.read(document, jsonPath);
	}

	public <T> List getList(String jsonPath) {
		JSONArray resultRaw = JsonPath.read(document, jsonPath);

		return (List<T>)resultRaw.toList();
		//return Arrays.stream(result).collect(Collectors.toList());
	}

	public <T> Map<String, T> getMap(String jsonPath) {
		JSONObject result = JsonPath.read(document, jsonPath);

		return (Map<String, T>)result.toMap();
	}

	public Map<String, String> getMapLocale(Map<Locale, String> map) {
		//JSONObject result =  JsonPath.read(document, jsonPath);
		Map<String, String> mpResult = new HashMap();
		map.forEach((locale, s) -> mpResult.put(locale.toString(), s));

		return mpResult;
	}

	public JsonUtil setValues(Fields values){
		this.values=values;
		return this;
	}
	//public <T> List<T> getList(String jsonPat) {
	public JsonUtil loadFile(byte[] data) {
		Configuration.setDefaults(new Configuration.Defaults() {

			private final JsonProvider jsonProvider = new JsonOrgJsonProvider();
			private final MappingProvider mappingProvider =
				new JsonOrgMappingProvider();

			@Override
			public JsonProvider jsonProvider() {
				return jsonProvider;
			}

			@Override
			public MappingProvider mappingProvider() {
				return mappingProvider;
			}

			@Override
			public Set<Option> options() {
				return EnumSet.noneOf(Option.class);
			}

		});

			document =
				Configuration.defaultConfiguration().jsonProvider().parse(new ByteArrayInputStream(data), "UTF-8");

		return this;
	}

	public JsonUtil loadFile(String filePath) {
		Configuration.setDefaults(new Configuration.Defaults() {

			private final JsonProvider jsonProvider = new JsonOrgJsonProvider();
			private final MappingProvider mappingProvider =
				new JsonOrgMappingProvider();

			@Override
			public JsonProvider jsonProvider() {
				return jsonProvider;
			}

			@Override
			public MappingProvider mappingProvider() {
				return mappingProvider;
			}

			@Override
			public Set<Option> options() {
				return EnumSet.noneOf(Option.class);
			}

		});

		try {
			document =
				Configuration.defaultConfiguration().jsonProvider().parse(new FileInputStream(filePath), "UTF-8");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		return this;
	}

	public Map<String, Object> transformStructure(
		Map<Locale, String> map, String name) {

		Map<String, Object> mapResult = new HashMap<>();

		String defaultLanguage = get("$.defaultLanguageId");
		List<String> availableLanguageId = getList("$.availableLanguageIds");

		Map<String, String> titleEstructure =
				getMap("$.fields.[0].label");
			//getMapLocale(map); //getMap("$.fields.[0].label");
		//String nameEstructure = name; //get("$.fields.[0].name");
		String nameEstructure = get("$.fields.[0].name");
		List<Object> fields;
		int _index=1;
		try {
			fields = getList("$.fields.[0].nestedFields");
		}catch(PathNotFoundException pne){
			fields = new LinkedList<>();
			_index=0;

		}

		List<Object> fieldsAll = getList("$.fields");
		//if(fieldsAll.size()>1){
			for(int i=_index;i<fieldsAll.size();i++){
				fields.add(fieldsAll.get(i));
			}
		//}


		List<Object> fieldsResult = fields.stream()
				.map(object -> {
					if (((Map)object).containsKey("type") &&
					 "ddm-separator".equalsIgnoreCase((String)((Map)object).get("type")))

						return processElementNested((Map)object);
					else
						return setValue((Map)object);
						//return (Map)object;
				})
				.sorted((o1, o2) -> {
					if ("ddm-separator".equalsIgnoreCase((String)o1.get("type")))

						return 1;

					if ("ddm-separator".equalsIgnoreCase((String)o2.get("type")))

						return -1;

					return 0;// ((String)o1.get("type")).compareTo((String)o2.get("type"));
				})
				.collect(Collectors.toList());

		mapResult.put("defaultLanguage", defaultLanguage);
		mapResult.put("selectedLanguage", defaultLanguage);

		mapResult.put("availableLanguageId", availableLanguageId);
		mapResult.put("availableLanguageId-style",
				availableLanguageId.stream().map(s->new AbstractMap.SimpleEntry<>(s, s.toLowerCase().replace('_','-')))
					.collect(
						Collectors.toMap(
							AbstractMap.SimpleEntry::getKey,
							AbstractMap.SimpleEntry::getValue)));
		mapResult.put("nameEstructure", nameEstructure);
		mapResult.put("nestedFields", fieldsResult);
		mapResult.put("titleEstructure", titleEstructure);

		return mapResult;
	}

	private  Map<String, Object> processElementNested(Map objectParent) {
		Map<String, Object> mapResult = new HashMap<>();
		mapResult.put("label", objectParent.get("label"));
		mapResult.put("type", "ddm-separator");
		mapResult.put("name", objectParent.get("name"));
		mapResult.put("localizable", objectParent.get("localizable"));
		mapResult.put("multiple", objectParent.get("multiple"));
		mapResult.put("repeatable", objectParent.get("repeatable"));

		List<Object> fieldsResult = ((List<Object>)objectParent.get("nestedFields")).stream()
				.map(object -> {
					if (((Map)object).containsKey("type") &&
					 "ddm-separator".equalsIgnoreCase((String)((Map)object).get("type")))

						return processElementNested((Map)object);
					else if (((Map)object).containsKey("type") &&
							"ddm-documentlibrary".equalsIgnoreCase((String)((Map)object).get("type"))){

						((Map) object).put("nestedFields",processElementNested((Map)object).get("nestedFields"));
					}
					return setValue((Map)object);
					// return (Map)object;
				}).collect(Collectors.toList());
		mapResult.put("nestedFields", fieldsResult);

		return mapResult;
	}

	private Map setValue(Map mapResult){
		if(values!=null){
			Field field = values.get((String)mapResult.get("name"));
			if(field!=null){
				Map<String,List> valMap=new HashMap<>();
				if(mapResult.get("type").equals("ddm-journal-article")){
					System.out.println(field.getValuesMap().get("es_ES"));
					List<String> lst = new LinkedList<>();
					((List)field.getValuesMap().get(new Locale("es", "ES"))).forEach(o -> {
						try {
							JournalArticle journalArticle =JournalApi.getJournalArticleFromJson((String)o);
							if(journalArticle==null)
								System.out.println("no existe el article==="+o);
							else{
								JSONObject mpObject = new JSONObject();
								mpObject.put("description", journalArticle.getDescriptionMap());
								mpObject.put("id", journalArticle.getResourcePrimKey());
								mpObject.put("title", journalArticle.getTitleCurrentValue());
								long _month = Period.between(journalArticle.getStatusDate().toInstant().atZone(ZoneId.systemDefault())
										.toLocalDate(), LocalDate.now()).toTotalMonths();
								mpObject.put("date", String.format("%d meses", _month));
								mpObject.put("status", WorkflowConstants.getStatusLabel(journalArticle.getStatus()));
								mpObject.put("user", journalArticle.getStatusByUserName());
								try {
									mpObject.put("structureName", journalArticle.getDDMStructure().getNameCurrentValue());
									mpObject.put("structureId", journalArticle.getDDMStructure().getStructureId());
								} catch (Exception e) {
								}

								try {
									mpObject.put("path", ConstantUtil.fullPath(journalArticle.getFolder()));
								} catch (Exception ex) {

								}
								lst.add(mpObject.toString());
							}

						} catch (Exception e) {
							e.printStackTrace();
						}
					});
					field.getValuesMap().forEach((locale, serializables) -> {
						valMap.put(locale.toString(),lst);
					});
				}else if(mapResult.get("type").equals("ddm-documentlibrary")){
					System.out.println(field.getValuesMap().get("es_ES"));
					List<String> lst = new LinkedList<>();
					field.getValuesMap().forEach((locale, serializables) -> {

						if(serializables!=null){
							int index =0;
							Iterator<Serializable> it =serializables.iterator();
							while(it.hasNext()){
								Serializable serializable=it.next();
								String value = serializable.toString();
								if(lst.size()>index){
									String valueOld = lst.get(index);
									if(valueOld.isEmpty()){
										if(!value.isEmpty()){
											lst.set(index,getDocumentMedia(value));
										}
									}
								}else {
									if(!value.isEmpty()){
										lst.add(getDocumentMedia(value));
									}else{
										lst.add(value);
									}
								}
								index++;
							}
						}
					});

					field.getValuesMap().forEach((locale, serializables) -> {
						valMap.put(locale.toString(),lst);
					});
				}
				else{
					field.getValuesMap().forEach((locale, serializables) -> {
						valMap.put(locale.toString(),serializables);
					});
				}

				mapResult.put("values",valMap);
			}

		}
		return mapResult;
	}

	private String getDocumentMedia(String value){
		try {
			FileEntry file = FileEntryApi.getFileFromJson(value);
			JSONObject filesObject = new JSONObject();
			filesObject.put("idFile", file.getFileEntryId());
			filesObject.put("filename", file.getFileName());
			String url = "/documents/" + file.getGroupId() + "/" + file.getFolderId() + "/" + file.getFileName() + "/" + file.getUuid() + "?t=" + System.currentTimeMillis();
			filesObject.put("fullPath", url.replace(" ", "%20"));
			filesObject.put("imageThumbnail", url.replace(" ", "%20") + "&imageThumbnail=1");
			Folder folder = DLAppLocalServiceUtil.getFolder(file.getFolderId());
			String name="";
			Iterator<Folder> it = folder.getAncestors().iterator();
			while(it.hasNext()){
				name=it.next().getName()+"/"+name;
			}
			name=name+"/"+folder.getName();
			filesObject.put("path", name);
			filesObject.put("all",filesObject.toString());
			return filesObject.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}

	private Object document;
	private Fields values;

	static public void generateError(OutputStream outputStream, String errorMessage) throws IOException {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("status", "BAD");
		jsonObject.put("errorMessage", errorMessage);
		outputStream.write(jsonObject.toString().getBytes());
	}

}