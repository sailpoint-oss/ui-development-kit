import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EnrichedAssignment } from '../nerm-dashboard.component';

export interface ExtendDialogData {
  assignment: EnrichedAssignment;
}

export interface ExtendDialogResult {
  newEndDate: Date;
}

@Component({
  selector: 'app-nerm-extend-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [provideNativeDateAdapter()],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="extend-dialog">
      <div class="extend-dialog-header">
        <div class="extend-dialog-title">
          <mat-icon>event</mat-icon>
          <h2>Extend Assignment</h2>
        </div>
        <button mat-icon-button (click)="cancel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div mat-dialog-content class="extend-dialog-content">
        <!-- Current assignment summary -->
        <div class="assignment-summary">
          <div class="summary-name">{{ data.assignment.personName }}</div>
          <div class="summary-role">{{ data.assignment.jobTitle }}</div>
          <div class="summary-org">{{ data.assignment.organizationName }} &middot; {{ data.assignment.locationDescription }}</div>
          <div class="summary-id">{{ data.assignment.assignmentId }}</div>
        </div>

        <mat-divider></mat-divider>

        <!-- Current end date -->
        <div class="current-date-row">
          <span class="current-date-label">Current end date</span>
          <span class="current-date-value {{ getUrgencyClass(data.assignment.expirationUrgency) }}">
            {{ data.assignment.endDate | date:'longDate' }}
            <span class="days-remaining">({{ formatDaysUntil(data.assignment.daysUntilExpiration) }})</span>
          </span>
        </div>

        <mat-divider></mat-divider>

        <!-- New end date picker -->
        <div class="picker-section">
          <div class="picker-label">Select new end date</div>
          <mat-form-field appearance="outline" class="date-field">
            <mat-label>New end date</mat-label>
            <input
              matInput
              [matDatepicker]="picker"
              [(ngModel)]="newEndDate"
              [min]="minDate"
              placeholder="Select a date"
              readonly
            />
            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
        </div>
      </div>

      <div mat-dialog-actions class="extend-dialog-actions">
        <button mat-stroked-button (click)="cancel()">Cancel</button>
        <button
          mat-flat-button
          color="primary"
          [disabled]="!newEndDate"
          (click)="confirm()"
        >
          <mat-icon>event_available</mat-icon>
          Confirm Extension
        </button>
      </div>
    </div>
  `,
  styles: [`
    .extend-dialog {
      min-width: 420px;
      max-width: 520px;
    }

    .extend-dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 12px 20px;
    }

    .extend-dialog-title {
      display: flex;
      align-items: center;
      gap: 10px;

      mat-icon {
        color: var(--theme-primary);
        font-size: 22px;
        width: 22px;
        height: 22px;
      }

      h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: var(--theme-primary-text, #1a1a2e);
      }
    }

    .dark-theme .extend-dialog-title h2 {
      color: #ffffff;
    }

    .extend-dialog-content {
      padding: 0 20px 8px !important;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .assignment-summary {
      padding: 4px 0 8px;
    }

    .summary-name {
      font-size: 16px;
      font-weight: 700;
      color: var(--theme-primary-text, #1a1a2e);
      margin-bottom: 2px;
    }

    .dark-theme .summary-name { color: #ffffff; }

    .summary-role {
      font-size: 14px;
      color: var(--theme-primary-text, #555);
      margin-bottom: 2px;
    }

    .summary-org {
      font-size: 13px;
      color: #888;
      margin-bottom: 2px;
    }

    .dark-theme .summary-org { color: rgba(255,255,255,0.5); }

    .summary-id {
      font-size: 12px;
      color: #aaa;
      font-family: monospace;
    }

    .current-date-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      gap: 12px;
    }

    .current-date-label {
      font-size: 13px;
      color: #888;
      font-weight: 500;
    }

    .dark-theme .current-date-label { color: rgba(255,255,255,0.5); }

    .current-date-value {
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .days-remaining {
      font-size: 12px;
      font-weight: 400;
    }

    .urgency-critical { color: #c62828; }
    .urgency-warning  { color: #e65100; }
    .urgency-ok       { color: #2e7d32; }
    .urgency-safe     { color: #666; }

    .dark-theme .urgency-critical { color: #ef9a9a; }
    .dark-theme .urgency-warning  { color: #ffcc80; }
    .dark-theme .urgency-ok       { color: #a5d6a7; }
    .dark-theme .urgency-safe     { color: rgba(255,255,255,0.5); }

    .picker-section {
      padding: 4px 0 0;
    }

    .picker-label {
      font-size: 13px;
      font-weight: 500;
      color: #888;
      margin-bottom: 8px;
    }

    .dark-theme .picker-label { color: rgba(255,255,255,0.5); }

    .date-field {
      width: 100%;
    }

    .extend-dialog-actions {
      padding: 8px 20px 20px !important;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    /* Counteract the global button { color: var(--theme-primary) !important } rule
       so the filled confirm button keeps white text and icon. */
    .extend-dialog-actions button.mat-mdc-unelevated-button,
    .extend-dialog-actions button.mdc-button--unelevated {
      color: #ffffff !important;
    }

    .extend-dialog-actions button.mat-mdc-unelevated-button mat-icon,
    .extend-dialog-actions button.mdc-button--unelevated mat-icon {
      color: #ffffff !important;
    }

    .extend-dialog-actions button.mat-mdc-unelevated-button:disabled,
    .extend-dialog-actions button.mdc-button--unelevated:disabled {
      color: rgba(255, 255, 255, 0.5) !important;
    }

    .extend-dialog-actions button.mat-mdc-unelevated-button:disabled mat-icon,
    .extend-dialog-actions button.mdc-button--unelevated:disabled mat-icon {
      color: rgba(255, 255, 255, 0.5) !important;
    }
  `],
})
export class NermExtendDialogComponent {
  newEndDate: Date | null = null;
  minDate: Date;

  constructor(
    public dialogRef: MatDialogRef<NermExtendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExtendDialogData,
  ) {
    // Minimum selectable date is the day after the current end date (or today if expired)
    const base = data.assignment.endDate ?? new Date();
    this.minDate = new Date(base.getTime() + 24 * 60 * 60 * 1000);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    if (this.newEndDate) {
      this.dialogRef.close({ newEndDate: this.newEndDate } satisfies ExtendDialogResult);
    }
  }

  getUrgencyClass(urgency: string): string {
    switch (urgency) {
      case 'critical': return 'urgency-critical';
      case 'warning':  return 'urgency-warning';
      case 'ok':       return 'urgency-ok';
      default:         return 'urgency-safe';
    }
  }

  formatDaysUntil(days: number): string {
    if (days < 0) return `${Math.abs(days)}d overdue`;
    if (days === 0) return 'expires today';
    return `${days}d remaining`;
  }
}
