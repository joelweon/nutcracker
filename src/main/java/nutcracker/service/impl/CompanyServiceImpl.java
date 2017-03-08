package nutcracker.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.CompanyDao;
import nutcracker.domain.Company;
import nutcracker.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
  @Autowired CompanyDao companyDao;

  @Override
  public ArrayList<Company> getParents() throws Exception {
    return companyDao.getParents();
  }
  
  @Override
  public ArrayList<Company> getChildren(String parent) throws Exception {
    return companyDao.getChildren(parent);
  }

}
