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
  sortAttrName : string = '';
  sortByDesc : boolean = false;
  newBugName : string = '';

  constructor(private bugOperations : BugOperationsService) { }

  ngOnInit(): void {
    this.bugs = this.bugOperations.getAll();
  }

  onAddNewClick() {
    const newBug = this.bugOperations.createNew(this.newBugName);
    //this.bugs.push(newBug);
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
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1: result, 0);
  }

}
 