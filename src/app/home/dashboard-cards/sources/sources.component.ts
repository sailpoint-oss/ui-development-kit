import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from 'sailpoint-components';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AxiosResponse } from 'axios';


@Component({
  selector: 'app-sources',
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './sources.component.html',
  styleUrl: './sources.component.scss'
})
export class SourcesComponent implements OnInit {
  sources: AxiosResponse<Array<SourceV2025>, any> | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {
  }

  ngOnInit() {
    void this.getSources();
  }

  async getSources() {
    this.loading = true;
    try {
      const sources = await this.sdk.listSources({
        count: true
      });
      this.sources = sources;
    } catch (error) {
      console.error('Error loading sources:', error);
    } finally {
      this.loading = false;
    }
  }
}
