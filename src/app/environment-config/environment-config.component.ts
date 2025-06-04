import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { GenericDialogComponent, DialogData } from '../generic-dialog/generic-dialog.component';

declare const window: any;

interface Tenant {
  active: boolean;
  apiUrl: string;
  tenantUrl: string;
  clientId: string | null;
  clientSecret: string | null;
  name: string;
  authType: string; // Global authentication type
}

interface EnvironmentConfig {
  tenantName: string;
  tenantUrl: string;
  baseUrl: string;
  authType: 'oauth' | 'pat';
  clientId?: string;
  clientSecret?: string;
}

@Component({
  selector: 'app-environment-config',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './environment-config.component.html',
  styleUrls: ['./environment-config.component.scss']
})
export class EnvironmentConfigComponent implements OnInit {
  environments: Tenant[] = [];
  selectedEnvironment: string = '';
  isUpdateMode: boolean = false;
  
  config: EnvironmentConfig = {
    tenantName: '',
    tenantUrl: '',
    baseUrl: '',
    authType: 'pat'
  };

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    await this.loadEnvironments();
    // Initialize config with current global auth type
    await this.resetConfig();
  }

  async loadEnvironments() {
    try {
      this.environments = await window.electronAPI.getTenants();
    } catch (error) {
      console.error('Error loading environments:', error);
      this.showError('Failed to load environments');
    }
  }

  async onEnvironmentSelect() {
    if (this.selectedEnvironment === 'new') {
      this.isUpdateMode = false;
      await this.resetConfig();
    } else {
      this.isUpdateMode = true;
      const environment = this.environments.find(env => env.name === this.selectedEnvironment);
      if (environment) {
        this.config = {
          tenantName: environment.name,
          tenantUrl: environment.tenantUrl,
          baseUrl: environment.apiUrl,
          authType: environment.authType as 'oauth' | 'pat', // Use the global auth type
          clientId: environment.clientId || '',
          clientSecret: environment.clientSecret || ''
        };
      }
    }
  }

  async resetConfig() {
    // Get the current global auth type
    const currentAuthType = await window.electronAPI.getGlobalAuthType();
    
    this.config = {
      tenantName: '',
      tenantUrl: '',
      baseUrl: '',
      authType: currentAuthType as 'oauth' | 'pat'
    };
  }

  onTenantNameChange() {
    if (!this.isUpdateMode && this.config.tenantName) {
      // Auto-generate URLs based on tenant name
      this.config.tenantUrl = `https://${this.config.tenantName}.identitynow.com`;
      this.config.baseUrl = `https://${this.config.tenantName}.api.identitynow.com`;
    }
  }

  async saveEnvironment() {
    if (!this.validateConfig()) {
      return;
    }

    try {
      const result = await window.electronAPI.createOrUpdateEnvironment({
        environmentName: this.config.tenantName,
        tenantUrl: this.config.tenantUrl,
        baseUrl: this.config.baseUrl,
        authType: this.config.authType,
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret,
        update: this.isUpdateMode
      });

      if (result.success) {
        this.showSuccess(this.isUpdateMode ? 'Environment updated successfully!' : 'Environment created successfully!');
        this.loadEnvironments(); // Refresh the list
        await this.resetConfig();
        this.selectedEnvironment = '';
        this.isUpdateMode = false;
      } else {
        this.showError(result.error || 'Failed to save environment');
      }
    } catch (error) {
      console.error('Error saving environment:', error);
      this.showError('Failed to save environment');
    }
  }

  async deleteEnvironment() {
    if (!this.selectedEnvironment || this.selectedEnvironment === 'new') {
      return;
    }

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        title: 'Confirm Deletion',
        message: `Are you sure you want to delete the environment "${this.selectedEnvironment}"? This action cannot be undone.`,
        showCancel: true
      }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        try {
          const deleteResult = await window.electronAPI.deleteEnvironment(this.selectedEnvironment);
          if (deleteResult.success) {
            this.showSuccess('Environment deleted successfully!');
            this.loadEnvironments();
            this.resetConfig();
            this.selectedEnvironment = '';
            this.isUpdateMode = false;
          } else {
            this.showError(deleteResult.error || 'Failed to delete environment');
          }
        } catch (error) {
          console.error('Error deleting environment:', error);
          this.showError('Failed to delete environment');
        }
      }
    });
  }

  async testOAuthConnection() {
    if (!this.config.tenantName || !this.config.baseUrl) {
      this.showError('Please provide tenant name and base URL');
      return;
    }

    // Open OAuth modal dialog
    const dialogData: DialogData = {
      title: 'OAuth Test',
      message: 'Testing OAuth authentication...',
      showSpinner: true,
      showCancel: true,
      disableClose: false
    };

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: dialogData,
      width: '400px',
      disableClose: false
    });

    try {
      console.log('Testing OAuth for:', this.config.tenantName);
      dialogData.message = 'Opening authentication page in your browser...';
      
      const result = await window.electronAPI.oauthLogin(this.config.tenantName, this.config.baseUrl);
      
      if (result) {
        dialogData.title = 'OAuth Test Successful';
        dialogData.message = 'OAuth authentication completed successfully! You can now save this environment.';
        dialogData.showSpinner = false;
        dialogData.showCancel = false;
        
        // Auto-close dialog after 3 seconds
        setTimeout(() => {
          dialogRef.close();
        }, 3000);
        
        this.showSuccess('OAuth authentication completed successfully! You can now save this environment.');
      } else {
        dialogData.title = 'OAuth Test Failed';
        dialogData.message = 'OAuth authentication failed. Please check your configuration and try again.';
        dialogData.showSpinner = false;
        dialogData.showCancel = true;
      }
    } catch (error) {
      console.error('Error testing OAuth connection:', error);
      
      dialogData.title = 'OAuth Test Error';
      dialogData.message = 'OAuth authentication failed. Please check your configuration and try again.';
      dialogData.showSpinner = false;
      dialogData.showCancel = true;
    }
  }

  validateConfig(): boolean {
    if (!this.config.tenantName) {
      this.showError('Tenant name is required');
      return false;
    }

    if (!this.config.tenantUrl) {
      this.showError('Tenant URL is required');
      return false;
    }

    if (!this.config.baseUrl) {
      this.showError('Base URL is required');
      return false;
    }

    if (this.config.authType === 'pat') {
      if (!this.config.clientId) {
        this.showError('Client ID is required for PAT authentication');
        return false;
      }
      if (!this.config.clientSecret) {
        this.showError('Client Secret is required for PAT authentication');
        return false;
      }
    }

    return true;
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  goBack() {
    this.router.navigate(['/connect']);
  }
} 