package nutcracker.service;

import java.util.ArrayList;
import java.util.List;

import nutcracker.domain.Company;

public interface CompanyService {
  int[] getBoycottNo (int memberNo) throws Exception;
  List<Object> getBoycottComp(int memberNo) throws Exception;
  ArrayList<Company> getChildren(int parentNo) throws Exception;
  Company getParent(int parentNo) throws Exception;
}
