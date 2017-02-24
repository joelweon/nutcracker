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
  public List<HashMap<String, Object>> getList() throws Exception {
    return reviewDao.getList();
  }

  @Override
  public HashMap<String, Object> getDetail(int reviewNo) throws Exception {
    return reviewDao.getDetail(reviewNo);
  }

  @Override
  public int add(HashMap<String, Object> map) throws Exception {
    return reviewDao.insert(map);
  }
  
  
}
