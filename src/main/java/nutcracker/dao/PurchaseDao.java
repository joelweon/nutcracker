package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Purchase;

public interface PurchaseDao {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int purchaseNo) throws Exception;
  int insert(Purchase purchase) throws Exception;
  int insertPhoto(Purchase purchase) throws Exception;
}
