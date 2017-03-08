package nutcracker.service;

import java.util.HashMap;
import java.util.List;


public interface ReviewService {
  int getSize() throws Exception;
  int updateRead(String reviewNo) throws Exception;
  int updateHodu(String reviewNo) throws Exception;
  List<HashMap<String, Object>> getList(int pageNo, int pageSize) throws Exception;
  List<HashMap<String, Object>> getListMy(int pageNo, int pageSize, int memberNo) throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
  int add(HashMap<String, Object> map) throws Exception;
  int update(HashMap<String, Object> map) throws Exception;
  int delete(int reviewNo) throws Exception;
  List<HashMap<String, Object>> search(int pageNo, int pageSize, String range, String keyword) throws Exception;
}
