import { Component, OnInit } from "@angular/core";
import { DepartmentService } from "./department.service";
import { Department } from "./department";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: "cm-departmentUpdateForm",
    templateUrl: "./department-update-form.component.html"
})
export class DepartmentUpdateFormComponent implements OnInit {
    private pageTitle: string = "Department Update Form";
    private departmentService: DepartmentService;
    private department: Department;
    private submitted:boolean=false;
    private router: Router;
    private route: ActivatedRoute;
    constructor(departmentService: DepartmentService, router: Router, route: ActivatedRoute) {
        this.departmentService = departmentService;
        this.router = router;
        this.route = route;

    }
    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => this.departmentService.getById(+params.get("departmentId"))).subscribe((department: Department) => this.department = department);

    }
    onSubmit() {
        this.departmentService.insert(this.department);
        this.submitted=true;
    }



}