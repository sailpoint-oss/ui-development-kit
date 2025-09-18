import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

export interface OAuthDialogData {
  title?: string;
  uuid: string;
  authUrl?: string;
}

@Component({
  selector: 'app-oauth-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule
  ],
  template: `
    <h1 mat-dialog-title>
      <mat-icon class="title-icon">login</mat-icon>
      {{ data.title || 'OAuth Authentication' }}
    </h1>

    <div mat-dialog-content class="dialog-content">
      <div class="spinner-container">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
      
      <p class="instruction-text">
        Please complete authentication in your browser window and return here.
      </p>

      <mat-card class="confirmation-code-card">
        <mat-card-header>
          <mat-card-title class="confirmation-label">Confirmation Code</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="confirmation-code">{{ data.uuid.slice(-8).slice(0, 4).toUpperCase() }}-{{ data.uuid.slice(-8).slice(4, 8).toUpperCase() }}</div>
        </mat-card-content>
      </mat-card>

      <mat-divider></mat-divider>

      <mat-card *ngIf="data.authUrl" class="auth-url-card">
        <mat-card-header>
          <mat-card-title class="url-label">Authentication URL</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="url-container">
            <a 
              [href]="data.authUrl" 
              target="_blank" 
              mat-button
              color="primary"
              class="auth-url-button">
              <mat-icon>open_in_new</mat-icon>
              Open Authentication Page
            </a>
            <button 
              mat-icon-button 
              (click)="copyUrl()" 
              matTooltip="Copy URL"
              color="primary">
              <mat-icon>content_copy</mat-icon>
            </button>
          </div>
          <p class="url-display">{{ data.authUrl.substring(0, 80) }}...</p>
        </mat-card-content>
      </mat-card>
    </div>

    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()" class="cancel-button">
        Cancel
      </button>
    </div>
  `,
  styles: [`
    .dialog-content {
      min-width: 450px;
      padding: 16px;
    }

    .spinner-container {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }

    .instruction-text {
      text-align: center;
      margin: 16px 0 24px 0;
    }

    .confirmation-code-card {
      margin: 16px 0;
      text-align: center;
    }

    .confirmation-label {
      font-size: 14px !important;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .confirmation-code {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 3px;
      margin: 16px 0;
      word-break: break-all;
    }

    .auth-url-card {
      margin: 16px 0;
    }

    .url-label {
      font-size: 14px !important;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .url-container {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 16px 0;
    }

    .auth-url-button {
      flex-shrink: 0;
    }

    .url-display {
      font-family: 'Fira Code', monospace;
      font-size: 11px;
      opacity: 0.7;
      word-break: break-all;
      margin: 8px 0 0 0;
      padding: 8px;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
    }

    .info-card {
      margin: 16px 0;
      background-color: rgba(33, 150, 243, 0.08);
    }

    .info-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .title-icon {
      margin-right: 8px;
    }

    mat-divider {
      margin: 24px 0;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class OAuthDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OAuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OAuthDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }


  copyUrl(): void {
    if (this.data.authUrl) {
      void navigator.clipboard.writeText(this.data.authUrl).then(() => {
        console.log('URL copied to clipboard');
      });
    }
  }

  getDisplayUrl(): string {
    if (!this.data.authUrl) return '';
    const maxLength = 50;
    return this.data.authUrl.length > maxLength 
      ? this.data.authUrl.substring(0, maxLength) + '...'
      : this.data.authUrl;
  }
}