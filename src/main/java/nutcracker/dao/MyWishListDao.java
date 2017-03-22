package nutcracker.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface MyWishListDao {
  List<HashMap<String, Object>> getList(Map<String, Object> paramMap) throws Exception;
  int insert(HashMap<String, Object> map) throws Exception;
  int delete(int wishNo) throws Exception;
  int countAll(int memberNo) throws Exception;
}
