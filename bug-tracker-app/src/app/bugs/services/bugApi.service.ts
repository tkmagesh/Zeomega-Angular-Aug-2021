import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug.model";

@Injectable({
    providedIn : 'root'
})
export class BugApiService{
    constructor(private httpClient : HttpClient){

    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>('http://localhost:3000/bugs');
    }
}