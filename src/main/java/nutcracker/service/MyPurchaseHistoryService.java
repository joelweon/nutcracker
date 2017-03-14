package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface MyPurchaseHistoryService {
  int add(HashMap<String, Object> map) throws Exception;
  List<HashMap<String, Object>> getList(int memberNo) throws Exception;
}
