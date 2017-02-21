package nutcracker.dao;

import java.util.ArrayList;
import java.util.Map;

import nutcracker.domain.Member;

public interface MemberDao {
  ArrayList<Member> getList() throws Exception;
  int countByNo(int memberNo) throws Exception;
  int count(String email) throws Exception;
  int countByEmailPassword(Map<String,String> paramMap) throws Exception;
  int insert(Member member) throws Exception;
  int update(Member member) throws Exception;
  int delete(int memberNo) throws Exception;
  Member getOneByNo(int memberNo) throws Exception;
  Member getOne(String email) throws Exception;
  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
}
