package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.User;

public interface UserDao {
  ArrayList<User> getList() throws Exception;
  User getOneByEmail(String email) throws Exception;
  int countByEmail(String email) throws Exception;
  int countByNo(int userNo) throws Exception;
  int insert(User user) throws Exception;
  int update(User user) throws Exception;
  int delete(int userNo) throws Exception;
}
