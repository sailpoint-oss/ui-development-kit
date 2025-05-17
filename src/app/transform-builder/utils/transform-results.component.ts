import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TransformResult } from './transform-preview.component';

@Component({
  selector: 'app-transform-results',
  templateUrl: './transform-results.component.html',
  styleUrls: ['./transform-results.component.scss'],
  imports: [
    CommonModule,
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
    MatToolbarModule
  ],
  standalone: true
})
export class TransformResultsComponent implements OnInit, OnChanges {
  @Input() results: TransformResult[] = [];
  
  expandedPanels: { [key: string]: boolean } = {};
  displayedColumns: string[] = ['property', 'original', 'transformed'];
  
  constructor() { }

  ngOnInit(): void {
    this.initializeExpandedPanels();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['results'] && changes['results'].currentValue) {
      setTimeout(() => this.initializeExpandedPanels());
    }
  }
  

  /**
   * Initialize expanded state for each result panel
   */
  private initializeExpandedPanels(): void {
    this.expandedPanels = {};
    this.results.forEach(result => {
      this.expandedPanels[result.identityName] = false;
    });
  
    if (this.results.length > 0) {
      setTimeout(() => {
        this.expandedPanels[this.results[0].identityName] = true;
      });
    }
  }
  

  /**
   * Toggle panel expansion state
   */
  togglePanel(identityName: string): void {
    this.expandedPanels[identityName] = !this.expandedPanels[identityName];
  }

  /**
   * Format a value for display in the UI
   */
  formatValue(value: any): string {
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';
    
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    
    return String(value);
  }

  /**
   * Track expanded panels by identity ID
   */
  trackByIdentityId(index: number, result: TransformResult): string {
    return result.identityName;
  }

  /**
   * Track table rows by property name
   */
  trackByProperty(index: number, item: { property: string }): string {
    return item.property;
  }
}
