export class Asset{
        assetId:number;
       name:string;
        type:string;
        monetoryValue:number;
        dateAdded:Date;
    
constructor(name:string,type:string,monetoryValue:number){
   
     this.name=name;
     this.monetoryValue=monetoryValue;
     this.type=type;   
   

}

}