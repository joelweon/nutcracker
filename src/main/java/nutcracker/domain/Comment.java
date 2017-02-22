package nutcracker.domain;

import java.io.Serializable;

public class Comment implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int commentNo;
  protected String postTime;
  protected String content;
  protected int reportCount;
  protected boolean commentDelete;
  
  public int getCommentNo() {
    return commentNo;
  }
  public void setCommentNo(int commentNo) {
    this.commentNo = commentNo;
  }
  public String getPostTime() {
    return postTime;
  }
  public void setPostTime(String postTime) {
    this.postTime = postTime;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public int getReportCount() {
    return reportCount;
  }
  public void setReportCount(int reportCount) {
    this.reportCount = reportCount;
  }
  public boolean isCommentDelete() {
    return commentDelete;
  }
  public void setCommentDelete(boolean commentDelete) {
    this.commentDelete = commentDelete;
  }

}
