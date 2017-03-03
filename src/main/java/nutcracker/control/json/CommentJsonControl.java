package nutcracker.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.service.CommentService;

@RestController
public class CommentJsonControl {
  @Autowired ServletContext sc;
  @Autowired CommentService commentService;
  
  @RequestMapping("/comment/list")
  public AjaxResult list(int ownNo) throws Exception {
    List<HashMap<String, Object>> list = commentService.getList(ownNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  // 불매 관련 사항
  @RequestMapping("/comment/boycottcomments")
  public AjaxResult boycottComments(int boycottNo) throws Exception {
    List<HashMap<String, Object>> list = commentService.getBoycottCmtList(boycottNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  @RequestMapping("/comment/boycottcommentadd")
  public AjaxResult boycottCommentAdd(@RequestParam HashMap<String,String> map) throws Exception {
    int count = commentService.addBoycottCmt(map);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "댓글 등록 실패");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "댓글 등록 완료");
  }
  @RequestMapping("/comment/boycottcmtcount")
  public AjaxResult boycottCmtCount(int boycottNo) throws Exception {
    int commentCount = commentService.getBoycottCmtCount(boycottNo);
    if (commentCount > 0) {
      return new AjaxResult(AjaxResult.SUCCESS, commentCount);
    } else {
      return new AjaxResult(AjaxResult.SUCCESS, 0);
    }
  }
  
}
