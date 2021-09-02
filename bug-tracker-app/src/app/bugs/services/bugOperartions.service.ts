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
        private bugStorage : BugStorageService,
        private bugApi : BugApiService,
    ){

    }

    getAll() : Observable<Bug[]>{
        //return this.bugStorage.getAll();
        return this.bugApi.getAll();
    }
    
    createNew(bugName : string) : Bug {
         const newBug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.save(newBug);
        return newBug;
    }

    toggle(bug : Bug) : Bug {
        //bug.isClosed = !bug.isClosed;
        const toggledBug = { ...bug, isClosed : !bug.isClosed}
        this.bugStorage.save(toggledBug);
        return toggledBug;
    }

    remove(bug : Bug){
        this.bugStorage.remove(bug);
    }
}
    