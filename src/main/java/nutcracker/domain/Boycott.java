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
  protected List<Photo> photoList;
  protected List<BoycottNews> newsList;
  
  public List<BoycottNews> getNewsList() {
    return newsList;
  }
  public void setNewsList(List<BoycottNews> newsList) {
    this.newsList = newsList;
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
  public List<Photo> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<Photo> photoList) {
    this.photoList = photoList;
  }
  @Override
  public String toString() {
    return "Boycott [boycottNo=" + boycottNo + ", postTime=" + postTime + ", title=" + title + ", content=" + content
        + ", viewCount=" + viewCount + ", hoduCount=" + hoduCount + ", commentCount=" + commentCount + ", shareCount="
        + shareCount + ", photoList=" + photoList + ", newsList=" + newsList + "]";
  }
  
}

