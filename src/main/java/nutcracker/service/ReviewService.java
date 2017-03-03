package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface ReviewService {
  int getSize() throws Exception;
  List<HashMap<String, Object>> getList(int pageNo, int pageSize) throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
  int add(HashMap<String, Object> map) throws Exception;
  int update(HashMap<String, Object> map) throws Exception;
}
