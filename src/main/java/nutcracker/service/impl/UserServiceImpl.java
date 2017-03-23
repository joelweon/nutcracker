package nutcracker.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
  public User getOneByEmailPassword(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    User user = userDao.getOneByEmailPassword(paramMap);
    
    if (user == null) {
      return null;
    }
    return user;
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
    if (userDao.countByNo(user.getMemberNo()) == 0) {
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

  @Override
  public int updateProfile(HashMap<String, Object> map) throws Exception {
    int updateCnt = memberDao.updateImg(map);
    System.out.println("updateProfile-map: " + map);
    System.out.println("updateCnt: " + updateCnt);
    if (updateCnt <= 0) { return 0; }
    return updateCnt;
  }

  public int updateAddress(User user) throws Exception {
    return userDao.updateAddress(user);
  }

  @Override
  public List<HashMap<String, Object>> listReportMember(int pageNo, int pageSize) throws Exception {
    HashMap<String, Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    List<HashMap<String, Object>> map = userDao.listReportMember(paramMap);
    return map;
  }

  @Override
  public HashMap<String, Object> detailReportMember(int memberNo) throws Exception {
    return userDao.detailReportMember(memberNo);
  }

  @Override
  public int updateStatus(User user) throws Exception {
    return userDao.updateStatus(user);
  }

}
