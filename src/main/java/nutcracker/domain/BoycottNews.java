package nutcracker.domain;

import java.io.Serializable;

public class BoycottNews implements Serializable{
  private static final long serialVersionUID = 1L;

  protected int newsNo;
  protected String headLine;
  protected String path;
  
  
  public int getNewsNo() {
    return newsNo;
  }
  public void setNewsNo(int newsNo) {
    this.newsNo = newsNo;
  }
  public String getHeadLine() {
    return headLine;
  }
  public void setHeadLine(String headLine) {
    this.headLine = headLine;
  }
  public String getPath() {
    return path;
  }
  public void setPath(String path) {
    this.path = path;
  }
  @Override
  public String toString() {
    return "BoycottNews [newsNo=" + newsNo + ", headLine=" + headLine + ", path=" + path + "]";
  }
  
  
  
}
