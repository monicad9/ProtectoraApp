import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from '../services/login-guard.service';
import { LoginService } from '../services/login.service';
import { LoginComponent }       from './login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginService,
    LoginGuardService
  ]
})
export class LoginRoutingModule {}