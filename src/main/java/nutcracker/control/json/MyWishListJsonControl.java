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
  public AjaxResult myWishList(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize, int memberNo) throws Exception {
    
    if (pageNo < 1) {
      pageNo = 1;
    }
    if (pageSize < 5 || pageSize > 10) {
      pageSize = 5;
    }
    List<HashMap<String, Object>> list = myWishListService.getList(pageNo, pageSize, memberNo);
    int totalCount = myWishListService.getSize(memberNo);
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list",  list);
    resultMap.put("totalCount",  totalCount);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  @RequestMapping("/mypage/myWishListAdd")
  public AjaxResult add(@RequestParam HashMap<String,Object> map) throws Exception {
    myWishListService.add(map);
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/mypage/myWishListDelete")
  public AjaxResult delete(String[] rnoAry) throws Exception  {
    for (int i = 0; i < rnoAry.length; i++) {
      myWishListService.delete(Integer.parseInt(rnoAry[i]));
      System.out.println(Integer.parseInt(rnoAry[i]));
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
}
