import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros.component';
import { WorkComponent } from './components/work/work.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { AdminGuardService } from './services/Auth/admin-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/work',
    pathMatch: 'full'
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'heroes',
    component: HerosComponent,
    canActivate: [AdminGuardService]
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
