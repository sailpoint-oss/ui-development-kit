import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  DragDropModule,
  CdkDrag,
  CdkDragDrop,
  transferArrayItem
} from '@angular/cdk/drag-drop';

import { SailPointSDKService } from '../sailpoint-sdk.service';
import type { Jsonpatchoperation } from 'sailpoint-api-client/dist/access_model_metadata/api';
import type { Connectorruleresponse } from 'sailpoint-api-client/dist/connector_rule_management/api';
import type { Source } from 'sailpoint-api-client/dist/sources/api';
import type { SPConfigApiExportSpConfigV1Request, SPConfigApiGetSpConfigExportStatusV1Request, SPConfigApiGetSpConfigExportV1Request } from 'sailpoint-api-client/dist/sp_config/api';

interface Slot {
  key: string;
  label: string;
  patchPath: string;
  patchOp: 'add' | 'replace';
  wrap: 'object' | 'string' | 'array';
  allowedTypes: string[];
}

export interface AvailableRule {
  type: string;
  id: string;
  name: string;
}

export async function getAvailableRules(
  sdk: SailPointSDKService
): Promise<AvailableRule[]> {
  const request: SPConfigApiExportSpConfigV1Request = {
    exportpayload: {
      description: 'Export rules',
      includeTypes: ['RULE', 'CONNECTOR_RULE'],
      objectOptions: {}
    }
  };

  const job = await sdk.exportSpConfigV1(request);
  if (job.status !== 202) {
    console.error('Error fetching rules:', job.data);
    return [];
  }

  // wait for export to finish
  while (true) {
    const statusRequest: SPConfigApiGetSpConfigExportStatusV1Request = {
      id: job.data.jobId
    };
    const { data: status } = await sdk.getSpConfigExportStatusV1(statusRequest);

    if (status.status === 'NOT_STARTED' || status.status === 'IN_PROGRESS') {
      await new Promise(r => setTimeout(r, 3000));
      continue;
    }

    if (status.status === 'COMPLETE') {
      const downloadRequest: SPConfigApiGetSpConfigExportV1Request = {
        id: job.data.jobId
      };
      const { data: exportData } = await sdk.getSpConfigExportV1(downloadRequest);

      const rules: AvailableRule[] = [];

      for (const obj of exportData.objects ?? []) {
        const t = obj.object?.type;
        rules.push({
          type: t,
          id: obj.self?.id ?? '',
          name: obj.self?.name ?? ''
        });
      }

      return rules;
    }

    throw new Error(`Unhandled status: ${status.status}`);
  }
}

const SLOTS: Slot[] = [ // rules and their location data is found (tested with Postman)
  {
    key: 'beforeProvisioningRule',
    label: 'BeforeProvisioning Rule',
    patchPath: '/beforeProvisioningRule',
    patchOp: 'add',
    wrap: 'object',
    allowedTypes: ['BeforeProvisioning', 'Transform']
  },
  {
    key: 'nativeRules',
    label: 'Native Rule',
    patchPath: '/connectorAttributes/nativeRules',
    patchOp: 'add',
    wrap: 'array',
    allowedTypes: [
      'ResourceObjectCustomization', 'ConnectorBeforeModify'
    ]
  },
  {
    key: 'accountCorrelationRule',
    label: 'accountCorrelation Rule',
    patchPath: '/accountCorrelationRule',
    patchOp: 'add',
    wrap: 'object',
    allowedTypes: ['Transform', 'BeforeProvisioning']
  },
  {
    key: 'managerCorrelationRule',
    label: 'managerCorrelation Rule',
    patchPath: '/managerCorrelationRule',
    patchOp: 'replace',
    wrap: 'object',
    allowedTypes: ['Transform', 'BeforeProvisioning']
  },
  {
    key: 'buildMapRule',
    label: 'buildMap Rule',
    patchPath: '/connectorAttributes/buildMapRule',
    patchOp: 'add',
    wrap: 'string',
    allowedTypes: ['BuildMap', 'JDBCBuildMap']
  },
  {
    key: 'jdbcProvisionRule',
    label: 'jdbcProvision Rule',
    patchPath: '/connectorAttributes/jdbcProvisionRule',
    patchOp: 'add',
    wrap: 'string',
    allowedTypes: ['JDBCProvision']
  },
  {
    key: 'saphrModifyProvisioningRule',
    label: 'saphrModifyProvisioning Rule',
    patchPath: '/connectorAttributes/saphrModifyProvisioningRule',
    patchOp: 'add',
    wrap: 'string',
    allowedTypes: ['SapHrOperationProvisioning']
  },
  {
    key: 'beforeRule',
    label: 'Before Rule',
    patchPath: '/connectorAttributes/connectionParameters/{i}/beforeRule',
    patchOp: 'replace',
    wrap: 'string',
    allowedTypes: ['WebServiceBeforeOperationRule']
  },
  {
    key: 'afterRule',
    label: 'After Rule',
    patchPath: '/connectorAttributes/connectionParameters/{i}/afterRule',
    patchOp: 'replace',
    wrap: 'string',
    allowedTypes: ['WebServiceAfterOperationRule']
  }
];

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    DragDropModule,
    MatToolbarModule
],
  templateUrl: './attach-rule.component.html',
  styleUrls: ['./attach-rule.component.scss']
})
export class AttachRuleComponent implements OnInit {
  title = 'Attach Rule';
  sources: Source[] = [];
  connectorRules: AvailableRule[] = [];
  availableRules: AvailableRule[] = [];

  slots = SLOTS;
  slotDropListIds = this.slots.map(s => 'assigned-' + s.key);
  availableConnectedTo = ['available', ...this.slotDropListIds];

  assignedRulesMap: Record<string, AvailableRule[]> = {};
  pendingOps: Jsonpatchoperation[] = [];
  hasConnectionParameters = false;
  initialAssignedMap: Record<string, Set<string>> = {};

  private paramIndexMap: Record<string, number> = {};

  selectedSource: Source | null = null;
  isLoading = false;
  isSaving = false;

  removeAssignedRule(slotKey: string, rule: AvailableRule) {
    const slot = this.slots.find(s => s.key === slotKey);
    if (!slot || !this.selectedSource) return;

    const wasOriginally = this.initialAssignedMap[slotKey]?.has(rule.id) ?? false;

    let path = slot.patchPath;
    if (slot.key === 'beforeRule' || slot.key === 'afterRule') {
      const idx = this.paramIndexMap[slot.key];
      path = path.replace('{i}', `${idx}`);
    } else {
      path = path.replace('{i}', '');
    }

    const pendingIndex = this.pendingOps.findIndex(op => {
      if (op.path !== path) return false;

      if (slot.wrap === 'object'
        && typeof op.value === 'object'
        && op.value !== null
        && 'id' in op.value
        && (op.value as any).id === rule.id) {
        return true;
      }

      if (slot.wrap === 'string' && op.value === rule.name) {
        return true;
      }

      if (slot.wrap === 'array'
        && Array.isArray(op.value)
        && op.value.includes(rule.name)) {
        return true;
      }

      return false;
    });

    if (!wasOriginally && pendingIndex > -1) {
      this.pendingOps.splice(pendingIndex, 1);
    } else {
      // queue a genuine remove
      const rm = this.makeRuleRemovePatch(slot, rule);
      this.pendingOps.push(rm);
    }

    // update the UI
    this.assignedRulesMap[slotKey] = this.assignedRulesMap[slotKey]
      .filter(r => r.id !== rule.id);
    this.availableRules = [rule, ...this.availableRules];
  }

  private makeRulePatch(
    slot: Slot,
    rule: Connectorruleresponse,
    existingNames: string[]
  ): Jsonpatchoperation {
    // pick op based solely on whether the slot was empty
    const op: 'add' | 'replace' = existingNames.length ? 'replace' : 'add';

    // fill in {i} for before/after
    let path = slot.patchPath;
    if ((slot.key === 'beforeRule' || slot.key === 'afterRule') && this.paramIndexMap[slot.key] != null) {
      path = path.replace('{i}', `${this.paramIndexMap[slot.key]}`);
    } else {
      path = path.replace('{i}', '');
    }

    // build the value wrapper
    let value: any;
    if (slot.wrap === 'object') {
      const forceRuleSlots = [
        'accountCorrelationRule',
        'beforeProvisioningRule',
        'managerCorrelationRule'
      ];
      const valueType = forceRuleSlots.includes(slot.key) ? 'RULE' : rule.type;
      value = { type: valueType, id: rule.id, name: rule.name };
    }
    else if (slot.wrap === 'string') {
      value = rule.name;
    }
    else { // array
      value = existingNames.includes(rule.name)
        ? existingNames
        : [...existingNames, rule.name];
    }

    return { op, path, value };
  }

  private makeRuleRemovePatch(
    slot: Slot,
    rule: AvailableRule
  ): Jsonpatchoperation {
    // compute the correct path
    let path: string;
    if (slot.key === 'beforeRule' || slot.key === 'afterRule') {
      const idx = this.paramIndexMap[slot.key];
      path = slot.patchPath.replace('{i}', `${idx}`);
    } else {
      // strip out any {i} for non‑param slots
      path = slot.patchPath.replace('{i}', '');
    }

    if (slot.wrap === 'array') {
      // rebuild the array without this rule
      const existingNames = this.assignedRulesMap[slot.key].map(r => r.name);
      const newNames = existingNames.filter(n => n !== rule.name);
      return { op: 'replace', path, value: newNames };
    }

    return { op: 'remove', path };
  }

  constructor(
    private sdk: SailPointSDKService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    void this.loadInitialData();
  }

  private async loadInitialData(): Promise<void> {
    this.isLoading = true;
    try {
      const [sr, rules] = await Promise.all([
        this.sdk.listSourcesV1(),
        getAvailableRules(this.sdk)
      ]);
      this.sources = sr.data.filter(s => (s.connectorAttributes as any)?.idnProxyType !== 'sp-connect');
      this.connectorRules = rules;
      this.availableRules = [...rules];
    } finally {
      this.isLoading = false;
    }
  }

  async onSourceChange(src: Source): Promise<void> {
    this.selectedSource = src;
    this.isLoading = true;
    this.pendingOps = [];
    this.availableRules = [...this.connectorRules];

    const full2 = await this.sdk.getSourceV1({ id: src.id! })
    const attrs2: any = full2.data.connectorAttributes || {};

    if (attrs2.idnProxyType === 'sp-connect') {
      this.snackBar.open(
        'Rules are not supported for SaaS connectors. Please use SaaS Connector customizers.',
        'Close',
        { duration: 5000 }
      )
    }

    // initialize all slots to empty
    this.assignedRulesMap = {};
    for (const slot of this.slots) {
      this.assignedRulesMap[slot.key] = [];
    }

    // fetch full source and connectorAttributes
    const full = await this.sdk.getSourceV1({ id: src.id! });
    const attrs: any = full.data.connectorAttributes || {};
    const params: any[] = attrs.connectionParameters || [];
    this.hasConnectionParameters = params.length > 0;

    // build index map for beforeRule/afterRule
    this.paramIndexMap = {};
    params.forEach((p) => {
      if (p.sequenceNumberForEndpoint !== undefined) {
        const idx = p.sequenceNumberForEndpoint - 1;
        this.paramIndexMap['beforeRule'] = idx;
        this.paramIndexMap['afterRule'] = idx;
      }
    });

    // populate assignedRulesMap from existing source data
    for (const slot of this.slots) {
      // object‑wrapped slots
      if (['beforeProvisioningRule', 'accountCorrelationRule', 'managerCorrelationRule']
        .includes(slot.key)) {
        const raw = (full.data as any)[slot.key];
        if (raw && raw.id) {
          const match = this.connectorRules.find(r => r.id === raw.id);
          if (match) {
            const connectorRule = match as unknown as Connectorruleresponse;
            this.assignedRulesMap[slot.key] = [connectorRule];
            this.availableRules = this.availableRules.filter(r => r.id !== connectorRule.id);
          }
        }
        continue;
      }

      // string/array or param slots
      let names: string[] = [];
      switch (slot.key) {
        case 'nativeRules':
          names = Array.isArray(attrs.nativeRules) ? attrs.nativeRules : (attrs.nativeRules ? [attrs.nativeRules] : []);
          break;
        case 'buildMapRule':
        case 'jdbcProvisionRule':
        case 'saphrModifyProvisioningRule':
          if (attrs[slot.key]) names = [attrs[slot.key]];
          break;
        case 'beforeRule':
        case 'afterRule': {
          const idx = this.paramIndexMap[slot.key];
          const param = params[idx];
          if (param && [param[slot.key]]) {
            names = [param[slot.key]]
          }
          break;
        }
      }

      const found = names
        .map(n => this.connectorRules.find(r => r.name === n))
        .filter((r): r is Connectorruleresponse => !!r);

      this.assignedRulesMap[slot.key] = found;
      found.forEach(r => {
        this.availableRules = this.availableRules.filter(a => a.id !== r.id);
      });
    }

    // snapshot original assignments
    this.initialAssignedMap = {};
    for (const slot of this.slots) {
      this.initialAssignedMap[slot.key] = new Set(
        (this.assignedRulesMap[slot.key] || []).map(r => r.id)
      );
    }

    this.isLoading = false;
  }
  canEnter(slot: Slot) {
    return (drag: CdkDrag<Connectorruleresponse>) => {
      if ((slot.key === 'beforeRule' || slot.key === 'afterRule')
        && !this.hasConnectionParameters) {
        return false;
      }
      const type = drag?.data?.type;
      return !type || slot.allowedTypes.includes(type);
    };
  }

  onDrop(event: CdkDragDrop<AvailableRule[]>): void {
    if (!this.selectedSource) return;

    const dragged = event.item.data as Connectorruleresponse;
    const prevId = event.previousContainer.id;
    const currId = event.container.id;

    const fromKey = prevId.startsWith('assigned-')
      ? prevId.replace('assigned-', '')
      : undefined;
    const toKey = currId.startsWith('assigned-')
      ? currId.replace('assigned-', '')
      : undefined;

    const fromSlot = this.slots.find(s => s.key === fromKey);
    const toSlot = this.slots.find(s => s.key === toKey);

    if (toSlot && toSlot.wrap !== 'array') {
      const count = this.assignedRulesMap[toSlot.key]?.length ?? 0;
      if (count >= 1) {
        this.snackBar.open(
          `“${toSlot.label}” already has a rule. Remove it before adding another.`,
          'Close',
          { duration: 3000 }
        );
        return;
      }
    }

    if (!toSlot && fromSlot) {
      const slot = fromSlot;
      const wasOriginally = this.initialAssignedMap[slot.key]?.has(dragged.id) ?? false;

      // compute JSON‑Patch path
      let path = slot.patchPath;
      if (slot.key === 'beforeRule' || slot.key === 'afterRule') {
        const idx = this.paramIndexMap[slot.key];
        path = path.replace('{i}', `${idx}`);
      } else {
        path = path.replace('{i}', '');
      }

      // detect a pending “add”/“replace” for this rule
      const pendingIdx = this.pendingOps.findIndex(op => {
        if (op.path !== path) return false;
        if (slot.wrap === 'object'
          && typeof op.value === 'object'
          && op.value !== null
          && 'id' in op.value
          && (op.value as any).id === dragged.id) {
          return true;
        }
        if (slot.wrap === 'string' && op.value === dragged.name) {
          return true;
        }
        if (slot.wrap === 'array'
          && Array.isArray(op.value)
          && op.value.includes(dragged.name)) {
          return true;
        }
        return false;
      });

      if (!wasOriginally && pendingIdx > -1) {
        // undo that “add” patch
        this.pendingOps.splice(pendingIdx, 1);
      } else {
        // queue a remove
        const rm = this.makeRuleRemovePatch(slot, dragged);
        this.pendingOps.push(rm);
      }
    }

    if (toSlot) {
      // invalid before/after
      if ((toSlot.key === 'beforeRule' || toSlot.key === 'afterRule') && !this.hasConnectionParameters) {
        this.snackBar.open(
          'Cannot assign a before-/after-rule: this source has no connectionParameters.',
          'Close',
          { duration: 3000 }
        );
        return;
      }
      // invalid type
      if (!toSlot.allowedTypes.includes(dragged.type)) {
        this.snackBar.open(
          `“${dragged.name}” can’t go in ${toSlot.label}.`,
          'Close',
          { duration: 3000 }
        );
        return;
      }

      const slot = toSlot;
      const wasOriginally = this.initialAssignedMap[slot.key]?.has(dragged.id) ?? false;

      // compute JSON‑Patch path
      let path = slot.patchPath;
      let idx: number | undefined;
      if (slot.key === 'beforeRule' || slot.key === 'afterRule') {
        idx = this.paramIndexMap[slot.key];
        path = path.replace('{i}', `${idx}`);
      } else {
        path = path.replace('{i}', '');
      }

      // detect a pending “remove” for this rule
      const pendingRemoveIdx = this.pendingOps.findIndex(op => {
        if (op.path !== path) return false;
        if (slot.wrap !== 'array' && op.op === 'remove') {
          return true;
        }
        if (slot.wrap === 'array'
          && op.op === 'replace'
          && Array.isArray(op.value)
          && !op.value.includes(dragged.name)) {
          return true;
        }
        return false;
      });

      if (wasOriginally && pendingRemoveIdx > -1) {
        // cancel the remove
        this.pendingOps.splice(pendingRemoveIdx, 1);
      } else {
        // queue an add/replace
        const existingNames = this.assignedRulesMap[slot.key].map(r => r.name);
        this.pendingOps.push(
          this.makeRulePatch(slot, dragged, existingNames)
        );
      }
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    if (fromSlot) {
      this.assignedRulesMap[fromSlot.key] = [...event.previousContainer.data];
    }
    if (toSlot) {
      if (toSlot.wrap === 'array') {
        this.assignedRulesMap[toSlot.key] = [...event.container.data];
      } else {
        // single‑item slot
        const extras = event.container.data.filter(r => r !== dragged);
        this.availableRules.push(...extras);
        this.assignedRulesMap[toSlot.key] = [dragged];
      }
    }
  }

  async applyPatches(): Promise<void> {
    if (!this.selectedSource || !this.pendingOps.length) return;
    this.isSaving = true;

    try {
      for (const op of this.pendingOps) {
        await this.sdk.updateSourceV1({
          id: this.selectedSource.id!,
          jsonpatchoperation: [op]
        });
      }
      await this.onSourceChange(this.selectedSource);
    } finally {
      this.isSaving = false;
      this.pendingOps = [];
    }
  }
}