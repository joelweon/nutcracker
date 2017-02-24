/*package nutcracker.sh;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import nutcracker.dao.UserDao;
import nutcracker.domain.User;
import nutcracker.util.DataSource;

@Repository("UserDao")
public class UserMysqlDao implements UserDao {
  @Autowired DataSource ds;

  @Override
  public ArrayList<User> getList() throws Exception {
    ArrayList<User> list = new ArrayList<>();
    Connection con = ds.getConnection();
    try (
        PreparedStatement stmt = con.prepareStatement(
        "select uno,b_day,tel,zip,bas_adr,det_adr,job,gen,join_date from user "
        + "left outer join memb on memb.mno=user.uno");
        ResultSet rs = stmt.executeQuery();
  ) {
      while (rs.next()) {
        User user = new User();
        user.setMemberNo(rs.getInt("uno"));
        user.setBirthday(rs.getString("b_day"));
        user.setTel(rs.getString("tel"));
        user.setPostcode(rs.getString("zip"));
        user.setBasicAddress(rs.getString("bas_adr"));
        user.setDetailAddress(rs.getString("det_adr"));
        user.setJob(rs.getString("job"));
        user.setGender(rs.getString("gen"));
        user.setJoinDate(rs.getString("join_date"));
        
        list.add(user);
      }
    }
    finally {
      ds.returnConnection(con);
    }
    return list;
  }

  @Override
  public User getOnebyEmail(String email) throws Exception {
    Connection con = ds.getConnection();
    try (
      PreparedStatement stmt = con.prepareStatement(
          "select uno,email,name,tel,bas_adr,det_adr,join_date,lst_date,out_type,out_cont "
          + "from user "
          + "left outer join memb on user.uno = memb.mno "
          + "where email=?");
    ) {
      stmt.setString(1, email);
      ResultSet rs = stmt.executeQuery();
      
      if (rs.next()) {
        User user = new User();
        user.setMemberNo(rs.getInt("uno"));
        user.setEmail(rs.getString("email"));
        user.setName(rs.getString("name"));
        user.setTel(rs.getString("tel"));
        user.setBasicAddress(rs.getString("bas_adr"));
        user.setDetailAddress(rs.getString("det_adr"));
        user.setJoinDate(rs.getString("join_date"));
        user.setLastDate(rs.getString("lst_date"));
        user.setOutType(rs.getInt("out_type"));
        user.setOutContent(rs.getString("out_cont"));
        rs.close();
        return user;
      } else {
        rs.close();
        return null;
      }
    }
    finally {
      ds.returnConnection(con);
    }
  }

  @Override
  public int count(String email) throws Exception {
    Connection con = ds.getConnection();
    try (
      PreparedStatement stmt = con.prepareStatement(
          "select count(*) from user left outer join memb on user.uno=memb.mno where email=?");
    ) {
      stmt.setString(1, email);
      ResultSet rs = stmt.executeQuery();
      
      return rs.getInt(1); //확인필요
    }
    finally {
      ds.returnConnection(con);
    }
  }

  public void insert(User user) throws Exception {
    Connection con = ds.getConnection();
    try (
      PreparedStatement stmt = con.prepareStatement(
          "insert into user(uno,b_day,tel,zip,bas_adr,det_adr,job,gen,join_date) "
          + "values(?,?,?,?,?,?,?,?,?)");
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

  @Override
  public void update(User user) throws Exception {
    Connection con = ds.getConnection();
    try (
      PreparedStatement stmt = con.prepareStatement(
          "update user set pwd=?,path=?,b-day=?,tel=?,bas_adr=?,det_adr=?,zip=?,job=?,gen=? "
          + "where email=?");
    ) {
      stmt.setString(1, user.getPassword());
      stmt.setString(2, user.getPhotoPath());
      stmt.setString(3, user.getBirthday());
      stmt.setString(4, user.getTel());
      stmt.setString(5, user.getBasicAddress());
      stmt.setString(6, user.getDetailAddress());
      stmt.setString(7, user.getPostcode());
      stmt.setString(8, user.getJob());
      stmt.setString(9, user.getGender());
      stmt.setString(10, user.getEmail());
      
      stmt.executeUpdate();
    }
    finally {
      ds.returnConnection(con);
    }
  }

  @Override
  public void delete(int userNo) throws Exception {
    // TODO Auto-generated method stub
  }

}
*/
=======
//package nutcracker.sh;
//
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.util.ArrayList;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//import nutcracker.dao.UserDao;
//import nutcracker.domain.User;
//import nutcracker.util.DataSource;
//
//@Repository("UserDao")
//public class UserMysqlDao implements UserDao {
//  @Autowired DataSource ds;
//
//  @Override
//  public ArrayList<User> getList() throws Exception {
//    ArrayList<User> list = new ArrayList<>();
//    Connection con = ds.getConnection();
//    try (
//        PreparedStatement stmt = con.prepareStatement(
//        "select uno,b_day,tel,zip,bas_adr,det_adr,job,gen,join_date from user "
//        + "left outer join memb on memb.mno=user.uno");
//        ResultSet rs = stmt.executeQuery();
//  ) {
//      while (rs.next()) {
//        User user = new User();
//        user.setMemberNo(rs.getInt("uno"));
//        user.setBirthday(rs.getString("b_day"));
//        user.setTel(rs.getString("tel"));
//        user.setPostcode(rs.getString("zip"));
//        user.setBasicAddress(rs.getString("bas_adr"));
//        user.setDetailAddress(rs.getString("det_adr"));
//        user.setJob(rs.getString("job"));
//        user.setGender(rs.getString("gen"));
//        user.setJoinDate(rs.getString("join_date"));
//        
//        list.add(user);
//      }
//    }
//    finally {
//      ds.returnConnection(con);
//    }
//    return list;
//  }
//
//  @Override
//  public User getOnebyEmail(String email) throws Exception {
//    Connection con = ds.getConnection();
//    try (
//      PreparedStatement stmt = con.prepareStatement(
//          "select uno,email,name,tel,bas_adr,det_adr,join_date,lst_date,out_type,out_cont "
//          + "from user "
//          + "left outer join memb on user.uno = memb.mno "
//          + "where email=?");
//    ) {
//      stmt.setString(1, email);
//      ResultSet rs = stmt.executeQuery();
//      
//      if (rs.next()) {
//        User user = new User();
//        user.setMemberNo(rs.getInt("uno"));
//        user.setEmail(rs.getString("email"));
//        user.setName(rs.getString("name"));
//        user.setTel(rs.getString("tel"));
//        user.setBasicAddress(rs.getString("bas_adr"));
//        user.setDetailAddress(rs.getString("det_adr"));
//        user.setJoinDate(rs.getString("join_date"));
//        user.setLastDate(rs.getString("lst_date"));
//        user.setOutType(rs.getInt("out_type"));
//        user.setOutContent(rs.getString("out_cont"));
//        rs.close();
//        return user;
//      } else {
//        rs.close();
//        return null;
//      }
//    }
//    finally {
//      ds.returnConnection(con);
//    }
//  }
//
//  @Override
//  public int count(String email) throws Exception {
//    Connection con = ds.getConnection();
//    try (
//      PreparedStatement stmt = con.prepareStatement(
//          "select count(*) from user left outer join memb on user.uno=memb.mno where email=?");
//    ) {
//      stmt.setString(1, email);
//      ResultSet rs = stmt.executeQuery();
//      
//      return rs.getInt(1); //확인필요
//    }
//    finally {
//      ds.returnConnection(con);
//    }
//  }
//
//  public void insert(User user) throws Exception {
//    Connection con = ds.getConnection();
//    try (
//      PreparedStatement stmt = con.prepareStatement(
//          "insert into user(uno,b_day,tel,zip,bas_adr,det_adr,job,gen,join_date) "
//          + "values(?,?,?,?,?,?,?,?,?)");
//    ) {
//      stmt.setInt(1, user.getMemberNo());
//      stmt.setString(2, user.getBirthday());
//      stmt.setString(3, user.getTel());
//      stmt.setString(4, user.getPostcode());
//      stmt.setString(5, user.getBasicAddress());
//      stmt.setString(6, user.getDetailAddress());
//      stmt.setString(7, user.getJob());
//      stmt.setString(8, user.getGender());
//      stmt.setString(9, user.getJoinDate());
//    }
//    finally {
//      ds.returnConnection(con);
//    }
//  }
//
//  @Override
//  public void update(User user) throws Exception {
//    Connection con = ds.getConnection();
//    try (
//      PreparedStatement stmt = con.prepareStatement(
//          "update user set pwd=?,path=?,b-day=?,tel=?,bas_adr=?,det_adr=?,zip=?,job=?,gen=? "
//          + "where email=?");
//    ) {
//      stmt.setString(1, user.getPassword());
//      stmt.setString(2, user.getPhotoPath());
//      stmt.setString(3, user.getBirthday());
//      stmt.setString(4, user.getTel());
//      stmt.setString(5, user.getBasicAddress());
//      stmt.setString(6, user.getDetailAddress());
//      stmt.setString(7, user.getPostcode());
//      stmt.setString(8, user.getJob());
//      stmt.setString(9, user.getGender());
//      stmt.setString(10, user.getEmail());
//      
//      stmt.executeUpdate();
//    }
//    finally {
//      ds.returnConnection(con);
//    }
//  }
//
//  @Override
//  public void delete(int userNo) throws Exception {
//    // TODO Auto-generated method stub
//  }
//
//}
