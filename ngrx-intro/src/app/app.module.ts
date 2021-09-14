import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'
import { spinnerReducer } from './spinner.reducer';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [
    AppComponent
    ,SpinnerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 
      spinner: spinnerReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
