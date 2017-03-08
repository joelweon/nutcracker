package nutcracker.domain;

import java.io.Serializable;
import java.util.List;

public class Boycott implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int boycottNo;
  protected String postTime;
  protected String title;
  protected String content;
  protected int viewCount;
  protected int hoduCount;
  protected int commentCount;
  protected int shareCount;
  protected int boycottCount;
  protected String photoPath;
  protected int companyNo;
  protected List<Photo> photoList;
  protected List<BoycottNews> newsList;
  
  
  public int getBoycottCount() {
    return boycottCount;
  }
  public void setBoycottCount(int boycottCount) {
    this.boycottCount = boycottCount;
  }
  public int getCompanyNo() {
    return companyNo;
  }
  public void setCompanyNo(int companyNo) {
    this.companyNo = companyNo;
  }
  public int getBoycottNo() {
    return boycottNo;
  }
  public void setBoycottNo(int boycottNo) {
    this.boycottNo = boycottNo;
  }
  public String getPostTime() {
    return postTime;
  }
  public void setPostTime(String postTime) {
    this.postTime = postTime;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
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
  public int getCommentCount() {
    return commentCount;
  }
  public void setCommentCount(int commentCount) {
    this.commentCount = commentCount;
  }
  public int getShareCount() {
    return shareCount;
  }
  public void setShareCount(int shareCount) {
    this.shareCount = shareCount;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  public List<Photo> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<Photo> photoList) {
    this.photoList = photoList;
  }
  public List<BoycottNews> getNewsList() {
    return newsList;
  }
  public void setNewsList(List<BoycottNews> newsList) {
    this.newsList = newsList;
  }
  @Override
  public String toString() {
    return "Boycott [boycottNo=" + boycottNo + ", postTime=" + postTime + ", title=" + title + ", content=" + content
        + ", viewCount=" + viewCount + ", hoduCount=" + hoduCount + ", commentCount=" + commentCount + ", shareCount="
        + shareCount + ", boycottCount=" + boycottCount + ", photoPath=" + photoPath + ", companyNo=" + companyNo
        + ", photoList=" + photoList + ", newsList=" + newsList + "]";
  }
  
  
  
  
  
  
}

