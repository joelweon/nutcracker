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

import nutcracker.domain.Photo;
import nutcracker.domain.Purchase;
import nutcracker.service.PurchaseService;
import nutcracker.util.MultipartUtil;

@RestController
public class PurchaseJsonControl {
  @Autowired ServletContext sc;
  @Autowired PurchaseService purchaseService;
  
  @RequestMapping("/deal/list")
  public AjaxResult list() throws Exception {
    List<HashMap<String, Object>> list = purchaseService.getList();
    
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/deal/detail")
  public AjaxResult detail(int purchaseNo) throws Exception {
    HashMap<String, Object> map = purchaseService.getDetail(purchaseNo);
    
    if (map == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 리뷰가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, map);
  }
  
  @RequestMapping("/deal/add")
  public AjaxResult add(@RequestParam Purchase purchase, MultipartFile[] photo) throws Exception {
    ArrayList<Photo> photoList = new ArrayList<>();
    for (MultipartFile file : photo) {
      if (file.getSize() > 0) { // 파일이 업로드 되었다면,
        String newFilename = MultipartUtil.generateFilename();
        file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
        photoList.add(new Photo(newFilename));
      }
    }
    purchase.setPhotoList(photoList);
    purchaseService.add(purchase);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }

}
