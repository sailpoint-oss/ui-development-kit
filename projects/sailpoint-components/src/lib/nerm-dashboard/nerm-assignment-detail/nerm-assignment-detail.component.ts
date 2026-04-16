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
import { EnrichedAssignment, PersonInfo } from '../nerm-dashboard.component';
import { ExtendDialogResult, NermExtendDialogComponent } from '../nerm-extend-dialog/nerm-extend-dialog.component';
import { NermStateService } from '../nerm-state.service';

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
