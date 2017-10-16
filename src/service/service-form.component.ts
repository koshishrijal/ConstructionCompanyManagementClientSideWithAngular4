
import { Service } from "./service";
import { ServiceService } from "./service.service";
import { Component } from "@angular/core";

@Component({
    selector: "cm-serviceForm",
    templateUrl: "./service-form.component.html"

})

export class ServiceFormComponent {
    private pageTitle: string = "Service Form";
    private submitted: boolean = false;
    private service: Service = new Service(null, "", "", null);
    private serviceService: ServiceService;
    constructor(serviceService: ServiceService) {
        this.serviceService = serviceService;
    }

    onSubmit() {
        
        this.serviceService.insert(this.service);
    }


}