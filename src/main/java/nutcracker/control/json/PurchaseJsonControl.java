package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
      return new AjaxResult(AjaxResult.FAIL, "해당 리뷰가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, map);
  }

}
