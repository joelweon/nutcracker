package nutcracker.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import nutcracker.dao.BoycottDao;
import nutcracker.domain.Boycott;
import nutcracker.service.BoycottService;

public class BoycottServiceImpl implements BoycottService{
  @Autowired BoycottDao boycottDao;

  public List<Boycott> getList() throws Exception {
    return boycottDao.getList();
  }

  public Boycott getDetail(int no) throws Exception {
    return boycottDao.getOne(no);
  }

  public int add(Boycott boycott) throws Exception {
    return boycottDao.insert(boycott);
  }

  public int delete(int no) throws Exception {
    
    int count = boycottDao.delete(no);
    return count;
  }

  public int update(Boycott boycott) throws Exception {
    return boycottDao.update(boycott);
  }

}