import { Routes } from '@angular/router';
import { NermDashboardComponent } from './nerm-dashboard.component';
import { NermAssignmentDetailComponent } from './nerm-assignment-detail/nerm-assignment-detail.component';
import { NermDashboardSettingsComponent } from './nerm-dashboard-settings/nerm-dashboard-settings.component';

export const NERM_DASHBOARD_ROUTES: Routes = [
  {
    path: 'settings',
    component: NermDashboardSettingsComponent,
  },
  {
    path: 'assignment/:id',
    component: NermAssignmentDetailComponent,
  },
  {
    path: '',
    component: NermDashboardComponent,
  },
];
