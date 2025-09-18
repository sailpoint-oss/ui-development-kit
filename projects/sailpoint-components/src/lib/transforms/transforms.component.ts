import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  TransformReadV2025,
  TransformsV2025ApiDeleteTransformRequest
} from 'sailpoint-api-client';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import { TransformBuilderComponent } from './transform-builder/transform-builder.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TemplateRef, ChangeDetectorRef } from '@angular/core'

interface UsageResult {
  kind: 'identityProfile' | 'provisioningPolicy' | 'transform';

  // identity
  profileId?: string;
  profileName?: string;
  identityAttributeName?: string;

  // policy
  sourceId?: string;
  sourceName?: string;
  policyIdOrName?: string;
  policyType?: string;
  fieldName?: string;

  // transform
  transformId?: string;
  transformName?: string;

  propertyPath: string;
}

interface UsageNode {
  name: string;
  children?: UsageNode[];
}

interface RefNode {
  id?: string;
  attributes?: {
    id?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}


@Component({
  selector: 'app-transforms',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    TransformBuilderComponent,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './transforms.component.html',
  styleUrl: './transforms.component.scss',
})
export class TransformsComponent implements OnInit {
  title = 'Transforms';
  transforms: TransformReadV2025[] = [];
  dataSource: MatTableDataSource<TransformReadV2025> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'type', 'internal', 'actions'];
  loading = false;
  hasDataLoaded = false; // ✅ Track data load state
  transform: TransformReadV2025 | undefined;
  editing = false;
  @ViewChild(TransformBuilderComponent)
  transformBuilder?: TransformBuilderComponent;

  scanning = false;
  usageResults: UsageResult[] = [];
  totalProfiles = 0;
  profilesChecked = 0;
  totalPolicies = 0;
  policiesChecked = 0;
  @ViewChild('scanProgressDialog') scanProgressTpl!: TemplateRef<any>;
  private progressRef?: MatDialogRef<any>;
  totalTransforms = 0;
  transformsChecked = 0;
  CHECK_DELAY_MS = 200;

  currentPhase = '';
  currentPhaseCount = 0;
  currentPhaseTotal = 0;

  grandTotal = 0;
  grandProgress = 0;

  constructor(
    private dialog: MatDialog,
    private sdk: SailPointSDKService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    void this.loadTransforms();
  }

  private async loadTransforms(): Promise<void> {
    this.loading = true;
    this.hasDataLoaded = false;

    try {
      const response = await this.sdk.listTransforms();
      this.transforms =
        response.data.filter((transform) => transform.internal !== true) ?? [];
      this.dataSource = new MatTableDataSource(this.transforms);
      this.hasDataLoaded = true;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      this.openMessageDialog(`Error loading transforms: ${message}`, 'Error');
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // async onEdit(transform: any) {
  //   await this.router.navigate(['/transform-builder'], { state: { transform } })
  // }

  confirmBack(): void {
    if (this.transformBuilder?.hasUnsavedChanges) {
      const dialogRef = this.dialog.open(GenericDialogComponent, {
        width: '400px',
        data: {
          title: 'Unsaved Changes',
          message: 'You have unsaved changes. Do you want to save them before leaving?',
          confirmText: 'Save',
          cancelText: 'Discard',
          neutralText: 'Cancel',
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'confirm') {
          void this.transformBuilder?.saveToCloud?.();
          this.editing = false;
        } else if (result === 'discard') {
          this.transformBuilder?.discardLocalChanges();
          this.editing = false;
        }
      });
    } else {
      this.editing = false;
    }
  }

  onEdit(transform?: TransformReadV2025): void {
    if (transform?.type === 'usernameGenerator') {
      this.dialog.open(GenericDialogComponent, {
        data: {
          title: 'Not Supported',
          message:
            'The usernameGenerator transform type cannot be edited using the transform builder.',
        },
      });
      return;
    }

    this.transform = transform;
    this.editing = true;
  }

  onDelete(transform: TransformReadV2025): void {
    this.dialog
      .open(GenericDialogComponent, {
        data: {
          title: 'Delete Transform',
          message: `Are you sure you want to delete the transform "${transform.name}"? This action cannot be undone.`,
          showCancel: true,
          cancelText: 'Cancel',
          confirmText: 'Yes',
          isConfirmation: true,
        },
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('Deleting transform:', transform);

          const transformDeleteRequest: TransformsV2025ApiDeleteTransformRequest = {
            id: transform.id,
          };
          void this.sdk.deleteTransform(transformDeleteRequest).then(() => {
            this.transforms =
              this.transforms.filter(
                (transformFilter) =>
                  transformFilter.internal !== true &&
                  transformFilter.id !== transform.id
              ) ?? [];
            this.dataSource = new MatTableDataSource(this.transforms);
            this.hasDataLoaded = true;
            this.snackBar.open(
              `${transform.name} transform successfully deleted`,
              'Close',
              { duration: 3000 }
            );
          }).catch((error: unknown) => {
            const message =
              error instanceof Error ? error.message : String(error);
            this.openMessageDialog(
              `Error deleting transform: ${message}`,
              'Error'
            );
          }).finally(() => {
            this.loading = false;
          });
        }
      });
  }

  private buildUsageTree(): UsageNode[] {
    const roots: Record<string, UsageNode> = {};

    const getOrAdd = (parent: UsageNode, label: string): UsageNode => {
      parent.children ??= [];
      let n = parent.children.find(c => c.name === label);
      if (!n) {
        n = { name: label, children: [] };
        parent.children.push(n);
      }
      return n;
    };

    const push = (rootKey: string, entryName: string, childName: string) => {
      roots[rootKey] ??= { name: rootKey, children: [] };
      const entryNode = getOrAdd(roots[rootKey], entryName);
      entryNode.children!.push({ name: childName });
    };

    for (const u of this.usageResults) {
      switch (u.kind) {
        case 'identityProfile': {
          push(
            'Identity Profiles',
            `${u.profileName} / ${u.identityAttributeName}`,
            u.propertyPath
          );
          break;
        }

        case 'provisioningPolicy': {
          const policyLabel =
            `${u.sourceName} / ${u.policyIdOrName}` +
            (u.fieldName ? ` / ${u.fieldName}` : '');
          push('Provisioning Policies', policyLabel, u.propertyPath);
          break;
        }

        case 'transform': {
          // extract the attribute segment from the path
          const attr = u.propertyPath.split('.')[0];
          // entryName stays the transform’s name, child shows the actual attribute
          push(
            'Transforms',
            u.transformName ?? '<Unknown Transform>',
            `attributes.${attr}`
          );
          break;
        }
      }
    }

    return Object.values(roots);
  }

  private async listWithRetry(sourceId: string, retries = 5): Promise<any[]> {
    try {
      const resp = await this.sdk.listProvisioningPolicies({ sourceId });
      return resp.data ?? [];
    } catch (err: any) {
      if (err.response?.status === 429 && retries > 0) {
        const retryHeader = err.response.headers['retry-after'];
        const wait = parseInt(
          typeof retryHeader === 'string' ? retryHeader : '1',
          10
        );
        await new Promise(r => setTimeout(r, wait * 1000));
        return this.listWithRetry(sourceId, retries - 1);
      }
      throw err;
    }
  }

  get totalItems() {
    return this.totalProfiles + this.totalPolicies + this.totalTransforms;
  }

  get totalProgress(): number {
    return this.totalItems ? ((this.profilesChecked + this.policiesChecked + this.transformsChecked) / this.totalItems) * 100 : 0;
  }

  async onSafeDelete(transform: TransformReadV2025): Promise<void> {
    const name = transform.name || '<Unnamed>';

    const doScan = await firstValueFrom(
      this.dialog.open(GenericDialogComponent, {
        data: {
          title: 'Safe Delete?',
          message: `Scan profiles & policies before deleting "${name}"?`,
          confirmText: 'Scan',
          cancelText: 'Cancel',
          showCancel: true,
          isConfirmation: true,
        },
      }).afterClosed()
    );
    if (!doScan) {
      return;
    }

    this.scanning = true;
    this.usageResults = [];

    this.currentPhase = 'Initializing';
    this.grandProgress = 0;
    this.currentPhaseTotal = 0;
    this.progressRef = this.dialog.open(this.scanProgressTpl, { disableClose: true});
    this.cdr.detectChanges();

    // compute totals
    const [pr, sr, tr] = await Promise.all([
      this.sdk.listIdentityProfiles(),
      this.sdk.listSources(), 
      this.sdk.listTransforms()
    ]);
    this.totalProfiles = (pr.data ?? []).length;
    this.totalPolicies = 0;
    for (const s of sr.data ?? []) {
      this.totalPolicies += (await this.listWithRetry(s.id!)).length;
    }
    this.totalTransforms = (tr.data ?? []).filter(t => t.id !== transform.id).length;
    this.grandTotal = this.totalProfiles + this.totalPolicies + this.totalTransforms;

    try {
      await this.scanIdentityProfiles(transform.name);

      await this.scanProvisioningPolicies(transform.name);

      await this.scanTransformsForReferences(transform);

    } finally {
      this.cleanupScan();
    }

    if (this.usageResults.length) {
      this.dialog.open(GenericDialogComponent, {
        maxWidth: '70vw',
        data: {
          title: 'Cannot Delete Transform',
          message: `Found ${this.usageResults.length} references of "${name}".`,
          treeData: this.buildUsageTree(),
          cancelText: 'Close',
          showCancel: true,
        },
      });
      return;
    }

    const doDelete = await firstValueFrom(
      this.dialog.open(GenericDialogComponent, {
        data: {
          title: `Delete "${name}"?`,
          message: 'No references found. This cannot be undone.',
          confirmText: 'Delete',
          cancelText: 'Cancel',
          showCancel: true,
          isConfirmation: true,
        },
      }).afterClosed()
    );
    if (!doDelete) {
      return;
    }

    this.loading = true;
    try {
      await this.sdk.deleteTransform({ id: transform.id });
      this.snackBar.open(`"${name}" safely deleted`, 'Close', { duration: 3000 });
      await this.loadTransforms();
    } catch (err) {
      this.openMessageDialog(`Error deleting: ${String(err)}`, 'Error');
    } finally {
      this.loading = false;
    }
  }

  private cleanupScan(): void {
    this.scanning = false;
    this.progressRef?.close();
    this.progressRef = undefined;
  }

  private async scanIdentityProfiles(transformId: string): Promise<void> {
    this.currentPhase = 'Profiles';
    this.cdr.detectChanges();

    const profiles = (await this.sdk.listIdentityProfiles()).data ?? [];
    for (const p of profiles) {
      this.grandProgress++;
      this.cdr.detectChanges();

      const attrTransforms = (p as any)?.identityAttributeConfig?.attributeTransforms ?? [];
      for (let i = 0; i < attrTransforms.length; i++) {
        const def = attrTransforms[i]?.transformDefinition;
        if (def?.type !== 'reference') continue;
        const refId = this.getRefId(def as RefNode);
        if (refId === transformId) {
          this.usageResults.push({
            kind: 'identityProfile',
            profileId: p.id,
            profileName: p.name ?? '<Unknown>',
            identityAttributeName: attrTransforms[i].identityAttributeName ?? '<unknown>',
            propertyPath: `identityAttributeConfig.attributeTransforms[${i}].transformDefinition`
          });
        }
      }
    }
  }


  private getRefId(def: RefNode): string | undefined {
    // Check that attributes.id is a string before returning it
    const attrId = def.attributes?.id;
    if (typeof attrId === 'string') {
      return attrId;
    }

    // Fallback to top-level id if it’s a string
    if (typeof def.id === 'string') {
      return def.id;
    }

    return undefined;
  }

  private async scanProvisioningPolicies(transformId: string): Promise<void> {
    this.currentPhase = 'Provisioning Policies';
    this.cdr.detectChanges();

    const sources = (await this.sdk.listSources()).data as Array<{
      id?: string;
      name?: string;
    }>;

    for (const src of sources) {

      let policies = [] as Array<{ fields?: unknown[]; name?: string; id?: string; usageType?: string; type?: string }>;
      try {
        // similarly cast your retry helper
        policies = (await this.listWithRetry(src.id!)) as typeof policies;
      } catch {
        continue;
      }

      for (const pol of policies) {
        this.grandProgress++;
        this.cdr.detectChanges();

        const fields: any[] = pol.fields ?? [];
        const policyNameOrId = pol.name ?? pol.id ?? '<Unknown>';
        const usageType = pol.usageType ?? pol.type;

        for (let f = 0; f < fields.length; f++) {
          this.searchTransformForRef(fields[f]?.transform, transformId, {
            sourceId: src.id!,
            sourceName: src.name ?? '<Unknown>',
            policyIdOrName: String(policyNameOrId),
            policyType: usageType,
            fieldName: fields[f]?.name,
            basePath: `fields[${f}].transform`
          });
        }
      }
    }
  }

  private async scanTransformsForReferences(target: TransformReadV2025): Promise<void> {
    this.currentPhase = 'Transforms';
    this.cdr.detectChanges();
    const resp = await this.sdk.listTransforms();
    const all = resp.data ?? [];

    const targetId = target.id;
    const targetName = target.name;

    const others = all.filter(t => t.id !== targetId);
    this.totalTransforms = others.length;

    for (const t of others) {

      this.grandProgress++;
      this.cdr.detectChanges();

      this.walkForReference(
        t.attributes ?? t,
        '',
        (node, path) => {
          if (node === null || typeof node !== 'object') return;
          if (!('type' in node)) return;
          if ((node as any).type === 'reference') {
            const refId = this.getRefId(node as RefNode);
            if (refId === targetId || refId === targetName) {
              this.usageResults.push({
                kind: 'transform',
                transformId: t.id,
                transformName: t.name ?? '<Unknown Transform>',
                propertyPath: path || '<root>',
              });
            }
          }
        }
      );
    }
  }

  private walkForReference(
    node: unknown,
    path: string,
    visitor: (n: unknown, p: string) => void
  ): void {
    visitor(node, path);
    if (node === null || typeof node !== 'object') return;

    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        this.walkForReference(node[i], `${path}[${i}]`, visitor);
      }
    } else {
      // now we know it’s a plain object
      const obj = node as Record<string, unknown>;
      for (const [k, v] of Object.entries(obj)) {
        const childPath = path ? `${path}.${k}` : k;
        this.walkForReference(v, childPath, visitor);
      }
    }
  }

  private searchTransformForRef(
    node: unknown,
    transformId: string,
    ctx: {
      sourceId: string;
      sourceName: string;
      policyIdOrName: string;
      policyType?: string;
      fieldName?: string;
      basePath: string;
    }
  ): void {
    const matches = (n: unknown) => {
      if (n === null || typeof n !== 'object') return false;
      const obj = n as Record<string, unknown>;
      if (obj.type !== 'reference') return false;
      const id = this.getRefId(obj as RefNode);
      return id === transformId || id === (this.transform?.name ?? '');
    };

    const visit = (n: unknown, path: string) => {
      if (n === null || typeof n !== 'object') return;

      if (matches(n)) {
        this.usageResults.push({
          kind: 'provisioningPolicy',
          sourceId: ctx.sourceId,
          sourceName: ctx.sourceName,
          policyIdOrName: ctx.policyIdOrName,
          policyType: ctx.policyType,
          fieldName: ctx.fieldName,
          propertyPath: `${ctx.basePath}${path ? '.' + path : ''}`,
        });
      }

      const obj = n as Record<string, unknown>;
      for (const [k, v] of Object.entries(obj)) {
        visit(v, path ? `${path}.${k}` : k);
      }
    };

    visit(node, '');
  }
}