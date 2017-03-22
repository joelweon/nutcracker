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
  public int getSizeMyBoard(int memberNo) throws Exception {
    return reviewDao.countAllMyBoard(memberNo);
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
  public int deleteReportRls(int reviewNo) throws Exception {
    int cnt = reviewDao.deleteReportRls(reviewNo);
    if (cnt <= 0) { return 0; }
    return cnt;
  }
  
  @Override
  public int delete(int reviewNo) throws Exception {
    int deleteCnt = reviewDao.delete(reviewNo);
    if (deleteCnt <= 0) { return 0; }
    return deleteCnt;
  }
  
  @Override
  public List<HashMap<String, Object>> search(int pageNo, int pageSize, String range, String keyword) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    paramMap.put("keyword", keyword);
    System.out.println("Impe.keyword: " + keyword);
    if ("제목+내용".equals(range)) {
      return reviewDao.searchInTitleContent(paramMap);
    } else if ("제목".equals(range)) {
      return reviewDao.searchInTitle(paramMap);
    } else {
      return reviewDao.searchInAuth(paramMap);
    }
  }

  @Override
  public List<HashMap<String, Object>> getListMy(int pageNo, int pageSize, int memberNo) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    paramMap.put("memberNo", memberNo);
    return reviewDao.getListMy(paramMap);
  }
  
  @Override
  public List<HashMap<String, Object>> getReportList(int pageNo, int pageSize) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo -1) * pageSize);
    paramMap.put("rowSize", pageSize);
    return reviewDao.getReportList(paramMap);
  }
  
  @Override
  public int getReportSize() throws Exception {
    return reviewDao.countReport();
  }
  
  @Override
  public int checkReport(HashMap<String, Object> paramMap) throws Exception {
    return reviewDao.checkReport(paramMap);
  }
  
  @Override
  public int report(HashMap<String, Object> paramMap) throws Exception {
    return reviewDao.reviewReport(paramMap);
  }
  
  @Override
  public int reportPlus(int reviewNo) throws Exception {
    return reviewDao.reportPlus(reviewNo);
  }
  
  @Override
  public int resetReport(int reviewNo) throws Exception {
    return reviewDao.resetReport(reviewNo);
  }
  
  @Override
  public int moveDelete(int reviewNo) throws Exception {
    return reviewDao.moveDelete(reviewNo);
  }
  
  @Override
  public List<HashMap<String, Object>> getDeleteList(int pageNo, int pageSize) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo -1) * pageSize);
    paramMap.put("rowSize", pageSize);
    return reviewDao.getDeleteList(paramMap);
  }
  
  @Override
  public int getDeleteSize() throws Exception {
    return reviewDao.countDelete();
  }
  
  @Override
  public int resetDelete(int reviewNo) throws Exception {
    return reviewDao.resetDelete(reviewNo);
  }
}
