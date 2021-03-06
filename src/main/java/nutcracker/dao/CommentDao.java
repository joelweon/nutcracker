package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface CommentDao {
  List<HashMap<String, Object>> getReviewCmtList(int ownNo) throws Exception;
  int insertReviewCmt(HashMap<String, Object> map) throws Exception;
  int insertReviewCmtCon(HashMap<String, Object> map) throws Exception;
  int deleteReviewCmts(String ownNo) throws Exception;
  int deleteBoycottCmts(int boycottNo) throws Exception;
  List<HashMap<String, Object>> getBoycottCommentList(int ownNo) throws Exception;
  int getBoycottCommentCount(int ownNo) throws Exception;
  int insertBoycottComment(HashMap<String, String> map) throws Exception;
  int insertBoycottCommentRel(HashMap<String, String> map) throws Exception;
  List<HashMap<String, Object>> getPurchaseCommentList(int ownNo) throws Exception;
  int insertPurchaseComment(HashMap<String, String> map) throws Exception;
  int insertPurchaseCommentRel(HashMap<String, String> map) throws Exception;
  int insertCommentReport(HashMap<String, String> map) throws Exception;
  int updateReportCmt(HashMap<String, String> map) throws Exception;
  int countReport(HashMap<String, String> map) throws Exception;
  List<HashMap<String, Object>> getCommentReportList(HashMap<String, Object> paramMap) throws Exception;
  List<String> getCommentReportReasons(int ownNo) throws Exception;
  int countTotalList() throws Exception;
  int existCmtInBot(int commentNo) throws Exception;
  int deleteReportCmt(int commentNo) throws Exception;
  int deleteCmtReportReason(int commentNo) throws Exception;
  int deleteReviewCmtRelByCtno(int commentNo) throws Exception;
  int deleteBotCmtRelByCtno(int commentNo) throws Exception;
  int deleteOneBoycottCmt(int commentNo) throws Exception;
  int deleteOneReviewCmt(int commentNo) throws Exception;
  int deleteCmt(int commentNo) throws Exception;
  int updateCmt(HashMap<String, String> map) throws Exception;
}
