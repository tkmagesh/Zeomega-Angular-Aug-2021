import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug.model';
import { BugOperationsService } from './services/bugOperartions.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

 

  bugs : Bug[] = [];

  constructor(private bugOperations : BugOperationsService) { }

  ngOnInit(): void {
  }

  onAddNewClick(newBugName : string) {
    const newBug = this.bugOperations.createNew(newBugName);
    this.bugs.push(newBug);
  }

  onRemoveClick(idx : number){
    this.bugs.splice(idx, 1);
  }

  onBugNameClick(bug : Bug){
    this.bugOperations.toggle(bug);
  }

  onRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  /* TO BE FIXED */
  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1: result, 0);
  }

}
 