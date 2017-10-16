
import { Component, OnInit } from "@angular/core";
import { Service } from "./service";
import { ServiceService } from "./service.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
    selector: "cm-serviceUpdateForm",
    templateUrl: "./service-update-form.component.html"
})
export class ServiceUpdateFormComponent implements OnInit {

    private pageTitle: string = "Service Update Form";
    private route: ActivatedRoute;
    private router: Router;
    private service: Service = new Service(null,"", "", null);
    private serviceService: ServiceService;
    constructor(serviceService: ServiceService, router: Router, route: ActivatedRoute) {
        this.serviceService = serviceService;
        this.router = router;
        this.route = route;
    }

    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => this.serviceService.getById(+params.get("serviceId"))).subscribe((service: Service) => {
        this.service = service
        console.log("i am here");
            console.log(service);
        });
    }
    onSubmit() {
        this.serviceService.insert(this.service);
    }



}