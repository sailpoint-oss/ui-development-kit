import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';


// SailPoint types
import {
  SourceV2025,
  SourceScheduleV2025,
  SourceScheduleV2025TypeV2025,
} from 'sailpoint-api-client';

import { SailPointSDKService } from '../sailpoint-sdk.service';

// Local components
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { SourceActionsDialogComponent, SourceActionsDialogData } from './dialogs/source-actions-dialog.component';
import { SearchBarComponent } from './utils/search-bar/search-bar.component';
import { ColumnCustomizerComponent } from './utils/column-customizer/column-customizer.component';


type SourceRow = SourceV2025 & Record<string, unknown>;

type SourceWithSchedules = SourceRow & {
  schedules?: SourceScheduleV2025[];
  scheduleByType?: Partial<Record<SourceScheduleV2025TypeV2025, SourceScheduleV2025>>;
  averageAggregationTime?: number; // in milliseconds (legacy - for backward compatibility)
  averageAccountAggregationTime?: number; // in milliseconds
  averageEntitlementAggregationTime?: number; // in milliseconds
};

interface TimelineEvent {
  id: string;
  sourceId: string;
  start: Date;
  end: Date;
  status: 'completed' | 'in-progress' | 'scheduled' | 'failed';
  durationLabel?: string;
  taskId?: string;
  aggregationType: 'account' | 'entitlement';
}

interface AggregationOverlap {
  startTime: Date;
  endTime: Date;
  overlappingEvents: Array<{
    sourceId: string;
    sourceName: string;
    aggregationType: 'account' | 'entitlement';
    eventId: string;
    averageDuration: number; // in milliseconds
  }>;
  overlapDuration: number; // in milliseconds
}


@Component({
  selector: 'app-cronicle',
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
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    SearchBarComponent,
    ColumnCustomizerComponent
  ],
  templateUrl: './cronicle.component.html',
  styleUrls: ['./cronicle.component.scss'],
})
export class CronicleComponent implements OnInit {

  title = 'Cronicle';

  // Data
  sources: SourceRow[] = [];
  filteredSources: SourceRow[] = [];

  // Columns
  columnOrder: string[] = [];
  displayedColumns: string[] = [];
  allColumns: string[] = [];

  // Paging & loading
  loading = false;
  hasDataLoaded = false;
  pageSize = 5;
  pageIndex = 0;
  totalCount = 0;

  // Multi-select control (holds selected source IDs)
  selectedSourceIds = new FormControl<string[]>([], { nonNullable: true });

  // Options for the dropdown (id + name is enough)
  sourceOptions: Array<{ id: string; name: string; description?: string }> = [];

  // If you're using server-side filters elsewhere, keep one here
  currentFilters = '';

  // Calendar timeline properties
  calendarLoading = false;
  currentDayStart = new Date();
  timelineTicks: Array<{ label: string; positionPct: number }> = [];
  sourceEvents: Map<string, TimelineEvent[]> = new Map();
  
  // Overlap detection properties
  aggregationOverlaps: AggregationOverlap[] = [];
  showOverlaps = true;
  
  // Debug configuration - enable/disable debug logging for different components
  // Set individual flags to true when debugging specific components, false for production
  private debugConfig = {
    overlapDetection: false,    // Overlap detection algorithm and calculations
    eventGeneration: true,      // Event generation from cron expressions
    timelineDisplay: false,     // Timeline rendering and event positioning
    sourceLoading: false,       // Source data loading and processing
    averageCalculation: false,  // Average aggregation time calculations
    scheduleParsing: true,      // CRON expression parsing and validation
    general: true              // General component operations
  };

  // Debug logging method for terminal output
  debugLog(message: string, component: keyof typeof this.debugConfig = 'general'): void {
    if (!this.debugConfig[component]) {
      return; // Skip debug logging when this component's debug mode is disabled
    }
    
    const timestampedMessage = `[CRONICLE DEBUG - ${component.toUpperCase()}] ${new Date().toLocaleTimeString()}: ${message}`;
    console.log(timestampedMessage);

    // Send to main process for terminal logging (if in Electron environment)
    if (typeof window !== 'undefined' && (window as any).electronAPI?.logToMain) {
      (window as any).electronAPI.logToMain(timestampedMessage);
    }
  }

  // Sorting
  sorters: string[] = [];
  // Update these to match your tenant’s source fields and API sort keys
  readonly sortableFields = ['name', 'type', 'connector', 'averageAccountAggregationTime', 'averageEntitlementAggregationTime'];
  readonly sortFieldMap: Record<string, string> = {
    // UI column -> API field; e.g. type: 'connectorType'
  };

  // Optional display names for headers
  readonly columnDisplayNames: Record<string, string> = {
    name: 'Name',
    type: 'Type',
    connector: 'Connector',
    authoritative: 'Authoritative',
    viewAction: 'Action',
    averageAccountAggregationTime: 'Avg Account Time',
    averageEntitlementAggregationTime: 'Avg Entitlement Time',
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private sdk: SailPointSDKService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    // Keep your existing default sorter by name if you added it previously
    if (!this.sorters?.length) this.sorters = ['name'];

    // Load dropdown options (paged)
    void this.loadSourceOptions();

    // Initial table load (calendar will be initialized after sources are loaded)
    void this.loadSources();

    // Initialize calendar timeline structure only
    this.setCurrentDayStart();
    this.generateTimelineTicks();

    // Expose component to window for debugging
    (window as any).cronicleComponent = this;

  }

  async loadSources(): Promise<void> {
    this.loading = true;
    this.hasDataLoaded = false;

    try {
      const request = {
        offset: this.pageIndex * this.pageSize,
        limit: this.pageSize,
        count: true,
        sorters: this.sorters.join(',') || 'name',
        filters: this.currentFilters || undefined,   // <-- make sure this is here
      };
      const response = await this.sdk.listSources(request);

      // Data array of SourceV2025
      this.sources = (response.data ?? []) as SourceRow[];

      // Robust X-Total-Count parsing (Axios headers are typically lowercased)
      let countHeader: string | number | undefined;
      const headers: any = response.headers ?? {};
      countHeader =
        headers['x-total-count'] ??
        headers['X-Total-Count'] ??
        (typeof headers.get === 'function' ? headers.get('X-Total-Count') : undefined);

      const parsedCount =
        typeof countHeader === 'string'
          ? Number(countHeader)
          : typeof countHeader === 'number'
            ? countHeader
            : undefined;

      this.totalCount = Number.isFinite(parsedCount as number)
        ? (parsedCount as number)
        : this.sources.length; // fallback

      // First-load column bootstrap
      if (this.allColumns.length === 0 && this.sources.length > 0) {
        this.allColumns = Object.keys(this.sources[0]);
        this.columnOrder = [...this.allColumns];

        // sensible defaults for sources
        this.displayedColumns = ['name', 'type', 'connector', 'averageAccountAggregationTime', 'averageEntitlementAggregationTime'];
        if (!this.displayedColumns.includes('viewAction')) {
          this.displayedColumns.push('viewAction');
        }
        if (!this.columnOrder.includes('viewAction')) {
          this.columnOrder.push('viewAction');
        }
      }

      this.filteredSources = [...this.sources];
      this.hasDataLoaded = true;
      this.cdr.detectChanges();

      await this.enrichVisibleRowsWithSchedules(4);

      // Reload calendar data when sources change (always reload after sources are loaded)
      void this.loadCalendarData();
    } catch (error) {
      this.openMessageDialog('Error loading sources: ' + String(error), 'Error');
    } finally {
      this.loading = false;
    }
  }

  // Inside CronicleComponent
  async onRemoteSearch(query: string): Promise<void> {
    if (!query || query.length < 3) return;

    this.loading = true;
    try {
      // Escape quotes for the filter expression
      // Escape backslashes first, then double quotes, to prevent malformed escaping
      const escaped = query.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

      // Build a Standard Collection Parameters filter string for Sources.
      // Supported fields include: name (co, eq, in, sw), type (eq, in),
      // connectorName (eq), status (eq, in), authoritative (eq), healthy (eq), etc.
      // (See "Filters supported for Sources" in docs.)
      // Example: name contains OR type equals OR connectorName contains
      const filters = [
        `name co "${escaped}"`,
        `type eq "${escaped}"`,
        `connectorName co "${escaped}"`
      ].join(' OR ');

      const request = {
        limit: this.pageSize,
        offset: 0,        // reset to first page on new search
        count: true,      // ask API to return X-Total-Count header
        sorters: 'name',
        filters
      };

      const response = await this.sdk.listSources(request);
      this.filteredSources = (response.data ?? []) as SourceRow[];

      // Parse X-Total-Count defensively (Axios lowercases headers)
      const headers: any = response.headers ?? {};
      const rawCount =
        headers['x-total-count'] ??
        headers['X-Total-Count'] ??
        (typeof headers.get === 'function' ? headers.get('X-Total-Count') : undefined);

      const total = typeof rawCount === 'string' ? Number(rawCount) :
        typeof rawCount === 'number' ? rawCount : undefined;

      this.totalCount = Number.isFinite(total as number) ? (total as number) : this.filteredSources.length;
      this.pageIndex = 0;
    } catch (err) {
      this.openMessageDialog(`Search failed: ${String(err)}`, 'Search Error');
    } finally {
      this.loading = false;
    }
  }


  async enrichVisibleRowsWithSchedules(concurrency = 4): Promise<void> {
    // Only work with the rows on the current page
    const pageRows = this.filteredSources;
    const ids = pageRows.map(r => r.id).filter(Boolean) as string[];

    // Simple chunking for concurrency control
    const chunk = <T>(arr: T[], size: number) =>
      arr.reduce<T[][]>((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

    for (const group of chunk(ids, concurrency)) {
      const batch = group.map(sourceId =>
        Promise.all([
          this.sdk.getSourceSchedules({ sourceId }) // <-- requires sourceId
            .then(res => ({ sourceId, schedules: res.data ?? [] }))
            .catch(err => ({ sourceId, error: String(err), schedules: [] })),
          this.getAverageAccountAggregationTime(sourceId)
            .then(avgTime => ({ sourceId, averageAccountAggregationTime: avgTime }))
            .catch(err => ({ sourceId, error: String(err), averageAccountAggregationTime: null })),
          this.getAverageEntitlementAggregationTime(sourceId)
            .then(avgTime => ({ sourceId, averageEntitlementAggregationTime: avgTime }))
            .catch(err => ({ sourceId, error: String(err), averageEntitlementAggregationTime: null }))
        ]).then(([scheduleResult, accountTimeResult, entitlementTimeResult]) => ({
          sourceId,
          schedules: scheduleResult.schedules,
          averageAccountAggregationTime: accountTimeResult.averageAccountAggregationTime,
          averageEntitlementAggregationTime: entitlementTimeResult.averageEntitlementAggregationTime,
          // For backward compatibility, use account aggregation time as the default
          averageAggregationTime: accountTimeResult.averageAccountAggregationTime
        }))
      );

      const results = await Promise.all(batch);

      // Merge results back into the visible rows
      const byId = new Map(results.map(r => [r.sourceId, r]));
      this.filteredSources = this.filteredSources.map(row => {
        const hit = byId.get(row.id as string);
        if (!hit) return row;

        const scheduleByType = Object.fromEntries(
          (hit.schedules ?? []).map(s => [s.type, s] as [string, any])
        ) as Record<string, any>;

          return {
            ...row,
          schedules: hit.schedules,
          scheduleByType,
          averageAggregationTime: hit.averageAggregationTime,
          averageAccountAggregationTime: hit.averageAccountAggregationTime,
          averageEntitlementAggregationTime: hit.averageEntitlementAggregationTime
        } as SourceWithSchedules;
      });

      this.cdr.detectChanges();
    }
  }



  // Paginator
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    void this.loadSources();
  }

  // Sorting
  toggleSort(displayColumn: string): void {
    if (!this.sortableFields.includes(displayColumn)) return;

    const apiField = this.sortFieldMap[displayColumn] ?? displayColumn;
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
    void this.loadSources();
  }

  isSorted(column: string): boolean {
    const apiField = this.sortFieldMap[column] ?? column;
    return this.sorters.some((s) => s === apiField || s === `-${apiField}`);
  }

  getSortSymbol(displayColumn: string): string | null {
    const apiField = this.sortFieldMap[displayColumn] ?? displayColumn;
    const match = this.sorters.find((s) => s === apiField || s === `-${apiField}`);
    if (!match) return null;
    return match.startsWith('-') ? '▼' : '▲';
  }

  clearSort(): void {
    this.sorters = [];
    void this.loadSources();
  }

  // View a single source
  async onView(source: SourceV2025): Promise<void> {
    try {
      if (!source.id) {
        this.openMessageDialog('Source ID is missing.', 'Error');
        return;
      }
      // Ensure your SDK wrapper has this; if not, add it similarly to listSources
      const response = await this.sdk.getSource({ id: source.id });
      const details = JSON.stringify(response.data, null, 2);
      this.openMessageDialog(details, `Source Details: ${source.name ?? source.id}`);
    } catch (error) {
      this.openMessageDialog(`Failed to load source details: ${String(error)}`, 'Error');
    }
  }

  async loadSourceOptions(): Promise<void> {
    const pageSize = 250;    // API max page size
    let offset = 0;
    let total = Number.POSITIVE_INFINITY;

    this.sourceOptions = [];

    while (offset < total) {
      const resp = await this.sdk.listSources({
        limit: pageSize,
        offset,
        count: true,
        sorters: 'name'
      });

      const page = resp.data ?? [];
      // Map to lightweight option items
      this.sourceOptions.push(
        ...page
          .filter(s => !!s.id) // safety
          .map(s => ({ id: s.id as string, name: s.name ?? '–', description: s.description }))
      );

      // Parse X-Total-Count (Axios lower-cases headers in most setups)
      const headers: any = resp.headers ?? {};
      const rawCount = headers['x-total-count'] ?? headers['X-Total-Count'];
      total = typeof rawCount === 'string' ? Number(rawCount)
        : typeof rawCount === 'number' ? rawCount
          : Math.max(this.sourceOptions.length, offset + page.length);

      offset += page.length;

      if (!page.length) break; // defensive
    }
  }

  async onFilterChange(): Promise<void> {
    const ids = this.selectedSourceIds.value ?? [];
    // Build filters for listSources
    // Sources supports `id in`, `name in`, etc. Using IDs avoids name collisions.
    if (ids.length) {
      const quoted = ids
        .map(id => `"${id.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`)
        .join(',');
      this.currentFilters = `id in (${quoted})`;
    } else {
      this.currentFilters = ''; // clear filter
    }

    this.pageIndex = 0;
    await this.loadSources(); // will pass this.currentFilters -> server
  }

  // // Optional: view schedules for a source
  // async onViewSchedules(source: SourceV2025): Promise<void> {
  //   try {
  //     if (!source.id) {
  //       this.openMessageDialog('Source ID is missing.', 'Error');
  //       return;
  //     }
  //     // Ensure your SDK wrapper provides listSourceSchedules
  //     const { data: schedules } = await this.sdk.listSourceSchedules({ id: source.id });
  //     const formatted = JSON.stringify(schedules as SourceScheduleV2025[], null, 2);
  //     this.openMessageDialog(formatted, `Schedules: ${source.name ?? source.id}`);
  //   } catch (error) {
  //     this.openMessageDialog(`Failed to load schedules: ${String(error)}`, 'Error');
  //   }
  // }

  // Helpers
  openMessageDialog(message: string, title: string): void {
    this.dialog.open(GenericDialogComponent, {
      minWidth: '800px',
      data: { title, message },
    });
  }

  trackByFn(index: number, item: string): string {
    return item;
  }

  formatValue(column: string, value: any): string {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return (value as string) ?? '–';
  }

  getHeaderLabel(column: string): string {
    return this.columnDisplayNames[column] ?? column;
  }


  getScheduleCron(row: any, ...types: string[]): string | null {
    // Prefer the map if present
    const byType = (row?.scheduleByType ?? {}) as Record<string, any>;
    for (const t of types) {
      const sched = byType?.[t];
      if (sched?.cronExpression) return sched.cronExpression as string;
    }

    // Fallback to the schedules array
    const list = (row?.schedules ?? []) as Array<any>;
    for (const t of types) {
      const found = list.find((s) => s?.type === t);
      if (found?.cronExpression) return found.cronExpression as string;
    }

    return null;
  }

  /**
   * Fetches the most recent 10 account aggregations for a source and calculates average time
   * @deprecated Use getAverageAccountAggregationTime or getAverageEntitlementAggregationTime instead
   */
  async getAverageAggregationTime(sourceId: string): Promise<number | null> {
    return this.getAverageAccountAggregationTime(sourceId);
  }

  /**
   * Fetches the most recent 10 account aggregations for a source and calculates average time
   */
  async getAverageAccountAggregationTime(sourceId: string): Promise<number | null> {
    try {
      const filters = `sourceId eq "${sourceId}" and type in ("CLOUD_ACCOUNT_AGGREGATION")`;
      const request = {
        limit: 10,
        offset: 0,
        count: true,
        filters,
        sorters: '-created'
      };

      const response = await this.sdk.getTaskStatusList(request);
      const tasks = response.data ?? [];

      if (tasks.length === 0) {
        return null;
      }

      // Calculate average time from completed tasks
      const completedTasks = tasks.filter(task =>
        task.completionStatus === 'SUCCESS' &&
        task.launched &&
        task.completed
      );

      if (completedTasks.length === 0) {
        return null;
      }

      const totalTime = completedTasks.reduce((sum, task) => {
        const launched = new Date(task.launched!);
        const completed = new Date(task.completed!);
        return sum + (completed.getTime() - launched.getTime());
      }, 0);

      return totalTime / completedTasks.length;
    } catch (error) {
      console.error(`Error fetching account aggregation time for source ${sourceId}:`, error);
      return null;
    }
  }

  /**
   * Fetches the most recent 10 entitlement aggregations for a source and calculates average time
   */
  async getAverageEntitlementAggregationTime(sourceId: string): Promise<number | null> {
    try {
      const filters = `sourceId eq "${sourceId}" and type in ("CLOUD_GROUP_AGGREGATION")`;
      const request = {
        limit: 10,
        offset: 0,
        count: true,
        filters,
        sorters: '-created'
      };

      const response = await this.sdk.getTaskStatusList(request);
      const tasks = response.data ?? [];

      if (tasks.length === 0) {
        return null;
      }

      // Calculate average time from completed tasks
      const completedTasks = tasks.filter(task =>
        task.completionStatus === 'SUCCESS' &&
        task.launched &&
        task.completed
      );

      if (completedTasks.length === 0) {
        return null;
      }

      const totalTime = completedTasks.reduce((sum, task) => {
        const launched = new Date(task.launched!);
        const completed = new Date(task.completed!);
        return sum + (completed.getTime() - launched.getTime());
      }, 0);

      return totalTime / completedTasks.length;
    } catch (error) {
      console.error(`Error fetching entitlement aggregation time for source ${sourceId}:`, error);
      return null;
    }
  }

  /**
   * Formats duration in milliseconds to a human-readable string
   */
  formatDuration(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  // In your CronicleComponent class
  clearFilter(evt?: MouseEvent): void {
    // Prevent the click from opening the select panel
    evt?.stopPropagation();
    this.selectedSourceIds.setValue([]);
    this.currentFilters = '';
    this.pageIndex = 0;
    void this.loadSources();
  }

  // ===== Calendar Timeline Methods =====

  initializeCalendar(): void {
    this.setCurrentDayStart();
    this.generateTimelineTicks();
    void this.loadCalendarData();
  }

  setCurrentDayStart(): void {
    const now = new Date();
    this.currentDayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  generateTimelineTicks(): void {
    this.timelineTicks = [];
    for (let hour = 0; hour < 24; hour += 2) {
      this.timelineTicks.push({
        label: `${hour.toString().padStart(2, '0')}:00`,
        positionPct: (hour / 24) * 100
      });
    }
  }

  async loadCalendarData(): Promise<void> {
    this.calendarLoading = true;

    // Completely clear the events map
    this.sourceEvents.clear();

    // Force change detection to clear any rendered events
    this.cdr.detectChanges();

    try {
      const dayStart = new Date(this.currentDayStart);
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);

      // Get only sources with schedules
      const sourcesWithSchedules = this.getSourcesWithSchedules();
      this.debugLog(`Loading calendar for ${sourcesWithSchedules.length} sources with schedules`);
      this.debugLog(`Total filtered sources: ${this.filteredSources.length}`);
      console.log('Loading calendar for sources:', sourcesWithSchedules.map(s => ({ id: s.id, name: s.name })));
      console.log('Total filtered sources:', this.filteredSources.length);
      console.log('Sources with schedules:', sourcesWithSchedules.length);

      // Load historical data for the selected day
      await this.loadHistoricalAggregations(dayStart, dayEnd);

      // Generate predicted future aggregations based on schedules
      this.generatePredictedAggregations(dayStart, dayEnd);

      // Debug logging
      const totalEvents = Array.from(this.sourceEvents.values()).flat().length;
      this.debugLog(`Calendar loaded: ${totalEvents} total events`);
      console.log('Calendar data loaded:', {
        sourcesWithSchedules: sourcesWithSchedules.length,
        totalEvents: totalEvents,
        sourceEvents: Array.from(this.sourceEvents.entries()).map(([id, events]) => ({ id, eventCount: events.length }))
      });

      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error loading calendar data:', error);
    } finally {
      this.calendarLoading = false;
    }
  }

  cleanupOrphanedEvents(): void {
    const validSourceIds = new Set(this.getSourcesWithSchedules().map(source => source.id).filter(Boolean));
    const eventsToRemove: string[] = [];

    for (const [sourceId, events] of this.sourceEvents.entries()) {
      if (!validSourceIds.has(sourceId)) {
        eventsToRemove.push(sourceId);
        console.log('Removing orphaned events for source:', sourceId, 'events:', events.length);
      }
    }

    eventsToRemove.forEach(sourceId => {
      this.sourceEvents.delete(sourceId);
    });
  }

  async loadHistoricalAggregations(dayStart: Date, dayEnd: Date): Promise<void> {
    const sourcesWithSchedules = this.getSourcesWithSchedules();

    for (const source of sourcesWithSchedules) {
      if (!source.id) continue;

      try {
        // Use only supported filters: sourceId and type - get aggregation tasks
        const filters = `sourceId eq "${source.id}" and type in ("CLOUD_ACCOUNT_AGGREGATION", "CLOUD_GROUP_AGGREGATION")`;
        const request = {
          limit: 100, // Get more results since we can't filter by date
          offset: 0,
          count: false,
          filters,
          sorters: '-created'
        };

        const response = await this.sdk.getTaskStatusList(request);
        const tasks = response.data ?? [];

        // Filter tasks by date on the client side since API doesn't support date filtering
        const dayStartMs = dayStart.getTime();
        const dayEndMs = dayEnd.getTime();

        const filteredTasks = tasks.filter(task => {
          const taskDate = new Date(task.created);
          const taskTime = taskDate.getTime();
          return taskTime >= dayStartMs && taskTime < dayEndMs;
        });

        const events: TimelineEvent[] = filteredTasks.map(task => {
          const start = new Date(task.launched || task.created);
          
          // Determine aggregation type based on serviceMethod
          const serviceMethod = task.taskDefinitionSummary?.arguments?.serviceMethod;
          const aggregationType: 'account' | 'entitlement' =
            serviceMethod === 'groupAggregationTask' ? 'entitlement' : 'account';
          
          // Use the appropriate average time based on aggregation type
          const sourceWithSchedules = source;
          const avgTime = aggregationType === 'entitlement' 
            ? (sourceWithSchedules.averageEntitlementAggregationTime || 300000)
            : (sourceWithSchedules.averageAccountAggregationTime || 300000);
          
          let end = task.completed ? new Date(task.completed) : new Date(start.getTime() + avgTime); // 5 min default

          // Ensure end time doesn't exceed the day boundary
          const dayEnd = new Date(dayStart);
          dayEnd.setDate(dayEnd.getDate() + 1);
          if (end > dayEnd) {
            end = new Date(dayEnd);
          }

          let status: TimelineEvent['status'] = 'scheduled';
          if (task.completionStatus === 'SUCCESS') {
            status = 'completed';
          } else if (task.completionStatus === 'ERROR' || task.completionStatus === 'TERMINATED') {
            status = 'failed';
          } else if (task.completionStatus === 'WARNING') {
            status = 'in-progress';
          }
          
          // Debug logging for serviceMethod values (only for entitlement aggregations)
          if (serviceMethod === 'groupAggregationTask') {
            this.debugLog(`Found entitlement aggregation task: ${task.id}`);
          }

          return {
            id: task.id,
            sourceId: source.id as string,
            start,
            end,
            status,
            durationLabel: this.formatDuration(end.getTime() - start.getTime()),
            taskId: task.id,
            aggregationType
          };
        });

        if (this.isSourceValid(source.id)) {
          this.sourceEvents.set(source.id, events);
        } else {
          console.log('Skipping events for invalid source:', source.id);
        }
      } catch (error) {
        console.error(`Error loading historical data for source ${source.id}:`, error);
        this.sourceEvents.set(source.id, []);
      }
    }
  }

  generatePredictedAggregations(dayStart: Date, dayEnd: Date): void {
    this.debugLog(`Generating predictions for ${dayStart.toDateString()}`);
    
    for (const source of this.getSourcesWithSchedules()) {
      if (!source.id) continue;

      const cronExpression = this.getScheduleCron(source, 'ACCOUNT_AGGREGATION');
      this.debugLog(`${source.name}: cron=${cronExpression || 'none'}`);
      console.log(`Source ${source.name} (${source.id}) cron:`, cronExpression);

      if (!cronExpression) {
        console.log(`No cron expression found for source ${source.name}`);
        continue;
      }

      console.log(`Generating events for ${source.name} on ${dayStart.toDateString()} (day of week: ${dayStart.getDay()})`);

      const existingEvents = this.sourceEvents.get(source.id) || [];

      // Generate account aggregation events
      const accountEvents = this.generateEventsFromCron(cronExpression, dayStart, dayEnd, source);
      console.log(`Generated ${accountEvents.length} account events for ${source.name}:`, accountEvents.map(e => ({ start: e.start.toLocaleString(), end: e.end.toLocaleString() })));

      // Generate entitlement aggregation events (using GROUP_AGGREGATION schedule if available)
      const entitlementCron = this.getScheduleCron(source, 'GROUP_AGGREGATION', 'ENTITLEMENT_AGGREGATION');
      const entitlementEvents = entitlementCron ?
        this.generateEntitlementEventsFromCron(entitlementCron, dayStart, dayEnd, source) : [];

      const predictedEvents = [...accountEvents, ...entitlementEvents];
      this.debugLog(`${source.name}: generated ${accountEvents.length} account + ${entitlementEvents.length} entitlement events`);
      console.log(`Total predicted events for ${source.name}: ${predictedEvents.length}`);
      
      // Filter out predictions that already have historical data
      const filteredPredictions = predictedEvents.filter(predicted =>
        !existingEvents.some(existing =>
          Math.abs(existing.start.getTime() - predicted.start.getTime()) < 300000 // 5 min tolerance
        )
      );
      console.log(`After filtering existing events: ${filteredPredictions.length} predictions`);

      // Only show future predictions (after current time)
      const now = new Date();
      this.debugLog(`Current time: ${now.toLocaleString()}`);
      const futurePredictions = filteredPredictions.filter(event => {
        const isFuture = event.start > now;
        if (!isFuture) {
          this.debugLog(`Filtered out past event: ${event.start.toLocaleString()}`);
        }
        return isFuture;
      });
      this.debugLog(`${source.name}: ${futurePredictions.length} future predictions`);
      console.log(`Future predictions: ${futurePredictions.length}`);

      if (this.isSourceValid(source.id)) {
        // Store all events (past and future) for overlap detection
        // But only show future events in the timeline
        const allEvents = [...existingEvents, ...futurePredictions];
        this.sourceEvents.set(source.id, allEvents);
        console.log(`Total events for ${source.name}: ${allEvents.length} (${futurePredictions.length} future for display)`);
      } else {
        console.log('Skipping predicted events for invalid source:', source.id);
      }
    }
    
    // Calculate overlaps after generating all events
    this.debugLog(`About to call calculateAggregationOverlaps`, 'eventGeneration');
    this.calculateAggregationOverlaps();
    this.debugLog(`Finished calling calculateAggregationOverlaps`, 'eventGeneration');
  }

  /**
   * Calculate overlapping aggregations for the current day (upcoming only)
   * 
   * To enable debug logging for this method, set debugConfig.overlapDetection = true
   */
  calculateAggregationOverlaps(): void {
    try {
      this.debugLog(`=== STARTING calculateAggregationOverlaps ===`, 'overlapDetection');
      this.aggregationOverlaps = [];
      
      // Collect all events from all sources
      const allEvents: Array<TimelineEvent & { sourceName: string }> = [];
    
    this.debugLog(`SourceEvents map contains ${this.sourceEvents.size} sources`, 'overlapDetection');
    for (const [sourceId, events] of this.sourceEvents) {
      const source = this.getSourcesWithSchedules().find(s => s.id === sourceId);
      const sourceName = source?.name || sourceId;
      
      this.debugLog(`Source ${sourceName} (${sourceId}) has ${events.length} events`, 'overlapDetection');
      
      for (const event of events) {
        allEvents.push({
          ...event,
          sourceName
        });
      }
    }
    
    // Filter to only upcoming events (start time is in the future)
    const now = new Date();
    const upcomingEvents = allEvents.filter(event => event.start > now);
    
    this.debugLog(`Overlap detection: ${allEvents.length} total events, ${upcomingEvents.length} upcoming events`);
    
    // Sort upcoming events by start time
    upcomingEvents.sort((a, b) => a.start.getTime() - b.start.getTime());
    
    // Find overlapping events (only among upcoming events)
    this.debugLog(`Starting overlap detection for ${upcomingEvents.length} upcoming events`, 'overlapDetection');
    
    for (let i = 0; i < upcomingEvents.length; i++) {
      const currentEvent = upcomingEvents[i];
      const overlappingEvents = [currentEvent];
      
      this.debugLog(`Checking event ${i + 1}: ${currentEvent.sourceName} ${currentEvent.aggregationType} ${currentEvent.start.toLocaleTimeString()}-${currentEvent.end.toLocaleTimeString()}`);
      
      // Check for overlaps with subsequent upcoming events
      for (let j = i + 1; j < upcomingEvents.length; j++) {
        const nextEvent = upcomingEvents[j];
        
        this.debugLog(`  Comparing with event ${j + 1}: ${nextEvent.sourceName} ${nextEvent.aggregationType} ${nextEvent.start.toLocaleTimeString()}-${nextEvent.end.toLocaleTimeString()}`);
        
        // If next event starts before current event ends, they overlap
        if (nextEvent.start.getTime() < currentEvent.end.getTime()) {
          this.debugLog(`    OVERLAP DETECTED: next start (${nextEvent.start.getTime()}) < current end (${currentEvent.end.getTime()})`);
          overlappingEvents.push(nextEvent);
        } else if (nextEvent.start.getTime() === currentEvent.start.getTime()) {
          // Events that start at exactly the same time also overlap
          this.debugLog(`    OVERLAP DETECTED: same start time`);
          overlappingEvents.push(nextEvent);
        } else {
          // No more overlaps possible since events are sorted by start time
          this.debugLog(`    No overlap: next start (${nextEvent.start.getTime()}) >= current end (${currentEvent.end.getTime()})`);
          break;
        }
      }
      
      // If we found overlaps (more than one event), group them by start time and find the highest overlap
      if (overlappingEvents.length > 1) {
        this.debugLog(`Found ${overlappingEvents.length} overlapping events, grouping by start time:`, 'overlapDetection');
        overlappingEvents.forEach(event => {
          this.debugLog(`  - ${event.sourceName} ${event.aggregationType} ${event.start.toLocaleTimeString()}-${event.end.toLocaleTimeString()}`, 'overlapDetection');
        });
        
        // Group events by start time (events that start at the same time)
        const startTime = overlappingEvents[0].start.getTime();
        const eventsAtSameTime = overlappingEvents.filter(event => event.start.getTime() === startTime);
        
        this.debugLog(`  Grouping ${eventsAtSameTime.length} events that start at ${new Date(startTime).toLocaleTimeString()}`);
        
        let highestOverlap = {
          duration: 0,
          start: new Date(),
          end: new Date(),
          events: [] as Array<TimelineEvent & { sourceName: string }>
        };
        
        // Check all pairs of events to find the highest overlap duration
        for (let i = 0; i < eventsAtSameTime.length; i++) {
          for (let j = i + 1; j < eventsAtSameTime.length; j++) {
            const event1 = eventsAtSameTime[i];
            const event2 = eventsAtSameTime[j];
            
            // Calculate overlap between these two events
            const overlapStart = new Date(Math.max(event1.start.getTime(), event2.start.getTime()));
            const overlapEnd = new Date(Math.min(event1.end.getTime(), event2.end.getTime()));
            const overlapDuration = overlapEnd.getTime() - overlapStart.getTime();
            
            this.debugLog(`  Checking ${event1.sourceName} ${event1.aggregationType} vs ${event2.sourceName} ${event2.aggregationType}: ${Math.round(overlapDuration/1000)}s overlap`);
            
            // If this is the highest overlap so far, record it
            if (overlapDuration > highestOverlap.duration) {
              highestOverlap = {
                duration: overlapDuration,
                start: overlapStart,
                end: overlapEnd,
                events: [event1, event2]
              };
              this.debugLog(`    -> New highest overlap: ${Math.round(overlapDuration/1000)}s`);
            }
          }
        }
        
        // Only include overlaps that are significant (at least 1 second)
        if (highestOverlap.duration >= 1000) {
          // Calculate average duration for each event in the group
          const eventsWithAvgDuration = eventsAtSameTime.map(event => {
            const source = this.getSourcesWithSchedules().find(s => s.id === event.sourceId);
            const avgDuration = event.aggregationType === 'entitlement' 
              ? (source?.averageEntitlementAggregationTime || 300000)
              : (source?.averageAccountAggregationTime || 300000);
            
            return {
              sourceId: event.sourceId,
              sourceName: event.sourceName,
              aggregationType: event.aggregationType,
              eventId: event.id,
              averageDuration: avgDuration
            };
          });
          
          const overlap: AggregationOverlap = {
            startTime: highestOverlap.start,
            endTime: highestOverlap.end,
            overlapDuration: highestOverlap.duration,
            overlappingEvents: eventsWithAvgDuration
          };
          
          this.aggregationOverlaps.push(overlap);
          this.debugLog(`Added grouped overlap: ${highestOverlap.start.toLocaleTimeString()}-${highestOverlap.end.toLocaleTimeString()} (${Math.round(highestOverlap.duration/1000)}s) with ${eventsAtSameTime.length} events`);
        } else {
          this.debugLog(`Skipped overlap (too short): ${Math.round(highestOverlap.duration/1000)} seconds`);
        }
      }
    }
    
    // Group overlaps by start time and merge them
    const overlapsByStartTime = new Map<number, AggregationOverlap[]>();
    
    // Group overlaps by their start time
    this.aggregationOverlaps.forEach(overlap => {
      const startTime = overlap.startTime.getTime();
      if (!overlapsByStartTime.has(startTime)) {
        overlapsByStartTime.set(startTime, []);
      }
      overlapsByStartTime.get(startTime)!.push(overlap);
    });
    
    // Create merged overlaps - one per unique start time
    this.aggregationOverlaps = [];
    overlapsByStartTime.forEach((overlaps, startTime) => {
      if (overlaps.length > 0) {
        // Find the overlap with the highest duration
        const highestOverlap = overlaps.reduce((max, current) => 
          current.overlapDuration > max.overlapDuration ? current : max
        );
        
        // Collect all unique events from all overlaps at this start time
        const allEvents = new Map<string, typeof highestOverlap.overlappingEvents[0]>();
        overlaps.forEach(overlap => {
          overlap.overlappingEvents.forEach(event => {
            const key = `${event.sourceId}-${event.aggregationType}`;
            allEvents.set(key, event);
          });
        });
        
        // Create the merged overlap
        const mergedOverlap: AggregationOverlap = {
          startTime: highestOverlap.startTime,
          endTime: highestOverlap.endTime,
          overlapDuration: highestOverlap.overlapDuration,
          overlappingEvents: Array.from(allEvents.values())
        };
        
        this.aggregationOverlaps.push(mergedOverlap);
        this.debugLog(`Merged ${overlaps.length} overlaps at ${new Date(startTime).toLocaleTimeString()} into 1 overlap with ${allEvents.size} events`);
      }
    });
    
    // Sort overlaps by start time
    this.aggregationOverlaps.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    
    this.debugLog(`Found ${this.aggregationOverlaps.length} upcoming aggregation overlaps`, 'overlapDetection');
    
    // Debug logging for overlap detection
    this.debugLog(`=== OVERLAP DETECTION DEBUG ===`);
    this.debugLog(`Current time: ${now.toLocaleString()}`);
    this.debugLog(`Total events collected: ${allEvents.length}`);
    this.debugLog(`Upcoming events: ${upcomingEvents.length}`);
    
    if (allEvents.length > 0) {
      this.debugLog(`All events:`);
      allEvents.forEach((event, index) => {
        const isUpcoming = event.start > now;
        this.debugLog(`  ${index + 1}. ${event.sourceName} ${event.aggregationType} ${event.start.toLocaleTimeString()}-${event.end.toLocaleTimeString()} ${isUpcoming ? '[UPCOMING]' : '[PAST]'}`);
      });
    }
    
    if (upcomingEvents.length > 0) {
      this.debugLog(`Upcoming events for overlap detection:`);
      upcomingEvents.forEach((event, index) => {
        this.debugLog(`  ${index + 1}. ${event.sourceName} ${event.aggregationType} ${event.start.toLocaleTimeString()}-${event.end.toLocaleTimeString()}`);
      });
    } else {
      this.debugLog(`No upcoming events found for overlap detection`);
    }
    
    this.debugLog(`=== END OVERLAP DETECTION DEBUG ===`);
    } catch (error) {
      this.debugLog(`ERROR in calculateAggregationOverlaps: ${String(error)}`);
      console.error('Error in calculateAggregationOverlaps:', error);
    }
  }

  generateEventsFromCron(cronExpression: string, dayStart: Date, dayEnd: Date, source: SourceWithSchedules): TimelineEvent[] {
    const events: TimelineEvent[] = [];

    console.log('Parsing cron expression:', cronExpression);
    this.debugLog(`Parsing cron: ${cronExpression}`);

    // Simple cron parsing for common patterns (this is a simplified version)
    // For production, you'd want to use a proper cron parser library
    const cronParts = cronExpression.split(' ');
    console.log('Cron parts:', cronParts);
    this.debugLog(`Cron parts: ${cronParts.join(' | ')}`);

    if (cronParts.length < 5) {
      console.log('Invalid cron expression - not enough parts');
      return events;
    }

    // Handle both 5-part and 6-part cron expressions
    // For 6-part Quartz cron: second minute hour day-of-month month day-of-week [year]
    // For 5-part standard cron: minute hour day-of-month month day-of-week
    let minute: string, hour: string, dayOfMonth: string, month: string, dayOfWeek: string;
    
    if (cronParts.length === 6) {
      // 6-part Quartz cron: second minute hour day-of-month month day-of-week
      minute = cronParts[1];  // minute is second field
      hour = cronParts[2];    // hour is third field
      dayOfMonth = cronParts[3]; // day-of-month is fourth field
      month = cronParts[4];   // month is fifth field
      dayOfWeek = cronParts[5]; // day-of-week is sixth field
      // year = undefined;
      this.debugLog(`Detected 6-part Quartz cron - second=${cronParts[0]}, minute=${minute}, hour=${hour}`, 'scheduleParsing');
    } else {
      // 5-part standard cron: minute hour day-of-month month day-of-week
      minute = cronParts[0];
      hour = cronParts[1];
      dayOfMonth = cronParts[2];
      month = cronParts[3];
      dayOfWeek = cronParts[4];
      // year = cronParts[5]; // May be undefined for 5-part expressions
      this.debugLog(`Detected 5-part standard cron - minute=${minute}, hour=${hour}`, 'scheduleParsing');
    }

    console.log('Cron parsed - minute:', minute, 'hour:', hour, 'dayOfMonth:', dayOfMonth, 'month:', month, 'dayOfWeek:', dayOfWeek);
    this.debugLog(`Pattern check: minute=${minute}, hour=${hour}, month=${month}, dayOfWeek=${dayOfWeek}`);

    // Handle SailPoint's non-standard cron format where hours are in the dayOfMonth field
    // Format: minute hour dayOfMonth(contains hours) month dayOfWeek [year]
    if (minute === '0' && hour === '0' && month === '*' && (dayOfWeek === '?' || dayOfWeek === '*')) {
      console.log('Matched SailPoint cron pattern - hours in dayOfMonth field');
      this.debugLog(`Matched SailPoint pattern for ${source.name} - hours in dayOfMonth: ${dayOfMonth}`, 'eventGeneration');
      const minutes = [0]; // Always at minute 0 for this pattern
      const hours = this.parseCronHours(dayOfMonth); // Parse hours from dayOfMonth field
      console.log('Parsed minutes:', minutes, 'hours from dayOfMonth:', hours);
      this.debugLog(`SailPoint pattern - minutes: [${minutes.join(', ')}], hours: [${hours.join(', ')}]`, 'eventGeneration');

      for (const hourValue of hours) {
        for (const minuteValue of minutes) {
          const eventStart = new Date(dayStart);
          eventStart.setHours(hourValue, minuteValue, 0, 0);

          console.log(`Checking ${hourValue}:${minuteValue.toString().padStart(2, '0')}: eventStart=${eventStart.toLocaleString()}, dayStart=${dayStart.toLocaleString()}, dayEnd=${dayEnd.toLocaleString()}`);
          this.debugLog(`Checking SailPoint time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - eventStart: ${eventStart.toLocaleString()}`, 'eventGeneration');

          if (eventStart >= dayStart && eventStart < dayEnd) {
            let eventEnd = new Date(eventStart.getTime() + (source.averageAccountAggregationTime || 300000));

            // Ensure predicted end time doesn't exceed the day boundary
            if (eventEnd > dayEnd) {
              eventEnd = new Date(dayEnd);
            }

            const event = {
              id: `predicted-${source.id}-${eventStart.getTime()}`,
              sourceId: source.id as string,
              start: eventStart,
              end: eventEnd,
              status: 'scheduled' as const,
              durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
              aggregationType: 'account' as const
            };

            events.push(event);
            this.debugLog(`Created SailPoint event for ${source.name} at ${eventStart.toLocaleTimeString()}`, 'eventGeneration');
            
            // Only log late hour events for debugging alignment issues
            if (eventStart.getHours() >= 22) {
              this.debugLog(`Late hour event for ${source.name}: ${eventStart.toLocaleTimeString()}`);
            }
          } else {
            this.debugLog(`Skipped SailPoint time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - outside day range`, 'eventGeneration');
          }
        }
      }
    } else if (dayOfMonth === '*' && month === '*' && dayOfWeek === '?') {
      // Handle standard cron patterns
      console.log('Matched standard daily pattern');
      this.debugLog(`Matched standard daily pattern for ${source.name}`, 'eventGeneration');
      const minutes = this.parseCronMinutes(minute);
      const hours = this.parseCronHours(hour);
      console.log('Parsed minutes:', minutes, 'hours:', hours);
      this.debugLog(`Standard pattern - minutes: [${minutes.join(', ')}], hours: [${hours.join(', ')}]`, 'eventGeneration');
      this.debugLog(`About to generate events for ${hours.length} hours and ${minutes.length} minutes`, 'eventGeneration');

      for (const hourValue of hours) {
        for (const minuteValue of minutes) {
          const eventStart = new Date(dayStart);
          eventStart.setHours(hourValue, minuteValue, 0, 0);

          console.log(`Checking ${hourValue}:${minuteValue.toString().padStart(2, '0')}: eventStart=${eventStart.toLocaleString()}, dayStart=${dayStart.toLocaleString()}, dayEnd=${dayEnd.toLocaleString()}`);
          this.debugLog(`Checking time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - eventStart: ${eventStart.toLocaleString()}`, 'eventGeneration');

          if (eventStart >= dayStart && eventStart < dayEnd) {
            let eventEnd = new Date(eventStart.getTime() + (source.averageAccountAggregationTime || 300000));

            // Ensure predicted end time doesn't exceed the day boundary
            if (eventEnd > dayEnd) {
              eventEnd = new Date(dayEnd);
            }

            const event = {
              id: `predicted-${source.id}-${eventStart.getTime()}`,
              sourceId: source.id as string,
              start: eventStart,
              end: eventEnd,
              status: 'scheduled' as const,
              durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
              aggregationType: 'account' as const
            };

            events.push(event);
            this.debugLog(`Created event for ${source.name} at ${eventStart.toLocaleTimeString()}`, 'eventGeneration');
            
            // Only log late hour events for debugging alignment issues
            if (eventStart.getHours() >= 22) {
              this.debugLog(`Late hour event for ${source.name}: ${eventStart.toLocaleTimeString()}`);
            }
          } else {
            this.debugLog(`Skipped time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - outside day range`, 'eventGeneration');
          }
        }
      }
    } else if (month === '*' && dayOfWeek !== '?' && dayOfWeek !== '*') {
      // Handle specific day of week patterns (e.g., "0 0 17 ? * 1" = Sunday at 17:00)
      console.log('Matched specific day of week pattern');
      this.debugLog(`Matched specific day of week pattern for ${source.name} - dayOfWeek: ${dayOfWeek}`, 'eventGeneration');
      
      const minutes = this.parseCronMinutes(minute);
      const hours = this.parseCronHours(hour);
      const daysOfWeek = this.parseCronDayOfWeek(dayOfWeek);
      
      console.log('Parsed minutes:', minutes, 'hours:', hours, 'daysOfWeek:', daysOfWeek);
      console.log('Current day of week:', dayStart.getDay(), 'dayStart:', dayStart.toDateString());
      this.debugLog(`Day of week pattern - minutes: [${minutes.join(', ')}], hours: [${hours.join(', ')}], daysOfWeek: [${daysOfWeek.join(', ')}]`, 'eventGeneration');
      this.debugLog(`Current day: ${dayStart.toDateString()}, day of week: ${dayStart.getDay()}`, 'eventGeneration');

      for (const dayOfWeekValue of daysOfWeek) {
        // Check if the current day matches the day of week
        const currentDayOfWeek = dayStart.getDay(); // 0 = Sunday, 1 = Monday, etc.
        if (currentDayOfWeek === dayOfWeekValue) {
          for (const hourValue of hours) {
            for (const minuteValue of minutes) {
              const eventStart = new Date(dayStart);
              eventStart.setHours(hourValue, minuteValue, 0, 0);

              console.log(`Checking ${hourValue}:${minuteValue.toString().padStart(2, '0')} on day ${dayOfWeekValue}: eventStart=${eventStart.toLocaleString()}`);
              this.debugLog(`Checking day of week time ${hourValue}:${minuteValue.toString().padStart(2, '0')} on day ${dayOfWeekValue} - eventStart: ${eventStart.toLocaleString()}`, 'eventGeneration');

              if (eventStart >= dayStart && eventStart < dayEnd) {
                let eventEnd = new Date(eventStart.getTime() + (source.averageAccountAggregationTime || 300000));

                // Ensure predicted end time doesn't exceed the day boundary
                if (eventEnd > dayEnd) {
                  eventEnd = new Date(dayEnd);
                }

                const event = {
                  id: `predicted-${source.id}-${eventStart.getTime()}`,
                  sourceId: source.id as string,
                  start: eventStart,
                  end: eventEnd,
                  status: 'scheduled' as const,
                  durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
                  aggregationType: 'account' as const
                };

                events.push(event);
                this.debugLog(`Created day of week event for ${source.name} at ${eventStart.toLocaleTimeString()} on day ${dayOfWeekValue}`, 'eventGeneration');
              } else {
                this.debugLog(`Skipped day of week time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - outside day range`, 'eventGeneration');
              }
            }
          }
        } else {
          this.debugLog(`Skipped day of week ${dayOfWeekValue} - current day is ${currentDayOfWeek}`, 'eventGeneration');
        }
      }
    } else if (month === '*' && (dayOfWeek === '?' || dayOfWeek === '*')) {
      // Handle non-standard cron patterns where dayOfMonth contains hours (like Active Directory)
      // Format: minute hour dayOfMonth(contains hours) month dayOfWeek
      console.log('Matched non-standard pattern with hours in dayOfMonth');
      this.debugLog(`Matched non-standard pattern for ${source.name} - minute=${minute}, hour=${hour}, dayOfMonth=${dayOfMonth}`, 'eventGeneration');
      
      // Check if hour is invalid (> 23) - this suggests it's actually minutes
      const hourNum = parseInt(hour);
      if (hourNum > 23) {
        // This is likely a malformed cron where minutes and hours are swapped
        this.debugLog(`Detected malformed cron - hour ${hour} > 23, treating as minutes`, 'eventGeneration');
        const minutes = this.parseCronMinutes(hour); // Use the "hour" field as minutes
        const hours = this.parseCronHours(dayOfMonth); // Use dayOfMonth as hours
        this.debugLog(`Malformed pattern - minutes: [${minutes.join(', ')}], hours: [${hours.join(', ')}]`, 'eventGeneration');
        
        for (const hourValue of hours) {
          for (const minuteValue of minutes) {
            const eventStart = new Date(dayStart);
            eventStart.setHours(hourValue, minuteValue, 0, 0);

            this.debugLog(`Checking malformed time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - eventStart: ${eventStart.toLocaleString()}`, 'eventGeneration');

            if (eventStart >= dayStart && eventStart < dayEnd) {
              let eventEnd = new Date(eventStart.getTime() + (source.averageAccountAggregationTime || 300000));

              // Ensure predicted end time doesn't exceed the day boundary
              if (eventEnd > dayEnd) {
                eventEnd = new Date(dayEnd);
              }

              const event = {
                id: `predicted-${source.id}-${eventStart.getTime()}`,
                sourceId: source.id as string,
                start: eventStart,
                end: eventEnd,
                status: 'scheduled' as const,
                durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
                aggregationType: 'account' as const
              };

              events.push(event);
              this.debugLog(`Created malformed pattern event for ${source.name} at ${eventStart.toLocaleTimeString()}`, 'eventGeneration');
            } else {
              this.debugLog(`Skipped malformed time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - outside day range`, 'eventGeneration');
            }
          }
        }
      } else {
        // Standard pattern with valid hours
        const minutes = this.parseCronMinutes(minute);
        const hours = this.parseCronHours(hour);
        this.debugLog(`Standard non-standard pattern - minutes: [${minutes.join(', ')}], hours: [${hours.join(', ')}]`, 'eventGeneration');

        for (const hourValue of hours) {
          for (const minuteValue of minutes) {
            const eventStart = new Date(dayStart);
            eventStart.setHours(hourValue, minuteValue, 0, 0);

            this.debugLog(`Checking standard non-standard time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - eventStart: ${eventStart.toLocaleString()}`, 'eventGeneration');

            if (eventStart >= dayStart && eventStart < dayEnd) {
              let eventEnd = new Date(eventStart.getTime() + (source.averageAccountAggregationTime || 300000));

              // Ensure predicted end time doesn't exceed the day boundary
              if (eventEnd > dayEnd) {
                eventEnd = new Date(dayEnd);
              }

              const event = {
                id: `predicted-${source.id}-${eventStart.getTime()}`,
                sourceId: source.id as string,
                start: eventStart,
                end: eventEnd,
                status: 'scheduled' as const,
                durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
                aggregationType: 'account' as const
              };

              events.push(event);
              this.debugLog(`Created standard non-standard event for ${source.name} at ${eventStart.toLocaleTimeString()}`, 'eventGeneration');
            } else {
              this.debugLog(`Skipped standard non-standard time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - outside day range`, 'eventGeneration');
            }
          }
        }
      }
    } else {
      this.debugLog(`Pattern not matched - minute=${minute}, hour=${hour}, month=${month}, dayOfWeek=${dayOfWeek}`);
    }

    this.debugLog(`Generated ${events.length} events for ${source.name}`, 'eventGeneration');
    return events;
  }

  generateEntitlementEventsFromCron(cronExpression: string, dayStart: Date, dayEnd: Date, source: SourceWithSchedules): TimelineEvent[] {
    const events: TimelineEvent[] = [];

    // Simple cron parsing for common patterns (this is a simplified version)
    // For production, you'd want to use a proper cron parser library
    const cronParts = cronExpression.split(' ');

    if (cronParts.length < 5) {
      return events;
    }

    // Handle both 5-part and 6-part cron expressions
    // For 6-part Quartz cron: second minute hour day-of-month month day-of-week [year]
    // For 5-part standard cron: minute hour day-of-month month day-of-week
    let minute: string, hour: string, dayOfMonth: string, month: string, dayOfWeek: string;
    
    if (cronParts.length === 6) {
      // 6-part Quartz cron: second minute hour day-of-month month day-of-week
      minute = cronParts[1];  // minute is second field
      hour = cronParts[2];    // hour is third field
      dayOfMonth = cronParts[3]; // day-of-month is fourth field
      month = cronParts[4];   // month is fifth field
      dayOfWeek = cronParts[5]; // day-of-week is sixth field
      // year = undefined;
      this.debugLog(`Entitlement: Detected 6-part Quartz cron - second=${cronParts[0]}, minute=${minute}, hour=${hour}`, 'scheduleParsing');
    } else {
      // 5-part standard cron: minute hour day-of-month month day-of-week
      minute = cronParts[0];
      hour = cronParts[1];
      dayOfMonth = cronParts[2];
      month = cronParts[3];
      dayOfWeek = cronParts[4];
      // year = cronParts[5]; // May be undefined for 5-part expressions
      this.debugLog(`Entitlement: Detected 5-part standard cron - minute=${minute}, hour=${hour}`, 'scheduleParsing');
    }

    // Handle SailPoint's non-standard cron format where hours are in the dayOfMonth field
    // Format: minute hour dayOfMonth(contains hours) month dayOfWeek [year]
    if (minute === '0' && hour === '0' && month === '*' && (dayOfWeek === '?' || dayOfWeek === '*')) {
      this.debugLog(`Matched SailPoint pattern for entitlement - hours in dayOfMonth: ${dayOfMonth}`);
      const minutes = [0]; // Always at minute 0 for this pattern
      const hours = this.parseCronHours(dayOfMonth); // Parse hours from dayOfMonth field
      this.debugLog(`Parsed entitlement hours: ${hours.join(', ')}`);

      for (const hourValue of hours) {
        for (const minuteValue of minutes) {
          const eventStart = new Date(dayStart);
          eventStart.setHours(hourValue, minuteValue, 0, 0);

          if (eventStart >= dayStart && eventStart < dayEnd) {
            let eventEnd = new Date(eventStart.getTime() + (source.averageEntitlementAggregationTime || 300000));

            // Ensure predicted end time doesn't exceed the day boundary
            if (eventEnd > dayEnd) {
              eventEnd = new Date(dayEnd);
            }

            const event = {
              id: `predicted-entitlement-${source.id}-${eventStart.getTime()}`,
              sourceId: source.id as string,
              start: eventStart,
              end: eventEnd,
              status: 'scheduled' as const,
              durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
              aggregationType: 'entitlement' as const
            };

            events.push(event);
            
            // Only log late hour events for debugging alignment issues
            if (eventStart.getHours() >= 22) {
              this.debugLog(`Late hour entitlement event for ${source.name}: ${eventStart.toLocaleTimeString()}`);
            }
          }
        }
      }
    } else if (dayOfMonth === '*' && month === '*' && dayOfWeek === '?') {
      // Handle standard cron patterns
      const minutes = this.parseCronMinutes(minute);
      const hours = this.parseCronHours(hour);

      for (const hourValue of hours) {
        for (const minuteValue of minutes) {
          const eventStart = new Date(dayStart);
          eventStart.setHours(hourValue, minuteValue, 0, 0);

          if (eventStart >= dayStart && eventStart < dayEnd) {
            let eventEnd = new Date(eventStart.getTime() + (source.averageEntitlementAggregationTime || 300000));

            // Ensure predicted end time doesn't exceed the day boundary
            if (eventEnd > dayEnd) {
              eventEnd = new Date(dayEnd);
            }

            const event = {
              id: `predicted-entitlement-${source.id}-${eventStart.getTime()}`,
              sourceId: source.id as string,
              start: eventStart,
              end: eventEnd,
              status: 'scheduled' as const,
              durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
              aggregationType: 'entitlement' as const
            };

            events.push(event);
            
            // Only log late hour events for debugging alignment issues
            if (eventStart.getHours() >= 22) {
              this.debugLog(`Late hour entitlement event for ${source.name}: ${eventStart.toLocaleTimeString()}`);
            }
          }
        }
      }
    } else if (month === '*' && dayOfWeek !== '?' && dayOfWeek !== '*') {
      // Handle specific day of week patterns for entitlement (e.g., "0 0 17 ? * 1" = Sunday at 17:00)
      this.debugLog(`Entitlement: Matched specific day of week pattern - dayOfWeek: ${dayOfWeek}`, 'eventGeneration');
      
      const minutes = this.parseCronMinutes(minute);
      const hours = this.parseCronHours(hour);
      const daysOfWeek = this.parseCronDayOfWeek(dayOfWeek);
      
      this.debugLog(`Entitlement day of week pattern - minutes: [${minutes.join(', ')}], hours: [${hours.join(', ')}], daysOfWeek: [${daysOfWeek.join(', ')}]`, 'eventGeneration');

      for (const dayOfWeekValue of daysOfWeek) {
        // Check if the current day matches the day of week
        const currentDayOfWeek = dayStart.getDay(); // 0 = Sunday, 1 = Monday, etc.
        if (currentDayOfWeek === dayOfWeekValue) {
          for (const hourValue of hours) {
            for (const minuteValue of minutes) {
              const eventStart = new Date(dayStart);
              eventStart.setHours(hourValue, minuteValue, 0, 0);

              this.debugLog(`Entitlement: Checking day of week time ${hourValue}:${minuteValue.toString().padStart(2, '0')} on day ${dayOfWeekValue} - eventStart: ${eventStart.toLocaleString()}`, 'eventGeneration');

              if (eventStart >= dayStart && eventStart < dayEnd) {
                let eventEnd = new Date(eventStart.getTime() + (source.averageEntitlementAggregationTime || 300000));

                // Ensure predicted end time doesn't exceed the day boundary
                if (eventEnd > dayEnd) {
                  eventEnd = new Date(dayEnd);
                }

                const event = {
                  id: `predicted-entitlement-${source.id}-${eventStart.getTime()}`,
                  sourceId: source.id as string,
                  start: eventStart,
                  end: eventEnd,
                  status: 'scheduled' as const,
                  durationLabel: this.formatDuration(eventEnd.getTime() - eventStart.getTime()),
                  aggregationType: 'entitlement' as const
                };

                events.push(event);
                this.debugLog(`Created entitlement day of week event for ${source.name} at ${eventStart.toLocaleTimeString()} on day ${dayOfWeekValue}`, 'eventGeneration');
              } else {
                this.debugLog(`Entitlement: Skipped day of week time ${hourValue}:${minuteValue.toString().padStart(2, '0')} - outside day range`, 'eventGeneration');
              }
            }
          }
        } else {
          this.debugLog(`Entitlement: Skipped day of week ${dayOfWeekValue} - current day is ${currentDayOfWeek}`, 'eventGeneration');
        }
      }
    } else {
      this.debugLog(`Entitlement pattern not matched - minute=${minute}, hour=${hour}, month=${month}, dayOfWeek=${dayOfWeek}`);
    }
    return events;
  }

  parseCronMinutes(minuteExpression: string): number[] {
    this.debugLog(`parseCronMinutes: parsing "${minuteExpression}"`, 'scheduleParsing');
    
    if (minuteExpression === '*') {
      this.debugLog(`parseCronMinutes: wildcard (*) - returning [0]`, 'scheduleParsing');
      return [0]; // Default to top of hour
    }

    const minutes: number[] = [];
    const parts = minuteExpression.split(',');
    this.debugLog(`parseCronMinutes: split into parts: [${parts.join(', ')}]`, 'scheduleParsing');

    for (const part of parts) {
      this.debugLog(`parseCronMinutes: processing part "${part}"`, 'scheduleParsing');
      
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(Number);
        this.debugLog(`parseCronMinutes: range detected ${start}-${end}`, 'scheduleParsing');
        
        for (let i = start; i <= end; i++) {
          minutes.push(i);
          this.debugLog(`parseCronMinutes: added minute ${i} from range`, 'scheduleParsing');
        }
      } else {
        const minuteValue = Number(part);
        minutes.push(minuteValue);
        this.debugLog(`parseCronMinutes: added minute ${minuteValue} from single value`, 'scheduleParsing');
      }
    }

    this.debugLog(`parseCronMinutes: final result: [${minutes.join(', ')}]`, 'scheduleParsing');
    return minutes;
  }

  parseCronHours(hourExpression: string): number[] {
    this.debugLog(`parseCronHours: parsing "${hourExpression}"`, 'scheduleParsing');
    
    if (hourExpression === '*') {
      this.debugLog(`parseCronHours: wildcard (*) - returning all 24 hours`, 'scheduleParsing');
      return Array.from({ length: 24 }, (_, i) => i);
    }

    const hours: number[] = [];
    const parts = hourExpression.split(',');
    this.debugLog(`parseCronHours: split into parts: [${parts.join(', ')}]`, 'scheduleParsing');

    for (const part of parts) {
      this.debugLog(`parseCronHours: processing part "${part}"`, 'scheduleParsing');
      
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(Number);
        this.debugLog(`parseCronHours: range detected ${start}-${end}`, 'scheduleParsing');
        
        for (let i = start; i <= end; i++) {
          hours.push(i);
          this.debugLog(`parseCronHours: added hour ${i} from range`, 'scheduleParsing');
        }
      } else {
        const hourValue = Number(part);
        hours.push(hourValue);
        this.debugLog(`parseCronHours: added hour ${hourValue} from single value`, 'scheduleParsing');
      }
    }

    this.debugLog(`parseCronHours: final result: [${hours.join(', ')}]`, 'scheduleParsing');
    return hours;
  }

  parseCronDayOfWeek(dayOfWeekExpression: string): number[] {
    this.debugLog(`parseCronDayOfWeek: parsing "${dayOfWeekExpression}"`, 'scheduleParsing');
    console.log(`parseCronDayOfWeek: parsing "${dayOfWeekExpression}"`);
    
    if (dayOfWeekExpression === '*' || dayOfWeekExpression === '?') {
      this.debugLog(`parseCronDayOfWeek: wildcard (* or ?) - returning all 7 days`, 'scheduleParsing');
      console.log(`parseCronDayOfWeek: wildcard (* or ?) - returning all 7 days`);
      return Array.from({ length: 7 }, (_, i) => i); // 0 = Sunday, 1 = Monday, etc.
    }

    const daysOfWeek: number[] = [];
    const parts = dayOfWeekExpression.split(',');
    this.debugLog(`parseCronDayOfWeek: split into parts: [${parts.join(', ')}]`, 'scheduleParsing');

    // For this specific case, we'll assume Quartz format (1=Sunday, 2=Monday, ..., 7=Saturday)
    // since the user expects "0 0 17 ? * 1" to mean Sunday at 17:00
    const isQuartzFormat = true; // Assume Quartz format for now
    this.debugLog(`parseCronDayOfWeek: using Quartz format (1=Sunday, 2=Monday, ..., 7=Saturday)`, 'scheduleParsing');
    console.log(`parseCronDayOfWeek: using Quartz format (1=Sunday, 2=Monday, ..., 7=Saturday)`);

    for (const part of parts) {
      this.debugLog(`parseCronDayOfWeek: processing part "${part}"`, 'scheduleParsing');
      
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(Number);
        this.debugLog(`parseCronDayOfWeek: range detected ${start}-${end}`, 'scheduleParsing');
        
        for (let i = start; i <= end; i++) {
          let dayValue = i;
          if (isQuartzFormat) {
            // Convert from Quartz format (1=Sunday, 2=Monday, ..., 7=Saturday) to JavaScript format (0=Sunday, 1=Monday, ..., 6=Saturday)
            dayValue = i - 1; // All values shift down by 1: 1→0, 2→1, 3→2, ..., 7→6
          }
          daysOfWeek.push(dayValue);
          this.debugLog(`parseCronDayOfWeek: added day ${dayValue} from range (converted from ${i})`, 'scheduleParsing');
        }
      } else {
        let dayValue = Number(part);
        if (isQuartzFormat) {
          // Convert from Quartz format (1=Sunday, 2=Monday, ..., 7=Saturday) to JavaScript format (0=Sunday, 1=Monday, ..., 6=Saturday)
          dayValue = dayValue - 1; // All values shift down by 1: 1→0, 2→1, 3→2, ..., 7→6
          this.debugLog(`parseCronDayOfWeek: converted from Quartz format: ${part} -> ${dayValue}`, 'scheduleParsing');
        }
        daysOfWeek.push(dayValue);
        this.debugLog(`parseCronDayOfWeek: added day ${dayValue} from single value`, 'scheduleParsing');
      }
    }

    this.debugLog(`parseCronDayOfWeek: final result: [${daysOfWeek.join(', ')}]`, 'scheduleParsing');
    console.log(`parseCronDayOfWeek: final result: [${daysOfWeek.join(', ')}]`);
    return daysOfWeek;
  }

  // Calendar navigation methods
  previousDay(): void {
    this.currentDayStart.setDate(this.currentDayStart.getDate() - 1);
    void this.loadCalendarData();
  }

  nextDay(): void {
    this.currentDayStart.setDate(this.currentDayStart.getDate() + 1);
    void this.loadCalendarData();
  }

  goToToday(): void {
    this.setCurrentDayStart();
    void this.loadCalendarData();
  }

  getDayTitle(): string {
    return this.currentDayStart.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Timeline visualization methods
  getSourceRowEvents(sourceId: string): TimelineEvent[] {
    // Only return events for sources that are currently in the filtered list
    const sourceExists = this.filteredSources.some(source => source.id === sourceId);
    if (!sourceExists) {
      return [];
    }
    return this.sourceEvents.get(sourceId) || [];
  }

  getSourceRowEventsByType(sourceId: string, aggregationType: 'account' | 'entitlement'): TimelineEvent[] {
    // Only return events for sources that are currently in the filtered list
    const sourceExists = this.filteredSources.some(source => source.id === sourceId);
    if (!sourceExists) {
      return [];
    }
    const allEvents = this.sourceEvents.get(sourceId) || [];
    
    // For timeline display, show all events (past and future)
    // The timeline itself will handle the visual representation
    return allEvents.filter(event => event.aggregationType === aggregationType);
  }

  getSourcesWithSchedules(): SourceWithSchedules[] {
    const sourcesWithSchedules = this.filteredSources.filter(source =>
      source.id && this.getScheduleCron(source, 'ACCOUNT_AGGREGATION')
    );
    console.log('getSourcesWithSchedules - filtered sources:', this.filteredSources.length);
    console.log('getSourcesWithSchedules - sources with schedules:', sourcesWithSchedules.length);
    return sourcesWithSchedules;
  }

  isSourceValid(sourceId: string): boolean {
    return this.getSourcesWithSchedules().some(source => source.id === sourceId);
  }

  getTimePositionPercent(date: Date): number {
    const dayStart = new Date(this.currentDayStart);
    const dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);

    const totalMs = dayEnd.getTime() - dayStart.getTime();
    const positionMs = date.getTime() - dayStart.getTime();

    // Calculate position percentage
    const positionPercent = (positionMs / totalMs) * 100;
    
    // Debug logging removed from this method to prevent spam during rendering
    
    // Allow full range but ensure we don't go negative or exceed 100%
    return Math.max(0, Math.min(100, positionPercent));
  }

  getDurationPercent(start: Date, end: Date): number {
    const dayStart = new Date(this.currentDayStart);
    const dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);

    const totalMs = dayEnd.getTime() - dayStart.getTime();
    const durationMs = end.getTime() - start.getTime();

    // Calculate duration percentage
    const durationPercent = (durationMs / totalMs) * 100;
    const startPosition = this.getTimePositionPercent(start);
    const maxWidth = 100 - startPosition; // Available space from start position to end

    // Ensure minimum visibility but respect maximum bounds
    const finalWidth = Math.max(0.5, Math.min(durationPercent, maxWidth));

    return finalWidth;
  }

  getEventTooltip(event: TimelineEvent): string {
    const startTime = event.start.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const endTime = event.end.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const duration = this.formatDuration(event.end.getTime() - event.start.getTime());

    // Get source name
    const source = this.filteredSources.find(s => s.id === event.sourceId);
    const sourceName = source?.name || event.sourceId;

    let statusText = event.status.toUpperCase();
    if (event.status === 'completed') {
      statusText = '✅ COMPLETED';
    } else if (event.status === 'in-progress') {
      statusText = '🔄 IN PROGRESS';
    } else if (event.status === 'scheduled') {
      statusText = '📅 SCHEDULED';
    } else if (event.status === 'failed') {
      statusText = '❌ FAILED';
    }

    const aggregationTypeText = event.aggregationType === 'account' ? 'Account Aggregation' : 'Entitlement Aggregation';

    return `${statusText}\n\nSource: ${sourceName}\nType: ${aggregationTypeText}\nStart: ${startTime}\nEnd: ${endTime}\nDuration: ${duration}${event.taskId ? `\nTask ID: ${event.taskId}` : ''}`;
  }

  // Helper methods for template
  isToday(): boolean {
    return this.currentDayStart.toDateString() === new Date().toDateString();
  }

  getCurrentTimePosition(): number {
    const position = this.getTimePositionPercent(new Date());
    // Ensure the now-line doesn't exceed the timeline bounds
    return Math.min(position, 100);
  }

  // TrackBy functions for better performance and stability
  trackBySourceId(index: number, source: SourceWithSchedules): string {
    return source.id || index.toString();
  }

  trackByEventId(index: number, event: TimelineEvent): string {
    return event.id;
  }

  /**
   * Formats a time to display in HH:MM format
   */
  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  /**
   * Track by function for overlap items
   */
  trackByOverlapId(index: number, overlap: AggregationOverlap): string {
    return `${overlap.startTime.getTime()}-${overlap.endTime.getTime()}`;
  }

  // Helper method to ensure event positioning is safe
  getSafeEventPosition(event: TimelineEvent): { left: number; width: number } {
    const left = this.getTimePositionPercent(event.start);
    const width = this.getDurationPercent(event.start, event.end);

    // Ensure the event doesn't exceed the container bounds
    const maxLeft = 100;
    const maxWidth = maxLeft - left;

    return {
      left: Math.min(left, maxLeft),
      width: Math.min(width, maxWidth)
    };
  }

  ///////////////////////////////////
  /////////DEBUG TESTING/////////////
  ///////////////////////////////////

  /**
   * Test method to debug cron expressions with minutes at 30
   * Can be called from browser console: window.cronicleComponent.testCronWithMinutes30()
   */
  testCronWithMinutes30(): void {
    this.debugLog('=== TESTING CRON WITH MINUTES AT 30 ===', 'scheduleParsing');
    
    const testCronExpressions = [
      '30 * * * ?',      // 5-part: Every hour at 30 minutes
      '0,30 * * * ?',    // 5-part: Every hour at 0 and 30 minutes
      '15,30,45 * * * ?', // 5-part: Every hour at 15, 30, and 45 minutes
      '30 8-17 * * ?',   // 5-part: Every hour from 8-17 at 30 minutes
      '0 0 0 8-17 * ?',  // 6-part SailPoint format: every hour from 8-17 at minute 0
      '0 30 5,9,13,17,21,1 * * ?' // 6-part Quartz: Active Directory format with minutes at 30
    ];

    const dayStart = new Date();
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);

    const testSource: SourceWithSchedules = {
      id: 'test-source',
      name: 'Test Source',
      averageAccountAggregationTime: 300000 // 5 minutes
    } as SourceWithSchedules;

    testCronExpressions.forEach((cronExpr, index) => {
      this.debugLog(`\n--- Test ${index + 1}: ${cronExpr} ---`, 'scheduleParsing');
      const events = this.generateEventsFromCron(cronExpr, dayStart, dayEnd, testSource);
      this.debugLog(`Generated ${events.length} events:`, 'scheduleParsing');
      events.forEach((event, eventIndex) => {
        this.debugLog(`  Event ${eventIndex + 1}: ${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}`, 'scheduleParsing');
      });
    });

    this.debugLog('=== END CRON TESTING ===', 'scheduleParsing');
  }

  ///////////////////////////////////
  /////////SOURCE DIALOG/////////////
  ///////////////////////////////////

  openSourceDialog(row: any) {
    const data: SourceActionsDialogData = {
      sourceId: row.id!,
      sourceName: row.name ?? row.id,
      connectorName: row.connectorName ?? row.connector?.id ?? '—',
      schedules: (row.schedules ?? []),
      scheduleByType: (row.scheduleByType ?? {}),
      averageAggregationTime: row.averageAggregationTime ?? null,
      averageAccountAggregationTime: row.averageAccountAggregationTime ?? null,
      averageEntitlementAggregationTime: row.averageEntitlementAggregationTime ?? null
    };
    this.dialog.open(SourceActionsDialogComponent, {
      width: '720px',
      maxHeight: '90vh',
      data,
      autoFocus: false
    }).afterClosed().subscribe(changed => {
      if (changed) {
        // Re-fetch the row’s schedules so the table and calendar reflect updates
        void this.enrichVisibleRowsWithSchedules();
        void this.loadCalendarData();
      }
    });
  }

}


