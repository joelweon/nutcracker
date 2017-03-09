package nutcracker.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.CompanyDao;
import nutcracker.dao.PurchaseDao;
import nutcracker.domain.Company;
import nutcracker.service.PurchaseService;

@Service
public class PurchaseServiceImpl implements PurchaseService {
  @Autowired PurchaseDao purchaseDao;
  @Autowired CompanyDao companyDao;

  @Override
  public List<HashMap<String, Object>> getList() throws Exception {
    return purchaseDao.getList();
  }

  @Override
  public HashMap<String, Object> getDetail(int purchaseNo) throws Exception {
    return purchaseDao.getDetail(purchaseNo);
  }

  @Override
  public int add(HashMap<String,Object> map) throws Exception {
      int count = purchaseDao.insert(map);
      
      HashMap<String,Object> photoMap = new HashMap<>();
      if (map.get("photoList") != null) {
        String[] photo = map.get("photoList").toString().split(",");
        for (int i = 0; i < photo.length; i++) {
          photoMap.put("purchaseNo", map.get("purchaseNo"));
          photoMap.put("photoPath", photo[i].trim());
          purchaseDao.insertPhoto(photoMap);
        }
      }
      
      return count;
  }

  @Override
  public ArrayList<Company> searchMaker(HashMap<String, Object> map) throws Exception {
    String keyword = (String)map.get("keyword");
    ArrayList<Company> result;
    if (!keyword.equals("")) {
      result = companyDao.searchMaker(keyword);
    } else {
      result = new ArrayList<>();
    }
    return result;
  }
}
