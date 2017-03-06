package nutcracker.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.ReviewDao;
import nutcracker.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {
  @Autowired ReviewDao reviewDao;
  
  @Override
  public int getSize() throws Exception {
    return reviewDao.countAll();
  }

  @Override
  public List<HashMap<String, Object>> getList(int pageNo, int pageSize) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    return reviewDao.getList(paramMap);
  }
  
  @Override
  public int updateRead(String reviewNo) throws Exception {
    return reviewDao.updateRead(reviewNo);
  }
  
  @Override
  public int updateHodu(String reviewNo) throws Exception {
    return reviewDao.updateHodu(reviewNo);
  }

  @Override
  public HashMap<String, Object> getDetail(int reviewNo) throws Exception {
    return reviewDao.getDetail(reviewNo);
  }

  @Override
  public int add(HashMap<String, Object> map) throws Exception {
    int insertCnt =  reviewDao.insert(map);
    if (insertCnt <= 0) { return 0; }
    /*int insertPhotoCnt = reviewDao.insertPhoto(map);
    System.out.println("insertCnt : " + insertCnt);
    if (insertPhotoCnt <= 0) { return 0; }*/
    return insertCnt;
  }
  
  @Override
  public int update(HashMap<String, Object> map) throws Exception {
    int updateCnt = reviewDao.update(map);
    if (updateCnt <= 0) { return 0; }
    return updateCnt;
  }
  
  @Override
  public int delete(int reviewNo) throws Exception {
    int deleteCnt = reviewDao.delete(reviewNo);
    if (deleteCnt <= 0) { return 0; }
    return deleteCnt;
  }
}
