import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiosResponse } from 'axios';
import { IdentityV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from 'sailpoint-components';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-identities',
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './identities.component.html',
  styleUrl: './identities.component.scss'
})
export class IdentitiesComponent implements OnInit {
  identities: AxiosResponse<Array<IdentityV2025>, any> | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {
  }

  ngOnInit() {
   void this.getIdentities();
  }

  async getIdentities() {
    this.loading = true;
    try {
      const identities = await this.sdk.listIdentities({
        count: true
      });
      this.identities = identities;
    } catch (error) {
      console.error('Error loading identities:', error);
    } finally {
      this.loading = false;
    }
  }
}