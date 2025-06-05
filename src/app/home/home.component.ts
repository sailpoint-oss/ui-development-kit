import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../shared/connection.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GenericDialogComponent, DialogData } from '../generic-dialog/generic-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

declare const window: any;

interface Connection {
  connected: boolean;
  name: string;
}

interface Tenant {
  active: boolean;
  apiUrl: string;
  tenantUrl: string;
  clientId: string | null;
  clientSecret: string | null;
  name: string;
  authType: string;
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  // Connection state
  isConnected = false;
  loading = false;
  dialogRef: MatDialogRef<GenericDialogComponent> | null = null;
  private configConnectionSubscription: Subscription | null = null;

  // Environment management
  tenants: Tenant[] = [];
  selectedTenant: string = 'new';
  actualTenant: Tenant | undefined = undefined;
  name: string = '';

  // Environment configuration - unified with connection
  globalAuthMethod: string = 'pat';
  showEnvironmentDetails = false;
  oauthValidationStatus: 'unknown' | 'valid' | 'invalid' | 'testing' = 'unknown';
  
  config: EnvironmentConfig = {
    tenantName: '',
    tenantUrl: '',
    baseUrl: '',
    authType: 'pat'
  };

  constructor(
    private router: Router, 
    private connectionService: ConnectionService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.configConnectionSubscription = this.connectionService.isConnected$.subscribe(connection => {
      this.isConnected = connection.connected;
    });
    
    // Initialize environment data and global auth method
    void this.initializeAsync();
    void this.initializeGlobalAuthMethod();
    
    // Add visibility change listener to refresh tenants when returning to the app
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.refreshTenants();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.configConnectionSubscription) {
      this.configConnectionSubscription.unsubscribe();
      this.configConnectionSubscription = null;
    }
    
    // Remove event listeners
    document.removeEventListener('visibilitychange', () => {});
  }

  private async initializeAsync() {
    await this.loadTenants();
  }

  private async loadTenants() {
    try {
      this.tenants = <Tenant[]>await window.electronAPI.getTenants();
      
      // Set the selected tenant to the active one, or default to 'new' if none are active
      const activeTenant = this.tenants.find(tenant => tenant.active);
      if (activeTenant) {
        this.selectedTenant = activeTenant.name;
        this.actualTenant = activeTenant;
        // Ensure we have the latest auth type for the active tenant
        await this.refreshCurrentTenantAuthType();
        // Load the environment configuration immediately
        this.loadEnvironmentForEditing(activeTenant);
      } else {
        this.selectedTenant = 'new';
        // Reset to default config for new environment
        await this.resetConfig();
      }
    } catch (error) {
      console.error('Error loading tenants:', error);
      this.showError('Failed to load environments');
    }
  }

  // Connection methods
  get authMethodDescription(): string {
    if (!this.actualTenant) return '';
    return this.actualTenant.authType === 'oauth' ? 'OAuth Browser Authentication' : 'Personal Access Token (PAT)';
  }

  get isOAuthMode(): boolean {
    return this.actualTenant?.authType === 'oauth';
  }

  async updateTenant(): Promise<void> {
    if (this.selectedTenant === 'new') {
      this.actualTenant = undefined;
      // Reset to default config for new environment
      await this.resetConfig();
      return;
    }

    // Find the selected tenant
    this.actualTenant = this.tenants.find(tenant => tenant.name === this.selectedTenant);
    console.log(`Selected tenant:`, this.actualTenant);
    
    // Set the selected environment as active if it exists
    if (this.actualTenant) {
      await this.setActiveEnvironment(this.actualTenant.name);
      // Refresh tenant data to ensure we have the latest auth type
      await this.refreshCurrentTenantAuthType();
      // Always load the selected environment's configuration
      this.loadEnvironmentForEditing(this.actualTenant);
    }
  }

  async refreshCurrentTenantAuthType(): Promise<void> {
    try {
      // Get the latest global auth type
      const currentAuthType = await window.electronAPI.getGlobalAuthType();
      
      // Update the current tenant's auth type
      if (this.actualTenant) {
        this.actualTenant.authType = currentAuthType;
        console.log(`Updated auth type for ${this.actualTenant.name}: ${currentAuthType}`);
      }
      
      // Also update it in the tenants array
      const tenantIndex = this.tenants.findIndex(t => t.name === this.selectedTenant);
      if (tenantIndex !== -1) {
        this.tenants[tenantIndex].authType = currentAuthType;
      }
    } catch (error) {
      console.error('Error refreshing auth type:', error);
    }
  }

  async setActiveEnvironment(environmentName: string): Promise<void> {
    try {
      const result = await window.electronAPI.setActiveEnvironment(environmentName);
      if (result.success) {
        console.log(`Successfully set ${environmentName} as active environment`);
      } else {
        console.error('Failed to set active environment:', result.error);
        this.openErrorDialog(result.error || 'Failed to set active environment', 'Environment Error');
      }
    } catch (error) {
      console.error('Error setting active environment:', error);
      this.openErrorDialog('Failed to set active environment', 'Environment Error');
    }
  }

  async connectToISC() {
    // Check if "new" is selected, which means no environment is chosen
    if (this.selectedTenant === 'new') {
      this.openErrorDialog('Please select an environment or create a new one first', 'No Environment Selected');
      return;
    }

    if (!this.actualTenant) {
      this.openErrorDialog('No environment selected', 'Connection Error');
      return;
    }

    console.log('Connecting to:', this.actualTenant.name, 'at', this.actualTenant.apiUrl);
    console.log('Authentication type:', this.actualTenant.authType);
    
    try {
      // Check authentication method and handle accordingly
      if (this.actualTenant.authType === 'oauth') {
        // Perform OAuth authentication
        await this.performOAuthConnection();
      } else {
        // Perform PAT authentication (default)
        await this.performPATConnection();
      }
    } catch (error) {
      console.error('Error connecting to ISC:', error);
      this.openErrorDialog('Failed to connect to the environment. Please check your configuration and try again.', 'Connection Failed');
    }
  }

  private async performOAuthConnection() {
    if (!this.actualTenant) return;

    // Open OAuth modal dialog
    const dialogData: DialogData = {
      title: 'OAuth Authentication',
      message: 'Initiating OAuth authentication...',
      showSpinner: true,
      showCancel: false,
      disableClose: true
    };

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: dialogData,
      width: '400px',
      disableClose: true
    });

    try {
      // Perform OAuth login first
      console.log('Starting OAuth flow for:', this.actualTenant.name);
      
      // Update dialog message
      dialogData.message = 'Opening authentication page in your browser...';
      
      const oauthResult = await window.electronAPI.oauthLogin(this.actualTenant.name, this.actualTenant.apiUrl);
      
      if (oauthResult && oauthResult.accessToken) {
        // OAuth was successful, now connect using the obtained access token
        console.log('OAuth successful, connecting with access token...');
        dialogData.message = 'Authentication successful! Connecting to SailPoint...';
        
        const connected = await window.electronAPI.connectToISCWithOAuth(
          this.actualTenant.apiUrl,
          this.actualTenant.tenantUrl,
          oauthResult.accessToken
        );
        
        console.log('Connected to ISC with OAuth:', connected);
        this.connectionService.setConnectionState(connected.connected);
        this.isConnected = connected.connected;
        this.name = connected.name || this.actualTenant.name;
        
        if (connected.connected) {
          // Update dialog to show success
          dialogData.title = 'Connection Successful';
          dialogData.message = `Successfully connected to ${connected.name} using OAuth!`;
          dialogData.showSpinner = false;
          dialogData.showCancel = false;
          
          // Auto-close dialog after 2 seconds
          setTimeout(() => {
            dialogRef.close();
          }, 2000);
        } else {
          // Update dialog to show error
          dialogData.title = 'Connection Failed';
          dialogData.message = 'Failed to establish connection with OAuth token';
          dialogData.showSpinner = false;
          dialogData.showCancel = true;
        }
      } else {
        // Update dialog to show authentication failure
        dialogData.title = 'Authentication Failed';
        dialogData.message = 'OAuth authentication did not return a valid access token';
        dialogData.showSpinner = false;
        dialogData.showCancel = true;
      }
    } catch (error) {
      console.error('OAuth authentication failed:', error);
      
      // Update dialog to show error
      dialogData.title = 'Authentication Error';
      dialogData.message = 'OAuth authentication failed. Please try again.';
      dialogData.showSpinner = false;
      dialogData.showCancel = true;
      
      throw error;
    }
  }

  private async performPATConnection() {
    if (!this.actualTenant) return;

    // Check for required PAT credentials
    if (!this.actualTenant.clientId || !this.actualTenant.clientSecret) {
      this.openErrorDialog('Client ID or Client Secret is missing for this environment. Please configure the environment.', 'Connection Error');
      return;
    }
    
    try {
      const connected = <Connection>await window.electronAPI.connectToISC(
        this.actualTenant.apiUrl, 
        this.actualTenant.tenantUrl, 
        this.actualTenant.clientId, 
        this.actualTenant.clientSecret
      );
      
      console.log('Connected to ISC:', connected);
      this.connectionService.setConnectionState(connected.connected);
      this.isConnected = connected.connected;
      this.name = connected.name;
      
      if (connected.connected) {
        this.openMessageDialog(`Successfully connected to ${connected.name}`, 'Connection Successful');
      } else {
        this.openErrorDialog('Failed to establish connection with PAT credentials', 'Connection Failed');
      }
    } catch (error) {
      console.error('PAT authentication failed:', error);
      throw error;
    }
  }

  async disconnectFromISC() {
    await window.electronAPI.disconnectFromISC();
    this.isConnected = false;
    this.connectionService.setConnectionState(false);
  }

  async refreshTenants(): Promise<void> {
    await this.loadTenants();
  }

  // Environment configuration methods
  async initializeGlobalAuthMethod() {
    try {
      this.globalAuthMethod = await window.electronAPI.getGlobalAuthType();
    } catch (error) {
      console.error('Error loading global auth method:', error);
      this.globalAuthMethod = 'pat'; // Default fallback
    }
  }

  async onGlobalAuthMethodChange() {
    try {
      await window.electronAPI.setGlobalAuthType(this.globalAuthMethod);
      console.log('Global auth method updated to:', this.globalAuthMethod);
      // Update the config to match the new global auth method
      this.config.authType = this.globalAuthMethod as 'oauth' | 'pat';
      
      // If we have an environment selected, refresh its auth type as well
      if (this.actualTenant) {
        await this.refreshCurrentTenantAuthType();
      }
    } catch (error) {
      console.error('Error updating global auth method:', error);
    }
  }

  toggleEnvironmentDetails(): void {
    this.showEnvironmentDetails = !this.showEnvironmentDetails;
    if (this.showEnvironmentDetails) {
      if (this.actualTenant) {
        // Load the current environment details for editing
        this.loadEnvironmentForEditing(this.actualTenant);
      } else if (this.selectedTenant === 'new') {
        // Reset to default config for new environment
        this.resetConfig();
      }
    }
  }

  loadEnvironmentForEditing(tenant: Tenant): void {
    this.config = {
      tenantName: tenant.name,
      tenantUrl: tenant.tenantUrl,
      baseUrl: tenant.apiUrl,
      authType: this.globalAuthMethod as 'oauth' | 'pat', // Use global auth method
      clientId: tenant.clientId || '',
      clientSecret: tenant.clientSecret || ''
    };
    console.log(`Loaded environment config for: ${tenant.name}`, this.config);
    
    // Reset validation status when loading a new environment
    this.oauthValidationStatus = 'unknown';
    
    // Auto-validate OAuth if using OAuth method
    if (this.globalAuthMethod === 'oauth' && this.config.baseUrl) {
      this.validateOAuthEndpoint();
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
    const isNewEnvironment = this.selectedTenant === 'new';
    if (isNewEnvironment && this.config.tenantName) {
      // Auto-generate URLs based on tenant name
      this.config.tenantUrl = `https://${this.config.tenantName}.identitynow.com`;
      this.config.baseUrl = `https://${this.config.tenantName}.api.identitynow.com`;
      
      // Trigger OAuth validation if using OAuth
      if (this.globalAuthMethod === 'oauth') {
        this.validateOAuthEndpoint();
      }
    }
  }

  onBaseUrlChange() {
    // Reset validation status when URL changes
    this.oauthValidationStatus = 'unknown';
    
    // Auto-validate OAuth if using OAuth method and URL is provided
    if (this.globalAuthMethod === 'oauth' && this.config.baseUrl) {
      // Debounce the validation to avoid too many requests while typing
      setTimeout(() => {
        if (this.config.baseUrl) {
          this.validateOAuthEndpoint();
        }
      }, 1000);
    }
  }

  async saveEnvironment() {
    if (!this.validateConfig()) {
      return;
    }

    try {
      const isUpdate = this.selectedTenant !== 'new';
      const result = await window.electronAPI.createOrUpdateEnvironment({
        environmentName: this.config.tenantName,
        tenantUrl: this.config.tenantUrl,
        baseUrl: this.config.baseUrl,
        authType: this.config.authType,
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret,
        update: isUpdate
      });

      if (result.success) {
        this.showSuccess(isUpdate ? 'Environment updated successfully!' : 'Environment created successfully!');
        await this.loadTenants(); // Refresh the list
        
        // Automatically test OAuth configuration if using OAuth
        if (this.globalAuthMethod === 'oauth') {
          await this.validateOAuthEndpoint();
        }
        
        await this.resetConfig();
        this.showEnvironmentDetails = false;
      } else {
        this.showError(result.error || 'Failed to save environment');
      }
    } catch (error) {
      console.error('Error saving environment:', error);
      this.showError('Failed to save environment');
    }
  }

  async deleteEnvironment() {
    if (!this.actualTenant || this.selectedTenant === 'new') {
      return;
    }

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        title: 'Confirm Deletion',
        message: `Are you sure you want to delete the environment "${this.actualTenant.name}"? This action cannot be undone.`,
        showCancel: true
      }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        try {
          const deleteResult = await window.electronAPI.deleteEnvironment(this.actualTenant!.name);
          if (deleteResult.success) {
            this.showSuccess('Environment deleted successfully!');
            await this.loadTenants();
            await this.resetConfig();
            this.selectedTenant = 'new';
            this.actualTenant = undefined;
            this.showEnvironmentDetails = false;
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

  async validateOAuthEndpoint(): Promise<boolean> {
    if (!this.config.baseUrl) {
      this.oauthValidationStatus = 'invalid';
      return false;
    }

    this.oauthValidationStatus = 'testing';

    try {
      // Construct the OAuth info URL
      const oauthInfoUrl = `${this.config.baseUrl}/oauth/info`;
      
      // Make a simple HTTP request to the OAuth info endpoint
      const response = await fetch(oauthInfoUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const oauthInfo = await response.json();
        this.oauthValidationStatus = 'valid';
        console.log('OAuth info response:', oauthInfo);
        return true;
      } else {
        this.oauthValidationStatus = 'invalid';
        console.error('OAuth endpoint validation failed:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('OAuth endpoint validation error:', error);
      this.oauthValidationStatus = 'invalid';
      return false;
    }
  }

  async testOAuthConnection() {
    if (!this.config.baseUrl) {
      this.showError('Please provide API base URL');
      return;
    }

    // Show loading dialog
    const dialogData: DialogData = {
      title: 'Testing OAuth Configuration',
      message: 'Validating OAuth endpoint...',
      showSpinner: true,
      showCancel: false,
      disableClose: true
    };

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: dialogData,
      width: '400px',
      disableClose: true
    });

    const isValid = await this.validateOAuthEndpoint();

    if (isValid) {
      dialogData.title = 'OAuth Configuration Valid';
      dialogData.message = 'Successfully connected to OAuth endpoint!';
      dialogData.showSpinner = false;
      dialogData.showCancel = true;
    } else {
      dialogData.title = 'OAuth Configuration Invalid';
      dialogData.message = `Failed to reach OAuth endpoint.\n\nPlease check your API base URL: ${this.config.baseUrl}`;
      dialogData.showSpinner = false;
      dialogData.showCancel = true;
    }
  }

  validateConfig(): boolean {
    if (!this.config.tenantName.trim()) {
      this.showError('Tenant name is required');
      return false;
    }

    if (!this.config.tenantUrl.trim()) {
      this.showError('Tenant URL is required');
      return false;
    }

    if (!this.config.baseUrl.trim()) {
      this.showError('Base URL is required');
      return false;
    }

    if (this.config.authType === 'pat') {
      if (!this.config.clientId?.trim()) {
        this.showError('Client ID is required for PAT authentication');
        return false;
      }
      if (!this.config.clientSecret?.trim()) {
        this.showError('Client Secret is required for PAT authentication');
        return false;
      }
    }

    return true;
  }

  // Connected state methods
  listIdentities(): void {
    this.openMessageDialog('listed identities', 'success');
  }

  // Utility methods
  openErrorDialog(errorMessage: string, title: string): void {
    this.dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        title: title,
        message: errorMessage,
      },
    });
  }

  openMessageDialog(errorMessage: string, title: string): void {
    this.dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        title: title,
        message: errorMessage,
      },
    });
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
}