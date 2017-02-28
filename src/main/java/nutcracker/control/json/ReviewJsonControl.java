package nutcracker.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import nutcracker.service.ReviewService;
import nutcracker.util.MultipartUtil;

@RestController
public class ReviewJsonControl {
  @Autowired ServletContext sc;
  @Autowired ReviewService reviewService;
  
  @RequestMapping("/review/list")
  public AjaxResult list() throws Exception {
    List<HashMap<String, Object>> list = reviewService.getList();
    
    /*for (HashMap<String, Object> map : list) {
      String content = (String) map.get("content");
      int start = content.indexOf("<img src=");
      if (start > 0) {
        int end = content.indexOf("\"", start + 10);
        String thumb = content.substring(start + 10, end);
        System.out.println(thumb);
        map.put("thumb", thumb);
      } else {
        map.put("thumb", "/nutcracker/images/default.png");
      }
    }*/
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/review/detail")
  public AjaxResult detail(int reviewNo) throws Exception {
    HashMap<String, Object> map = reviewService.getDetail(reviewNo);
    
    if (map == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 리뷰가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, map);
  }
  
  @RequestMapping("/review/add")
  public AjaxResult add(@RequestParam HashMap<String, Object> map) throws Exception {
    reviewService.add(map);
    
    return new AjaxResult(AjaxResult.SUCCESS, "불량후기 등록 성공입니다.");
  }
  
  @RequestMapping("/review/imgUpload")
  public AjaxResult imgUpload(MultipartFile[] image) throws Exception {
    ArrayList<String> images = new ArrayList<>();
    
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (image != null && image.length > 0) {
      for (MultipartFile file : image) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/review/" + newFilename)));
          images.add(newFilename);
          /*Thread.sleep(3000);*/
          File original = new File(sc.getRealPath("/upload/review/" + newFilename)); 
          File thumbnail = new File(sc.getRealPath("/upload/review/thumb/" + newFilename)); 
          if (original.exists()) { 
            thumbnail.getParentFile().mkdirs(); 
            Thumbnails.of(original).crop(Positions.CENTER).size(200, 200).outputFormat("jpg").toFile(thumbnail); 
            //Thumbnails.of(inputStream).crop(Positions.CENTER_LEFT).size(100,100).keepAspectRatio(true).toOutputStream(outputStream);
          }
          return new AjaxResult(AjaxResult.SUCCESS, newFilename);
        }
      }
    }
    return new AjaxResult(AjaxResult.FAIL, "[Review]이미지를 업로드하지 못했습니다.");
  }
}
