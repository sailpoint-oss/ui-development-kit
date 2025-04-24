import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { SailPointSDKService } from '../core/services/electron/sailpoint-sdk.service';
import { MatDialog } from '@angular/material/dialog';
import { IdentityV2025 } from 'sailpoint-api-client';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-identities',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './identities.component.html',
  styleUrl: './identities.component.scss'
})
export class IdentitiesComponent {
  identities: IdentityV2025[] = [];
  displayedColumns: string[] = [];


 constructor(private dialog: MatDialog, private sdk: SailPointSDKService) { }
  ngOnInit() {
    this.loadIdentities();
  }

  async loadIdentities() {
    try {
      const response = await this.sdk.listIdentities()
      console.log(response)
      this.identities = response.data
      
      if (this.identities.length > 0) {
        this.displayedColumns = Object.keys(this.identities[0]);
      }

    } catch (error) {
      this.openMessageDialog('Error loading identities: ' + error, 'Error');
    }
  }

    openMessageDialog(errorMessage: string, title: string): void {
      this.dialog.open(GenericDialogComponent, {
        data: {
          title: title,
          message: errorMessage,
        },
      });
    }
  
}
