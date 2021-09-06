import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug.model";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn : 'root'
})
export class BugApiService{
    private serviceEndPoint : string = `${environment.serviceEndPointBase}/bugs`;

    constructor(private httpClient : HttpClient){

    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>(this.serviceEndPoint);
    }

    getById(id : string) : Observable<Bug>{
        return this.httpClient
            .get<Bug>(`${this.serviceEndPoint}/${id}`);
    }

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.httpClient
                .post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.httpClient
                .put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData)
        }
    }

    remove(bugData : Bug) : Observable<any>{
        return this.httpClient
            .delete(`${this.serviceEndPoint}/${bugData.id}`)
    }
}