import { Project } from "./project";
import { Injectable } from "@angular/core";
import { Http, Request, Response ,RequestOptions,} from "@angular/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProjectService {
    private _http: Http;
    private _getAllProjectsUrl = "http://localhost:8080/api/projects";
    private _getProjectByIdUrl = "";
    private _insertProjectUrl = "http://localhost:8080/api/projects/insert";
    private _updateProjectUrl = "http://localhost:8080/api/projects/update";
    private _deleteProjectUrl = "http://localhost:8080/api/projects/delete/";
    private projects: Project[];

    constructor(_http: Http) {
        this._http = _http;
    }



    getAllProject(): Observable<Project[]> {
   console.log(this._http.get(this._getAllProjectsUrl).map((response:Response)=>response.json));
        return this._http.get(this._getAllProjectsUrl).map((response: Response) => <Project[]>response.json());
        
    }
    getProjectById(id: number): Promise<Project> {
        return this.getAllProject().toPromise().then(projects => projects.find((project:Project) => project.projectId == id));

    }



    insertProject(project: Project): string {
        console.log(JSON.stringify(project));
        this._http.post(this._insertProjectUrl, project).subscribe((response: Response) => console.log(response.json));
        return "inserted";
    }

    updateProject(project: Project):string {
        console.log(JSON.stringify(project));
        this._http.put(this._updateProjectUrl, project).subscribe((response: Response) => console.log(response.json));
        return "updated";
    }

    deleteProject(projectId:number):string{
        console.log(this._deleteProjectUrl+projectId);
        this._http.delete(this._deleteProjectUrl+projectId).subscribe((response:Response)=>console.log(response.json));
        location.reload(true);
        return "deleted";
    }


}