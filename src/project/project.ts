
import {Ordeer}  from "../ordeer/ordeer";
import {ProjectService} from "./project.service";


export class Project{
   projectId:number;
   status:boolean;
   dateAdded:Date;
   amount:number;
    order:Ordeer;

}