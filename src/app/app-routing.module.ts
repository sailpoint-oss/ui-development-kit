import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { campaignsComponent } from './campaigns/campaigns.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { IdentitiesComponent } from './identities/identities.component';
import { PageNotFoundComponent } from './shared/components';
import { TransformBuilderComponent } from './transform-builder/transform-builder.component';
import { TransformsComponent } from './transforms/transforms.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    path: 'transforms',
    component: TransformsComponent
  },
  {
    path: 'transform-builder',
    component: TransformBuilderComponent
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
