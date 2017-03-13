package nutcracker.domain;

public class MyPurchaseHistory extends Purchase {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected int purchaseNo;
  protected String purchaseDate;
  protected int quantity;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public int getPurchaseNo() {
    return purchaseNo;
  }
  public void setPurchaseNo(int purchaseNo) {
    this.purchaseNo = purchaseNo;
  }
  public String getPurchaseDate() {
    return purchaseDate;
  }
  public void setPurchaseDate(String purchaseDate) {
    this.purchaseDate = purchaseDate;
  }
  public int getQuantity() {
    return quantity;
  }
  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

}
