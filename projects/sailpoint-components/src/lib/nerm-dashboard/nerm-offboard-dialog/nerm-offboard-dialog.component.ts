import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EnrichedAssignment } from '../nerm-dashboard.component';

export interface EndAssignmentDialogData {
  assignment: EnrichedAssignment;
}

@Component({
  selector: 'app-nerm-end-assignment-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <div class="end-assignment-dialog">
      <div class="end-assignment-dialog-header">
        <div class="end-assignment-dialog-title">
          <mat-icon color="warn">exit_to_app</mat-icon>
          <h2>Confirm End Assignment</h2>
        </div>
        <button mat-icon-button (click)="cancel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-dialog-content>
        <p>Are you sure you want to end the assignment for:</p>
        <div class="end-assignment-info">
          <div class="end-assignment-name">{{ data.assignment.personName }}</div>
          <div class="end-assignment-details">
            {{ data.assignment.jobTitle }} &middot; {{ data.assignment.organizationName }}
          </div>
          <div class="end-assignment-id">Assignment ID: {{ data.assignment.assignmentId }}</div>
        </div>
        <p class="end-assignment-warning">
          <mat-icon color="warn">warning</mat-icon>
          This action will end the assignment and cannot be undone.
        </p>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-stroked-button (click)="cancel()">Cancel</button>
        <button mat-flat-button color="warn" (click)="confirm()" class="confirm-btn">Confirm End Assignment</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .end-assignment-dialog {
      min-width: 420px;
    }
    .end-assignment-dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 16px 0;
    }
    .end-assignment-dialog-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .end-assignment-dialog-title h2 {
      margin: 0;
      font-size: 1.25rem;
    }
    .end-assignment-info {
      background: rgba(127, 127, 127, 0.12);
      border-radius: 6px;
      padding: 12px 16px;
      margin: 12px 0;
    }
    .end-assignment-name {
      font-weight: 600;
      font-size: 1rem;
    }
    .end-assignment-details {
      opacity: 0.7;
      margin-top: 4px;
    }
    .end-assignment-id {
      opacity: 0.5;
      font-size: 0.85rem;
      margin-top: 4px;
    }
    .confirm-btn {
      background-color: var(--mdc-theme-error, #b71c1c) !important;
      color: white !important;
    }
    .end-assignment-warning {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--mdc-theme-error, #b71c1c);
      font-size: 0.9rem;
      margin-top: 8px;
    }
  `],
})
export class NermEndAssignmentDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EndAssignmentDialogData,
    private dialogRef: MatDialogRef<NermEndAssignmentDialogComponent>,
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
