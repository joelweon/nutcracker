package nutcracker.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.MyPurchaseHistoryDao;
import nutcracker.service.MyPurchaseHistoryService;

@Service
public class MyPurchaseHistoryServiceImpl implements MyPurchaseHistoryService {
  @Autowired MyPurchaseHistoryDao myPurchaseHistoryDao;

  @Override
  public int add(HashMap<String, Object> map) throws Exception {
    return myPurchaseHistoryDao.insert(map);
  }

}
