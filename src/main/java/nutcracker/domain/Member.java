package nutcracker.domain;

import java.io.Serializable;
import java.sql.Timestamp;

public class Member implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected String email;
  protected String name;
  protected String password;
  protected String photoPath;
  protected Timestamp lastDate;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  public Timestamp getLastDate() {
    return lastDate;
  }
  public void setLastDate(Timestamp lastDate) {
    this.lastDate = lastDate;
  }
  
  @Override
  public String toString() {
    return "Member [memberNo=" + memberNo + ", email=" + email + ", name=" + name + ", password=" + password + ", photoPath="
        + photoPath + ", lastDate=" + lastDate + "]";
  }
}
