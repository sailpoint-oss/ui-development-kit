
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReportDataService } from '../report-data.service';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

@Component({
  selector: 'app-identity-detail-view',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule
],
  templateUrl: './identity-detail-view.component.html',
  styleUrl: './identity-detail-view.component.scss',
})
export class IdentityDetailViewComponent implements OnInit {
  // Data properties
  displayedIdentities: Identity[] = [];
  allIdentities: Identity[] = [];
  loading = true;
  filterCategory = '';
  filterValue = '';
  title = '';

  // Table configuration
  displayedColumns: string[] = [
    'name',
    'alias',
    'emailAddress',
    'identityStatus',
    'lifecycleState',
  ];
  pageSize = 10;
  pageIndex = 0;
  totalCount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: ReportDataService
  ) {}

  ngOnInit() {
    // Get the filter category and value from the route params
    this.route.queryParams.subscribe((params) => {
      this.filterCategory = params['category'] || '';
      this.filterValue = params['value'] || '';
      this.title = this.generateTitle(this.filterCategory, this.filterValue);

      this.loadFilteredIdentities();
    });
  }

  private loadFilteredIdentities() {
    this.loading = true;

    // Get all identities from the service
    const allIdentities = this.dataService.getIdentities();

    // Apply filtering based on category and value
    if (this.filterCategory && this.filterValue) {
      this.allIdentities = this.filterIdentities(
        allIdentities,
        this.filterCategory,
        this.filterValue
      );
    } else {
      this.allIdentities = [...allIdentities];
    }

    this.totalCount = this.allIdentities.length;
    this.updateDisplayedIdentities();
    this.loading = false;
  }

  private filterIdentities(
    identities: Identity[],
    category: string,
    value: string
  ): Identity[] {
    return identities.filter((identity) => {
      switch (category) {
        case 'status':
          return identity.identityStatus === value;

        case 'manager':
          // For manager status (with/without)
          if (value === 'With Manager') {
            return identity.managerRef && identity.managerRef.id;
          } else {
            return !identity.managerRef || !identity.managerRef.id;
          }

        case 'lifecycle':
          // special case for "Unknown" filter
          if (value === 'Unknown') {
            // neither a populated lifecycleState nor a cloudLifecycleState attribute
            const hasStateName = !!identity.lifecycleState?.stateName;
            const hasCloud = !!(
              identity.attributes &&
              'cloudLifecycleState' in identity.attributes &&
              identity.attributes.cloudLifecycleState
            );
            return !hasStateName && !hasCloud;
          }

          // normal matching
          if (identity.lifecycleState?.stateName) {
            return identity.lifecycleState.stateName === value;
          }
          if (
            identity.attributes &&
            'cloudLifecycleState' in identity.attributes
          ) {
            return identity.attributes.cloudLifecycleState === value;
          }
          return false;

        default:
          return true;
      }
    });
  }

  private generateTitle(category: string, value: string): string {
    if (!category || !value) {
      return 'All Identities';
    }

    switch (category) {
      case 'status':
        return `Identities with Status: ${value}`;
      case 'manager':
        return `Identities ${value}`; // 'With Manager' or 'Without Manager'
      case 'lifecycle':
        return `Identities in Lifecycle State: ${value}`;
      default:
        return `Filtered Identities: ${value}`;
    }
  }

  private updateDisplayedIdentities() {
    const startIndex = this.pageIndex * this.pageSize;
    this.displayedIdentities = this.allIdentities.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedIdentities();
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.allIdentities = this.allIdentities.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name || '', b.name || '', isAsc);
        case 'alias':
          return this.compare(a.alias || '', b.alias || '', isAsc);
        case 'emailAddress':
          return this.compare(
            a.emailAddress || '',
            b.emailAddress || '',
            isAsc
          );
        case 'identityStatus':
          return this.compare(
            a.identityStatus || '',
            b.identityStatus || '',
            isAsc
          );
        case 'lifecycleState': {
          const aState = a.lifecycleState?.stateName || '';
          const bState = b.lifecycleState?.stateName || '';
          return this.compare(aState, bState, isAsc);
        }
        default:
          return 0;
      }
    });

    this.updateDisplayedIdentities();
  }

  private compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  navigateBack() {
    void this.router.navigate(['/report-example']);
  }

  formatLifecycleState(identity: Identity): string {
    if (identity.lifecycleState && identity.lifecycleState.stateName) {
      return identity.lifecycleState.stateName;
    } else if (
      identity.attributes &&
      'cloudLifecycleState' in identity.attributes
    ) {
      return identity.attributes.cloudLifecycleState as string;
    }
    return 'Unknown';
  }
}
