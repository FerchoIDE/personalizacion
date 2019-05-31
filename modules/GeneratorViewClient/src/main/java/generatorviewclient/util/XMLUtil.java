package generatorviewclient.util;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.template.PebbleTemplate;
import org.json.JSONObject;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

public abstract class XMLUtil {
    static PebbleTemplate compiledTemplate = new PebbleEngine.Builder().build().getTemplate("templates/test.peb");

    public static String  transformJson(JSONObject jsonObject){
        Writer writer = new StringWriter();


        try {
            compiledTemplate.evaluate(writer,  jsonObject.toMap());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return writer.toString();
    }
}
