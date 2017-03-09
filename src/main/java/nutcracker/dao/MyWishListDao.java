package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface MyWishListDao {
  List<HashMap<String, Object>> getList(int memberNo) throws Exception;
  int insert(HashMap<String, Object> map) throws Exception;
}
