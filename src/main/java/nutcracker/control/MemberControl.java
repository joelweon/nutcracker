package nutcracker.control;

import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import nutcracker.dao.MemberDao;
import nutcracker.domain.Member;

@Controller
public class MemberControl {
  @Autowired ServletContext sc;
  @Autowired MemberDao memberDao;
  
  @RequestMapping("/member/form")
  public String form(Model model) {
    model.addAttribute("title", "회원 입력폼");
    model.addAttribute("contentPage", "member/form.jsp");
    return "main";
  }
  
  @RequestMapping("/member/list")
  public String list(Model model) throws Exception {
    ArrayList<Member> list = memberDao.getList();
    model.addAttribute("members", list);
    model.addAttribute("title", "회원관리-목록");
    model.addAttribute("contentPage", "member/list.jsp");
    return "/main";
  }
  
  @RequestMapping("/member/detail")
  public String detail(int memberNo, Model model) throws Exception {
    Member member = memberDao.getOneByNo(memberNo);
    
    if (member == null) {
      throw new Exception("해당 회원이 없습니다.");
    }
    
    model.addAttribute("member", member);
    model.addAttribute("title", "회원관리-상세정보");
    model.addAttribute("contentPage", "member/detail.jsp");
    return "/main";
  }
  
  @RequestMapping("/member/add")
  public String add(Member member) throws Exception {
    
    if (memberDao.count(member.getEmail()) > 0) {
      throw new Exception("같은 사용자 아이디가 존재합니다. 등록을 취소합니다.");
    }
    /*if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      member.setPhotoPath(newFilename);
    }*/
    System.out.println("lastDate: " + member.getLastDate());
    memberDao.insert(member);
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/member/delete")
  public String delete(int memberNo, HttpServletRequest request) throws Exception {
    if (memberDao.countByNo(memberNo) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    
    memberDao.delete(memberNo);
    return "redirect:list.do";
  }
  
  @RequestMapping("/member/update")
  public String update(Member member) throws Exception {
    if (memberDao.countByNo(member.getMemberNo()) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    /*if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      member.setPhotoPath(newFilename);
    }*/
    memberDao.update(member);
    return "redirect:list.do";
  }
}
