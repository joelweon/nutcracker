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
}
