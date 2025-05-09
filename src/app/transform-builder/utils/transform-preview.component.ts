import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { finalize, from, Subject, takeUntil } from 'rxjs';
import { IdentityDocumentsV2025, IdentityProfilesV2025ApiGenerateIdentityPreviewRequest, IdentityProfileV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from '../../core/services/electron/sailpoint-sdk.service';
import { IdentitySearchComponent } from './identity-search.component';
import { IdentityService } from './identity-service';
import { TransformResultsComponent } from './transform-results.component';

export type TransformResult = {
  identityName: string;
  result: string;
  success: boolean;
  error: string | null;
}

@Component({
  selector: 'preview-stepper',
  templateUrl: './transform-preview.component.html',
  styleUrl: './transform-preview.component.scss',
  standalone: true,
  imports: [ MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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
    IdentitySearchComponent,
    TransformResultsComponent
  ],

})
export class TransformPreviewComponent implements OnInit {
  sdk: SailPointSDKService;
  private destroy$ = new Subject<void>();
  transformForm: FormGroup;
  profiles: IdentityProfileV2025[] = []; 
  loadingProfiles = false;
  profileError = '';
  selectedIdentities: IdentityDocumentsV2025[] = [];
  codeExpanded = false;
  transformName: string = '';
  transformCode: string = '';
  executingTransform = false;
  transformResults: TransformResult[] = [];



  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TransformPreviewComponent>,
    public identityService: IdentityService,
    @Inject(MAT_DIALOG_DATA) public data: { sdkService: SailPointSDKService, transformDefinition: any },
    private snackBar: MatSnackBar
  ) {
    this.sdk = data.sdkService;
    this.transformCode = data.transformDefinition;
    this.transformForm = this.fb.group({
      profileId: [null, Validators.required],
    });

    this.transformName = JSON.parse(data.transformDefinition).name || 'Transform';
  }

  ngOnInit(): void {
    // Load profiles
    this.loadProfiles();

    this.identityService.selectedIdentities$
    .pipe(takeUntil(this.destroy$))
    .subscribe(identities => {
      this.selectedIdentities = identities;
    });

    // Check if there's saved profile selection
    const savedProfile = localStorage.getItem('selectedProfileId');
    if (savedProfile) {
      this.transformForm.patchValue({ profileId: savedProfile });
    } 
  }


  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  cancel() {
    this.dialogRef.close();
  }

  loadProfiles(): void {
    this.loadingProfiles = true;
    this.profileError = '';
    
    from(this.sdk.listIdentityProfiles())
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingProfiles = false)
      )
      .subscribe({
        next: (response) => {
          if (response.status >= 400) {
            this.profileError = 'Failed to load profiles';
            this.snackBar.open('Error loading profiles', 'Dismiss', {
              duration: 5000,
              panelClass: 'error-snackbar'
            });
            return;
          }
          console.log('Profiles loaded:', response);
          this.profiles = response.data;
        },
        error: (error) => {
          this.profileError = error.message || 'Failed to load profiles';
          this.snackBar.open('Error loading profiles', 'Dismiss', { 
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      });
  }

    /**
   * Handle profile selection change
   */
    onProfileChange(profileId: string | null): void {
      if (profileId) {
        localStorage.setItem('selectedProfileId', profileId);
        // Clear selected identities when profile changes
        this.identityService.clearSelectedIdentities();
      } else {
        localStorage.removeItem('selectedProfileId');
      }
    }

    onIdentitiesSelected(identities: IdentityDocumentsV2025[]): void {
      this.selectedIdentities = identities;
    }

      /**
   * Toggle code editor visibility
   */
  toggleCodeEditor(): void {
    this.codeExpanded = !this.codeExpanded;
  }

  executeTransform(): void {
    if (this.transformForm.invalid) {
      this.transformForm.markAllAsTouched();
      this.snackBar.open('Please fill all required fields', 'Dismiss', { duration: 3000 });
      return;
    }
    
    if (this.selectedIdentities.length === 0) {
      this.snackBar.open('Please select at least one identity', 'Dismiss', { duration: 3000 });
      return;
    }
        
    this.executingTransform = true;
    
    this.transformResults = [];

    
    this.selectedIdentities.forEach(async identity => {
  
      const request: IdentityProfilesV2025ApiGenerateIdentityPreviewRequest = {
        identityPreviewRequestV2025: {
          identityId: identity.id,
          identityAttributeConfig: {
            enabled: true,
            attributeTransforms: [
              {
                identityAttributeName: "email",
                transformDefinition: {
                  type: "reference",
                  attributes: {
                    id: JSON.parse(this.transformCode).name
                  }
                }
              }
            ]
          }
        }
      }

      const response = await this.sdk.generateIdentityPreview(request)

      if (response.status >= 400) {
        this.transformResults.push(
          {
            identityName: identity.name,
            result: 'Error',
            success: false,
            error: response.statusText || 'An error occurred while generating the preview',
          }
        ) 
      } else {
        if (response.data.previewAttributes) {

          if (response.data.previewAttributes.find(attr => attr.name === 'email')?.errorMessages) {
            this.transformResults.push({
              identityName: identity.name,
              result: 'Error',
              success: false,
              error: response.data.previewAttributes.find(attr => attr.name === 'email')?.errorMessages?.[0]?.text ?? 'Error message not available',
            })
          } else {
            this.transformResults.push({
              identityName: identity.name,
              result: response.data.previewAttributes.find(attr => attr.name === 'email')?.value || 'No result',
              success: true,
              error: null,
            })
          }
        }
      }
    })

    console.log('Transform results:', this.transformResults);

    this.executingTransform = false;
       
    // this.transformService.executeTransform(this.selectedIdentities, this.transformCode)
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     finalize(() => this.executingTransform = false)
    //   )
    //   .subscribe({
    //     next: (results) => {
    //       this.snackBar.open(`Transform executed on ${results.length} identities`, 'Dismiss', { duration: 3000 });
    //     },
    //     error: (error) => {
    //       this.snackBar.open(error.message || 'Failed to execute transform', 'Dismiss', { 
    //         duration: 5000,
    //         panelClass: 'error-snackbar'
    //       });
    //     }
    //   });
  }

  resetForm(): void {
    this.transformForm.reset();
    this.identityService.clearSelectedIdentities();
    this.identityService.updateSelectedIdentities([]);
    this.transformResults = [];
    localStorage.removeItem('selectedProfileId');
  }
}
