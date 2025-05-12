import { Component, OnInit } from "@angular/core";
import {
  TransformReadV2024,
  TransformsV2025ApiUpdateTransformRequest,
  TransformsV2025ApiCreateTransformRequest,
  TransformsV2025ApiDeleteTransformRequest,
} from "sailpoint-api-client";
import { GenericDialogComponent } from "../generic-dialog/generic-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SailPointSDKService } from "../core/services/electron/sailpoint-sdk.service";

@Component({
  selector: "app-devdays-2025",
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./devdays-2025.component.html",
  styleUrl: "./devdays-2025.component.scss",
})
export class Devdays2025Component implements OnInit {
  transforms: TransformReadV2024[] = [];
  selectedTransform: TransformReadV2024 | null = null;
  isLoading: boolean = false;
  dummyTransform: TransformReadV2024 = {
    name: "Create New Transform",
    type: "accountAttribute",
    attributes: null,
    id: "",
    internal: false,
  };
  constructor(
    private dialog: MatDialog,
    private sdk: SailPointSDKService,
  ) {}
  ngOnInit() {
    void this.loadTransforms();
  }
  async loadTransforms() {
    this.isLoading = true;
    try {
      const response = await this.sdk.listTransforms();
      this.transforms = response.data;
      this.transforms.push(this.dummyTransform);
    } catch (error) {
      this.openMessageDialog(
        "Error loading transforms: " + String(error),
        "Error",
      );
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

  transformJson: string = "";
  isNewTransform: boolean = false;
  onTransformSelect(transform: TransformReadV2024) {
    if (transform.id === "") {
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
      const transform: TransformsV2025ApiUpdateTransformRequest = {
        id: transformData.id,
        transformV2025: transformData,
      };
      const createTransform: TransformsV2025ApiCreateTransformRequest = {
        transformV2025: transformData,
      };
      if (this.isNewTransform) {
        await this.sdk.createTransform(createTransform);
      } else {
        await this.sdk.updateTransform(transform);
      }
      this.openMessageDialog("Transform saved successfully!", "Success");
      await this.loadTransforms();
    } catch (error) {
      this.openMessageDialog(
        "Error saving transform: " + String(error),
        "Error",
      );
    } finally {
      this.isSaving = false;
    }
  }

  async deleteTransform() {
    this.isSaving = true;
    try {
      const transformData = JSON.parse(this.transformJson);
      if (this.isNewTransform) {
        this.openMessageDialog("Cannot delete a new transform!", "Error");
        return;
      }

      const transformToDelete: TransformsV2025ApiDeleteTransformRequest = {
        id: transformData.id,
      };
      if (!this.isNewTransform) {
        await this.sdk.deleteTransform(transformToDelete);
      }
      this.openMessageDialog("Transform deleted successfully!", "Success");
      this.selectedTransform = null;
      this.transformJson = "";
      await this.loadTransforms();
    } catch (error) {
      this.openMessageDialog(
        "Error saving transform: " + String(error),
        "Error",
      );
    } finally {
      this.isSaving = false;
    }
  }
}
