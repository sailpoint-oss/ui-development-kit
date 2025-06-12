import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

export interface MapRow {
  key: string;
  value: string;
}

@Component({
  selector: 'app-map-editor-dialog',
  templateUrl: './map-editor-dialog.component.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatInput],

})
export class MapEditorDialogComponent {
    rows: { key: string, value: string }[] = [];

  constructor(
    public dialogRef: MatDialogRef<MapEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { map: { [key: string]: string } }
  ) {
    this.rows = Object.entries(data.map).map(([key, value]) => ({
        key: key,
        value: value
      }));

  }

  addRow() {
    this.rows = [...this.rows, { key: 'key', value: 'value' }];
}

  removeRow(index: number) {
    this.rows = this.rows.filter((_, i) => i !== index);
}

  save() {
    const updatedMap: { [key: string]: string } = {};
    const seenKeys = new Set<string>();
  
    for (const row of this.rows) {
      const key = row.key.trim();
      if (!key) continue; // skip empty keys
      if (seenKeys.has(key)) {
        alert(`Duplicate key found: "${key}"`);
        return;
      }
      seenKeys.add(key);
      updatedMap[key] = row.value;
    }
  
    this.dialogRef.close(updatedMap);
  }
  

  cancel() {
    this.dialogRef.close();
  }
}
