import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Bug } from "../models/bug.model";
import { BugOperationsService } from "../services/bugOperartions.service";

@Component({
    selector : 'app-bug-details',
    template : `
        <h3>Bug Details</h3>
        <hr/>
        <h2>{{bug.name}}</h2>
        <div>isClosed : {{bug.isClosed}}</div>
        <a [routerLink]="['/bugs']">Bugs List</a>
    `
})
export class BugDetailsComponent implements OnInit{
    
    bug: Bug = {
        id : 0,
        name : '',
        isClosed : false,
        createdAt : new Date()
    };


    constructor (private bugOperations : BugOperationsService,
        private router : ActivatedRoute){
    }

    ngOnInit(){
        this.router.params.subscribe(params => {
            let id = params['id'];
            this.bugOperations.getById(id)
                .subscribe(bug => this.bug = bug);
        })
    }

}