import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ElapsedPipe,
    SortPipe,
    ClosedCountPipe
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
