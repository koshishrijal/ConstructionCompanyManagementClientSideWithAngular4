
import { Component, OnInit } from "@angular/core";
import { Ordeer } from "./ordeer";
import { OrdeerService } from "./ordeer.service";

@Component({
   selector:"cm-ordeerListComponet",
   templateUrl:"./ordeer-list.component.html"
})
export class OrdeerListComponent implements OnInit{
   
    private pageTitle: string = "Ordeer List";
    private ordeers:Ordeer[];
    private ordeerService:OrdeerService;

    constructor(ordeerService:OrdeerService){
        this.ordeerService=ordeerService;
    }
    ngOnInit(): void {
       this.ordeerService.getAll().subscribe((ordeers:Ordeer[])=>{this.ordeers=ordeers
    console.log(ordeers);});
    }
    onDeleteClicked(id:number){
        this.ordeerService.delete(id);
    }

}