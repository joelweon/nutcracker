package nutcracker.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import nutcracker.domain.Boycott;
import nutcracker.service.BoycottService;
import nutcracker.util.MultipartUtil;

@RestController
public class BoycottJsonControl {
  @Autowired ServletContext sc;
  @Autowired BoycottService boycottService;
  
  @RequestMapping("/boycott/list")
  public AjaxResult list() throws Exception {
    List<Boycott> list = boycottService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/boycott/myBoycottList")
  public AjaxResult mylist(int memberNo) throws Exception {
    List<Boycott> list = boycottService.getMyBoycottList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/boycott/detail")
  public AjaxResult detail(int boycottNo) throws Exception {
    Boycott boycott = boycottService.getOne(boycottNo);
    if (boycott == null) {
      return new AjaxResult(AjaxResult.FAIL, "데이터를 불러오지 못했습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, boycott);
  }
  
  @RequestMapping("/boycott/add")
  public AjaxResult add(@RequestBody Boycott boycott) throws Exception {
//    System.out.println(boycott);
    boycottService.add(boycott);
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/boycott/relationAdd")
  public AjaxResult addRelation(Boycott boycott) throws Exception {
    
    boycottService.addRelation(boycott);
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/boycott/relationDelete")
  public AjaxResult deleteRelation(Boycott boycott) throws Exception {
    boycottService.deleteRelation(boycott);
    
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  
  
  
  
  @RequestMapping("/boycott/delete")
  public AjaxResult delete(int boycottNo) throws Exception {
    boycottService.delete(boycottNo);
    
    return new AjaxResult(AjaxResult.SUCCESS, "불매운동 삭제 성공입니다.");
  }
  
  @RequestMapping("/boycott/update")
  public AjaxResult update(@RequestBody Boycott boycott) throws Exception {
    
    boycottService.update(boycott);
    
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/boycott/boycottUpdate")
  public AjaxResult boycottUpdate(String boycottNo) throws Exception {
    boycottService.updateBoycottCount(boycottNo);
    Boycott boycott = boycottService.getOne(Integer.parseInt(boycottNo));
    
    return new AjaxResult(AjaxResult.SUCCESS, boycott.getBoycottCount());
  }
  
  @RequestMapping("/boycott/cancelBoycott")
  public AjaxResult cancelBoycott(String boycottNo) throws Exception {
    boycottService.cancelBoycottCount(boycottNo);
    Boycott boycott = boycottService.getOne(Integer.parseInt(boycottNo));
    
    return new AjaxResult(AjaxResult.SUCCESS, boycott.getBoycottCount());
  }
  
  @RequestMapping("/boycott/viewUpdate")
  public AjaxResult viewUpdate(int boycottNo) throws Exception {
    Boycott boycott = boycottService.getOne(boycottNo);
    if (boycott != null) {
      boycottService.updateViewCount(boycott.getBoycottNo());
      return new AjaxResult(AjaxResult.SUCCESS, "업데이트 성공");
    }
    return new AjaxResult(AjaxResult.FAIL, "업데이트 실패");
  }
  
  @RequestMapping("/boycott/hoduUpdate")
  public AjaxResult hoduUpdate(int boycottNo) throws Exception {
      boycottService.updateHoduCount(boycottNo);
      Boycott boycott = boycottService.getOne(boycottNo);
      return new AjaxResult(AjaxResult.SUCCESS, boycott.getHoduCount());
  }
  
  @RequestMapping("/boycott/imgUpload")
  public AjaxResult imgUpload(MultipartFile[] image) throws Exception {
    ArrayList<String> images = new ArrayList<>();
    
    if (image != null && image.length > 0) {
      for (MultipartFile file : image) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/boycott/" + newFilename)));
          images.add(newFilename);
          /*Thread.sleep(3000);*/
          File original = new File(sc.getRealPath("/upload/boycott/" + newFilename)); 
          File thumbnail = new File(sc.getRealPath("/upload/boycott/thumb/" + newFilename)); 
          if (original.exists()) { 
            thumbnail.getParentFile().mkdirs(); 
            Thumbnails.of(original).crop(Positions.CENTER).size(200, 200).outputFormat("jpg").toFile(thumbnail); 
            //Thumbnails.of(inputStream).crop(Positions.CENTER_LEFT).size(100,100).keepAspectRatio(true).toOutputStream(outputStream);
          }
          return new AjaxResult(AjaxResult.SUCCESS, newFilename);
        }
      }
    }
    return new AjaxResult(AjaxResult.FAIL, "[Boycott]이미지를 업로드하지 못했습니다.");
  }
  
  @RequestMapping("/boycott/search")
  public AjaxResult search(String keyword) throws Exception {
    List<Boycott> list = boycottService.getSearch(keyword);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
}
