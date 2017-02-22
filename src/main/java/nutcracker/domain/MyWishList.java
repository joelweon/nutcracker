package nutcracker.domain;

import java.io.Serializable;

public class MyWishList implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int wishNo;
  protected String productName;
  protected String maker;
  protected int price;
  protected int dileveryFee;
  protected String link;
  protected String photoPath;
  
  public int getWishNo() {
    return wishNo;
  }
  public void setWishNo(int wishNo) {
    this.wishNo = wishNo;
  }
  public String getProductName() {
    return productName;
  }
  public void setProductName(String productName) {
    this.productName = productName;
  }
  public String getMaker() {
    return maker;
  }
  public void setMaker(String maker) {
    this.maker = maker;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public int getDileveryFee() {
    return dileveryFee;
  }
  public void setDileveryFee(int dileveryFee) {
    this.dileveryFee = dileveryFee;
  }
  public String getLink() {
    return link;
  }
  public void setLink(String link) {
    this.link = link;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }

}
