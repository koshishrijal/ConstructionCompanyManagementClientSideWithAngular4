
import { Injectable } from "@angular/core";
import { GenericCrud } from "../iservice/genericCrud";
import { Service } from "./service";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServiceService implements GenericCrud<Service>{

    private http: Http;
    private router: Router;
    private _http: Http;
    private _getAllServicesUrl = "http://localhost:8080/api/services";
    private _getServiceByIdUrl = "http://localhost:8080/api/services/";
    private _insertServiceUrl = "http://localhost:8080/api/services/insert";
    private _updateServiceUrl = "http://localhost:8080/api/services/update";
    private _deleteServiceUrl = "http://localhost:8080/api/services/delete/";
    private services: Service[];
    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
    }

    getAll(): Observable<Service[]> {
        return this.http.get(this._getAllServicesUrl).map((response: Response) => <Service[]>response.json());
    }
    getById(id: number): Promise<Service> {
        return this.http.get(this._getServiceByIdUrl+id).toPromise().then((response: Response) => <Service>response.json());
    }
    insert(s: Service): string {
        
        this.http.post(this._insertServiceUrl, s).subscribe((response: Response) => {
            console.log(response.json);
            this.router.navigate(["/services"]);
        });
        return "inserted";
    }
    delete(id: number): string {
        this.http.delete(this._deleteServiceUrl + id).subscribe((response: Response) => {
            console.log(response.toString());
            this.router.navigate(["/"]);
        });
        return "deleted";
    }

}