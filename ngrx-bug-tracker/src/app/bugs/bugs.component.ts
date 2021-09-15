import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug.model';
import { BugOperationsService } from './services/bugOperartions.service';
import { Store } from '@ngrx/store';
import { addBugAction, removeBugAction, loadBugAction } from './actions/bug.actions';

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
    private store : Store<{bugs : Bug[]}>
   /*  private router : Router, */
  ) { }

  ngOnInit(): void {
    this.store.select('bugs')
      .subscribe(bugs => this.bugs = bugs);
    
    let bugsInStorage = this.bugOperations.getAll();
    this.store.dispatch(loadBugAction(bugsInStorage));
      
  }

  //subscription to the child (bug-edit) component
  onBugCreated(newBug : Bug){
    // immutable state
    this.store.dispatch(addBugAction(newBug));
  }
  

  onRemoveClick(bug : Bug){
    this.remove(bug);
  }

  private remove(bugToRemove : Bug){
    this.bugOperations
      .remove(bugToRemove)
    this.store.dispatch(removeBugAction(bugToRemove));
    
  }

  onBugNameClick(bug : Bug){
    let toggledBug = this.bugOperations.toggle(bug)
    this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
    
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
 