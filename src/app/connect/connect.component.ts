import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule if using mat-button
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component'; // Import the generic dialog
import { ConnectionService } from '../shared/connection.service' // Import the service
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

declare const window: any;


interface Connection {
  connected: boolean;
}
interface Tenant {
  tenantUrl: string;
  authUrl: string;
  clientId: string;
  clientSecret: string;
}

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})



export class ConnectComponent implements OnInit, OnDestroy {
  isConnected: boolean = false;
  tenants: Tenant[] = [];

  constructor(private router: Router, private dialog: MatDialog, private connectionService: ConnectionService) {

  }

  async ngOnInit(): Promise<void> {
    if (this.isConnected === false) {
      //redirect to home page
      this.router.navigate(['/home']).catch((error: any) => {
        console.error('Navigation error:', error);
      });
    }
    this.tenants = <Tenant[]>await window.electronAPI.getTenants();


  }


  ngOnDestroy(): void {

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
    try {
      const connected = <Connection>await window.electronAPI.connectToISC("test", "test", "test");
      console.log('Connected to ISC:', connected);
      this.connectionService.setConnectionState(connected.connected);
      this.isConnected = connected.connected;
    } catch (error) {
      console.error('Error connecting to ISC:', error);
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
}
