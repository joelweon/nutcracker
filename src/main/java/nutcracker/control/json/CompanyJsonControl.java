package nutcracker.control.json;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Company;
import nutcracker.service.CompanyService;

@RestController
public class CompanyJsonControl {
  @Autowired ServletContext sc;
  @Autowired CompanyService companyService;
  
  @RequestMapping("/company/getBoycottNo")
  public AjaxResult getBoycottNo(int memberNo) throws Exception {
    int[] arr = companyService.getBoycottNo(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, arr);
  }
  
  @RequestMapping("/company/getAllCompany")
  public AjaxResult getAllCompany() throws Exception {
    List<Object> list = companyService.getAllCompany();
    System.out.println(list.toString());
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/company/getBoycottComp")
  public AjaxResult getBoycottComp(int memberNo) throws Exception {
    List<Object> list = companyService.getBoycottComp(memberNo);
    ArrayList<HashMap<String, Object>> totalArray = new ArrayList<>();
    JSONParser jsonParser = new JSONParser();
    JSONObject obj = new JSONObject();
    for (int i = 0; i < list.size(); i++) {
      JSONArray pArray = new JSONArray();
      JSONArray cArray = new JSONArray();
      String str = list.get(i).toString();
      str =  str.substring(15, str.length() - 2);
      String[] arr = str.split("-");
      for (String s : arr) {
        s = s.substring(1, s.length() - 1);
        String[] val = s.split(",");
        if (val[2].contains("0")) {
          String sample = "{\"no\":" + val[0] + ",\"name\":" + val[1] + ",\"level\":" + 0 + ",\"check\":" + (val[3].contains("0")? 0 : val[3]) + "}";
          obj = new JSONObject();
          obj.put("obj", (JSONObject)jsonParser.parse(sample));
          pArray.add(obj);
        } else {
          String sample = "{\"no\":" + val[0] + ",\"name\":" + val[1] + ",\"level\":" + 1 + ",\"check\":" + (val[3].contains("0")? 0 : val[3]) + "}";
          obj = new JSONObject();
          obj.put("obj", (JSONObject)jsonParser.parse(sample));
          cArray.add(obj);
        }
      //totalArray.add(new JSONObject().put(", value))
      }
      HashMap<String, Object> map = new HashMap<>();
      map.put("parent", pArray);
      map.put("child", cArray);
      totalArray.add(map);
    }
    return new AjaxResult(AjaxResult.SUCCESS, totalArray);
  }
  
  @RequestMapping("/company/getParent")
  public AjaxResult getParent(int parentNo) throws Exception {
    Company comp = companyService.getParent(parentNo);
    return new AjaxResult(AjaxResult.SUCCESS, comp);
  }
  
  @RequestMapping("/company/getChildren")
  public AjaxResult getChildren(int parentNo) throws Exception {
    System.out.println("parent: " + parentNo);
    ArrayList<Company> list = companyService.getChildren(parentNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  

}
