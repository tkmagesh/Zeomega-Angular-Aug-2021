import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug.model';
import { BugOperationsService } from './services/bugOperartions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private bugOperations : BugOperationsService,
    private router : Router,
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
    this.bugOperations
      .remove(bugToRemove)
      .subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id))
    
  }

  onBugNameClick(bug : Bug){
    this.bugOperations
      .toggle(bug)
      .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug));
    
  }

  onRemoveClosedClick(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    closedBugs.forEach(closedBug => this.remove(closedBug));
  }

  /* 
  onDetailsClick(id : number){
     this.router.navigate(['/details', id], { skipLocationChange : true});
  } 
  */
}
 