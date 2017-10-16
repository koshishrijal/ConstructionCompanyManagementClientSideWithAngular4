import { Admin } from "./admin";
import { AdminService } from "./admin.service";
import { Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable()
export class AdminSecurityService {
    checkIfLoggedIn():boolean {
        console.log("hit");
       let hide:boolean=false;
       if(localStorage.getItem("adminName")==null){
           this.router.navigate(["/login"]);
           hide=true;
       }else{
        this.router.navigate(["/"]);
       }
       return hide;
    }
    private admin: Admin=new Admin("","","");
    constructor(private adminService: AdminService,private router:Router) {
    }
     
    logIn(adminName:string,password:string,role:string){
        let matched:boolean=false;
       this.adminService.getAllAdmin().subscribe((admins:Admin[])=>admins.forEach((admin:Admin) => {
           if(admin.adminName==adminName && admin.password==password && admin.role==role){
               this.admin.adminName=name;
               this.admin.password=password;
               this.admin.role=role;
               localStorage.setItem("adminName",name);
               localStorage.setItem("adminRole",role);
              console.log("matched");
              matched=true;
             location.reload();
           }else{
               console.log("unmatched");
           }

       }));
       return matched;
    }
    logOut(){
        localStorage.clear();
   
    }


}