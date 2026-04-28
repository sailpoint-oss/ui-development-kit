import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { ProfileNERM } from 'sailpoint-api-client';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import { ExtendDialogResult, NermExtendDialogComponent } from './nerm-extend-dialog/nerm-extend-dialog.component';
import { NermEndAssignmentDialogComponent } from './nerm-offboard-dialog/nerm-offboard-dialog.component';
import { NermStateService } from './nerm-state.service';
import { NermDashboardSettingsService } from './nerm-dashboard-settings.service';

export interface DepartmentInfo {
  code: string;
  displayName: string;
}

export interface LocationInfo {
  code: string;
  description: string;
  city: string;
  state: string;
  country: string;
}

export interface OrganizationInfo {
  id: string;
  name: string;
  riskScore: number;
  departmentCodes: string[];
  locationCodes: string[];
  activeAssignmentCount: number;
}

export interface PersonInfo {
  profileId: string;
  personId: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  collaborator: boolean;
}

export interface EnrichedAssignment {
  id: string;
  assignmentId: string;
  name: string;
  status: string;
  description: string;
  jobTitle: string;
  startDate: Date | null;
  endDate: Date | null;
  riskOverall: number;
  riskImpact: number;
  riskProbability: number;
  lastVerificationDate: string;
  personName: string;
  personId: string;
  personEmail: string;
  personPhone: string;
  organizationName: string;
  locationCode: string;
  locationDescription: string;
  locationCity: string;
  locationState: string;
  daysUntilExpiration: number;
  expirationUrgency: 'critical' | 'warning' | 'ok' | 'safe';
}

export interface DashboardMetrics {
  totalNonEmployees: number;
  activeAssignments: number;
  expiringIn30Days: number;
  expiringIn60Days: number;
  expiringIn90Days: number;
  highRiskAssignments: number;
  averageRiskScore: number;
}

@Component({
  selector: 'app-nerm-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './nerm-dashboard.component.html',
  styleUrl: './nerm-dashboard.component.scss',
})
export class NermDashboardComponent implements OnInit {
  title = 'Non-Employee Resource Management';
  loading = false;
  selectedTabIndex = 0;

  // Processed data
  assignments: EnrichedAssignment[] = [];
  filteredAssignments: EnrichedAssignment[] = [];
  organizations: OrganizationInfo[] = [];
  departments = new Map<string, DepartmentInfo>();
  locations = new Map<string, LocationInfo>();
  people = new Map<string, PersonInfo>();

  metrics: DashboardMetrics = {
    totalNonEmployees: 0,
    activeAssignments: 0,
    expiringIn30Days: 0,
    expiringIn60Days: 0,
    expiringIn90Days: 0,
    highRiskAssignments: 0,
    averageRiskScore: 0,
  };

  // Filters
  selectedOrganization = '';
  selectedDepartment = '';
  selectedLocation = '';
  selectedStatus = '';
  searchQuery = '';

  availableDepartments: DepartmentInfo[] = [];
  availableLocations: LocationInfo[] = [];
  statusOptions = ['Active', 'Inactive', 'On Leave', 'Terminated'];

  // Assignment table columns
  assignmentColumns = [
    'assignmentId',
    'personName',
    'jobTitle',
    'organizationName',
    'locationDescription',
    'startDate',
    'endDate',
    'riskOverall',
    'status',
    'actions',
  ];

  // Expiration groups
  criticalExpirations: EnrichedAssignment[] = [];
  warningExpirations: EnrichedAssignment[] = [];
  upcomingExpirations: EnrichedAssignment[] = [];

  // Risk groups
  highRiskAssignments: EnrichedAssignment[] = [];
  mediumRiskAssignments: EnrichedAssignment[] = [];
  lowRiskAssignments: EnrichedAssignment[] = [];

  // Person detail panel
  showPersonDetail = false;
  selectedPerson: PersonInfo | null = null;
  selectedPersonAssignments: EnrichedAssignment[] = [];

  // Sorting
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private sdk: SailPointSDKService,
    private nermState: NermStateService,
    private nermSettings: NermDashboardSettingsService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    void this.loadDashboardData();
  }

  async loadDashboardData(): Promise<void> {
    this.loading = true;
    try {
      const ids = this.nermSettings.getProfileTypeIds();
      const [peopleRes, locRes, deptRes, orgRes, assignRes] = await Promise.all([
        this.sdk.getProfilesNerm({ profileTypeId: ids.peopleTypeId, limit: 500 }),
        this.sdk.getProfilesNerm({ profileTypeId: ids.locationTypeId, limit: 500 }),
        this.sdk.getProfilesNerm({ profileTypeId: ids.departmentTypeId, limit: 500 }),
        this.sdk.getProfilesNerm({ profileTypeId: ids.organizationTypeId, limit: 500 }),
        this.sdk.getProfilesNerm({ profileTypeId: ids.assignmentTypeId, limit: 500 }),
      ]);

      this.processDepartments(deptRes.data.profiles ?? []);
      this.processLocations(locRes.data.profiles ?? []);
      this.processPeople(peopleRes.data.profiles ?? []);
      this.processOrganizations(orgRes.data.profiles ?? []);
      this.processAssignments(assignRes.data.profiles ?? []);
      this.computeMetrics();
      this.computeExpirationGroups();
      this.computeRiskGroups();
      this.applyFilters();
      this.nermState.setAssignments(this.assignments);
      this.nermState.setPeople(this.people);
    } catch (error) {
      console.error('Failed to load NERM data:', error);
    } finally {
      this.loading = false;
    }
  }

  // --- Data Processing ---

  private processDepartments(profiles: ProfileNERM[]): void {
    this.departments.clear();
    for (const dept of profiles) {
      const code = dept.attributes?.['department_code'] ?? dept.name ?? '';
      this.departments.set(code, {
        code,
        displayName: dept.attributes?.['department_name'] ?? code,
      });
    }
  }

  private processLocations(profiles: ProfileNERM[]): void {
    this.locations.clear();
    for (const loc of profiles) {
      const code = loc.attributes?.['location_code'] ?? loc.name ?? '';
      this.locations.set(code, {
        code,
        description: loc.attributes?.['location_description'] ?? code,
        city: loc.attributes?.['city'] ?? '',
        state: loc.attributes?.['state'] ?? '',
        country: loc.attributes?.['country'] ?? '',
      });
    }
  }

  private processPeople(profiles: ProfileNERM[]): void {
    this.people.clear();
    for (const person of profiles) {
      const personId = person.attributes?.['person_id'] ?? '';
      this.people.set(personId, {
        profileId: person.id ?? '',
        personId,
        name: person.name ?? '',
        firstName: person.attributes?.['first_name'] ?? '',
        lastName: person.attributes?.['last_name'] ?? '',
        email: person.attributes?.['email'] ?? '',
        phone:
          person.attributes?.['personal_phone_number'] ||
          person.attributes?.['professional_phone_number'] ||
          '',
        status: person.status ?? '',
        collaborator: person.attributes?.['collaborator'] === 'Yes',
      });
    }
  }

  private processOrganizations(profiles: ProfileNERM[]): void {
    this.organizations = profiles.map((org) => {
      const deptStr = org.attributes?.['organization_departments'] ?? '';
      const locStr = org.attributes?.['organization_locations'] ?? '';
      return {
        id: org.id ?? '',
        name: org.attributes?.['organization_name'] ?? org.name ?? '',
        riskScore: parseFloat(org.attributes?.['organization_risk_score'] ?? '0'),
        departmentCodes: deptStr
          ? deptStr.split(',').map((s) => s.trim()).filter(Boolean)
          : [],
        locationCodes: locStr
          ? locStr.split(',').map((s) => s.trim()).filter(Boolean)
          : [],
        activeAssignmentCount: 0,
      };
    });
  }

  private processAssignments(profiles: ProfileNERM[]): void {
    const now = new Date();

    this.assignments = profiles.map((assignment) => {
      const attrs = assignment.attributes ?? {};
      const personId = attrs['person_id'] ?? '';
      const person = this.people.get(personId);
      const locCode = attrs['assignment_location'] ?? '';
      const location = this.locations.get(locCode);

      const endDate = this.parseDate(attrs['end_date']);
      const startDate = this.parseDate(attrs['start_date']);
      const daysUntil = endDate
        ? Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        : 999;

      let urgency: EnrichedAssignment['expirationUrgency'];
      if (daysUntil <= 30) urgency = 'critical';
      else if (daysUntil <= 60) urgency = 'warning';
      else if (daysUntil <= 90) urgency = 'ok';
      else urgency = 'safe';

      return {
        id: assignment.id ?? '',
        assignmentId: attrs['assignment_id'] ?? '',
        name: assignment.name ?? '',
        status: assignment.status ?? '',
        description: attrs['assignment_description_ne_attribute'] ?? '',
        jobTitle: attrs['job_title'] ?? '',
        startDate,
        endDate,
        riskOverall: parseFloat(attrs['assignment_risk_overall_score'] ?? '0'),
        riskImpact: parseFloat(attrs['assignment_risk_impact_score'] ?? '0'),
        riskProbability: parseFloat(attrs['assignment_risk_probability_score'] ?? '0'),
        lastVerificationDate: attrs['last_verification_date'] ?? '',
        personName: attrs['assignment_person'] ?? person?.name ?? '',
        personId,
        personEmail: person?.email ?? '',
        personPhone: person?.phone ?? '',
        organizationName: attrs['assignment_organization'] ?? '',
        locationCode: locCode,
        locationDescription: location?.description ?? locCode,
        locationCity: location?.city ?? '',
        locationState: location?.state ?? '',
        daysUntilExpiration: daysUntil,
        expirationUrgency: urgency,
      };
    });

    // Update org assignment counts
    for (const org of this.organizations) {
      org.activeAssignmentCount = this.assignments.filter(
        (a) => a.organizationName === org.name && a.status === 'Active'
      ).length;
    }
    this.organizations.sort((a, b) => b.activeAssignmentCount - a.activeAssignmentCount);
  }

  private computeMetrics(): void {
    const active = this.assignments.filter((a) => a.status === 'Active');
    const riskScores = active.map((a) => a.riskOverall).filter((r) => r > 0);

    this.metrics = {
      totalNonEmployees: this.people.size,
      activeAssignments: active.length,
      expiringIn30Days: active.filter((a) => a.daysUntilExpiration >= 0 && a.daysUntilExpiration <= 30).length,
      expiringIn60Days: active.filter((a) => a.daysUntilExpiration >= 0 && a.daysUntilExpiration <= 60).length,
      expiringIn90Days: active.filter((a) => a.daysUntilExpiration >= 0 && a.daysUntilExpiration <= 90).length,
      highRiskAssignments: active.filter((a) => a.riskOverall >= 3).length,
      averageRiskScore:
        riskScores.length > 0
          ? riskScores.reduce((sum, r) => sum + r, 0) / riskScores.length
          : 0,
    };
  }

  private computeExpirationGroups(): void {
    const active = this.assignments.filter((a) => a.status === 'Active');
    this.criticalExpirations = active
      .filter((a) => a.daysUntilExpiration >= 0 && a.daysUntilExpiration <= 30)
      .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration);
    this.warningExpirations = active
      .filter((a) => a.daysUntilExpiration > 30 && a.daysUntilExpiration <= 60)
      .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration);
    this.upcomingExpirations = active
      .filter((a) => a.daysUntilExpiration > 60 && a.daysUntilExpiration <= 90)
      .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration);
  }

  private computeRiskGroups(): void {
    const sorted = [...this.assignments].sort((a, b) => b.riskOverall - a.riskOverall);
    this.highRiskAssignments = sorted.filter((a) => a.riskOverall >= 3);
    this.mediumRiskAssignments = sorted.filter((a) => a.riskOverall >= 2 && a.riskOverall < 3);
    this.lowRiskAssignments = sorted.filter((a) => a.riskOverall > 0 && a.riskOverall < 2);
  }

  // --- Filters ---

  onOrganizationChange(): void {
    const org = this.organizations.find((o) => o.name === this.selectedOrganization);
    if (org) {
      this.availableDepartments = org.departmentCodes
        .map((code) => this.departments.get(code))
        .filter((d): d is DepartmentInfo => d !== undefined);
      this.availableLocations = org.locationCodes
        .map((code) => this.locations.get(code))
        .filter((l): l is LocationInfo => l !== undefined);
    } else {
      this.availableDepartments = Array.from(this.departments.values());
      this.availableLocations = Array.from(this.locations.values());
    }
    this.selectedDepartment = '';
    this.selectedLocation = '';
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.assignments];

    if (this.selectedOrganization) {
      filtered = filtered.filter((a) => a.organizationName === this.selectedOrganization);
    }
    if (this.selectedLocation) {
      filtered = filtered.filter((a) => a.locationCode === this.selectedLocation);
    }
    if (this.selectedStatus) {
      filtered = filtered.filter((a) => a.status === this.selectedStatus);
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.personName.toLowerCase().includes(q) ||
          a.assignmentId.toLowerCase().includes(q) ||
          a.jobTitle.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
    }

    this.filteredAssignments = filtered;
    if (this.sortColumn) {
      this.sortData(this.sortColumn, this.sortDirection);
    }
  }

  clearFilters(): void {
    this.selectedOrganization = '';
    this.selectedDepartment = '';
    this.selectedLocation = '';
    this.selectedStatus = '';
    this.searchQuery = '';
    this.availableDepartments = [];
    this.availableLocations = [];
    this.applyFilters();
  }

  // --- Sorting ---

  toggleSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData(column, this.sortDirection);
  }

  private sortData(column: string, direction: 'asc' | 'desc'): void {
    const dir = direction === 'asc' ? 1 : -1;
    this.filteredAssignments.sort((a, b) => {
      const valA = (a as any)[column];
      const valB = (b as any)[column];
      if (valA instanceof Date && valB instanceof Date) {
        return (valA.getTime() - valB.getTime()) * dir;
      }
      if (typeof valA === 'number' && typeof valB === 'number') {
        return (valA - valB) * dir;
      }
      return String(valA ?? '').localeCompare(String(valB ?? '')) * dir;
    });
    this.filteredAssignments = [...this.filteredAssignments];
  }

  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return 'unfold_more';
    return this.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  // --- Navigation ---

  selectOrganization(orgName: string): void {
    this.selectedOrganization = orgName;
    this.onOrganizationChange();
    this.selectedTabIndex = 1;
  }

  openPersonDetail(personId: string): void {
    const person = this.people.get(personId);
    if (person) {
      this.selectedPerson = person;
      this.selectedPersonAssignments = this.assignments.filter(
        (a) => a.personId === personId
      );
      this.showPersonDetail = true;
    }
  }

  closePersonDetail(): void {
    this.showPersonDetail = false;
    this.selectedPerson = null;
    this.selectedPersonAssignments = [];
  }

  viewExpiration(assignment: EnrichedAssignment): void {
    this.selectedOrganization = assignment.organizationName;
    this.onOrganizationChange();
    this.searchQuery = assignment.assignmentId;
    this.applyFilters();
    this.selectedTabIndex = 1;
  }

  // --- Actions ---

  extendAssignment(assignment: EnrichedAssignment): void {
    const ref = this.dialog.open(NermExtendDialogComponent, {
      data: { assignment },
      disableClose: false,
    });
    ref.afterClosed().subscribe((result: ExtendDialogResult | undefined) => {
      if (result?.newEndDate) {
        console.log('Extend assignment', assignment.assignmentId, 'to', result.newEndDate);
        const settings = this.nermSettings.getSettings();
        void this.sdk.submitWorkflowSessionNerm({
          submitWorkflowSessionRequestNERM: {
            workflow_session: {
              workflow_id: settings.extendAssignmentWorkflowId,
              requester_id: '6a7dffeb-6bfd-4efa-895b-1a7a2d381700',
              requester_type: 'User',
              profile_id: assignment.id,
              attributes: { end_date: `${result.newEndDate.getMonth() + 1}/${result.newEndDate.getDate()}/${result.newEndDate.getFullYear()}` },
            },
          },
        });
      }
    });
  }

  requestReview(assignment: EnrichedAssignment): void {
    void this.router.navigate(['/nerm-dashboard', 'assignment', assignment.id]);
  }

  endAssignment(assignment: EnrichedAssignment): void {
    const ref = this.dialog.open(NermEndAssignmentDialogComponent, {
      data: { assignment },
      disableClose: false,
    });
    ref.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('End assignment confirmed for:', assignment.assignmentId);
        const settings = this.nermSettings.getSettings();
        void this.sdk.submitWorkflowSessionNerm({
          submitWorkflowSessionRequestNERM: {
            workflow_session: {
              workflow_id: settings.endAssignmentWorkflowId,
              requester_id: '6a7dffeb-6bfd-4efa-895b-1a7a2d381700',
              requester_type: 'User',
              profile_id: assignment.id,
              attributes: { },
            },
          },
        });
      }
    });
  }

  // --- Helpers ---

  private parseDate(dateStr: string | undefined): Date | null {
    if (!dateStr) return null;
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
    }
    return null;
  }

  getRiskClass(score: number): string {
    if (score >= 3) return 'risk-high';
    if (score >= 2) return 'risk-medium';
    return 'risk-low';
  }

  getUrgencyClass(urgency: string): string {
    switch (urgency) {
      case 'critical':
        return 'urgency-critical';
      case 'warning':
        return 'urgency-warning';
      case 'ok':
        return 'urgency-ok';
      default:
        return 'urgency-safe';
    }
  }

  formatDaysUntil(days: number): string {
    if (days < 0) return `${Math.abs(days)}d overdue`;
    if (days === 0) return 'Expires today';
    return `${days}d remaining`;
  }

  getRiskBarWidth(score: number): number {
    return Math.min((score / 5) * 100, 100);
  }

  getOrgRiskClass(score: number): string {
    if (score >= 4) return 'risk-high';
    if (score >= 3) return 'risk-medium';
    return 'risk-low';
  }
}
