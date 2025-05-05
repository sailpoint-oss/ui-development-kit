import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SailPointSDKService } from '../core/services/electron/sailpoint-sdk.service';
import { MatDialog } from '@angular/material/dialog';
import { GetCampaign200ResponseV2025 } from 'sailpoint-api-client';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-campaigns',
    imports: [
        MatTableModule,
        CommonModule,
        MatProgressSpinnerModule
    ],
    templateUrl: './campaigns.component.html',
    styleUrl: './campaigns.component.scss'
})
export class campaignsComponent implements OnInit {
  campaigns: GetCampaign200ResponseV2025[] = [];
  displayedColumns: string[] = [];
  loading = false;
  hasDataLoaded = false; // ✅ New flag

  constructor(private dialog: MatDialog, private sdk: SailPointSDKService) {}

  ngOnInit() {
     void this.loadCampaigns();
  }

  async loadCampaigns() {
    this.loading = true;
    this.hasDataLoaded = false;
    try {
      const response = await this.sdk.getActiveCampaigns();
      this.campaigns = response.data ?? [];

      if (this.campaigns.length > 0) {
        this.displayedColumns = Object.keys(this.campaigns[0]);
      }

      this.hasDataLoaded = true;
    } catch (error) {
      this.openMessageDialog('Error loading campaigns: ' + String(error), 'Error');
    } finally {
      this.loading = false;
    }
  }

  openMessageDialog(errorMessage: string, title: string): void {
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: title,
        message: errorMessage,
      },
    });
  }
}
