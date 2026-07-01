import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import type { RoleV2025 } from 'sailpoint-api-client';

import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import { ElectronApiFactoryService } from '../services/electron-api-factory.service';
import { CriteriaTreeComponent } from './criteria-tree/criteria-tree.component';
import {
  canonicalizeIdentityAttr,
  collectLeafAttributes,
  countLeafNodes,
  countNodes,
  CriteriaNode,
  isLeaf,
  LEAF_OPERATIONS,
  LeafOperation,
  leafValues,
  MembershipSelector,
  normalizeIdentityAttr,
  parseCriteria,
  roleMatchesCriteriaFilter,
} from './models/criteria.model';
import {
  applyOperation,
  OperationParams,
  OperationResult,
  SnapshotEntry,
  restoreFromSnapshot,
} from './models/criteria-operations';
import {
  matchRolesToRefs,
  parseRoleListCsv,
  refLabel,
} from './models/csv-import';

/** A role row shown in the Target panel table. */
interface RoleRow {
  id: string;
  name: string;
  membershipType: string;
  nodeCount: number;
  selected: boolean;
  role: RoleV2025;
}

/** Per-role computed preview for the Preview panel. */
interface RolePreview {
  row: RoleRow;
  before: CriteriaNode | null;
  result: OperationResult;
}

/** Per-role outcome shown in the Results panel. */
interface RunResult {
  role: string;
  id: string;
  status: 'Updated' | 'Skipped' | 'Error';
  detail?: string;
  nodesBefore?: number;
  nodesAfter?: number;
  verifying?: boolean;
}

interface RoleCriteriaStepper {
  selectedIndex: number;
  next?: () => void;
}

type OperationTab =
  | 'update'
  | 'add-values'
  | 'add-block'
  | 'remove'
  | 'consolidate';

interface SimulationSummary {
  total: number;
  wouldChange: number;
  wouldSkip: number;
  skipReasons: Record<string, number>;
}

const PAGE_SIZE = 250;
const LARGE_RESULT_THRESHOLD = 1000;

/**
 * Bulk-edits ISC role membership criteria through a guided, safe-by-default
 * four-panel flow (Target → Operation → Preview → Results). All criteria
 * mutation is delegated to the pure model under `./models`; this container only
 * orchestrates SDK calls, the snapshot-before-write safety step, and the
 * stepper UI.
 */
@Component({
  selector: 'app-role-criteria-manager',
  standalone: true,
  imports: [
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    CriteriaTreeComponent,
    JsonPipe,
  ],
  templateUrl: './role-criteria-manager.component.html',
  styleUrl: './role-criteria-manager.component.scss',
})
export class RoleCriteriaManagerComponent {
  @ViewChild('stepper') stepper?: RoleCriteriaStepper;

  // ----- Panel 1: Target -----
  mode: 'single' | 'bulk' | 'criteria' | 'access' | 'csv' = 'single';
  searchText = '';
  criteriaFilter: { attribute: string; operation: LeafOperation | ''; value: string } = {
    attribute: '',
    operation: '',
    value: '',
  };
  accessFilter: { type: 'accessProfile' | 'entitlement'; name: string } = {
    type: 'accessProfile',
    name: '',
  };
  roleRows: RoleRow[] = [];
  searching = false;
  searched = false;
  readonly displayedColumns = ['select', 'name', 'id', 'membershipType', 'nodeCount'];

  // ----- Panel 1: CSV import (target scope only) -----
  /** Name of the most recently imported CSV file, shown in the panel. */
  csvFileName = '';
  /** Row-level CSV parse problems (e.g. a row with neither name nor id). */
  csvErrors: { row: number; message: string }[] = [];
  /** Labels of CSV refs that matched no role in the tenant. */
  csvUnmatched: string[] = [];

  // ----- Panel 1: Identity attribute suggestions (loaded lazily) -----
  identityAttributeSuggestions: string[] = [];
  private identityAttributesLoaded = false;

  // ----- Panel 1: Access profile / entitlement suggestions (loaded lazily) -----
  accessProfileSuggestions: string[] = [];
  entitlementSuggestions: string[] = [];
  private accessSuggestionsLoaded = false;

  // ----- Panel 2: Operation -----
  selectedTabIndex = 0;
  attributeOptions: string[] = [];
  /** All distinct values for the currently-selected "Update" attribute, for the oldValue dropdown. */
  oldValueOptions: string[] = [];
  loadingDetails = false;
  private readonly roleCache = new Map<string, RoleV2025>();

  readonly leafOperations: readonly LeafOperation[] = LEAF_OPERATIONS;

  updateForm = { attribute: '', oldValue: '', newValues: '' };
  addValuesForm = { attribute: '', addValues: '' };
  addBlockForm = {
    attribute: '',
    operation: 'EQUALS' as LeafOperation,
    values: '',
    join: 'AND' as 'AND' | 'OR',
    keyType: 'IDENTITY' as 'IDENTITY' | 'ACCOUNT' | 'ENTITLEMENT',
    sourceId: '',
  };
  removeForm = {
    attribute: '',
    mode: 'value' as 'value' | 'attribute',
    value: '',
  };
  consolidateForm = { attribute: '' };

  // ----- Panel 3: Preview -----
  previews: RolePreview[] = [];
  dryRun = true;
  snapshot = true;
  readonly patchJsonExpanded = new Set<string>();
  /** Identity counts for Preview: keyed by role id, before/after the operation. */
  identityCounts = new Map<string, { before: number | null; after: number | null; loading: boolean }>();

  // ----- Simulation -----
  simulationResults: SimulationSummary | null = null;
  simulating = false;

  // ----- Restore -----
  restoreMode = false;
  private snapshotEntries: SnapshotEntry[] = [];

  // ----- Panel 4: Results -----
  executing = false;
  hasExecuted = false;
  results: RunResult[] = [];
  private snapshotContent = '';
  private snapshotFilename = '';

  constructor(
    private readonly sdk: SailPointSDKService,
    private readonly apiFactory: ElectronApiFactoryService,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar,
    private readonly cdr: ChangeDetectorRef
  ) {}

  private get api(): {
    saveFile: (options: {
      defaultPath?: string;
      content: string;
    }) => Promise<{
      success: boolean;
      canceled?: boolean;
      filePath?: string;
      error?: string;
    }>;
    browseForJsonFile: () => Promise<{ success: boolean; canceled?: boolean; content?: string; filePath?: string; error?: string }>;
    browseForCsvFile: () => Promise<{ success: boolean; canceled?: boolean; content?: string; filePath?: string; error?: string }>;
  } {
    return this.apiFactory.getApi() as never;
  }

  // ===========================================================================
  // Panel 1 — Target
  // ===========================================================================

  get activeOperation(): OperationTab {
    return (['update', 'add-values', 'add-block', 'remove', 'consolidate'] as const)[
      this.selectedTabIndex
    ];
  }

  selectedRoles(): RoleRow[] {
    return this.roleRows.filter((r) => r.selected);
  }

  allSelected(): boolean {
    return this.roleRows.length > 0 && this.roleRows.every((r) => r.selected);
  }

  someSelected(): boolean {
    return this.roleRows.some((r) => r.selected) && !this.allSelected();
  }

  toggleAll(checked: boolean): void {
    this.roleRows.forEach((r) => (r.selected = checked));
  }

  selectAll(): void { this.toggleAll(true); }
  clearSelection(): void { this.toggleAll(false); }

  async findRoles(): Promise<void> {
    if (this.mode === 'criteria') {
      await this.findRolesByCriteria();
      return;
    }
    if (this.mode === 'access') {
      await this.findRolesByAccess();
      return;
    }

    const text = this.searchText.trim();
    if (!text) {
      this.snackBar.open('Enter a role name to search.', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.searching = true;
    this.searched = false;
    this.roleRows = [];
    this.roleCache.clear();
    this.cdr.detectChanges();

    const escaped = text.replace(/"/g, '\\"');
    const filter =
      this.mode === 'single' ? `name eq "${escaped}"` : `name co "${escaped}"`;

    try {
      let roles = await this.fetchAllRoles(filter);

      // Single-role safety clamp — never silently act on more than one role.
      if (this.mode === 'single' && roles.length > 1) {
        this.snackBar.open(
          `Single-role mode matched ${roles.length} roles; using only the first ("${roles[0].name}").`,
          'Close',
          { duration: 6000 }
        );
        roles = [roles[0]];
      }

      this.roleRows = roles.map((role) => {
        const criteria = parseCriteria(role.membership?.criteria ?? null);
        return {
          id: role.id ?? '',
          name: role.name ?? '(unnamed)',
          membershipType: role.membership?.type ?? '—',
          nodeCount: countNodes(criteria),
          selected: this.mode === 'single',
          role,
        };
      });
      if (this.mode === 'bulk' && roles.length <= 50) { this.toggleAll(true); }

      if (this.roleRows.length === 0) {
        this.snackBar.open('No roles matched.', 'Close', { duration: 3000 });
      }
    } catch (err) {
      this.snackBar.open(
        `Failed to fetch roles: ${this.extractError(err)}`,
        'Close',
        { duration: 6000 }
      );
    } finally {
      this.searching = false;
      this.searched = true;
      this.cdr.detectChanges();
    }
  }

  private async findRolesByCriteria(): Promise<void> {
    const attr = this.criteriaFilter.attribute.trim();
    if (!attr) {
      this.snackBar.open('Enter an attribute to search by.', 'Close', { duration: 3000 });
      return;
    }

    this.searching = true;
    this.searched = false;
    this.roleRows = [];
    this.roleCache.clear();
    this.cdr.detectChanges();

    try {
      const allRoles = await this.fetchAllRoles(undefined);
      const filter = {
        attribute: attr,
        operation: this.criteriaFilter.operation,
        value: this.criteriaFilter.value.trim(),
      };
      const matched = allRoles.filter((role) =>
        roleMatchesCriteriaFilter(
          role.membership as MembershipSelector | null | undefined,
          filter
        )
      );

      this.roleRows = matched.map((role) => {
        const criteria = parseCriteria(role.membership?.criteria ?? null);
        return {
          id: role.id ?? '',
          name: role.name ?? '(unnamed)',
          membershipType: role.membership?.type ?? '—',
          nodeCount: countNodes(criteria),
          selected: true,
          role,
        };
      });

      if (this.roleRows.length === 0) {
        this.snackBar.open('No roles matched the criteria filter.', 'Close', { duration: 3000 });
      }
    } catch (err) {
      this.snackBar.open(
        `Failed to fetch roles: ${this.extractError(err)}`,
        'Close',
        { duration: 6000 }
      );
    } finally {
      this.searching = false;
      this.searched = true;
      this.cdr.detectChanges();
    }
  }

  private async findRolesByAccess(): Promise<void> {
    const name = this.accessFilter.name.trim();
    if (!name) {
      this.snackBar.open('Enter a name to search by.', 'Close', { duration: 3000 });
      return;
    }

    this.searching = true;
    this.searched = false;
    this.roleRows = [];
    this.roleCache.clear();
    this.cdr.detectChanges();

    try {
      const allRoles = await this.fetchAllRoles(undefined);
      const nameLower = name.toLowerCase();
      const isAP = this.accessFilter.type === 'accessProfile';

      const matched = allRoles.filter((role) => {
        if (isAP) {
          return (role.accessProfiles ?? []).some(
            (ap) => (ap.name ?? '').toLowerCase().includes(nameLower)
          );
        } else {
          return (role.entitlements ?? []).some(
            (e) => (e.name ?? '').toLowerCase().includes(nameLower)
          );
        }
      });

      this.roleRows = matched.map((role) => {
        const criteria = parseCriteria(role.membership?.criteria ?? null);
        return {
          id: role.id ?? '',
          name: role.name ?? '(unnamed)',
          membershipType: role.membership?.type ?? '—',
          nodeCount: countNodes(criteria),
          selected: true,
          role,
        };
      });

      if (this.roleRows.length === 0) {
        this.snackBar.open(
          `No roles contain a matching ${isAP ? 'access profile' : 'entitlement'}.`,
          'Close',
          { duration: 3000 }
        );
      }
    } catch (err) {
      this.snackBar.open(
        `Failed to fetch roles: ${this.extractError(err)}`,
        'Close',
        { duration: 6000 }
      );
    } finally {
      this.searching = false;
      this.searched = true;
      this.cdr.detectChanges();
    }
  }

  /**
   * Import-from-CSV target mode: read a CSV list of role identifiers, resolve
   * them against the tenant's roles, and populate the selection table. The CSV
   * only scopes *which* roles to edit — the operation is chosen later in the
   * normal flow, so nothing downstream of the Target step changes.
   */
  async pickCsv(): Promise<void> {
    let res: {
      success: boolean;
      canceled?: boolean;
      content?: string;
      filePath?: string;
      error?: string;
    };
    try {
      res = await this.api.browseForCsvFile();
    } catch {
      this.snackBar.open('Failed to open CSV file.', 'Close', { duration: 5000 });
      return;
    }
    if (!res?.success) {
      if (!res?.canceled) {
        this.snackBar.open(res?.error ?? 'Failed to open CSV file.', 'Close', {
          duration: 5000,
        });
      }
      return;
    }

    const { refs, errors } = parseRoleListCsv(res.content ?? '');
    this.csvErrors = errors;
    this.csvUnmatched = [];
    this.csvFileName = this.basename(res.filePath ?? '');

    if (refs.length === 0) {
      this.roleRows = [];
      this.searched = true;
      this.snackBar.open(
        errors.length > 0
          ? `No usable rows in the CSV (${errors.length} error(s)).`
          : 'The CSV contained no role names or ids.',
        'Close',
        { duration: 6000 }
      );
      return;
    }

    this.searching = true;
    this.searched = false;
    this.roleRows = [];
    this.roleCache.clear();
    this.cdr.detectChanges();

    try {
      const allRoles = await this.fetchAllRoles(undefined);
      const { matched, unmatched } = matchRolesToRefs(refs, allRoles);
      this.csvUnmatched = unmatched.map(refLabel);

      this.roleRows = matched.map(({ role }) => {
        const criteria = parseCriteria(role.membership?.criteria ?? null);
        return {
          id: role.id ?? '',
          name: role.name ?? '(unnamed)',
          membershipType: role.membership?.type ?? '—',
          nodeCount: countNodes(criteria),
          selected: true,
          role,
        };
      });

      if (this.roleRows.length === 0) {
        this.snackBar.open(
          'No roles from the CSV matched any role in the tenant.',
          'Close',
          { duration: 6000 }
        );
      } else if (this.csvUnmatched.length > 0) {
        this.snackBar.open(
          `${this.roleRows.length} role(s) matched · ${this.csvUnmatched.length} not found.`,
          'Close',
          { duration: 5000 }
        );
      }
    } catch (err) {
      this.snackBar.open(
        `Failed to fetch roles: ${this.extractError(err)}`,
        'Close',
        { duration: 6000 }
      );
    } finally {
      this.searching = false;
      this.searched = true;
      this.cdr.detectChanges();
    }
  }

  /** Last path segment of a file path, for display. */
  private basename(p: string): string {
    const parts = p.split(/[\\/]/);
    return parts[parts.length - 1] || p;
  }

  /**
   * Page through `listRoles` accumulating all matches. Pages until an empty
   * page is returned, advancing the offset by each page's actual length. This
   * is correct regardless of whether the server honors the requested page size
   * or clamps it (the v2025 roles endpoint caps `limit` at 50), at the cost of
   * one trailing empty request. Prompts for confirmation once the result set
   * grows beyond ~1000.
   */
  private async fetchAllRoles(filters: string | undefined): Promise<RoleV2025[]> {
    const all: RoleV2025[] = [];
    let offset = 0;
    let confirmedLarge = false;

    for (let guard = 0; guard < 2000; guard++) {
      const resp = await this.sdk.listRoles({
        filters,
        limit: PAGE_SIZE,
        offset,
      });
      if (resp?.status !== undefined && resp.status >= 400) {
        throw new Error(`Failed to list roles: HTTP ${resp.status}`);
      }
      const page = Array.isArray(resp?.data) ? resp.data : [];
      if (page.length === 0) {
        break;
      }
      all.push(...page);
      offset += page.length;

      if (all.length > LARGE_RESULT_THRESHOLD && !confirmedLarge) {
        const proceed = await this.confirm(
          'Large result set',
          `Over ${LARGE_RESULT_THRESHOLD} roles match this filter and more remain. ` +
            `Continue loading all of them?`,
          'Continue',
          'Stop here'
        );
        if (!proceed) {
          this.snackBar.open(
            `Stopped loading at ${all.length} roles.`,
            'Close',
            { duration: 5000 }
          );
          break;
        }
        confirmedLarge = true;
      }
    }
    return all;
  }

  // ===========================================================================
  // Panel 2 — Operation
  // ===========================================================================

  onStepChange(event: { selectedIndex: number }): void {
    if (event.selectedIndex === 1) {
      void this.loadSelectedDetails();
    } else if (event.selectedIndex === 2) {
      if (!this.restoreMode) { this.computePreviews(); }
    }
  }

  /** Fetch full detail for the selected roles and build the attribute list. */
  private async loadSelectedDetails(): Promise<void> {
    this.loadingDetails = true;
    this.cdr.detectChanges();
    try {
      for (const row of this.selectedRoles()) {
        if (!this.roleCache.has(row.id)) {
          try {
            const resp = await this.sdk.getRole({ id: row.id });
            if (resp?.data) {
              this.roleCache.set(row.id, resp.data);
            }
          } catch (err) {
            this.snackBar.open(
              `Could not load "${row.name}": ${this.extractError(err)}`,
              'Close',
              { duration: 5000 }
            );
          }
        }
      }
      this.attributeOptions = this.computeAttributeOptions();
    } finally {
      this.loadingDetails = false;
      this.cdr.detectChanges();
    }
  }

  private computeAttributeOptions(): string[] {
    const set = new Set<string>();
    for (const row of this.selectedRoles()) {
      const full = this.roleCache.get(row.id);
      const criteria = parseCriteria(full?.membership?.criteria ?? null);
      collectLeafAttributes(criteria).forEach((a) => set.add(a));
    }
    return [...set].sort();
  }

  /** Called when the user changes the attribute in the Update tab — rebuilds oldValueOptions. */
  onUpdateAttributeChange(): void {
    const attr = this.updateForm.attribute.trim();
    if (!attr) { this.oldValueOptions = []; return; }
    const vals = new Set<string>();
    for (const row of this.selectedRoles()) {
      const full = this.roleCache.get(row.id);
      const criteria = parseCriteria(full?.membership?.criteria ?? null);
      this.collectValuesForAttribute(criteria, attr, vals);
    }
    this.oldValueOptions = [...vals].sort();
    // Clear stale oldValue if it no longer exists in the new set
    if (this.updateForm.oldValue && !vals.has(this.updateForm.oldValue)) {
      this.updateForm.oldValue = '';
    }
  }

  private collectValuesForAttribute(node: CriteriaNode | null, attr: string, out: Set<string>): void {
    if (!node) return;
    if (isLeaf(node) && node.key) {
      const storedNorm = node.key.type === 'IDENTITY'
        ? normalizeIdentityAttr(node.key.property)
        : node.key.property;
      const queryNorm = node.key.type === 'IDENTITY'
        ? normalizeIdentityAttr(attr)
        : attr;
      if (storedNorm === queryNorm) {
        leafValues(node).forEach(v => out.add(v));
      }
    }
    node.children?.forEach(c => this.collectValuesForAttribute(c, attr, out));
  }

  async loadIdentityAttributeSuggestions(): Promise<void> {
    if (this.identityAttributesLoaded) return;
    this.identityAttributesLoaded = true;
    try {
      const resp = await this.sdk.listIdentityAttributes({});
      this.identityAttributeSuggestions = (resp.data ?? []).map(
        (a) => `attribute.${a.name}`
      );
    } catch {
      // suggestions are best-effort; ignore errors
    }
  }

  filterCriteriaAttributes(query: string): string[] {
    const q = (query ?? '').toLowerCase().trim();
    const all = this.identityAttributeSuggestions;
    if (!q) return all;
    return all.filter((a) => a.toLowerCase().includes(q));
  }

  async loadAccessSuggestions(): Promise<void> {
    if (this.accessSuggestionsLoaded) return;
    this.accessSuggestionsLoaded = true;
    try {
      const [apResp, entResp] = await Promise.all([
        this.sdk.listAccessProfiles({ limit: 250 }),
        this.sdk.listEntitlements({ limit: 250 }),
      ]);
      this.accessProfileSuggestions = (apResp.data ?? [])
        .map((ap) => ap.name ?? '')
        .filter(Boolean)
        .sort();
      this.entitlementSuggestions = (entResp.data ?? [])
        .map((e) => e.name ?? '')
        .filter(Boolean)
        .sort();
    } catch {
      // best-effort
    }
  }

  filterAccessSuggestions(query: string): string[] {
    const pool =
      this.accessFilter.type === 'accessProfile'
        ? this.accessProfileSuggestions
        : this.entitlementSuggestions;
    const q = (query ?? '').toLowerCase().trim();
    if (!q) return pool.slice(0, 50);
    return pool.filter((n) => n.toLowerCase().includes(q)).slice(0, 50);
  }

  /** Attribute options filtered by the current input value. */
  filterAttributes(query: string): string[] {
    const q = (query ?? '').toLowerCase().trim();
    if (!q) {
      return this.attributeOptions;
    }
    return this.attributeOptions.filter((a) => a.toLowerCase().includes(q));
  }

  private splitValues(input: string): string[] {
    return (input ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  /** Build the operation parameters for the active tab, or null if invalid. */
  buildParams(): OperationParams | null {
    switch (this.activeOperation) {
      case 'update': {
        const { attribute, oldValue } = this.updateForm;
        const newValues = this.splitValues(this.updateForm.newValues);
        if (!attribute || !oldValue || newValues.length === 0) {
          return null;
        }
        return { type: 'update', params: { attribute, oldValue, newValues } };
      }
      case 'add-values': {
        const { attribute } = this.addValuesForm;
        const addValues = this.splitValues(this.addValuesForm.addValues);
        if (!attribute || addValues.length === 0) {
          return null;
        }
        return { type: 'add-values', params: { attribute, addValues } };
      }
      case 'add-block': {
        const { attribute, operation, join, keyType, sourceId } = this.addBlockForm;
        const values = this.splitValues(this.addBlockForm.values);
        if (!attribute || values.length === 0) {
          return null;
        }
        if (keyType !== 'IDENTITY' && !sourceId.trim()) {
          return null;
        }
        // Canonicalize IDENTITY attributes so bare names (e.g. 'cloudLifecycleState')
        // are written with the required 'attribute.' prefix.
        const canonAttr =
          keyType === 'IDENTITY' ? canonicalizeIdentityAttr(attribute) : attribute;
        return {
          type: 'add-block',
          params: { attribute: canonAttr, operation, values, join, keyType,
                    ...(keyType !== 'IDENTITY' ? { sourceId: sourceId.trim() } : {}) },
        };
      }
      case 'remove': {
        const { attribute, mode, value } = this.removeForm;
        if (!attribute) {
          return null;
        }
        if (mode === 'value' && !value) {
          return null;
        }
        return { type: 'remove', params: { attribute, mode, value } };
      }
      case 'consolidate': {
        const { attribute } = this.consolidateForm;
        if (!attribute) {
          return null;
        }
        return { type: 'consolidate', params: { attribute } };
      }
    }
  }

  // ===========================================================================
  // Panel 3 — Preview
  // ===========================================================================

  computePreviews(): void {
    const params = this.buildParams();
    if (!params) {
      this.previews = [];
      this.snackBar.open(
        'Complete the operation fields before previewing.',
        'Close',
        { duration: 4000 }
      );
      return;
    }

    this.identityCounts.clear();
    this.previews = this.selectedRoles().map((row) => {
      const full = this.roleCache.get(row.id);
      const membership: MembershipSelector = {
        type: full?.membership?.type ?? null,
        criteria: parseCriteria(full?.membership?.criteria ?? null),
        identities: full?.membership?.identities ?? null,
      };
      const result = applyOperation(membership, params);
      // Kick off identity count for actionable previews, non-blocking
      if (result.status === 'ready') {
        this.identityCounts.set(row.id, { before: null, after: null, loading: true });
        void this.fetchIdentityCounts(row.id, membership.criteria ?? null, result.tree);
      }
      return { row, before: membership.criteria ?? null, result };
    });
  }

  private async fetchIdentityCounts(
    roleId: string,
    beforeTree: CriteriaNode | null,
    afterTree: CriteriaNode | null
  ): Promise<void> {
    const entry = this.identityCounts.get(roleId);
    if (!entry) return;
    const [before, after] = await Promise.all([
      this.countIdentitiesForCriteria(beforeTree),
      this.countIdentitiesForCriteria(afterTree),
    ]);
    this.identityCounts.set(roleId, { before, after, loading: false });
    this.cdr.detectChanges();
  }

  private async countIdentitiesForCriteria(tree: CriteriaNode | null): Promise<number | null> {
    if (!tree) return 0;
    try {
      const query = this.criteriaTreeToSearchQuery(tree);
      if (!query) return null;
      const resp = await this.sdk.searchCount({
        searchV2025: { query: { query }, indices: ['identities'] },
      } as never);
      return Number(resp?.headers?.['x-total-count'] ?? null);
    } catch {
      return null;
    }
  }

  /**
   * Converts a CriteriaNode tree into an Elasticsearch query string suitable
   * for the ISC Search API. Leaf nodes are mapped by {@link leafSearchTerm};
   * composite nodes join their non-empty children with AND/OR and parenthesize
   * when there is more than one.
   */
  private criteriaTreeToSearchQuery(node: CriteriaNode | null): string {
    if (!node) return '';
    if (isLeaf(node)) {
      return this.leafSearchTerm(node);
    }
    const children = (node.children ?? [])
      .map(c => this.criteriaTreeToSearchQuery(c))
      .filter(s => s.length > 0);
    if (children.length === 0) return '';
    const op = node.operation === 'AND' ? ' AND ' : ' OR ';
    return children.length > 1 ? `(${children.join(op)})` : children[0];
  }

  /**
   * Maps a leaf criterion to an ISC Search field + operation-aware term.
   *
   * IDENTITY-type attributes live under `attributes.<property>` in the search
   * index (only a few core fields are top-level), so that prefix is what
   * actually matches — a bare `property:"value"` silently returns zero for
   * custom attributes like `location`/`title`/`workerType`. Operation
   * semantics are encoded with quoted wildcards, which ISC (Elasticsearch
   * query_string with analyze_wildcard) evaluates correctly even for
   * multi-word values and values containing special characters such as `@`:
   *   EQUALS       field:"v"        NOT_EQUALS   NOT field:"v"
   *   CONTAINS     field:"*v*"      STARTS_WITH  field:"v*"
   *   ENDS_WITH    field:"*v"
   */
  private leafSearchTerm(node: CriteriaNode): string {
    const prop = node.key?.property ?? '';
    const vals = leafValues(node);
    if (!prop || vals.length === 0) return '';
    // IDENTITY criteria may store the property with or without the optional
    // `attribute.` prefix; the search index keys them under `attributes.<name>`,
    // so normalize the prefix off before prepending the search path.
    const field =
      (node.key?.type ?? 'IDENTITY') === 'IDENTITY'
        ? `attributes.${normalizeIdentityAttr(prop)}`
        : prop;
    const esc = (v: string) => v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const terms = vals.map(v => {
      const e = esc(v);
      switch (node.operation) {
        case 'NOT_EQUALS': return `NOT ${field}:"${e}"`;
        case 'CONTAINS': return `${field}:"*${e}*"`;
        case 'STARTS_WITH': return `${field}:"${e}*"`;
        case 'ENDS_WITH': return `${field}:"*${e}"`;
        default: return `${field}:"${e}"`; // EQUALS and any unknown op
      }
    });
    // NOT_EQUALS over multiple values is a conjunction (exclude all of them);
    // every other operation ORs its alternatives.
    const join = node.operation === 'NOT_EQUALS' ? ' AND ' : ' OR ';
    return terms.length > 1 ? `(${terms.join(join)})` : terms[0];
  }

  identityCount(roleId: string): { before: number | null; after: number | null; loading: boolean } | null {
    return this.identityCounts.get(roleId) ?? null;
  }

  actionablePreviews(): RolePreview[] {
    return this.previews.filter((p) => p.result.status === 'ready');
  }

  skippedPreviews(): RolePreview[] {
    return this.previews.filter((p) => p.result.status === 'skipped');
  }

  togglePatchJson(id: string): void {
    if (this.patchJsonExpanded.has(id)) {
      this.patchJsonExpanded.delete(id);
    } else {
      this.patchJsonExpanded.add(id);
    }
  }

  isPatchJsonExpanded(id: string): boolean {
    return this.patchJsonExpanded.has(id);
  }

  leafChangeCount(preview: RolePreview): number {
    return countLeafNodes(preview.result.tree) - countLeafNodes(preview.before);
  }

  get canExecute(): boolean {
    return (
      !this.dryRun &&
      !this.executing &&
      this.actionablePreviews().length > 0
    );
  }

  // ===========================================================================
  // Panel 4 — Execute / Results
  // ===========================================================================

  async execute(): Promise<void> {
    if (this.dryRun) {
      return;
    }
    const actionable = this.actionablePreviews();
    if (actionable.length === 0) {
      this.snackBar.open('Nothing to execute.', 'Close', { duration: 3000 });
      return;
    }

    // Snapshot BEFORE any write — cancelling the save aborts the whole run.
    if (this.snapshot) {
      const saved = await this.saveSnapshot(actionable);
      if (!saved) {
        this.snackBar.open(
          'Run aborted — pre-run snapshot was not saved.',
          'Close',
          { duration: 5000 }
        );
        return;
      }
    }

    const confirmed = await this.confirm(
      'Apply changes',
      `Patch membership criteria on ${actionable.length} role(s)? This writes to the tenant.`,
      'Apply',
      'Cancel'
    );
    if (!confirmed) {
      return;
    }

    this.executing = true;
    this.results = [];
    this.cdr.detectChanges();

    for (const preview of this.skippedPreviews()) {
      this.results.push({
        role: preview.row.name,
        id: preview.row.id,
        status: 'Skipped',
        detail: preview.result.reason,
      });
    }

    for (const preview of actionable) {
      const nodesBefore = countNodes(preview.before);
      try {
        await this.sdk.patchRole({
          id: preview.row.id,
          jsonPatchOperationV2025: preview.result.patch as never,
        });
        const result: RunResult = {
          role: preview.row.name,
          id: preview.row.id,
          status: 'Updated',
          nodesBefore,
          verifying: true,
        };
        this.results.push(result);
        this.cdr.detectChanges();

        // Fire verification async — don't block the loop
        Promise.resolve(this.sdk.getRole({ id: preview.row.id })).then((resp) => {
          if (resp?.data) {
            const afterTree = parseCriteria(resp.data.membership?.criteria ?? null);
            result.nodesAfter = countNodes(afterTree);
          }
          result.verifying = false;
          this.cdr.detectChanges();
        }).catch(() => {
          result.verifying = false;
          this.cdr.detectChanges();
        });
      } catch (err) {
        this.results.push({
          role: preview.row.name,
          id: preview.row.id,
          status: 'Error',
          detail: this.extractError(err),
        });
      }
    }

    this.executing = false;
    this.hasExecuted = true;
    this.cdr.detectChanges();
    this.stepper?.next?.();
  }

  /** Save a pre-run snapshot of the actionable roles' membership. */
  private async saveSnapshot(actionable: RolePreview[]): Promise<boolean> {
    const snapshot = actionable.map((p) => {
      const full = this.roleCache.get(p.row.id);
      return {
        id: p.row.id,
        name: p.row.name,
        membership: full?.membership ?? p.row.role.membership ?? null,
      };
    });
    this.snapshotContent = JSON.stringify(snapshot, null, 2);
    this.snapshotFilename = `role-criteria-snapshot-${this.timestamp()}.json`;

    try {
      const res = await this.api.saveFile({
        defaultPath: this.snapshotFilename,
        content: this.snapshotContent,
      });
      if (!res?.success) {
        if (res?.canceled) {
          return false;
        }
        this.snackBar.open(
          `Snapshot save failed: ${res?.error ?? 'unknown error'}`,
          'Close',
          { duration: 5000 }
        );
        return false;
      }
      this.snackBar.open(
        res.filePath ? `Snapshot saved: ${res.filePath}` : 'Snapshot saved.',
        'Close',
        { duration: 4000 }
      );
      return true;
    } catch {
      this.snackBar.open('Snapshot save failed.', 'Close', { duration: 5000 });
      return false;
    }
  }

  get hasSnapshot(): boolean {
    return this.snapshotContent.length > 0;
  }

  /** Re-download the last snapshot (Results-panel fallback). */
  async redownloadSnapshot(): Promise<void> {
    if (!this.snapshotContent) {
      return;
    }
    try {
      await this.api.saveFile({
        defaultPath: this.snapshotFilename,
        content: this.snapshotContent,
      });
    } catch {
      this.snackBar.open('Snapshot download failed.', 'Close', {
        duration: 4000,
      });
    }
  }

  skipReasonEntries(): { reason: string; count: number }[] {
    if (!this.simulationResults) return [];
    return Object.entries(this.simulationResults.skipReasons).map(([reason, count]) => ({ reason, count }));
  }

  async simulate(): Promise<void> {
    const params = this.buildParams();
    if (!params) {
      this.snackBar.open('Fill in operation parameters first.', 'Close', { duration: 3000 });
      return;
    }
    const selected = this.selectedRoles();
    if (selected.length > LARGE_RESULT_THRESHOLD) {
      const proceed = await this.confirm(
        'Large simulation',
        `Simulating against ${selected.length} roles requires fetching full details for each. Continue?`,
        'Continue',
        'Cancel'
      );
      if (!proceed) return;
    }
    this.simulating = true;
    this.simulationResults = null;
    this.cdr.detectChanges();
    try {
      for (const row of selected) {
        if (!this.roleCache.has(row.id)) {
          try {
            const resp = await this.sdk.getRole({ id: row.id });
            if (resp?.data) this.roleCache.set(row.id, resp.data);
          } catch { /* skip unfetchable roles */ }
        }
      }
      let wouldChange = 0;
      let wouldSkip = 0;
      const skipReasons: Record<string, number> = {};
      for (const row of selected) {
        const full = this.roleCache.get(row.id);
        const membership: MembershipSelector = {
          type: full?.membership?.type ?? null,
          criteria: parseCriteria(full?.membership?.criteria ?? null),
          identities: full?.membership?.identities ?? null,
        };
        const result = applyOperation(membership, params);
        if (result.status === 'ready') {
          wouldChange++;
        } else {
          wouldSkip++;
          const reason = result.reason ?? 'skipped';
          skipReasons[reason] = (skipReasons[reason] ?? 0) + 1;
        }
      }
      this.simulationResults = { total: selected.length, wouldChange, wouldSkip, skipReasons };
    } finally {
      this.simulating = false;
      this.cdr.detectChanges();
    }
  }

  async loadAndRestoreSnapshot(): Promise<void> {
    const res = await this.api.browseForJsonFile();
    if (!res?.success) {
      if (!res?.canceled) {
        this.snackBar.open(res?.error ?? 'Failed to open file.', 'Close', { duration: 5000 });
      }
      return;
    }
    let entries: SnapshotEntry[];
    try {
      entries = JSON.parse(res.content ?? '');
      if (!Array.isArray(entries) || !entries.every(e => e.id && 'membership' in e)) {
        throw new Error('Invalid snapshot format');
      }
    } catch {
      this.snackBar.open('Invalid snapshot file — expected array of {id, name, membership}.', 'Close', { duration: 6000 });
      return;
    }
    this.snapshotEntries = entries;
    this.previews = [];
    this.cdr.detectChanges();

    // Fetch current state for each snapshot entry
    const rows: RoleRow[] = [];
    for (const entry of entries) {
      let current: import('sailpoint-api-client').RoleV2025 | undefined = this.roleCache.get(entry.id);
      if (!current) {
        try {
          const resp = await this.sdk.getRole({ id: entry.id });
          if (resp?.data) {
            current = resp.data;
            this.roleCache.set(entry.id, current);
          }
        } catch { /* handled below */ }
      }
      const membership: MembershipSelector = current
        ? { type: current.membership?.type ?? null, criteria: parseCriteria(current.membership?.criteria ?? null), identities: current.membership?.identities ?? null }
        : { type: null, criteria: null, identities: null };
      const row: RoleRow = {
        id: entry.id,
        name: entry.name ?? entry.id,
        membershipType: current?.membership?.type ?? '—',
        nodeCount: countNodes(parseCriteria(current?.membership?.criteria ?? null)),
        selected: true,
        role: current ?? ({} as never),
      };
      rows.push(row);
      const result = current
        ? restoreFromSnapshot(entry, membership)
        : { status: 'skipped' as const, reason: 'role not found in tenant', tree: null, patch: [], changed: false };
      this.previews.push({ row, before: membership.criteria ?? null, result });
    }
    this.restoreMode = true;
    if (this.stepper) {
      this.stepper.selectedIndex = 2;
    }
    this.cdr.detectChanges();
  }

  runAgain(): void {
    this.previews = [];
    this.results = [];
    this.hasExecuted = false;
    this.dryRun = true;
    this.simulationResults = null;
    this.identityCounts.clear();
    this.restoreMode = false;
    this.snapshotEntries = [];
    if (this.stepper) {
      this.stepper.selectedIndex = 1;
    }
  }

  startOver(): void {
    // Target state
    this.mode = 'single';
    this.searchText = '';
    this.criteriaFilter = { attribute: '', operation: '', value: '' };
    this.accessFilter = { type: 'accessProfile', name: '' };
    this.csvFileName = '';
    this.csvErrors = [];
    this.csvUnmatched = [];
    this.roleRows = [];
    this.searching = false;
    this.searched = false;
    this.identityAttributeSuggestions = [];
    this.identityAttributesLoaded = false;
    this.accessProfileSuggestions = [];
    this.entitlementSuggestions = [];
    this.accessSuggestionsLoaded = false;
    this.roleCache.clear();

    // Operation state
    this.selectedTabIndex = 0;
    this.attributeOptions = [];
    this.oldValueOptions = [];
    this.loadingDetails = false;
    this.updateForm = { attribute: '', oldValue: '', newValues: '' };
    this.addValuesForm = { attribute: '', addValues: '' };
    this.addBlockForm = {
      attribute: '',
      operation: 'EQUALS' as LeafOperation,
      values: '',
      join: 'AND',
      keyType: 'IDENTITY',
      sourceId: '',
    };
    this.removeForm = { attribute: '', mode: 'value', value: '' };
    this.consolidateForm = { attribute: '' };

    // Preview state
    this.previews = [];
    this.patchJsonExpanded.clear();
    this.snapshot = true;
    this.simulationResults = null;
    this.simulating = false;
    this.identityCounts.clear();

    // Results state
    this.results = [];
    this.hasExecuted = false;
    this.dryRun = true;
    this.restoreMode = false;
    this.snapshotEntries = [];

    if (this.stepper) {
      this.stepper.selectedIndex = 0;
    }
  }

  // ===========================================================================
  // Helpers
  // ===========================================================================

  private timestamp(): string {
    const d = new Date();
    const pad = (n: number): string => String(n).padStart(2, '0');
    return (
      `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}` +
      `-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
    );
  }

  private confirm(
    title: string,
    message: string,
    confirmText: string,
    cancelText: string
  ): Promise<boolean> {
    const ref = this.dialog.open(GenericDialogComponent, {
      data: {
        title,
        message,
        isConfirmation: true,
        confirmText,
        cancelText,
      },
      disableClose: true,
    });
    return ref
      .afterClosed()
      .toPromise()
      .then((value) => value === true);
  }

  /** Extract a readable message from an ISC / SDK error response. */
  private extractError(err: unknown): string {
    const e = err as {
      response?: { data?: unknown };
      data?: unknown;
      messages?: { text?: string }[];
      detailCode?: string;
      trackingId?: string;
      message?: string;
    };
    const data = (e?.response?.data ?? e?.data ?? e) as {
      messages?: { text?: string }[];
      detailCode?: string;
      trackingId?: string;
      message?: string;
    };
    const parts: string[] = [];
    const primary =
      data?.messages?.[0]?.text ?? data?.message ?? e?.message ?? 'Unknown error';
    parts.push(primary);
    if (data?.detailCode) {
      parts.push(`detailCode: ${data.detailCode}`);
    }
    if (data?.trackingId) {
      parts.push(`trackingId: ${data.trackingId}`);
    }
    return parts.join(' | ');
  }
}
