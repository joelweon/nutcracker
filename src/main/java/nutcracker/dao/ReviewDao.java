package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface ReviewDao {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
  int insert(HashMap<String, Object> map) throws Exception;
  int insertPhoto(HashMap<String, Object> map) throws Exception;
}
