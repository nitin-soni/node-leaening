import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
// import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { AuthService } from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    SigninComponent, 
    SignupComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent, 
    AuthComponent
  ],
  imports: [
    CommonModule,
    //AuthRoutingModule
    RouterModule
  ],
  exports: [
    SigninComponent, 
    SignupComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent
  ],
  providers: [
    // AuthGuard,
    AuthService,
  ],
})
export class AuthModule { }
