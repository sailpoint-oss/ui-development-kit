import { Component } from '@angular/core';
import { TransformReadV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from '../core/services/electron/sailpoint-sdk.service';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-transforms',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatProgressSpinnerModule, MatInputModule, MatButtonModule],
  templateUrl: './transforms.component.html',
  styleUrl: './transforms.component.scss'
})
export class TransformsComponent {
    transforms: TransformReadV2025[] = [];
    dataSource: MatTableDataSource<TransformReadV2025> = new MatTableDataSource();
    displayedColumns: string[] = ['id', 'name', 'type', 'internal', 'actions'];
    loading = false;
    hasDataLoaded = false; // ✅ Track data load state
  
    constructor(private dialog: MatDialog, private sdk: SailPointSDKService, private router: Router) {}

  
    ngOnInit() {
      this.loadIdentities();
    }
  
    async loadIdentities() {
      this.loading = true;
      this.hasDataLoaded = false;
  
      try {
        const response = await this.sdk.listTransforms();
        this.transforms = response.data.filter( transform => transform.internal !== true) ?? [];
        this.dataSource = new MatTableDataSource(this.transforms);
        this.hasDataLoaded = true;
      } catch (error) {
        this.openMessageDialog('Error loading transforms: ' + error, 'Error');
      } finally {
        this.loading = false;
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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(transform: any) {
    this.router.navigate(['/transform-builder'], { state: { transform } });
  }

}
