package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Company;

public interface CompanyDao {
  int[] getBoycottNo(int memberNo) throws Exception;
  ArrayList<Company> getBoycottComp(int memberNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
  ArrayList<Company> searchMaker(String keyword) throws Exception;
}
