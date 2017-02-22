package sh;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class JsonReader {
  
  private static String readAll(Reader rd) throws IOException {
    StringBuilder sb = new StringBuilder();
    int cp;
    while ((cp = rd.read()) != -1) {
      sb.append((char) cp);
    }
    return sb.toString();
  }

  public static JSONObject readJsonFromUrl(String url) throws IOException, ParseException {
    InputStream is = new URL(url).openStream();
    try {
      BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
      String jsonText = readAll(rd);
      JSONParser parser = new JSONParser();
      JSONObject json = (JSONObject)parser.parse(jsonText);
      return json;
    } finally {
      is.close();
    }
  }

  public static void main(String[] args) throws IOException, ParseException {
    JSONObject json = readJsonFromUrl("https://apis.daum.net/shopping/search?apikey=7a03f2ccbc4a1f5b6f74ea1cd48ec6e0&q=%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0&result=10&pageno=1&output=json&sort=pop");
    JSONObject j1 = (JSONObject)json.get("channel");
    JSONArray j2 = (JSONArray)j1.get("item");
    String totalResult = "";
    for (int i = 0; i < j2.size(); i++){
       JSONObject order = (JSONObject) j2.get(i);
       totalResult += 
           "상품명: " + order.get("title")
           + "\n제조사: " + order.get("maker")
           + "\n브랜드: " + order.get("brand")
           + "\n최저가: " + order.get("price_min")
           + "\n최고가: " + order.get("price_max")
           + "\n이미지URL: " + order.get("image_url")
           + "\n-----------------------------------\n";
    }
    
    System.out.println(totalResult);
   
  }
}