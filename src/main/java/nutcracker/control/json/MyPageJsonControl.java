package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.service.ReviewService;

@RestController
public class MyPageJsonControl {
  @Autowired ServletContext sc;
  @Autowired ReviewService reviewService;
  
  @RequestMapping("/mypage/myboard")
  public AjaxResult myboard(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize, int memberNo) throws Exception {
    
    if (pageNo < 1) {
      pageNo = 1;
    }
    if (pageSize < 5 || pageSize > 10) {
      pageSize = 5;
    }
    List<HashMap<String, Object>> list = reviewService.getListMy(pageNo, pageSize, memberNo);
    int totalCount = reviewService.getSize();
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list",  list);
    resultMap.put("totalCount",  totalCount);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  @RequestMapping("/mypage/adminboard")
  public AjaxResult adminboard(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize) throws Exception {
    if (pageNo < 1) {
      pageNo = 1;
    }
    if (pageSize < 5 || pageSize > 20) {
      pageSize = 10;
    }
    List<HashMap<String, Object>> list = reviewService.getReportList(pageNo, pageSize);
    int totalCount = reviewService.getReportSize();
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    resultMap.put("totalCount", totalCount);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
}
