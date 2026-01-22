import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SailPointSDKService } from '../../sailpoint-sdk.service';
import { NavigationStackService, NavigationItem } from '../navigation-stack';
import {
  IdentityCertificationDtoV2025,
  IdentityReferenceWithNameAndEmailV2025,
  AccessReviewItemV2025,
  CertificationDecisionV2025,
} from 'sailpoint-api-client';

// Polyfill for Promise.allSettled for older environments
if (!(Promise as any).allSettled) {
  (Promise as any).allSettled = function (promises: Promise<any>[]) {
    return Promise.all(
      promises.map((p) =>
        p
          .then((value) => ({ status: 'fulfilled', value }))
          .catch((reason) => ({ status: 'rejected', reason }))
      )
    );
  };
}

// Interface for comprehensive certification details
interface CertificationDetails {
  certification: IdentityCertificationDtoV2025;
  reviewers: any[];
  accessReviewItems: any[];
  campaign?: any; // Full campaign data from getCampaign API
  errors?: string[];
}

// Interface for access review item column configuration
interface AccessReviewColumnItem {
  name: string;
  sortOrder: 'asc' | 'desc' | null;
  sortFn: ((a: any, b: any) => number) | null;
  sortDirections: ('asc' | 'desc')[];
  filterMultiple: boolean;
  listOfFilter: Array<{ text: string; value: string; byDefault?: boolean }>;
  filterFn: ((list: string[], item: any) => boolean) | null;
  dataAccessor?: (item: any) => any;
  formatter?: (value: any) => string;
  cssClass?: (value: any) => string;
}

// Interface for decision changes with optional comment
interface DecisionChange {
  decision: string;
  comment?: string;
}

@Component({
  selector: 'app-certification-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './certification-detail.component.html',
  styleUrl: './certification-detail.component.scss',
})
export class CertificationDetailComponent implements OnInit, OnDestroy {
  @Input() certificationId!: string;
  @Input() onBack!: () => void;
  @Input() breadcrumbLabel?: string;

  private subscriptions = new Subscription();
  loading = false;
  certificationDetails: CertificationDetails | null = null;
  error: string | null = null;

  // Track editing state for decision column
  editingDecisionId: string | null = null;

  // Track all changes made to decisions
  decisionChanges: Map<string, DecisionChange> = new Map();

  // Bulk action state management
  bulkActionMode: boolean = false;
  bulkActionDecision: string = 'APPROVE';
  setOfCheckedId = new Set<string>();
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  bulkActionLoading = false;

  // Bulk comment modal state
  bulkCommentModalVisible = false;
  bulkCommentText = '';

  // Individual comment inputs for table
  commentInputs: { [key: string]: string } = {};

  // Comment validation modal state
  commentValidationModalVisible = false;
  missingCommentItems: any[] = [];

  // Save changes loading state
  saveChangesLoading = false;

  // Cache key for storing data in NavigationStack
  private readonly CACHE_KEY = 'certificationData';

  deadline: number = 0; // For countdown component
  isOverdue: boolean = false; // Track if certification is overdue
  remindLoading: boolean = false; // Track loading state for remind button

  // Access review items table configuration
  accessReviewColumns: AccessReviewColumnItem[] = [
    {
      name: 'Identity',
      sortOrder: null,
      sortFn: (a: AccessReviewItemV2025, b: AccessReviewItemV2025) => {
        const nameA = a.identitySummary?.name || '';
        const nameB = b.identitySummary?.name || '';
        return nameA.localeCompare(nameB);
      },
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: AccessReviewItemV2025) =>
        list &&
        Array.isArray(list) &&
        list.some(
          (name) =>
            (item.identitySummary?.name || '')
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1
        ),
      dataAccessor: (item) => String(item.identitySummary?.name || ''),
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Access Type',
      sortOrder: null,
      sortFn: (a: AccessReviewItemV2025, b: AccessReviewItemV2025) => {
        const getAccessType = (item: AccessReviewItemV2025) => {
          if (item.accessSummary?.entitlement) return 'Entitlement';
          if (item.accessSummary?.accessProfile) return 'Access Profile';
          if (item.accessSummary?.role) return 'Role';
          return 'Unknown';
        };
        const typeA = getAccessType(a);
        const typeB = getAccessType(b);
        return typeA.localeCompare(typeB);
      },
      sortDirections: ['asc', 'desc'],
      filterMultiple: false,
      listOfFilter: [
        { text: 'Entitlement', value: 'Entitlement' },
        { text: 'Access Profile', value: 'Access Profile' },
        { text: 'Role', value: 'Role' },
      ],
      filterFn: null,
      dataAccessor: (item) => {
        if (item.accessSummary?.entitlement) return 'Entitlement';
        if (item.accessSummary?.accessProfile) return 'Access Profile';
        if (item.accessSummary?.role) return 'Role';
        return 'Unknown';
      },
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Access Name',
      sortOrder: null,
      sortFn: (a: AccessReviewItemV2025, b: AccessReviewItemV2025) => {
        const getName = (item: AccessReviewItemV2025) => {
          return (
            item.accessSummary?.entitlement?.name ||
            item.accessSummary?.accessProfile?.name ||
            item.accessSummary?.role?.name ||
            'N/A'
          );
        };
        const nameA = getName(a);
        const nameB = getName(b);
        return nameA.localeCompare(nameB);
      },
      sortDirections: ['asc', 'desc'],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => {
        return String(
          item.accessSummary?.entitlement?.name ||
            item.accessSummary?.accessProfile?.name ||
            item.accessSummary?.role?.name ||
            'N/A'
        );
      },
      formatter: (value: string) => value || 'N/A',
    },
    {
      name: 'Source',
      sortOrder: null,
      sortFn: (a: AccessReviewItemV2025, b: AccessReviewItemV2025) => {
        const getSource = (item: AccessReviewItemV2025) => {
          return String(
            item.accessSummary?.entitlement?.sourceName ||
              item.accessSummary?.accessProfile?.entitlements?.[0]
                ?.sourceName ||
              item.accessSummary?.role?.entitlements?.[0]?.sourceName ||
              'N/A'
          );
        };
        const sourceA = getSource(a);
        const sourceB = getSource(b);
        return sourceA.localeCompare(sourceB);
      },
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: AccessReviewItemV2025) =>
        list &&
        Array.isArray(list) &&
        list.some(
          (source) =>
            (item.accessSummary?.entitlement?.sourceName || '')
              .toLowerCase()
              .indexOf(source.toLowerCase()) !== -1
        ),
      dataAccessor: (item) => {
        return String(
          item.accessSummary?.entitlement?.sourceName ||
            item.accessSummary?.accessProfile?.entitlements?.[0]?.sourceName ||
            item.accessSummary?.role?.entitlements?.[0]?.sourceName ||
            'N/A'
        );
      },
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
      filterFn: (list: string[], item: AccessReviewItemV2025) => {
        if (!list || list.length === 0) return true;
        const itemStatus = item.completed ? 'Yes' : 'No';
        return list.includes(itemStatus);
      },
      dataAccessor: (item) => Boolean(item.completed),
      formatter: (value: boolean) => (value ? 'Yes' : 'No'),
      cssClass: (value: boolean) =>
        value ? 'status-completed' : 'status-pending',
    },
    {
      name: 'New Access',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: false,
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: AccessReviewItemV2025) => {
        if (!list || list.length === 0) return true;
        const itemStatus = item.newAccess ? 'Yes' : 'No';
        return list.includes(itemStatus);
      },
      dataAccessor: (item) => Boolean(item.newAccess),
      formatter: (value: boolean) => (value ? 'Yes' : 'No'),
      cssClass: (value: boolean) =>
        value ? 'new-access-true' : 'new-access-false',
    },
    {
      name: 'Comments',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: (item) => String(item.comments || ''),
      formatter: (value: string) => value || '-',
      cssClass: (value: string) => (value ? 'comments-cell' : 'no-comments'),
    },
    {
      name: 'Decision',
      sortOrder: null,
      sortFn: null,
      sortDirections: ['asc', 'desc'],
      filterMultiple: true,
      listOfFilter: [
        { text: 'APPROVE', value: 'APPROVE' },
        { text: 'REVOKE', value: 'REVOKE' },
        { text: 'PENDING', value: 'PENDING' },
      ],
      filterFn: (list: string[], item: AccessReviewItemV2025) =>
        list &&
        Array.isArray(list) &&
        list.some(
          (decision) =>
            (item.decision || 'PENDING').toUpperCase() ===
            decision.toUpperCase()
        ),
      dataAccessor: (item) =>
        item.decision ? String(item.decision) : 'PENDING',
      formatter: (value: string) => value || 'PENDING',
      cssClass: (value: string) => {
        switch (value?.toUpperCase()) {
          case 'APPROVE':
            return 'decision-approve';
          case 'REVOKED':
            return 'decision-revoke';
          default:
            return 'decision-pending';
        }
      },
    },
    {
      name: 'Actions',
      sortOrder: null,
      sortFn: null,
      sortDirections: [],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null,
      dataAccessor: () => '',
      formatter: () => '',
      cssClass: () => 'actions-column',
    },
  ];

  constructor(
    private sdk: SailPointSDKService,
    private navStack: NavigationStackService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (this.certificationId) {
      // Try to load from NavigationStack cache first
      if (this.loadFromNavigationStack()) {
        console.log('Loaded certification details from NavigationStack cache');
        return;
      }

      // If no cache, load from API
      void this.loadCertificationDetails();
    }

    // Listen to navigation events to reload from cache when returning to this component
    this.subscriptions.add(
      this.navStack.getNavigationEvents().subscribe((event) => {
        if (event && event.type === 'navigate') {
          // Check if we're returning to this certification detail
          const currentItem = this.navStack.peek();
          if (
            currentItem &&
            currentItem.component === 'certification-detail' &&
            currentItem.data?.certificationId === this.certificationId
          ) {
            // Try to load from cache when returning to this component
            this.loadFromNavigationStack();
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();

    // Save current state to NavigationStack before destroying
    this.saveToNavigationStack();

    // Clear maps to prevent memory leaks
    this.decisionChanges.clear();
    this.setOfCheckedId.clear();
  }

  /**
   * Load comprehensive certification details
   */
  async loadCertificationDetails(): Promise<void> {
    if (!this.certificationId) {
      this.error = 'Certification ID is required';
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      // Initialize certification details structure
      const certificationDetails: CertificationDetails = {
        certification: {} as IdentityCertificationDtoV2025,
        reviewers: [],
        accessReviewItems: [],
        campaign: undefined,
        errors: [],
      };

      // First, fetch certification details to get campaign ID
      const certificationResult = await (Promise as any).allSettled([
        this.fetchCertificationDetails(this.certificationId),
        this.fetchReviewers(this.certificationId),
        this.fetchAccessReviewItems(this.certificationId),
      ]);

      // Process initial results
      certificationResult.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          switch (index) {
            case 0: // Certification details
              certificationDetails.certification =
                result.value as IdentityCertificationDtoV2025;
              break;
            case 1: // Reviewers
              certificationDetails.reviewers =
                result.value as IdentityReferenceWithNameAndEmailV2025[];
              break;
            case 2: // Access review items
              certificationDetails.accessReviewItems =
                result.value as AccessReviewItemV2025[];
              break;
          }
        } else {
          const errorMessage = `Failed to fetch ${
            ['certification details', 'reviewers', 'access review items'][index]
          }: ${result.reason}`;
          certificationDetails.errors?.push(errorMessage);
          console.error(errorMessage);
        }
      });

      // Now fetch campaign data if we have a campaign ID
      if (certificationDetails.certification.campaign?.id) {
        try {
          const campaignData = await this.fetchCampaignData(
            certificationDetails.certification.campaign.id
          );
          certificationDetails.campaign = campaignData;
          console.log('Enriched campaign data:', campaignData);
        } catch (error) {
          const errorMessage = `Failed to fetch campaign data: ${String(
            error
          )}`;
          certificationDetails.errors?.push(errorMessage);
          console.error(errorMessage);
        }
      }

      this.certificationDetails = certificationDetails;

      // Initialize comment inputs for each item
      this.initializeCommentInputs();

      // Populate filter options for access review items
      this.populateAccessReviewFilterOptions();

      // Calculate deadline for countdown (convert due date to timestamp)
      if (certificationDetails.certification.due) {
        const dueDate = new Date(certificationDetails.certification.due);
        this.deadline = dueDate.getTime();
        // Only mark as overdue if certification is not completed and due date has passed
        this.isOverdue =
          !certificationDetails.certification.completed && dueDate < new Date();
      }
    } catch (error) {
      this.error = `Failed to load certification details: ${String(error)}`;
      console.error('Error loading certification details:', error);
    } finally {
      this.loading = false;
    }
  }

  // Helper method to fetch certification details
  private async fetchCertificationDetails(
    certificationId: string
  ): Promise<IdentityCertificationDtoV2025> {
    try {
      const response = await this.sdk.getIdentityCertification({
        id: certificationId,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Certification details: ${String(error)}`);
    }
  }

  // Helper method to fetch reviewers
  private async fetchReviewers(certificationId: string): Promise<any[]> {
    try {
      const response = await this.sdk.listCertificationReviewers({
        id: certificationId,
      });
      return response.data || [];
    } catch (error) {
      throw new Error(`Reviewers: ${String(error)}`);
    }
  }

  // Helper method to fetch access review items
  private async fetchAccessReviewItems(
    certificationId: string
  ): Promise<any[]> {
    try {
      const response = await this.sdk.listIdentityAccessReviewItems({
        id: certificationId,
      });
      return response.data || [];
    } catch (error) {
      throw new Error(`Access review items: ${String(error)}`);
    }
  }

  /**
   * Fetch campaign data by campaign ID
   */
  private async fetchCampaignData(campaignId: string): Promise<any> {
    try {
      const response = await this.sdk.getCampaign({
        id: campaignId,
        detail: 'FULL',
      });
      return response.data;
    } catch (error) {
      throw new Error(`Campaign data: ${String(error)}`);
    }
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string | null | undefined): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  }

  /**
   * Get status display text
   */
  getStatusText(): string {
    if (!this.certificationDetails?.certification) return 'Loading...';
    return this.certificationDetails.certification.completed
      ? 'Completed'
      : 'Pending';
  }

  /**
   * Get status CSS class
   */
  getStatusClass(): string {
    if (!this.certificationDetails?.certification) return '';
    return this.certificationDetails.certification.completed
      ? 'status-completed'
      : 'status-pending';
  }

  /**
   * Get comment requirement display text
   */
  getCommentRequirementText(requirement: string): string {
    switch (requirement) {
      case 'ALL_DECISIONS':
        return 'All Decisions';
      case 'REVOKE_ONLY_DECISIONS':
        return 'Revoke Only';
      case 'NO_DECISIONS':
        return 'No Comments Required';
      default:
        return 'N/A';
    }
  }

  /**
   * Check if comment is required for decisions
   */
  requiresComment(requirement: string): boolean {
    return (
      requirement === 'ALL_DECISIONS' || requirement === 'REVOKE_ONLY_DECISIONS'
    );
  }

  /**
   * Get comment requirement message for information bar
   */
  getCommentRequirementMessage(requirement: string): string {
    switch (requirement) {
      case 'ALL_DECISIONS':
        return 'Comments are required for all decisions in this campaign.';
      case 'REVOKE_ONLY_DECISIONS':
        return 'Comments are required for revoke decisions in this campaign.';
      default:
        return '';
    }
  }

  /**
   * Initialize comment inputs for all items
   */
  initializeCommentInputs(): void {
    this.commentInputs = {};
    if (this.certificationDetails?.accessReviewItems) {
      this.certificationDetails.accessReviewItems.forEach((item) => {
        this.commentInputs[String(item.id)] =
          this.getCurrentComment(String(item.id)) || '';
      });
    }
  }

  /**
   * Validate that all decisions requiring comments have comments
   */
  validateCommentRequirements(): boolean {
    this.missingCommentItems = [];

    if (!this.certificationDetails?.campaign?.mandatoryCommentRequirement) {
      return true; // No comment requirements
    }

    const requirement =
      this.certificationDetails.campaign.mandatoryCommentRequirement;

    // Check all items with pending changes
    for (const [itemId, decisionChange] of this.decisionChanges.entries()) {
      const item = this.certificationDetails.accessReviewItems.find(
        (i) => i.id === String(itemId)
      );
      if (!item) continue;

      const decision = decisionChange.decision;
      const comment = decisionChange.comment || '';

      // Check if comment is required for this decision
      let commentRequired = false;
      if (requirement === 'ALL_DECISIONS') {
        commentRequired = true;
      } else if (requirement === 'REVOKE_ONLY_DECISIONS') {
        commentRequired = decision === 'REVOKE';
      }

      // If comment is required but missing, add to missing list
      if (commentRequired && !comment.trim()) {
        this.missingCommentItems.push({
          id: String(itemId),
          identityName: String(item.identitySummary?.name) || 'Unknown',
          accessType: String(item.accessSummary?.access?.type) || 'Unknown',
          accessName: String(item.accessSummary?.access?.name) || 'Unknown',
          decision: String(decision),
        });
      }
    }

    return this.missingCommentItems.length === 0;
  }

  /**
   * Track by function for access review items
   */
  trackByAccessReviewId(index: number, item: any): string {
    return String(item.id) || index.toString();
  }

  /**
   * Get access review columns for Material table
   */
  getAccessReviewColumns(): string[] {
    const columns = ['identity', 'accessType', 'accessName', 'comments', 'decision', 'actions'];
    if (this.bulkActionMode) {
      return ['select', ...columns];
    }
    return columns;
  }

  /**
   * Calculate progress percentage for identities
   */
  getIdentitiesProgressPercent(): number {
    if (!this.certificationDetails?.certification) return 0;
    const completed =
      this.certificationDetails.certification.identitiesCompleted || 0;
    const total = this.certificationDetails.certification.identitiesTotal || 0;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  /**
   * Calculate progress percentage for decisions
   */
  getDecisionsProgressPercent(): number {
    if (!this.certificationDetails?.certification) return 0;
    const made = this.certificationDetails.certification.decisionsMade || 0;
    const total = this.certificationDetails.certification.decisionsTotal || 0;
    return total > 0 ? Math.round((made / total) * 100) : 0;
  }

  /**
   * Get progress status for identities
   */
  getIdentitiesProgressStatus(): 'success' | 'active' | 'normal' | 'exception' {
    const percent = this.getIdentitiesProgressPercent();
    if (percent === 100) return 'success';
    if (percent >= 80) return 'active';
    if (percent >= 50) return 'normal';
    return 'exception';
  }

  /**
   * Get progress status for decisions
   */
  getDecisionsProgressStatus(): 'success' | 'active' | 'normal' | 'exception' {
    const percent = this.getDecisionsProgressPercent();
    if (percent === 100) return 'success';
    if (percent >= 80) return 'active';
    if (percent >= 50) return 'normal';
    return 'exception';
  }

  /**
   * Get number of days overdue
   */
  getDaysOverdue(): number {
    if (!this.isOverdue || !this.certificationDetails?.certification.due) {
      return 0;
    }
    const dueDate = new Date(this.certificationDetails.certification.due);
    const today = new Date();
    const diffTime = today.getTime() - dueDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Check if certification is completed and was overdue (finished late)
   */
  isCompletedAndOverdue(): boolean {
    if (!this.certificationDetails?.certification) return false;

    const certification = this.certificationDetails.certification;
    if (!certification.completed || !certification.due) return false;

    const dueDate = new Date(certification.due);
    const today = new Date();
    return dueDate < today;
  }

  /**
   * Get current breadcrumb label from navigation stack
   * This provides an alternative way to access the breadcrumb label
   */
  getCurrentBreadcrumbLabel(): string {
    const currentItem = this.navStack.peek();
    return currentItem?.breadcrumb?.label || 'Certification Details';
  }

  /**
   * Get all breadcrumb items for display
   */
  getAllBreadcrumbs(): any[] {
    return this.navStack.getBreadcrumbs();
  }

  /**
   * Get color for status tag
   */
  getStatusColor(): string {
    if (!this.certificationDetails?.certification) return 'default';
    return this.certificationDetails.certification.completed
      ? 'green'
      : 'orange';
  }

  /**
   * Get color for phase tag
   */
  getPhaseColor(): string {
    if (!this.certificationDetails?.certification?.phase) return 'default';
    const phase = this.certificationDetails.certification.phase.toLowerCase();

    switch (phase) {
      case 'active':
        return 'blue';
      case 'completed':
        return 'green';
      case 'pending':
        return 'orange';
      case 'cancelled':
        return 'red';
      case 'expired':
        return 'red';
      default:
        return 'default';
    }
  }

  /**
   * Get CSS class for phase indicator
   */
  getPhaseClass(): string {
    if (!this.certificationDetails?.certification?.phase)
      return 'phase-default';
    const phase = this.certificationDetails.certification.phase.toLowerCase();

    switch (phase) {
      case 'active':
        return 'phase-active';
      case 'completed':
        return 'phase-completed';
      case 'pending':
        return 'phase-pending';
      case 'cancelled':
        return 'phase-cancelled';
      case 'expired':
        return 'phase-expired';
      default:
        return 'phase-default';
    }
  }

  /**
   * Get countdown format based on remaining time
   */
  getCountdownFormat(): string {
    if (!this.deadline) return 'H:mm:ss';

    const now = new Date().getTime();
    const remaining = this.deadline - now;

    if (remaining <= 0) return 'H:mm:ss';

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    let format = '';

    if (days > 0) {
      format += 'D day ';
    }

    if (hours > 0 || days > 0) {
      format += 'HH:';
    }

    if (minutes > 0 || hours > 0 || days > 0) {
      format += 'mm:';
    }

    format += 'ss';

    return format.trim();
  }

  /**
   * Check if there is reassignment data
   */
  hasReassignment(): boolean {
    return !!this.certificationDetails?.certification?.reassignment;
  }

  /**
   * Get the name of the reviewer who was reassigned from
   */
  getReassignmentFromName(): string {
    return (
      this.certificationDetails?.certification?.reassignment?.from?.reviewer
        ?.name || 'N/A'
    );
  }

  /**
   * Get the email of the reviewer who was reassigned from
   */
  getReassignmentFromEmail(): string {
    return (
      this.certificationDetails?.certification?.reassignment?.from?.reviewer
        ?.email || ''
    );
  }

  /**
   * Get the creation timestamp of the reassignment
   */
  getReassignmentCreated(): string {
    return (
      this.certificationDetails?.certification?.reassignment?.from?.reviewer
        ?.created || ''
    );
  }

  /**
   * Get the reassignment comment
   */
  getReassignmentComment(): string {
    return (
      this.certificationDetails?.certification?.reassignment?.comment || ''
    );
  }

  /**
   * View identity details
   */
  viewIdentity(identityId: string, name: string): void {
    // Save current state before navigating away
    this.saveToNavigationStack();

    if (identityId) {
      // Push identity info to navigation stack
      const identityNavItem: NavigationItem = {
        id: `identity-${identityId}`,
        title: `Identity Details: ${name}`,
        component: 'identity-info',
        data: { identityId },
        breadcrumb: {
          label: `Identity Details: ${name}`,
          icon: 'user',
        },
      };

      this.navStack.push(identityNavItem);
    }
  }

  /**
   * View access details
   */
  viewAccessDetail(accessReviewItem: any): void {
    if (accessReviewItem) {
      console.log('View access detail:', accessReviewItem);

      // Create navigation item for access detail
      const accessNavItem = {
        id: `access-detail-${accessReviewItem.id}`,
        title: `Access Details: ${
          accessReviewItem.accessSummary?.access?.name || 'Unknown Access'
        }`,
        component: 'access-detail',
        data: accessReviewItem,
        breadcrumb: {
          label: `Access Details: ${
            accessReviewItem.accessSummary?.access?.name || 'Unknown Access'
          }`,
          icon: this.getAccessTypeIcon(
            String(accessReviewItem.accessSummary?.access?.type)
          ),
        },
        metadata: {
          accessType: accessReviewItem.accessSummary?.access?.type,
          accessId: accessReviewItem.accessSummary?.access?.id,
          identityName: accessReviewItem.identitySummary?.name,
        },
      };

      console.log('Pushing access navigation item:', accessNavItem);
      this.navStack.push(accessNavItem);
    }
  }

  /**
   * Get access type icon based on access type
   */
  private getAccessTypeIcon(accessType: string): string {
    switch (accessType) {
      case 'ENTITLEMENT':
        return 'key';
      case 'ACCESS_PROFILE':
        return 'profile';
      case 'ROLE':
        return 'team';
      default:
        return 'question-circle';
    }
  }

  /**
   * Handle decision change
   */
  onDecisionChange(newDecision: string, itemId: string): void {
    if (!itemId) {
      console.warn('No item ID provided for decision change');
      return;
    }

    // Update the item in the data
    const item = this.certificationDetails?.accessReviewItems.find(
      (i) => i.id === itemId
    );
    if (item) {
      item.decision = newDecision as any;
    }

    // Only track non-PENDING decisions in the changes map
    if (newDecision === 'PENDING') {
      // Remove from changes map if it exists (reverting to default state)
      // But preserve the comment in commentInputs so user doesn't lose their work
      const existingChange = this.decisionChanges.get(itemId);
      if (existingChange?.comment) {
        this.commentInputs[String(itemId)] = existingChange.comment;
      }
      this.decisionChanges.delete(itemId);
    } else {
      // Store the change for APPROVE/REVOKE decisions
      const existingChange = this.decisionChanges.get(itemId);
      // Check for existing comment in commentInputs if no existing change
      const existingComment =
        existingChange?.comment || this.commentInputs[String(itemId)] || '';

      this.decisionChanges.set(itemId, {
        decision: newDecision,
        comment: existingComment,
      });
    }

    console.log('Decision changed:', {
      itemId,
      newDecision,
      allChanges: Array.from(this.decisionChanges.entries()),
    });
  }

  onCommentChange(newComment: string, itemId: string): void {
    if (!itemId) {
      console.warn('No item ID provided for comment change');
      return;
    }

    // Get existing decision change or create new one
    const existingChange = this.decisionChanges.get(String(itemId));
    if (existingChange) {
      // Update existing change with new comment
      existingChange.comment = newComment;
    } else {
      // Create new change with current decision and new comment
      const currentDecision = this.getCurrentDecision(String(itemId));
      // Always create a decision change entry when comment is entered
      // If no decision is selected yet, use PENDING as placeholder
      this.decisionChanges.set(String(itemId), {
        decision: currentDecision !== 'PENDING' ? currentDecision : 'PENDING',
        comment: newComment,
      });
    }
  }

  /**
   * Get current decision for an item (including pending changes)
   */
  getCurrentDecision(itemId: string): string {
    try {
      // Check pending changes first
      if (this.decisionChanges.has(String(itemId))) {
        return this.decisionChanges.get(String(itemId))!.decision || 'PENDING';
      }

      // Fall back to current item decision (which may have been reset to original)
      const item = this.certificationDetails?.accessReviewItems?.find(
        (i) => i.id === String(itemId)
      );
      return item?.decision ? String(item.decision) : 'PENDING';
    } catch (error) {
      console.error('Error getting current decision:', error);
      return 'PENDING';
    }
  }

  getCurrentComment(itemId: string): string | null {
    try {
      // Check pending changes first
      if (this.decisionChanges.has(String(itemId))) {
        const comment = this.decisionChanges.get(String(itemId))!.comment;
        return comment ? String(comment) : null;
      }

      // Fall back to current item comment
      const item = this.certificationDetails?.accessReviewItems?.find(
        (i) => i.id === String(itemId)
      );
      return item?.comments ? String(item.comments) : null;
    } catch (error) {
      console.error('Error getting current comment:', error);
      return null;
    }
  }

  /**
   * Save all decision changes (placeholder for API call)
   */
  async saveDecisionChanges(): Promise<void> {
    if (this.decisionChanges.size === 0) {
      console.log('No changes to save');
      return;
    }

    // Validate comment requirements before saving
    if (!this.validateCommentRequirements()) {
      this.commentValidationModalVisible = true;
      return;
    }

    const reviewDecisionV2025 = Array.from(this.decisionChanges.entries()).map(
      ([id, decisionChange]) => ({
        id: id,
        decision: decisionChange.decision as CertificationDecisionV2025,
        bulk: true,
        comments: decisionChange.comment || '',
      })
    );
    console.log('Review decision V2025:', reviewDecisionV2025);

    this.saveChangesLoading = true;
    try {
      const response = await this.sdk.makeIdentityDecision({
        id: this.certificationId,
        reviewDecisionV2025: reviewDecisionV2025,
      });

      console.log('Descision response:', response);
      // Check if response indicates an error
      if (response && typeof response === 'object' && 'status' in response) {
        const status = (response as any).status;
        if (status >= 400) {
          const statusText = (response as any).statusText || `HTTP ${status}`;
          const errorMessage = `Failed to save decisions: ${statusText}`;
          throw new Error(errorMessage);
        }
      }

      console.log('Decision changes saved successfully');
      this.snackBar.open('Decision changes saved successfully', 'Close', { duration: 3000 });

      // Clear NavigationStack cache after successful save to force reload of fresh data
      this.clearNavigationStackCache();

      // Clear decision changes only on successful save
      this.decisionChanges.clear();

      // Reload the certification details to get updated data only on successful save
      await this.loadCertificationDetails();
    } catch (error) {
      this.snackBar.open(`Failed to save decisions: ${String(error)}`, 'Close', { duration: 6000 });
      // Don't clear decisionChanges or reload data on error - keep the changes for retry
    } finally {
      this.saveChangesLoading = false;
    }
  }

  /**
   * Check if there are any pending changes
   */
  hasPendingChanges(): boolean {
    return this.decisionChanges.size > 0;
  }

  /**
   * Clear all decision changes
   */
  clearAllDecisionChanges(): void {
    if (this.decisionChanges.size === 0) {
      console.log('No changes to clear');
      return;
    }

    console.log(
      'Clearing all decision changes:',
      Array.from(this.decisionChanges.entries())
    );

    // Reset all items back to their original decisions (default to 'PENDING')
    if (this.certificationDetails?.accessReviewItems) {
      this.certificationDetails.accessReviewItems.forEach((item) => {
        if (item.id && this.decisionChanges.has(String(item.id))) {
          // Reset to default decision (PENDING)
          item.decision = 'PENDING' as any;
        }
      });
    }

    // Clear the decision changes map
    this.decisionChanges.clear();

    console.log('All decision changes cleared successfully');
  }

  /**
   * Get decision display value for an item (optimized for template)
   */
  getDecisionDisplayValue(item: any): string {
    try {
      if (!item || !item.id) {
        return 'PENDING';
      }
      return (
        this.decisionChanges.get(String(item.id))?.decision ||
        String(item.decision) ||
        'PENDING'
      );
    } catch (error) {
      console.error('Error getting decision display value:', error);
      return 'PENDING';
    }
  }

  /**
   * Get decision display class for an item (optimized for template)
   */
  getDecisionDisplayClass(item: any): string {
    try {
      if (!item) {
        return '';
      }
      const currentDecision = this.getDecisionDisplayValue(item);
      const column = this.accessReviewColumns.find(
        (col) => col.name === 'Decision'
      );
      const baseClass = column?.cssClass
        ? column.cssClass(currentDecision)
        : '';
      const completedClass = item.completed ? ' completed-readonly' : '';
      return baseClass + completedClass;
    } catch (error) {
      console.error('Error getting decision display class:', error);
      return '';
    }
  }

  /**
   * Populate filter options dynamically based on the access review items data
   * This ensures filter options are always based on the complete dataset
   */
  private populateAccessReviewFilterOptions(): void {
    if (!this.certificationDetails?.accessReviewItems) {
      return;
    }

    this.accessReviewColumns.forEach((column) => {
      // Skip columns that don't have dataAccessor or already have predefined filters
      if (!column.dataAccessor || column.listOfFilter.length > 0) {
        return;
      }

      // Get unique values for this column from the access review items data
      const values = [
        ...new Set(
          this.certificationDetails!.accessReviewItems.map((item) => {
            const value = column.dataAccessor!(item);
            // Convert to string for filtering, handle different data types
            if (value === null || value === undefined) return null;
            if (typeof value === 'object' && value instanceof Date) {
              return value.toISOString();
            }
            return String(value);
          }).filter((value): value is string => Boolean(value))
        ),
      ];

      // Update filter options for this column
      column.listOfFilter = values.map((value) => ({
        text: value,
        value: value,
      }));
    });
  }

  /**
   * Toggle bulk action mode
   */
  toggleBulkActionMode(): void {
    this.bulkActionMode = !this.bulkActionMode;
    if (!this.bulkActionMode) {
      // Clear selections when exiting bulk mode
      this.setOfCheckedId.clear();
      this.checked = false;
      this.indeterminate = false;
    }
  }

  /**
   * Update checked set for bulk actions
   */
  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  /**
   * Handle current page data change for bulk actions
   */
  onCurrentPageDataChange(listOfCurrentPageData: readonly any[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  /**
   * Refresh checked status for bulk actions
   */
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(
      (item) => !item.completed
    );
    this.checked = listOfEnabledData.every((item) =>
      this.setOfCheckedId.has(String(item.id))
    );
    this.indeterminate =
      listOfEnabledData.some((item) =>
        this.setOfCheckedId.has(String(item.id))
      ) && !this.checked;
  }

  /**
   * Handle item checked for bulk actions
   */
  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  /**
   * Handle all items checked for bulk actions
   */
  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter((item) => !item.completed)
      .forEach((item) => this.updateCheckedSet(String(item.id), checked));
    this.refreshCheckedStatus();
  }

  /**
   * Apply bulk decision to selected items
   */
  applyBulkDecision(): void {
    if (this.setOfCheckedId.size === 0) {
      console.log('No items selected for bulk action');
      return;
    }

    // Check if comment is required for this decision
    const commentRequired = this.isCommentRequiredForDecision(
      this.bulkActionDecision
    );

    if (commentRequired) {
      // Show modal to collect comment
      this.bulkCommentText = '';
      this.bulkCommentModalVisible = true;
    } else {
      // Apply decision directly without comment
      this.executeBulkDecision('');
    }
  }

  /**
   * Execute the bulk decision with optional comment
   */
  executeBulkDecision(comment: string = ''): void {
    this.bulkActionLoading = true;

    try {
      // Update decision changes for all selected items
      this.setOfCheckedId.forEach((itemId) => {
        this.decisionChanges.set(String(itemId), {
          decision: this.bulkActionDecision,
          comment: comment,
        });

        // Update the commentInputs to reflect in the textarea
        this.commentInputs[String(itemId)] = comment;

        // Also update the item in the data
        const item = this.certificationDetails?.accessReviewItems.find(
          (i) => i.id === String(itemId)
        );
        if (item) {
          item.decision = this.bulkActionDecision as any;
        }
      });

      console.log(
        `Applied ${this.bulkActionDecision} to ${this.setOfCheckedId.size} items with comment: ${comment}`
      );

      // Clear selections
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
    } catch (error) {
      console.error('Error applying bulk decision:', error);
    } finally {
      this.bulkActionLoading = false;
    }
  }

  /**
   * Check if comment is required for a specific decision
   */
  isCommentRequiredForDecision(decision: string): boolean {
    if (!this.certificationDetails?.campaign?.mandatoryCommentRequirement) {
      return false;
    }

    const requirement =
      this.certificationDetails.campaign.mandatoryCommentRequirement;

    if (requirement === 'ALL_DECISIONS') {
      return true;
    } else if (requirement === 'REVOKE_ONLY_DECISIONS') {
      return decision === 'REVOKE';
    }

    return false;
  }

  /**
   * Handle bulk comment modal confirmation
   */
  onBulkCommentConfirm(): void {
    if (
      this.isCommentRequiredForDecision(this.bulkActionDecision) &&
      !this.bulkCommentText.trim()
    ) {
      // Show error message if comment is required but not provided
      console.warn('Comment is required for this decision');
      return;
    }

    this.bulkCommentModalVisible = false;
    this.executeBulkDecision(this.bulkCommentText.trim());
  }

  /**
   * Handle bulk comment modal cancellation
   */
  onBulkCommentCancel(): void {
    this.bulkCommentModalVisible = false;
    this.bulkCommentText = '';
  }

  /**
   * Handle comment validation modal close
   */
  onCommentValidationModalClose(): void {
    this.commentValidationModalVisible = false;
    this.missingCommentItems = [];
  }

  /**
   * Save current state to NavigationStack
   */
  private saveToNavigationStack(): void {
    if (!this.certificationId || !this.certificationDetails) {
      return;
    }

    // Get current navigation item
    const currentItem = this.navStack.peek();
    if (!currentItem) {
      return;
    }

    // Store data in the navigation item's metadata
    const cacheData = {
      certificationDetails: { ...this.certificationDetails },
      decisionChanges: Array.from(this.decisionChanges.entries()),
      commentInputs: { ...this.commentInputs },
      timestamp: Date.now(),
    };

    // Update the current navigation item with cached data
    currentItem.metadata = {
      ...currentItem.metadata,
      [this.CACHE_KEY]: cacheData,
    };
  }

  /**
   * Load state from NavigationStack
   */
  private loadFromNavigationStack(): boolean {
    if (!this.certificationId) {
      console.log('Cannot load from NavigationStack - no certificationId');
      return false;
    }

    console.log(
      'Attempting to load from NavigationStack for certification:',
      this.certificationId
    );

    // Get current navigation item
    const currentItem = this.navStack.peek();
    console.log('Current navigation item for loading:', currentItem);

    if (!currentItem || !currentItem.metadata) {
      console.log('No current navigation item or metadata found');
      return false;
    }

    const cached = currentItem.metadata[this.CACHE_KEY];
    console.log('Cached data found:', !!cached);

    if (!cached) {
      console.log('No cached data found for key:', this.CACHE_KEY);
      return false;
    }

    // Check if cache is not too old (e.g., 30 minutes)
    const cacheAge = Date.now() - cached.timestamp;
    const maxCacheAge = 30 * 60 * 1000; // 30 minutes

    if (cacheAge > maxCacheAge) {
      // Remove expired cache
      delete currentItem.metadata[this.CACHE_KEY];
      console.log('Cache expired for certification:', this.certificationId);
      return false;
    }

    // Restore state from cache
    this.certificationDetails = cached.certificationDetails;
    this.decisionChanges = new Map(
      cached.decisionChanges as Iterable<readonly [string, DecisionChange]>
    );
    this.commentInputs = { ...cached.commentInputs };

    // Set loading to false and clear any errors since we're loading from cache
    this.loading = false;
    this.error = null;

    // Populate filter options for access review items
    this.populateAccessReviewFilterOptions();

    // Calculate deadline for countdown (convert due date to timestamp)
    if (this.certificationDetails?.certification?.due) {
      const dueDate = new Date(this.certificationDetails.certification.due);
      this.deadline = dueDate.getTime();
      // Only mark as overdue if certification is not completed and due date has passed
      this.isOverdue =
        !this.certificationDetails.certification.completed &&
        dueDate < new Date();
    }

    console.log(
      'Loaded from NavigationStack cache for certification:',
      this.certificationId
    );
    return true;
  }

  /**
   * Clear cache from NavigationStack
   */
  private clearNavigationStackCache(): void {
    const currentItem = this.navStack.peek();
    if (currentItem && currentItem.metadata) {
      delete currentItem.metadata[this.CACHE_KEY];
      console.log(
        'Cleared NavigationStack cache for certification:',
        this.certificationId
      );
    }
  }

  /**
   * Check if an item is disabled for bulk selection
   */
  isItemDisabledForBulkSelection(item: any): boolean {
    return Boolean(item.completed) || this.isCertificationStaged();
  }

  /**
   * Check if bulk action button should be disabled
   */
  isBulkActionDisabled(): boolean {
    return (
      this.setOfCheckedId.size === 0 ||
      this.bulkActionLoading ||
      this.isCertificationStaged()
    );
  }

  /**
   * Check if certification is in STAGED phase
   */
  isCertificationStaged(): boolean {
    return (
      this.certificationDetails?.certification?.phase?.toUpperCase() ===
      'STAGED'
    );
  }

  /**
   * Check if decision select should be disabled
   */
  isDecisionSelectDisabled(item: any): boolean {
    return Boolean(item.completed) || this.isCertificationStaged();
  }

  /**
   * Check if all decisions are made
   */
  areAllDecisionsMade(): boolean {
    if (!this.certificationDetails?.certification) return false;
    const made = this.certificationDetails.certification.decisionsMade || 0;
    const total = this.certificationDetails.certification.decisionsTotal || 0;
    return total > 0 && made >= total;
  }

  /**
   * Check if certification is in active phase
   */
  isCertificationActive(): boolean {
    return (
      this.certificationDetails?.certification?.phase?.toUpperCase() ===
      'ACTIVE'
    );
  }

  /**
   * Check if sign-off button should be shown
   */
  shouldShowSignOffButton(): boolean {
    return (
      this.areAllDecisionsMade() &&
      this.isCertificationActive() &&
      !this.isCertificationStaged()
    );
  }

  /**
   * Handle sign-off action
   */
  async signOffCertification(): Promise<void> {
    if (!this.certificationDetails?.certification?.id) {
      console.error('No certification ID available for sign-off');
      return;
    }

    // Show confirmation dialog
    const confirmed = confirm(
      'Are you sure you want to sign off this certification? This action will complete the review process and cannot be undone.'
    );

    if (!confirmed) {
      return;
    }

    this.loading = true;
    try {
      // Call the sign-off API
      const response = await this.sdk.signOffIdentityCertification({
        id: this.certificationDetails.certification.id,
      });

      console.log('Certification signed off successfully:', response);

      // Reload certification details to get updated status
      await this.loadCertificationDetails();
    } catch (error) {
      console.error('Error signing off certification:', error);
      this.error = `Failed to sign off certification: ${String(error)}`;
    } finally {
      this.loading = false;
    }
  }

  /**
   * Download access review items as CSV
   */
  downloadAccessReviewItemsCSV(): void {
    if (
      !this.certificationDetails?.accessReviewItems ||
      this.certificationDetails.accessReviewItems.length === 0
    ) {
      console.warn('No access review items to download');
      return;
    }

    try {
      // Get columns excluding Actions column
      const exportColumns = this.accessReviewColumns.filter(
        (column) => column.name !== 'Actions'
      );

      // Create CSV headers with ID as first column
      const headers = [
        'ID',
        ...exportColumns.map((column) => this.escapeCSVField(column.name)),
      ];
      const csvContent = [headers.join(',')];

      // Add data rows
      this.certificationDetails.accessReviewItems.forEach((item) => {
        const row = [
          // First column: Item ID
          this.escapeCSVField(String(item.id) || ''),
          // Rest of the columns
          ...exportColumns.map((column) => {
            let value = '';

            if (column.dataAccessor) {
              const rawValue = column.dataAccessor(item);

              // Handle special cases for decision column
              if (column.name === 'Decision') {
                value = this.getCurrentDecision(String(item.id)) || 'PENDING';
              } else if (column.formatter) {
                value = column.formatter(rawValue);
              } else {
                value = rawValue || '';
              }
            }

            return this.escapeCSVField(String(value));
          }),
        ];

        csvContent.push(row.join(','));
      });

      // Create and download the file
      const csvString = csvContent.join('\n');
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');

      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);

        // Generate filename with certification ID and timestamp
        const certificationId =
          this.certificationDetails.certification.id || 'certification';
        const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        link.setAttribute(
          'download',
          `access-review-items-${certificationId}-${timestamp}.csv`
        );

        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('CSV download initiated successfully');
      }
    } catch (error) {
      console.error('Error downloading CSV:', error);
      this.error = `Failed to download CSV: ${String(error)}`;
    }
  }

  /**
   * Escape CSV field to handle special characters and commas
   */
  private escapeCSVField(field: string): string {
    if (!field) return '';

    // If field contains comma, newline, or double quote, wrap in quotes and escape internal quotes
    if (
      field.includes(',') ||
      field.includes('\n') ||
      field.includes('\r') ||
      field.includes('"')
    ) {
      return '"' + field.replace(/"/g, '""') + '"';
    }

    return field;
  }

  /**
   * Check if Load CSV button should be shown
   */
  shouldShowLoadCSVButton(): boolean {
    return (
      !this.certificationDetails?.certification?.completed &&
      this.isCertificationActive() &&
      !this.isCertificationStaged()
    );
  }

  /**
   * Get tooltip text for Load CSV button
   */
  getLoadCSVTooltip(): string {
    if (this.certificationDetails?.certification?.completed) {
      return 'Load CSV is not available for completed certifications';
    }
    if (!this.isCertificationActive()) {
      return 'Load CSV is only available for active certifications';
    }
    if (this.isCertificationStaged()) {
      return 'Load CSV is not available for staged certifications';
    }
    return 'Upload CSV file to update decisions for access review items';
  }

  /**
   * Load CSV file
   */
  loadCSV = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    
    // Validate file type
    if (!file.name.toLowerCase().endsWith('.csv')) {
      this.error = 'Please select a valid CSV file';
      return;
    }

    // Read and process the CSV file
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvContent = e.target?.result as string;
      this.processCSVContent(csvContent);
    };
    reader.onerror = () => {
      this.error = 'Error reading CSV file';
    };
    reader.readAsText(file);
  };

  /**
   * Process CSV content and update decisions
   */
  private processCSVContent(csvContent: string): void {
    try {
      const lines = csvContent.split('\n').filter((line) => line.trim());

      if (lines.length < 2) {
        this.error =
          'CSV file must contain at least a header row and one data row';
        return;
      }

      // Parse header row to find column indices
      const headers = this.parseCSVLine(lines[0]);
      const idIndex = headers.findIndex(
        (header) => header.toLowerCase() === 'id'
      );
      const decisionIndex = headers.findIndex(
        (header) => header.toLowerCase() === 'decision'
      );

      if (idIndex === -1) {
        this.error = 'CSV file must contain an "ID" column';
        return;
      }

      if (decisionIndex === -1) {
        this.error = 'CSV file must contain a "Decision" column';
        return;
      }

      // Process data rows
      let updatedCount = 0;
      let skippedCount = 0;
      const errors: string[] = [];

      for (let i = 1; i < lines.length; i++) {
        const row = this.parseCSVLine(lines[i]);

        if (row.length <= Math.max(idIndex, decisionIndex)) {
          errors.push(`Row ${i + 1}: Insufficient columns`);
          continue;
        }

        const itemId = String(row[idIndex] || '').trim();
        const decision = String(row[decisionIndex] || '')
          .trim()
          .toUpperCase();

        if (!itemId) {
          errors.push(`Row ${i + 1}: Missing item ID`);
          continue;
        }

        // Validate decision value
        if (!['APPROVE', 'REVOKE', 'PENDING'].includes(decision)) {
          errors.push(
            `Row ${
              i + 1
            }: Invalid decision "${decision}". Must be APPROVE, REVOKE, or PENDING`
          );
          continue;
        }

        // Find the corresponding access review item
        const item = this.certificationDetails?.accessReviewItems.find(
          (accessItem) => accessItem.id === String(itemId)
        );

        if (!item) {
          errors.push(`Row ${i + 1}: Item with ID "${itemId}" not found`);
          continue;
        }

        // Only update if item is not completed
        if (item.completed) {
          skippedCount++;
          continue;
        }

        // Update decision changes
        if (decision === 'PENDING') {
          // Remove from changes map if it exists (reverting to default state)
          this.decisionChanges.delete(String(itemId));
        } else {
          // Store the change for APPROVE/REVOKE decisions
          const existingChange = this.decisionChanges.get(String(itemId));
          this.decisionChanges.set(String(itemId), {
            decision: decision,
            comment: existingChange?.comment || '',
          });
        }

        // Also update the item in the data for immediate UI feedback
        item.decision = decision as any;
        updatedCount++;
      }

      // Show results
      if (updatedCount > 0) {
        let message = `CSV processing completed. Updated ${updatedCount} items`;
        if (skippedCount > 0) {
          message += `, skipped ${skippedCount} completed items`;
        }
        this.snackBar.open(message, 'Close', { duration: 3000 });
      }

      // Clear any previous errors if processing was successful
      if (errors.length === 0) {
        this.error = null;
      } else {
        this.error = `CSV processing completed with ${errors.length} errors. Check console for details.`;
      }
    } catch (error) {
      console.error('Error processing CSV:', error);
      this.error = `Failed to process CSV file: ${String(error)}`;
    }
  }

  /**
   * Parse a CSV line, handling quoted fields
   */
  private parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          // Escaped quote
          current += '"';
          i++; // Skip next quote
        } else {
          // Toggle quote state
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        // Field separator
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    // Add the last field
    result.push(current.trim());

    return result;
  }
}
