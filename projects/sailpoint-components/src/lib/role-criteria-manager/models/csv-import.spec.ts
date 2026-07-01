import {
  CsvRoleRef,
  matchRolesToRefs,
  parseCsv,
  parseRoleListCsv,
  refLabel,
} from './csv-import';

describe('csv-import', () => {
  // -------------------------------------------------------------------------
  // parseCsv
  // -------------------------------------------------------------------------
  describe('parseCsv', () => {
    it('parses simple comma-separated rows', () => {
      expect(parseCsv('a,b,c\nd,e,f')).toEqual([
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
      ]);
    });

    it('keeps commas inside quoted fields', () => {
      expect(parseCsv('"Smith, John",r1')).toEqual([['Smith, John', 'r1']]);
    });

    it('unescapes doubled quotes inside a quoted field', () => {
      expect(parseCsv('"say ""hi""",x')).toEqual([['say "hi"', 'x']]);
    });

    it('keeps newlines inside quoted fields', () => {
      expect(parseCsv('"line1\nline2",b')).toEqual([['line1\nline2', 'b']]);
    });

    it('handles CRLF and lone CR line endings', () => {
      expect(parseCsv('a,b\r\nc,d\re,f')).toEqual([
        ['a', 'b'],
        ['c', 'd'],
        ['e', 'f'],
      ]);
    });

    it('does not emit a trailing empty row for a final newline', () => {
      expect(parseCsv('a\nb\n')).toEqual([['a'], ['b']]);
    });

    it('strips a leading UTF-8 BOM', () => {
      expect(parseCsv('﻿RoleName\nA')).toEqual([['RoleName'], ['A']]);
    });

    it('returns an empty array for empty input', () => {
      expect(parseCsv('')).toEqual([]);
    });

    it('preserves an empty trailing cell', () => {
      expect(parseCsv('a,')).toEqual([['a', '']]);
    });
  });

  // -------------------------------------------------------------------------
  // parseRoleListCsv
  // -------------------------------------------------------------------------
  describe('parseRoleListCsv', () => {
    it('parses RoleName/RoleId headers', () => {
      const { refs, errors } = parseRoleListCsv(
        'RoleName,RoleId\nDL - Engineering,\n,2c9180abc'
      );
      expect(errors).toEqual([]);
      expect(refs).toEqual<CsvRoleRef[]>([
        { rowNumber: 2, roleName: 'DL - Engineering' },
        { rowNumber: 3, roleId: '2c9180abc' },
      ]);
    });

    it('accepts a row with both name and id', () => {
      const { refs } = parseRoleListCsv('RoleName,RoleId\nEng,r1');
      expect(refs).toEqual([{ rowNumber: 2, roleName: 'Eng', roleId: 'r1' }]);
    });

    it('treats a headerless single column as role names', () => {
      const { refs, errors } = parseRoleListCsv('DL - Engineering\nDL - Sales');
      expect(errors).toEqual([]);
      expect(refs).toEqual([
        { rowNumber: 1, roleName: 'DL - Engineering' },
        { rowNumber: 2, roleName: 'DL - Sales' },
      ]);
    });

    it('recognizes Name/Id header aliases case-insensitively', () => {
      const { refs } = parseRoleListCsv('name,ID\nEng,r1');
      expect(refs).toEqual([{ rowNumber: 2, roleName: 'Eng', roleId: 'r1' }]);
    });

    it('matches headers regardless of surrounding whitespace', () => {
      const { refs } = parseRoleListCsv(' Role Name , Role Id \nEng,r1');
      expect(refs).toEqual([{ rowNumber: 2, roleName: 'Eng', roleId: 'r1' }]);
    });

    it('skips blank rows', () => {
      const { refs, errors } = parseRoleListCsv('RoleName,RoleId\nEng,\n,\nSales,');
      expect(errors).toEqual([]);
      expect(refs).toEqual([
        { rowNumber: 2, roleName: 'Eng' },
        { rowNumber: 4, roleName: 'Sales' },
      ]);
    });

    it('reports rows that have neither a name nor an id', () => {
      const { refs, errors } = parseRoleListCsv('RoleName,RoleId,Note\n,,skip me');
      expect(refs).toEqual([]);
      expect(errors).toEqual([
        { row: 2, message: 'row has neither a role name nor a role id' },
      ]);
    });

    it('keeps commas inside a quoted role name', () => {
      const { refs } = parseRoleListCsv('RoleName,RoleId\n"Smith, John",');
      expect(refs).toEqual([{ rowNumber: 2, roleName: 'Smith, John' }]);
    });

    it('returns nothing for empty input', () => {
      expect(parseRoleListCsv('')).toEqual({ refs: [], errors: [] });
    });
  });

  // -------------------------------------------------------------------------
  // matchRolesToRefs
  // -------------------------------------------------------------------------
  describe('matchRolesToRefs', () => {
    const roles = [
      { id: 'r1', name: 'Engineering' },
      { id: 'r2', name: 'Sales' },
      { id: 'r3', name: 'Sales' }, // duplicate name
    ];

    it('matches by exact id', () => {
      const { matched, unmatched } = matchRolesToRefs(
        [{ rowNumber: 1, roleId: 'r1' }],
        roles
      );
      expect(matched.map((m) => m.role.id)).toEqual(['r1']);
      expect(unmatched).toEqual([]);
    });

    it('matches by exact name', () => {
      const { matched } = matchRolesToRefs(
        [{ rowNumber: 1, roleName: 'Engineering' }],
        roles
      );
      expect(matched.map((m) => m.role.id)).toEqual(['r1']);
    });

    it('prefers id over name when both are present', () => {
      const { matched } = matchRolesToRefs(
        [{ rowNumber: 1, roleId: 'r2', roleName: 'Engineering' }],
        roles
      );
      expect(matched.map((m) => m.role.id)).toEqual(['r2']);
    });

    it('matches every role sharing a duplicated name', () => {
      const { matched } = matchRolesToRefs(
        [{ rowNumber: 1, roleName: 'Sales' }],
        roles
      );
      expect(matched.map((m) => m.role.id).sort()).toEqual(['r2', 'r3']);
    });

    it('emits a role referenced twice only once', () => {
      const { matched } = matchRolesToRefs(
        [
          { rowNumber: 1, roleId: 'r1' },
          { rowNumber: 2, roleName: 'Engineering' },
        ],
        roles
      );
      expect(matched.map((m) => m.role.id)).toEqual(['r1']);
    });

    it('collects refs that match nothing', () => {
      const { matched, unmatched } = matchRolesToRefs(
        [
          { rowNumber: 1, roleName: 'Engineering' },
          { rowNumber: 2, roleName: 'Nope' },
          { rowNumber: 3, roleId: 'missing' },
        ],
        roles
      );
      expect(matched.map((m) => m.role.id)).toEqual(['r1']);
      expect(unmatched.map((r) => r.rowNumber)).toEqual([2, 3]);
    });
  });

  describe('refLabel', () => {
    it('prefers id, then name, then the row number', () => {
      expect(refLabel({ rowNumber: 4, roleId: 'r1', roleName: 'Eng' })).toBe('r1');
      expect(refLabel({ rowNumber: 4, roleName: 'Eng' })).toBe('Eng');
      expect(refLabel({ rowNumber: 4 })).toBe('row 4');
    });
  });
});
