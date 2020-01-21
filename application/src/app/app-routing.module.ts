import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { AuthGuard } from './guards/auth.guard';
import {paths} from './app-path';
import { PathResolveService  } from './services/path-resolve.service'
import { from } from 'rxjs';

console.log(paths)

const routes: Routes = [
  {
    path: paths.index,
    // pathMatch: 'full',
    // redirectTo: paths.dashboard
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: paths.dashboard,
  //   component: AppComponent,
  //   canActivate: [AuthGuard]
  // },
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
