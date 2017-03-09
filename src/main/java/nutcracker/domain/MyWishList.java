package nutcracker.domain;

import java.io.Serializable;

public class MyWishList implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int wishNo;
  protected String productName;
  protected String maker;
  protected String brand;
  protected String price;
  protected String photoPath;
  protected String link;
  
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
  public String getBrand() {
    return brand;
  }
  public void setBrand(String brand) {
    this.brand = brand;
  }
  public String getPrice() {
    return price;
  }
  public void setPrice(String price) {
    this.price = price;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  public String getLink() {
    return link;
  }
  public void setLink(String link) {
    this.link = link;
  }
  
  
}
