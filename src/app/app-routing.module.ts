import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { HomeRoutingModule } from './home/home-routing.module';
import { Devdays2025Component } from './devdays-2025/devdays-2025.component';
import { IdentitiesComponent } from './identities/identities.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'transforms',
    component: Devdays2025Component
  },
  {
    path: 'identities',
    component: IdentitiesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
