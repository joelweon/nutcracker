package nutcracker.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Company;

public interface PurchaseService {
  List<HashMap<String, Object>> getList() throws Exception;
  HashMap<String, Object> getDetail(int purchaseNo) throws Exception;
  int add(HashMap<String,Object> map) throws Exception;
  ArrayList<Company> searchMaker(HashMap<String, Object> map) throws Exception;
  ArrayList<Company> searchBoycott(HashMap<String, Object> map) throws Exception;
  List<HashMap<String, Object>> searchDeal(String keyword) throws Exception;
  List<HashMap<String, Object>> searchExceptFinish(String keyword) throws Exception;
  int updateApplicant(int purchaseNo) throws Exception;
}
