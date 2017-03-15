package nutcracker.control.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Member;
import nutcracker.domain.User;
import nutcracker.service.AuthService;
import nutcracker.service.UserService;

@RestController
public class AuthJsonControl {
  @Autowired AuthService authService;
  @Autowired UserService userService;
  
  @RequestMapping("/auth/login")
  public AjaxResult login(String email, String password,
      HttpServletResponse response, HttpSession session, Model model) throws Exception {
    
    Member member = authService.getMemberInfo(email, password);
    
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "이메일 또는 암호가 틀리거나, 가입된 회원이 아닙니다.");
    }
    
    session.setAttribute("member", member); // HttpSession에 저장한다.
    
    User user = userService.getOneByEmailPassword(email, password);
    return new AjaxResult(AjaxResult.SUCCESS, user);
  }
  
  @RequestMapping("/auth/user")
  public AjaxResult loginUser(@RequestParam int userNo, HttpSession session) throws Exception {
    
    Member member = authService.getMember(userNo);
    System.out.println(member);
    
    session.setAttribute("member", member); // HttpSession에 저장한다.
    
    User user = userService.getOneByNo(userNo);
    System.out.println(user);
    return new AjaxResult(AjaxResult.SUCCESS, user);
  }
  
  @RequestMapping("/auth/logout")
  public AjaxResult logout(HttpSession session) throws Exception {
    session.invalidate(); // 기존 세션을 무효화시킨다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그아웃 성공입니다.");
  }
  
  @RequestMapping("/auth/loginUser")
  public AjaxResult loginUser(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");

    if (member == null) { // 로그인이 되지 않은 상태
      HashMap<String,String> snsUser = new HashMap<>(); // sns 계정 로그인 확인
      String name = (String)session.getAttribute("name");
      String photoUrl = (String)session.getAttribute("photoUrl");
      snsUser.put("name", name);
      snsUser.put("photoUrl", photoUrl);
      if (session.getAttribute("name") == null) {
        return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
      }
      return new AjaxResult(AjaxResult.SUCCESS, snsUser); // sns 계정 로그인 성공한 경우
    }
    return new AjaxResult(AjaxResult.SUCCESS, member);// 일반 계정 로그인 성공한 경우
  }
  
  // sns계정 로그인 확인
  @RequestMapping("/auth/snsLogin")
  public AjaxResult sns(HttpSession session, HttpServletRequest request) throws Exception {
    String name = request.getParameter("name");
    String photoUrl = request.getParameter("photoPath");
    session.setAttribute("name", name);
    session.setAttribute("photoUrl", photoUrl);
    return new AjaxResult(AjaxResult.SUCCESS, "로그인 성공!");
  }
  
}
