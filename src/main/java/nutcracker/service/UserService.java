package nutcracker.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import nutcracker.domain.User;

public interface UserService {
  ArrayList<User> getList() throws Exception;
  User getOneByEmailPassword(String email, String password) throws Exception;
  int add(User user) throws Exception;
  int update(User user) throws Exception;
  int delete(int userNo) throws Exception;
  int updateProfile(HashMap<String, Object> map) throws Exception;
  int updateAddress(User user) throws Exception;
  int countReportMember() throws Exception;
  List<HashMap<String, Object>> listReportMember(int pageNo, int pageSize) throws Exception;
  int updateStatus(User user) throws Exception;
}
