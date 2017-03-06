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
  public AjaxResult fileupload(@RequestParam MultipartFile[] files) throws Exception {
    System.out.println("1번");
    ArrayList<String> filenames = new ArrayList<>();
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (files != null && files.length > 0) {
      System.out.println("2번");
      for (MultipartFile file : files) {
        System.out.println("3번");
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          System.out.println("newFilename : "+newFilename);
          file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
          filenames.add(newFilename);
        }
      }
    }
    return new AjaxResult(AjaxResult.SUCCESS, filenames);
  }
}
