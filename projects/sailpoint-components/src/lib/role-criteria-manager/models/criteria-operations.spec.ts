import { CriteriaNode, MembershipSelector } from './criteria.model';
import {
  addBlock,
  addValues,
  applyOperation,
  consolidate,
  removeCriteria,
  updateValue,
} from './criteria-operations';

/** Build a leaf criteria node for fixtures. */
function leaf(
  property: string,
  value: string | string[],
  operation = 'EQUALS'
): CriteriaNode {
  const node: CriteriaNode = {
    operation: operation as CriteriaNode['operation'],
    key: { type: 'IDENTITY', property },
  };
  if (Array.isArray(value)) {
    node.values = value;
  } else {
    node.stringValue = value;
  }
  return node;
}

/** Wrap a criteria tree in a standard membership selector. */
function membership(
  criteria: CriteriaNode | null,
  identities: unknown = null
): MembershipSelector {
  return { type: 'STANDARD', criteria, identities };
}

describe('criteria-operations', () => {
  // -------------------------------------------------------------------------
  // Update value (U)
  // -------------------------------------------------------------------------
  describe('updateValue', () => {
    it('replaces a matching single-value leaf and emits a replace patch', () => {
      const m = membership(leaf('attribute.duNumber', '011'));
      const result = updateValue(m, {
        attribute: 'attribute.duNumber',
        oldValue: '011',
        newValues: ['012'],
      });

      expect(result.status).toBe('ready');
      expect(result.patch).toEqual([
        {
          op: 'replace',
          path: '/membership',
          value: {
            type: 'STANDARD',
            criteria: {
              operation: 'EQUALS',
              key: { type: 'IDENTITY', property: 'attribute.duNumber' },
              stringValue: '012',
            },
            identities: null,
          },
        },
      ]);
    });

    it('replaces the whole leaf value set with multiple new values', () => {
      const m = membership(leaf('attribute.duNumber', ['011', '099']));
      const result = updateValue(m, {
        attribute: 'attribute.duNumber',
        oldValue: '011',
        newValues: ['012', '013'],
      });

      expect(result.patch[0].value).toEqual({
        type: 'STANDARD',
        criteria: {
          operation: 'EQUALS',
          key: { type: 'IDENTITY', property: 'attribute.duNumber' },
          values: ['012', '013'],
        },
        identities: null,
      });
    });

    it('matches a value inside a multi-value leaf', () => {
      const m = membership(leaf('attribute.state', ['active', 'loa']));
      const result = updateValue(m, {
        attribute: 'attribute.state',
        oldValue: 'loa',
        newValues: ['terminated'],
      });
      expect(result.status).toBe('ready');
      expect((result.tree as CriteriaNode).stringValue).toBe('terminated');
    });

    it('skips when the value is not found', () => {
      const m = membership(leaf('attribute.duNumber', '011'));
      const result = updateValue(m, {
        attribute: 'attribute.duNumber',
        oldValue: 'nope',
        newValues: ['012'],
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('value not found');
      expect(result.patch).toEqual([]);
    });

    it('skips when there is no criteria', () => {
      const result = updateValue(membership(null), {
        attribute: 'attribute.duNumber',
        oldValue: '011',
        newValues: ['012'],
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('no criteria');
    });

    it('does not mutate the input membership', () => {
      const original = leaf('attribute.duNumber', '011');
      const m = membership(original);
      updateValue(m, {
        attribute: 'attribute.duNumber',
        oldValue: '011',
        newValues: ['012'],
      });
      expect(original.stringValue).toBe('011');
    });
  });

  // -------------------------------------------------------------------------
  // Add value(s) (V)
  // -------------------------------------------------------------------------
  describe('addValues', () => {
    it('converts a stringValue leaf to values[] when appending', () => {
      const m = membership(leaf('attribute.state', 'active'));
      const result = addValues(m, {
        attribute: 'attribute.state',
        addValues: ['loa', 'terminated'],
      });

      expect(result.patch).toEqual([
        {
          op: 'replace',
          path: '/membership',
          value: {
            type: 'STANDARD',
            criteria: {
              operation: 'EQUALS',
              key: { type: 'IDENTITY', property: 'attribute.state' },
              values: ['active', 'loa', 'terminated'],
            },
            identities: null,
          },
        },
      ]);
    });

    it('appends to an existing values[] and de-duplicates', () => {
      const m = membership(leaf('attribute.state', ['active', 'loa']));
      const result = addValues(m, {
        attribute: 'attribute.state',
        addValues: ['loa', 'conversions'],
      });
      expect((result.tree as CriteriaNode).values).toEqual([
        'active',
        'loa',
        'conversions',
      ]);
      expect(result.changed).toBe(true);
    });

    it('skips (no patch) when all values are already present', () => {
      const m = membership(leaf('attribute.state', ['active', 'loa']));
      const result = addValues(m, {
        attribute: 'attribute.state',
        addValues: ['active'],
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('all values already present');
      expect(result.patch).toEqual([]);
    });

    it('only updates the first matching leaf', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.state', 'loa'),
        ],
      };
      const result = addValues(membership(tree), {
        attribute: 'attribute.state',
        addValues: ['terminated'],
      });
      const children = (result.tree as CriteriaNode).children!;
      expect(children[0].values).toEqual(['active', 'terminated']);
      expect(children[1].stringValue).toBe('loa');
    });

    it('skips when the attribute is not found', () => {
      const m = membership(leaf('attribute.state', 'active'));
      const result = addValues(m, {
        attribute: 'attribute.missing',
        addValues: ['x'],
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('attribute not found');
    });

    it('skips when there is no criteria', () => {
      const result = addValues(membership(null), {
        attribute: 'attribute.state',
        addValues: ['x'],
      });
      expect(result.reason).toBe('no criteria');
    });
  });

  // -------------------------------------------------------------------------
  // Add block (A)
  // -------------------------------------------------------------------------
  describe('addBlock', () => {
    it('creates criteria with an add patch when none existed', () => {
      const result = addBlock(membership(null), {
        attribute: 'attribute.duNumber',
        operation: 'EQUALS',
        values: ['011'],
        join: 'AND',
      });

      expect(result.patch).toEqual([
        {
          op: 'add',
          path: '/membership',
          value: {
            type: 'STANDARD',
            criteria: {
              operation: 'EQUALS',
              key: { type: 'IDENTITY', property: 'attribute.duNumber' },
              stringValue: '011',
            },
            identities: null,
          },
        },
      ]);
    });

    it('appends into a composite root that already shares the join op', () => {
      const root: CriteriaNode = {
        operation: 'AND',
        children: [leaf('attribute.a', '1')],
      };
      const result = addBlock(membership(root), {
        attribute: 'attribute.b',
        operation: 'EQUALS',
        values: ['2'],
        join: 'AND',
      });

      expect(result.patch[0].op).toBe('replace');
      expect(result.tree).toEqual({
        operation: 'AND',
        children: [leaf('attribute.a', '1'), leaf('attribute.b', '2')],
      });
    });

    it('wraps the existing root when the join op differs', () => {
      const root: CriteriaNode = {
        operation: 'AND',
        children: [leaf('attribute.a', '1'), leaf('attribute.b', '2')],
      };
      const result = addBlock(membership(root), {
        attribute: 'attribute.c',
        operation: 'EQUALS',
        values: ['3'],
        join: 'OR',
      });

      expect(result.tree).toEqual({
        operation: 'OR',
        children: [root, leaf('attribute.c', '3')],
      });
    });

    it('wraps a single leaf root', () => {
      const root = leaf('attribute.a', '1');
      const result = addBlock(membership(root), {
        attribute: 'attribute.b',
        operation: 'EQUALS',
        values: ['2'],
        join: 'AND',
      });
      expect(result.tree).toEqual({
        operation: 'AND',
        children: [leaf('attribute.a', '1'), leaf('attribute.b', '2')],
      });
    });

    it('builds a multi-value leaf for the new block', () => {
      const result = addBlock(membership(null), {
        attribute: 'attribute.state',
        operation: 'EQUALS',
        values: ['active', 'loa'],
        join: 'AND',
      });
      expect((result.tree as CriteriaNode).values).toEqual(['active', 'loa']);
    });
  });

  // -------------------------------------------------------------------------
  // Remove (R)
  // -------------------------------------------------------------------------
  describe('removeCriteria', () => {
    it('removes an entire leaf by attribute, emitting remove when tree empties', () => {
      const m = membership(leaf('attribute.duNumber', '011'));
      const result = removeCriteria(m, {
        attribute: 'attribute.duNumber',
        mode: 'attribute',
      });
      expect(result.tree).toBeNull();
      expect(result.patch).toEqual([{ op: 'remove', path: '/membership' }]);
    });

    it('collapses a single-child composite after removal', () => {
      const tree: CriteriaNode = {
        operation: 'AND',
        children: [leaf('attribute.a', '1'), leaf('attribute.b', '2')],
      };
      const result = removeCriteria(membership(tree), {
        attribute: 'attribute.b',
        mode: 'attribute',
      });
      expect(result.patch[0].op).toBe('replace');
      expect(result.tree).toEqual(leaf('attribute.a', '1'));
    });

    it('removes one value from a multi-value leaf and keeps the rest', () => {
      const m = membership(leaf('attribute.state', ['active', 'loa', 'terminated']));
      const result = removeCriteria(m, {
        attribute: 'attribute.state',
        mode: 'value',
        value: 'loa',
      });
      expect((result.tree as CriteriaNode).values).toEqual([
        'active',
        'terminated',
      ]);
    });

    it('collapses a two-value leaf to stringValue after removing one value', () => {
      const m = membership(leaf('attribute.state', ['active', 'loa']));
      const result = removeCriteria(m, {
        attribute: 'attribute.state',
        mode: 'value',
        value: 'loa',
      });
      expect((result.tree as CriteriaNode).stringValue).toBe('active');
      expect((result.tree as CriteriaNode).values).toBeUndefined();
    });

    it('removes a single-value leaf entirely when its value is removed', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.a', '1'),
          leaf('attribute.b', '2'),
          leaf('attribute.c', '3'),
        ],
      };
      const result = removeCriteria(membership(tree), {
        attribute: 'attribute.b',
        mode: 'value',
        value: '2',
      });
      expect(result.tree).toEqual({
        operation: 'OR',
        children: [leaf('attribute.a', '1'), leaf('attribute.c', '3')],
      });
    });

    it('skips (no patch) when the value to remove is absent', () => {
      const m = membership(leaf('attribute.state', ['active', 'loa']));
      const result = removeCriteria(m, {
        attribute: 'attribute.state',
        mode: 'value',
        value: 'ghost',
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('value not found');
      expect(result.patch).toEqual([]);
    });

    it('skips (no patch) when the attribute to remove is absent', () => {
      const m = membership(leaf('attribute.state', 'active'));
      const result = removeCriteria(m, {
        attribute: 'attribute.missing',
        mode: 'attribute',
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('attribute not found');
      expect(result.patch).toEqual([]);
    });

    it('skips when there is no criteria', () => {
      const result = removeCriteria(membership(null), {
        attribute: 'attribute.a',
        mode: 'attribute',
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('no criteria');
    });
  });

  // -------------------------------------------------------------------------
  // Consolidate (C)
  // -------------------------------------------------------------------------
  describe('consolidate', () => {
    it('merges sibling OR leaves into a single values[] leaf', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.state', 'loa'),
          leaf('attribute.state', 'conversions'),
          leaf('attribute.state', 'partnerExceptions'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });

      expect(result.status).toBe('ready');
      expect(result.tree).toEqual({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.state' },
        values: ['active', 'loa', 'conversions', 'partnerExceptions'],
      });
    });

    it('keeps non-matching siblings and stays an OR', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.state', 'loa'),
          leaf('attribute.dept', 'sales'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });
      expect(result.tree).toEqual({
        operation: 'OR',
        children: [
          {
            operation: 'EQUALS',
            key: { type: 'IDENTITY', property: 'attribute.state' },
            values: ['active', 'loa'],
          },
          leaf('attribute.dept', 'sales'),
        ],
      });
    });

    it('de-duplicates merged values', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', ['active', 'loa']),
          leaf('attribute.state', 'loa'),
          leaf('attribute.state', 'terminated'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });
      expect((result.tree as CriteriaNode).values).toEqual([
        'active',
        'loa',
        'terminated',
      ]);
    });

    it('consolidates a nested OR inside an AND root', () => {
      const tree: CriteriaNode = {
        operation: 'AND',
        children: [
          leaf('attribute.dept', 'sales'),
          {
            operation: 'OR',
            children: [
              leaf('attribute.state', 'active'),
              leaf('attribute.state', 'loa'),
            ],
          },
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });
      expect(result.tree).toEqual({
        operation: 'AND',
        children: [
          leaf('attribute.dept', 'sales'),
          {
            operation: 'EQUALS',
            key: { type: 'IDENTITY', property: 'attribute.state' },
            values: ['active', 'loa'],
          },
        ],
      });
    });

    it('emits a replace patch wrapping the consolidated tree', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.state', 'loa'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });
      expect(result.patch).toEqual([
        {
          op: 'replace',
          path: '/membership',
          value: {
            type: 'STANDARD',
            criteria: {
              operation: 'EQUALS',
              key: { type: 'IDENTITY', property: 'attribute.state' },
              values: ['active', 'loa'],
            },
            identities: null,
          },
        },
      ]);
    });

    it('skips when fewer than two sibling leaves match', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.dept', 'sales'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('nothing to consolidate');
    });

    it('does NOT merge same-attribute siblings with different operations', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.dept', 'sales', 'EQUALS'),
          leaf('attribute.dept', 'eng', 'STARTS_WITH'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.dept',
      });
      // Each operation appears once → nothing to consolidate; semantics preserved.
      expect(result.status).toBe('skipped');
      expect(result.reason).toBe('nothing to consolidate');
    });

    it('merges only same-operation siblings, leaving other operators separate', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.dept', 'sales', 'EQUALS'),
          leaf('attribute.dept', 'ops', 'EQUALS'),
          leaf('attribute.dept', 'eng', 'STARTS_WITH'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.dept',
      });
      expect(result.status).toBe('ready');
      expect(result.tree).toEqual({
        operation: 'OR',
        children: [
          {
            operation: 'EQUALS',
            key: { type: 'IDENTITY', property: 'attribute.dept' },
            values: ['sales', 'ops'],
          },
          leaf('attribute.dept', 'eng', 'STARTS_WITH'),
        ],
      });
    });

    it('merges two distinct operation groups independently', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.dept', 'sales', 'EQUALS'),
          leaf('attribute.dept', 'ops', 'EQUALS'),
          leaf('attribute.dept', 'eng-', 'STARTS_WITH'),
          leaf('attribute.dept', 'qa-', 'STARTS_WITH'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.dept',
      });
      expect(result.tree).toEqual({
        operation: 'OR',
        children: [
          {
            operation: 'EQUALS',
            key: { type: 'IDENTITY', property: 'attribute.dept' },
            values: ['sales', 'ops'],
          },
          {
            operation: 'STARTS_WITH',
            key: { type: 'IDENTITY', property: 'attribute.dept' },
            values: ['eng-', 'qa-'],
          },
        ],
      });
    });

    it('does not consolidate AND siblings', () => {
      const tree: CriteriaNode = {
        operation: 'AND',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.state', 'loa'),
        ],
      };
      const result = consolidate(membership(tree), {
        attribute: 'attribute.state',
      });
      expect(result.status).toBe('skipped');
    });

    it('skips when there is no criteria', () => {
      const result = consolidate(membership(null), {
        attribute: 'attribute.state',
      });
      expect(result.reason).toBe('no criteria');
    });
  });

  // -------------------------------------------------------------------------
  // Identities + type preservation
  // -------------------------------------------------------------------------
  describe('membership preservation', () => {
    it('preserves identities and type in the rebuilt membership', () => {
      const m: MembershipSelector = {
        type: 'STANDARD',
        criteria: leaf('attribute.a', '1'),
        identities: [{ id: 'id-1' }],
      };
      const result = updateValue(m, {
        attribute: 'attribute.a',
        oldValue: '1',
        newValues: ['2'],
      });
      expect(result.patch[0].value).toMatchObject({
        type: 'STANDARD',
        identities: [{ id: 'id-1' }],
      });
    });

    it('defaults type to STANDARD and identities to null when absent', () => {
      const result = addBlock(
        { criteria: null },
        {
          attribute: 'attribute.a',
          operation: 'EQUALS',
          values: ['1'],
          join: 'AND',
        }
      );
      expect(result.patch[0].value).toMatchObject({
        type: 'STANDARD',
        identities: null,
      });
    });
  });

  // -------------------------------------------------------------------------
  // Dispatch
  // -------------------------------------------------------------------------
  describe('applyOperation', () => {
    it('routes to the correct operation by type', () => {
      const m = membership(leaf('attribute.a', '1'));
      const result = applyOperation(m, {
        type: 'update',
        params: { attribute: 'attribute.a', oldValue: '1', newValues: ['2'] },
      });
      expect((result.tree as CriteriaNode).stringValue).toBe('2');
    });
  });

  // -------------------------------------------------------------------------
  // Prefix-agnostic matching (IDENTITY keys only)
  // -------------------------------------------------------------------------
  describe('prefix-agnostic matching', () => {
    it('updateValue: bare attribute matches prefixed stored key', () => {
      const m = membership(leaf('attribute.cloudLifecycleState', 'active'));
      const result = updateValue(m, {
        attribute: 'cloudLifecycleState',
        oldValue: 'active',
        newValues: ['inactive'],
      });
      expect(result.status).toBe('ready');
      expect((result.tree as CriteriaNode).stringValue).toBe('inactive');
    });

    it('updateValue: prefixed attribute matches bare stored key', () => {
      const m = membership(leaf('cloudLifecycleState', 'active'));
      const result = updateValue(m, {
        attribute: 'attribute.cloudLifecycleState',
        oldValue: 'active',
        newValues: ['inactive'],
      });
      expect(result.status).toBe('ready');
      expect((result.tree as CriteriaNode).stringValue).toBe('inactive');
    });

    it('addValues: bare attribute matches prefixed stored key', () => {
      const m = membership(leaf('attribute.state', 'active'));
      const result = addValues(m, {
        attribute: 'state',
        addValues: ['loa'],
      });
      expect(result.status).toBe('ready');
      expect((result.tree as CriteriaNode).values).toEqual(['active', 'loa']);
    });

    it('removeCriteria: bare attribute matches prefixed stored key', () => {
      const m = membership(leaf('attribute.duNumber', '011'));
      const result = removeCriteria(m, {
        attribute: 'duNumber',
        mode: 'attribute',
      });
      expect(result.status).toBe('ready');
      expect(result.tree).toBeNull();
    });

    it('consolidate: bare attribute matches prefixed stored key', () => {
      const tree: CriteriaNode = {
        operation: 'OR',
        children: [
          leaf('attribute.state', 'active'),
          leaf('attribute.state', 'loa'),
        ],
      };
      const result = consolidate(membership(tree), { attribute: 'state' });
      expect(result.status).toBe('ready');
      expect((result.tree as CriteriaNode).values).toEqual(['active', 'loa']);
    });

    it('does NOT normalize ACCOUNT key matching — must be exact', () => {
      const accountLeaf: CriteriaNode = {
        operation: 'EQUALS',
        key: { type: 'ACCOUNT', property: 'memberOf', sourceId: 'src-1' },
        stringValue: 'group1',
      };
      const m = membership(accountLeaf);
      // Querying with a stripped name should NOT match an ACCOUNT key
      const result = removeCriteria(m, { attribute: 'memberOf', mode: 'attribute' });
      // The ACCOUNT key 'memberOf' exactly equals 'memberOf' → still matches (verbatim)
      expect(result.status).toBe('ready');
      // But querying with a fabricated prefix should NOT match
      const result2 = removeCriteria(m, { attribute: 'attribute.memberOf', mode: 'attribute' });
      expect(result2.status).toBe('skipped');
    });
  });
});
