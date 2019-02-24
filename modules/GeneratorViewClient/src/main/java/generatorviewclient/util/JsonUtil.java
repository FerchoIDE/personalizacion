package generatorviewclient.util;

import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Option;
import com.jayway.jsonpath.spi.json.JsonOrgJsonProvider;
import com.jayway.jsonpath.spi.json.JsonProvider;
import com.jayway.jsonpath.spi.mapper.JsonOrgMappingProvider;
import com.jayway.jsonpath.spi.mapper.MappingProvider;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.util.*;
import java.util.stream.Collectors;

public class JsonUtil {
    private Object document;

    public JsonUtil loadFile(String filePath) {
        Configuration.setDefaults(new Configuration.Defaults() {

            private final JsonProvider jsonProvider = new JsonOrgJsonProvider();
            private final MappingProvider mappingProvider = new JsonOrgMappingProvider();

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
            document = Configuration.defaultConfiguration().jsonProvider().parse(new FileInputStream(filePath), "UTF-8");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return this;
    }

    public JsonUtil loadFile(byte[] data) {
        return this;
    }

    public <T> T get(String jsonPath) {
        return JsonPath.read(document, jsonPath);
    }

    public <T> Map<String,T> getMap(String jsonPath) {
        JSONObject result =  JsonPath.read(document, jsonPath);
        return (Map<String,T>)result.toMap();
    }

    //public <T> List<T> getList(String jsonPat) {
    public <T> List getList(String jsonPath) {
        JSONArray resultRaw = JsonPath.read(document, jsonPath);
        return (List<T>)resultRaw.toList();
        //return Arrays.stream(result).collect(Collectors.toList());
    }

    public Map<String, Object> transformStructure(){
        Map<String,Object> mapResult = new HashMap<>();

        String defaultLanguage = get("$.defaultLanguageId");
        List<String> availableLanguageId = getList("$.availableLanguageIds");

        Map<String,String> titleEstructure = getMap("$.fields.[0].label");
        String nameEstructure = get("$.fields.[0].name");

        List<Object> fields = getList("$.fields.[0].nestedFields");
        List<Object> fieldsResult = fields.stream()
                .map(object -> {
                    if(((Map)object).containsKey("type") && "ddm-separator".equalsIgnoreCase((String)((Map)object).get("type")))
                        return processElementNested((Map)object);
                    else
                        return (Map)object;
                })
                .sorted((o1, o2) -> {
                    if("ddm-separator".equalsIgnoreCase((String)o1.get("type")))
                        return 1;
                    if("ddm-separator".equalsIgnoreCase((String)o2.get("type")))
                        return -1;
                    return ((String)o1.get("type")).compareTo((String)o2.get("type"));
                })
                .collect(Collectors.toList());

        mapResult.put("defaultLanguage",defaultLanguage);
        mapResult.put("selectedLanguage",defaultLanguage);

        mapResult.put("availableLanguageId",availableLanguageId);
        mapResult.put("availableLanguageId-style",
                availableLanguageId.stream().map(s->new AbstractMap.SimpleEntry<>(s,s.toLowerCase().replace('_','-')))
                        .collect(Collectors.toMap(AbstractMap.SimpleEntry::getKey, AbstractMap.SimpleEntry::getValue)));
        mapResult.put("titleEstructure",titleEstructure);
        mapResult.put("nameEstructure",nameEstructure);
        mapResult.put("nestedFields",fieldsResult);

        return mapResult;
    }

    public static void main(String[] args) {
        Configuration.setDefaults(new Configuration.Defaults() {

            private final JsonProvider jsonProvider = new JsonOrgJsonProvider();
            private final MappingProvider mappingProvider = new JsonOrgMappingProvider();

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
        JsonUtil jsonUtil = new JsonUtil().loadFile("/Users/kelceyguillenbejarano/proyectos/c/posadas/ddm-form.json");
        String defaultLanguage = jsonUtil
                .get("$.defaultLanguageId");
        List<String> availableLanguageId = jsonUtil.getList("$.availableLanguageIds");

       Map<String,String> titleEstructure = jsonUtil.getMap("$.fields.[0].label");
        String nameEstructure = jsonUtil.get("$.fields.[0].name");

        List<Object> fields = jsonUtil.getList("$.fields.[0].nestedFields");
        List<Object> fieldsResult = fields.stream()
                .map(object -> {
                    if(((Map)object).containsKey("type") && "ddm-separator".equalsIgnoreCase((String)((Map)object).get("type")))
                        return processElementNested((Map)object);
                    else
                        return object;
                }).collect(Collectors.toList());

        System.out.println("defaultLanguage:"+defaultLanguage);
        System.out.println("availableLanguageId:"+availableLanguageId);
        System.out.println("titleEstructure:"+titleEstructure);
        System.out.println("nameEstructure:"+nameEstructure);
        fieldsResult.forEach(System.out::println);
        //System.out.println("fieldsResult:"+fieldsResult);
    }


    private static Map<String,Object> processElementNested(Map objectParent){
        Map<String,Object> mapResult = new HashMap<>();
        mapResult.put("label",objectParent.get("label"));
        mapResult.put("type","ddm-separator");

        List<Object> fieldsResult = ((List<Object>)objectParent.get("nestedFields")).stream()
                .map(object -> {
                    if(((Map)object).containsKey("type") && "ddm-separator".equalsIgnoreCase((String)((Map)object).get("type")))
                        return processElementNested((Map)object);
                    else
                        return (Map)object;
                }).collect(Collectors.toList());
        mapResult.put("nestedFields",fieldsResult);
        return mapResult;
    }




    public static void main1(String[] args) throws IOException {
        RandomAccessFile aFile = new RandomAccessFile
                ("test.txt", "r");
        FileChannel inChannel = aFile.getChannel();
        MappedByteBuffer buffer = inChannel.map(FileChannel.MapMode.READ_ONLY, 0, inChannel.size());
        buffer.load();
        for (int i = 0; i < buffer.limit(); i++) {
            System.out.print((char) buffer.get());
        }
        buffer.clear(); // do something with the data and clear/compact it.
        inChannel.close();
        aFile.close();
    }
}
