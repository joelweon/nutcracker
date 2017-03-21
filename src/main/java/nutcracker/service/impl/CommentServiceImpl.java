package nutcracker.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.CommentDao;
import nutcracker.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
  @Autowired CommentDao commentDao;

  @Override
  public List<HashMap<String, Object>> getReviewCmtList(int ownNo) throws Exception {
    return commentDao.getReviewCmtList(ownNo);
  }
  
  @Override
  public int addReviewCmt(HashMap<String, Object> map) throws Exception {
    if (commentDao.insertReviewCmt(map) > 0) {
     return Integer.parseInt(map.get("commentNo").toString());
    } else {
      return 0;
    }
  }
  
  @Override
  public int addReviewCmtCon(HashMap<String, Object> map) throws Exception {
    return commentDao.insertReviewCmtCon(map);
  }
  
  @Override
  public int deleteReviewCmts(String ownNo) throws Exception {
    return commentDao.deleteReviewCmts(ownNo);
  }
  
  @Override
  public List<HashMap<String, Object>> getBoycottCmtList(int ownNo) throws Exception {
    return commentDao.getBoycottCommentList(ownNo);
  }

  @Override
  public int getBoycottCmtCount(int ownNo) throws Exception {
    return commentDao.getBoycottCommentCount(ownNo);
  }

  @Override
  public int addBoycottCmt(HashMap<String, String> map) throws Exception {
    int count = commentDao.insertBoycottComment(map);
    /*commentDao.insertBoycottCommentRel(map);*/
    return count;
  }

  @Override
  public int addBoycottCmtRel(HashMap<String, String> map) throws Exception {
    int count = commentDao.insertBoycottCommentRel(map);
    return count; 
  }

  @Override
  public List<HashMap<String, Object>> getPuchaseCmtList(int ownNo) throws Exception {
    return commentDao.getPurchaseCommentList(ownNo);
  }

  @Override
  public int addPurchaseCmt(HashMap<String, String> map) throws Exception {
    int count = commentDao.insertPurchaseComment(map);
    return count;
  }

  @Override
  public int addPurchaseCmtRel(HashMap<String, String> map) throws Exception {
    int count = commentDao.insertPurchaseCommentRel(map);
    return count;
  }

  @Override
  public int commentReport(HashMap<String, String> map) throws Exception {
    int count = commentDao.insertCommentReport(map);
    return count;
  }

  @Override
  public int updateReportCmt(HashMap<String, String> map) throws Exception {
    int count = commentDao.updateReportCmt(map);
    return count;
  }

  @Override
  public int existReport(HashMap<String, String> map) throws Exception {
    int count = commentDao.countReport(map);
    return count;
  }
}
