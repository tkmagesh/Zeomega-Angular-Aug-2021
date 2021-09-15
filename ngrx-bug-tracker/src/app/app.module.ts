import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component'
import { BugEditComponent } from './bugs/components/bug-edit.component';
import { BugStatsComponent } from './bugs/components/bug-stats.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';
import { StoreModule } from '@ngrx/store';
import { BugsReducer } from './bugs/reducers/bugs.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BugEditComponent,
    BugStatsComponent,
    BugsComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , FormsModule
    , StoreModule.forRoot({
        bugs : BugsReducer
    }, {})
  ],
  providers: [
    {provide : 'STORAGE', useValue : window.localStorage}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
