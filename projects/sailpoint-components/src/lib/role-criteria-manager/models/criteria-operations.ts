/**
 * Pure mutation engine for ISC role membership criteria.
 *
 * Each operation takes the existing {@link MembershipSelector} plus the user's
 * parameters and returns an {@link OperationResult}: the resulting criteria
 * tree (or `null` when criteria is removed entirely) and the JSON Patch body
 * to send to `patchRole`. No Angular, no SDK, no I/O — every function is a
 * deterministic transform over plain objects, which makes the patch builders
 * exhaustively unit-testable.
 *
 * The whole `/membership` object is always rebuilt and patched as a unit
 * (`{ type, criteria, identities }`):
 *   - `replace` when criteria already existed,
 *   - `add` when creating criteria where none existed,
 *   - `remove` when criteria becomes empty.
 *
 * This implementation always enforces the stringValue<->values[] invariant so
 * previewed and applied patches stay deterministic.
 */

import {
  applyValueInvariant,
  buildLeafNode,
  cloneCriteria,
  CompositeOperation,
  CriteriaNode,
  CriteriaKey,
  isComposite,
  LeafOperation,
  leafValues,
  MembershipSelector,
  normalizeIdentityAttr,
  parseCriteria,
} from './criteria.model';

/**
 * Returns true when the stored key matches the queried attribute name, handling
 * the optional `attribute.` prefix on IDENTITY keys transparently.
 * ACCOUNT/ENTITLEMENT keys are compared verbatim (those use source-schema names).
 */
function attrMatch(
  key: CriteriaKey | null | undefined,
  queried: string
): boolean {
  if (!key) return false;
  if (key.type !== 'IDENTITY') return key.property === queried;
  return normalizeIdentityAttr(key.property) === normalizeIdentityAttr(queried);
}

/** A single RFC-6902 JSON Patch operation against the role. */
export interface JsonPatchOp {
  op: 'add' | 'replace' | 'remove';
  path: string;
  value?: unknown;
}

/** Outcome of applying an operation to one role's membership. */
export interface OperationResult {
  /** `ready` when a patch was produced; `skipped` when nothing to do. */
  status: 'ready' | 'skipped';
  /** Human-readable reason, set when `status === 'skipped'`. */
  reason?: string;
  /** Resulting criteria tree (`null` means criteria removed entirely). */
  tree: CriteriaNode | null;
  /** The JSON Patch array to pass to `patchRole` (empty when skipped). */
  patch: JsonPatchOp[];
  /** Whether the transform actually changed the tree. */
  changed: boolean;
}

const MEMBERSHIP_PATH = '/membership';

function skipped(reason: string): OperationResult {
  return { status: 'skipped', reason, tree: null, patch: [], changed: false };
}

/**
 * Build the `/membership` patch from a new tree and the original membership.
 * `hadCriteria` controls add-vs-replace; a `null` tree yields a `remove`.
 */
export function buildMembershipPatch(
  newTree: CriteriaNode | null,
  membership: MembershipSelector,
  hadCriteria: boolean
): JsonPatchOp[] {
  if (newTree === null) {
    return [{ op: 'remove', path: MEMBERSHIP_PATH }];
  }
  const value = {
    type: membership.type ?? 'STANDARD',
    criteria: newTree,
    identities: membership.identities ?? null,
  };
  return [{ op: hadCriteria ? 'replace' : 'add', path: MEMBERSHIP_PATH, value }];
}

// ---------------------------------------------------------------------------
// Operation: Update value (U)
// ---------------------------------------------------------------------------

export interface UpdateValueParams {
  attribute: string;
  oldValue: string;
  newValues: string[];
}

/**
 * Replace the value(s) of every leaf for `attribute` whose current value
 * matches `oldValue` (single `stringValue` equal, or `values[]` containing it)
 * with `newValues`. Skips when there is no criteria or no match.
 */
export function updateValue(
  membership: MembershipSelector,
  params: UpdateValueParams
): OperationResult {
  if (!membership.criteria) {
    return skipped('no criteria');
  }
  const tree = cloneCriteria(membership.criteria);
  let matched = false;

  const walk = (node: CriteriaNode): void => {
    if (attrMatch(node.key, params.attribute)) {
      const values = leafValues(node);
      if (
        node.stringValue === params.oldValue ||
        values.includes(params.oldValue)
      ) {
        matched = true;
        applyValueInvariant(node, params.newValues);
      }
    }
    node.children?.forEach(walk);
  };
  walk(tree);

  if (!matched) {
    return skipped('value not found');
  }
  return {
    status: 'ready',
    tree,
    patch: buildMembershipPatch(tree, membership, true),
    changed: true,
  };
}

// ---------------------------------------------------------------------------
// Operation: Add value(s) (V)
// ---------------------------------------------------------------------------

export interface AddValuesParams {
  attribute: string;
  addValues: string[];
}

/**
 * Append `addValues` (de-duplicated) to the first leaf matching `attribute`,
 * converting a `stringValue` to `values[]` as needed. Skips when there is no
 * criteria or the attribute is not present.
 */
export function addValues(
  membership: MembershipSelector,
  params: AddValuesParams
): OperationResult {
  if (!membership.criteria) {
    return skipped('no criteria');
  }
  const tree = cloneCriteria(membership.criteria);
  let matched = false;
  let changed = false;

  const walk = (node: CriteriaNode): boolean => {
    if (attrMatch(node.key, params.attribute)) {
      matched = true;
      const result = leafValues(node);
      for (const v of params.addValues) {
        if (!result.includes(v)) {
          result.push(v);
          changed = true;
        }
      }
      applyValueInvariant(node, result);
      return true; // stop at first match
    }
    if (node.children) {
      for (const child of node.children) {
        if (walk(child)) {
          return true;
        }
      }
    }
    return false;
  };
  walk(tree);

  if (!matched) {
    return skipped('attribute not found');
  }
  if (!changed) {
    // Attribute found but every value is already present — no write needed.
    return skipped('all values already present');
  }
  return {
    status: 'ready',
    tree,
    patch: buildMembershipPatch(tree, membership, true),
    changed,
  };
}

// ---------------------------------------------------------------------------
// Operation: Add block (A)
// ---------------------------------------------------------------------------

export interface AddBlockParams {
  attribute: string;
  operation: LeafOperation;
  values: string[];
  join: CompositeOperation;
  keyType?: string;
  sourceId?: string | null;
}

/**
 * Add a new leaf criteria block. When criteria already exists and the root is
 * a composite sharing the chosen join operation, the new leaf is appended to
 * its children; otherwise the existing root and the new leaf are wrapped in a
 * new composite. When no criteria exists, the new leaf becomes the root
 * (patched with `add`).
 */
export function addBlock(
  membership: MembershipSelector,
  params: AddBlockParams
): OperationResult {
  const newLeaf = buildLeafNode(
    params.attribute,
    params.operation,
    params.values,
    params.keyType ?? 'IDENTITY',
    params.sourceId ?? null
  );

  if (!membership.criteria) {
    return {
      status: 'ready',
      tree: newLeaf,
      patch: buildMembershipPatch(newLeaf, membership, false),
      changed: true,
    };
  }

  const root = cloneCriteria(membership.criteria);
  let tree: CriteriaNode;

  if (isComposite(root) && root.children && root.operation === params.join) {
    root.children = [...root.children, newLeaf];
    tree = root;
  } else {
    tree = { operation: params.join, children: [root, newLeaf] };
  }

  return {
    status: 'ready',
    tree,
    patch: buildMembershipPatch(tree, membership, true),
    changed: true,
  };
}

// ---------------------------------------------------------------------------
// Operation: Remove (R)
// ---------------------------------------------------------------------------

export interface RemoveParams {
  attribute: string;
  /** `value` removes a single value; `attribute` removes whole leaves. */
  mode: 'value' | 'attribute';
  value?: string;
}

/**
 * Remove a specific value from, or remove entirely, the leaves for an
 * attribute. Empty composites are dropped and single-child composites are
 * collapsed. When the whole tree is removed the patch is a `remove`. Skips
 * only when there is no criteria.
 */
export function removeCriteria(
  membership: MembershipSelector,
  params: RemoveParams
): OperationResult {
  if (!membership.criteria) {
    return skipped('no criteria');
  }
  const tree = cloneCriteria(membership.criteria);
  let changed = false;

  const rebuild = (node: CriteriaNode): CriteriaNode | null => {
    // Leaf for the target attribute.
    if (attrMatch(node.key, params.attribute) && !node.children) {
      if (params.mode === 'attribute') {
        changed = true;
        return null;
      }
      // mode === 'value'
      const value = params.value;
      if (node.stringValue === value) {
        changed = true;
        return null;
      }
      const values = leafValues(node);
      if (value !== undefined && values.includes(value)) {
        const remaining = values.filter((v) => v !== value);
        changed = true;
        if (remaining.length === 0) {
          return null;
        }
        applyValueInvariant(node, remaining);
        return node;
      }
      return node; // attribute matches but value absent — unchanged
    }

    // Composite — rebuild children.
    if (node.children) {
      const kept: CriteriaNode[] = [];
      for (const child of node.children) {
        const result = rebuild(child);
        if (result !== null) {
          kept.push(result);
        }
      }
      if (kept.length === 0) {
        return null;
      }
      if (kept.length === 1) {
        return kept[0]; // collapse single-child composite
      }
      node.children = kept;
      return node;
    }

    return node; // unrelated leaf
  };

  const newTree = rebuild(tree);

  if (!changed) {
    // Nothing matched — don't send a no-op patch.
    return skipped(
      params.mode === 'value' ? 'value not found' : 'attribute not found'
    );
  }
  return {
    status: 'ready',
    tree: newTree,
    patch: buildMembershipPatch(newTree, membership, true),
    changed,
  };
}

// ---------------------------------------------------------------------------
// Operation: Consolidate (C)
// ---------------------------------------------------------------------------

export interface ConsolidateParams {
  attribute: string;
}

/**
 * Merge two or more sibling OR leaves for the same attribute into a single
 * leaf with a de-duplicated `values[]` list (preserving the first leaf's
 * comparison operation). Works bottom-up and collapses an OR parent left with
 * a single child. Skips when there is no criteria or nothing to consolidate.
 */
export function consolidate(
  membership: MembershipSelector,
  params: ConsolidateParams
): OperationResult {
  if (!membership.criteria) {
    return skipped('no criteria');
  }
  const tree = cloneCriteria(membership.criteria);
  let matched = false;

  const walk = (node: CriteriaNode): CriteriaNode => {
    if (!node.children) {
      return node; // leaf
    }

    // Recurse first (bottom-up).
    node.children = node.children.map(walk);

    if (node.operation !== 'OR') {
      return node;
    }

    // Count matching-attribute leaves per comparison operation. Only an
    // operation shared by >= 2 sibling leaves can be consolidated. Mixed-
    // operator siblings (e.g. EQUALS vs STARTS_WITH) are left untouched so
    // membership semantics are preserved — merging them under one operator
    // would silently change which identities match.
    const matches = (child: CriteriaNode): boolean =>
      attrMatch(child.key, params.attribute) && !child.children;

    const opCounts = new Map<string, number>();
    for (const child of node.children) {
      if (matches(child)) {
        opCounts.set(child.operation, (opCounts.get(child.operation) ?? 0) + 1);
      }
    }
    const opsToMerge = new Set(
      [...opCounts.entries()].filter(([, n]) => n >= 2).map(([op]) => op)
    );
    if (opsToMerge.size === 0) {
      return node;
    }
    matched = true;

    // Merge values per operation (deduplicated, first-seen order).
    const mergedByOp = new Map<string, string[]>();
    for (const child of node.children) {
      if (matches(child) && opsToMerge.has(child.operation)) {
        const acc = mergedByOp.get(child.operation) ?? [];
        for (const v of leafValues(child)) {
          if (!acc.includes(v)) {
            acc.push(v);
          }
        }
        mergedByOp.set(child.operation, acc);
      }
    }

    // Rebuild children in place: emit each consolidated leaf at the position of
    // its first member and drop the remaining members of that operation group;
    // everything else (singleton operators, other attributes, sub-trees) stays.
    const emitted = new Set<string>();
    const newChildren: CriteriaNode[] = [];
    for (const child of node.children) {
      if (matches(child) && opsToMerge.has(child.operation)) {
        if (!emitted.has(child.operation)) {
          emitted.add(child.operation);
          const consolidatedLeaf: CriteriaNode = {
            operation: child.operation,
            key: cloneCriteria(child.key ?? null),
          };
          applyValueInvariant(
            consolidatedLeaf,
            mergedByOp.get(child.operation) ?? []
          );
          newChildren.push(consolidatedLeaf);
        }
      } else {
        newChildren.push(child);
      }
    }

    if (newChildren.length === 1) {
      return newChildren[0]; // collapse OR with a single child
    }
    node.children = newChildren;
    return node;
  };

  const newTree = walk(tree);

  if (!matched) {
    return skipped('nothing to consolidate');
  }
  return {
    status: 'ready',
    tree: newTree,
    patch: buildMembershipPatch(newTree, membership, true),
    changed: true,
  };
}

// ---------------------------------------------------------------------------
// Snapshot restore
// ---------------------------------------------------------------------------

export interface SnapshotEntry {
  id: string;
  name: string;
  membership: MembershipSelector | null;
}

export function restoreFromSnapshot(
  snapshot: SnapshotEntry,
  current: MembershipSelector
): OperationResult {
  if (!snapshot.membership) {
    return { status: 'skipped', reason: 'no snapshot membership', tree: current.criteria ?? null, patch: [], changed: false };
  }
  const snapJson = JSON.stringify(snapshot.membership);
  const currJson = JSON.stringify(current);
  if (snapJson === currJson) {
    return { status: 'skipped', reason: 'already matches snapshot', tree: current.criteria ?? null, patch: [], changed: false };
  }
  const newTree = parseCriteria(snapshot.membership.criteria ?? null);
  const hadCriteria = !!current.criteria;
  return {
    status: 'ready',
    tree: newTree,
    patch: buildMembershipPatch(newTree, snapshot.membership, hadCriteria),
    changed: true,
  };
}

// ---------------------------------------------------------------------------
// Operation dispatch (used by the component)
// ---------------------------------------------------------------------------

export type OperationType =
  | 'update'
  | 'add-values'
  | 'add-block'
  | 'remove'
  | 'consolidate';

export type OperationParams =
  | { type: 'update'; params: UpdateValueParams }
  | { type: 'add-values'; params: AddValuesParams }
  | { type: 'add-block'; params: AddBlockParams }
  | { type: 'remove'; params: RemoveParams }
  | { type: 'consolidate'; params: ConsolidateParams };

/** Apply any operation to a membership selector. */
export function applyOperation(
  membership: MembershipSelector,
  op: OperationParams
): OperationResult {
  switch (op.type) {
    case 'update':
      return updateValue(membership, op.params);
    case 'add-values':
      return addValues(membership, op.params);
    case 'add-block':
      return addBlock(membership, op.params);
    case 'remove':
      return removeCriteria(membership, op.params);
    case 'consolidate':
      return consolidate(membership, op.params);
  }
}
