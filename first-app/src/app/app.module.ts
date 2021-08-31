import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator.model';
import { SalaryCalculatorModelV2 } from './salary-calculator/salary-calculator-v2.model';
import { ProductsComponent } from './products/products.component';

@NgModule({

  /* All UI entities are registered (Component, Directive, Pipe) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    SalaryCalculatorComponent,
    ProductsComponent
  ],
  /* All the dependent modules are registered here */
  imports: [
    BrowserModule,
    FormsModule
  ],
  /* All services are registered */
  providers: [
    /* { provide: SalaryCalculatorModel, useClass: SalaryCalculatorModel } */
    SalaryCalculatorModel
    /* { provide: SalaryCalculatorModel, useValue: new SalaryCalculatorModel()} */
  ],

  /* The root component of the application */
  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }
