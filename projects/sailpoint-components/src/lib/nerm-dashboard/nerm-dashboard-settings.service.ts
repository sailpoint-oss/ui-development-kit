import { Injectable, signal } from '@angular/core';

/** Full NERM dashboard preferences persisted in localStorage. */
export interface NermDashboardSettings {
  peopleTypeId: string;
  locationTypeId: string;
  departmentTypeId: string;
  organizationTypeId: string;
  assignmentTypeId: string;
  extendAssignmentWorkflowId: string;
  endAssignmentWorkflowId: string;
}

/** Profile type UUID subset used by {@link NermDashboardComponent} data loads. */
export type NermProfileTypeIds = Pick<
  NermDashboardSettings,
  'peopleTypeId' | 'locationTypeId' | 'departmentTypeId' | 'organizationTypeId' | 'assignmentTypeId'
>;

export const DEFAULT_NERM_DASHBOARD_SETTINGS: NermDashboardSettings = {
  peopleTypeId: 'de5cb47c-2fcf-4eb5-8bcf-0316ffd563db',
  locationTypeId: '5d99e6a9-30e1-4cd1-8461-e28414e0d2bf',
  departmentTypeId: 'c27434ef-d2e4-48d2-8526-c5857cae01f6',
  organizationTypeId: '2346d8b3-ac29-4015-8154-dea4404a73fa',
  assignmentTypeId: '978f1283-ca68-4370-9277-dcc51c5f05ca',
  extendAssignmentWorkflowId: 'de103e43-c3dc-4022-b093-1ce1a95f5448',
  endAssignmentWorkflowId: 'c5c89552-805b-41f3-bb32-d24e92b33349',
};

/** Default profile type IDs only; full defaults are {@link DEFAULT_NERM_DASHBOARD_SETTINGS}. */
export const DEFAULT_NERM_PROFILE_TYPE_IDS: NermProfileTypeIds = {
  peopleTypeId: DEFAULT_NERM_DASHBOARD_SETTINGS.peopleTypeId,
  locationTypeId: DEFAULT_NERM_DASHBOARD_SETTINGS.locationTypeId,
  departmentTypeId: DEFAULT_NERM_DASHBOARD_SETTINGS.departmentTypeId,
  organizationTypeId: DEFAULT_NERM_DASHBOARD_SETTINGS.organizationTypeId,
  assignmentTypeId: DEFAULT_NERM_DASHBOARD_SETTINGS.assignmentTypeId,
};

const STORAGE_KEY = 'nerm-dashboard-settings';
const LEGACY_STORAGE_KEY = 'nerm-dashboard-profile-type-ids';

function mergeWithDefaults(partial: Partial<NermDashboardSettings> | null | undefined): NermDashboardSettings {
  const d = DEFAULT_NERM_DASHBOARD_SETTINGS;
  return {
    peopleTypeId: partial?.peopleTypeId?.trim() || d.peopleTypeId,
    locationTypeId: partial?.locationTypeId?.trim() || d.locationTypeId,
    departmentTypeId: partial?.departmentTypeId?.trim() || d.departmentTypeId,
    organizationTypeId: partial?.organizationTypeId?.trim() || d.organizationTypeId,
    assignmentTypeId: partial?.assignmentTypeId?.trim() || d.assignmentTypeId,
    extendAssignmentWorkflowId:
      partial?.extendAssignmentWorkflowId?.trim() || d.extendAssignmentWorkflowId,
    endAssignmentWorkflowId: partial?.endAssignmentWorkflowId?.trim() || d.endAssignmentWorkflowId,
  };
}

@Injectable({ providedIn: 'root' })
export class NermDashboardSettingsService {
  private readonly _settings = signal<NermDashboardSettings>(this.readFromStorage());

  /** Current settings (reactive); same source as {@link getSettings}. */
  readonly dashboardSettings = this._settings.asReadonly();

  getSettings(): NermDashboardSettings {
    return this._settings();
  }

  getProfileTypeIds(): NermProfileTypeIds {
    const s = this._settings();
    return {
      peopleTypeId: s.peopleTypeId,
      locationTypeId: s.locationTypeId,
      departmentTypeId: s.departmentTypeId,
      organizationTypeId: s.organizationTypeId,
      assignmentTypeId: s.assignmentTypeId,
    };
  }

  saveSettings(settings: NermDashboardSettings): void {
    const merged = mergeWithDefaults(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // Quota or private mode — still keep in-memory value
    }
    this._settings.set(merged);
  }

  resetToDefaults(): void {
    this.saveSettings({ ...DEFAULT_NERM_DASHBOARD_SETTINGS });
  }

  private readFromStorage(): NermDashboardSettings {
    try {
      let raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        raw = localStorage.getItem(LEGACY_STORAGE_KEY);
      }
      if (!raw) {
        return { ...DEFAULT_NERM_DASHBOARD_SETTINGS };
      }
      const parsed = JSON.parse(raw) as Partial<NermDashboardSettings>;
      return mergeWithDefaults(parsed);
    } catch {
      return { ...DEFAULT_NERM_DASHBOARD_SETTINGS };
    }
  }
}
