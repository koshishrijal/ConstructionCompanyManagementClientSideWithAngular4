import { Component,OnInit } from "@angular/core";
import {AssetService} from "./asset.service";
import {Asset} from "./asset";
@Component({
    selector: "cm-assetSummary",
    templateUrl: "./asset-summary.component.html"

})

export class AssetSummaryComponent implements OnInit {
    ngOnInit(): void {
       this.assetService.getAllAsset().subscribe((assets:Asset[])=>this.assets=assets);
    }
    private totalAsset: any;
    private assets:Asset[];
    private assetService:AssetService;
    constructor(assetService:AssetService){
    this.assetService=assetService;
    }



}