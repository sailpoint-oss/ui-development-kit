// Angular core and module imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Search bar component definition
@Component({
  selector: 'app-search-bar', // Component selector for use in templates
  standalone: true,           // Allows this component to be used without needing to be declared in a module
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule], // Modules this component depends on
  templateUrl: './search-bar.component.html', // HTML template file
  styleUrl: './search-bar.component.scss',    // SCSS style file
})
export class SearchBarComponent {
  // Input: full dataset to locally filter against
  @Input() data: any[] = [];

  // Input: placeholder text for the search input
  @Input() placeholder = 'Search...';

  // Output: emits filtered results if local filtering is performed
  @Output() filtered = new EventEmitter<any[]>();

  // Output: emits a search string if API-based search is triggered
  @Output() searchApi = new EventEmitter<string>();

  // Two-way bound model for the input field
  searchQuery = '';

  // Handler called when user types in the search box
  onSearch(query: string): void {
    this.searchQuery = query;
    const lowerQuery = query.trim().toLowerCase();

    // If the search box is cleared, emit the full dataset
    if (!lowerQuery) {
      this.filtered.emit(this.data);
      return;
    }

    // If query is at least 3 characters, trigger remote API search
    if (lowerQuery.length >= 3) {
      this.searchApi.emit(lowerQuery);
      return;
    }

    // Fallback: perform basic local filtering on all item values
    const result = this.data.filter((item) => {
      // Ensure item is a valid object before calling Object.values
      if (item && typeof item === 'object' && item !== null) {
        // Type assertion to Record<string, unknown> for type safety
        return Object.values(item as Record<string, unknown>).some((val) => {
          if (val === null || val === undefined) {
            return false;
          }
    
          if (typeof val === 'object') {
            // Handle objects explicitly (e.g., check specific properties or skip them)
            return false; // Skip objects to avoid default stringification
          }
    
          // Ensure val is a string, number, or boolean before calling .toString()
          if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
            return val.toString().toLowerCase().includes(lowerQuery);
          }

          return false; // Skip unsupported types
        });
      }
      return false;
    });

    this.filtered.emit(result);
  }
}
