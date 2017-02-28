package nutcracker.service;

import java.util.HashMap;
import java.util.List;

public interface CommentService {
  List<HashMap<String, Object>> getList(int ownNo) throws Exception;
  List<HashMap<String, Object>> getBoycottCmtList(int ownNo) throws Exception;
}
