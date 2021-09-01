import { Inject, Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";

@Injectable({
    providedIn: "root"
})
export class BugStorageService{
    private slug : string = 'bug'
    private currentBugId : number = 0;
    
    //private storage : Storage = window.localStorage
    
    constructor(@Inject('STORAGE') private storage : Storage){

    }

    private createKey(id : number) : string {
        return `${this.slug}-${id}`
    }

    getAll() : Bug[]{
        let bugs : Bug[] = [];
        for (let idx = 0; idx < this.storage.length; idx++){
            let key = this.storage.key(idx) || '';
            if (key.startsWith(this.slug)){
                let value = this.storage.getItem(key);
                if (value){
                    let bug = JSON.parse(value);
                    this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
                    bugs.push(bug);
                }
            }
        }
        return bugs;
    }

    save(bug : Bug) {
        if (bug.id === 0){
            bug.id = ++this.currentBugId;
        }
        let key = this.createKey(bug.id);
        let value = JSON.stringify(bug);
        this.storage.setItem(key, value);    
    }

    remove(bug : Bug) {
        let key = this.createKey(bug.id);
        this.storage.removeItem(key);
    }       
}