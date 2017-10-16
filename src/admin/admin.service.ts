import { Admin } from "./admin";
import { Injectable } from "@angular/core";
import { Http, Request, Response, RequestOptions, } from "@angular/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AdminService {

    private _http: Http;
    private _getAllAdminsUrl = "http://localhost:8080/api/admins";
    private _getAdminByIdUrl = "";
    private _insertAdminUrl = "http://localhost:8080/api/admins/insert";
    private _updateAdminUrl = "http://localhost:8080/api/admins/update";
    private _deleteAdminUrl = "http://localhost:8080/api/admins/delete/";
    private admins: Admin[];

    constructor(_http: Http) {
        this._http = _http
    }



    getAllAdmin(): Observable<Admin[]> {

        return this._http.get(this._getAllAdminsUrl).map((response: Response) => <Admin[]>response.json());
    }
    getAdminById(id: number): Promise<Admin> {
        return this.getAllAdmin().toPromise().then(admins => admins.find(Admin => Admin.adminId == id));

    }



    insertAdmin(admin: Admin): string {
        console.log(JSON.stringify(Admin));
        this._http.post(this._insertAdminUrl, admin).subscribe((response: Response) => console.log(response.json));
        return "inserted";
    }

    updateAdmin(admin: Admin): string {
        console.log(JSON.stringify(Admin));
        this._http.put(this._updateAdminUrl, admin).subscribe((response: Response) => console.log(response.json));
        return "updated";
    }

    deleteAdmin(adminId: number): string {
        console.log(this._deleteAdminUrl + adminId);
        this._http.delete(this._deleteAdminUrl + adminId).subscribe((response: Response) => console.log(response.json));
        location.reload(true);
        return "deleted";
    }


}