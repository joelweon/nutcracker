package nutcracker.control.json;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Company;
import nutcracker.service.PurchaseService;

@RestController
public class PurchaseJsonControl {
  @Autowired ServletContext sc;
  @Autowired PurchaseService purchaseService;
  
  @RequestMapping("/deal/list")
  public AjaxResult list() throws Exception {
    List<HashMap<String, Object>> list = purchaseService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/deal/detail")
  public AjaxResult detail(int purchaseNo) throws Exception {
    HashMap<String, Object> map = purchaseService.getDetail(purchaseNo);
    if (map == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 공구 정보가 없습니다.");
    }
    System.out.println(map);
    return new AjaxResult(AjaxResult.SUCCESS, map);
  }
  
  @RequestMapping("/deal/add")
  public AjaxResult add(@RequestParam HashMap<String,Object> map) throws Exception {
    purchaseService.add(map);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/deal/search")
  public AjaxResult searchMaker(@RequestParam HashMap<String,Object> map) throws Exception {
    ArrayList<Company> result = purchaseService.searchMaker(map);
    return new AjaxResult(AjaxResult.SUCCESS, result);
  }

}
