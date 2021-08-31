import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newBugName : string) {
    this.bugs.push(newBugName);
  }

  onRemoveClick(idx : number){
    this.bugs.splice(idx, 1);
  }

}
