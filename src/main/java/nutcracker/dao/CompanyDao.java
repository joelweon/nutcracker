package nutcracker.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import nutcracker.domain.Company;

public interface CompanyDao {
  int[] getBoycottNo(int memberNo) throws Exception;
  List<Object> getAllCompany() throws Exception;
  List<Object> getBoycottComp(int memberNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
  ArrayList<Company> searchMaker(String keyword) throws Exception;
  int addParent(HashMap<String,Object> parent) throws Exception;
  int setParentNo(int parentNo) throws Exception;
  int addChild(Company child) throws Exception;
}
