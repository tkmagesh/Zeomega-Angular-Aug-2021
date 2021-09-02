import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpClientModule,
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
