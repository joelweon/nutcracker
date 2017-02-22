package nutcracker.domain;

import java.io.Serializable;
import java.util.List;

public class Review implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int reviewNo;
  protected String postTime;
  protected String titleHead;
  protected String title;
  protected String content;
  protected int viewCount;
  protected int hoduCount;
  protected int commentCount;
  protected int reportCount;
  protected boolean postDelete;
  protected List<Photo> photoList;
  
  public int getReviewNo() {
    return reviewNo;
  }
  public void setReviewNo(int reviewNo) {
    this.reviewNo = reviewNo;
  }
  public String getPostTime() {
    return postTime;
  }
  public void setPostTime(String postTime) {
    this.postTime = postTime;
  }
  public String getTitleHead() {
    return titleHead;
  }
  public void setTitleHead(String titleHead) {
    this.titleHead = titleHead;
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
  public int getReportCount() {
    return reportCount;
  }
  public void setReportCount(int reportCount) {
    this.reportCount = reportCount;
  }
  public boolean isPostDelete() {
    return postDelete;
  }
  public void setPostDelete(boolean postDelete) {
    this.postDelete = postDelete;
  }
  
}
