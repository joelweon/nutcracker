package nutcracker.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Company;

public interface CompanyService {
  int[] getBoycottNo (int memberNo) throws Exception;
  List<Object> getAllCompany() throws Exception;
  List<Object> getBoycottComp(int memberNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
  int addParent(HashMap<String,Object> map) throws Exception;
  int setParentNo(int parentNo) throws Exception;
  int addChild(Company child) throws Exception;
}
