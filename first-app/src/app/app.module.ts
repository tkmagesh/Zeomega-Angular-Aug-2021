import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

@NgModule({

  /* All UI entities are registered (Component, Directive, Pipe) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    SalaryCalculatorComponent
  ],
  /* All the dependent modules are registered here */
  imports: [
    BrowserModule,
    FormsModule
  ],
  /* All services are registered */
  providers: [],

  /* The root component of the application */
  bootstrap: [
    AppComponent, 
    GreeterComponent,
    CalculatorComponent,
    SalaryCalculatorComponent
  ],

})
export class AppModule { }
