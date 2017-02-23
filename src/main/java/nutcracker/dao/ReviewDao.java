package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface ReviewDao {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int reviewNo) throws Exception;
}
