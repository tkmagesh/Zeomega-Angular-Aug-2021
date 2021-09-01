import { Bug } from "../models/bug.model";

export class BugOperationsService{
    private currentBugId : number = 0;
    
    createNew(bugName : string) : Bug {
         const newBug = {
            id : ++this.currentBugId /* TO BE FIXED */,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return newBug;
    }

    toggle(bug : Bug) {
        bug.isClosed = !bug.isClosed;
    }
}