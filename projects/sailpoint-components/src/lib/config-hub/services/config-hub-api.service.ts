import { Injectable, signal } from '@angular/core';
import { SailPointSDKService } from '../../sailpoint-sdk.service';
import { BackupObject, RestoreResult } from '../models/config-hub.models';

const POLL_INTERVAL_MS = 2000;
const MAX_POLLS = 150; // ~5 minutes
const TERMINAL_STATUSES = new Set(['COMPLETE', 'CANCELLED', 'FAILED']);

@Injectable({ providedIn: 'root' })
export class ConfigHubApiService {
  /** True while an upload or poll is in flight. */
  readonly restoring = signal(false);
  /** Human-readable phase message shown in the restore dialog. */
  readonly restoreStatusMessage = signal('');

  constructor(private sdkService: SailPointSDKService) {}

  // ── Public API ────────────────────────────────────────────────────────────

  /**
   * Restore a single config object — wraps the bundle upload with a
   * descriptive name derived from the object metadata.
   */
  async restore(backupObject: BackupObject, objectContent: any): Promise<RestoreResult> {
    const name = `Restore ${backupObject.objectType} - ${backupObject.name}`;
    console.log('[ConfigHubApiService] restore() single object:', backupObject.objectType, backupObject.objectId);
    return this.runRestore([objectContent], name);
  }

  /**
   * Restore a pre-built bundle of config objects (e.g. all objects changed in
   * a commit).  The caller is responsible for assembling the array.
   */
  async restoreBundle(bundle: any[], name: string): Promise<RestoreResult> {
    console.log('[ConfigHubApiService] restoreBundle():', bundle.length, 'objects, name:', name);
    return this.runRestore(bundle, name);
  }

  // ── Private ───────────────────────────────────────────────────────────────

  private async runRestore(bundle: any[], name: string): Promise<RestoreResult> {
    this.restoring.set(true);
    this.restoreStatusMessage.set('Uploading configuration…');

    try {
      const jsonStr = JSON.stringify(bundle, null, 2);
      console.log('[ConfigHubApiService] Payload size:', jsonStr.length, 'chars,', bundle.length, 'object(s)');

      // File/Blob objects lose prototype methods over Electron IPC structured
      // clone — pass a plain object; the SDK wrapper reconstructs a Blob from it.
      const fileProxy: any = { content: jsonStr, name: `${name}.json`, type: 'application/json' };

      console.log('[ConfigHubApiService] Calling sdkService.createUploadedConfigurationV1…');
      const response = await this.sdkService.createUploadedConfigurationV1({ data: fileProxy as File, name });
      console.log('[ConfigHubApiService] SDK response:', response);

      if (!(response?.status && response.status >= 200 && response.status < 300)) {
        const errDetail = (response?.data as any)?.messages?.[0]?.text
          ?? (response?.data as any)?.detailCode
          ?? response?.statusText
          ?? 'Unknown error';
        console.error('[ConfigHubApiService] Upload failed:', response?.status, errDetail);
        return { success: false, error: `Upload failed (HTTP ${response?.status}): ${errDetail}` };
      }

      const jobId: string | undefined = (response.data as any)?.jobId;
      console.log('[ConfigHubApiService] Upload accepted, jobId:', jobId);

      if (!jobId) {
        return {
          success: true,
          message: `Uploaded to Config Hub as "${name}". Open the SailPoint UI to review and deploy.`,
        };
      }

      const finalStatus = await this.pollUploadStatus(jobId);

      if (finalStatus === 'COMPLETE') {
        return { success: true, message: `Successfully processed by Config Hub as "${name}".` };
      }
      if (finalStatus === 'TIMEOUT') {
        return {
          success: false,
          error: `Upload accepted (job ${jobId}) but did not complete within the timeout. Check Config Hub.`,
        };
      }
      return { success: false, error: `Upload ended with status: ${finalStatus}. Check Config Hub for details.` };

    } catch (error) {
      console.error('[ConfigHubApiService] Caught exception:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error during restore' };
    } finally {
      this.restoring.set(false);
      this.restoreStatusMessage.set('');
    }
  }

  private async pollUploadStatus(jobId: string): Promise<string> {
    for (let attempt = 1; attempt <= MAX_POLLS; attempt++) {
      await new Promise<void>(resolve => setTimeout(resolve, POLL_INTERVAL_MS));
      try {
        const res = await this.sdkService.getUploadedConfigurationV1({ id: jobId });
        const status = (res?.data as any)?.status as string | undefined;
        console.log(`[ConfigHubApiService] Poll ${attempt}/${MAX_POLLS}: status =`, status);
        this.restoreStatusMessage.set(`Processing… ${status ?? 'checking'} (${attempt}/${MAX_POLLS})`);
        if (status && TERMINAL_STATUSES.has(status)) return status;
      } catch (err) {
        console.warn('[ConfigHubApiService] Poll error (will retry):', err);
        this.restoreStatusMessage.set(`Polling… (attempt ${attempt}/${MAX_POLLS})`);
      }
    }
    return 'TIMEOUT';
  }
}
