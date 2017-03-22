package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface CommentService {
  List<HashMap<String, Object>> getReviewCmtList(int ownNo) throws Exception;
  int addReviewCmt(HashMap<String, Object> map) throws Exception;
  int addReviewCmtCon(HashMap<String, Object> map) throws Exception;
  public int deleteReviewCmts(String onwNo) throws Exception;
  List<HashMap<String, Object>> getBoycottCmtList(int ownNo) throws Exception;
  int getBoycottCmtCount(int ownNo) throws Exception;
  int addBoycottCmt(HashMap<String, String> map) throws Exception;
  int addBoycottCmtRel(HashMap<String, String> map) throws Exception;
  List<HashMap<String, Object>> getPuchaseCmtList(int ownNo) throws Exception;
  int addPurchaseCmt(HashMap<String, String> map) throws Exception;
  int addPurchaseCmtRel(HashMap<String, String> map) throws Exception;
  int commentReport(HashMap<String, String> map) throws Exception;
  int updateReportCmt(HashMap<String, String> map) throws Exception;
  int existReport(HashMap<String, String> map) throws Exception;
  List<HashMap<String, Object>> getCommentReportList(int pageNo, int pageSize) throws Exception;
  int getSize() throws Exception;
}
