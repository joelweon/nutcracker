package nutcracker.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.BoycottDao;
import nutcracker.domain.Boycott;
import nutcracker.service.BoycottService;

@Service
public class BoycottServiceImpl implements BoycottService{
  @Autowired BoycottDao boycottDao;

  public List<Boycott> getList() throws Exception {
    return boycottDao.getList();
  }

  public Boycott getDetail(int no) throws Exception {
    return boycottDao.getOneWithNews(no);
  }

  public int add(Boycott boycott) throws Exception {
    System.out.println("11111");
    
    boycottDao.insert(boycott);
    
    if(boycott.getNewsList().size() > 0) {
      boycottDao.insertNews(boycott);
    }
    System.out.println("222222");
    return 0;
  }

  public int delete(int no) throws Exception {
    boycottDao.deleteNews(no);  // 불매운동 기사를 지움
    
    int count = boycottDao.delete(no);
    
    return count;
  }

  public int update(Boycott boycott) throws Exception {
    
    boycottDao.deleteNews(boycott.getBoycottNo());
    
    if (boycott.getNewsList().size() > 0) {
      boycottDao.insertNews(boycott);
    }
    
    return boycottDao.update(boycott);
  }

}