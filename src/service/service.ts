import { Optional } from "@angular/core";

export class Service {
     serviceId: number;
    name: string;
    description: string;
    dateAdded: Date;
    status: boolean;
    constructor(id:number,name: string, description: string,  status: boolean) {
        
       this.name = name;
        this.description = description;
        this.status = status;
    }


}