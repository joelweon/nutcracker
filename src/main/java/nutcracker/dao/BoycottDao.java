package nutcracker.dao;

import java.util.ArrayList;
import java.util.List;

import nutcracker.domain.Boycott;

public interface BoycottDao {
  ArrayList<Boycott> getList() throws Exception;
  ArrayList<Boycott> getListYear(int year) throws Exception;
  ArrayList<Boycott> getMyboycottList(int memberNo) throws Exception;
  int insert(Boycott boycott) throws Exception;
  Boycott getOne(int boycottNo) throws Exception;
  int update(Boycott boycott) throws Exception;
  int delete(int boycottNo) throws Exception;
  int insertNews(Boycott Boycott) throws Exception;
  Boycott getOneWithNews(int boycottNo) throws Exception;
  int deleteNews(int boycottNo) throws Exception;
  int updateView(int boycottNo) throws Exception;
  int updateHodu(int boycottNo) throws Exception;
  int updateBoycott(String boycottNo) throws Exception;
  int cancelBoycott(String boycottNo) throws Exception;
  int insertRelation(Boycott boycott) throws Exception;
  int deleteRelation(Boycott boycott) throws Exception;
  ArrayList<Boycott> getSearch(String keyword) throws Exception;
  List<Boycott> getBoycottNames() throws Exception;
}
