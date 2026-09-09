import { Component, Inject, ViewEncapsulation } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

export interface OAuthDialogData {
  title?: string;
  uuid: string;
  authUrl?: string;
  confirmationCode?: string;
  /** Exchanges the pasted code for a token. Provided by the caller. */
  submit: (pastedCode: string) => Promise<{ success: boolean; error?: string }>;
}

@Component({
  selector: 'app-oauth-dialog',
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
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
      <p class="instruction-text">
        Sign in with the browser, then copy the one-time code from the SailPoint
        page and paste it below.
      </p>

      @if (data.confirmationCode) {
        <mat-card class="confirmation-code-card">
          <mat-card-header>
            <mat-card-title class="confirmation-label">Confirmation Code</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="confirmation-code">{{ data.confirmationCode }}</div>
            <p class="confirmation-hint">
              Make sure that the browser page shows this same code.
            </p>
          </mat-card-content>
        </mat-card>
      }

      @if (data.authUrl) {
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

        <p class="url-label">
          If the browser did not open, copy this URL into your browser:
        </p>
        <code class="url-display">{{ data.authUrl }}</code>
        @if (urlCopied) {
          <p class="url-copied">URL copied to the clipboard.</p>
        }
      }

      <mat-divider></mat-divider>

      <mat-form-field appearance="outline" class="code-field">
        <mat-label>One-time code</mat-label>
        <input
          matInput
          [(ngModel)]="pastedCode"
          [disabled]="submitting"
          (keyup.enter)="onSubmit()"
          placeholder="sp1..."
          autocomplete="off"
          spellcheck="false" />
      </mat-form-field>

      @if (submitting) {
        <div class="spinner-container">
          <mat-spinner diameter="32"></mat-spinner>
        </div>
      }

      @if (errorMessage) {
        <p class="error-text" role="alert">{{ errorMessage }}</p>
      }
    </div>

    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()" class="cancel-button" [disabled]="submitting">
        Cancel
      </button>
      <button
        mat-flat-button
        color="primary"
        (click)="onSubmit()"
        [disabled]="submitting || !pastedCode.trim()">
        Sign in
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
      margin: 12px 0;
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
      margin: 16px 0 8px 0;
      word-break: break-all;
    }

    .confirmation-hint {
      font-size: 13px;
      opacity: 0.7;
      margin: 0 0 8px 0;
    }

    .url-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin: 16px 0;
    }

    .auth-url-button {
      flex-shrink: 0;
    }

    .url-label {
      font-size: 13px;
      opacity: 0.7;
      margin: 16px 0 8px 0;
    }

    .url-display {
      display: block;
      font-size: 11px;
      line-height: 1.5;
      word-break: break-all;
      user-select: all;
      margin: 0;
      padding: 8px;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
    }

    .url-copied {
      font-size: 12px;
      opacity: 0.7;
      margin: 8px 0 0 0;
    }

    .code-field {
      width: 100%;
      margin-top: 16px;
    }

    .error-text {
      color: #c83232;
      font-size: 14px;
      margin: 8px 0 0 0;
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
  pastedCode = '';
  submitting = false;
  errorMessage = '';
  urlCopied = false;

  constructor(
    public dialogRef: MatDialogRef<OAuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OAuthDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  async onSubmit(): Promise<void> {
    const code = this.pastedCode.trim();
    if (!code || this.submitting) {
      return;
    }

    this.submitting = true;
    this.errorMessage = '';

    try {
      const result = await this.data.submit(code);
      if (result.success) {
        this.dialogRef.close(true);
        return;
      }
      this.errorMessage = result.error || 'Sign-in failed. Copy the code again and retry.';
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Sign-in failed.';
    } finally {
      this.submitting = false;
    }
  }

  copyUrl(): void {
    if (this.data.authUrl) {
      void navigator.clipboard.writeText(this.data.authUrl).then(() => {
        this.urlCopied = true;
      });
    }
  }
}
