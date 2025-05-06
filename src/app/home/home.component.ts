import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../shared/connection.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ]
})

export class HomeComponent implements OnInit, OnDestroy {
  isConnected = false;
  loading = false;
  dialogRef: MatDialogRef<GenericDialogComponent> | null = null;
  private configConnectionSubscription: Subscription | null = null;
  constructor(private router: Router, private connectionService: ConnectionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.configConnectionSubscription = this.connectionService.isConnected$.subscribe(connection => {
      this.isConnected = connection.connected;
    });
  }

  ngOnDestroy(): void {

    if (this.configConnectionSubscription) {
      this.configConnectionSubscription.unsubscribe();
      this.configConnectionSubscription = null;
    }
  }

  listIdentities(): void {
    this.openMessageDialog('listed identities', 'success');
  }



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

}
