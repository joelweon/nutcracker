package nutcracker.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.MemberDao;
import nutcracker.domain.Member;
import nutcracker.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  @Autowired MemberDao memberDao;
  
  public Member getMemberInfo(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Member member = memberDao.getOneByEmailPassword(paramMap);
    
    if (member == null) {
      return null;
    }
    return memberDao.getOneByNo(member.getMemberNo());
  }

  @Override
  public Member getMember(int memberNo) throws Exception {
    HashMap<String,Integer> paramMap = new HashMap<>();
    paramMap.put("memberNo", memberNo);
    
    Member member = memberDao.getOneByNo(memberNo);
    return memberDao.getOneByNo(member.getMemberNo());
  }
}
