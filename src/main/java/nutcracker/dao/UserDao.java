package nutcracker.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import nutcracker.domain.User;

public interface UserDao {
  ArrayList<User> getList() throws Exception;
  User getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
  User getOneByNo(int memberNo) throws Exception;
  int countByEmail(String email) throws Exception;
  int countByNo(int userNo) throws Exception;
  int insert(User user) throws Exception;
  int update(User user) throws Exception;
  int delete(int userNo) throws Exception;
  int updateAddress(User user) throws Exception;
  int countReportMember() throws Exception;
  List<HashMap<String, Object>> listReportMember(HashMap<String, Object> paramMap) throws Exception;
  HashMap<String, Object> detailReportMember(int memberNo) throws Exception;
  int updateStatus(User user) throws Exception;
}
