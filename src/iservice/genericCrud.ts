import {Observable} from "rxjs/Observable";

export interface GenericCrud<T>{
   getAll():Observable<T[]>;
   getById(id:number):Promise<T>;
   insert(t:T):string;
   delete(id:number):string;
 

}