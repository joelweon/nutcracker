package nutcracker.dao;

import java.util.ArrayList;

import nutcracker.domain.Member;

public interface MemberDao {
  ArrayList<Member> getList() throws Exception;
  boolean exist(int memberNo) throws Exception;
  boolean exist(String email) throws Exception;
  boolean exist(String email, String password) throws Exception;
  void insert(Member member) throws Exception;
  void update(Member member) throws Exception;
  void delete(int memberNo) throws Exception;
  Member getOne(int memberNo) throws Exception;
  Member getOne(String email) throws Exception;
  Member getOne(String email, String password) throws Exception;
}
