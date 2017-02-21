package sh;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class ShoppingDaum {
  public static final String apikey="f441663cfa0af193ce8a411227a7c9f3";

  public static void main(String[] args) throws Exception {
    //https://apis.daum.net/shopping/search?apikey=f441663cfa0af193ce8a411227a7c9f3&q=bag%20&result=10&pageno=1&output=xml&sort=date
    String q="bag%20";
    String output="json";
    String sort="date";
    
    URL url = new URL("https://apis.daum.net/shopping/search?");
    URLConnection urlCon = url.openConnection();
    urlCon.setRequestProperty("apikey", apikey);
    urlCon.setRequestProperty("q", q);
    urlCon.setRequestProperty("output", output);
    urlCon.setRequestProperty("sort", sort);
    
    BufferedReader buffer = new BufferedReader(new InputStreamReader(urlCon.getInputStream(), "UTF-8"));
    String msg = null;
    
    while((msg=buffer.readLine()) != null) {
      System.out.println(msg);
    }
  }

}
