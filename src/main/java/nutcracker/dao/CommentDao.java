package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface CommentDao {
  List<HashMap<String, Object>> getReviewCmtList(int ownNo) throws Exception;
  int insertReviewCmt(HashMap<String, Object> map) throws Exception;
  int insertReviewCmtCon(HashMap<String, Object> map) throws Exception;
  int deleteReviewCmts(String ownNo) throws Exception;
  List<HashMap<String, Object>> getBoycottCommentList(int ownNo) throws Exception;
  int getBoycottCommentCount(int ownNo) throws Exception;
  int insertBoycottComment(HashMap<String, String> map) throws Exception;
  int insertBoycottCommentRel(HashMap<String, String> map) throws Exception;
  List<HashMap<String, Object>> getProductCommentList(int ownNo) throws Exception;
}
