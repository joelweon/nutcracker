package nutcracker.dao;

import java.util.ArrayList;
import java.util.Map;

import nutcracker.domain.User;

public interface UserDao {
  ArrayList<User> getList() throws Exception;
  User getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
  int countByEmail(String email) throws Exception;
  int countByNo(int userNo) throws Exception;
  int insert(User user) throws Exception;
  int update(User user) throws Exception;
  int delete(int userNo) throws Exception;
}
