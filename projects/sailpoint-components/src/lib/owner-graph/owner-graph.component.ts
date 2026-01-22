import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OwnerGraphService } from './owner-graph.service';

// Graph visualization removed - now using card-based UI

type IdentityRow = {
  id: string;
  name?: string;
  displayName?: string;
  lifecycleState?: string;
};

@Component({
  selector: 'app-owner-graph',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  templateUrl: './owner-graph.component.html',
  styleUrl: './owner-graph.component.scss'
})
export class OwnerGraphComponent {
  title = 'OwnerShip';
  defaultOwnerUsername = 'tyler.mairose';

  loading = false;
  error = '';
  identities: IdentityRow[] = [];
  selected?: IdentityRow;

  roleCount = 0;
  apCount = 0;
  entCount = 0;

  selectedRole?: any;
  roleDetails?: any;
  roleComposition?: any;
  selectedAccessProfile?: any;
  selectedEntitlement?: any;
  showingComposition = false;
  showingAccessProfileEntitlements = false;

  // Tooltip properties
  showTooltip = false;
  tooltipX = 0;
  tooltipY = 0;
  tooltipData?: {
    title: string;
    content: { label: string; value: string }[];
  };

  // Card layout properties
  ownedRoles: any[] = [];
  ownedAccessProfiles: any[] = [];
  ownedEntitlements: any[] = [];
  highlightedRoleId?: string;
  highlightedApId?: string;
  highlightedEntId?: string;
  highlightedRoleComposition?: any;
  highlightedApEntitlements?: any[];

  // Expand/collapse tracking for access profiles in role composition
  expandedAccessProfiles: Set<string> = new Set();
  accessProfileEntitlementsMap: Map<string, any[]> = new Map();

  // Side panel properties
  showSidePanel = false;

  // Bottom drawer properties (Option 2)
  showBottomDrawer = false;

  // Modal properties (Option 3)
  showModal = false;

  // Transfer functionality
  selectedObjects: Map<string, { object: any; type: string }> = new Map();
  showTransferPanel = false;
  transferMode: 'same' | 'different' = 'same';
  singleNewOwner?: any;
  individualOwners: Map<string, any> = new Map();
  searchingOwners = false;
  ownerSearchResults: any[] = [];
  ownerSearchTerm = '';
  isMultiSelectMode = false;
  transferringItem?: any; // For single item transfers

  // Transfer status and messaging
  transferInProgress = false;
  transferSuccess = false;
  transferError = '';
  transferSuccessMessage = '';

  // Access request handling
  pendingAccessRequests: any[] = [];
  showAccessRequestHandling = false;
  currentApprovers: Map<string, any> = new Map();
  maintainApprovers = true;

  // Owner Assignment Modal
  showOwnerAssignmentModal = false;
  modalOwnerSearchTerm = '';
  modalOwnerSearchResults: any[] = [];
  selectedOwnerForAssignment?: any;
  modalAssignments = new Map<string, any>(); // objectId -> owner

  // Drag functionality removed - using card-based UI

  // Original graph columns
  displayedColumns = ['displayName', 'lifecycleState', 'actions'];

  // Ownership summary table
  ownershipData: MatTableDataSource<any> = new MatTableDataSource();
  ownershipColumns = ['displayName', 'jobTitle', 'department', 'lifecycleState', 'rolesCount', 'accessProfilesCount', 'entitlementsCount', 'totalCount', 'actions'];
  searchTerm = '';
  loadingSummary = false;
  isSearching = false;
  showTopOwners = true; // Flag to track if we're showing top owners or search results
  showAnalyticsDashboard = false; // Flag to track if analytics dashboard is shown
  analyticsData: any = {}; // Analytics data object

  // Pagination for bulk transfer modal
  transferCurrentPage = 0;
  transferPageSize = 10;

  // All graph-related variables removed - using card-based UI

  constructor(private svc: OwnerGraphService, private cdr: ChangeDetectorRef) {
    // Load top owners on component initialization
    void this.loadTopOwners();
  }


  // Color scheme method removed - using Material Design colors in cards

  /** Track by function for mat-table performance */
  trackById(_index: number, item: IdentityRow): string {
    return item.id;
  }

  /** Button handler for loading default owner */
  async loadByOwnerUsername() {
    await this.loadOwnerByAlias(this.defaultOwnerUsername);
  }

  // Zoom controls removed - using card-based UI

  /** Load non-active identities in ownership summary table */
  async loadNonActive() {
    this.loadingSummary = true;
    this.error = '';
    this.showTopOwners = false; // Mark as not showing top owners

    try {
      const nonActiveOwners = await this.svc.getNonActiveOwners();
      this.ownershipData.data = nonActiveOwners;
      console.log('Summary - loaded non-active owners:', nonActiveOwners);
    } catch (e: any) {
      this.error = e?.message ?? String(e);
    } finally {
      this.loadingSummary = false;
    }
  }

  /** Show analytics dashboard */
  async showAnalytics() {
    this.showAnalyticsDashboard = true;
    await this.loadAnalyticsData();
  }

  /** Hide analytics dashboard */
  hideAnalytics() {
    this.showAnalyticsDashboard = false;
  }

  /** Load analytics data (mix of real and mocked data) */
  async loadAnalyticsData() {
    try {
      // Get real inactive owners count using the corrected search
      let inactiveOwnersCount = 0;

      if (!this.showTopOwners) {
        // We're showing non-active data, use that count
        inactiveOwnersCount = this.ownershipData.data.length;
      } else {
        // Use the corrected search to get non-active owners
        try {
          const nonActiveOwners = await this.svc.getNonActiveOwners();
          inactiveOwnersCount = nonActiveOwners.length;
          console.log(`Found ${inactiveOwnersCount} inactive owners with the corrected search`);
        } catch (error) {
          console.log('Error fetching inactive owners, using fallback:', error);
          inactiveOwnersCount = 2; // Fallback to known count
        }
      }

      // Use real role/access profile names if available from existing data
      const realRoleNames = ['Sales Associate', 'Product Developer I', 'Treasury Analyst', 'QA Analyst'];
      const realAPNames = ['Sales Floor Access', 'Engineering', 'Finance', 'Quality Assurance'];

      // Create analytics data with mix of real and mock data
      this.analyticsData = {
        // Most requested objects (mocked with realistic sales names)
        mostRequestedRole: {
          name: realRoleNames[0] || 'Sales Associate',
          requests: 47
        },
        mostRequestedAccessProfile: {
          name: realAPNames[0] || 'Sales Floor Access',
          requests: 32
        },
        mostRequestedEntitlement: {
          name: 'PointOfSale-System-Login',
          requests: 28
        },

        // Real data for inactive owners
        inactiveOwnersCount: inactiveOwnersCount,

        // Mock data for access requests
        oldestRequest: {
          days: 12,
          requestType: 'Role Assignment Request'
        },
        averageApprovalTime: '2.3',

        // Mock request volume data
        monthlyRequests: {
          total: 387,
          approved: 291,
          pending: 52,
          rejected: 44
        },
        monthlyGrowth: 15
      };

    } catch (error) {
      console.error('Error loading analytics data:', error);
      // Fallback to all mock data
      this.analyticsData = {
        mostRequestedRole: { name: 'Sales Associate', requests: 47 },
        mostRequestedAccessProfile: { name: 'Sales Floor Access', requests: 32 },
        mostRequestedEntitlement: { name: 'PointOfSale-System-Login', requests: 28 },
        inactiveOwnersCount: 2, // Fallback mock data
        oldestRequest: { days: 12, requestType: 'Role Assignment Request' },
        averageApprovalTime: '2.3',
        monthlyRequests: { total: 387, approved: 291, pending: 52, rejected: 44 },
        monthlyGrowth: 15
      };
    }
  }

  /** convenience: load ownership for a known alias (e.g., tyler.mairose) */
  async loadOwnerByAlias(alias: string) {
    this.loading = true;
    this.error = '';
    this.identities = [];
    this.selected = undefined;
    // Graph cleared - using card UI

    try {
      const owner = await this.svc.findIdentityByAlias(alias);
      await this.explore({ id: owner.id, displayName: owner.displayName });
    } catch (e: any) {
      this.error = e?.message ?? String(e);
    } finally {
      this.loading = false;
    }
  }

  /** when clicking “Explore ownership” on a row */
  async explore(identity: IdentityRow) {
    this.selected = identity;
    this.roleCount = this.apCount = this.entCount = 0;

    try {
      const [roles, aps, ents] = await Promise.all([
        this.svc.listRolesByOwner(identity.id),
        this.svc.listAccessProfilesByOwner(identity.id),
        this.svc.listEntitlementsByOwner(identity.id)
      ]);
      this.roleCount = roles.length;
      this.apCount = aps.length;
      this.entCount = ents.length;

      // Populate card data arrays
      this.ownedRoles = roles;
      this.ownedAccessProfiles = aps;
      this.ownedEntitlements = ents;

      // Graph visualization removed - data is displayed in cards above
    } catch (e: any) {
      this.error = e?.message ?? String(e);
    }
  }

  // Graph rendering removed - using card-based UI

  // Graph clearing removed - using card-based UI

  // Role details loading removed - using card-based UI interaction

  // Graph composition rendering removed - using card-based UI

  // Access profile details loading removed - using card-based UI interaction

  // Entitlement details loading removed - using card-based UI interaction

  // Access profile entitlement graph rendering removed - using card-based UI

  // Graph reset removed - using card-based UI

  // Tooltip functionality removed - using card-based UI with Material tooltips

  /** Get role configuration info for display */
  getRoleConfigInfo(): string[] {
    if (!this.roleDetails) return [];

    const info: string[] = [];

    // Check if configured for access requests
    if (this.roleDetails.requestable === true) {
      info.push('✅ Configured for access requests');
    } else {
      info.push('❌ Not configured for access requests');
    }

    // Check membership criteria
    if (this.roleDetails.membership?.criteria) {
      info.push('✅ Has membership criteria defined');
    } else {
      info.push('❌ No membership criteria defined');
    }

    // Add other useful info
    if (this.roleDetails.enabled === false) {
      info.push('⚠️ Role is disabled');
    }

    return info;
  }

  /** Get role type for display */
  getRoleType(role: any): string {
    // Check if role has dynamic assignment criteria (not just membership criteria)
    if (role?.membership?.criteria && role.membership.type === 'DYNAMIC') {
      return 'Dynamic';
    }
    return 'Standard';
  }

  /** Toggle access profile expansion in role composition */
  async toggleAccessProfileExpansion(apId: string) {
    if (this.expandedAccessProfiles.has(apId)) {
      // Collapse
      this.expandedAccessProfiles.delete(apId);
    } else {
      // Expand - fetch entitlements if not already cached
      this.expandedAccessProfiles.add(apId);
      if (!this.accessProfileEntitlementsMap.has(apId)) {
        try {
          const entitlements = await this.svc.getAccessProfileEntitlements(apId);
          this.accessProfileEntitlementsMap.set(apId, entitlements || []);
        } catch (error) {
          console.warn('Could not fetch access profile entitlements:', error);
          this.accessProfileEntitlementsMap.set(apId, []);
        }
      }
    }
  }

  /** Check if access profile is expanded */
  isAccessProfileExpanded(apId: string): boolean {
    return this.expandedAccessProfiles.has(apId);
  }

  /** Get entitlements for an access profile */
  getAccessProfileEntitlements(apId: string): any[] {
    return this.accessProfileEntitlementsMap.get(apId) || [];
  }

  /** Get membership criteria for display */
  getMembershipCriteria(role: any): string {
    if (role?.membership?.criteria) {
      // If it's a string, return it directly
      if (typeof role.membership.criteria === 'string') {
        return role.membership.criteria as string;
      }
      // If it's an object, try to format it nicely
      if (typeof role.membership.criteria === 'object') {
        return JSON.stringify(role.membership.criteria, null, 2);
      }
    }
    return 'None defined';
  }

  /** Get access profiles sorted alphabetically by name */
  getSortedAccessProfiles(accessProfiles: any[]): any[] {
    if (!accessProfiles || accessProfiles.length === 0) {
      return [];
    }

    return [...accessProfiles].sort((a: any, b: any) => {
      const nameA = String(a.name || '').toLowerCase();
      const nameB = String(b.name || '').toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }

  /** Load top 10 owners by object count */
  async loadTopOwners() {
    this.loadingSummary = true;
    this.error = '';
    this.showTopOwners = true;

    try {
      const topOwners = await this.svc.getTopOwners(5);
      this.ownershipData.data = topOwners;
      console.log('Summary - loaded top owners:', topOwners);
    } catch (e: any) {
      this.error = e?.message ?? String(e);
    } finally {
      this.loadingSummary = false;
    }
  }

  /** Search for identities with type-ahead */
  async searchIdentities() {
    const query = this.searchTerm.trim();

    if (!query || query.length < 2) {
      // If search is cleared, reload top owners
      if (!this.showTopOwners) {
        await this.loadTopOwners();
      }
      return;
    }

    this.isSearching = true;
    this.showTopOwners = false;

    try {
      const searchResults = await this.svc.searchIdentitiesByName(query);
      this.ownershipData.data = searchResults;
      console.log('Search results:', searchResults);
    } catch (e: any) {
      this.error = e?.message ?? String(e);
    } finally {
      this.isSearching = false;
    }
  }

  /** Handle search input changes */
  onSearchChange() {
    // Debounce search to avoid too many API calls
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      void this.searchIdentities();
    }, 500);
  }

  private searchTimeout?: ReturnType<typeof setTimeout>;

  /** Sort ownership table data */
  sortOwnershipData(sort: Sort) {
    const data = this.ownershipData.data.slice();
    if (!sort.active || sort.direction === '') {
      this.ownershipData.data = data;
      return;
    }

    this.ownershipData.data = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';

      switch (sort.active) {
        case 'displayName':
          return this.compare(a.displayName as string, b.displayName as string, isAsc);
        case 'rolesCount':
          return this.compare(a.rolesCount as number, b.rolesCount as number, isAsc);
        case 'accessProfilesCount':
          return this.compare(a.accessProfilesCount as number, b.accessProfilesCount as number, isAsc);
        case 'entitlementsCount':
          return this.compare(a.entitlementsCount as number, b.entitlementsCount as number, isAsc);
        case 'totalCount':
          return this.compare(a.totalCount as number, b.totalCount as number, isAsc);
        default:
          return 0;
      }
    });
  }

  /** Compare function for sorting */
  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  /** Explore ownership for a specific identity from the summary table */
  exploreFromSummary(row: any) {
    const identity: IdentityRow = {
      id: row.id as string,
      displayName: row.displayName as string
    };
    void this.explore(identity);
  }

  /** Track function for ownership table performance */
  trackByOwnershipId(_index: number, item: any): string {
    return item.id as string;
  }

  /** Get display name for selected identity */
  getSelectedDisplayName(): string {
    if (!this.selected) return '';
    return this.selected.displayName || this.selected.name || this.selected.id;
  }

  /** Return to the ownership summary table */
  async backToSummary() {
    this.selected = undefined;
    this.selectedRole = undefined;
    this.selectedAccessProfile = undefined;
    this.selectedEntitlement = undefined;
    this.roleComposition = undefined;
    this.showingComposition = false;
    this.showingAccessProfileEntitlements = false;
    // Graph cleared - using card UI

    // Refresh the summary data to reflect any ownership changes
    if (this.showTopOwners) {
      await this.loadTopOwners();
    } else if (this.searchTerm && this.searchTerm.trim().length >= 2) {
      await this.searchIdentities();
    }
  }

  /** Start bulk transfer for current identity (from toolbar button) */
  startBulkTransfer() {
    if (!this.selected) return;

    // Clear any previous selections
    this.selectedObjects.clear();

    // Auto-select all owned objects for bulk transfer
    (this.ownedRoles || []).forEach(role => {
      this.selectedObjects.set(`role:${role.id}`, { object: role, type: 'role' });
    });
    (this.ownedAccessProfiles || []).forEach(ap => {
      this.selectedObjects.set(`ap:${ap.id}`, { object: ap, type: 'ap' });
    });
    (this.ownedEntitlements || []).forEach(ent => {
      this.selectedObjects.set(`ent:${ent.id}`, { object: ent, type: 'ent' });
    });

    // Set transfer mode and show panel
    this.transferMode = 'same';
    this.resetTransferPagination(); // Reset pagination for new transfer
    this.showTransferPanel = true;
    this.showSidePanel = false; // Close any detail panels
  }

  /** Transfer ownership from summary table */
  async transferOwnership(row: any) {
    console.log('NEW transferOwnership method called for:', row.displayName as string);

    try {
      this.loading = true;

      // Load the full ownership data for this identity
      const ownershipData = await this.svc.loadOwnedByUsername(row.displayName as string);
      console.log('Bulk transfer - loaded data:', ownershipData);

      // Set up transfer state
      this.selected = {
        id: ownershipData.ownerId,
        displayName: row.displayName as string,
        lifecycleState: row.lifecycleState as string
      };

      this.ownedRoles = ownershipData.roles;
      this.ownedAccessProfiles = ownershipData.accessProfiles;
      this.ownedEntitlements = ownershipData.entitlements;

      // Set counts for UI display
      this.roleCount = ownershipData.roles.length;
      this.apCount = ownershipData.accessProfiles.length;
      this.entCount = ownershipData.entitlements.length;



      // Clear any previous selections
      this.selectedObjects.clear();

      // Auto-select all owned objects for bulk transfer
      ownershipData.roles.forEach(role => {
        this.selectedObjects.set(`role:${role.id}`, { object: role, type: 'role' });
      });
      ownershipData.accessProfiles.forEach(ap => {
        this.selectedObjects.set(`ap:${ap.id}`, { object: ap, type: 'ap' });
      });
      ownershipData.entitlements.forEach(ent => {
        this.selectedObjects.set(`ent:${ent.id}`, { object: ent, type: 'ent' });
      });

      // Set transfer mode and show panel
      this.transferMode = 'same';
      this.isMultiSelectMode = false; // No multi-select mode needed on cards
      this.resetTransferPagination(); // Reset pagination for new transfer
      this.showTransferPanel = true;

    } catch (error) {
      console.error('Error loading ownership data for transfer:', error);
      alert(`Failed to load ownership data for ${row.displayName as string}. Please try again.`);
    } finally {
      this.loading = false;
    }
  }

  // Card Layout Interaction Methods

  /** Select a role card */
  selectRole(role: any) {
    this.selectedRole = role;
    this.selectedAccessProfile = undefined;
    this.selectedEntitlement = undefined;
    this.roleComposition = undefined;
    this.accessProfileEntitlements = [];
    // Clear expansion state
    this.expandedAccessProfiles.clear();
    // Using Option 1: Side Panel (winner!)
    this.showSidePanel = true;
    this.showModal = false;
    this.showBottomDrawer = false;
    void this.fetchRoleComposition(role);
  }

  /** Select an access profile card */
  selectAccessProfile(ap: any) {
    this.selectedAccessProfile = ap;
    this.selectedRole = undefined;
    this.selectedEntitlement = undefined;
    this.roleComposition = undefined;
    this.accessProfileEntitlements = [];
    // Clear expansion state
    this.expandedAccessProfiles.clear();
    // Using Option 1: Side Panel (winner!)
    this.showSidePanel = true;
    this.showModal = false;
    this.showBottomDrawer = false;
    void this.fetchAccessProfileEntitlements(ap);
  }

  /** Select an entitlement card */
  selectEntitlement(ent: any) {
    this.selectedEntitlement = ent;
    this.selectedRole = undefined;
    this.selectedAccessProfile = undefined;
    this.roleComposition = undefined;
    this.accessProfileEntitlements = [];
    this.highlightedApEntitlements = undefined;
    this.highlightedRoleComposition = undefined;
    // Clear expansion state
    this.expandedAccessProfiles.clear();
    // Using Option 1: Side Panel (winner!)
    this.showSidePanel = true;
    this.showModal = false;
    this.showBottomDrawer = false;

    // Fetch full entitlement details if needed
    if (ent.id) {
      void this.fetchFullEntitlementDetails(ent);
    }
  }

  /** Highlight role and show composition relationships */
  highlightRole(roleId: string) {
    this.highlightedRoleId = roleId;
    // Find the role and get its composition for highlighting
    const role = this.ownedRoles.find(r => r.id === roleId);
    if (role) {
      void this.fetchRoleComposition(role).then(() => {
        this.highlightedRoleComposition = this.roleComposition;
      });
    }
  }

  /** Highlight access profile and show entitlement relationships */
  highlightAccessProfile(apId: string) {
    this.highlightedApId = apId;
    // Find the AP and get its entitlements for highlighting
    const ap = this.ownedAccessProfiles.find(a => a.id === apId);
    if (ap) {
      void this.fetchAccessProfileEntitlements(ap).then(() => {
        this.highlightedApEntitlements = this.accessProfileEntitlements;
      });
    }
  }

  /** Highlight entitlement */
  highlightEntitlement(entId: string) {
    this.highlightedEntId = entId;
  }

  /** Clear all highlights */
  clearHighlight() {
    this.highlightedRoleId = undefined;
    this.highlightedApId = undefined;
    this.highlightedEntId = undefined;
    this.highlightedRoleComposition = undefined;
    this.highlightedApEntitlements = undefined;
  }

  /** Check if access profile is in highlighted role */
  isApInRole(apId: string): boolean {
    if (!this.highlightedRoleComposition) return false;
    return Boolean(this.highlightedRoleComposition.accessProfiles?.some((ap: any) => (ap.id as string) === apId));
  }

  /** Check if entitlement is in highlighted role */
  isEntInRole(entId: string): boolean {
    if (!this.highlightedRoleComposition) return false;
    return Boolean(this.highlightedRoleComposition.entitlements?.some((ent: any) => (ent.id as string) === entId));
  }

  /** Check if entitlement is in highlighted access profile */
  isEntInAp(entId: string): boolean {
    if (!this.highlightedApEntitlements) return false;
    return this.highlightedApEntitlements.some((ent: any) => (ent.id as string) === entId);
  }

  /** Get role composition summary for display */
  getRoleCompositionSummary(_role: any): string {
    console.log('getRoleCompositionSummary called with role:', _role);
    // This would ideally come from cached composition data
    // For now, return a simple summary
    return '';
  }

  /** Fetch role composition data */
  private async fetchRoleComposition(role: any) {
    try {
      this.roleComposition = await this.svc.getRoleComposition(role.id as string);

      // Debug: Log access profile structure to see available properties
      if (this.roleComposition?.accessProfiles?.length > 0) {
        console.log('Access Profile structure:', this.roleComposition.accessProfiles[0]);
      }

      // Pre-fetch entitlements for access profiles in the composition
      if (this.roleComposition?.accessProfiles) {
        for (const ap of this.roleComposition.accessProfiles) {
          if (ap.id && !this.accessProfileEntitlementsMap.has(ap.id as string)) {
            try {
              const entitlements = await this.svc.getAccessProfileEntitlements(ap.id as string);
              this.accessProfileEntitlementsMap.set(ap.id as string, entitlements || []);
            } catch (error) {
              console.warn(`Could not fetch entitlements for access profile ${ap.name as string}:`, error);
              this.accessProfileEntitlementsMap.set(ap.id as string, []);
            }
          }
        }
      }
    } catch (error) {
      console.warn('Could not fetch role composition:', error);
    }
  }

  /** Access profile entitlements */
  accessProfileEntitlements: any[] = [];
  private async fetchAccessProfileEntitlements(ap: any) {
    try {
      this.accessProfileEntitlements = await this.svc.getAccessProfileEntitlements(ap.id as string);
    } catch (error) {
      console.warn('Could not fetch access profile entitlements:', error);
    }
  }

  /** Fetch full entitlement details */
  private async fetchFullEntitlementDetails(ent: any) {
    try {
      const fullDetails = await this.svc.getEntitlementDetails(ent.id as string);
      this.selectedEntitlement = fullDetails;
    } catch (error) {
      console.warn('Could not fetch full entitlement details:', error);
      this.selectedEntitlement = ent;
    }
  }

  // TrackBy functions for performance
  trackByRoleId(_index: number, role: any): string {
    return role.id as string;
  }

  trackByApId(_index: number, ap: any): string {
    return ap.id as string;
  }

  trackByEntId(_index: number, ent: any): string {
    return ent.id as string;
  }

  // Side Panel Methods

  /** Get panel title based on selected object type */
  getPanelTitle(): string {
    if (this.selectedRole) {
      return (this.selectedRole.name as string) || 'Role Details';
    } else if (this.selectedAccessProfile) {
      return (this.selectedAccessProfile.name as string) || 'Access Profile Details';
    } else if (this.selectedEntitlement) {
      return (this.selectedEntitlement.name as string) || (this.selectedEntitlement.value as string) || 'Entitlement Details';
    }
    return 'Details';
  }

  /** Close the side panel */
  closeSidePanel() {
    this.showSidePanel = false;
  }

  // Bottom Drawer Methods (Option 2)

  /** Get drawer title based on selected object type */
  getDrawerTitle(): string {
    if (this.selectedRole) {
      return (this.selectedRole.name as string) || 'Role Details';
    } else if (this.selectedAccessProfile) {
      return (this.selectedAccessProfile.name as string) || 'Access Profile Details';
    } else if (this.selectedEntitlement) {
      return (this.selectedEntitlement.name as string) || (this.selectedEntitlement.value as string) || 'Entitlement Details';
    }
    return 'Details';
  }

  /** Close the bottom drawer */
  closeBottomDrawer() {
    this.showBottomDrawer = false;
  }

  // Modal Methods (Option 3)

  /** Get modal title based on selected object type */
  getModalTitle(): string {
    if (this.selectedRole) {
      return (this.selectedRole.name as string) || 'Role Details';
    } else if (this.selectedAccessProfile) {
      return (this.selectedAccessProfile.name as string) || 'Access Profile Details';
    } else if (this.selectedEntitlement) {
      return (this.selectedEntitlement.name as string) || (this.selectedEntitlement.value as string) || 'Entitlement Details';
    }
    return 'Details';
  }

  /** Close the modal */
  closeModal() {
    this.showModal = false;
  }

  // Transfer Selection Methods

  /** Toggle selection of an object (role, access profile, or entitlement) */
  toggleObjectSelection(object: any, type: 'role' | 'ap' | 'ent') {
    const objectId = `${type}:${object.id}`;

    if (this.selectedObjects.has(objectId)) {
      this.selectedObjects.delete(objectId);
      this.individualOwners.delete(objectId);
    } else {
      this.selectedObjects.set(objectId, { object: object, type });
    }
  }

  /** Check if an object is selected */
  isObjectSelected(object: any, type: 'role' | 'ap' | 'ent'): boolean {
    const objectId = `${type}:${object.id}`;
    return this.selectedObjects.has(objectId);
  }

  /** Get the count of selected objects */
  getSelectedCount(): number {
    return this.selectedObjects.size;
  }

  /** Get selected objects grouped by type */
  getSelectedObjectsByType(): { roles: any[], accessProfiles: any[], entitlements: any[] } {
    const result: { roles: any[], accessProfiles: any[], entitlements: any[] } = {
      roles: [],
      accessProfiles: [],
      entitlements: []
    };

    for (const [objectId, objectData] of this.selectedObjects) {
      const [type] = objectId.split(':');

      if (type === 'role') {
        result.roles.push(objectData.object);
      } else if (type === 'ap') {
        result.accessProfiles.push(objectData.object);
      } else if (type === 'ent') {
        result.entitlements.push(objectData.object);
      }
    }

    return result;
  }

  /** Get selected objects for modal with pagination support */
  getSelectedObjectsForModal(): { roles: any[], accessProfiles: any[], entitlements: any[], hasMore: boolean, totalCount: number, currentPage: number, totalPages: number } {
    const allSelected = this.getSelectedObjectsByType();
    const totalCount = allSelected.roles.length + allSelected.accessProfiles.length + allSelected.entitlements.length;

    // Create a flat array of all objects with type info
    const allObjects: Array<{obj: any, _type: string}> = [];
    allSelected.roles.forEach((obj: any) => allObjects.push({ obj, _type: 'role' }));
    allSelected.accessProfiles.forEach((obj: any) => allObjects.push({ obj, _type: 'accessProfile' }));
    allSelected.entitlements.forEach((obj: any) => allObjects.push({ obj, _type: 'entitlement' }));

    const totalPages = Math.ceil(totalCount / this.transferPageSize);
    const startIndex = this.transferCurrentPage * this.transferPageSize;
    const endIndex = startIndex + this.transferPageSize;
    const currentPageObjects = allObjects.slice(startIndex, endIndex);

    // Separate back into types for display
    const roles: any[] = [];
    const accessProfiles: any[] = [];
    const entitlements: any[] = [];
    
    for (const item of currentPageObjects) {
      if (item._type === 'role') roles.push(item.obj);
      else if (item._type === 'accessProfile') accessProfiles.push(item.obj);
      else if (item._type === 'entitlement') entitlements.push(item.obj);
    }
    
    const result = {
      roles,
      accessProfiles,
      entitlements,
      hasMore: totalCount > this.transferPageSize,
      totalCount,
      currentPage: this.transferCurrentPage,
      totalPages
    };

    return result;
  }

  /** Navigate to next page in bulk transfer modal */
  nextTransferPage() {
    const modalData = this.getSelectedObjectsForModal();
    if (this.transferCurrentPage < modalData.totalPages - 1) {
      this.transferCurrentPage++;
    }
  }

  /** Navigate to previous page in bulk transfer modal */
  previousTransferPage() {
    if (this.transferCurrentPage > 0) {
      this.transferCurrentPage--;
    }
  }

  /** Reset pagination when opening transfer modal */
  resetTransferPagination() {
    this.transferCurrentPage = 0;
  }

  /** Get ALL owned objects grouped by type (for transfer panel display) */
  getAllOwnedObjectsByType(): { roles: any[], accessProfiles: any[], entitlements: any[] } {
    return {
      roles: this.ownedRoles || [],
      accessProfiles: this.ownedAccessProfiles || [],
      entitlements: this.ownedEntitlements || []
    };
  }

  /** Show transfer panel */
  showTransfer() {
    this.showTransferPanel = true;
    this.showSidePanel = false; // Hide details panel when showing transfer
  }

  /** Cancel transfer and return to details view */
  cancelTransfer() {
    this.showTransferPanel = false;
    this.selectedObjects.clear();
    this.individualOwners.clear();
    this.singleNewOwner = undefined;
    this.ownerSearchTerm = '';
    this.ownerSearchResults = [];

    // Reset transfer status
    this.transferInProgress = false;
    this.transferSuccess = false;
    this.transferError = '';
    this.transferSuccessMessage = '';
  }

  /** Set transfer mode */
  setTransferMode(mode: 'same' | 'different') {
    this.transferMode = mode;
    // Clear previous selections when changing mode
    this.singleNewOwner = undefined;
    this.individualOwners.clear();
    this.ownerSearchTerm = '';
    this.ownerSearchResults = [];
  }

  /** Search for owners */
  async searchOwners() {
    const query = this.ownerSearchTerm.trim();

    if (!query || query.length < 2) {
      this.ownerSearchResults = [];
      return;
    }

    this.searchingOwners = true;

    try {
      // Use active-only search for transfer wizards
      const results = await this.svc.searchActiveIdentitiesByName(query, 10);
      this.ownerSearchResults = results; // Already limited to 10 in the service
    } catch (error) {
      console.error('Error searching for owners:', error);
      this.ownerSearchResults = [];
    } finally {
      this.searchingOwners = false;
    }
  }

  /** Select a new owner for same-owner mode */
  selectSingleOwner(owner: any) {
    this.singleNewOwner = owner;
    this.ownerSearchTerm = owner.displayName || owner.name;
    this.ownerSearchResults = [];
  }

  /** Select individual owner for an object in different-owner mode */
  selectIndividualOwner(objectId: string, owner: any) {
    this.individualOwners.set(objectId, owner);
  }

  /** Get the selected owner for an object in different-owner mode */
  getSelectedOwner(objectId: string): any {
    return this.individualOwners.get(objectId);
  }

  /** Check if transfer is ready to execute */
  isTransferReady(): boolean {
    if (this.selectedObjects.size === 0) return false;

    if (this.transferMode === 'same') {
      return !!this.singleNewOwner;
    } else {
      // Check that all selected objects have assigned owners
      for (const [objectId] of this.selectedObjects) {
        if (!this.individualOwners.has(objectId)) {
          return false;
        }
      }
      return true;
    }
  }

  /** Execute the transfer */
  async executeTransfer() {
    if (!this.isTransferReady()) {
      this.transferError = 'Please complete all owner assignments before transferring.';
      return;
    }

    // Reset transfer status
    this.transferInProgress = true;
    this.transferSuccess = false;
    this.transferError = '';
    this.transferSuccessMessage = '';

    const selectedObjs = this.getSelectedObjectsByType();

    try {
      if (this.transferMode === 'same') {
        // Transfer all objects to the same new owner
        const transfers: Promise<void>[] = [];

        if (selectedObjs.roles.length > 0) {
          transfers.push(this.svc.transferRoleOwnership(selectedObjs.roles.map((r: any) => r.id as string), this.singleNewOwner!.id as string));
        }
        if (selectedObjs.accessProfiles.length > 0) {
          transfers.push(this.svc.transferAccessProfileOwnership(selectedObjs.accessProfiles.map((ap: any) => ap.id as string), this.singleNewOwner!.id as string));
        }
        if (selectedObjs.entitlements.length > 0) {
          transfers.push(this.svc.transferEntitlementOwnership(selectedObjs.entitlements.map((ent: any) => ent.id as string), this.singleNewOwner!.id as string));
        }

        await Promise.all(transfers);

        this.transferSuccessMessage = `Successfully transferred ${this.selectedObjects.size} objects to ${(this.singleNewOwner!.displayName || this.singleNewOwner!.name) as string}`;
        this.transferSuccess = true;

        // Clear selected objects after successful transfer
        this.selectedObjects.clear();
      } else {
        // Transfer objects to different owners
        const transfers: Promise<void>[] = [];

        for (const [objectId, newOwner] of this.individualOwners) {
          const [type, id] = objectId.split(':');

          if (type === 'role' && id) {
            transfers.push(this.svc.transferRoleOwnership([id], newOwner.id as string));
          } else if (type === 'ap' && id) {
            transfers.push(this.svc.transferAccessProfileOwnership([id], newOwner.id as string));
          } else if (type === 'ent' && id) {
            transfers.push(this.svc.transferEntitlementOwnership([id], newOwner.id as string));
          }
        }

        await Promise.all(transfers);

        this.transferSuccessMessage = `Successfully transferred ${this.selectedObjects.size} objects to their respective new owners`;
        this.transferSuccess = true;

        // Clear selected objects after successful transfer
        this.selectedObjects.clear();
      }

      // Check for pending access requests and approver status after transfer
      await this.checkAccessRequestsAfterTransfer(selectedObjs);

      // Refresh the data after successful transfer
      if (this.selected) {
        await this.explore(this.selected);
      }

      // Refresh the ownership summary table to reflect updated counts
      if (this.showTopOwners) {
        await this.loadTopOwners();
      } else if (this.searchTerm && this.searchTerm.trim().length >= 2) {
        await this.searchIdentities();
      }

      // Don't auto-close transfer panel on success - let user see the success message
      // They can manually close it with the Cancel button
      // if (!this.showAccessRequestHandling) {
      //   this.cancelTransfer();
      // }

    } catch (error: any) {
      console.error('Transfer failed:', error);

      // Extract meaningful error message
      let errorMessage = 'Unknown error occurred';
      if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      this.transferError = `Transfer failed: ${errorMessage}`;
    } finally {
      this.transferInProgress = false;
    }
  }

  /** Clear all selections */
  clearSelections() {
    this.selectedObjects.clear();
    this.individualOwners.clear();
  }

  /** Toggle multi-select mode */
  toggleMultiSelectMode() {
    this.isMultiSelectMode = !this.isMultiSelectMode;
    if (!this.isMultiSelectMode) {
      // Clear selections when exiting multi-select mode
      this.clearSelections();
    }
  }

  /** Transfer a single item */
  transferSingleItem(item: any, type: 'role' | 'ap' | 'ent') {
    this.transferringItem = { item, type };
    this.showTransferPanel = true;
    this.showSidePanel = false;

    // Set up single item transfer
    this.transferMode = 'same'; // Default to same owner for single items
    this.selectedObjects.clear();
    this.selectedObjects.set(`${type}:${item.id}`, { object: item, type });
  }

  /** Check access requests and approver status after transfer */
  async checkAccessRequestsAfterTransfer(selectedObjs: { roles: any[], accessProfiles: any[], entitlements: any[] }) {
    try {
      const pendingRequests: any[] = [];
      const approverInfo: Map<string, any> = new Map();

      // Check each object type for pending requests and approver status
      const allChecks: Promise<{ requests: any[], approvers: Map<any, any> }>[] = [];

      if (selectedObjs.roles.length > 0) {
        allChecks.push(this.checkObjectsForAccessRequests(selectedObjs.roles, 'roles', 'role'));
      }
      if (selectedObjs.accessProfiles.length > 0) {
        allChecks.push(this.checkObjectsForAccessRequests(selectedObjs.accessProfiles, 'accessProfiles', 'accessProfile'));
      }
      if (selectedObjs.entitlements.length > 0) {
        allChecks.push(this.checkObjectsForAccessRequests(selectedObjs.entitlements, 'entitlements', 'entitlement'));
      }

      const results = await Promise.all(allChecks);

      // Combine results
      results.forEach((result: any) => {
        const requests = result.requests as any[];
        requests.forEach(req => pendingRequests.push(req));
        (result.approvers as Map<any, any>).forEach((value: any, key: any) => approverInfo.set(key as string, value));
      });

      if (pendingRequests.length > 0 || approverInfo.size > 0) {
        this.pendingAccessRequests = pendingRequests;
        this.currentApprovers = approverInfo;
        this.showAccessRequestHandling = true;

        // Update the transfer panel to show access request handling
        const message = `Transfer completed successfully! Found ${pendingRequests.length} pending access request(s) that may need attention.`;
        alert(message);
      }

    } catch (error) {
      console.error('Error checking access requests after transfer:', error);
    }
  }

  /** Check specific objects for access requests and approver info */
  async checkObjectsForAccessRequests(objects: any[], searchType: 'roles' | 'accessProfiles' | 'entitlements', objectType: 'role' | 'accessProfile' | 'entitlement') {
    const objectIds = objects.map((obj: any) => obj.id as string);
    const requests = await this.svc.getPendingAccessRequests(objectIds, searchType);
    const approvers = new Map();

    // Check approver status for each object
    for (const obj of objects) {
      const currentOwnerId = this.selected?.id; // The previous owner
      if (currentOwnerId) {
        const approverStatus = await this.svc.checkApproverStatus(obj.id as string, objectType, currentOwnerId);
        if (approverStatus.isApprover || approverStatus.approvers.length > 0) {
          approvers.set(obj.id as string, {
            object: obj,
            objectType,
            isOwnerApprover: approverStatus.isApprover,
            approvers: approverStatus.approvers,
            newOwnerId: this.getNewOwnerForObject(obj.id as string, objectType)
          });
        }
      }
    }

    return { requests, approvers };
  }

  /** Get the new owner ID for an object based on transfer mode */
  getNewOwnerForObject(objectId: string, objectType: string): string | undefined {
    if (this.transferMode === 'same') {
      return this.singleNewOwner?.id as string | undefined;
    } else {
      const objectKey = `${objectType === 'accessProfile' ? 'ap' : objectType === 'entitlement' ? 'ent' : 'role'}:${objectId}`;
      return this.individualOwners.get(objectKey)?.id as string | undefined;
    }
  }

  /** Reassign access requests to new approvers */
  async reassignAccessRequests() {
    try {
      const reassignPromises: Promise<void>[] = [];

      for (const [objectId, approverInfo] of this.currentApprovers) {
        if (approverInfo.isOwnerApprover && this.pendingAccessRequests.length > 0) {
          // Filter requests for this specific object
          const objectRequests = this.pendingAccessRequests.filter(req =>
            req.requestedFor?.requestedItems?.some((item: any) => item.id === objectId)
          );

          if (objectRequests.length > 0) {
            const requestIds = objectRequests.map((req: any) => req.id as string);
            const newOwnerId = approverInfo.newOwnerId as string | undefined;

            if (newOwnerId) {
              reassignPromises.push(
                this.svc.reassignAccessRequests(requestIds, newOwnerId)
              );
            }
          }
        }
      }

      if (reassignPromises.length > 0) {
        await Promise.all(reassignPromises);
        alert('Successfully reassigned pending access requests to new owners.');
      }

      this.showAccessRequestHandling = false;
      this.cancelTransfer();

    } catch (error) {
      console.error('Error reassigning access requests:', error);
      alert(`Failed to reassign access requests: ${String(error)}`);
    }
  }

  /** Skip access request reassignment */
  skipAccessRequestHandling() {
    this.showAccessRequestHandling = false;
    this.cancelTransfer();
  }

  // Owner Assignment Modal Methods

  /** Open the owner assignment modal */
  openOwnerAssignmentModal() {
    this.showOwnerAssignmentModal = true;
    this.modalOwnerSearchTerm = '';
    this.modalOwnerSearchResults = [];
    this.selectedOwnerForAssignment = undefined;
    this.modalAssignments.clear();
  }

  /** Close the owner assignment modal */
  closeOwnerAssignmentModal() {
    this.showOwnerAssignmentModal = false;
    this.modalOwnerSearchTerm = '';
    this.modalOwnerSearchResults = [];
    this.selectedOwnerForAssignment = undefined;
    this.modalAssignments.clear();
  }

  /** Search for owners in the modal */
  async searchModalOwners() {
    const query = this.modalOwnerSearchTerm.trim();
    if (!query || query.length < 2) {
      this.modalOwnerSearchResults = [];
      return;
    }

    try {
      // Use active-only search for transfer wizards (same as main owner search)
      const results = await this.svc.searchActiveIdentitiesByName(query, 10);
      this.modalOwnerSearchResults = results; // Already limited to 10 in the service
    } catch (error) {
      console.error('Error searching for owners:', error);
      this.modalOwnerSearchResults = [];
    }
  }

  /** Select an owner for assignment */
  selectOwnerForAssignment(owner: any) {
    this.selectedOwnerForAssignment = owner;
  }

  /** Assign the selected owner to a specific object */
  assignOwnerToObject(objectId: string) {
    if (this.selectedOwnerForAssignment) {
      this.modalAssignments.set(objectId, this.selectedOwnerForAssignment);
    }
  }

  /** Assign the selected owner to all objects */
  assignSelectedOwnerToAll() {
    if (!this.selectedOwnerForAssignment) return;

    const selectedObjs = this.getSelectedObjectsByType();

    selectedObjs.roles.forEach(role => {
      this.modalAssignments.set(`role:${role.id}`, this.selectedOwnerForAssignment);
    });

    selectedObjs.accessProfiles.forEach(ap => {
      this.modalAssignments.set(`ap:${ap.id}`, this.selectedOwnerForAssignment);
    });

    selectedObjs.entitlements.forEach(ent => {
      this.modalAssignments.set(`ent:${ent.id}`, this.selectedOwnerForAssignment);
    });
  }

  /** Remove owner assignment for an object */
  removeOwnerAssignment(objectId: string) {
    this.modalAssignments.delete(objectId);
  }

  /** Get the assigned owner for an object */
  getAssignedOwner(objectId: string): any {
    return this.modalAssignments.get(objectId);
  }

  /** Check if all objects have been assigned owners */
  allObjectsAssigned(): boolean {
    const selectedObjs = this.getSelectedObjectsByType();
    const totalObjects = selectedObjs.roles.length + selectedObjs.accessProfiles.length + selectedObjs.entitlements.length;
    return this.modalAssignments.size === totalObjects;
  }

  /** Save the owner assignments and close the modal */
  saveOwnerAssignments() {
    // Copy modal assignments to the main individualOwners map
    this.individualOwners.clear();
    this.modalAssignments.forEach((owner, objectId) => {
      this.individualOwners.set(objectId, owner);
    });

    // Close the modal
    this.closeOwnerAssignmentModal();
  }
}
