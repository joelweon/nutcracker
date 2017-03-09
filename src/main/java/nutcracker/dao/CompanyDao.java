package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Company;

public interface CompanyDao {
  ArrayList<Company> getParents() throws Exception;
  ArrayList<Company> getChildren(String parent) throws Exception;
  ArrayList<String> searchMaker(String keyword) throws Exception;
}
