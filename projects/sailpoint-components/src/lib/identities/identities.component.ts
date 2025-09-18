import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

// SailPoint types and services
import {
  IdentityV2025,
  SearchDocumentsV2025,
  SearchV2025ApiSearchPostRequest,
} from 'sailpoint-api-client';
import { SailPointSDKService } from '../sailpoint-sdk.service';

// Local components
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { SearchBarComponent } from './utils/search-bar/search-bar.component';
import { ColumnCustomizerComponent } from './utils/column-customizer/column-customizer.component';

@Component({
  selector: 'app-identities',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    SearchBarComponent,
    ColumnCustomizerComponent,
  ],
  templateUrl: './identities.component.html',
  styleUrl: './identities.component.scss',
})
export class IdentitiesComponent implements OnInit {
  title = 'Identities';

  // Table and search state
  identities: IdentityV2025[] & Record<string, unknown>[] = [];
  filteredIdentities: IdentityV2025[] & Record<string, unknown>[] = [];

  // Column state
  columnOrder: string[] = [];
  displayedColumns: string[] = [];
  allColumns: string[] = [];

  // Pagination and loading state
  loading = false;
  hasDataLoaded = false;
  pageSize = 10;
  pageIndex = 0;
  totalCount = 0;

  // Sorting state
  sorters: string[] = [];

  // Optional for user context
  profileId = '';

  // Define sortable fields and column display name mapping
  readonly sortableFields = ['name', 'alias', 'identityStatus'];
  readonly sortFieldMap: Record<string, string> = {
    identityStatus: 'cloudStatus',
  };
  readonly columnDisplayNames: Record<string, string> = {
    alias: 'Username',
    emailAddress: 'Email',
    lifecycleState: 'Lifecycle State',
    name: 'Name',
    viewAction: 'Action',
  };

  // Access paginator component
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private sdk: SailPointSDKService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Load initial data
    void this.loadIdentities();
  }

  async loadIdentities() {
    this.loading = true;
    this.hasDataLoaded = false;

    try {
      // Setup request for paged identity results
      const offset = this.pageIndex * this.pageSize;
      const limit = this.pageSize;
      const sortersParam = this.sorters.join(',');

      const request = {
        offset,
        limit,
        count: true,
        sorters: sortersParam || undefined,
      };

      // Fetch data
      const response = await this.sdk.listIdentities(request);
      this.identities = (response.data ?? []) as IdentityV2025[] &
        Record<string, unknown>[];

      // Extract total count from headers (if present)
      let count: number | undefined;
      if (
        response.headers &&
        typeof (response.headers as any).get === 'function'
      ) {
        const headerValue = (response.headers as any).get('X-Total-Count');
        count = headerValue ? Number(headerValue) : undefined;
      } else if (
        response.headers &&
        typeof (response.headers as any)['x-total-count'] !== 'undefined'
      ) {
        count = Number((response.headers as any)['x-total-count']);
      }

      this.totalCount = count ?? 500;

      // Initialize columns if first load
      if (this.allColumns.length === 0 && this.identities.length > 0) {
        this.allColumns = Object.keys(this.identities[0]);
        this.columnOrder = [...this.allColumns];

        if (!this.columnOrder.includes('viewAction')) {
          this.columnOrder.push('viewAction');
        }

        this.displayedColumns = [
          'alias',
          'emailAddress',
          'name',
          'lifecycleState',
        ];
        if (!this.displayedColumns.includes('viewAction')) {
          this.displayedColumns.push('viewAction');
        }
      }

      this.filteredIdentities = [...this.identities];
      this.hasDataLoaded = true;
      this.cdr.detectChanges();
    } catch (error) {
      this.openMessageDialog(
        'Error loading identities: ' + String(error),
        'Error'
      );
    } finally {
      this.loading = false;
    }
  }

  // Remote API search
  async onRemoteSearch(query: string): Promise<void> {
    if (!query || query.length < 3) return;

    this.loading = true;

    try {
      // Build search query
      let queryString = ``;
      if (query.trim()) {
        const escaped = query.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        queryString += `(name:*${escaped}*) OR (alias:*${escaped}*) OR (emailAddress:*${escaped}*) OR (lifecycleState:*${escaped}*)`;
      }

      const request: SearchV2025ApiSearchPostRequest = {
        searchV2025: {
          indices: ['identities'],
          query: { query: queryString },
          sort: ['name'],
        },
        limit: 250,
      };

      // Call search endpoint
      const { data: identities } = await this.sdk.searchPost(request);

      // Transform search results
      this.filteredIdentities = (identities ?? []).map(
        (identity: SearchDocumentsV2025) => {
          // Need to use any here because SearchDocumentsV2025 is a union type
          // and TypeScript can't determine if attributes exists at compile time
          const docWithAttrs = identity as any;
          const attrs = docWithAttrs.attributes as
            | Record<string, unknown>
            | undefined;
          return {
            ...identity,
            alias: (attrs?.uid as string) ?? '–',
            emailAddress: (attrs?.email as string) ?? docWithAttrs.email ?? '–',
            lifecycleState: {
              stateName:
                (attrs?.identityState as string) ??
                (attrs?.cloudStatus as string) ??
                'Unknown',
              manuallyUpdated: false,
            },
            created: docWithAttrs.created ?? undefined,
          };
        }
      ) as IdentityV2025[] & Record<string, unknown>[];

      this.totalCount = this.filteredIdentities.length;
      this.pageIndex = 0;
    } catch (err) {
      this.openMessageDialog(`Search failed: ${String(err)}`, 'Search Error');
    } finally {
      this.loading = false;
    }
  }

  // Handle paginator page change
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    void this.loadIdentities();
  }

  // Toggle sorting on a column
  toggleSort(displayColumn: string): void {
    if (!this.sortableFields.includes(displayColumn)) return;

    const apiField = this.sortFieldMap[displayColumn] || displayColumn;
    const existingIndex = this.sorters.findIndex(
      (s) => s === apiField || s === `-${apiField}`
    );

    if (existingIndex > -1) {
      const isAsc = !this.sorters[existingIndex].startsWith('-');
      this.sorters[existingIndex] = isAsc ? `-${apiField}` : '';
      if (!this.sorters[existingIndex]) this.sorters.splice(existingIndex, 1);
    } else {
      this.sorters.push(apiField);
    }

    void this.loadIdentities();
  }

  // Check if column is sorted
  isSorted(column: string): boolean {
    const apiField = this.sortFieldMap[column] || column;
    return this.sorters.some((s) => s === apiField || s === `-${apiField}`);
  }

  // Get sort symbol (▲/▼)
  getSortSymbol(displayColumn: string): string | null {
    const apiField = this.sortFieldMap[displayColumn] || displayColumn;
    const match = this.sorters.find(
      (s) => s === apiField || s === `-${apiField}`
    );
    if (!match) return null;
    return match.startsWith('-') ? '▼' : '▲';
  }

  // Clear all sorting
  clearSort(): void {
    this.sorters = [];
    void this.loadIdentities();
  }

  // For *ngFor trackBy
  trackByFn(index: number, item: string): string {
    return item;
  }

  // View identity details in dialog
  async onView(identity: IdentityV2025): Promise<void> {
    try {
      if (!identity.id) {
        this.openMessageDialog('Identity ID is missing.', 'Error');
        return;
      }
      const response = await this.sdk.getIdentity({ id: identity.id });
      const details = JSON.stringify(response.data, null, 2);
      this.openMessageDialog(
        details,
        `Identity Details: ${identity.name || identity.id}`
      );
    } catch (error) {
      this.openMessageDialog(
        `Failed to load identity details: ${String(error)}`,
        'Error'
      );
    }
  }

  // Fetch a single identity
  getIdentityById(id: string): Promise<IdentityV2025> {
    return this.sdk.getIdentity({ id }).then((res) => res.data);
  }

  // Show dialog with title + message
  openMessageDialog(errorMessage: string, title: string): void {
    this.dialog.open(GenericDialogComponent, {
      minWidth: '800px',
      data: {
        title: title,
        message: errorMessage,
      },
    });
  }

  // Show manager details
  onViewManager(identity: IdentityV2025): void {
    const manager = identity.managerRef;

    if (!manager) {
      this.openMessageDialog(
        'No manager information available.',
        'Manager Info'
      );
      return;
    }

    const formatted = JSON.stringify(manager, null, 2);
    this.openMessageDialog(
      formatted,
      `Manager: ${manager.type || manager.name || identity.id}`
    );
  }

  // Show identity attribute details
  onViewAttributes(identity: IdentityV2025): void {
    const attributes = identity.attributes ?? {};
    const formatted = JSON.stringify(attributes, null, 2);
    this.openMessageDialog(
      formatted,
      `Attributes: ${identity.name || identity.id}`
    );
  }

  // Format column values (especially lifecycleState)
  formatValue(column: string, value: any): string {
    if (column === 'lifecycleState') {
      if (!value) return '–';

      const state = value.stateName ?? '';
      const manual = value.manuallyUpdated ? ' (manual)' : '';
      return `${this.capitalize(state as string)}${manual}`;
    }

    // For objects, stringify; else return raw value or dash
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }

    return (value as string) ?? '–';
  }

  // Capitalize helper
  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
