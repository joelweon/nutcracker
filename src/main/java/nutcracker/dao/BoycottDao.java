package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Boycott;

public interface BoycottDao {
  ArrayList<Boycott> getList() throws Exception;
  int insert(Boycott boycott) throws Exception;
  Boycott getOne(int boycottNo) throws Exception;
  int update(Boycott boycott) throws Exception;
  int delete(int boycottNo) throws Exception;
  
}
