package nutcracker.control.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Member;
import nutcracker.service.AuthService;

@RestController
public class AuthJsonControl {
  @Autowired AuthService authService;
  
  @RequestMapping("/auth/login")
  public AjaxResult login(String email, String password,
      HttpServletResponse response, HttpSession session, Model model) throws Exception {
    
    Member member = authService.getMemberInfo(email, password);
    
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "이메일 또는 암호가 틀리거나, 가입된 회원이 아닙니다.");
    }
    
    session.setAttribute("member", member); // HttpSession에 저장한다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그인 성공!");
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
      HashMap<String,String> snsUser = new HashMap<>(); // 카카오 계정 로그인 확인
      String name = (String)session.getAttribute("name");
      String photoUrl = (String)session.getAttribute("photoUrl");
      snsUser.put("name", name);
      snsUser.put("photoUrl", photoUrl);
      if (session.getAttribute("name") == null) {
        return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
      }
      return new AjaxResult(AjaxResult.SUCCESS, snsUser); // 카카오 계정 로그인 성공한 경우
    }
    return new AjaxResult(AjaxResult.SUCCESS, member);// 일반 계정 로그인 성공한 경우
  }
  
  // 카카오 계정 로그인 확인
  @RequestMapping("/auth/snsLogin")
  public AjaxResult sns(HttpSession session, HttpServletRequest request) throws Exception {
    String name = request.getParameter("name");
    String photoUrl = request.getParameter("photoPath");
    session.setAttribute("name", name);
    session.setAttribute("photoUrl", photoUrl);
    return new AjaxResult(AjaxResult.SUCCESS, "로그인 성공!");
  }
  
}
