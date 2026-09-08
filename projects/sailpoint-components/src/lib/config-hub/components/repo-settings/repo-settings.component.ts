import { Component, OnInit, Optional, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfigHubGitService } from '../../services/config-hub-git.service';
import { GitRepoSettings } from '../../models/config-hub.models';

@Component({
  selector: 'app-repo-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './repo-settings.component.html',
  styleUrl: './repo-settings.component.scss',
})
export class RepoSettingsComponent implements OnInit {
  readonly saved = output<GitRepoSettings>();

  form!: FormGroup;
  saving = false;
  hidePatValue = true;

  /** A token is already stored (Electron safeStorage, or the web session). */
  tokenStored = false;

  /** False in web mode, where the token cannot be stored securely. */
  tokenIsPersisted = true;

  /** A plaintext token was found in localStorage and needs to be rotated. */
  needsRotation = false;

  constructor(
    private fb: FormBuilder,
    private gitService: ConfigHubGitService,
    private snackBar: MatSnackBar,
    @Optional() protected dialogRef?: MatDialogRef<RepoSettingsComponent>,
  ) {}

  ngOnInit(): void {
    const required = (ctrl: AbstractControl): ValidationErrors | null => Validators.required(ctrl);
    this.form = this.fb.group({
      repoUrl: ['', required],
      authMethod: ['pat'],
      // Not part of GitRepoSettings: submitted separately to safeStorage and
      // never persisted with the rest of the form.
      pat: [''],
      sshKeyPath: [''],
      defaultBranch: ['main', required],
      backupsPath: ['backups', required],
      varsPath: ['vars', required],
    });

    const existing = this.gitService.settings();
    if (existing) {
      this.form.patchValue(existing);
    }

    this.tokenIsPersisted = this.gitService.tokenIsPersisted;
    this.needsRotation = this.gitService.migratedPlaintextToken();
    void this.gitService.refreshTokenState().then(() => {
      this.tokenStored = this.gitService.hasToken();
    });
  }

  async onSave(): Promise<void> {
    if (this.form.invalid) return;
    this.saving = true;

    const { pat, ...rest } = this.form.value as GitRepoSettings & { pat?: string };
    const settings = rest as GitRepoSettings;

    const token = (pat ?? '').trim();
    if (token) {
      const tokenResult = await this.gitService.saveToken(token);
      if (!tokenResult.success) {
        this.saving = false;
        this.snackBar.open(`Failed to store token: ${tokenResult.error}`, 'Dismiss', { duration: 5000 });
        return;
      }
      // Clear the plaintext value out of the form once it is vaulted.
      this.form.get('pat')?.reset('');
      this.tokenStored = true;
      this.needsRotation = false;
    }

    const result = await this.gitService.saveSettings(settings);
    this.saving = false;
    if (result.success) {
      this.snackBar.open('Repository settings saved', 'Dismiss', { duration: 3000 });
      this.saved.emit(settings);
      await this.gitService.loadBranches();
      this.dialogRef?.close(settings);
    } else {
      this.snackBar.open(`Failed to save: ${result.error}`, 'Dismiss', { duration: 5000 });
    }
  }

  /** Remove the stored token. The user must revoke it in GitHub separately. */
  async onRemoveToken(): Promise<void> {
    const confirmed = confirm(
      'Remove the stored GitHub token?\n\n' +
      'This only deletes the local copy. Revoke the token in GitHub ' +
      '(Settings → Developer settings → Personal access tokens) so it can no ' +
      'longer be used.',
    );
    if (!confirmed) return;

    const result = await this.gitService.deleteToken();
    if (result.success) {
      this.tokenStored = false;
      this.needsRotation = false;
      this.form.get('pat')?.reset('');
      this.snackBar.open('Token removed locally - remember to revoke it in GitHub', 'Dismiss', { duration: 6000 });
    } else {
      this.snackBar.open(`Failed to remove token: ${result.error}`, 'Dismiss', { duration: 5000 });
    }
  }
}
