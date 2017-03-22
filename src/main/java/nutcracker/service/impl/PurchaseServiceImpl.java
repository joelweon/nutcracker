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
    HashMap<String, Object> map = purchaseDao.getDetail(purchaseNo);
    List<HashMap<String, Object>> photoList = purchaseDao.getDetailPhoto(purchaseNo);
    ArrayList<String> photo = new ArrayList<>();
    for (int i = 0; i < photoList.size(); i++) {
      HashMap<String, Object> path = photoList.get(i);
      String realPath = path.get("PATH").toString();
      photo.add(realPath);
    }
    map.put("photo", photo);
    return map;
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
  
  @Override
  public List<HashMap<String, Object>> searchDeal(String keyword) throws Exception {
    return purchaseDao.searchDeal(keyword);
  }
  
  @Override
  public List<HashMap<String, Object>> searchExceptFinish(String keyword) throws Exception {
    return purchaseDao.searchExceptFinish(keyword);
  }

  @Override
  public int updateApplicant(int purchaseNo) throws Exception {
    return purchaseDao.updateApplicant(purchaseNo);
  }
}
