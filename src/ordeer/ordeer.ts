

import { Service } from "../service/service";

export class Ordeer {
     orderId:number;
     clientName:string;
     address:string;
     siteLocation:string;
     projectDetail:string;
     timeForCompletionInMonth:number;
     dateToStart:Date;
     clientPhoneNumber:number;
     clientEmail:string;
      dateAdded:Date;
      service:Service;
      constructor(service:Service){
      this.service=service
      }
   //  service:{serviceId:""};
    // constructor(clientName,address,siteLocation,projectDetail,timeForCompletionInMonth,dateToStart,clientPhoneNumber,clientEmail,dateAdded,serviceId){
    //     this.address=address;
     //    this.clientEmail=clientEmail;
      //   this.clientName=clientName;
      //   this.clientPhoneNumber=clientPhoneNumber;
      //   this.dateToStart=dateToStart;
      //   this.projectDetail=projectDetail;
      //   this.service.serviceId=serviceId;
      //   this.siteLocation=siteLocation;
      //   this.timeForCompletionInMonth=timeForCompletionInMonth;
    // }
   
}