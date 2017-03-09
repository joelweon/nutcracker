package nutcracker.domain;

import java.io.Serializable;

public class Company implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int companyNo;
  protected String companyName;
  protected int parentNo;
  
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
  public int getParentNo() {
    return parentNo;
  }
  public void setParentNo(int parentNo) {
    this.parentNo = parentNo;
  }
  
}
