import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { SailPointSDKService } from '../../sailpoint-sdk.service';

// Quartz → human-readable descriptions
import cronstrue from 'cronstrue';

export interface SourceActionsDialogData {
    sourceId: string;
    sourceName: string;
    connectorName?: string;
    schedules?: any[];
    scheduleByType?: Record<string, any>;
    averageAggregationTime?: number | null;
    averageAccountAggregationTime?: number | null;
    averageEntitlementAggregationTime?: number | null;
}

@Component({
    selector: 'app-source-actions-dialog',
    standalone: true,
    templateUrl: './source-actions-dialog.component.html',
    styleUrls: ['./source-actions-dialog.component.scss'],
    imports: [
        CommonModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSnackBarModule
    ]
})
export class SourceActionsDialogComponent implements OnInit {
    busy = signal<boolean>(false);
    schedForm: FormGroup;

    /** Live human-readable preview of the cron expression in the form */
    cronPreview = '';
    
    /** Checkbox state for account optimization option */
    unoptimizedAccount = false;
    
    /** Track if the current cron expression has been validated and previewed */
    isPreviewed = signal<boolean>(false);
    
    /** Track if there's a validation error with the current cron expression */
    cronValidationError = signal<string | null>(null);

    // Debug configuration - enable/disable debug logging for different components
    // Set individual flags to true when debugging specific components, false for production
    private debugConfig = {
        scheduleManagement: true,  // Schedule save/disable/enable operations
        cronParsing: false,        // CRON expression parsing and validation
        formHandling: false,       // Form operations and validation
        apiCalls: true,           // API calls to SailPoint SDK - ENABLED for debugging
        general: false            // General dialog operations
    };

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: SourceActionsDialogData,
        private ref: MatDialogRef<SourceActionsDialogComponent>,
        private fb: FormBuilder,
        private sdk: SailPointSDKService,
        private snack: MatSnackBar
    ) {
        // Account-only for now
        this.schedForm = this.fb.group({
            cronExpression: ['', [this.requiredValidator]]
        });

        // Prefill cron if present for account schedule
        const acct = this.getAccountCron();
        if (acct) this.schedForm.patchValue({ cronExpression: acct });
    }

    // Custom validator to avoid unbound method issue
    private requiredValidator = (control: AbstractControl) => Validators.required(control);

    // Debug logging method for terminal output
    debugLog(message: string, component: keyof typeof this.debugConfig = 'general'): void {
        if (!this.debugConfig[component]) {
            return; // Skip debug logging when this component's debug mode is disabled
        }
        
        const timestampedMessage = `[SOURCE-ACTIONS DEBUG - ${component.toUpperCase()}] ${new Date().toLocaleTimeString()}: ${message}`;
        console.log(timestampedMessage);

        // Send to main process for terminal logging (if in Electron environment)
        if (typeof window !== 'undefined' && (window as any).electronAPI?.logToMain) {
            (window as any).electronAPI.logToMain(timestampedMessage);
        }
    }

    ngOnInit(): void {
        // Initialize and keep the human-readable preview in sync
        const cronCtrl = this.schedForm.get('cronExpression');

        this.cronPreview = this.toHumanReadableCron(cronCtrl?.value as string, {
            use24Hour: false
        });

        cronCtrl?.valueChanges.subscribe((val: string) => {
            this.debugLog(`CRON expression changed: ${val}`, 'cronParsing');
            this.cronPreview = this.toHumanReadableCron(val, { use24Hour: false });
            this.debugLog(`CRON preview updated: ${this.cronPreview}`, 'cronParsing');
            
            // Reset preview state when cron expression changes
            this.isPreviewed.set(false);
            this.cronValidationError.set(null);
        });
    }

    // ────────────────────────────────────────────────────────────────────────────
    // Helpers
    // ────────────────────────────────────────────────────────────────────────────

    /** Original cron for account schedule (still available for tooltips/debug) */
    getAccountCron(): string | null {
        const byType = this.data.scheduleByType ?? {};
        if (byType['ACCOUNT_AGGREGATION']?.cronExpression) {
            return String(byType['ACCOUNT_AGGREGATION'].cronExpression);
        }
        const list = this.data.schedules ?? [];
        const found = list.find(
            (s: any) => (s?.type || '').toUpperCase() === 'ACCOUNT_AGGREGATION'
        );
        return found?.cronExpression ? String(found.cronExpression) : null;
    }

    /** Human label for "Current Schedule (Account)" section */
    getAccountScheduleLabel(): string {
        const cron = this.getAccountCron(); // string | null

        return this.toHumanReadableCron(cron ?? undefined, {
            use24Hour: true
        });
    }

    /**
     * Convert Quartz cron → human readable, including SailPoint's "hours in day-of-month" pattern.
     *
     * - SailPoint variant: `0 0 0 <hours> * ?`  (hours encoded in day-of-month)
     *   → "Every day at H:00 …"
     * - Otherwise use cronstrue for generic Quartz parsing (6/7 fields).
     */
    toHumanReadableCron(
        expr?: string,
        opts?: { use24Hour?: boolean }
    ): string {
        if (!expr || typeof expr !== 'string' || !expr.trim()) return '—';

        const parts = expr.trim().split(/\s+/);

        // Handle SailPoint’s “hours in DOM” special case first
        if (parts.length >= 6) {
            const [sec, min, hr, dom, mon, dow] = parts;
            const sailpointHoursInDom =
                sec === '0' &&
                min === '0' &&
                hr === '0' &&
                mon === '*' &&
                (dow === '?' || dow === '*') &&
                dom &&
                dom !== '*';

            if (sailpointHoursInDom) {
                const hours = this.parseHourList(dom);
                if (hours.length) {
                    const times = hours
                        .sort((a, b) => a - b)
                        .map(h => this.formatHour(h, !!opts?.use24Hour))
                        .join(', ');
                    return `Every day at ${times}`;
                }
            }
        }

        // Generic Quartz humanization via cronstrue
        try {
            const text: string = cronstrue.toString(expr, {
                use24HourTimeFormat: !!opts?.use24Hour,
                verbose: false,
                dayOfWeekStartIndexZero: false // Quartz format: 1=Sunday, 2=Monday, ..., 7=Saturday
            });
            return text;
        } catch {
            // If parsing fails, fall back to the raw expression
            return expr;
        }
    }

    /** Parse comma/range hour lists like "1,5,9,13" or "8-17" into hour numbers */
    private parseHourList(expr: string): number[] {
        const out: number[] = [];
        expr.split(',').forEach(part => {
            if (part.includes('-')) {
                const [a, b] = part.split('-').map(Number);
                if (Number.isFinite(a) && Number.isFinite(b)) {
                    for (let h = Math.min(a, b); h <= Math.max(a, b); h++) out.push(h);
                }
            } else {
                const h = Number(part);
                if (Number.isFinite(h)) out.push(h);
            }
        });
        return out.filter(h => h >= 0 && h <= 23);
    }

    private formatHour(h: number, use24: boolean): string {
        if (use24) return `${String(h).padStart(2, '0')}:00`;
        const hour12 = ((h + 11) % 12) + 1;
        const ampm = h < 12 ? 'AM' : 'PM';
        return `${hour12}:00 ${ampm}`;
    }

    formatDuration(ms?: number | null): string {
        if (ms == null) return '—';
        const s = Math.floor(ms / 1000),
            m = Math.floor(s / 60),
            h = Math.floor(m / 60);
        return h > 0 ? `${h}h ${m % 60}m` : m > 0 ? `${m}m ${s % 60}s` : `${s}s`;
    }

    // ────────────────────────────────────────────────────────────────────────────
    // Preview and Validation
    // ────────────────────────────────────────────────────────────────────────────

    previewCronExpression(): void {
        const cronExpression = this.schedForm.get('cronExpression')?.value;
        
        if (!cronExpression || !cronExpression.trim()) {
            this.cronValidationError.set('Cron expression is required');
            this.isPreviewed.set(false);
            return;
        }

        try {
            // Validate the cron expression by trying to parse it
            const preview = this.toHumanReadableCron(cronExpression as string, { use24Hour: false });
            
            if (preview === '—' || preview === cronExpression) {
                // If we get the raw expression back, it means parsing failed
                this.cronValidationError.set('Invalid cron expression format');
                this.isPreviewed.set(false);
            } else {
                // Success - update the preview and mark as validated
                this.cronPreview = preview;
                this.cronValidationError.set(null);
                this.isPreviewed.set(true);
                this.debugLog(`Cron expression validated: ${cronExpression} → ${preview}`, 'cronParsing');
            }
        } catch (error) {
            this.cronValidationError.set('Invalid cron expression format');
            this.isPreviewed.set(false);
            this.debugLog(`Cron validation error: ${String(error)}`, 'cronParsing');
        }
    }

    // ────────────────────────────────────────────────────────────────────────────
    // Actions (account-only)
    // ────────────────────────────────────────────────────────────────────────────

    async saveSchedule(): Promise<void> {
        if (this.schedForm.invalid) return;
        
        // Ensure the cron expression has been previewed and validated
        if (!this.isPreviewed()) {
            this.snack.open('Please preview the cron expression before saving', 'OK', { duration: 3000 });
            return;
        }
        
        this.busy.set(true);
        const { cronExpression } = this.schedForm.value;

        this.debugLog(`Starting saveSchedule for source ${this.data.sourceId}`, 'scheduleManagement');
        this.debugLog(`Cron expression: ${cronExpression}`, 'scheduleManagement');

        try {
            const exists = !!this.getAccountCron();
            this.debugLog(`Schedule exists: ${exists}`, 'scheduleManagement');

            if (exists) {
                // Update using JSON Patch
                const patchOps: Array<{
                    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
                    path: string;
                    value?: any;
                }> = [];

                if (cronExpression != null && cronExpression !== '') {
                    patchOps.push({ op: 'replace', path: '/cronExpression', value: cronExpression });
                }

                this.debugLog(`Patch operations: ${JSON.stringify(patchOps)}`, 'apiCalls');

                this.debugLog(`Updating existing schedule with ${patchOps.length} patch operations`, 'apiCalls');
                const updateResult = await this.sdk.updateSourceSchedule({
                    sourceId: this.data.sourceId,
                    scheduleType: 'ACCOUNT_AGGREGATION',
                    jsonPatchOperationV2025: patchOps
                });
                
                this.debugLog(`Update result status: ${updateResult?.status}`, 'apiCalls');

                if (updateResult && updateResult.data) {
                    this.debugLog(`Successfully updated schedule`, 'apiCalls');
                } else {
                    throw new Error('Update schedule returned no data');
                }
            } else {
                this.debugLog(`Creating new schedule via API call`, 'apiCalls');
                const createResult = await this.sdk.createSourceSchedule({
                    sourceId: this.data.sourceId,
                    schedule1V2025: {
                        type: "ACCOUNT_AGGREGATION",
                        cronExpression: cronExpression
                    }
                });
                
                if (createResult && createResult.data) {
                    this.debugLog(`Successfully created new schedule`, 'apiCalls');
                } else {
                    throw new Error('Create schedule returned no data');
                }
            }

            this.snack.open('Account schedule saved', 'OK', { duration: 2500 });
            this.ref.close(true);
        } catch (e: any) {
            this.debugLog(`Error in saveSchedule: ${e?.message || e}`, 'apiCalls');
            this.debugLog(`Error details: ${JSON.stringify(e?.response?.data || e)}`, 'apiCalls');
            
            // Extract more detailed error information
            let errorMessage = 'Failed to save schedule';
            if (e?.response?.data?.messages && Array.isArray(e.response.data.messages)) {
                errorMessage = e.response.data.messages.join(', ');
            } else if (e?.message) {
                errorMessage = e.message;
            } else if (e?.response?.data?.detailCode) {
                errorMessage = e.response.data.detailCode;
            }
            
            this.snack.open(errorMessage, 'Dismiss', { duration: 5000 });
        } finally {
            this.busy.set(false);
        }
    }

    async disableSchedule(): Promise<void> {
        this.busy.set(true);
        this.debugLog(`Starting deleteSchedule for source ${this.data.sourceId}`, 'scheduleManagement');
        
        try {
            const exists = !!this.getAccountCron();
            this.debugLog(`Schedule exists: ${exists}`, 'scheduleManagement');
            
            if (!exists) {
                this.debugLog(`No schedule found to disable`, 'scheduleManagement');
                this.snack.open('No account schedule found to disable.', 'OK', { duration: 3000 });
                return;
            }

            this.debugLog(`Deleting schedule via API call`, 'apiCalls');
            const deleteResult = await this.sdk.deleteSourceSchedule({
                sourceId: this.data.sourceId,
                scheduleType: 'ACCOUNT_AGGREGATION'
            });
            
            // Check if deletion was successful (some APIs return 204 No Content for successful deletes)
            if (deleteResult !== undefined) {
                this.debugLog(`Successfully deleted schedule`, 'apiCalls');
            } else {
                throw new Error('Delete schedule returned no confirmation');
            }

            this.snack.open('Account schedule deleted', 'OK', { duration: 2500 });
            this.ref.close(true);
        } catch (e: any) {
            this.debugLog(`Error in disableSchedule: ${e?.message || e}`, 'apiCalls');
            this.debugLog(`Error details: ${JSON.stringify(e?.response?.data || e)}`, 'apiCalls');
            
            // Extract more detailed error information
            let errorMessage = 'Failed to delete schedule';
            if (e?.response?.data?.messages && Array.isArray(e.response.data.messages)) {
                errorMessage = e.response.data.messages.join(', ');
            } else if (e?.message) {
                errorMessage = e.message;
            } else if (e?.response?.data?.detailCode) {
                errorMessage = e.response.data.detailCode;
            }
            
            this.snack.open(errorMessage, 'Dismiss', { duration: 5000 });
        } finally {
            this.busy.set(false);
        }
    }

    async runAccountAgg(): Promise<void> {
        this.busy.set(true);
        try {
            const options: { id: string; disableOptimization?: string } = { id: this.data.sourceId };
            if (this.unoptimizedAccount) {
                options.disableOptimization = 'true';
            }
            
            const resp = await this.sdk.importAccounts(options);
            const task = resp?.data as any;
            const taskId = task?.id ?? task?.task?.id ?? '—';
            const optimizationText = this.unoptimizedAccount ? ' (unoptimized)' : '';
            this.snack.open(`Account aggregation${optimizationText} started (task ${taskId})`, 'OK', { duration: 3000 });
            this.ref.close(true);
        } catch (e: any) {
            this.snack.open(`Failed to start account aggregation: ${e?.message ?? e}`, 'Dismiss', {
                duration: 5000
            });
        } finally {
            this.busy.set(false);
        }
    }

    async runEntitlementAgg(): Promise<void> {
        this.busy.set(true);
        try {
            const resp = await this.sdk.importEntitlements({ sourceId: this.data.sourceId });
            const task = resp?.data as any;
            const taskId = task?.id ?? task?.task?.id ?? '—';
            this.snack.open(`Entitlement aggregation started (task ${taskId})`, 'OK', { duration: 3000 });
            this.ref.close(true);
        } catch (e: any) {
            this.snack.open(`Failed to start entitlement aggregation: ${e?.message ?? e}`, 'Dismiss', {
                duration: 5000
            });
        } finally {
            this.busy.set(false);
        }
    }

    close(): void {
        this.ref.close(false);
    }

}