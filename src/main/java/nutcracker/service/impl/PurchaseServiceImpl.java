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
}