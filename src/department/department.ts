
export class Department {
    private departmentId: number;
    private name: string;
    private payRate: number;
    private dateAdded: Date;
    private dateModified;

    constructor( name: string, payRate: number) {
       
        this.name = name;
        this.payRate = payRate;
    

    }


}