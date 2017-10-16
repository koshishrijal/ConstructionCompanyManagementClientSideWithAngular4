
import { GenericCrud } from "../iservice/genericCrud";
import { Observable } from "rxjs/Observable";
import { Ordeer } from "./ordeer";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class OrdeerService implements GenericCrud<Ordeer>{

    private http: Http;
    private router: Router;
    private _getAllOrdeersUrl = "http://localhost:8080/api/ordeers";
    private _getOrdeerByIdUrl = "http://localhost:8080/api/ordeers/";
    private _insertOrdeerUrl = "http://localhost:8080/api/ordeers/insert";
    private _updateOrdeerUrl = "http://localhost:8080/api/ordeers/update";
    private _deleteOrdeerUrl = "http://localhost:8080/api/ordeers/delete/";

    constructor(http: Http, router:Router) {
        this.router = router;
        this.http = http;
    }

    getAll(): Observable<Ordeer[]> {
        return this.http.get(this._getAllOrdeersUrl).map((response: Response) => <Ordeer[]>response.json());

    }
    getById(id: number): Promise<Ordeer> {
        return this.http.get(this._getOrdeerByIdUrl).toPromise().then((response: Response) => <Ordeer>response.json());
    }
    insert(o: Ordeer): string {
        console.log(o);
        this.http.post(this._insertOrdeerUrl, o).subscribe((response: Response) => {
            console.log(response.json());
             this.router.navigate(["/"]);
        });
       
        return "inserted";
    }
    delete(id: number): string {
        this.http.delete(this._deleteOrdeerUrl + id).subscribe((response: Response) => {
            console.log(response.json());
            this.router.navigate(["/"]);
        });
        return "deleted";
    }

}