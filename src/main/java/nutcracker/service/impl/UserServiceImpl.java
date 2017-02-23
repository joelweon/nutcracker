package nutcracker.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.MemberDao;
import nutcracker.dao.UserDao;
import nutcracker.domain.Member;
import nutcracker.domain.User;
import nutcracker.service.UserService;

@Service
public class UserServiceImpl implements UserService {
  @Autowired MemberDao memberDao;
  @Autowired UserDao userDao;

  @Override
  public ArrayList<User> getList() throws Exception {
    return userDao.getList();
  }

  @Override
  public User getOnebyEmail(String email) throws Exception {
    return userDao.getOnebyEmail(email);
  }

  @Override
  public int add(User user) throws Exception {
    if (userDao.countByEmail(user.getEmail()) != 0) {
      throw new Exception("동일한 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(user.getEmail()) == 0) {
      memberDao.insert(user);
    } else {
      Member member = memberDao.getOne(user.getEmail());
      user.setUserNo(member.getMemberNo());
    }
    
    return userDao.insert(user);
  }

  @Override
  public int update(User user) throws Exception {
    if (userDao.countByEmail(user.getEmail()) == 0) {
      throw new Exception("회원정보를 다시 확인해주세요");
    }
    memberDao.update(user);
    return userDao.update(user);
  }

  @Override
  public int delete(int userNo) throws Exception {
    if (userDao.countByNo(userNo) == 0) {
      throw new Exception("회원정보를 다시 확인해주세요");
    }
    int count = userDao.delete(userNo);
    memberDao.delete(userNo);
    return count;
  }

}
