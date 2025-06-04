import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule if using mat-button
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent, DialogData } from '../generic-dialog/generic-dialog.component'; // Import the generic dialog
import { ConnectionService } from '../shared/connection.service' // Import the service
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  authType: string; // Global authentication type
}

@Component({
    selector: 'app-connect',
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
    templateUrl: './connect.component.html',
    styleUrl: './connect.component.scss'
})



export class ConnectComponent implements OnInit, OnDestroy {
  isConnected: boolean = false;
  tenants: Tenant[] = [];
  selectedTenant: string = 'new';
  actualTenant: Tenant | undefined = undefined;
  name: string = '';

  constructor(private router: Router, private dialog: MatDialog, private connectionService: ConnectionService) {

  }

  get authMethodDescription(): string {
    if (!this.actualTenant) return '';
    return this.actualTenant.authType === 'oauth' ? 'OAuth Browser Authentication' : 'Personal Access Token (PAT)';
  }

  get isOAuthMode(): boolean {
    return this.actualTenant?.authType === 'oauth';
  }

  ngOnInit() {
    void this.initializeAsync();
    
    // Add visibility change listener to refresh tenants when returning to the app
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.refreshTenants();
      }
    });
  }

  ngOnDestroy() {
    // Remove event listeners
    document.removeEventListener('visibilitychange', () => {});
  }

  private async initializeAsync() {
    if (this.isConnected === false) {
      //redirect to home page
      this.router.navigate(['/home']).catch((error: any) => {
        console.error('Navigation error:', error);
      });
    }
    
    this.tenants = <Tenant[]>await window.electronAPI.getTenants();
    
    // Set the selected tenant to the active one, or default to 'new' if none are active
    const activeTenant = this.tenants.find(tenant => tenant.active);
    if (activeTenant) {
      this.selectedTenant = activeTenant.name;
      this.actualTenant = activeTenant;
      // Ensure we have the latest auth type for the active tenant
      await this.refreshCurrentTenantAuthType();
    } else {
      this.selectedTenant = 'new';
    }
  }

updateTenant(): void {
  if (this.selectedTenant === 'new') {
    // Navigate to environment configuration for creating a new environment
    this.openEnvironmentConfig();
    return;
  }

  // Find the selected tenant
  this.actualTenant = this.tenants.find(tenant => tenant.name === this.selectedTenant);
  console.log(`Selected tenant:`, this.actualTenant);
  
  // Set the selected environment as active if it exists
  if (this.actualTenant) {
    this.setActiveEnvironment(this.actualTenant.name);
    // Refresh tenant data to ensure we have the latest auth type
    this.refreshCurrentTenantAuthType();
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

  openErrorDialog(errorMessage: string, title: string): void {
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: title,
        message: errorMessage,
      },
    });
  }
  openMessageDialog(errorMessage: string, title: string): void {
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: title,
        message: errorMessage,
      },
    });
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
    this.router.navigate(['/home']).catch((error: any) => {
      console.error('Navigation error:', error);
    });
  }

  async refreshTenants(): Promise<void> {
    try {
      this.tenants = <Tenant[]>await window.electronAPI.getTenants();
      
      // Update selected tenant if the list has changed
      const activeTenant = this.tenants.find(tenant => tenant.active);
      if (activeTenant) {
        this.selectedTenant = activeTenant.name;
        this.actualTenant = activeTenant;
      } else if (this.tenants.length === 0) {
        this.selectedTenant = 'new';
        this.actualTenant = undefined;
      }

      // Refresh auth type for current tenant if one is selected
      if (this.actualTenant) {
        await this.refreshCurrentTenantAuthType();
      }
    } catch (error) {
      console.error('Error refreshing tenants:', error);
      this.openErrorDialog('Failed to refresh environments', 'Environment Error');
    }
  }

  openEnvironmentConfig() {
    this.router.navigate(['/environment-config']).then(() => {
      // After navigation, we might want to refresh when returning
      console.log('Navigated to environment configuration');
    }).catch((error: any) => {
      console.error('Navigation error:', error);
    });
  }
}
