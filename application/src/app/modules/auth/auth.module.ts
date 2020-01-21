import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    SigninComponent, 
    SignupComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
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
