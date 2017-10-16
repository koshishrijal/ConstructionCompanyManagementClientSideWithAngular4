import { Component, OnInit,Input } from "@angular/core";
import { AdminSecurityService } from "../admin/admin-security.service";
@Component({
  selector: "cm-navbar",
  templateUrl: "./navbar.component.html"
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
   //this.adminSecurityService.checkIfLoggedIn();
  }
  pageTitle = "nav bar";
  constructor(private adminSecurityService:AdminSecurityService){}
  
  @Input() hide:boolean;  
  logOut(){
    console.log("logged out");
    this.adminSecurityService.logOut();
    location.reload();
  }


}