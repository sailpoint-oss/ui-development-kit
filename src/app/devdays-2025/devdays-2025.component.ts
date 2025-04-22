import { Component, OnInit } from '@angular/core';
import { TransformReadV2024, TransformsV2024ApiUpdateTransformRequest } from 'sailpoint-api-client';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
declare const window: any;
@Component({
  selector: 'app-devdays-2025',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './devdays-2025.component.html',
  styleUrl: './devdays-2025.component.scss'
})
export class Devdays2025Component {
  transforms: TransformReadV2024[] = [];
  selectedTransform: TransformReadV2024 | null = null;
  isLoading: boolean = false;
  dummyTransform: TransformReadV2024 = {
    name: 'Create New Transform',
    type: 'accountAttribute',
    attributes: null,
    id: '',
    internal: false
  }
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.loadTransforms();
  }
  async loadTransforms() {
    this.isLoading = true;
    try {
      this.transforms = await window.electronAPI.getTransforms();
      this.transforms.push(this.dummyTransform);
    } catch (error) {
      this.openMessageDialog('Error loading transforms: ' + error, 'Error');
    } finally {
      this.isLoading = false;
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

  transformJson: string = '';
  isNewTransform: boolean = false;
  onTransformSelect(transform: TransformReadV2024) {
    if (transform.id === '') {
      this.isNewTransform = true;
    } else {
      this.isNewTransform = false;
    }
    
    this.selectedTransform = transform;
    this.transformJson = JSON.stringify(transform, null, 2);
  }



  isSaving: boolean = false;
  async saveTransform() {
    this.isSaving = true;
    try {
      const transformData = JSON.parse(this.transformJson);
      let transform: TransformsV2024ApiUpdateTransformRequest = {
        id: transformData.id,
        transformV2024: transformData
      }
      if (this.isNewTransform) {
        await window.electronAPI.createTransform(transform);
      } else {
        await window.electronAPI.updateTransform(transform);
      }
      this.openMessageDialog('Transform saved successfully!', 'Success');
      this.loadTransforms();
    } catch (error) {
      this.openMessageDialog('Error saving transform: ' + error, 'Error');
    } finally {
      this.isSaving = false;
    }
  }



  
  harborPilotPrompt: string = '';
  isAiLoading: boolean = false;
  async askHarborPilot() {
    this.isAiLoading = true;
    const transformPrompt: string = `based on the following transform:
    ${this.transformJson}
    please provide a new transform that is similar to the one above, but with the following changes:
    ${this.harborPilotPrompt}
    `

    if (transformPrompt) {
      try {
        const response = await window.electronAPI.harborPilotTransformChat(transformPrompt);
        console.log(response)
        const newTransformJson = response.actions[0].data;
        console.log(newTransformJson)
        this.transformJson = JSON.stringify(newTransformJson, null, 2);
        this.harborPilotPrompt = ''; 
      } catch (error) {
        this.openMessageDialog('Error communicating with Harbor Pilot: ' + error, 'Error');
      } finally {
        this.isAiLoading = false;
      }
    } else {
      this.isAiLoading = false;
      this.openMessageDialog('Please enter a question for Harbor Pilot.', 'Error');
    }
  }
}
