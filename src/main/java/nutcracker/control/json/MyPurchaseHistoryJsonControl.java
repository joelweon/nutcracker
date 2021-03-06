package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

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
  
  @RequestMapping("/mypage/myPurchseHistory")
  public AjaxResult getList(@RequestParam int memberNo) throws Exception {
    List<HashMap<String,Object>> purchaseHistory = myPurchaseHistoryService.getList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, purchaseHistory);
  }
  
  @RequestMapping("/mypage/myPurchseHistoryAdd")
  public AjaxResult add(@RequestParam HashMap<String,Object> map) throws Exception {
    int count = myPurchaseHistoryService.add(map);
    if (count == -1) {
      return new AjaxResult(AjaxResult.FAIL, "구매 진행 중 오류가 발생하였습니다.");
    } else {
      return new AjaxResult(AjaxResult.SUCCESS, "구매 완료되었습니다.");
    }
  }
}
