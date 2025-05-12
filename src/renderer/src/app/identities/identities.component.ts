import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { SailPointSDKService } from "../core/services/electron/sailpoint-sdk.service";
import { MatDialog } from "@angular/material/dialog";
import { IdentityV2025 } from "sailpoint-api-client";
import { GenericDialogComponent } from "../generic-dialog/generic-dialog.component";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-identities",
  imports: [MatTableModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: "./identities.component.html",
  styleUrl: "./identities.component.scss",
})
export class IdentitiesComponent implements OnInit {
  identities: IdentityV2025[] = [];
  displayedColumns: string[] = [];
  loading = false;
  hasDataLoaded = false; // ✅ Track data load state

  constructor(
    private dialog: MatDialog,
    private sdk: SailPointSDKService,
  ) {}

  ngOnInit() {
    void this.loadIdentities();
  }

  async loadIdentities() {
    this.loading = true;
    this.hasDataLoaded = false;

    try {
      const response = await this.sdk.listIdentities();
      this.identities = response.data ?? [];

      if (this.identities.length > 0) {
        this.displayedColumns = Object.keys(this.identities[0]);
      }

      this.hasDataLoaded = true;
    } catch (error) {
      this.openMessageDialog(
        "Error loading identities: " + String(error),
        "Error",
      );
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
}
