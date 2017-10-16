import { Component, OnInit,Input } from "@angular/core";
import { Admin } from "./admin";
import { AdminService } from "./admin.service";
@Component({
  selector: "cm-adminList",
  templateUrl: "./admin-list.component.html"

}
)
export class AdminListComponent implements OnInit {
  ngOnInit(): void {
     this._adminServcie.getAllAdmin().subscribe((admins:Admin[])=>this.admins=admins);
  }
  pageTitle: string = "Admin List";
  admins: Admin[];
  private _adminServcie: AdminService;
  
   constructor(_adminServcie: AdminService) {
    this._adminServcie = _adminServcie;
   }
   onDeleteClicked(adminId:number){
     console.log(adminId);
     this._adminServcie.deleteAdmin(adminId);
   }


}