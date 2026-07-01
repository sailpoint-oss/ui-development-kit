/**
 * Pure, Angular-free model for ISC role membership criteria.
 *
 * A role's membership selector contains a single root {@link CriteriaNode}.
 * Nodes come in two shapes:
 *   - composite: `{ operation: 'AND' | 'OR', children: [...] }`
 *   - leaf:      `{ operation: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'STARTS_WITH'
 *                  | 'ENDS_WITH', key: { type, property }, stringValue? | values? }`
 *
 * Invariant: a leaf holds its value in exactly one of `stringValue` (single
 * value) or `values` (two or more). Use {@link applyValueInvariant} to keep
 * that true after any mutation. Always {@link cloneCriteria} before mutating.
 *
 * The SDK's generated `RoleCriteriaLevel*V2025` types only declare
 * `stringValue`, but the live `/v3/roles` PATCH API (and the reference
 * PowerShell script) also accept a `values[]` array on a leaf. This model
 * therefore tracks both and is intentionally decoupled from the SDK types.
 */

export type LeafOperation =
  | 'EQUALS'
  | 'NOT_EQUALS'
  | 'CONTAINS'
  | 'STARTS_WITH'
  | 'ENDS_WITH';

export type CompositeOperation = 'AND' | 'OR';

export type CriteriaOperation = LeafOperation | CompositeOperation;

export const LEAF_OPERATIONS: readonly LeafOperation[] = [
  'EQUALS',
  'NOT_EQUALS',
  'CONTAINS',
  'STARTS_WITH',
  'ENDS_WITH',
];

export const COMPOSITE_OPERATIONS: readonly CompositeOperation[] = ['AND', 'OR'];

/** Identifies the attribute/entitlement a leaf criteria tests. */
export interface CriteriaKey {
  /** 'IDENTITY' | 'ACCOUNT' | 'ENTITLEMENT' */
  type: string;
  /** e.g. `attribute.cloudLifecycleState` */
  property: string;
  /** Required when type is ACCOUNT or ENTITLEMENT, otherwise omitted. */
  sourceId?: string | null;
}

/** A single node in the criteria tree (composite or leaf). */
export interface CriteriaNode {
  operation: CriteriaOperation;
  key?: CriteriaKey | null;
  stringValue?: string | null;
  values?: string[] | null;
  children?: CriteriaNode[] | null;
}

/** The role's membership selector — the object patched at `/membership`. */
export interface MembershipSelector {
  type?: string | null;
  criteria?: CriteriaNode | null;
  identities?: unknown;
}

/** Returns true when the node is a composite (AND/OR with children). */
export function isComposite(node: CriteriaNode): boolean {
  return node.operation === 'AND' || node.operation === 'OR';
}

/** Returns true when the node is a leaf (a comparison on a single key). */
export function isLeaf(node: CriteriaNode): boolean {
  return !isComposite(node);
}

/**
 * Deep clone of a criteria node, safe to mutate. Uses `structuredClone` when
 * available (browser / modern Node) and falls back to a JSON round-trip.
 */
export function cloneCriteria<T>(node: T): T {
  const sc = (globalThis as { structuredClone?: <V>(v: V) => V })
    .structuredClone;
  if (typeof sc === 'function') {
    return sc(node);
  }
  return JSON.parse(JSON.stringify(node)) as T;
}

/**
 * Parse a raw `membership.criteria` object (as returned by the SDK) into a
 * normalized, deep-cloned {@link CriteriaNode}. Returns `null` when there is
 * no criteria.
 */
export function parseCriteria(raw: unknown): CriteriaNode | null {
  if (!raw || typeof raw !== 'object') {
    return null;
  }
  return normalizeNode(raw as Record<string, unknown>);
}

function normalizeNode(raw: Record<string, unknown>): CriteriaNode {
  const node: CriteriaNode = {
    operation: raw['operation'] as CriteriaOperation,
  };

  const rawKey = raw['key'] as Record<string, unknown> | null | undefined;
  if (rawKey && typeof rawKey === 'object') {
    const key: CriteriaKey = {
      type: rawKey['type'] as string,
      property: rawKey['property'] as string,
    };
    if (rawKey['sourceId'] !== undefined && rawKey['sourceId'] !== null) {
      key.sourceId = rawKey['sourceId'] as string;
    }
    node.key = key;
  }

  const rawChildren = raw['children'];
  if (Array.isArray(rawChildren)) {
    node.children = rawChildren.map((child) =>
      normalizeNode(child as Record<string, unknown>)
    );
    return node;
  }

  const rawValues = raw['values'];
  if (Array.isArray(rawValues)) {
    node.values = rawValues.map((v) => String(v as string | number | boolean));
  } else if (raw['stringValue'] !== undefined && raw['stringValue'] !== null) {
    node.stringValue = String(raw['stringValue'] as string | number | boolean);
  }

  return node;
}

/**
 * Normalize a leaf's value(s) onto the canonical field given a list of values:
 *   - exactly 1 value  → `stringValue`, `values` cleared
 *   - 2 or more values → `values`, `stringValue` cleared
 * Caller is responsible for handling the empty case (node removal).
 */
export function applyValueInvariant(
  node: CriteriaNode,
  values: string[]
): CriteriaNode {
  if (values.length === 1) {
    node.stringValue = values[0];
    delete node.values;
  } else {
    node.values = [...values];
    delete node.stringValue;
  }
  return node;
}

/** Current value(s) of a leaf as a flat array (empty when unset). */
export function leafValues(node: CriteriaNode): string[] {
  if (Array.isArray(node.values) && node.values.length > 0) {
    return [...node.values];
  }
  if (node.stringValue !== undefined && node.stringValue !== null && node.stringValue !== '') {
    return [node.stringValue];
  }
  return [];
}

/**
 * Collect the distinct `key.property` values of every leaf in the tree, in
 * first-seen order. Useful for attribute autocomplete.
 */
export function collectLeafAttributes(node: CriteriaNode | null): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const walk = (n: CriteriaNode | null | undefined): void => {
    if (!n) {
      return;
    }
    if (n.key?.property && !seen.has(n.key.property)) {
      seen.add(n.key.property);
      out.push(n.key.property);
    }
    n.children?.forEach(walk);
  };
  walk(node);
  return out;
}

/** Total number of nodes in the tree (composites and leaves). */
export function countNodes(node: CriteriaNode | null): number {
  if (!node) {
    return 0;
  }
  let count = 1;
  node.children?.forEach((child) => {
    count += countNodes(child);
  });
  return count;
}

export function countLeafNodes(node: CriteriaNode | null): number {
  if (!node) return 0;
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((acc, child) => acc + countLeafNodes(child), 0);
}

/**
 * Returns true when the role's membership criteria tree contains at least one
 * leaf that matches all of the supplied filter fields:
 *   - `attribute`: compared case-insensitively against `key.property` (substring)
 *   - `operation`: when non-empty, must equal the leaf's operation exactly
 *   - `value`: when non-empty, must appear in the leaf's stringValue/values[] (case-insensitive)
 */
export function roleMatchesCriteriaFilter(
  membership: MembershipSelector | null | undefined,
  filter: { attribute: string; operation?: LeafOperation | ''; value?: string }
): boolean {
  const root = membership?.criteria ?? null;
  if (!root) return false;
  const valLower = (filter.value ?? '').toLowerCase();

  const walk = (node: CriteriaNode): boolean => {
    if (isLeaf(node)) {
      const prop = node.key?.property ?? '';
      // For IDENTITY keys, normalize both stored prop and filter attribute by
      // stripping the leading 'attribute.' so bare and prefixed forms match.
      const isIdentity = node.key?.type === 'IDENTITY';
      const storedNorm = isIdentity ? normalizeIdentityAttr(prop) : prop;
      const filterNorm = isIdentity
        ? normalizeIdentityAttr(filter.attribute)
        : filter.attribute;
      if (!storedNorm.toLowerCase().includes(filterNorm.toLowerCase()))
        return false;
      if (filter.operation && node.operation !== filter.operation) return false;
      if (valLower) {
        const vals = leafValues(node).map((v) => v.toLowerCase());
        if (!vals.some((v) => v.includes(valLower))) return false;
      }
      return true;
    }
    return (node.children ?? []).some(walk);
  };

  return walk(root);
}

/**
 * Strips the leading `attribute.` prefix (case-insensitive) from an IDENTITY
 * key property name.  Use for display and for prefix-agnostic matching.
 */
export function normalizeIdentityAttr(prop: string): string {
  return prop.replace(/^attribute\./i, '');
}

/**
 * Ensures an IDENTITY key property is stored with the `attribute.` prefix.
 * Idempotent — a property that already starts with `attribute.` is unchanged.
 */
export function canonicalizeIdentityAttr(prop: string): string {
  return /^attribute\./i.test(prop) ? prop : `attribute.${prop}`;
}

/** Build a new leaf node from an attribute, operation and value list. */
export function buildLeafNode(
  property: string,
  operation: LeafOperation,
  values: string[],
  keyType = 'IDENTITY',
  sourceId?: string | null
): CriteriaNode {
  const canonical =
    keyType === 'IDENTITY' ? canonicalizeIdentityAttr(property) : property;
  const key: CriteriaKey = { type: keyType, property: canonical };
  if (sourceId) key.sourceId = sourceId;
  const node: CriteriaNode = { operation, key };
  return applyValueInvariant(node, values);
}
