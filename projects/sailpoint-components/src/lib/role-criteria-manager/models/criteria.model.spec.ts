import {
  applyValueInvariant,
  buildLeafNode,
  canonicalizeIdentityAttr,
  cloneCriteria,
  collectLeafAttributes,
  countNodes,
  CriteriaNode,
  isComposite,
  isLeaf,
  leafValues,
  MembershipSelector,
  normalizeIdentityAttr,
  parseCriteria,
  roleMatchesCriteriaFilter,
} from './criteria.model';

describe('criteria.model', () => {
  describe('parseCriteria', () => {
    it('returns null for nullish / non-object input', () => {
      expect(parseCriteria(null)).toBeNull();
      expect(parseCriteria(undefined)).toBeNull();
      expect(parseCriteria('nope')).toBeNull();
    });

    it('normalizes a single-value leaf into stringValue', () => {
      const raw = {
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.dept' },
        stringValue: 'sales',
      };
      expect(parseCriteria(raw)).toEqual({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.dept' },
        stringValue: 'sales',
      });
    });

    it('normalizes a multi-value leaf into values[]', () => {
      const raw = {
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.state' },
        values: ['active', 'loa'],
      };
      expect(parseCriteria(raw)).toEqual({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.state' },
        values: ['active', 'loa'],
      });
    });

    it('preserves sourceId only when present', () => {
      const withSource = parseCriteria({
        operation: 'EQUALS',
        key: { type: 'ACCOUNT', property: 'memberOf', sourceId: 'src-1' },
        stringValue: 'x',
      });
      expect(withSource?.key).toEqual({
        type: 'ACCOUNT',
        property: 'memberOf',
        sourceId: 'src-1',
      });

      const withoutSource = parseCriteria({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.dept', sourceId: null },
        stringValue: 'x',
      });
      expect(withoutSource?.key).toEqual({
        type: 'IDENTITY',
        property: 'attribute.dept',
      });
    });

    it('normalizes a composite tree recursively', () => {
      const raw = {
        operation: 'AND',
        children: [
          {
            operation: 'EQUALS',
            key: { type: 'IDENTITY', property: 'attribute.a' },
            stringValue: '1',
          },
          {
            operation: 'OR',
            children: [
              {
                operation: 'EQUALS',
                key: { type: 'IDENTITY', property: 'attribute.b' },
                values: ['x', 'y'],
              },
            ],
          },
        ],
      };
      const parsed = parseCriteria(raw);
      expect(parsed).toEqual(raw);
    });

    it('deep-clones so mutating the result does not touch the input', () => {
      const raw = {
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.a' },
        values: ['1', '2'],
      };
      const parsed = parseCriteria(raw)!;
      parsed.values!.push('3');
      expect(raw.values).toEqual(['1', '2']);
    });
  });

  describe('isComposite / isLeaf', () => {
    it('classifies AND/OR as composite and comparisons as leaf', () => {
      expect(isComposite({ operation: 'AND', children: [] })).toBe(true);
      expect(isComposite({ operation: 'OR', children: [] })).toBe(true);
      expect(isLeaf({ operation: 'EQUALS', stringValue: 'x' })).toBe(true);
      expect(isLeaf({ operation: 'CONTAINS', stringValue: 'x' })).toBe(true);
      expect(isComposite({ operation: 'EQUALS', stringValue: 'x' })).toBe(false);
    });
  });

  describe('cloneCriteria', () => {
    it('produces an independent deep copy', () => {
      const node: CriteriaNode = {
        operation: 'AND',
        children: [{ operation: 'EQUALS', stringValue: 'x' }],
      };
      const clone = cloneCriteria(node);
      expect(clone).toEqual(node);
      expect(clone).not.toBe(node);
      expect(clone.children![0]).not.toBe(node.children![0]);
    });
  });

  describe('applyValueInvariant', () => {
    it('collapses a single value to stringValue and clears values', () => {
      const node: CriteriaNode = {
        operation: 'EQUALS',
        values: ['a', 'b'],
      };
      applyValueInvariant(node, ['only']);
      expect(node.stringValue).toBe('only');
      expect(node.values).toBeUndefined();
    });

    it('expands two or more values into values[] and clears stringValue', () => {
      const node: CriteriaNode = { operation: 'EQUALS', stringValue: 'a' };
      applyValueInvariant(node, ['a', 'b']);
      expect(node.values).toEqual(['a', 'b']);
      expect(node.stringValue).toBeUndefined();
    });
  });

  describe('leafValues', () => {
    it('reads values[] when present', () => {
      expect(leafValues({ operation: 'EQUALS', values: ['a', 'b'] })).toEqual([
        'a',
        'b',
      ]);
    });
    it('reads stringValue when set', () => {
      expect(leafValues({ operation: 'EQUALS', stringValue: 'a' })).toEqual([
        'a',
      ]);
    });
    it('returns empty for an unset / empty leaf', () => {
      expect(leafValues({ operation: 'EQUALS' })).toEqual([]);
      expect(leafValues({ operation: 'EQUALS', stringValue: '' })).toEqual([]);
      expect(leafValues({ operation: 'EQUALS', values: [] })).toEqual([]);
    });
  });

  describe('collectLeafAttributes', () => {
    it('collects distinct leaf properties in first-seen order', () => {
      const tree: CriteriaNode = {
        operation: 'AND',
        children: [
          {
            operation: 'EQUALS',
            key: { type: 'IDENTITY', property: 'attribute.b' },
            stringValue: '1',
          },
          {
            operation: 'OR',
            children: [
              {
                operation: 'EQUALS',
                key: { type: 'IDENTITY', property: 'attribute.a' },
                stringValue: '2',
              },
              {
                operation: 'EQUALS',
                key: { type: 'IDENTITY', property: 'attribute.b' },
                stringValue: '3',
              },
            ],
          },
        ],
      };
      expect(collectLeafAttributes(tree)).toEqual(['attribute.b', 'attribute.a']);
    });
    it('returns empty for null', () => {
      expect(collectLeafAttributes(null)).toEqual([]);
    });
  });

  describe('countNodes', () => {
    it('counts composites and leaves', () => {
      const tree: CriteriaNode = {
        operation: 'AND',
        children: [
          { operation: 'EQUALS', stringValue: '1' },
          {
            operation: 'OR',
            children: [
              { operation: 'EQUALS', stringValue: '2' },
              { operation: 'EQUALS', stringValue: '3' },
            ],
          },
        ],
      };
      // AND + leaf + OR + 2 leaves = 5
      expect(countNodes(tree)).toBe(5);
    });
    it('returns 0 for null and 1 for a lone leaf', () => {
      expect(countNodes(null)).toBe(0);
      expect(countNodes({ operation: 'EQUALS', stringValue: 'x' })).toBe(1);
    });
  });

  describe('buildLeafNode', () => {
    it('builds a single-value leaf with default IDENTITY key type', () => {
      expect(buildLeafNode('attribute.dept', 'EQUALS', ['sales'])).toEqual({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.dept' },
        stringValue: 'sales',
      });
    });
    it('builds a multi-value leaf and honors a custom key type', () => {
      expect(
        buildLeafNode('memberOf', 'CONTAINS', ['x', 'y'], 'ACCOUNT')
      ).toEqual({
        operation: 'CONTAINS',
        key: { type: 'ACCOUNT', property: 'memberOf' },
        values: ['x', 'y'],
      });
    });
    it('canonicalizes a bare IDENTITY attribute by adding the attribute. prefix', () => {
      expect(buildLeafNode('cloudLifecycleState', 'EQUALS', ['active'])).toEqual({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.cloudLifecycleState' },
        stringValue: 'active',
      });
    });
    it('does not double-prefix an already-prefixed IDENTITY attribute', () => {
      expect(buildLeafNode('attribute.dept', 'EQUALS', ['sales'])).toEqual({
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.dept' },
        stringValue: 'sales',
      });
    });
    it('does NOT add attribute. prefix to ACCOUNT or ENTITLEMENT key types', () => {
      expect(buildLeafNode('memberOf', 'EQUALS', ['x'], 'ACCOUNT').key?.property).toBe('memberOf');
      expect(buildLeafNode('memberOf', 'EQUALS', ['x'], 'ENTITLEMENT').key?.property).toBe('memberOf');
    });
  });

  describe('normalizeIdentityAttr / canonicalizeIdentityAttr', () => {
    it('normalizeIdentityAttr strips the attribute. prefix', () => {
      expect(normalizeIdentityAttr('attribute.cloudLifecycleState')).toBe('cloudLifecycleState');
      expect(normalizeIdentityAttr('cloudLifecycleState')).toBe('cloudLifecycleState');
    });

    it('normalizeIdentityAttr is case-insensitive for the prefix', () => {
      expect(normalizeIdentityAttr('Attribute.dept')).toBe('dept');
      expect(normalizeIdentityAttr('ATTRIBUTE.dept')).toBe('dept');
    });

    it('canonicalizeIdentityAttr adds the prefix when absent', () => {
      expect(canonicalizeIdentityAttr('cloudLifecycleState')).toBe('attribute.cloudLifecycleState');
    });

    it('canonicalizeIdentityAttr is idempotent', () => {
      expect(canonicalizeIdentityAttr('attribute.cloudLifecycleState')).toBe('attribute.cloudLifecycleState');
    });
  });

  describe('roleMatchesCriteriaFilter — prefix-agnostic IDENTITY matching', () => {
    const makeLeaf = (property: string, value: string): CriteriaNode => ({
      operation: 'EQUALS',
      key: { type: 'IDENTITY', property },
      stringValue: value,
    });

    const wrap = (criteria: CriteriaNode): MembershipSelector =>
      ({ type: 'STANDARD', criteria });

    it('matches when user types bare name and stored key has prefix', () => {
      const m = wrap(makeLeaf('attribute.cloudLifecycleState', 'active'));
      expect(roleMatchesCriteriaFilter(m, { attribute: 'cloudLifecycleState' })).toBe(true);
    });

    it('matches when user types prefixed name and stored key also has prefix', () => {
      const m = wrap(makeLeaf('attribute.cloudLifecycleState', 'active'));
      expect(roleMatchesCriteriaFilter(m, { attribute: 'attribute.cloudLifecycleState' })).toBe(true);
    });

    it('matches a substring of the normalized attribute name', () => {
      const m = wrap(makeLeaf('attribute.cloudLifecycleState', 'active'));
      // 'lifecycle' is a substring of 'cloudLifecycleState' (normalized)
      expect(roleMatchesCriteriaFilter(m, { attribute: 'lifecycle' })).toBe(true);
    });

    it('does not match unrelated attributes', () => {
      const m = wrap(makeLeaf('attribute.dept', 'sales'));
      expect(roleMatchesCriteriaFilter(m, { attribute: 'cloudLifecycleState' })).toBe(false);
    });
  });
});
