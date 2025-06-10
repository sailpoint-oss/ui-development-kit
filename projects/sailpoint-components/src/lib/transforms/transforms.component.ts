import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { TransformReadV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { TransformBuilderComponent } from './transform-builder/transform-builder.component';



@Component({
  selector: 'app-transforms',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatProgressSpinnerModule, MatInputModule, MatButtonModule, TransformBuilderComponent],
  templateUrl: './transforms.component.html',
  styleUrl: './transforms.component.scss'
})
export class TransformsComponent implements OnInit {
    transforms: TransformReadV2025[] = [];
    dataSource: MatTableDataSource<TransformReadV2025> = new MatTableDataSource();
    displayedColumns: string[] = ['id', 'name', 'type', 'internal', 'actions'];
    loading = false;
    hasDataLoaded = false; // ✅ Track data load state
    transform: TransformReadV2025 | undefined;
    editing = false;
  
    constructor(private dialog: MatDialog, private sdk: SailPointSDKService, private router: Router) {}

  
    ngOnInit() {
      this.loadTransforms().catch(err => {
        console.error('Failed to load transforms:', err);
      });
    }
  
    private async loadTransforms(): Promise<void> {
      this.loading = true;
      this.hasDataLoaded = false;
  
      try {
        const response = await this.sdk.listTransforms();
        this.transforms = response.data.filter(transform => transform.internal !== true) ?? [];
        this.dataSource = new MatTableDataSource(this.transforms);
        this.hasDataLoaded = true;
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        this.openMessageDialog(`Error loading transforms: ${message}`, 'Error');
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

  // async onEdit(transform: any) {
  //   await this.router.navigate(['/transform-builder'], { state: { transform } })
  // }

  onEdit(transform?: TransformReadV2025): void {
    this.transform = transform;
    this.editing = true;
  }
  

}
