import { Component, OnInit,Input } from "@angular/core";
import { Asset } from "./asset";
import { AssetService } from "./asset.service";
import {AdminSecurityService} from "../admin/admin-security.service";
@Component({
  selector: "cm-assetList",
  templateUrl: "./asset-list.component.html"

}
)
export class AssetListComponent implements OnInit {
  ngOnInit(): void {
     this._assetService.getAllAsset().subscribe((assets:Asset[])=>this.assets=assets);
  }
  pageTitle: string = "Asset List";
  assets: Asset[];
  private _assetService: AssetService;
  
   constructor(_assetService: AssetService,private adminSecurityService:AdminSecurityService) {
    this._assetService = _assetService;
   }
   onDeleteClicked(assetId:number){
     console.log(assetId);
     this._assetService.deleteAsset(assetId);
   }


}