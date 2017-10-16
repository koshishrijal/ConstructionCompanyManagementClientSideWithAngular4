import { Asset } from "./asset";
import { Injectable } from "@angular/core";
import { Http, Request, Response ,RequestOptions} from "@angular/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import { Router } from "@angular/router";
@Injectable()
export class AssetService {

    private _http: Http;
    private _getAllProductsUrl = "http://localhost:8080/api/assets";
    private _getProductByIdUrl = "";
    private _insertProductUrl = "http://localhost:8080/api/assets/insert";
    private _updateProductUrl = "http://localhost:8080/api/assets/update";
    private _deleteProductUrl = "http://localhost:8080/api/assets/delete/";
    private assets: Asset[];
    private router:Router;
    constructor(_http: Http,router:Router) {
        this._http = _http;
        this.router=router;
    }



    getAllAsset(): Observable<Asset[]> {

        return this._http.get(this._getAllProductsUrl).map((response: Response) => <Asset[]>response.json());
    }
    getAssetById(id: number): Promise<Asset> {
        return this.getAllAsset().toPromise().then(assets => assets.find(asset => asset.assetId == id));

    }



    insertAsset(asset: Asset): string {
        console.log(JSON.stringify(asset));
        this._http.post(this._insertProductUrl, asset).subscribe((response: Response) => console.log(response.json));
        return "inserted";
    }

    updateAsset(asset: Asset):string {
        console.log(JSON.stringify(asset));
        this._http.post(this._insertProductUrl, asset).subscribe((response: Response) => console.log(response.json));
        return "updated";
    }

    deleteAsset(assetId:number):string{
        console.log(this._deleteProductUrl+assetId);
    this._http.delete(this._deleteProductUrl+assetId).subscribe((response:Response)=>{console.log(response.json);
       this.router.navigate(["/"]);
     });
    return "deleted";
    }


}