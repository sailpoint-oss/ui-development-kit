import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { Devdays2025Component } from './devdays-2025/devdays-2025.component';
import { IdentitiesComponent } from './identities/identities.component';
import { campaignsComponent } from './campaigns/campaigns.component';
import { SailPointImportsComponent } from './sailpoint-imports/sailpoint-imports.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent)
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
    path: 'component',
    component: SailPointImportsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
