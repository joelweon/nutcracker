package nutcracker.domain;

public class MyBoycottList extends Company {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected String registerDate;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getRegisterDate() {
    return registerDate;
  }
  public void setRegisterDate(String registerDate) {
    this.registerDate = registerDate;
  }

}
