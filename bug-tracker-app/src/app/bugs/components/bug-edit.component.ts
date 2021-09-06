import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Bug } from "../models/bug.model";
import { BugOperationsService } from "../services/bugOperartions.service";


@Component({
    selector: 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" [(ngModel)]="newBugName"> 
            <span> [ {{newBugName.length}} ] </span>
            <input type="button" value="Add New" (click)="onAddNewClick()">
        </section>
    `
})
export class BugEditComponent{
    newBugName : string = '';

    @Output()
    created : EventEmitter<Bug> = new EventEmitter<Bug>();
    
    constructor(
        private bugOperations : BugOperationsService,
        private router : Router,
    ){

    }

    onAddNewClick() {
    //const newBug = this.bugOperations.createNew(this.newBugName);
    //state mutation
    //this.bugs.push(newBug);

    // immutable state
    //this.bugs = [...this.bugs, newBug];
    /* 
    this.bugOperations
        .createNew(this.newBugName)
        .subscribe(newBug => this.created.emit(newBug)); 
        */

    this.bugOperations
        .createNew(this.newBugName)
        .subscribe(() => {
            this.router.navigate(['/bugs']);
        })
  }
}
