import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiosResponse } from 'axios';
import { IdentityProfile } from 'sailpoint-api-client';
import { SailPointSDKService } from 'sailpoint-components';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-identity-profiles',
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './identity-profiles.component.html',
  styleUrl: './identity-profiles.component.scss'
})
export class IdentityProfilesComponent implements OnInit {

  identityProfiles: AxiosResponse<Array<IdentityProfile>, any> | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {

  }

  ngOnInit() {
    void this.getIdentityProfiles();
  }

  async getIdentityProfiles() {
    this.loading = true;
    try {
      const identityProfiles = await this.sdk.listIdentityProfiles({
        count: true
      });
      this.identityProfiles = identityProfiles;
    } catch (error) {
      console.error('Error loading identity profiles:', error);
    } finally {
      this.loading = false;
    }
  }
}