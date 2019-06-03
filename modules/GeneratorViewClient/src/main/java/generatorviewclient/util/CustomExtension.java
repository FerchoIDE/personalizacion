package generatorviewclient.util;

import com.mitchellbosecke.pebble.extension.AbstractExtension;
import com.mitchellbosecke.pebble.extension.Function;

import java.util.HashMap;
import java.util.Map;

public class CustomExtension extends AbstractExtension {

    private InstanceIdFunction instanceIdFunction = new InstanceIdFunction();
    @Override
    public Map<String, Function> getFunctions() {
        Map<String, Function> functions = new HashMap<>();
        functions.put("instanceIdFunction", instanceIdFunction);
        return functions;
    }
}
