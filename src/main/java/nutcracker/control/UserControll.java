package nutcracker.control;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import nutcracker.dao.MemberDao;
import nutcracker.dao.UserDao;
import nutcracker.domain.Member;
import nutcracker.domain.User;

@Controller
public class UserControll {
  @Autowired MemberDao memberDao;
  @Autowired UserDao userDao;
  
  @RequestMapping("/user/add.do")
  public String service(HttpServletRequest request, HttpServletResponse response) throws Exception {
    
    SimpleDateFormat formatter1 = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
    Date currentTime1 = new Date();
    String today = formatter1.format(currentTime1);
    SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.KOREA);
    Date currentTime2 = new Date();
    String todayTime = formatter2.format(currentTime2);
    
    User user = new User();
    user.setEmail(request.getParameter("email"));
    user.setName(request.getParameter("name"));
    user.setPassword(request.getParameter("password"));
    user.setBirthday(request.getParameter("birthday"));
    user.setTel(request.getParameter("tel"));
    user.setPostcode(request.getParameter("postcode"));
    user.setBasicAddress(request.getParameter("address"));
    user.setJob(request.getParameter("job"));
    user.setGender(request.getParameter("gender"));
    user.setLastDate(todayTime);
    user.setJoinDate(today);
    
    if (memberDao.count(user.getEmail()) > 0) {
      memberDao.insert(user);
    } else {
      Member member = memberDao.getOne(user.getEmail());
      user.setUserNo(member.getMemberNo());
    }
    
    userDao.insert(user);
    return "redirect:loginform.do";
  }
  
}
