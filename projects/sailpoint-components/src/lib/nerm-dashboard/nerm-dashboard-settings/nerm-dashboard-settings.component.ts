import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import {
  NermDashboardSettings,
  NermDashboardSettingsService,
} from '../nerm-dashboard-settings.service';

const UUID_PATTERN =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

/** Wraps {@link Validators.required} so eslint `unbound-method` is satisfied. */
function requiredUuidField(control: AbstractControl): ValidationErrors | null {
  return Validators.required(control);
}

/** Wraps {@link Validators.pattern} for UUID fields. */
function uuidFormat(control: AbstractControl): ValidationErrors | null {
  return Validators.pattern(UUID_PATTERN)(control);
}

@Component({
  selector: 'app-nerm-dashboard-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './nerm-dashboard-settings.component.html',
  styleUrl: './nerm-dashboard-settings.component.scss',
})
export class NermDashboardSettingsComponent implements OnInit {
  readonly form = this.fb.group({
    peopleTypeId: ['', [requiredUuidField, uuidFormat]],
    locationTypeId: ['', [requiredUuidField, uuidFormat]],
    departmentTypeId: ['', [requiredUuidField, uuidFormat]],
    organizationTypeId: ['', [requiredUuidField, uuidFormat]],
    assignmentTypeId: ['', [requiredUuidField, uuidFormat]],
    extendAssignmentWorkflowId: ['', [requiredUuidField, uuidFormat]],
    endAssignmentWorkflowId: ['', [requiredUuidField, uuidFormat]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly settings: NermDashboardSettingsService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.patchFromService();
  }

  patchFromService(): void {
    this.form.patchValue(this.settings.getSettings());
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBar.open('Fix invalid values before saving.', 'Dismiss', { duration: 5000 });
      return;
    }
    this.settings.saveSettings(this.form.getRawValue() as NermDashboardSettings);
    this.snackBar.open('NERM dashboard settings saved.', 'Dismiss', { duration: 4000 });
  }

  resetToDefaults(): void {
    this.settings.resetToDefaults();
    this.patchFromService();
    this.snackBar.open('Restored default settings.', 'Dismiss', { duration: 4000 });
  }

  goToDashboard(): void {
    void this.router.navigate(['/nerm-dashboard']);
  }
}
