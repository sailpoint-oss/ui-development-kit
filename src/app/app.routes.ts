import { Routes } from '@angular/router';
import { AccountsComponent, AttachRuleComponent, CertificationManagementComponent, ColabComponent, CronicleComponent, IdentitiesComponent, OwnerGraphComponent, REPORT_EXAMPLE_ROUTES, ThemePickerComponent, TransformBuilderComponent, TransformsComponent, ConfigHubComponent, NERM_DASHBOARD_ROUTES } from 'sailpoint-components';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components';
 
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'theme-picker',
    component: ThemePickerComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'component-selector',
    loadComponent: () => import('./component-selector/component-selector.component').then(m => m.ComponentSelectorComponent)
  },
  {
    path: 'attach-rule',
    component: AttachRuleComponent
  },

  {
    path: 'theme-picker',
    component: ThemePickerComponent
  },
  {
    path: 'report-example',
    children: REPORT_EXAMPLE_ROUTES
  },
  {
    path: 'identities',
    component: IdentitiesComponent
  },

  {
    path: 'certification-management',
    component: CertificationManagementComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },

  {
    path: 'cronicle',
    component: CronicleComponent
  },

  {
  path: 'owner-graph',
  component: OwnerGraphComponent
  },
  
  {
    path: 'colab',
    component: ColabComponent
  }, 
  {
    path: 'config-hub',
    component: ConfigHubComponent
  },

  {
    path: 'nerm-dashboard',
    children: NERM_DASHBOARD_ROUTES
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];
