package nutcracker.service;

import nutcracker.domain.Member;

public interface AuthService {
  Member getMemberInfo(String email, String password) throws Exception;
  Member getMember(int memberNo) throws Exception;
}
