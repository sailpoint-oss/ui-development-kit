import { RoleCriteriaManagerComponent } from './role-criteria-manager.component';

/**
 * These specs drive the container's orchestration logic directly with mocked
 * collaborators (SDK, save-file API, dialog, snackbar). Rendering is covered
 * by the production builds; here we assert the SDK call shapes, the
 * snapshot-before-write gate, and per-role result recording.
 */
describe('RoleCriteriaManagerComponent', () => {
  let sdk: {
    listRoles: jest.Mock;
    getRole: jest.Mock;
    patchRole: jest.Mock;
  };
  let saveFile: jest.Mock;
  let apiFactory: { getApi: jest.Mock };
  let dialog: { open: jest.Mock };
  let snackBar: { open: jest.Mock };
  let cdr: { detectChanges: jest.Mock };
  let component: RoleCriteriaManagerComponent;

  function makeRole(id: string, name: string, criteria: unknown) {
    return {
      id,
      name,
      membership: { type: 'STANDARD', criteria, identities: null },
    };
  }

  function dialogResult(value: unknown) {
    return { afterClosed: () => ({ toPromise: () => Promise.resolve(value) }) };
  }

  beforeEach(() => {
    sdk = {
      listRoles: jest.fn(),
      getRole: jest.fn(),
      patchRole: jest.fn().mockResolvedValue({ data: {} }),
    };
    saveFile = jest.fn().mockResolvedValue({ success: true, filePath: '/tmp/s.json' });
    apiFactory = { getApi: jest.fn().mockReturnValue({ saveFile }) };
    dialog = { open: jest.fn().mockReturnValue(dialogResult(true)) };
    snackBar = { open: jest.fn() };
    cdr = { detectChanges: jest.fn() };

    component = new RoleCriteriaManagerComponent(
      sdk as never,
      apiFactory as never,
      dialog as never,
      snackBar as never,
      cdr as never
    );
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  describe('findRoles', () => {
    it('populates rows and auto-selects in single mode', async () => {
      const role = makeRole('r1', 'Engineering', {
        operation: 'EQUALS',
        key: { type: 'IDENTITY', property: 'attribute.dept' },
        stringValue: 'eng',
      });
      sdk.listRoles.mockResolvedValueOnce({ data: [role] });

      component.mode = 'single';
      component.searchText = 'Engineering';
      await component.findRoles();

      expect(sdk.listRoles).toHaveBeenCalledWith({
        filters: 'name eq "Engineering"',
        limit: 250,
        offset: 0,
      });
      expect(component.roleRows).toHaveLength(1);
      expect(component.roleRows[0].selected).toBe(true);
      expect(component.roleRows[0].nodeCount).toBe(1);
      expect(component.roleRows[0].membershipType).toBe('STANDARD');
    });

    it('clamps single mode to the first role when several match', async () => {
      sdk.listRoles.mockResolvedValueOnce({
        data: [makeRole('a', 'Dup', null), makeRole('b', 'Dup', null)],
      });
      component.mode = 'single';
      component.searchText = 'Dup';
      await component.findRoles();

      expect(component.roleRows).toHaveLength(1);
      expect(component.roleRows[0].id).toBe('a');
      expect(snackBar.open).toHaveBeenCalled();
    });

    it('uses a contains filter in bulk mode', async () => {
      sdk.listRoles.mockResolvedValueOnce({ data: [] });
      component.mode = 'bulk';
      component.searchText = 'DL';
      await component.findRoles();
      expect(sdk.listRoles).toHaveBeenCalledWith({
        filters: 'name co "DL"',
        limit: 250,
        offset: 0,
      });
    });
  });

  describe('buildParams', () => {
    it('builds update params and splits comma values', () => {
      component.selectedTabIndex = 0;
      component.updateForm = {
        attribute: 'attribute.x',
        oldValue: '011',
        newValues: '012, 013',
      };
      expect(component.buildParams()).toEqual({
        type: 'update',
        params: {
          attribute: 'attribute.x',
          oldValue: '011',
          newValues: ['012', '013'],
        },
      });
    });

    it('returns null when required fields are missing', () => {
      component.selectedTabIndex = 0;
      component.updateForm = { attribute: '', oldValue: '', newValues: '' };
      expect(component.buildParams()).toBeNull();
    });

    it('requires a value only when remove mode is value', () => {
      component.selectedTabIndex = 3;
      component.removeForm = { attribute: 'attribute.x', mode: 'attribute', value: '' };
      expect(component.buildParams()).not.toBeNull();
      component.removeForm = { attribute: 'attribute.x', mode: 'value', value: '' };
      expect(component.buildParams()).toBeNull();
    });

    it('builds consolidate params', () => {
      component.selectedTabIndex = 4;
      component.consolidateForm = { attribute: 'attribute.state' };
      expect(component.buildParams()).toEqual({
        type: 'consolidate',
        params: { attribute: 'attribute.state' },
      });
    });
  });

  describe('computePreviews', () => {
    it('produces a ready preview with the expected patch', () => {
      component.roleRows = [
        {
          id: 'r1',
          name: 'Eng',
          membershipType: 'STANDARD',
          nodeCount: 1,
          selected: true,
          role: makeRole('r1', 'Eng', null) as never,
        },
      ];
      // seed the cache via getRole-equivalent path
      (component as never as { roleCache: Map<string, unknown> }).roleCache.set(
        'r1',
        makeRole('r1', 'Eng', {
          operation: 'EQUALS',
          key: { type: 'IDENTITY', property: 'attribute.dept' },
          stringValue: 'eng',
        })
      );
      component.selectedTabIndex = 0;
      component.updateForm = {
        attribute: 'attribute.dept',
        oldValue: 'eng',
        newValues: 'sales',
      };
      component.computePreviews();

      expect(component.previews).toHaveLength(1);
      expect(component.actionablePreviews()).toHaveLength(1);
      expect(component.previews[0].result.patch[0]).toMatchObject({
        op: 'replace',
        path: '/membership',
      });
    });
  });

  describe('simulate', () => {
    function seedRows(ids: string[], selectedIds: Set<string>) {
      component.roleRows = ids.map((id) => ({
        id,
        name: id,
        membershipType: 'STANDARD',
        nodeCount: 1,
        selected: selectedIds.has(id),
        role: makeRole(id, id, null) as never,
      }));
      const cache = (component as never as { roleCache: Map<string, unknown> }).roleCache;
      for (const id of ids) {
        cache.set(id, makeRole(id, id, {
          operation: 'EQUALS',
          key: { type: 'IDENTITY', property: 'attribute.dept' },
          stringValue: 'eng',
        }));
      }
    }

    beforeEach(() => {
      component.selectedTabIndex = 0;
      component.updateForm = { attribute: 'attribute.dept', oldValue: 'eng', newValues: 'sales' };
    });

    it('counts only selected roles — 1 of 3 selected yields total 1', async () => {
      seedRows(['r1', 'r2', 'r3'], new Set(['r2']));
      await component.simulate();
      expect(component.simulationResults?.total).toBe(1);
    });

    it('counts all three when all are selected', async () => {
      seedRows(['r1', 'r2', 'r3'], new Set(['r1', 'r2', 'r3']));
      await component.simulate();
      expect(component.simulationResults?.total).toBe(3);
    });
  });

  describe('criteriaTreeToSearchQuery', () => {
    // Access the private translator + leaf helper for direct assertions.
    function q(node: unknown): string {
      return (component as never as { criteriaTreeToSearchQuery: (n: unknown) => string })
        .criteriaTreeToSearchQuery(node);
    }
    const leaf = (property: string, operation: string, value: string | string[], type = 'IDENTITY') => {
      const base: Record<string, unknown> = { operation, key: { type, property } };
      if (Array.isArray(value)) base['values'] = value;
      else base['stringValue'] = value;
      return base;
    };
    const composite = (operation: string, children: unknown[]) => ({ operation, children });

    it('returns empty string for null / empty leaf', () => {
      expect(q(null)).toBe('');
      expect(q(leaf('location', 'EQUALS', []))).toBe('');
    });

    it('prefixes IDENTITY attributes with `attributes.` and quotes the value (EQUALS)', () => {
      expect(q(leaf('location', 'EQUALS', 'Seattle'))).toBe('attributes.location:"Seattle"');
    });

    it('strips an optional `attribute.` prefix before prepending `attributes.`', () => {
      expect(q(leaf('attribute.location', 'EQUALS', 'Seattle'))).toBe('attributes.location:"Seattle"');
      expect(q(leaf('attribute.cloudLifecycleState', 'EQUALS', 'active')))
        .toBe('attributes.cloudLifecycleState:"active"');
    });

    it('does not prefix non-IDENTITY key types', () => {
      expect(q(leaf('memberOf', 'EQUALS', 'Admins', 'ENTITLEMENT'))).toBe('memberOf:"Admins"');
    });

    it('encodes operation semantics with quoted wildcards', () => {
      expect(q(leaf('email', 'ENDS_WITH', '@acmecorp.com'))).toBe('attributes.email:"*@acmecorp.com"');
      expect(q(leaf('title', 'CONTAINS', 'Engineer'))).toBe('attributes.title:"*Engineer*"');
      expect(q(leaf('title', 'STARTS_WITH', 'Senior'))).toBe('attributes.title:"Senior*"');
      expect(q(leaf('workerType', 'NOT_EQUALS', 'Contractor'))).toBe('NOT attributes.workerType:"Contractor"');
    });

    it('ORs multi-value leaves and parenthesizes', () => {
      expect(q(leaf('location', 'EQUALS', ['Seattle', 'Austin'])))
        .toBe('(attributes.location:"Seattle" OR attributes.location:"Austin")');
    });

    it('ANDs multi-value NOT_EQUALS (exclude all)', () => {
      expect(q(leaf('location', 'NOT_EQUALS', ['Seattle', 'Austin'])))
        .toBe('(NOT attributes.location:"Seattle" AND NOT attributes.location:"Austin")');
    });

    it('joins composites with AND/OR and collapses single-child composites', () => {
      expect(q(composite('AND', [leaf('location', 'EQUALS', 'Seattle'), leaf('title', 'CONTAINS', 'Engineer')])))
        .toBe('(attributes.location:"Seattle" AND attributes.title:"*Engineer*")');
      expect(q(composite('AND', [leaf('title', 'CONTAINS', 'Engineer')])))
        .toBe('attributes.title:"*Engineer*"');
    });

    it('handles nested AND/OR trees', () => {
      const tree = composite('AND', [
        leaf('workerType', 'EQUALS', 'FTE'),
        composite('OR', [leaf('location', 'EQUALS', 'Seattle'), leaf('location', 'EQUALS', 'Austin')]),
        leaf('title', 'CONTAINS', 'Engineer'),
      ]);
      expect(q(tree)).toBe(
        '(attributes.workerType:"FTE" AND (attributes.location:"Seattle" OR attributes.location:"Austin") AND attributes.title:"*Engineer*")'
      );
    });

    it('escapes embedded quotes and backslashes', () => {
      expect(q(leaf('displayName', 'EQUALS', 'a"b\\c'))).toBe('attributes.displayName:"a\\"b\\\\c"');
    });
  });

  describe('execute', () => {
    beforeEach(() => {
      component.roleRows = [
        {
          id: 'r1',
          name: 'Eng',
          membershipType: 'STANDARD',
          nodeCount: 1,
          selected: true,
          role: makeRole('r1', 'Eng', null) as never,
        },
      ];
      (component as never as { roleCache: Map<string, unknown> }).roleCache.set(
        'r1',
        makeRole('r1', 'Eng', {
          operation: 'EQUALS',
          key: { type: 'IDENTITY', property: 'attribute.dept' },
          stringValue: 'eng',
        })
      );
      component.selectedTabIndex = 0;
      component.updateForm = {
        attribute: 'attribute.dept',
        oldValue: 'eng',
        newValues: 'sales',
      };
      component.computePreviews();
      component.dryRun = false;
    });

    it('is blocked while dry run is on', async () => {
      component.dryRun = true;
      await component.execute();
      expect(sdk.patchRole).not.toHaveBeenCalled();
    });

    it('saves a snapshot and patches each role', async () => {
      await component.execute();

      expect(saveFile).toHaveBeenCalledTimes(1);
      expect(sdk.patchRole).toHaveBeenCalledWith({
        id: 'r1',
        jsonPatchOperationV2025: expect.arrayContaining([
          expect.objectContaining({ op: 'replace', path: '/membership' }),
        ]),
      });
      expect(component.results).toEqual([
        expect.objectContaining({ role: 'Eng', status: 'Updated' }),
      ]);
    });

    it('aborts the run when the snapshot save is cancelled', async () => {
      saveFile.mockResolvedValueOnce({ success: false, canceled: true });
      await component.execute();
      expect(sdk.patchRole).not.toHaveBeenCalled();
      expect(component.results).toEqual([]);
    });

    it('records an ISC error with detail when patchRole fails', async () => {
      sdk.patchRole.mockRejectedValueOnce({
        response: {
          data: {
            messages: [{ text: 'Bad criteria' }],
            detailCode: '400.1',
            trackingId: 'abc123',
          },
        },
      });
      await component.execute();
      expect(component.results[0]).toMatchObject({
        status: 'Error',
        detail: expect.stringContaining('Bad criteria'),
      });
      expect(component.results[0].detail).toContain('abc123');
    });

    it('does not save a snapshot when the toggle is off', async () => {
      component.snapshot = false;
      await component.execute();
      expect(saveFile).not.toHaveBeenCalled();
      expect(sdk.patchRole).toHaveBeenCalled();
    });
  });

  describe('startOver', () => {
    it('resets roleRows, searched flag, and all operation forms to defaults', () => {
      component.roleRows = [
        { id: 'r1', name: 'Eng', membershipType: 'STANDARD', nodeCount: 1, selected: true, role: {} as never },
      ];
      (component as never as { roleCache: Map<string, unknown> }).roleCache.set('r1', {});
      component.searched = true;
      component.searchText = 'Eng';
      component.selectedTabIndex = 2;
      component.updateForm = { attribute: 'attribute.dept', oldValue: 'eng', newValues: 'sales' };
      component.hasExecuted = true;
      component.results = [{ role: 'Eng', id: 'r1', status: 'Updated' }];
      component.simulationResults = { total: 1, wouldChange: 1, wouldSkip: 0, skipReasons: {} };

      component.startOver();

      expect(component.roleRows).toHaveLength(0);
      expect(component.searched).toBe(false);
      expect(component.searchText).toBe('');
      expect(component.selectedTabIndex).toBe(0);
      expect(component.updateForm).toEqual({ attribute: '', oldValue: '', newValues: '' });
      expect(component.hasExecuted).toBe(false);
      expect(component.results).toHaveLength(0);
      expect(component.simulationResults).toBeNull();
      expect(
        (component as never as { roleCache: Map<string, unknown> }).roleCache.size
      ).toBe(0);
    });

    it('moves the stepper to step 0', () => {
      const stepper = { selectedIndex: 3 };
      (component as never as { stepper: unknown }).stepper = stepper;

      component.startOver();

      expect(stepper.selectedIndex).toBe(0);
    });
  });

  describe('pickCsv (CSV target mode)', () => {
    function setBrowse(browseForCsvFile: jest.Mock) {
      apiFactory.getApi.mockReturnValue({ saveFile, browseForCsvFile });
    }

    it('resolves CSV refs against the tenant and auto-selects matched roles', async () => {
      const eng = makeRole('r1', 'Engineering', null);
      const sales = makeRole('r2', 'Sales', null);
      // fetchAllRoles pages until an empty page: one page, then undefined -> stop.
      sdk.listRoles.mockResolvedValueOnce({ data: [eng, sales] });
      setBrowse(
        jest.fn().mockResolvedValue({
          success: true,
          filePath: '/tmp/roles.csv',
          content: 'RoleName,RoleId\nEngineering,\n,r2\nGhost,',
        })
      );

      component.mode = 'csv';
      await component.pickCsv();

      expect(component.roleRows.map((r) => r.id).sort()).toEqual(['r1', 'r2']);
      expect(component.roleRows.every((r) => r.selected)).toBe(true);
      expect(component.csvUnmatched).toEqual(['Ghost']);
      expect(component.csvFileName).toBe('roles.csv');
      expect(sdk.listRoles).toHaveBeenCalledWith({
        filters: undefined,
        limit: 250,
        offset: 0,
      });
    });

    it('reports parse errors and skips the role fetch when no rows are usable', async () => {
      setBrowse(
        jest.fn().mockResolvedValue({
          success: true,
          filePath: '/tmp/empty.csv',
          content: 'RoleName,RoleId,Note\n,,oops',
        })
      );

      component.mode = 'csv';
      await component.pickCsv();

      expect(component.roleRows).toHaveLength(0);
      expect(component.csvErrors).toEqual([
        { row: 2, message: 'row has neither a role name nor a role id' },
      ]);
      expect(sdk.listRoles).not.toHaveBeenCalled();
    });

    it('does nothing when the file picker is canceled', async () => {
      setBrowse(jest.fn().mockResolvedValue({ success: false, canceled: true }));

      component.mode = 'csv';
      await component.pickCsv();

      expect(component.roleRows).toHaveLength(0);
      expect(sdk.listRoles).not.toHaveBeenCalled();
    });
  });
});
