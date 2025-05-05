import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { Devdays2025Component } from './devdays-2025/devdays-2025.component';
import { IdentitiesComponent } from './identities/identities.component';
import { campaignsComponent } from './campaigns/campaigns.component';

// Make sure all these components are standalone or imported correctly elsewhere

export const appRoutes: Routes = [
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
    path: '**',
    component: PageNotFoundComponent
  }
];
