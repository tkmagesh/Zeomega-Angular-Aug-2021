import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  message = "[default greet message]";

  constructor() { }

  ngOnInit(): void {
  }

  onBtnGreetClick(userName : string){
    this.message = `Hi ${userName}, Have a nice day!`
  }
}
