package nutcracker.control.json;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Boycott;
import nutcracker.domain.BoycottNews;
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
  public AjaxResult add(Boycott boycott) throws Exception {
    System.out.println("json1");
    ArrayList<BoycottNews> newsList = new ArrayList<>();
    boycott.setNewsList(newsList);
    
    boycottService.add(boycott);
    
    System.out.println("json2");
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  
  
  
}
