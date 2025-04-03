import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { TransformGeneratorComponent } from './transform-generator/transform-generator.component';

import { HomeRoutingModule } from './home/home-routing.module';

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
