import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import { IdentityCertificationDtoV2025 } from 'sailpoint-api-client';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { NavigationItem, NavigationStackService } from './navigation-stack';
import { CertificationDetailComponent } from './certification-detail/certification-detail.component';
import { IdentityInfoComponent } from './identity-info/identity-info.component';
import { AccessDetailComponent } from './access-detail/access-detail.component';

// Interface for column configuration with sort and filter
interface ColumnItem {
  name: string;
  sortOrder: 'asc' | 'desc' | null;
  sortFn: ((a: IdentityCertificationDtoV2025, b: IdentityCertificationDtoV2025) => number) | null;
  sortDirections: ('asc' | 'desc')[];
  filterMultiple: boolean;
  listOfFilter: Array<{ text: string; value: string; byDefault?: boolean }>;
  filterFn: ((list: string[], item: IdentityCertificationDtoV2025) => boolean) | null;
  // New properties for dynamic data access and display
  dataAccessor?: (item: IdentityCertificationDtoV2025) => any;
  formatter?: (value: any) => string;
  cssClass?: (value: any) => string;
}

// Interface for campaign summary data
interface CampaignSummary {
  campaignName: string;
  campaignType: string;
  campaignDescription: string;
  totalCertifications: number;
  completedCertifications: number;
  incompleteCertifications: number;
  totalIdentities: number;
  completedIdentities: number;
  totalDecisions: number;
  madeDecisions: number;
  phaseCounts: {
    staged: number;
    active: number;
    signed: number;
  };
}

@Component({
  selector: 'app-certification-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    MatChipsModule,
    MatSortModule,
    MatPaginatorModule,
    CertificationDetailComponent,
    IdentityInfoComponent,
    AccessDetailComponent,
  ],
  templateUrl: './certification-management.component.html',
  styleUrl: './certification-management.component.scss',
})
export class CertificationManagementComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscriptions = new Subscription();
  title = 'Certification Management';
  certifications: IdentityCertificationDtoV2025[] = []; // Original data from API
  filteredCertifications = new MatTableDataSource<IdentityCertificationDtoV2025>([]); // Filtered data for display
  loading = false;
  
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'campaignName',
    'campaignType',
    'isCompleted',
    'viewAction',
  ];

  // Navigation stack properties
  navigationStack: NavigationItem[] = [];
  currentLevel = 0;

  // Certification name search properties
  nameSearchValue = '';
  visible = false;

  // Column visibility management
  visibleColumns: Set<string> = new Set();
  columnDropdownVisible = false;

  totalSavedDecisions = 0;

  // Campaign summary properties
  campaignSummaries: CampaignSummary[] = [];
  currentCampaignIndex = 0;

  // Table sort and filter configuration
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.name,
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Campaign Name',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: IdentityCertificationDtoV2025) =>
        list.some(
          (name) =>
            (item.campaign?.name || '')
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1
        ),
      dataAccessor: (item) => item.campaign?.name,
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Campaign Type',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: IdentityCertificationDtoV2025) =>
        list.some(
          (type) =>
            (item.campaign?.type || '')
              .toLowerCase()
              .indexOf(type.toLowerCase()) !== -1
        ),
      dataAccessor: (item) => item.campaign?.type,
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Campaign Description',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.campaign?.description,
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Completed',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: false,
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: IdentityCertificationDtoV2025) => {
        if (!list || list.length === 0) return true;
        const itemStatus = item.completed ? 'Yes' : 'No';
        return list.includes(itemStatus);
      },
      dataAccessor: (item) => item.completed,
      formatter: (value: boolean) => (value ? 'Yes' : 'No'),
      cssClass: (value: boolean) =>
        value ? 'status-completed' : 'status-pending',
    },
    {
      name: 'Identities Completed',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) => (a.identitiesCompleted || 0) - (b.identitiesCompleted || 0),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.identitiesCompleted,
      formatter: (value: number) => (value || 0).toString(),
    },
    {
      name: 'Identities Total',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) => (a.identitiesTotal || 0) - (b.identitiesTotal || 0),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.identitiesTotal,
      formatter: (value: number) => (value || 0).toString(),
    },
    {
      name: 'Created',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) =>
        new Date(a.created || '').getTime() -
        new Date(b.created || '').getTime(),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.created,
      formatter: (value: string) =>
        value ? new Date(value).toLocaleString() : 'N/A',
    },
    {
      name: 'Decisions Made',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) => (a.decisionsMade || 0) - (b.decisionsMade || 0),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.decisionsMade,
      formatter: (value: number) => (value || 0).toString(),
    },
    {
      name: 'Decisions Total',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) => (a.decisionsTotal || 0) - (b.decisionsTotal || 0),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.decisionsTotal,
      formatter: (value: number) => (value || 0).toString(),
    },
    {
      name: 'Due',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) => new Date(a.due || '').getTime() - new Date(b.due || '').getTime(),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.due,
      formatter: (value: string) =>
        value ? new Date(value).toLocaleString() : 'N/A',
    },
    {
      name: 'Signed',
      sortOrder: null,
      sortFn: (
        a: IdentityCertificationDtoV2025,
        b: IdentityCertificationDtoV2025
      ) =>
        new Date(a.signed || '').getTime() - new Date(b.signed || '').getTime(),
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => item.signed,
      formatter: (value: string) =>
        value ? new Date(value).toLocaleString() : 'N/A',
    },
    {
      name: 'Reviewer Name',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: IdentityCertificationDtoV2025) =>
        list.some(
          (name) =>
            (item.reviewer?.name || '')
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1
        ),
      dataAccessor: (item) => item.reviewer?.name,
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Phase',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: IdentityCertificationDtoV2025) =>
        list.some(
          (phase) =>
            (item.phase || '').toLowerCase().indexOf(phase.toLowerCase()) !== -1
        ),
      dataAccessor: (item) => item.phase,
      formatter: (value: string) => value || 'N/A',
    },
  ];

  constructor(
    private sdk: SailPointSDKService,
    private dialog: MatDialog,
    private navStack: NavigationStackService,
    private cdr: ChangeDetectorRef
  ) {
    // Subscribe to stack state changes
    this.navStack.getStackState().subscribe((state) => {
      this.navigationStack = state.items;
      this.currentLevel = state.currentLevel;
    });
  }

  ngOnInit() {
    // Initialize with root level
    this.initializeRootLevel();

    // Initialize column visibility - show all columns by default
    this.initializeColumnVisibility();

    // load certifications
    void this.getCertificationManagement();
  }

  ngAfterViewInit() {
    // Connect paginator to data source after view initialization
    if (this.paginator) {
      this.filteredCertifications.paginator = this.paginator;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private initializeRootLevel(): void {
    const rootItem: NavigationItem = {
      id: 'certifications',
      title: 'Certification Management',
      component: 'certification-list',
      breadcrumb: {
        label: 'Certifications',
        icon: 'home',
      },
    };
    this.navStack.initialize(rootItem);
  }

  /**
   * Reset the name search filter and show all certifications
   */
  nameSearchReset(): void {
    this.nameSearchValue = '';
    this.nameSearchSubmit();
  }

  /**
   * Apply name search filter to the certifications list
   * Filters the original data without modifying it
   */
  nameSearchSubmit(): void {
    this.visible = false;

    // If search value is empty, show all certifications
    if (!this.nameSearchValue.trim()) {
      this.filteredCertifications.data = [...this.certifications];
    } else {
      // Filter certifications by name (case-insensitive)
      this.filteredCertifications.data = this.certifications.filter(
        (item: IdentityCertificationDtoV2025) =>
          item.name
            ?.toLowerCase()
            .indexOf(this.nameSearchValue.toLowerCase()) !== -1
      );
    }
    
    // Reset paginator to first page after filtering and ensure it's connected
    if (this.paginator) {
      // Ensure paginator is connected
      if (!this.filteredCertifications.paginator) {
        this.filteredCertifications.paginator = this.paginator;
      }
      this.paginator.firstPage();
    }
  }

  onBreadcrumbClick(level: number): void {
    console.log('Breadcrumb clicked, navigating to level:', level);
    this.navStack.navigateToLevel(level);
  }

  // Method to navigate to certification details
  navigateToDetail(certification: IdentityCertificationDtoV2025): void {
    const certificationName = certification.name || 'Unknown Certification';
    const detailItem: NavigationItem = {
      id: `certification-${certification.id}`,
      title: `Certification Details`,
      component: 'certification-detail',
      data: { certificationId: certification.id },
      breadcrumb: {
        label: `Details: ${certificationName}`,
        icon: 'form',
      },
    };
    this.navStack.push(detailItem);
  }

  // Get current component type for ngSwitch
  getCurrentComponent(): string {
    const currentItem = this.navStack.peek();
    return currentItem?.component || 'certification-list';
  }

  // Get current title for display
  getCurrentTitle(): string {
    const currentItem = this.navStack.peek();
    return currentItem?.title || 'Certification Management';
  }

  // Get current breadcrumb label for display
  getCurrentBreadcrumbLabel(): string {
    const currentItem = this.navStack.peek();
    return currentItem?.breadcrumb?.label || 'Certification Management';
  }

  // Get current data for the active level
  getCurrentData(): any {
    const currentItem = this.navStack.peek();
    return currentItem?.data || null;
  }

  // Go back to previous level
  goBack(): void {
    this.navStack.pop();
  }

  /**
   * Load certification data from the API
   * Sets both original and filtered data arrays
   */
  async getCertificationManagement() {
    this.loading = true;
    try {
      const res = await this.sdk.listIdentityCertifications();
      if (res.status === 200) {
        // Store original data from API
        this.certifications = res.data || [];
        // Initialize filtered data with all certifications
        this.filteredCertifications.data = [...this.certifications];
        
        // console.log('Certifications set to:', this.certifications);
        // Generate campaign summaries
        this.generateCampaignSummaries();
        // Populate filter options after loading data
        this.populateFilterOptions();
      } else {
        console.error('Error loading certifications:', res.statusText);
      }
    } catch (error) {
      console.error('Error loading certifications:', error);
    } finally {
      this.loading = false;
      // Connect paginator after view updates (when *ngIf="!loading" becomes true)
      setTimeout(() => {
        if (this.paginator && !this.filteredCertifications.paginator) {
          this.filteredCertifications.paginator = this.paginator;
          this.cdr.detectChanges();
        }
      });
    }
  }

  /**
   * Refresh the certification data by reloading from the API
   */
  async refreshCertifications(): Promise<void> {
    await this.getCertificationManagement();
  }

  // View certification details in dialog (legacy method - now using navigation)
  onView(certification: IdentityCertificationDtoV2025): void {
    try {
      if (!certification.id) {
        this.openMessageDialog('Certification ID is missing.', 'Error');
        return;
      }

      // Navigate to detail view instead of showing dialog
      this.navigateToDetail(certification);
    } catch (error) {
      this.openMessageDialog(
        `Failed to load certification details: ${String(error)}`,
        'Error'
      );
    }
  }

  // Show dialog with title + message
  openMessageDialog(message: string, title: string): void {
    this.dialog.open(GenericDialogComponent, {
      minWidth: '800px',
      data: {
        title: title,
        message: message,
      },
    });
  }

  // Track by function for ngFor
  trackByCertificationId(
    index: number,
    certification: IdentityCertificationDtoV2025
  ): string {
    return String(certification.id) || index.toString();
  }

  /**
   * Populate filter options dynamically based on the original certification data
   * This ensures filter options are always based on the complete dataset
   */
  private populateFilterOptions(): void {
    this.listOfColumns.forEach((column) => {
      // Skip columns that don't have dataAccessor or already have predefined filters
      if (!column.dataAccessor || column.listOfFilter.length > 0) {
        return;
      }

      // Get unique values for this column from the original data (not filtered)
      const values = [
        ...new Set(
          this.certifications
            .map((certification) => {
              const value = column.dataAccessor!(certification);
              // Convert to string for filtering, handle different data types
              if (value === null || value === undefined) return null;
              if (typeof value === 'object' && value instanceof Date) {
                return value.toISOString();
              }
              return String(value);
            })
            .filter(Boolean)
        ),
      ];

      // Update filter options for this column
      column.listOfFilter = values.map((value) => ({
        text: value!,
        value: value!,
      }));
    });
  }

  /**
   * Initialize column visibility - show default columns
   */
  private initializeColumnVisibility(): void {
    this.visibleColumns.clear();
    
    // Default visible columns
    const defaultColumns = [
      'Campaign Name',
      'Campaign Type',
      'Completed',
      'Identities Total',
      'Decisions Made',
      'Decisions Total',
      'Due',
      'Reviewer Name',
      'Phase'
    ];
    
    defaultColumns.forEach((columnName) => {
      this.visibleColumns.add(columnName);
    });
  }

  /**
   * Toggle column visibility
   */
  toggleColumnVisibility(columnName: string): void {
    if (this.visibleColumns.has(columnName)) {
      this.visibleColumns.delete(columnName);
    } else {
      this.visibleColumns.add(columnName);
    }
  }

  /**
   * Check if a column is visible
   */
  isColumnVisible(columnName: string): boolean {
    return this.visibleColumns.has(columnName);
  }

  /**
   * Get filtered list of columns based on visibility
   */
  getVisibleColumns(): ColumnItem[] {
    return this.listOfColumns.filter((column) =>
      this.visibleColumns.has(column.name)
    );
  }

  /**
   * Get visible column names for Material table
   */
  getVisibleColumnNames(): string[] {
    const visibleNames = this.getVisibleColumns().map(col => col.name);
    return [...visibleNames, 'actions'];
  }

  /**
   * Select all columns
   */
  selectAllColumns(): void {
    this.initializeColumnVisibility();
  }

  /**
   * Deselect all columns
   */
  deselectAllColumns(): void {
    this.visibleColumns.clear();
  }

  /**
   * Generate campaign summaries from certification data
   */
  generateCampaignSummaries(): void {
    const campaignMap = new Map<string, CampaignSummary>();

    this.certifications.forEach((certification) => {
      const campaignName =
        String(certification.campaign?.name) || 'Unknown Campaign';
      const campaignType =
        String(certification.campaign?.type) || 'Unknown Type';
      const campaignDescription =
        String(certification.campaign?.description) || '';

      if (!campaignMap.has(campaignName)) {
        campaignMap.set(campaignName, {
          campaignName,
          campaignType,
          campaignDescription,
          totalCertifications: 0,
          completedCertifications: 0,
          incompleteCertifications: 0,
          totalIdentities: 0,
          completedIdentities: 0,
          totalDecisions: 0,
          madeDecisions: 0,
          phaseCounts: {
            staged: 0,
            active: 0,
            signed: 0,
          },
        });
      }

      const summary = campaignMap.get(campaignName)!;

      // Count certifications
      summary.totalCertifications++;
      if (certification.completed) {
        summary.completedCertifications++;
      } else {
        summary.incompleteCertifications++;
      }

      // Aggregate identities
      summary.totalIdentities += certification.identitiesTotal || 0;
      summary.completedIdentities += certification.identitiesCompleted || 0;

      // Aggregate decisions
      summary.totalDecisions += certification.decisionsTotal || 0;
      summary.madeDecisions += certification.decisionsMade || 0;

      // Count phases
      const phase = String(certification.phase || '').toLowerCase();
      if (phase.includes('staged')) {
        summary.phaseCounts.staged++;
      } else if (phase.includes('active')) {
        summary.phaseCounts.active++;
      } else if (phase.includes('signed')) {
        summary.phaseCounts.signed++;
      }
    });

    this.campaignSummaries = Array.from(campaignMap.values());
  }

  /**
   * Get color for campaign type tag
   */
  getCampaignTypeColor(campaignType: string): string {
    const typeColors: { [key: string]: string } = {
      'Access Review': 'blue',
      'Identity Review': 'green',
      'Entitlement Review': 'orange',
      'Role Review': 'purple',
      Default: 'default',
    };
    return typeColors[String(campaignType)] || typeColors['Default'];
  }

  /**
   * Calculate progress percentage
   */
  getProgressPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  }

  /**
   * Get current campaign from carousel
   */
  getCurrentCampaign(): CampaignSummary | null {
    if (this.campaignSummaries.length === 0) return null;
    return this.campaignSummaries[this.currentCampaignIndex];
  }

  /**
   * Navigate to next campaign
   */
  nextCampaign(): void {
    if (this.currentCampaignIndex < this.campaignSummaries.length - 1) {
      this.currentCampaignIndex++;
    }
  }

  /**
   * Navigate to previous campaign
   */
  previousCampaign(): void {
    if (this.currentCampaignIndex > 0) {
      this.currentCampaignIndex--;
    }
  }

  /**
   * Go to specific campaign by index
   */
  goToCampaign(index: number): void {
    if (index >= 0 && index < this.campaignSummaries.length) {
      this.currentCampaignIndex = index;
    }
  }
}
