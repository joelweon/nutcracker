package nutcracker.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nutcracker.dao.MemberDao;
import nutcracker.domain.Member;
import nutcracker.service.MemberService;

@Service
public class MemberServiceInple implements MemberService {
  @Autowired MemberDao memberDao;

  @Override
  public List<Member> getList() throws Exception {
    return memberDao.getList();
  }

  @Override
  public Member getDetail(int no) throws Exception {
    return memberDao.getOneByNo(no);
  }

  @Override
  public int add(Member member) throws Exception {
    if (memberDao.count(member.getEmail()) > 0) {
      throw new Exception("같은 회원의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    return memberDao.insert(member);
  }

  @Override
  public int delete(int no) throws Exception {
    if (memberDao.countByNo(no) == 0) {
      throw new Exception("회원을 찾지 못했습니다.");
    }
    int count = memberDao.delete(no);
    return count;
  }

  @Override
  public int update(Member member) throws Exception {
    if (memberDao.countByNo(member.getMemberNo()) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    return memberDao.update(member);
  }
  
  
}
