package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Company;

public interface CompanyDao {
  ArrayList<Company> getBoycottComp(int memberNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
}
