import { Component, OnInit } from '@angular/core';

import { AxiosResponse } from 'axios';

import { SailPointSDKService } from 'sailpoint-components';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

@Component({
  selector: 'app-identities',
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './identities.component.html',
  styleUrl: './identities.component.scss'
})
export class IdentitiesComponent implements OnInit {
  identities: AxiosResponse<Array<Identity>, any> | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {
  }

  ngOnInit() {
   void this.getIdentities();
  }

  async getIdentities() {
    this.loading = true;
    try {
      const identities = await this.sdk.listIdentitiesV1({
        count: true
      });
      console.log(identities)
      this.identities = identities;
    } catch (error) {
      console.error('Error loading identities:', error);
    } finally {
      this.loading = false;
    }
  }
}