import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { AuthGuard } from './guards/auth.guard';
import {paths} from './app-path';
import { PathResolveService  } from './services/path-resolve.service'
import { from } from 'rxjs';

import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { SigninComponent } from './modules/auth/components/signin/signin.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { ForgotPasswordComponent } from './modules/auth/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './modules/auth/components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: paths.index,
    pathMatch: 'full',
    // redirectTo: paths.dashboard
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    component: AuthComponent,
    children: [
      { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent },
        { path: 'reset-password', component: ResetPasswordComponent },
      ]
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
