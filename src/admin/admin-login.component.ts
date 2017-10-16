import {Admin} from "./admin";
import {Component,OnInit} from "@angular/core";
import {AdminService} from "./admin.service";
import {Router} from "@angular/router";
import {AdminSecurityService} from "./admin-security.service";
@Component({
    selector:"cm-adminLogin",
    templateUrl:"./admin-login.component.html"
})


export class AdminLoginComponent{
   
  private router: Router;
   private pageTitle="Login Form";
   private submitted:boolean=false;
   private admin:Admin=new Admin("","","");
   private adminServcie:AdminService;
   constructor(adminServcie:AdminService,router:Router,private adminSecurityServcie:AdminSecurityService){
       this.adminServcie=adminServcie;
       this.router=router;
   }

    onSubmit(){
       if(!this.adminSecurityServcie.logIn(this.admin.adminName,this.admin.password,this.admin.role)){
           this.pageTitle="INCORRECT LOGIN RETRY";
       }
    }




}