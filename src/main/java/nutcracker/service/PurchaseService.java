package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface PurchaseService {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int purchaseNo) throws Exception;
}