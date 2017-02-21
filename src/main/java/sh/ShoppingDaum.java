package sh;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

import org.gjt.xpp.XmlPullParser;
import org.gjt.xpp.XmlPullParserFactory;

public class ShoppingDaum {

  public static void main(String[] args) throws Exception {
    /*String id="BEHeUZ8BlT37cyM4OUd5";
    String password="P31S4XUPPs";*/
    URL url = new URL("https://apis.daum.net/shopping/detail?apikey={f441663cfa0af193ce8a411227a7c9f3}&docid=L1891414883&output=xml");
    URLConnection urlCon = url.openConnection();
    /*urlCon.setRequestProperty("X-Naver-Client-Id", id);
    urlCon.setRequestProperty("X-Naver-Client-Secret", password);*/
    BufferedReader buffer = new BufferedReader(new InputStreamReader(urlCon.getInputStream()));
    String msg = null;
    /*String data = "";*/
    while((msg=buffer.readLine()) != null) {
      System.out.println(msg);
    }
    
   /* List<Product> itemList = null;
    XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
    XmlPullParser parser = factory.newPullParser();
    parser.setInput(new StringReader(data));
    int eventType = parser.getEventType();
    Product product = null;
    
    while(eventType != XmlPullParser.END_DOCUMENT) {
      switch(eventType) {
        case XmlPullParser.START_TAG: {
          String tag = parser.getRawName();
          System.out.println("tag : "+tag);
          switch(tag) {
            case "item": product = new Product(); break;
            case "title": System.out.println("제목 : "+parser.next()); break;
            case "link": System.out.println("URL : "+parser.next()); break;
            case "lprice": System.out.println("최저가격 : "+parser.next()); break;
            }
          break;
        }
        default: System.out.println("에러");
      }
      eventType = parser.next();
    }
    for (Product product2 : itemList) {
      System.out.println(product2);
    }*/
    
  }

}
