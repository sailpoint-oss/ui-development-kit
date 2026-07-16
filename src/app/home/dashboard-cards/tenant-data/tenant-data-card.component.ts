import { Component, OnInit } from '@angular/core';

import { SailPointSDKService } from 'sailpoint-components';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import type { Tenant } from 'sailpoint-api-client/dist/tenant/api';

@Component({
  selector: 'app-tenant-data',
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './tenant-data-card.component.html',
  styleUrl: './tenant-data-card.component.scss'
})

export class TenantDataCardComponent implements OnInit {
  tenantDetails: Tenant | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {

  }

  ngOnInit() {
    void this.getTenantDetails();
  }

  async getTenantDetails() {
    this.loading = true;
    try {
      const tenant = await this.sdk.getTenantV1();
      console.log(tenant.data);
      this.tenantDetails = tenant.data;
    } catch (error) {
      console.error('Error loading tenant details:', error);
    } finally {
      this.loading = false;
    }
  }
}
