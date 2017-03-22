package nutcracker.dao;

import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Purchase;

public interface PurchaseDao {
  List<HashMap<String, Object>> getList() throws Exception;
  Purchase getOne(int purchaseNo) throws Exception;
  HashMap<String, Object> getDetail(int purchaseNo) throws Exception;
  int insert(HashMap<String,Object> map) throws Exception;
  int insertPhoto(HashMap<String,Object> map) throws Exception;
  List<HashMap<String, Object>> getDetailPhoto(int purchaseNo) throws Exception;
  List<HashMap<String, Object>> searchDeal(String keyword) throws Exception;
  List<HashMap<String, Object>> searchExceptFinish(String keyword) throws Exception;
  int updateApplicant(int purchaseNo) throws Exception;
}
