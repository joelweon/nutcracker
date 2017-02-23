package nutcracker.control;

import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import nutcracker.domain.User;
import nutcracker.service.UserService;

@Controller
public class UserControl {
  @Autowired ServletContext sc;
  @Autowired UserService userService;
  
  @RequestMapping("/user/list")
  public String list(Model model) throws Exception {
    ArrayList<User> list = userService.getList();
    model.addAttribute("users", list);
    model.addAttribute("title", "회원 관리-목록");
    model.addAttribute("contentPage", "/user/list.jsp"); //jsp없음..
    return "main";
  }
  
  @RequestMapping("/user/add")
  public String add(User user) throws Exception {
    userService.add(user);
    return "redirect:loginform.do";
  }
  
  @RequestMapping("/user/update")
  public String update(User user) throws Exception {
    userService.update(user);
    return "main";
  }
  
  @RequestMapping("/user/delete")
  public String delete(int userNo,HttpServletRequest request) throws Exception {
    userService.delete(userNo);
    return "main";
  }
  
}
