import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ElapsedPipe,
    SortPipe,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
   /* 
    BugOperationsService,
    BugStorageService 
    */
    {provide : 'STORAGE', useValue : window.localStorage}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
