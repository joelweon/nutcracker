package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

public interface MyPurchaseHistoryDao {
  List<HashMap<String, Object>> getList(int memberNo) throws Exception;
  int insert(HashMap<String, Object> map) throws Exception;
}
