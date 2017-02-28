package nutcracker.control.json;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Boycott;
import nutcracker.service.BoycottService;

@RestController
public class BoycottJsonControl {
  @Autowired ServletContext sc;
  @Autowired BoycottService boycottService;
  
  @RequestMapping("/boycott/list")
  public AjaxResult list() throws Exception {
    List<Boycott> list = boycottService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/boycott/add")
  public AjaxResult add(@RequestBody Boycott boycott) throws Exception {
    System.out.println(boycott);
    //System.out.println(newsListJson);
    //System.out.println("newsList.size: " + boycott.getNewsList().size());
    //boycottService.add(boycott);
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/boycott/detail")
  public AjaxResult detail(int boycottNo) throws Exception {
    Boycott boycott = boycottService.getOne(boycottNo);
    if (boycott == null) {
      return new AjaxResult(AjaxResult.FAIL, "데이터를 불러오지 못했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, boycott);
  }
  
  
  
}
