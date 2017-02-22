package nutcracker.domain;

import java.io.Serializable;

public class Photo implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int photoNo;
  protected int ownerNo;
  protected String photoPath;
  
  public int getPhotoNo() {
    return photoNo;
  }
  public void setPhotoNo(int photoNo) {
    this.photoNo = photoNo;
  }
  public int getOwnerNo() {
    return ownerNo;
  }
  public void setOwnerNo(int ownerNo) {
    this.ownerNo = ownerNo;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  
}
