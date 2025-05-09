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
  selector: 'transform-results',
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
   * Get property pairs for display in table
   */
//   getPropertyPairs(result: TransformResult): { property: string, original: any, transformed: any }[] {
//     const allProperties = new Set([
//       ...Object.keys(result.originalData || {}),
//       ...Object.keys(result.transformedData || {})
//     ]);
    
//     return Array.from(allProperties).map(property => ({
//       property,
//       original: result.originalData?.[property],
//       transformed: result.transformedData?.[property]
//     }));
//   }

  /**
   * Check if a value has been changed in the transform
   */
  isValueChanged(original: any, transformed: any): boolean {
    if (original === transformed) return false;
    
    // Deep comparison for objects
    if (typeof original === 'object' && typeof transformed === 'object') {
      // Handle null cases
      if (original === null || transformed === null) return original !== transformed;
      
      if (Array.isArray(original) && Array.isArray(transformed)) {
        if (original.length !== transformed.length) return true;
        for (let i = 0; i < original.length; i++) {
          if (this.isValueChanged(original[i], transformed[i])) return true;
        }
        return false;
      }
      
      const keys1 = Object.keys(original);
      const keys2 = Object.keys(transformed);
      
      if (keys1.length !== keys2.length) return true;
      
      for (const key of keys1) {
        if (this.isValueChanged(original[key], transformed[key])) return true;
      }
      
      return false;
    }
    
    return true;
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
