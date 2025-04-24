import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../shared/connection.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';

declare const window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
