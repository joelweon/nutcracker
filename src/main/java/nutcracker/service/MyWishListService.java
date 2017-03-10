package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface MyWishListService {
  List<HashMap<String, Object>> getList(int memberNo) throws Exception;
  int add(HashMap<String, Object> map) throws Exception;
}
