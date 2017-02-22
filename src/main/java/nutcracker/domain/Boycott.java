package nutcracker.domain;

import java.io.Serializable;
import java.sql.Timestamp;

public class Boycott implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int boycottNo;
  protected Timestamp boycottTime;
  protected String title;
  protected String contents;
  protected int viewCount;
  protected int hoduCount;
  protected int comentCount;
  protected int shareCount;
  
  public int getBoycottNo() {
    return boycottNo;
  }
  public void setBoycottNo(int boycottNo) {
    this.boycottNo = boycottNo;
  }
  public Timestamp getBoycottTime() {
    return boycottTime;
  }
  public void setBoycottTime(Timestamp boycottTime) {
    this.boycottTime = boycottTime;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public int getViewCount() {
    return viewCount;
  }
  public void setViewCount(int viewCount) {
    this.viewCount = viewCount;
  }
  public int getHoduCount() {
    return hoduCount;
  }
  public void setHoduCount(int hoduCount) {
    this.hoduCount = hoduCount;
  }
  public int getComentCount() {
    return comentCount;
  }
  public void setComentCount(int comentCount) {
    this.comentCount = comentCount;
  }
  public int getShareCount() {
    return shareCount;
  }
  public void setShareCount(int shareCount) {
    this.shareCount = shareCount;
  }
  @Override
  public String toString() {
    return "Boycott [boycottNo=" + boycottNo + ", boycottTime=" + boycottTime + ", title=" + title + ", contents="
        + contents + ", viewCount=" + viewCount + ", hoduCount=" + hoduCount + ", comentCount=" + comentCount
        + ", shareCount=" + shareCount + "]";
  }
  
  
  
}
