
import { Component, OnInit } from "@angular/core";
import { Service } from "./service";
import { ServiceService } from "./service.service";

@Component({
    selector: "cm-ServiceList",
    templateUrl: "./service-list.component.html"
})
export class ServiceListComponent implements OnInit{
   
    private pageTitle:string="Service List";
    private services:Service[];
    private serviceService: ServiceService;

    constructor(serviceService: ServiceService) {
        this.serviceService = serviceService;
    }
    ngOnInit(): void {
      this.serviceService.getAll().subscribe((services:Service[])=>{this.services=services;
    console.log(services)});
    }
    onDeleteClicked(id:number){
        this.serviceService.delete(id);

    }


}