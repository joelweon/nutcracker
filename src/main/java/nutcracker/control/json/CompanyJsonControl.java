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
  
  @RequestMapping("/company/getParents")
  public AjaxResult getParents() throws Exception {
    ArrayList<Company> list = companyService.getParents();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/company/getChildren")
  public AjaxResult getChildren(String parent) throws Exception {
    System.out.println("parent: " + parent);
    ArrayList<Company> list = companyService.getChildren(parent);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  

}
