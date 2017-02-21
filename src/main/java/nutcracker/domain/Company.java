package nutcracker.domain;

import java.io.Serializable;

public class Company implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int companyNo;
  protected String companyName;
  
  public int getCompanyNo() {
    return companyNo;
  }
  public void setCompanyNo(int companyNo) {
    this.companyNo = companyNo;
  }
  public String getCompanyName() {
    return companyName;
  }
  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }
}
