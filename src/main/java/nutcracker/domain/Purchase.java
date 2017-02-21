package nutcracker.domain;

import java.io.Serializable;

public class Purchase extends Company implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int purchaseNo;
  protected String title;
  protected int price;
  protected String startDate;
  protected String endDate;
  protected String deliveryDate;
  protected int totalCount;
  protected int applicantCount;
  
  public int getPurchaseNo() {
    return purchaseNo;
  }
  public void setPurchaseNo(int purchaseNo) {
    this.purchaseNo = purchaseNo;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public String getStartDate() {
    return startDate;
  }
  public void setStartDate(String startDate) {
    this.startDate = startDate;
  }
  public String getEndDate() {
    return endDate;
  }
  public void setEndDate(String endDate) {
    this.endDate = endDate;
  }
  public String getDeliveryDate() {
    return deliveryDate;
  }
  public void setDeliveryDate(String deliveryDate) {
    this.deliveryDate = deliveryDate;
  }
  public int getTotalCount() {
    return totalCount;
  }
  public void setTotalCount(int totalCount) {
    this.totalCount = totalCount;
  }
  public int getApplicantCount() {
    return applicantCount;
  }
  public void setApplicantCount(int applicantCount) {
    this.applicantCount = applicantCount;
  }
}
