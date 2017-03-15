package nutcracker.service;

import java.util.List;

import nutcracker.domain.Boycott;

public interface BoycottService {
  List<Boycott> getList() throws Exception;
  List<Boycott> getListYear(int year) throws Exception;
  List<Boycott> getMyBoycottList(int memberNo) throws Exception;
  Boycott getDetail(int no) throws Exception;
  Boycott getOne(int boycottNo) throws Exception;
  int add(Boycott boycott) throws Exception;
  int delete(int no) throws Exception;
  int update(Boycott boycott) throws Exception;
  int updateViewCount(int BoycottNo) throws Exception;
  int updateHoduCount(int BoycottNo) throws Exception;
  int updateBoycottCount(String BoycottNo) throws Exception;
  int cancelBoycottCount(String BoycottNo) throws Exception;
  int addRelation(Boycott boycott) throws Exception;
  int deleteRelation(Boycott boycott) throws Exception;
  List<Boycott> getSearch(String keyword) throws Exception;
}
