
import { Component, OnInit } from "@angular/core";
import { Ordeer } from "./ordeer";
import { OrdeerService } from "./ordeer.service";
import { ServiceService } from "../service/service.service";
import { Service } from "../service/service";

@Component({
    selector:"cm-ordeerForm",
    templateUrl:"./ordeer-form.component.html"
})
export class OrdeerFormComponent implements OnInit{
    
    private pageTitle: string = "Order Form";
   private ordeer:Ordeer=new Ordeer(new Service(null,"","",null));
   private ordeerService:OrdeerService;
   private services:Service[];
   private serviceService:ServiceService;
   constructor(ordeerService:OrdeerService,serviceService:ServiceService){
    this.ordeerService=ordeerService;
    this.serviceService=serviceService;
    
   }
   ngOnInit(): void {
   this.serviceService.getAll().subscribe((services:Service[])=>{this.services=services;
   console.log(services);    });
}

  onSubmit(){
    
    console.log(this.ordeer);
      this.ordeerService.insert(this.ordeer);
  }



}