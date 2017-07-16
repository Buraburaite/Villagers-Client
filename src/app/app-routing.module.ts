import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './services/loggedin.guard';
import { LoggedOutGuard } from './services/loggedout.guard';

import { IndexRouteComponent } from './routes/index-route/index-route.component';
import { HomeRouteComponent }  from './routes/home-route/home-route.component';

const routes: Routes = [
  {
    path: '',
    component: IndexRouteComponent,
    canActivate: [LoggedOutGuard]
  },{
    path: ':id',
    component: HomeRouteComponent,
    canActivate: [LoggedInGuard] // client-side sessions don't work right currently, so this is mostly lip-service
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
