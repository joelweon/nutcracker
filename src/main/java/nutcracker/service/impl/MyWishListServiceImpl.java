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
  public List<HashMap<String, Object>> getList(int pageNo, int pageSize, int memberNo) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    paramMap.put("memberNo", memberNo);
    return myWishListDao.getList(paramMap);
  }

  @Override
  public int delete(int wishNo) throws Exception {
    int deleteCnt = myWishListDao.delete(wishNo);
    System.out.println(deleteCnt);
    if (deleteCnt <= 0) { return 0; }
    return deleteCnt;
  }
  
  @Override
  public int getSize() throws Exception {
    return myWishListDao.countAll();
  }
}
