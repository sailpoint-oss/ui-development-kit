import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, Subject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { IdentityDocumentsV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from '../../../core/services/electron/sailpoint-sdk.service';
import { IdentityService } from './identity-service';


@Component({
  selector: 'app-identity-search',
  templateUrl: './identity-search.component.html',
  styleUrls: ['./identity-search.component.scss'],
  imports: [
        // Material Modules
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTableModule,
        MatToolbarModule,
        CommonModule,
        ReactiveFormsModule
  ],
  standalone: true
})
export class IdentitySearchComponent implements OnInit, OnChanges, OnDestroy {
  @Input() profileId: string | null = null;
  @Input()
    sdkService!: SailPointSDKService;
  @Output() identitiesSelected = new EventEmitter<IdentityDocumentsV2025[]>();

  searchControl = new FormControl('');
  identities: IdentityDocumentsV2025[] = [];
  filteredIdentities: IdentityDocumentsV2025[] = [];
  selectedIdentities: IdentityDocumentsV2025[] = [];
  
  loading = false;
  error = '';

  private destroy$ = new Subject<void>();

  constructor(private identityService: IdentityService) { }

  ngOnInit(): void {
    // Subscribe to identity selection changes
    this.identityService.selectedIdentities$
    .pipe(takeUntil(this.destroy$))
    .subscribe(identities => {
        console.log('Selected Identities Subscribe On init:', identities);
      this.selectedIdentities = identities;
    });

    // Setup search with debounce
    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(value => this.searchIdentities(value || ''))
      )
      .subscribe();

    // Load identities when profile changes
    if (this.profileId) {
      this.loadIdentities();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profileId'] && !changes['profileId'].firstChange) {
      this.clearAll(); // Clear everything before loading new identities
      this.loadIdentities();
    }
  }

  clearAll(): void {
    this.searchControl.setValue('');
    this.identities = [];
    this.filteredIdentities = [];
    this.selectedIdentities = [];
    this.identityService.updateSelectedIdentities([]);
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load identities for the selected profile
   */
  loadIdentities(): void {
    if (!this.profileId) {
      this.identities = [];
      this.filteredIdentities = [];
      this.error = 'No profile selected';
      return;
    }

    this.loading = true;
    this.error = '';

    this.identityService.getIdentitiesByProfile(this.profileId, this.sdkService)
    .pipe(
      takeUntil(this.destroy$),
      catchError(err => {
        this.error = err.message || 'Failed to load identities';
        return of([]);
      })
    )
    .subscribe(identities => {
      this.identities = identities;
      this.filteredIdentities = identities;
      this.loading = false;
    });
  }

  /**
   * Search for identities by query
   */
  searchIdentities(query: string): Observable<IdentityDocumentsV2025[]> {
    if (!this.profileId) {
      return of([]);
    }

    if (!query.trim()) {
      this.filteredIdentities = this.identities;
      return of(this.identities);
    }

    // If query is less than 3 characters, filter locally
    if (query.length < 3 && this.identities.length > 0) {
      this.filteredIdentities = this.identities.filter(identity => 
        identity.name.toLowerCase().includes(query.toLowerCase())
      );
      return of(this.filteredIdentities);
    }

    // Otherwise, search via API
    this.loading = true;
    return this.identityService.getIdentitiesByProfile(this.profileId, this.sdkService, query)
    .pipe(
      takeUntil(this.destroy$),
      catchError(err => {
        this.error = err.message || 'Failed to search identities';
        this.loading = false;
        return of([]);
      }),
      switchMap(identities => {
        this.filteredIdentities = identities;
        this.loading = false;
        return of(identities);
      })
    );
  }

  /**
   * Handle selection change events
   */
  onSelectionChange(event: MatSelectionListChange): void {
    const selectedIds = event.source.selectedOptions.selected.map(option => option.value as string);
    this.selectedIdentities = this.identities.filter(identity => selectedIds.includes(identity.id));
    this.identityService.updateSelectedIdentities(this.selectedIdentities);
    this.identitiesSelected.emit(this.selectedIdentities);
  }

  /**
   * Check if an identity is selected
   */
  isSelected(identity: IdentityDocumentsV2025): boolean {
    return this.selectedIdentities.some(item => item.id === identity.id);
  }

  /**
   * Get display value for identity
   */
  getIdentityDisplay(identity: IdentityDocumentsV2025): string {
    return `${identity.name} (ID: ${identity.id})`;
  }

  /**
   * Clear search and selections
   */
  clearSearch(): void {
    this.searchControl.setValue('');
    this.filteredIdentities = this.identities;
  }
}
