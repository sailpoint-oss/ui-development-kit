import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  title?: string;
  message: string;
  showSpinner?: boolean;
  showCancel?: boolean;
  disableClose?: boolean;
}

@Component({
  selector: 'app-generic-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule],
  template: `
    <h1 mat-dialog-title>
      <mat-icon *ngIf="data.showSpinner" class="title-icon">{{ getTitleIcon() }}</mat-icon>
      {{ data.title || 'Notification' }}
    </h1>
    <div mat-dialog-content class="dialog-content">
      <div *ngIf="data.showSpinner" class="spinner-container">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      <p class="dialog-message">{{ data.message }}</p>
      <p *ngIf="data.showSpinner && isOAuthFlow()" class="oauth-instruction">
        <mat-icon class="info-icon">info</mat-icon>
        Please complete the authentication in your browser window and return here.
      </p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onClose()" *ngIf="data.showCancel !== false">
        {{ data.showSpinner ? 'Cancel' : 'Close' }}
      </button>
    </div>
  `,
  styles: [`
    .dialog-content {
      min-width: 300px;
      padding: 20px 0;
    }
    
    .spinner-container {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    
    .dialog-message {
      text-align: center;
      margin: 16px 0;
      font-size: 14px;
      line-height: 1.4;
    }
    
    .oauth-instruction {
      background-color: #e3f2fd;
      padding: 12px;
      border-radius: 4px;
      border-left: 3px solid #2196F3;
      margin: 16px 0 0 0;
      font-size: 13px;
      color: #1976d2;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .info-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: #2196F3;
    }
    
    .title-icon {
      margin-right: 8px;
      vertical-align: middle;
    }
    
    h1[mat-dialog-title] {
      display: flex;
      align-items: center;
      margin-bottom: 0;
    }
  `]
})
export class GenericDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  getTitleIcon(): string {
    if (this.data.title?.includes('Successful')) {
      return 'check_circle';
    } else if (this.data.title?.includes('Failed') || this.data.title?.includes('Error')) {
      return 'error';
    } else {
      return 'login';
    }
  }

  isOAuthFlow(): boolean {
    return this.data.title?.includes('OAuth') || 
           this.data.message?.includes('OAuth') || 
           this.data.message?.includes('browser');
  }
}
