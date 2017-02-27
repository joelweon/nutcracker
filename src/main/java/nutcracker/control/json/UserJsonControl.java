package nutcracker.control.json;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.User;
import nutcracker.service.UserService;

@RestController
public class UserJsonControl {
  @Autowired ServletContext sc;
  @Autowired UserService userService;

  @RequestMapping("/user/list")
  public AjaxResult list() throws Exception {
    List<User> list = userService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/user/detail")
  public AjaxResult detail(String email, String password) throws Exception {
    User user = userService.getOneByEmailPassword(email, password);
    
    if (user == null) {
      return new AjaxResult(AjaxResult.FAIL, "비밀번호를 다시 확인하세요.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, user);
  }
  
  @RequestMapping("/user/add")
  public AjaxResult add(User user) throws Exception {
    userService.add(user);
    return new AjaxResult(AjaxResult.SUCCESS, "회원가입 완료");
  }
  
  @RequestMapping("/user/update")
  public AjaxResult update(User user) throws Exception {
    int count = userService.update(user);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "회원정보를 다시 확인하세요");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "업데이트 완료");
  }
  
  @RequestMapping("/user/delete")
  public AjaxResult delete(int userNo, HttpServletRequest request) throws Exception {
    int count = userService.delete(userNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "회원정보를 다시 확인하세요");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 완료");
  }
}
