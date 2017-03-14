package nutcracker.domain;

public class MyPurchaseHistory extends Purchase {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected int purchaseNo;
  protected String purchaseDate;
  protected int quantity;
  protected String imp_uid;
  protected String receipt;
  
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
  public String getImp_uid() {
    return imp_uid;
  }
  public void setImp_uid(String imp_uid) {
    this.imp_uid = imp_uid;
  }
  public String getReceipt() {
    return receipt;
  }
  public void setReceipt(String receipt) {
    this.receipt = receipt;
  }
  
}
