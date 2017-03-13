package nutcracker.control.json;

import java.util.ArrayList;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nutcracker.domain.Company;
import nutcracker.service.CompanyService;

@RestController
public class CompanyJsonControl {
  @Autowired ServletContext sc;
  @Autowired CompanyService companyService;
  
  @RequestMapping("/company/getBoycottNo")
  public AjaxResult getBoycottNo(int memberNo) throws Exception {
    int[] arr = companyService.getBoycottNo(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, arr);
  }
  
  @RequestMapping("/company/getBoycottComp")
  public AjaxResult getBoycottComp(int memberNo) throws Exception {
    ArrayList<Company> list = companyService.getBoycottComp(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/company/getParent")
  public AjaxResult getParent(int parentNo) throws Exception {
    Company comp = companyService.getParent(parentNo);
    return new AjaxResult(AjaxResult.SUCCESS, comp);
  }
  
  @RequestMapping("/company/getChildren")
  public AjaxResult getChildren(int parentNo) throws Exception {
    System.out.println("parent: " + parentNo);
    ArrayList<Company> list = companyService.getChildren(parentNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  

}
