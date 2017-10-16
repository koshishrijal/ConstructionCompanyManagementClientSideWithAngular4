
export class Admin{
  adminId:number;
  adminName:string;
  email:string;
  password:string;
  role:string;

  constructor(adminName:string,password:string,role:string){
      this.adminName=adminName;
      this.password=password;
      this.role=role;
  }
   


}