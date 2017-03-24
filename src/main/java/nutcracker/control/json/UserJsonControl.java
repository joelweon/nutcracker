package nutcracker.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import nutcracker.domain.User;
import nutcracker.service.UserService;
import nutcracker.util.MultipartUtil;

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
    
    /*user = (User)session.getAttribute("user");*/
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
  
  @RequestMapping("/user/updateAddress")
  public AjaxResult updateAddress(User user, HttpSession session) throws Exception {
    User oldUser = (User) session.getAttribute("user");
    oldUser.setPostcode(user.getPostcode());
    oldUser.setBasicAddress(user.getBasicAddress());
    oldUser.setDetailAddress(user.getDetailAddress());
    session.setAttribute("user", oldUser);
    userService.updateAddress(oldUser);
    return new AjaxResult(AjaxResult.SUCCESS, oldUser);
  }
  
  @RequestMapping("/user/delete")
  public AjaxResult delete(int userNo, HttpServletRequest request) throws Exception {
    int count = userService.delete(userNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "회원정보를 다시 확인하세요");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 완료");
  }
  
  @RequestMapping("/user/updateProfile")
  public AjaxResult updateProfile(@RequestBody HashMap<String,Object> map, HttpSession session) throws Exception {
    try {
      User oldUser = (User) session.getAttribute("user");
      oldUser.setPhotoPath((String)map.get("photoPath"));
      session.setAttribute("user", oldUser);
      userService.updateProfile(map);
      
      //return new AjaxResult(AjaxResult.SUCCESS, "유저이미지 수정 성공입니다.");
      return new AjaxResult(AjaxResult.SUCCESS, oldUser);
    } catch (Exception e) {
      e.printStackTrace();
      return new AjaxResult(AjaxResult.FAIL, "유저이미지 수정 실패입니다.");
    }
  }
  
  @RequestMapping("/user/profileUpload")
  public AjaxResult profileUpload(MultipartFile[] image) throws Exception {
    ArrayList<String> images = new ArrayList<>();
    
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (image != null && image.length > 0) {
      for (MultipartFile file : image) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/profile/" + newFilename)));
          images.add(newFilename);
          
          File original = new File(sc.getRealPath("/upload/profile/" + newFilename)); 
          File thumbnail = new File(sc.getRealPath("/upload/profile/thumb/" + newFilename)); 
          if (original.exists()) { 
            thumbnail.getParentFile().mkdirs(); 
            Thumbnails.of(original).crop(Positions.CENTER).size(80, 80).outputFormat("png").toFile(thumbnail); 
          }
          return new AjaxResult(AjaxResult.SUCCESS, newFilename);
        }
      }
    }
    return new AjaxResult(AjaxResult.FAIL, "[profileUpload]이미지를 업로드하지 못했습니다.");
  }
  
  @RequestMapping("/user/listReportMember")
  public AjaxResult listReportMember(@RequestParam(defaultValue="1") int pageNo, @RequestParam(defaultValue="10") int pageSize) throws Exception {
    if (pageNo < 1) {
      pageNo = 1;
    }
    if (pageSize < 5 || pageSize > 10) {
      pageSize = 5;
    }
    HashMap<String, Object> map = new HashMap<>();
    List<HashMap<String,Object>> totalList = userService.listReportMember(pageNo,pageSize);
    List<HashMap<String,Object>> list = new ArrayList<>();
    int totalCount = totalList.size();
    for (int i = 0; i < totalCount; i ++) {
      int memberNo = Integer.parseInt(totalList.get(i).get("mno").toString());
      list.add(userService.detailReportMember(memberNo));
      System.out.println(userService.detailReportMember(memberNo));
    }
    map.put("list", list);
    map.put("totalCount", totalCount);
    if (!map.get("totalCount").toString().equals("0")) {
      return new AjaxResult(AjaxResult.SUCCESS, map);
    } else {
      return new AjaxResult(AjaxResult.FAIL, "20회 이상 신고된 회원이 없습니다.");
    }
  }
  
  @RequestMapping("/user/updateStatus")
  public AjaxResult updateStatus(User user) throws Exception {
    int count = userService.updateStatus(user);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "회원 활동 상태 변경 실패");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "회원 활동 상태 변경 성공");
  }
}
