import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { HomeRoutingModule } from './home/home-routing.module';
import { Devdays2025Component } from './devdays-2025/devdays-2025.component';
import { IdentitiesComponent } from './identities/identities.component';
import { campaignsComponent } from './campaigns/campaigns.component';
import { TransformBuilderComponent } from './transform-builder/transform-builder.component';
import { BuilderComponent } from './builder/builder.component';


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
    path: 'campaigns',
    component: campaignsComponent
  },
  {
    path: 'transform-builder',
    component: TransformBuilderComponent
  },
  {
    path: 'builder',
    component: BuilderComponent
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
