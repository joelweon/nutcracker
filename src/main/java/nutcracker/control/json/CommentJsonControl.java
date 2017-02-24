package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.service.CommentService;

@RestController
public class CommentJsonControl {
  @Autowired ServletContext sc;
  @Autowired CommentService commentService;
  
  @RequestMapping("/comment/list")
  public AjaxResult list(int ownNo) throws Exception {
    List<HashMap<String, Object>> list = commentService.getList(ownNo);
    System.out.println(list.get(0).get("name"));
    System.out.println(list.get(1).get("name"));
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
}
