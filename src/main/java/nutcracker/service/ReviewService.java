package nutcracker.service;

import java.util.HashMap;
import java.util.List;


public interface ReviewService {
  int getSize() throws Exception;
  int updateRead(String reviewNo) throws Exception;
  int updateHodu(String reviewNo) throws Exception;
  List<HashMap<String, Object>> getList(int pageNo, int pageSize) throws Exception;
  List<HashMap<String, Object>> getListMy(int pageNo, int pageSize, int memberNo) throws Exception;
  List<HashMap<String, Object>> getReportList(int pageNo, int pageSize) throws Exception;
  int getReportSize() throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
  int add(HashMap<String, Object> map) throws Exception;
  int update(HashMap<String, Object> map) throws Exception;
  int deleteReportRls(int reviewNo) throws Exception;
  int delete(int reviewNo) throws Exception;
  List<HashMap<String, Object>> search(int pageNo, int pageSize, String range, String keyword) throws Exception;
  int checkReport(HashMap<String, Object> paramMap) throws Exception;
  int report(HashMap<String, Object> paramMap) throws Exception;
  int reportPlus(int reviewNo) throws Exception;
  int resetReport(int reviewNo) throws Exception;
  int moveDelete(int reviewNo) throws Exception;
  List<HashMap<String, Object>> getDeleteList(int pageNo, int pageSize) throws Exception;
  int getDeleteSize() throws Exception;
  int resetDelete(int reviewNo) throws Exception;
}
