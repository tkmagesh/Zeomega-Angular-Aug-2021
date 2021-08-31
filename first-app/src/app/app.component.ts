import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  /* presentation */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* state */
  userChoice : string = '';

  constructor(){
  
  }

  
}
