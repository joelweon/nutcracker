package nutcracker.dao;

import java.util.ArrayList;
import java.util.List;

import nutcracker.domain.Company;

public interface CompanyDao {
  int[] getBoycottNo(int memberNo) throws Exception;
  List<Object> getBoycottComp(int memberNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
  ArrayList<Company> searchMaker(String keyword) throws Exception;
}
