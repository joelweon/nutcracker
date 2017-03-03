package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface CommentDao {
  List<HashMap<String, Object>> getCommentList(int ownNo) throws Exception;
  List<HashMap<String, Object>> getBoycottCommentList(int ownNo) throws Exception;
  int getBoycottCommentCount(int ownNo) throws Exception;
  int insertBoycottComment(HashMap<String, String> map) throws Exception;
  int insertBoycottCommentRel(HashMap<String, String> map) throws Exception;
}
