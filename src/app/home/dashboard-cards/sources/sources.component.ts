import { Component, OnInit } from '@angular/core';

import { SailPointSDKService } from 'sailpoint-components';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AxiosResponse } from 'axios';
import type { Source } from 'sailpoint-api-client/dist/sources/api';

@Component({
  selector: 'app-sources',
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './sources.component.html',
  styleUrl: './sources.component.scss'
})
export class SourcesComponent implements OnInit {
  sources: AxiosResponse<Array<Source>, any> | undefined;
  loading = true;

  constructor(private sdk: SailPointSDKService) {
  }

  ngOnInit() {
    void this.getSources();
  }

  async getSources() {
    this.loading = true;
    try {
      const sources = await this.sdk.listSourcesV1({
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
