package generatorviewclient.util;

import aQute.bnd.annotation.ProviderType;

import java.util.List;

@ProviderType
public interface KeywordTokenizer {

    public boolean requiresTokenization(String keyword);

    public List<String> tokenize(String value);

}
