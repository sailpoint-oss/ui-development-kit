import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SailPointSDKService } from 'sailpoint-components';
import { TenantV2025 } from 'sailpoint-api-client';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tenant-data',
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './tenant-data-card.component.html',
  styleUrl: './tenant-data-card.component.scss'
})

export class TenantDataCardComponent implements OnInit {
  tenantDetails: TenantV2025 | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {

  }

  ngOnInit() {
    void this.getTenantDetails();
  }

  async getTenantDetails() {
    this.loading = true;
    try {
      const tenant = await this.sdk.getTenant();
      console.log(tenant.data);
      this.tenantDetails = tenant.data;
    } catch (error) {
      console.error('Error loading tenant details:', error);
    } finally {
      this.loading = false;
    }
  }
}
