import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TransformsV2024ApiUpdateTransformRequest, TransformReadV2024} from 'sailpoint-api-client/dist/v2024/api';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatDialog } from '@angular/material/dialog';

declare const window: any;
@Component({
  selector: 'app-transform-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './transform-generator.component.html',
  styleUrls: ['./transform-generator.component.scss']
})
export class TransformGeneratorComponent implements OnInit {
  transforms: TransformReadV2024[] = [];
  selectedTransform: TransformReadV2024 | null = null;
  transformJson: string = '';
  isNewTransform: boolean = false;
  harborPilotPrompt: string = '';
  isLoading: boolean = false;
  isAiLoading: boolean = false;
  isSaving: boolean = false;

constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.loadTransforms();
  }

  async loadTransforms() {
    this.isLoading = true;
    try {
      this.transforms = await window.electronAPI.getTransforms();
    } catch (error) {
      this.openMessageDialog('Error loading transforms: ' + error, 'Error');
    } finally {
      this.isLoading = false;
    }
  }

  onTransformSelect(transform: TransformReadV2024 | 'new') {
    if (transform === 'new') {
      this.isNewTransform = true;
      this.transformJson = JSON.stringify({
        name: '',
        type: '',
        attributes: null,
        id: '',
        internal: false
      }, null, 2);
    } else {
      this.isNewTransform = false;
      this.selectedTransform = transform;
      this.transformJson = JSON.stringify(transform, null, 2);
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

  async askHarborPilot() {
    this.isAiLoading = true;
    const transformPrompt: string = `based on the following transform:
    ${this.transformJson}
    please provide a new transform that is similar to the one above, but with the following changes:
    ${this.harborPilotPrompt}
    Be sure to only return a json object with the full transform and nothing else.
    Do not include any comments or explanations.
    `

    if (transformPrompt) {
      try {
        const response = await window.electronAPI.harborPilotTransformChat(transformPrompt);
        console.log(response)
        const newTransformJson = response.actions[0].data;
        console.log(newTransformJson)
        this.transformJson = JSON.stringify(newTransformJson, null, 2);
        this.harborPilotPrompt = ''; // Clear the prompt after sending
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