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
    this.bugs = this.bugOperations.getAll();
  }

  onAddNewClick(newBugName : string) {
    const newBug = this.bugOperations.createNew(newBugName);
    this.bugs.push(newBug);
  }

  onRemoveClick(bug : Bug){
    this.remove(bug);
  }

  private remove(bug : Bug){
    this.bugOperations.remove(bug);
    this.bugs.splice(this.bugs.indexOf(bug), 1);
  }

  onBugNameClick(bug : Bug){
    this.bugOperations.toggle(bug);
  }

  onRemoveClosedClick(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    closedBugs.forEach(closedBug => this.remove(closedBug));
  }

  /* TO BE FIXED */
  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1: result, 0);
  }

}
 