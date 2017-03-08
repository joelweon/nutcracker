package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Boycott;

public interface BoycottDao {
  ArrayList<Boycott> getList() throws Exception;
  int insert(Boycott boycott) throws Exception;
  Boycott getOne(int boycottNo) throws Exception;
  int update(Boycott boycott) throws Exception;
  int delete(int boycottNo) throws Exception;
  int insertNews(Boycott Boycott) throws Exception;
  Boycott getOneWithNews(int boycottNo) throws Exception;
  int deleteNews(int boycottNo) throws Exception;
  int updateView(int boycottNo) throws Exception;
  int updateHodu(int boycottNo) throws Exception;
  int updateBoycott(int boycottNo) throws Exception;
}
