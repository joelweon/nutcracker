package nutcracker.service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nutcracker.domain.User;

@WebServlet("/add")
public class UserAddServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  SimpleDateFormat formatter1 = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
  Date currentTime1 = new Date();
  String today = formatter1.format(currentTime1);
  SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.KOREA);
  Date currentTime2 = new Date();
  String todayTime = formatter2.format(currentTime2);
  
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    request.setCharacterEncoding("UTF-8");
    User user = new User();
    user.setEmail(request.getParameter("email"));
    user.setName(request.getParameter("name"));
    user.setPassword(request.getParameter("password"));
    user.setBirthday(request.getParameter("birthday"));
    user.setTel(request.getParameter("tel")+request.getParameter("tel2"));
    user.setPostcode(request.getParameter("postcode"));
    user.setBasicAddress(request.getParameter("address")+" "+request.getParameter("address2"));
    user.setJob(request.getParameter("job"));
    user.setGender(request.getParameter("chk_gender"));
    user.setLastDate(todayTime);
    user.setJoinDate(today);
  }

}
