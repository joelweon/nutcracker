package nutcracker.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import nutcracker.domain.Member;

public class LoginCheckInterceptor extends HandlerInterceptorAdapter {
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    HttpSession session = request.getSession();
    Member member = (Member)session.getAttribute("member");
    
    if (member == null) {
      response.sendRedirect(request.getContextPath() + "/auth/loginform.do");
      return false;
    } 
    
    return true;
  }
}
