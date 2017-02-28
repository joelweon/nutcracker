package nutcracker.control;

import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import nutcracker.dao.BoycottDao;
import nutcracker.domain.Boycott;

@Controller
public class BoycottControl {
  @Autowired ServletContext sc;
  @Autowired BoycottDao boycottDao;

  @RequestMapping("/boycott/form")
  public String form(Model model) {
    model.addAttribute("title", "불매운동 입력폼");
    model.addAttribute("contentPage", "boycott/form.jsp");
    return "/main";
  }

  @RequestMapping("/boycott/list")
  public String list(Model model) throws Exception {
    ArrayList<Boycott> list = boycottDao.getList();
    model.addAttribute("boycotts", list);
    model.addAttribute("title", "불매운동관리-목록");
    model.addAttribute("contentPage", "boycott/list.jsp");
    return "/main";
  }

  @RequestMapping("/boycott/detail")
  public String detail(int boycottNo, Model model) throws Exception {
    Boycott boycott = boycottDao.getOne(boycottNo);

    if (boycott == null) {
      throw new Exception("해당 게시글이 없습니다.");
    }

    model.addAttribute("boycott", boycott);
    model.addAttribute("title", "회원관리-상세정보");
    model.addAttribute("contentPage", "boycott/detail.jsp");
    return "/main";
  }

  @RequestMapping("/boycott/add")
  public String add(Boycott boycott) throws Exception {
    boycottDao.insert(boycott);
    return "redirect:list.do";
  }

  @RequestMapping("/boycott/delete")
  public String delete(int boycottNo, HttpServletRequest request) throws Exception {

    boycottDao.delete(boycottNo);
    return "redirect:list.do";
  }


  @RequestMapping("/boycott/update")
  public String update(Boycott boycott) throws Exception {

    boycottDao.update(boycott);
    return "redirect:list.do";
  }
}
