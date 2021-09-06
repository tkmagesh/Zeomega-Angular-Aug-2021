import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug.model";
import { BugApiService } from "./bugApi.service";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn: "root"
})
export class BugOperationsService{
    

    constructor(
        private bugApi : BugApiService
    ){

    }

    getAll() : Observable<Bug[]>{
        //return this.bugStorage.getAll();
        return this.bugApi.getAll();
    }

    getById(id : string) : Observable<Bug>{
        return this.bugApi.getById(id);
    }
    
    createNew(bugName : string) : Observable<Bug> {
         const newBug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return this.bugApi.save(newBug);
    }

    toggle(bug : Bug) : Observable<Bug> {
        //bug.isClosed = !bug.isClosed;
        const toggledBug = { ...bug, isClosed : !bug.isClosed}
        return this.bugApi.save(toggledBug);
    }

    remove(bug : Bug) : Observable<any> {
        return this.bugApi.remove(bug);
    }
}
    