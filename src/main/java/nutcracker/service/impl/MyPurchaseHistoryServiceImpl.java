package nutcracker.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.MyWishListDao;
import nutcracker.service.MyPurchaseHistoryService;

@Service
public class MyPurchaseHistoryServiceImpl implements MyPurchaseHistoryService {
  @Autowired MyWishListDao myWishListDao;

}
