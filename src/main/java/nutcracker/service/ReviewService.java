package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface ReviewService {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
  int add(HashMap<String, Object> map) throws Exception;
}
