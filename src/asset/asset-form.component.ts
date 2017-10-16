import {Asset} from "./asset";
import {Component} from "@angular/core";
import {AssetService} from "./asset.service";
import {Router} from "@angular/router";

@Component({
    selector:"cm-assetForm",
    templateUrl:"./asset-form.component.html"
})


export class AssetFormComponent{
   private router:Router;
   private pageTitle="Asset Form";
   private submitted:boolean=false;
   private asset:Asset=new Asset("","",null);
   private assetServcie:AssetService;
   constructor(assetService:AssetService,router:Router){
       this.assetServcie=assetService;
       this.router=router;
   }

    onSubmit(){
       this.assetServcie.insertAsset(this.asset);
       this.submitted=true;
       this.router.navigate(["/"]);// this resulted in hibernate error with session already closed
    }




}