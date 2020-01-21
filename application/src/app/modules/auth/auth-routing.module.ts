import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component'
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent,
    children: [
      { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'fogot-password', component: ForgotPasswordComponent },
        { path: 'reset-password', component: ResetPasswordComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
