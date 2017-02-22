package nutcracker.domain;

public class User extends Member {
  private static final long serialVersionUID = 1L;
  
  protected int userNo;
  protected String birthday;
  protected String tel;
  protected String postcode;
  protected String basicAddress;
  protected String detailAddress;
  protected String job;
  protected String gender;
  protected int outType;
  protected String outContent;
  protected String joinDate;
  
  public int getUserNo() {
    return userNo;
  }
  public void setUserNo(int userNo) {
    this.userNo = userNo;
  }
  public String getBirthday() {
    return birthday;
  }
  public void setBirthday(String birthday) {
    this.birthday = birthday;
  }
  public String getTel() {
    return tel;
  }
  public void setTel(String tel) {
    this.tel = tel;
  }
  public String getPostcode() {
    return postcode;
  }
  public void setPostcode(String postcode) {
    this.postcode = postcode;
  }
  public String getBasicAddress() {
    return basicAddress;
  }
  public void setBasicAddress(String basicAddress) {
    this.basicAddress = basicAddress;
  }
  public String getDetailAddress() {
    return detailAddress;
  }
  public void setDetailAddress(String detailAddress) {
    this.detailAddress = detailAddress;
  }
  public String getJob() {
    return job;
  }
  public void setJob(String job) {
    this.job = job;
  }
  public String getGender() {
    return gender;
  }
  public void setGender(String gender) {
    this.gender = gender;
  }
  public int getOutType() {
    return outType;
  }
  public void setOutType(int outType) {
    this.outType = outType;
  }
  public String getOutContent() {
    return outContent;
  }
  public void setOutContent(String outContent) {
    this.outContent = outContent;
  }
  public String getJoinDate() {
    return joinDate;
  }
  public void setJoinDate(String joinDate) {
    this.joinDate = joinDate;
  }
  
}
