import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CriteriaNode, leafValues, normalizeIdentityAttr } from '../models/criteria.model';

/**
 * Presentational rendering of a single criteria {@link CriteriaNode}.
 *
 * Stateless aside from expansion: the parent passes a `node` and an optional
 * `variant` used to tint the tree (e.g. the proposed/after tree in the preview
 * panel). All criteria mutation lives in the pure model — this component only
 * displays.
 */
@Component({
  selector: 'app-criteria-tree',
  standalone: true,
  imports: [NgTemplateOutlet, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './criteria-tree.component.html',
  styleUrl: './criteria-tree.component.scss',
})
export class CriteriaTreeComponent implements OnChanges, AfterViewInit {
  /** Root of the criteria tree to render (`null` renders an empty state). */
  @Input() node: CriteriaNode | null = null;

  /** Visual tint for diff context. */
  @Input() variant: 'plain' | 'added' | 'removed' = 'plain';

  @Input() showCopyButton = true;

  /** Data source — the single root wrapped in an array. */
  roots: CriteriaNode[] = [];
  private readonly expanded = new Set<CriteriaNode>();

  readonly childrenAccessor = (n: CriteriaNode): CriteriaNode[] =>
    n.children ?? [];

  readonly hasChild = (_: number, n: CriteriaNode): boolean =>
    !!n.children && n.children.length > 0;

  ngOnChanges(changes: SimpleChanges): void {
    if ('node' in changes) {
      this.roots = this.node ? [this.node] : [];
      this.expanded.clear();
      this.expandLater();
    }
  }

  ngAfterViewInit(): void {
    this.expandLater();
  }

  /** Defer expansion until the tree has rendered the (re)assigned data. */
  private expandLater(): void {
    setTimeout(() => this.expandAll());
  }

  private expandAll(): void {
    const visit = (node: CriteriaNode): void => {
      if (this.hasChild(0, node)) {
        this.expanded.add(node);
        for (const child of node.children ?? []) {
          visit(child);
        }
      }
    };
    for (const root of this.roots) {
      visit(root);
    }
  }

  isExpanded(node: CriteriaNode): boolean {
    return this.expanded.has(node);
  }

  toggleNode(node: CriteriaNode): void {
    if (this.isExpanded(node)) {
      this.expanded.delete(node);
    } else {
      this.expanded.add(node);
    }
  }

  copyJson(): void { navigator.clipboard.writeText(JSON.stringify(this.node, null, 2)).catch(() => {}); }

  tooltipText(node: CriteriaNode): string {
    if (!node.key) return '';
    const parts = [`type: ${node.key.type}`, `property: ${node.key.property}`];
    if (node.key.sourceId) parts.push(`sourceId: ${node.key.sourceId}`);
    return parts.join(' · ');
  }

  /**
   * Display name for a leaf's key property.  Strips the `attribute.` prefix
   * from IDENTITY keys so all attributes render uniformly (e.g. the stored
   * `attribute.cloudLifecycleState` shows as `cloudLifecycleState`).
   * ACCOUNT and ENTITLEMENT key properties are shown verbatim.
   */
  displayProperty(node: CriteriaNode): string {
    if (!node.key) return '(no attribute)';
    return node.key.type === 'IDENTITY'
      ? normalizeIdentityAttr(node.key.property)
      : node.key.property;
  }

  /** Comma-joined leaf values for display (∅ when the leaf has no value). */
  leafValueText(node: CriteriaNode): string {
    const values = leafValues(node);
    return values.length ? values.join(', ') : '∅';
  }
}
