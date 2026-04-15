import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowSession1NERMRequesterTypeNerm } from 'sailpoint-api-client';
import { EnrichedAssignment, PersonInfo } from '../nerm-dashboard.component';
import { NermStateService } from '../nerm-state.service';
import { NermExtendDialogComponent, ExtendDialogResult } from '../nerm-extend-dialog/nerm-extend-dialog.component';
import { SailPointSDKService } from '../../sailpoint-sdk.service';

@Component({
  selector: 'app-nerm-assignment-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  templateUrl: './nerm-assignment-detail.component.html',
  styleUrl: './nerm-assignment-detail.component.scss',
})
export class NermAssignmentDetailComponent implements OnInit {
  assignment: EnrichedAssignment | undefined;
  person: PersonInfo | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nermState: NermStateService,
    private dialog: MatDialog,
    private sdk: SailPointSDKService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.assignment = this.nermState.getAssignment(id);
    if (this.assignment) {
      this.person = this.nermState.getPerson(this.assignment.personId);
    }
  }

  goBack(): void {
    this.router.navigate(['/nerm-dashboard']);
  }

  extendAssignment(): void {
    if (!this.assignment) return;
    const ref = this.dialog.open(NermExtendDialogComponent, {
      data: { assignment: this.assignment },
      disableClose: false,
    });
    ref.afterClosed().subscribe((result: ExtendDialogResult | undefined) => {
      if (result?.newEndDate && this.assignment) {
        const d = result.newEndDate;
        const endDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
        void this.sdk.submitWorkflowSessionNerm({
          submitWorkflowSessionRequestNERM: {
            workflow_session: {
              workflow_id: 'de103e43-c3dc-4022-b093-1ce1a95f5448',
              requester_id: '6a7dffeb-6bfd-4efa-895b-1a7a2d381700',
              requester_type: WorkflowSession1NERMRequesterTypeNerm.User,
              profile_id: this.assignment.id,
              attributes: { end_date: endDate },
            },
          },
        });
      }
    });
  }

  getRiskClass(score: number): string {
    if (score >= 3) return 'risk-high';
    if (score >= 2) return 'risk-medium';
    return 'risk-low';
  }

  getUrgencyClass(urgency: string): string {
    switch (urgency) {
      case 'critical': return 'urgency-critical';
      case 'warning': return 'urgency-warning';
      case 'ok': return 'urgency-ok';
      default: return 'urgency-safe';
    }
  }

  formatDaysUntil(days: number): string {
    if (days < 0) return `${Math.abs(days)}d overdue`;
    if (days === 0) return 'Expires today';
    return `${days}d remaining`;
  }

  getRiskBarWidth(score: number): number {
    return Math.min((score / 5) * 100, 100);
  }
}
