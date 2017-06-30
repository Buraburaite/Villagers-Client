import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexRouteComponent } from './routes/index-route/index-route.component';
import { HomeRouteComponent }  from './routes/home-route/home-route.component';

const routes: Routes = [
  {
    path: '',
    component: IndexRouteComponent
  },{
    path: ':id',
    component: HomeRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
