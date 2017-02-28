package nutcracker.service;

import java.util.List;

import nutcracker.domain.Boycott;

public interface BoycottService {
  List<Boycott> getList() throws Exception;
  Boycott getDetail(int no) throws Exception;
  Boycott getOne(int boycottNo) throws Exception;
  int add(Boycott boycott) throws Exception;
  int delete(int no) throws Exception;
  int update(Boycott boycott) throws Exception;
}
