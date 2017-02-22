package nutcracker.domain;

public class MyPurchaseList extends Purchase {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected String purchaseDate;
  protected int quantity;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
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
