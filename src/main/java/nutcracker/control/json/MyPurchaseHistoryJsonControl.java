package nutcracker.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.service.MyPurchaseHistoryService;

@RestController
public class MyPurchaseHistoryJsonControl {
  @Autowired ServletContext sc;
  @Autowired MyPurchaseHistoryService myPurchaseHistoryService;
  
  @RequestMapping("/mypage/myPurchseHistoryAdd")
  public AjaxResult add(@RequestParam HashMap<String,Object> map) throws Exception {
    /*myPurchseHistoryService.add(map);*/
    return new AjaxResult(AjaxResult.SUCCESS, "구매 성공입니다.");
  }
}
