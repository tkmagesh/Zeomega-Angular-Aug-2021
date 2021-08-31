import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug.model';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  private currentBugId : number = 0;

  bugs : Bug[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newBugName : string) {
    const newBug = {
      id : ++this.currentBugId /* TO BE FIXED */,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    this.bugs.push(newBug);
  }

  onRemoveClick(idx : number){
    this.bugs.splice(idx, 1);
  }

}