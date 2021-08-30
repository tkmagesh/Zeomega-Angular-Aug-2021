import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({

  /* All UI entities are registered (Component, Directive, Pipe) */
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  /* All the dependent modules are registered here */
  imports: [
    BrowserModule
  ],
  /* All services are registered */
  providers: [],

  /* The root component of the application */
  bootstrap: [AppComponent, GreeterComponent],

})
export class AppModule { }
