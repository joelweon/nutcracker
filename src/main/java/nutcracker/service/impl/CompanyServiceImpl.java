package nutcracker.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.CompanyDao;
import nutcracker.domain.Company;
import nutcracker.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
  @Autowired CompanyDao companyDao;

  @Override
  public int[] getBoycottNo(int memberNo) throws Exception {
    return companyDao.getBoycottNo(memberNo);
  }
  
  @Override
  public List<Object> getBoycottComp(int memberNo) throws Exception {
    return companyDao.getBoycottComp(memberNo);
  }
  
  @Override
  public Company getParent(int parentNo) throws Exception {
   return companyDao.getParent(parentNo);
  }
  
  @Override
  public ArrayList<Company> getChildren(int parentNo) throws Exception {
    return companyDao.getChildren(parentNo);
  }

}
