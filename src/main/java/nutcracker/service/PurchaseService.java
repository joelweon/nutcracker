package nutcracker.service;

import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Purchase;

public interface PurchaseService {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int purchaseNo) throws Exception;
  int add(Purchase purchase) throws Exception;
}
