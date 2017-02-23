package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.User;

public interface UserDao {
  ArrayList<User> getList() throws Exception;
  User getOnebyEmail(String email) throws Exception;
  int count(String email) throws Exception;
  void insert(User user) throws Exception;
  void update(User user) throws Exception;
  void delete(int userNo) throws Exception;
}
