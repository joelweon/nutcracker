package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Company;

public interface CompanyDao {
  ArrayList<Company> getParents() throws Exception;
}
