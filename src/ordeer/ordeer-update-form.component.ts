

import { Component, OnInit } from "@angular/core";
import { Ordeer } from "./ordeer";
import { OrdeerService } from "./ordeer.service";
import { ActivatedRoute, Router,ParamMap } from "@angular/router";

@Component({
    selector:"cm-ordeerUpdateForm",
    templateUrl:"./ordeer-update-form.component.html"

})
export class OrdeerUpdateFormComponent implements OnInit{
 
  private pageTitle: string = "Ordeer Update Form";
  private ordeer:Ordeer;
  private ordeerService:OrdeerService;
  private route:ActivatedRoute;
  private router:Router;
  constructor(ordeerService:OrdeerService,route:ActivatedRoute,router:Router){
   this.ordeerService=ordeerService;
   this.route=route;
   this.router=router;
  }

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap)=>
    this.ordeerService.getById(+params.get("ordeerId")).then((ordeer:Ordeer)=>{
      this.ordeer=ordeer;
    }));
   
  }

}