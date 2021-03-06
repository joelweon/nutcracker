package nutcracker.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.BoycottDao;
import nutcracker.dao.CommentDao;
import nutcracker.domain.Boycott;
import nutcracker.service.BoycottService;

@Service
public class BoycottServiceImpl implements BoycottService{
  @Autowired BoycottDao boycottDao;
  @Autowired CommentDao commentDao;

  @Override
  public List<Boycott> getList() throws Exception {
    return boycottDao.getList();
  }
  
  @Override
  public List<Boycott> getListYear(int year) throws Exception {
    return boycottDao.getListYear(year);
  }
  
  @Override
  public List<Boycott> getMyBoycottList(int memberNo) throws Exception {
    
    return boycottDao.getMyboycottList(memberNo);
  }

  @Override
  public Boycott getDetail(int no) throws Exception {
    return boycottDao.getOne(no);
  }
  
  @Override
  public Boycott getOne(int boycottNo) throws Exception {
    return boycottDao.getOne(boycottNo);
  }

  @Override
  public int add(Boycott boycott) throws Exception {
    
    boycottDao.insert(boycott);
    
    if(boycott.getNewsList().size() > 0) {
      boycottDao.insertNews(boycott);
    }
    return 0;
  }
  
  @Override
  public int addRelation(Boycott boycott) throws Exception {
    boycottDao.insertRelation(boycott);
    return 0;
  }
  
  @Override
  public int deleteRelation(Boycott boycott) throws Exception {
    
    boycottDao.deleteRelation(boycott);
    
    return 0;
  }

  @Override
  public int delete(int no) throws Exception {
    boycottDao.deleteNews(no);  // 불매운동 기사를 지움
    commentDao.deleteBoycottCmts(no);
    
    int count = boycottDao.delete(no);
    
    return count;
  }

  @Override
  public int update(Boycott boycott) throws Exception {
    
    boycottDao.deleteNews(boycott.getBoycottNo());
    
    if (boycott.getNewsList().size() > 0) {
      boycottDao.insertNews(boycott);
    }
    
    return boycottDao.update(boycott);
  }
  
  @Override
  public int updateBoycottCount(String boycottNo) throws Exception {
    return boycottDao.updateBoycott(boycottNo);
  }
  @Override
  public int cancelBoycottCount(String boycottNo) throws Exception {
    return boycottDao.cancelBoycott(boycottNo); 
  }

  @Override
  public int updateViewCount(int boycottNo) throws Exception {
    return boycottDao.updateView(boycottNo);
  }

  @Override
  public int updateHoduCount(int boycottNo) throws Exception {
    return boycottDao.updateHodu(boycottNo); 
  }

  @Override
  public List<Boycott> getSearch(String keyword) throws Exception {
    return boycottDao.getSearch(keyword);
  }
  
  @Override
  public List<Boycott> getBoycottNames() throws Exception {
    return boycottDao.getBoycottNames();
  }
  
  
}