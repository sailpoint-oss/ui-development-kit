import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

import { SailPointSDKService } from '../sailpoint-sdk.service';
import { ReportDataService } from './report-data.service';
import { ConfigService } from '../services/config.service';
import { Subject, takeUntil } from 'rxjs';

// Import chart components
import { IdentityStatusChartComponent } from './identity-status-chart/identity-status-chart.component';
import { ManagerDistributionChartComponent } from './manager-distribution-chart/manager-distribution-chart.component';
import { LifecycleStateChartComponent } from './lifecycle-state-chart/lifecycle-state-chart.component';
import { AxiosResponse } from 'axios';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

@Component({
  selector: 'app-report-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDividerModule,
    IdentityStatusChartComponent,
    ManagerDistributionChartComponent,
    LifecycleStateChartComponent
  ],
  templateUrl: './report-example.component.html',
  styleUrl: './report-example.component.scss'
})
export class ReportExampleComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  title = 'Identity Analytics';
  loadingMessage = 'Loading identity data...';
  isCancelled = false;
  isLoadingComplete = false;
  isDark = false;
  
  // Data properties
  identities: Identity[] = [];
  loading = false;
  hasError = false;
  errorMessage = '';
  totalLoaded = 0;

  constructor(
    private sdk: SailPointSDKService, 
    private dataService: ReportDataService,
    private configService: ConfigService
  ) {
    this.configService.isDark$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isDark => {
        this.isDark = isDark;
      });
  }
  
  ngOnInit() {
    // Check if data is already loaded in the service
    if (this.dataService.hasLoadedData()) {
      console.log('Using cached identity data');
      this.identities = this.dataService.getIdentities();
      this.totalLoaded = this.identities.length;
      this.isLoadingComplete = this.dataService.isDataComplete();
    } else {
      // No cached data, load from API
      void this.loadIdentities();
    }
  }
  
  cancelLoading() {
    this.isCancelled = true;
    console.log('Loading cancelled by user');
    this.loadingMessage = 'Loading cancelled. Displaying partial results...';
  }

  async loadIdentities() {
    this.loading = true;
    this.hasError = false;
    this.identities = [];
    this.isCancelled = false;
    this.isLoadingComplete = false;
    
    const BATCH_SIZE = 250; // API max limit
    const MAX_PARALLEL_REQUESTS = 8; // Number of parallel fetch threads
    let offset = 0;
    this.totalLoaded = 0;
    
    try {
      // First, make one request to get an idea of the total count
      const initialResponse = await this.sdk.listIdentitiesV1({
        limit: BATCH_SIZE,
        offset: 0,
        count: true
      });
      
      const initialBatch = initialResponse.data || [];
      this.identities = [...initialBatch];
      this.totalLoaded = initialBatch.length;
      
      // If the first batch is less than BATCH_SIZE, we already have all the data
      if (initialBatch.length < BATCH_SIZE) {
        this.isLoadingComplete = true;
        console.log(`Completed loading ${this.identities.length} total identities`);
        this.dataService.setIdentities(this.identities, this.isLoadingComplete);
        this.loading = false;
        return;
      }
      
      // Start with offset after the first batch
      offset = BATCH_SIZE;
      
      // Continue fetching batches in parallel until cancelled or no more data
      while (!this.isCancelled) {
        this.loadingMessage = `Loading identities... (${this.totalLoaded} loaded so far)`;
        
        // Create an array of promises for parallel requests
        const batchPromises: Promise<AxiosResponse<Identity[]>>[] = [];
        
        for (let i = 0; i < MAX_PARALLEL_REQUESTS && !this.isCancelled; i++) {
          const currentOffset = offset + (i * BATCH_SIZE);
          
          // Create a promise for each batch request
          const batchPromise = this.sdk.listIdentitiesV1({
            limit: BATCH_SIZE,
            offset: currentOffset,
            count: true
          });
          
          batchPromises.push(batchPromise);
        }
        
        if (batchPromises.length === 0) {
          break; // Exit if no promises were created (cancelled)
        }
        
        // Wait for all parallel requests to complete
        const batchResponses = await Promise.all(batchPromises);
        
        // Process all responses
        let hasMoreData = false;
        
        for (const response of batchResponses) {
          const batchData = response.data || [];
          
          // Add the batch to our collected identities
          this.identities = [...this.identities, ...batchData];
          
          // Check if this batch indicates more data available
          if (batchData.length === BATCH_SIZE) {
            hasMoreData = true;
          }
        }
        
        this.totalLoaded = this.identities.length;
        
        // Update offset for next parallel batch
        offset += (BATCH_SIZE * MAX_PARALLEL_REQUESTS);
        
        // If no batch was full size, we've reached the end
        if (!hasMoreData) {
          this.isLoadingComplete = true;
          break;
        }
      }
      
      if (this.isCancelled) {
        console.log(`Loading cancelled. Loaded ${this.identities.length} identities so far.`);
      } else {
        console.log(`Completed loading ${this.identities.length} total identities`);
        this.isLoadingComplete = true;
      }
      
      this.loadingMessage = 'Loading identity data...'; // Reset the message for next time
      
      // Store identities in the shared service with completion state
      this.dataService.setIdentities(this.identities, this.isLoadingComplete);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = `Error loading identities: ${String(error)}`;
    } finally {
      this.loading = false;
    }
  }
  
  
  refresh() {
    // Force reload from API, ignoring cache
    this.isCancelled = false;
    this.isLoadingComplete = false;
    void this.loadIdentities();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
