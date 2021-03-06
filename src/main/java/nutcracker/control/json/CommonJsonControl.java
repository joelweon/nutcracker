package nutcracker.control.json;

import java.io.File;
import java.util.ArrayList;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import nutcracker.util.MultipartUtil;

@RestController
@RequestMapping("/common/")
public class CommonJsonControl {
  @Autowired ServletContext sc;
  
  @RequestMapping("fileupload")
  public AjaxResult fileupload(@RequestParam("photoList") MultipartFile[] files) throws Exception {
    ArrayList<String> filenames = new ArrayList<>();
    
    if (files == null || files.length == 0) {
      return new AjaxResult(AjaxResult.FAIL, "파일 업로드 실패..");
    } else {
      // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
      for (MultipartFile file : files) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/deal/" + newFilename)));
          filenames.add(newFilename);
        }
      }
      return new AjaxResult(AjaxResult.SUCCESS, filenames.toString().trim().replace("[", "").replace("]", ""));
    }
  }
}

