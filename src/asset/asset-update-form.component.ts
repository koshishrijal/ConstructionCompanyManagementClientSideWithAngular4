import { Asset } from "./asset";
import { Component, OnInit } from "@angular/core";
import { AssetService } from "./asset.service";
import { Router, Route, ActivatedRoute, ParamMap } from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "cm-updateForm",
    templateUrl: "./asset-update-form.component.html"
})


export class AssetUpdateFormComponent implements OnInit {
    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => this.assetService.getAssetById(+params.get("assetId"))).subscribe(asset => this.asset = asset);
    }
    private router: Router;
    private route: ActivatedRoute;
    private pageTitle = "Asset Update Form";
    private submitted: boolean = false;
    private asset: Asset;
    private assetService: AssetService;
    constructor(assetService: AssetService, router: Router, route: ActivatedRoute) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
    }

    onSubmit() {
        this.assetService.updateAsset(this.asset);
        this.submitted = true;
        this.router.navigate(["/assets"]); //this resulted in hibernate error with session already closed
    }




}