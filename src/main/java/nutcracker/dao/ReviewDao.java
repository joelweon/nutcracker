package nutcracker.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface ReviewDao {
  int countAll() throws Exception;
  List<HashMap<String, Object>> getList(Map<String, Object> paramMap) throws Exception;
  List<HashMap<String, Object>> getListMy(Map<String, Object> paramMap) throws Exception;
  List<HashMap<String, Object>> getReportList(Map<String, Object> paramMap) throws Exception;
  int countReport() throws Exception;
  int updateRead(String reviewNo) throws Exception;
  int updateHodu(String reviewNo) throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
  int insert(HashMap<String, Object> map) throws Exception;
  int insertPhoto(HashMap<String, Object> map) throws Exception;
  int update(HashMap<String, Object> map) throws Exception;
  int deleteReportRls(int reviewNo) throws Exception;
  int delete(int reviewNo) throws Exception;
  int deleteReviewComment(int reviewNo) throws Exception;
  List<HashMap<String, Object>> searchInTitleContent(Map<String, Object> paramMap) throws Exception;
  List<HashMap<String, Object>> searchInTitle(Map<String, Object> paramMap) throws Exception;
  List<HashMap<String, Object>> searchInAuth(Map<String, Object> paramMap) throws Exception;
  int checkReport(HashMap<String, Object> paramMap) throws Exception;
  int reviewReport(HashMap<String, Object> paramMap) throws Exception;
  int reportPlus(int reviewNo) throws Exception;
  int resetReport(int reviewNo) throws Exception;
}
