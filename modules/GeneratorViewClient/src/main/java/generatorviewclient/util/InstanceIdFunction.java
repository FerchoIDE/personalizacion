package generatorviewclient.util;

import com.mitchellbosecke.pebble.extension.Function;
import com.mitchellbosecke.pebble.template.EvaluationContext;
import com.mitchellbosecke.pebble.template.PebbleTemplate;

import java.nio.charset.Charset;
import java.util.*;

public class InstanceIdFunction implements Function {
    private static String candidateChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    @Override
    public Object execute(Map<String, Object> args, PebbleTemplate self, EvaluationContext context, int lineNumber) {
        /*byte[] array = new byte[4]; // length is bounded by 7
        new Random().nextBytes(array);
        return new String(array, Charset.forName("UTF-8"));*/
        return generateRandomChars(4);

        //return UUID.randomUUID().toString();
    }

    @Override
    public List<String> getArgumentNames() {
        return new ArrayList<>();
    }
    private static String generateRandomChars(int length) {
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            sb.append(candidateChars.charAt(random.nextInt(candidateChars
                    .length())));
        }

        return sb.toString();
    }
}
