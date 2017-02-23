package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.service.ReviewService;

@RestController
public class ReviewJsonControl {
  @Autowired ServletContext sc;
  @Autowired ReviewService reviewService;
  
  @RequestMapping("/review/list")
  public AjaxResult list() throws Exception {
    List<HashMap<String, Object>> list = reviewService.getList();
    
    /*for (HashMap<String, Object> map : list) {
      System.out.println(map.get("reviewNo"));
      System.out.println(map.get("postTime"));
    }*/
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/review/detail")
  public AjaxResult detail(int reviewNo) throws Exception {
    HashMap<String, Object> map = reviewService.getDetail(reviewNo);
    
    if (map == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 리뷰가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, map);
  }
}
