package nutcracker.sh;

public class Product {
  protected String title;
  protected String link;
  protected String image;
  protected String lprice;
  protected String hprice;
  protected String mallName;
  
  public Product() {
    super();
  }
  public Product(String title, String link, String image, String lprice, String hprice, String mallName) {
    super();
    this.title = title;
    this.link = link;
    this.image = image;
    this.lprice = lprice;
    this.hprice = hprice;
    this.mallName = mallName;
  }
  
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getLink() {
    return link;
  }
  public void setLink(String link) {
    this.link = link;
  }
  public String getImage() {
    return image;
  }
  public void setImage(String image) {
    this.image = image;
  }
  public String getLprice() {
    return lprice;
  }
  public void setLprice(String lprice) {
    this.lprice = lprice;
  }
  public String getHprice() {
    return hprice;
  }
  public void setHprice(String hprice) {
    this.hprice = hprice;
  }
  public String getMallName() {
    return mallName;
  }
  public void setMallName(String mallName) {
    this.mallName = mallName;
  }
  
  @Override
  public String toString() {
    return "Product [title=" + title + ", link=" + link + ", image=" + image + ", lprice=" + lprice + ", hprice="
        + hprice + ", mallName=" + mallName + "]";
  }
}