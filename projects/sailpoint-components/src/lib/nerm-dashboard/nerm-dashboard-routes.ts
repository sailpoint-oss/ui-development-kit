import { Routes } from '@angular/router';
import { NermDashboardComponent } from './nerm-dashboard.component';
import { NermAssignmentDetailComponent } from './nerm-assignment-detail/nerm-assignment-detail.component';

export const NERM_DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: NermDashboardComponent,
  },
  {
    path: 'assignment/:id',
    component: NermAssignmentDetailComponent,
  },
];
