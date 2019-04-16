package generatorviewclient.util;

import java.io.BufferedReader;
import java.io.IOException;

public class FileUtil {
    public static String getBuffer(BufferedReader buffer) throws IOException {
        String retorno = null;

        String lineaSalida = "";
        StringBuffer contenido = new StringBuffer();
        String separador = "";

        while ((lineaSalida = buffer.readLine()) != null) {
            contenido.append(separador + lineaSalida);
            separador = "\n";
        }

        retorno = contenido.toString();

        return retorno;
    }
}
