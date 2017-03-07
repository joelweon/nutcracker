package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface CommentService {
  List<HashMap<String, Object>> getReviewCmtList(int ownNo) throws Exception;
  int addReviewCmt(HashMap<String, Object> map) throws Exception;
  int addReviewCmtCon(HashMap<String, Object> map) throws Exception;
  List<HashMap<String, Object>> getBoycottCmtList(int ownNo) throws Exception;
  int getBoycottCmtCount(int ownNo) throws Exception;
  int addBoycottCmt(HashMap<String, String> map) throws Exception;
  int addBoycottCmtRel(HashMap<String, String> map) throws Exception;
}
