package nutcracker.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.PurchaseDao;
import nutcracker.service.PurchaseService;

@Service
public class PurchaseServiceImpl implements PurchaseService {
  @Autowired PurchaseDao purchaseDao;

  @Override
  public List<HashMap<String, Object>> getList() throws Exception {
    return purchaseDao.getList();
  }

  @Override
  public HashMap<String, Object> getDetail(int purchaseNo) throws Exception {
    return purchaseDao.getDetail(purchaseNo);
  }

  @Override
  public int add(HashMap<String,String> map) throws Exception {
      int count = purchaseDao.insert(map);
      
      HashMap<String,String> photoMap = new HashMap<>();
      if (map.get("photoList").length() > 0) {
        String[] list = map.get("photoList").split(",");
        for (int i = 0; i < list.length; i++) {
          photoMap.put("photoPath", list[i]);
        }
        purchaseDao.insertPhoto(photoMap);
      }
      
      return count;
  }
}
