import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit.component';
import { UtilsModule } from './utils/utils.module';
import { BugDetailsComponent } from './bugs/components/bug-details.component';

let routes : Routes = [
  { path: 'bugs', component : BugsComponent },
  { path : 'add', component : BugEditComponent },
  { path : 'details/:id', component : BugDetailsComponent },
  { path : '', redirectTo : '/bugs', pathMatch : 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
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
