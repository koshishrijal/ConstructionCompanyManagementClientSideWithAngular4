import { Component,OnInit } from '@angular/core';
import {AdminSecurityService} from "../admin/admin-security.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hide:boolean=false;
  ngOnInit(): void {
   this.hide= this.adminSecurityService.checkIfLoggedIn(); 
  }
  title = 'app';
  constructor(private adminSecurityService:AdminSecurityService){ }  

}
