package nutcracker.service;

import java.util.HashMap;

public interface MyPurchaseHistoryService {
  int add(HashMap<String, Object> map) throws Exception;
  HashMap<String, Object> getList(HashMap<String, Object> map) throws Exception;
}
