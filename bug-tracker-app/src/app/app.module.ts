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
import { LoginComponent } from './auth/login.component';
import { LoggedInGuard } from './auth/loggedInGuard';

let routes : Routes = [
  { path: 'bugs', component : BugsComponent, canActivate : [LoggedInGuard] },
  { path : 'add', component : BugEditComponent },
  { path : 'details/:id/:dummy', component : BugDetailsComponent},
  { path : 'login', component : LoginComponent},
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
    LoginComponent
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
