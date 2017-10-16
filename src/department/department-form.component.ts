import {Component,OnInit} from "@angular/core";
import { DepartmentService } from "./department.service";
import { Router } from "@angular/router";
import { Department } from "./department";

@Component({
  selector:"cm-departmentInsertForm",
  templateUrl:"./department-form.component.html"
})
export class DepartmentFormComponent implements OnInit{
    
    private departmentService:DepartmentService;
    private router:Router;
    private department=new Department("",null);
    private pageTitle:string="Department Insert Form";
    private submitted:boolean=false;
    constructor(router:Router,departmentService:DepartmentService){
     this.router=router;
     this.departmentService=departmentService;
    }
    ngOnInit(): void {
       
    }
    onSubmit(){
        this.departmentService.insert(this.department);
        this.submitted=true;
       // this.router.navigate(["/"]);
    }


}