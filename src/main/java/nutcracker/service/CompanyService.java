package nutcracker.service;

import java.util.ArrayList;

import nutcracker.domain.Company;

public interface CompanyService {
  ArrayList<Company> getParents() throws Exception;
  ArrayList<Company> getChildren(String parent) throws Exception;
}
