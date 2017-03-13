package nutcracker.service;

import java.util.ArrayList;

import nutcracker.domain.Company;

public interface CompanyService {
  int[] getBoycottNo (int memberNo) throws Exception;
  ArrayList<Company> getBoycottComp(int memberNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
}
