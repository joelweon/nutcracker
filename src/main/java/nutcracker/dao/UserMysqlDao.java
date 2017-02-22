package nutcracker.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import nutcracker.domain.User;
import nutcracker.util.DataSource;

public class UserMysqlDao implements UserDao {
  DataSource ds;
  
  public void insert(User user) throws Exception {
    Connection con = ds.getConnection();
    try (
      PreparedStatement stmt = con.prepareStatement(
          "insert into user(uno,b_day,tel,zip,bas_adr,det_adr,job,gen,join_date) values(?,?,?,?,?,?,?,?,?)");
    ) {
      stmt.setInt(1, user.getMemberNo());
      stmt.setString(2, user.getBirthday());
      stmt.setString(3, user.getTel());
      stmt.setString(4, user.getPostcode());
      stmt.setString(5, user.getBasicAddress());
      stmt.setString(6, user.getDetailAddress());
      stmt.setString(7, user.getJob());
      stmt.setString(8, user.getGender());
      stmt.setString(9, user.getJoinDate());
    }
    finally {
      ds.returnConnection(con);
    }
  }

}
