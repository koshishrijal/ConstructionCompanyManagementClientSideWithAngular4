import { Component, OnInit } from "@angular/core";
import { Department } from "./department";
import { DepartmentService } from "./department.service";
@Component({
    selector: "cm-departmentList",
    templateUrl: "./department-list.component.html"
})

export class DepartmentListComponent implements OnInit {

    private departmentService: DepartmentService;
    private pageTitle: String = "Department List";
    private departments: Department[];
    private department: Department;
   
    constructor(departmentService: DepartmentService) {
        this.departmentService = departmentService;
    }

    ngOnInit(): void {
        this.departmentService.getAll().subscribe((departments: Department[]) => this.departments = departments);
    }
    onDeleteClicked(id:number){
     this.departmentService.delete(id);
    }

}