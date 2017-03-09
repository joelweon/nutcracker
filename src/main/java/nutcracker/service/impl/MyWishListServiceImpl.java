package nutcracker.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.MyWishListDao;
import nutcracker.service.MyWishListService;

@Service
public class MyWishListServiceImpl implements MyWishListService {
  @Autowired MyWishListDao myWishListDao;

  @Override
  public int add(HashMap<String, Object> map) throws Exception {
    int count = myWishListDao.insert(map);
    return count;
  }

  @Override
  public List<HashMap<String, Object>> getList(int memberNo) throws Exception {
    List<HashMap<String, Object>> map = myWishListDao.getList(memberNo);
    return map;
  }
}
