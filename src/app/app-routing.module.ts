import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { TransformGeneratorComponent } from './transform-generator/transform-generator.component';

import { HomeRoutingModule } from './home/home-routing.module';
import { HpTransformComponent } from './hp-transform/hp-transform.component';
import {Devdays2025Component } from './devdays-2025/devdays-2025.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'transform-builder',
    component: TransformGeneratorComponent
  },
  {
    path: 'transform-ai',
    component: HpTransformComponent
  },
  {
    path: 'devdays-2025',
    component: Devdays2025Component
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
