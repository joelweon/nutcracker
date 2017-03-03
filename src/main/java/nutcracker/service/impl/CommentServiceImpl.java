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
  public List<HashMap<String, Object>> getList(int ownNo) throws Exception {
    return commentDao.getCommentList(ownNo);
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
