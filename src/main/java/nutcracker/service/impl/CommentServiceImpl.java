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
    return commentDao.insertReviewCmt(map);
  }
  
  @Override
  public int addReviewCmtCon(HashMap<String, Object> map) throws Exception {
    return commentDao.insertReviewCmtCon(map);
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
}
