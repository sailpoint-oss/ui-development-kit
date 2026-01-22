import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationStackService } from '../navigation-stack/navigation-stack.service';
import { Subscription } from 'rxjs';

interface AccessSummary {
  access: {
    type: string;
    id: string;
    name: string;
  };
  entitlement?: {
    id: string;
    name: string;
    description: string;
    privileged: boolean;
    owner: {
      type: string;
      id: string;
      name: string;
      email: string;
    };
    attributeName: string;
    attributeValue: string;
    sourceSchemaObjectType: string;
    sourceName: string;
    sourceType: string;
    sourceId: string;
    hasPermissions: boolean;
    isPermission: boolean;
    revocable: boolean;
    cloudGoverned: boolean;
    containsDataAccess: boolean;
    dataAccess?: {
      policies: Array<{ value: string }>;
      categories: Array<{ value: string; matchCount: number }>;
      impactScore: { value: string };
    };
    account: {
      nativeIdentity: string;
      disabled: boolean;
      locked: boolean;
      type: string;
      id: string;
      name: string;
      created: string;
      modified: string;
      activityInsights: {
        accountID: string;
        usageDays: number;
        usageDaysState: string;
      };
      description: string;
      governanceGroupId: string;
      owner: {
        id: string;
        type: string;
        displayName: string;
      };
    };
  };
  accessProfile?: {
    id: string;
    name: string;
    description: string;
    privileged: boolean;
    cloudGoverned: boolean;
    endDate: string;
    owner: {
      type: string;
      id: string;
      name: string;
      email: string;
    };
    entitlements: Array<any>;
    created: string;
    modified: string;
  };
  role?: {
    id: string;
    name: string;
    description: string;
    privileged: boolean;
    owner: {
      type: string;
      id: string;
      name: string;
      email: string;
    };
    revocable: boolean;
    endDate: string;
    accessProfiles: Array<any>;
    entitlements: Array<any>;
  };
}

interface AccessReviewItem {
  accessSummary: AccessSummary;
  identitySummary: {
    id: string;
    name: string;
    identityId: string;
    completed: boolean;
  };
  id: string;
  completed: boolean;
  newAccess: boolean;
  decision: string;
  comments: string;
}

@Component({
  selector: 'app-access-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './access-detail.component.html',
  styleUrls: ['./access-detail.component.scss'],
})
export class AccessDetailComponent implements OnInit, OnDestroy {
  @Input() accessReviewItem: AccessReviewItem | null = null;

  private navSubscription: Subscription = new Subscription();
  currentNavItem: any = null;

  constructor(private navStack: NavigationStackService) {}

  ngOnInit(): void {
    // Subscribe to navigation events to get current item
    this.navSubscription = this.navStack
      .getNavigationEvents()
      .subscribe((event) => {
        if (event?.type === 'push' && event.item) {
          this.currentNavItem = event.item;
        }
      });

    // Get current navigation item
    this.currentNavItem = this.navStack.peek();
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }

  /**
   * Navigate back to previous level
   */
  goBack(): void {
    this.navStack.pop();
  }

  /**
   * Get access type display name
   */
  getAccessTypeDisplay(): string {
    if (!this.accessReviewItem?.accessSummary?.access?.type) {
      return 'Unknown';
    }

    const type = this.accessReviewItem.accessSummary.access.type;
    switch (type) {
      case 'ENTITLEMENT':
        return 'Entitlement';
      case 'ACCESS_PROFILE':
        return 'Access Profile';
      case 'ROLE':
        return 'Role';
      default:
        return type;
    }
  }

  /**
   * Get access type icon
   */
  getAccessTypeIcon(): string {
    if (!this.accessReviewItem?.accessSummary?.access?.type) {
      return 'question-circle';
    }

    const type = this.accessReviewItem.accessSummary.access.type;
    switch (type) {
      case 'ENTITLEMENT':
        return 'key';
      case 'ACCESS_PROFILE':
        return 'user';
      case 'ROLE':
        return 'team';
      default:
        return 'question-circle';
    }
  }

  /**
   * Check if access has entitlement data
   */
  hasEntitlement(): boolean {
    return !!this.accessReviewItem?.accessSummary?.entitlement;
  }

  /**
   * Check if access has access profile data
   */
  hasAccessProfile(): boolean {
    return !!this.accessReviewItem?.accessSummary?.accessProfile;
  }

  /**
   * Check if access has role data
   */
  hasRole(): boolean {
    return !!this.accessReviewItem?.accessSummary?.role;
  }

  /**
   * Get decision badge class
   */
  getDecisionBadgeClass(): string {
    if (!this.accessReviewItem?.decision) {
      return 'badge-secondary';
    }

    switch (this.accessReviewItem.decision.toUpperCase()) {
      case 'APPROVE':
        return 'badge-success';
      case 'REJECT':
        return 'badge-danger';
      case 'REVOKE':
        return 'badge-warning';
      default:
        return 'badge-secondary';
    }
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  }

  /**
   * Get privilege badge class
   */
  getPrivilegeBadgeClass(privileged: boolean): string {
    return privileged ? 'badge-warning' : 'badge-info';
  }

  /**
   * Get cloud governed badge class
   */
  getCloudGovernedBadgeClass(cloudGoverned: boolean): string {
    return cloudGoverned ? 'badge-primary' : 'badge-secondary';
  }
}
