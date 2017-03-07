package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Purchase;

public interface PurchaseDao {
  List<HashMap<String, Object>> getList() throws Exception;
  Purchase getOne(int purchaseNo) throws Exception;
  HashMap<String, Object> getDetail(int purchaseNo) throws Exception;
  int insert(HashMap<String,String> map) throws Exception;
  int insertPhoto(HashMap<String,String> map) throws Exception;
}
