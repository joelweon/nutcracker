package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.service.MyWishListService;

@RestController
public class MyWishListJsonControl {
  @Autowired ServletContext sc;
  @Autowired MyWishListService myWishListService;
  
  @RequestMapping("/mypage/myWishList")
  public AjaxResult mywishList(int memberNo) throws Exception {
    
    List<HashMap<String, Object>> list = myWishListService.getList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/mypage/myWishListAdd")
  public AjaxResult add(@RequestParam HashMap<String,Object> map) throws Exception {
    myWishListService.add(map);
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
}
