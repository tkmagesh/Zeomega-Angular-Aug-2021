import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug.model';
import { BugOperationsService } from './services/bugOperartions.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css'],
  encapsulation: ViewEncapsulation.None /* makes the styles to be inherited by the child components */
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = [];
  sortAttrName : string = '';
  sortByDesc : boolean = false;
  

  constructor(
    private bugOperations : BugOperationsService
  ) { }

  ngOnInit(): void {
    this.bugOperations
      .getAll()
      .subscribe(bugs => this.bugs = bugs);
  }

  //subscription to the child (bug-edit) component
  onBugCreated(newBug : Bug){
    // immutable state
    this.bugs = [...this.bugs, newBug];
  }
  

  onRemoveClick(bug : Bug){
    this.remove(bug);
  }

  private remove(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove);
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
  }

  onBugNameClick(bug : Bug){
    const toggledBug = this.bugOperations.toggle(bug);
    this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
  }

  onRemoveClosedClick(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    closedBugs.forEach(closedBug => this.remove(closedBug));
  }

  /* TO BE FIXED */
  getClosedCount() : number {
    console.log('getClosedCount triggered');
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1: result, 0);
  }

}
 