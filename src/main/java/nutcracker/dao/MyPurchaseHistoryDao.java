package nutcracker.dao;

import java.util.HashMap;

public interface MyPurchaseHistoryDao {
  HashMap<String, Object> getList(int memberNo) throws Exception;
  int insert(HashMap<String, Object> map) throws Exception;
}
