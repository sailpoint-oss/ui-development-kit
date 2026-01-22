// Angular core and drag-drop imports
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column-customizer', // Component selector for template usage
  standalone: true, // Allows standalone usage without needing module declarations
  imports: [CommonModule, DragDropModule, MatButtonModule], // Modules needed for this component
  templateUrl: './column-customizer.component.html', // Component template
  styleUrl: './column-customizer.component.scss', // Component styles
})
export class ColumnCustomizerComponent {
  // List of all available columns
  @Input() allColumns: string[] = [];

  // List of currently visible columns
  @Input() displayedColumns: string[] = [];

  // Emits the updated list of displayed columns
  @Output() displayedColumnsChange = new EventEmitter<string[]>();

  // Controls visibility of the selector panel
  showSelector = false;

  // Reference to the selector panel element for click outside detection
  @ViewChild('panelRef') panelRef!: ElementRef;

  // Toggles the visibility of the column selector panel
  toggleSelector(): void {
    this.showSelector = !this.showSelector;
  }

  // Handles drag-and-drop reordering of columns
  dropColumn(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.allColumns, event.previousIndex, event.currentIndex);
    this.syncVisibleColumns(); // Ensure visible column order is also updated
  }

  // Toggles visibility of a specific column
  toggleColumn(column: string): void {
    const index = this.displayedColumns.indexOf(column);

    if (index > -1) {
      // If currently visible, remove from the visible list
      this.displayedColumns.splice(index, 1);
    } else {
      // If not visible, add it
      this.displayedColumns.push(column);
    }

    this.syncVisibleColumns();
  }

  // Check if a column is currently visible
  isDisplayed(column: string): boolean {
    return this.displayedColumns.includes(column);
  }

  // Syncs the order of visible columns and emits the updated list
  syncVisibleColumns(): void {
    const ordered = this.allColumns.filter((col) =>
      this.displayedColumns.includes(col)
    );
    this.displayedColumnsChange.emit([...ordered]);
  }

  // Listens for clicks anywhere on the document
  // If a click happens outside the selector panel and toggle button, close the panel
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (
      this.showSelector &&
      this.panelRef &&
      !this.panelRef.nativeElement.contains(target) &&
      !target.closest('.customizeColumnsToggle')
    ) {
      this.showSelector = false;
    }
  }
}
