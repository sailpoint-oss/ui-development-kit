
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort, SortDirection } from '@angular/material/sort';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import type { Account } from 'sailpoint-api-client/dist/accounts/api';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    GenericDialogComponent
],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent implements OnInit {
  title = 'Accounts';
  loading = true;
  accounts: Account[] = [];
  error = false;
  errorMessage = '';
  displayedColumns: string[] = ['id', 'name', 'nativeIdentity', 'sourceId', 'disabled', 'locked', 'actions'];

  // Sort settings
  sortActive = 'name';
  sortDirection: SortDirection = 'asc';

  // Filter form
  filterForm = new FormGroup({
    name: new FormControl(''),
    sourceId: new FormControl(''),
    correlated: new FormControl('')
  });

  // Filter options
  correlatedOptions = [
    { value: '', label: 'All' },
    { value: 'true', label: 'Correlated' },
    { value: 'false', label: 'Uncorrelated' }
  ];
  
  // Pagination settings
  pageSize = 10;
  pageIndex = 0;
  totalCount = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sdk: SailPointSDKService, private dialog: MatDialog) {}

  ngOnInit() {
    // Load initial data
    void this.loadAccounts();

    // Subscribe to filter changes
    this.filterForm.valueChanges.subscribe(() => {
      this.pageIndex = 0; // Reset to first page on filter change
      void this.loadAccounts();
    });
  }

  async loadAccounts() {
    // Setup request for paged account results
    const request = {
      offset: this.pageIndex * this.pageSize,
      limit: this.pageSize,
      count: true,
      sorters: this.buildSorters(),
      filters: this.buildFilters()
    };

    this.loading = true;
    this.error = false;
    this.errorMessage = '';
    
    try {
      const response = await this.sdk.listAccountsV1(request);
      if (response.status !== 200) {
        throw new Error(`Failed to load accounts: ${response.statusText}`);
      }
      this.accounts = response.data;
      
      // Get total count from headers if available
      let count: number | undefined;
      if (response.headers && typeof (response.headers as any).get === 'function') {
        const headerValue = (response.headers as any).get('X-Total-Count');
        count = headerValue ? Number(headerValue) : undefined;
      } else if (response.headers && typeof (response.headers as any)['x-total-count'] !== 'undefined') {
        count = Number((response.headers as any)['x-total-count']);
      }
      
      this.totalCount = count ?? 250; // Default to 250 if count not available
    } catch (error) {
      console.error('Error loading accounts:', error);
      this.error = true;
      this.errorMessage = error instanceof Error ? error.message : String(error);
      this.accounts = [];
    } finally {
      this.loading = false;
    }
  }

  // Handle page change events
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    void this.loadAccounts();
  }

  // Handle sort changes
  onSortChange(event: Sort) {
    this.sortActive = event.active;
    this.sortDirection = event.direction;
    void this.loadAccounts();
  }

  // Reset filters
  resetFilters() {
    this.filterForm.reset({
      name: '',
      sourceId: '',
      correlated: ''
    });
  }

  // Build sorters string for API request
  buildSorters(): string | undefined {
    if (!this.sortActive || this.sortDirection === '') {
      return undefined;
    }
    // For descending order, prefix column name with minus sign
    return this.sortDirection === 'desc' ? `-${this.sortActive}` : this.sortActive;
  }

  // Build filters string for API request
  buildFilters(): string | undefined {
    const filters: string[] = [];
    const formValues = this.filterForm.value;
    
    if (formValues.name) {
      filters.push(`name sw "${formValues.name}"`); 
    }
    
    if (formValues.sourceId) {
      filters.push(`sourceId eq "${formValues.sourceId}"`); 
    }
    
    if (formValues.correlated) {
      filters.push(`identity.correlated eq ${formValues.correlated}`);
    }
    
    return filters.length > 0 ? filters.join(' and ') : undefined;
  }

  viewAccount(account: Account): void {
      // Format account details as JSON string with indentation
      const details = JSON.stringify(account, null, 2);
      
      // Open dialog with account details
      this.dialog.open(GenericDialogComponent, {
        minWidth: '800px',
        data: {
          title: `Account Details: ${account.name || account.nativeIdentity || account.id}`,
          message: details
      }
    });
  }
}
