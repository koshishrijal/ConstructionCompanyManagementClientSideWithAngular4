import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssetListComponent } from '../asset/asset-list.component';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AssetService } from '../asset/asset.service';
import { AssetFormComponent } from "../asset/asset-form.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from "@angular/router";
import {WelcomeComponent} from "../welcome/welcome.component";
import {AssetSummaryComponent} from "../asset/asset-summary.component";
import {AssetTotalPipe} from "../asset/asset-total.pipe";
import {AssetUpdateFormComponent} from "../asset/asset-update-form.component";
import {AdminListComponent} from "../admin/admin-list.component";
import {AdminService} from "../admin/admin.service";
import {AdminSecurityService} from "../admin/admin-security.service";
import {AdminLoginComponent} from "../admin/admin-login.component";
import {ProjectListComponent} from "../project/project-list.component";
import {ProjectService} from "../project/project.service";
import { DepartmentService } from "../department/department.service";
import { DepartmentListComponent } from "../department/department-list.component";
import { DepartmentFormComponent } from "../department/department-form.component";
import { DepartmentUpdateFormComponent } from "../department/department-update-form.component";
import { ServiceListComponent } from "../service/service-list.component";
import { ServiceService } from "../service/service.service";
import { ServiceFormComponent } from "../service/service-form.component";
import { ServiceUpdateFormComponent } from "../service/service-update-form.component";
import { OrdeerListComponent } from "../ordeer/ordeer-list.component";
import { OrdeerService } from "../ordeer/ordeer.service";
import { OrdeerFormComponent } from "../ordeer/ordeer-form.component";
@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetFormComponent,
    NavbarComponent,
    WelcomeComponent,
    AssetSummaryComponent,
    AssetTotalPipe,
    AssetUpdateFormComponent,
    AdminListComponent,
    AdminLoginComponent,
    ProjectListComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    DepartmentUpdateFormComponent,
    ServiceListComponent,
    ServiceFormComponent,
    ServiceUpdateFormComponent,
    OrdeerListComponent,
    OrdeerFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "assets",
        component: AssetListComponent

      },
      {
        path: "ordeers",
        component: OrdeerListComponent

      },
      {
        path:"assets/insert",
        component:AssetFormComponent
      },
      {
        path:"ordeers/insert",
        component:OrdeerFormComponent
      },
      {
       path:"login",
       component:AdminLoginComponent
      },
      {
       path:"welcome",
      component:WelcomeComponent
      },
      {
        path:"assets/update/:assetId",
        component:AssetUpdateFormComponent
      },
      {
      path:"departments/update/:departmentId",
      component:DepartmentUpdateFormComponent
      },
      {
        path:"admins",
        component:AdminListComponent
      },
      {
          path:"departments",
          component:DepartmentListComponent
      },
      {
        path:"departments/insert",
         component:DepartmentFormComponent
      },
     
      {
        path:"services",
         component:ServiceListComponent
      },

      {
        path:"services/insert",
         component:ServiceFormComponent
      },
      {
        path:"services/update/:serviceId",
         component:ServiceUpdateFormComponent
      },

      {
        path:"",
        redirectTo:"welcome",
        pathMatch:"full"
      }


    ])
  ],
  providers: [AssetService,AdminService,OrdeerService,AdminSecurityService,ProjectService,DepartmentService,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
