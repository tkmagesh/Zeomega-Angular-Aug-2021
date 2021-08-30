import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* 
import * as calc from './calculator';
console.log(calc); 
*/

/* 
import * as calc from './calculator';
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator';
//let add = calc.add;
let { add } = calc;
console.log(add(100,200)); 
*/

import { add } from './calculator';
console.log(add(1000,2000)); 

//importing the default exported entity from the module


/* import isOdd from './calculator';
console.log(isOdd(10)); */

import utils from './calculator'
console.log(utils.isOdd(100));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
