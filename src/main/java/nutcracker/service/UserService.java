package nutcracker.service;

import java.util.ArrayList;

import nutcracker.domain.User;

public interface UserService {
  ArrayList<User> getList() throws Exception;
  User getOnebyEmail(String email) throws Exception;
  int add(User user) throws Exception;
  int update(User user) throws Exception;
  int delete(int userNo) throws Exception;
}
