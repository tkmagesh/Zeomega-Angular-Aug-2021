import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug.model";
import { BugApiService } from "./bugApi.service";
import { BugStorageService } from "./bugStorage.service";
import { Store } from '@ngrx/store';
import { addBugAction, removeBugAction, loadBugAction, replaceBugAction } from '../actions/bug.actions';

@Injectable({
    providedIn: "root"
})
export class BugOperationsService{
    

    constructor(
        private bugStorage : BugStorageService,
        private store : Store<{bugs : Bug[]}>
    ){

    }

    getAll() {
        //return this.bugStorage.getAll();
        let bugs =  this.bugStorage.getAll();
        this.store.dispatch(loadBugAction(bugs));
    }

    getById(id : string) : Bug{
        return this.bugStorage.getById(id);
    }
    
    createNew(bugName : string) {
         const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        const newBug = this.bugStorage.save(newBugData);
        this.store.dispatch(addBugAction(newBug));
    }

    toggle(bug : Bug) {
        //bug.isClosed = !bug.isClosed;
        const toggledBug = { ...bug, isClosed : !bug.isClosed}
        this.bugStorage.save(toggledBug);
        this.store.dispatch(replaceBugAction(toggledBug));

    }

    remove(bug : Bug) : void {
        this.bugStorage.remove(bug);
        this.store.dispatch(removeBugAction(bug));
    }
    /* constructor(
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
    } */
}
    