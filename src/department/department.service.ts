import { GenericCrud } from "../iservice/genericCrud";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import { Department } from "./department";
import { Http, Request, Response, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class DepartmentService implements GenericCrud<Department> {


    private _http: Http;
    private departments: Department[];
    private _getAllDepartmentUrl = "http://localhost:8080/api/departments";
    private _getDepartmentByIdUrl = "http://localhost:8080/api/departments/";
    private _insertDepartmentUrl = "http://localhost:8080/api/departments/insert";
    private _updateDepartmentUrl = "http://localhost:8080/api/departments/update";
    private _deleteDepartmentUrl = "http://localhost:8080/api/departments/delete/";
    private router: Router;
    constructor(_http: Http, router: Router) {
        this._http = _http;
        this.router = router;
    }
    getAll(): Observable<Department[]> {
        return this._http.get(this._getAllDepartmentUrl).map((response: Response) => <Department[]>response.json());
    }
    getById(id: number): Promise<Department> {

        return this._http.get(this._getDepartmentByIdUrl+id).toPromise().then((response: Response) => <Department>response.json());

    }
    insert(d: Department): string {
        console.log(" iam starting");
        this._http.post(this._insertDepartmentUrl, d).subscribe((response: Response) => {
            console.log(response.json)
            this.router.navigate(["/departments"])
        });
        console.log(" iam end");
        return "inserted";
    }
    delete(id: number): string {
        this._http.delete(this._deleteDepartmentUrl + id).subscribe((response: Response) => {
            console.log(response.json());
            this.router.navigate(["/"]);
        });
        return "deleted";
    }



}