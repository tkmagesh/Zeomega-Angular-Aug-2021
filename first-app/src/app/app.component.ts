import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  /* presentation */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* state */
  title = 'first-app';

  constructor(){
    /* setTimeout(() => {
      this.title = 'My App'
    }, 10000); */
  }

  changeTitle(){
    this.title = 'My App';
  }
}
