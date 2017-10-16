import {Component,OnInit} from "@angular/core";
import {Project} from "./project";
import {ProjectService} from "./project.service";
@Component({
    selector:"cm-projectList",
    templateUrl:"./project-list.component.html"
})
export class ProjectListComponent implements OnInit{
    ngOnInit(): void {
      console.log(" i am here");
       this.projectService.getAllProject().subscribe((projects:Project[])=>this.projects=projects);
    }
     pageTitle: string = "Projects List";
   projects:Project[];
   private projectService:ProjectService
  constructor( projectService:ProjectService){
    this.projectService=projectService;
  } 


}