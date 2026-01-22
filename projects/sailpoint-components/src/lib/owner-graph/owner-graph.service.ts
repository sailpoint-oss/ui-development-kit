import { Injectable, inject } from '@angular/core';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import type {
  SearchDocumentsV2025,
  SearchV2025ApiSearchPostRequest,
  RoleV2025,
  AccessProfileV2025,
  EntitlementV2025,
} from 'sailpoint-api-client';
// import { QueryTypeV2025 } from 'sailpoint-api-client';

@Injectable({ providedIn: 'root' })
export class OwnerGraphService {
  private sdk = inject(SailPointSDKService);

  /**
   * Resolve an identity ID from a username/alias/displayName.
   * Tries exact alias/name first, then a contains query.
   */
  async findIdentityIdByUsername(user: string): Promise<string | null> {
    const u = user.trim();
    if (!u) return null;

    const attempts: SearchV2025ApiSearchPostRequest[] = [
      { searchV2025: { indices: ['identities'], query: { query: `alias:"${u}"` }, sort: ['+id'] }, limit: 1 },
      { searchV2025: { indices: ['identities'], query: { query: `name:"${u}"`  }, sort: ['+id'] }, limit: 1 },
      { searchV2025: { indices: ['identities'], query: { query: `alias:*${u}* OR name:*${u}* OR displayName:*${u}*` }, sort: ['+id'] }, limit: 1 },
    ];

    for (const req of attempts) {
      const { data } = await this.sdk.searchPost(req);
      const hit = (data ?? [])[0] as SearchDocumentsV2025 | undefined;
      if (!hit) continue;
      const anyHit = hit as any;
      return (anyHit.id ?? anyHit['documentId'] ?? null) as string | null;
    }
    return null;
  }

  /**
   * Find identities that are NOT ACTIVE (robust to field differences across tenants).
   */
  async searchNonActiveIdentities(limit = 25) {
    const attempts: Array<NonNullable<SearchV2025ApiSearchPostRequest['searchV2025']>> = [
      // Common: nested lifecycle state
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { 'lifecycleState.stateName': { type: 'TERMS', terms: ['inactive', 'terminated', 'disabled', 'deleted'] } },
      },
      // Flat lifecycleState
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { lifecycleState: { type: 'TERMS', terms: ['inactive', 'terminated', 'disabled', 'deleted'] } },
      },
      // Attributes variations
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { 'attributes.identityState': { type: 'TERMS', terms: ['inactive', 'terminated', 'disabled', 'deleted', 'INACTIVE', 'Inactive'] } },
      },
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { 'attributes.cloudStatus': { type: 'TERMS', terms: ['inactive', 'terminated', 'disabled', 'deleted', 'INACTIVE', 'Inactive'] } },
      },
      // Exclude ACTIVE fallbacks
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { 'lifecycleState.stateName': { type: 'TERMS', terms: ['ACTIVE', 'Active'], exclude: true } },
      },
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { status: { type: 'TERMS', terms: ['ACTIVE', 'Active'], exclude: true } },
      },
      {
        indices: ['identities'],
        query: {},
        sort: ['+displayName', '+id'],
        filters: { active: { type: 'TERMS', terms: ['false'] } },
      },
    ];

    let lastErr: any;
    for (const searchV2025 of attempts) {
      try {
        const req: SearchV2025ApiSearchPostRequest = { searchV2025, limit };
        const { data } = await this.sdk.searchPost(req);

        const rows = (data ?? []).map((doc: SearchDocumentsV2025) => {
          const anyDoc = doc as any;
          const attrs = (anyDoc.attributes ?? {}) as Record<string, unknown>;
          // normalize a bit
          const lifecycle =
            anyDoc.lifecycleState?.stateName ??
            anyDoc.lifecycleState ??
            (attrs['identityState'] as string) ??
            (attrs['cloudStatus'] as string) ??
            (anyDoc.active === false ? 'INACTIVE' : undefined);

        return {
            _raw: anyDoc,
            id: anyDoc.id,
            displayName: anyDoc.displayName ?? anyDoc.name ?? (attrs['name'] as string) ?? anyDoc.id,
            lifecycleState: lifecycle,
          };
        });

        return rows;
      } catch (e: any) {
        lastErr = e?.response?.data ?? e;
      }
    }

    const msg =
      lastErr?.message ??
      lastErr?.detail ??
      (typeof lastErr === 'string' ? lastErr : JSON.stringify(lastErr));
    throw new Error(`identities search failed: ${msg}`);
  }

  // ---------- Owner queries (by Identity ID) ----------

  async listRolesByOwner(ownerId: string, limit = 200): Promise<RoleV2025[]> {
    const res = await this.sdk.listRoles({ limit, filters: `owner.id eq "${ownerId}"` });
    if (res.status !== 200) throw new Error(res.statusText);
    return res.data ?? [];
  }

  async listAccessProfilesByOwner(ownerId: string, limit = 200): Promise<AccessProfileV2025[]> {
    const res = await this.sdk.listAccessProfiles({ limit, filters: `owner.id eq "${ownerId}"` });
    if (res.status !== 200) throw new Error(res.statusText);
    return res.data ?? [];
  }

  async listEntitlementsByOwner(ownerId: string, limit = 200): Promise<EntitlementV2025[]> {
    const res = await this.sdk.listEntitlements({ limit, filters: `owner.id eq "${ownerId}"` });
    if (res.status !== 200) throw new Error(res.statusText);
    return res.data ?? [];
  }

  /**
   * Convenience helper: resolve owner by username and fetch all owned objects.
   */
  async loadOwnedByUsername(username: string) {
    console.log('loadOwnedByUsername called with:', username);
    const id = await this.findIdentityIdByUsername(username);
    console.log('Found identity ID:', id);
    if (!id) throw new Error(`No identity found for "${username}"`);
    const [roles, accessProfiles, entitlements] = await Promise.all([
      this.listRolesByOwner(id),
      this.listAccessProfilesByOwner(id),
      this.listEntitlementsByOwner(id),
    ]);
    console.log('loadOwnedByUsername results:', { roles: roles.length, accessProfiles: accessProfiles.length, entitlements: entitlements.length });
    return { ownerId: id, roles, accessProfiles, entitlements };
  }

async findIdentityByAlias(alias: string) {
  const q = alias.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  const req: SearchV2025ApiSearchPostRequest = {
    searchV2025: {
      indices: ['identities'],
      // use the same style you already use elsewhere
      queryType: 'SAILPOINT' as any,
      query: {
        // try a few common fields
        query: `(alias:"${q}") OR (name:"${q}") OR (displayName:"${q}") OR (emailAddress:"${q}")`
      },
      sort: ['+displayName', '+id']
    },
    limit: 1
  };

  const { data } = await this.sdk.searchPost(req);
  const first = (data ?? [])[0] as any;
  if (!first) {
    throw new Error(`No identity found for alias "${alias}"`);
  }
  return {
    id: first.id as string,
    displayName: (first.displayName ?? first.name ?? alias) as string
  };
}

  /**
   * Get detailed role information including composition and configuration
   */
  async getRoleDetails(roleId: string): Promise<any> {
    const res = await this.sdk.getRole({ id: roleId });
    if (res.status !== 200) throw new Error(res.statusText);
    return res.data;
  }

  /**
   * Get access profiles and entitlements that make up a role
   */
  async getRoleComposition(roleId: string): Promise<{accessProfiles: any[], entitlements: any[]}> {
    try {
      const roleDetails = await this.getRoleDetails(roleId);

      // Extract access profiles and entitlements from role composition
      const accessProfiles = roleDetails.accessProfiles || [];
      const entitlements = roleDetails.entitlements || [];

      // Enrich access profiles with full details to get source information
      const enrichedAccessProfiles: any[] = [];
      for (const ap of accessProfiles) {
        try {
          if (ap.id) {
            const fullDetails = await this.getAccessProfileDetails(String(ap.id));
            enrichedAccessProfiles.push({ ...ap, ...fullDetails });
          } else {
            enrichedAccessProfiles.push(ap);
          }
        } catch (error) {
          console.warn(`Could not fetch details for access profile ${String(ap.name)}:`, error);
          enrichedAccessProfiles.push(ap);
        }
      }

      return {
        accessProfiles: enrichedAccessProfiles,
        entitlements
      };
    } catch (error) {
      console.warn(`Could not fetch composition for role ${roleId}:`, error);
      return { accessProfiles: [], entitlements: [] };
    }
  }

  /**
   * Get detailed access profile information including its entitlements
   */
  async getAccessProfileDetails(accessProfileId: string): Promise<any> {
    const res = await this.sdk.getAccessProfile({ id: accessProfileId });
    if (res.status !== 200) throw new Error(res.statusText);
    return res.data;
  }

  /**
   * Get detailed entitlement information
   */
  async getEntitlementDetails(entitlementId: string): Promise<any> {
    const res = await this.sdk.getEntitlement({ id: entitlementId });
    if (res.status !== 200) throw new Error(res.statusText);
    return res.data;
  }

  /**
   * Get entitlements that are part of an access profile
   */
  async getAccessProfileEntitlements(accessProfileId: string): Promise<any[]> {
    try {
      console.log(`Fetching entitlements for access profile: ${accessProfileId}`);

      // Get access profile details which includes entitlements array
      const apDetails = await this.getAccessProfileDetails(accessProfileId);
      console.log('Access Profile Details:', apDetails);

      // Extract entitlements from the response
      const entitlements = apDetails.entitlements || [];
      console.log('Found entitlements in access profile details:', entitlements);

      // Return the entitlements array
      return entitlements as any[];

    } catch (error) {
      console.error(`Could not fetch access profile details for ${accessProfileId}:`, error);
      return [];
    }
  }

  /**
   * Get top identities by ownership count (more efficient approach)
   */
  async getTopOwners(limit = 10): Promise<any[]> {
    try {
      console.log('Fetching top owners with accurate counts...');

      // First, get a broader sample to find unique owners (increased limit for better coverage)
      const [rolesOwners, apsOwners, entsOwners] = await Promise.all([
        this.getOwnersFromObjects('roles', 200),
        this.getOwnersFromObjects('accessProfiles', 200),
        this.getOwnersFromObjects('entitlements', 200)
      ]);

      // Collect all unique owner IDs
      const allOwnerIds = new Set<string>();
      const ownerDisplayNames = new Map<string, string>();

      [...rolesOwners, ...apsOwners, ...entsOwners].forEach((owner: any) => {
        allOwnerIds.add(owner.id as string);
        ownerDisplayNames.set(owner.id as string, owner.displayName as string);
      });

      console.log(`Found ${allOwnerIds.size} unique owners, getting accurate counts...`);

      // Get accurate counts and identity details for each unique owner
      const ownershipPromises = Array.from(allOwnerIds).map(async (ownerId) => {
        const [rolesCount, accessProfilesCount, entitlementsCount, identityDetails] = await Promise.all([
          this.getOwnershipCount('roles', ownerId),
          this.getOwnershipCount('accessProfiles', ownerId),
          this.getOwnershipCount('entitlements', ownerId),
          this.getIdentityDetails(ownerId).catch(() => null) // gracefully handle errors
        ]);

        // Extract job title and department from identity attributes
        const attributes = identityDetails?.attributes || {};
        const jobTitle = attributes.jobTitle || attributes.title || null;
        const department = attributes.department || attributes.dept || null;

        // Handle lifecycle state properly - it can be an object or a string
        let lifecycleState: string | null = null;
        if (identityDetails?.lifecycleState) {
          if (typeof identityDetails.lifecycleState === 'string') {
            lifecycleState = identityDetails.lifecycleState;
          } else if (identityDetails.lifecycleState.stateName) {
            lifecycleState = identityDetails.lifecycleState.stateName;
          } else if (identityDetails.lifecycleState.name) {
            lifecycleState = identityDetails.lifecycleState.name;
          }

          // Ensure first letter is capitalized
          if (lifecycleState && typeof lifecycleState === 'string') {
            lifecycleState = lifecycleState.charAt(0).toUpperCase() + lifecycleState.slice(1).toLowerCase();
          }
        }

        return {
          id: ownerId,
          displayName: ownerDisplayNames.get(ownerId) || identityDetails?.displayName || identityDetails?.name || ownerId,
          jobTitle,
          department,
          lifecycleState,
          rolesCount,
          accessProfilesCount,
          entitlementsCount,
          totalCount: rolesCount + accessProfilesCount + entitlementsCount
        };
      });

      // Wait for all ownership counts to complete
      const ownershipResults = await Promise.all(ownershipPromises);

      // Create ownership map from accurate results
      const ownershipMap = new Map<string, any>();
      ownershipResults.forEach(owner => {
        ownershipMap.set(owner.id, owner);
      });

      // Convert to array and sort by total count
      const results = Array.from(ownershipMap.values())
        .filter(owner => owner.totalCount > 0)
        .sort((a, b) => b.totalCount - a.totalCount)
        .slice(0, limit);

      console.log(`Found ${results.length} owners with objects:`, results);
      return results;

    } catch (error) {
      console.error('Error fetching top owners:', error);
      return [];
    }
  }

  /**
   * Get all non-active identities with ownership data (optimized for performance)
   */
  async getNonActiveOwners(): Promise<any[]> {
    try {
      console.log('Fetching non-active identities with ownership data (optimized)...');

      // Step 1: Get all non-active identities first
      const searchReq = {
        searchV2025: {
          indices: ['identities'] as any[],
          queryType: 'SAILPOINT' as any,
          query: {
            query: 'NOT attributes.cloudLifecycleState:Active'
          },
          sort: ['+displayName', '+id']
        },
        limit: 250
      };

      console.log('Search request being sent:', JSON.stringify(searchReq, null, 2));
      const { data: identities } = await this.sdk.searchPost(searchReq);

      console.log('Raw search results:', identities);

      if (!identities || identities.length === 0) {
        console.log('No non-active identities found with search query: NOT attributes.cloudLifecycleState:Active');
        return [];
      }

      console.log(`Found ${identities.length} non-active identities with search results:`, identities.map((i: any) => ({
        id: i.id,
        displayName: i.displayName,
        lifecycleState: i.lifecycleState,
        attributes: i.attributes?.cloudLifecycleState
      })));

      // Check if Craig Hart is in the results
      const craigHart = identities.find((i: any) => i.displayName?.toLowerCase().includes('craig') || i.name?.toLowerCase().includes('craig'));
      if (craigHart) {
        console.log('Craig Hart found in search results:', craigHart);
      } else {
        console.log('Craig Hart NOT found in search results');
        console.log('All displayNames found:', identities.map((i: any) => (i.displayName || i.name) as string));
      }

      // Step 2: Get all objects (roles, access profiles, entitlements) in parallel
      // This is much faster than individual ownership count calls
      // Using smaller limits to avoid API 400 errors
      const [allRoles, allAccessProfiles, allEntitlements] = await Promise.all([
        this.sdk.listRoles({ limit: 250 }).then(res => res.data || []).catch(() => []),
        this.sdk.listAccessProfiles({ limit: 250 }).then(res => res.data || []).catch(() => []),
        this.sdk.listEntitlements({ limit: 250 }).then(res => res.data || []).catch(() => [])
      ]);

      console.log(`Loaded ${allRoles.length} roles, ${allAccessProfiles.length} access profiles, ${allEntitlements.length} entitlements`);

      // Step 3: Create ownership counts map for non-active identities only
      const nonActiveIdSet = new Set(identities.map((i: any) => i.id as string));
      const ownershipCounts = new Map<string, { rolesCount: number; accessProfilesCount: number; entitlementsCount: number }>();

      // Initialize counts for all non-active identities
      for (const identity of identities) {
        if (identity.id) {
          ownershipCounts.set(identity.id, { rolesCount: 0, accessProfilesCount: 0, entitlementsCount: 0 });
        }
      }

      // Count roles owned by non-active identities
      allRoles.forEach((role: any) => {
        if (role.owner?.id && nonActiveIdSet.has(role.owner.id as string)) {
          const counts = ownershipCounts.get(role.owner.id as string);
          if (counts) counts.rolesCount++;
        }
      });

      // Count access profiles owned by non-active identities
      allAccessProfiles.forEach((ap: any) => {
        if (ap.owner?.id && nonActiveIdSet.has(ap.owner.id as string)) {
          const counts = ownershipCounts.get(ap.owner.id as string);
          if (counts) counts.accessProfilesCount++;
        }
      });

      // Count entitlements owned by non-active identities
      allEntitlements.forEach((ent: any) => {
        if (ent.owner?.id && nonActiveIdSet.has(ent.owner.id as string)) {
          const counts = ownershipCounts.get(ent.owner.id as string);
          if (counts) counts.entitlementsCount++;
        }
      });

      // Step 4: Build results for identities with ownership only
      const results = identities
        .map((identity: any) => {
          const counts = ownershipCounts.get(identity.id as string);
          if (!counts) return null;

          const totalCount = counts.rolesCount + counts.accessProfilesCount + counts.entitlementsCount;

          // Only include identities that own something
          if (totalCount === 0) return null;

          // Extract job title and department from identity attributes
          const attributes = identity.attributes || {};
          const jobTitle = attributes.jobTitle || attributes.title || null;
          const department = attributes.department || attributes.dept || null;

          // Handle lifecycle state - use cloudLifecycleState directly since that's what we filter on
          let lifecycleState: string | null = attributes.cloudLifecycleState || null;

          // Capitalize if we have a valid string
          if (lifecycleState && typeof lifecycleState === 'string') {
            lifecycleState = lifecycleState.charAt(0).toUpperCase() + lifecycleState.slice(1).toLowerCase();
          }

          return {
            id: identity.id,
            displayName: identity.displayName || identity.name || identity.id,
            jobTitle,
            department,
            lifecycleState,
            rolesCount: counts.rolesCount,
            accessProfilesCount: counts.accessProfilesCount,
            entitlementsCount: counts.entitlementsCount,
            totalCount,
            _raw: identity
          };
        })
        .filter(result => result !== null)
        .sort((a, b) => b.totalCount - a.totalCount);

      console.log(`Found ${results.length} non-active identities with ownership:`, results);
      return results;

    } catch (error) {
      console.error('Error fetching non-active owners:', error);
      return [];
    }
  }

  /**
   * Get identity details including attributes for additional fields like jobTitle and department
   */
  private async getIdentityDetails(identityId: string): Promise<any> {
    try {
      const res = await this.sdk.getIdentity({ id: identityId });
      if (res.status !== 200) {
        console.warn(`Could not fetch identity details for ${identityId}: ${res.statusText}`);
        return null;
      }
      return res.data;
    } catch (error) {
      console.warn(`Error fetching identity details for ${identityId}:`, error);
      return null;
    }
  }

  /**
   * Get owners from a specific object type with counts
   */
  private async getOwnersFromObjects(type: 'roles' | 'accessProfiles' | 'entitlements', limit: number): Promise<any[]> {
    try {
      let response;

      switch (type) {
        case 'roles':
          response = await this.sdk.listRoles({ limit });
          break;
        case 'accessProfiles':
          response = await this.sdk.listAccessProfiles({ limit });
          break;
        case 'entitlements':
          response = await this.sdk.listEntitlements({ limit });
          break;
      }

      if (response.status !== 200 || !response.data) {
        return [];
      }

      // Group by owner and count
      const ownerCounts = new Map<string, { owner: any; count: number }>();

      response.data.forEach((item: any) => {
        if (item.owner && item.owner.id) {
          const ownerId = item.owner.id as string;
          const existing = ownerCounts.get(ownerId);

          if (existing) {
            existing.count++;
          } else {
            ownerCounts.set(ownerId, {
              owner: item.owner,
              count: 1
            });
          }
        }
      });

      // Convert to array format
      return Array.from(ownerCounts.values()).map(({ owner, count }) => ({
        id: owner.id,
        displayName: owner.name || owner.displayName || owner.id,
        count
      }));

    } catch (error) {
      console.warn(`Error getting owners from ${type}:`, error);
      return [];
    }
  }

  /**
   * Get count of objects owned by an identity for a specific type
   */
  private async getOwnershipCount(type: 'roles' | 'accessProfiles' | 'entitlements', ownerId: string): Promise<number> {
    try {
      let response;

      switch (type) {
        case 'roles':
          response = await this.sdk.listRoles({ filters: `owner.id eq "${ownerId}"` });
          break;
        case 'accessProfiles':
          response = await this.sdk.listAccessProfiles({ filters: `owner.id eq "${ownerId}"` });
          break;
        case 'entitlements':
          response = await this.sdk.listEntitlements({ filters: `owner.id eq "${ownerId}"` });
          break;
      }

      // Extract count from response headers or data
      return this.extractCount(response);

    } catch (error) {
      console.warn(`Could not get ${type} count for owner ${ownerId}:`, error);
      return 0;
    }
  }

  /**
   * Extract count from API response
   */
  private extractCount(response: any): number {
    // Check if count is in headers (X-Total-Count)
    if (response.headers && response.headers['x-total-count']) {
      return parseInt(response.headers['x-total-count'] as string, 10) || 0;
    }

    // Check if count is in response data
    if (response.data && Array.isArray(response.data)) {
      return (response.data as any[]).length;
    }

    return 0;
  }

  /**
   * Search for identities by name (for type-ahead functionality)
   */
  async searchIdentitiesByName(query: string, limit = 10): Promise<any[]> {
    try {
      if (!query || query.length < 2) {
        return [];
      }

      console.log(`Searching for identities with query: "${query}"`);

      const searchReq = {
        searchV2025: {
          indices: ['identities'] as any[],
          query: {
            query: `displayName:*${query}* OR name:*${query}* OR alias:*${query}*`
          },
          sort: ['+displayName', '+id']
        },
        limit
      };

      const { data: identities } = await this.sdk.searchPost(searchReq);

      if (!identities || identities.length === 0) {
        return [];
      }

      // Don't filter by active status - let users search all identities
      // They can see the lifecycle state and decide for themselves
      const searchableIdentities = identities;

      // For search results, get ownership counts
      const results = await Promise.all(
        searchableIdentities.map(async (identity: any) => {
          const ownerId = identity.id;
          const displayName = identity.displayName || identity.name || ownerId;

          try {
            // Get basic counts (simplified for speed)
            const [rolesCount, apsCount, entsCount] = await Promise.all([
              this.getOwnershipCount('roles', ownerId as string),
              this.getOwnershipCount('accessProfiles', ownerId as string),
              this.getOwnershipCount('entitlements', ownerId as string)
            ]);

            const totalCount = rolesCount + apsCount + entsCount;

            // Extract job title and department from identity attributes
            const attributes = identity.attributes || {};
            const jobTitle = attributes.jobTitle || attributes.title || null;
            const department = attributes.department || attributes.dept || null;

            // Handle lifecycle state - use cloudLifecycleState or fallback to lifecycleState
            let lifecycleState: string | null = null;
            if (attributes.cloudLifecycleState) {
              lifecycleState = attributes.cloudLifecycleState;
            } else if (identity.lifecycleState) {
              lifecycleState = identity.lifecycleState?.stateName || identity.lifecycleState;
            }

            // Capitalize if we have a valid string
            if (lifecycleState && typeof lifecycleState === 'string') {
              lifecycleState = lifecycleState.charAt(0).toUpperCase() + lifecycleState.slice(1).toLowerCase();
            }

            return {
              id: ownerId,
              displayName,
              jobTitle,
              department,
              lifecycleState,
              rolesCount,
              accessProfilesCount: apsCount,
              entitlementsCount: entsCount,
              totalCount,
              _raw: identity
            };
          } catch {
            // Extract job title and department from identity attributes even in error case
            const attributes = identity.attributes || {};
            const jobTitle = attributes.jobTitle || attributes.title || null;
            const department = attributes.department || attributes.dept || null;

            // Handle lifecycle state - use cloudLifecycleState or fallback to lifecycleState
            let lifecycleState: string | null = null;
            if (attributes.cloudLifecycleState) {
              lifecycleState = attributes.cloudLifecycleState;
            } else if (identity.lifecycleState) {
              lifecycleState = identity.lifecycleState?.stateName || identity.lifecycleState;
            }

            // Capitalize if we have a valid string
            if (lifecycleState && typeof lifecycleState === 'string') {
              lifecycleState = lifecycleState.charAt(0).toUpperCase() + lifecycleState.slice(1).toLowerCase();
            }

            return {
              id: ownerId,
              displayName,
              jobTitle,
              department,
              lifecycleState,
              rolesCount: 0,
              accessProfilesCount: 0,
              entitlementsCount: 0,
              totalCount: 0,
              _raw: identity
            };
          }
        })
      );

      return results.sort((a, b) => b.totalCount - a.totalCount);

    } catch (error) {
      console.error('Error searching identities:', error);
      return [];
    }
  }

  /**
   * Search for identities by name (active only - for transfer wizards)
   */
  async searchActiveIdentitiesByName(query: string, limit = 10): Promise<any[]> {
    try {
      if (!query || query.length < 2) {
        return [];
      }

      console.log(`Searching for active identities with query: "${query}"`);
      const searchReq = {
        searchV2025: {
          indices: ['identities'] as any[],
          query: {
            query: `(displayName:*${query}* OR name:*${query}* OR alias:*${query}*) AND attributes.cloudLifecycleState:Active`
          },
          sort: ['+displayName', '+id']
        },
        limit
      };

      const { data: identities } = await this.sdk.searchPost(searchReq);

      if (!identities || identities.length === 0) {
        return [];
      }

      // For owner search, we don't need ownership counts - just basic identity info
      const results = identities.map((identity: any) => {
        const attributes = identity.attributes || {};
        const jobTitle = attributes.jobTitle || attributes.title || null;
        const department = attributes.department || attributes.dept || null;

        // Use Active since we're filtering to active identities only
        const lifecycleState = 'Active';

        return {
          id: identity.id,
          displayName: identity.displayName || identity.name || identity.id,
          jobTitle,
          department,
          lifecycleState,
          rolesCount: 0, // Not needed for owner search
          accessProfilesCount: 0,
          entitlementsCount: 0,
          totalCount: 0,
          _raw: identity
        };
      });

      console.log(`Found ${results.length} active identities for owner search`);
      return results;

    } catch (error) {
      console.error('Error searching for active identities:', error);
      return [];
    }
  }

  // Transfer Ownership Methods

  /**
   * Transfer ownership of roles to a new owner
   */
  async transferRoleOwnership(roleIds: string[], newOwnerId: string): Promise<void> {
    console.log(`Transferring ${roleIds.length} roles to owner ${newOwnerId}`);

    for (const roleId of roleIds) {
      try {
        console.log(`Attempting to transfer role ${roleId} to owner ${newOwnerId}`);

        // Get current role to understand the owner structure
        const currentRole = await this.getRoleDetails(roleId);
        console.log(`Current role owner structure:`, currentRole.owner);

        // Try different patch operation structures based on API documentation
        const patchOperations = [
          // Standard approach: replace entire owner object
          { op: 'replace' as const, path: '/owner', value: { id: newOwnerId, type: 'IDENTITY' } },
          // Fallback: just the ID if owner expects simple structure
          { op: 'replace' as const, path: '/owner', value: { id: newOwnerId } },
          // Alternative: replace just the owner ID field
          { op: 'replace' as const, path: '/owner/id', value: newOwnerId }
        ];

        let success = false;
        let lastError;

        for (const patchOp of patchOperations) {
          try {
            console.log(`Trying patch operation:`, patchOp);

            const res = await this.sdk.patchRole({
              id: roleId,
              jsonPatchOperationV2025: [patchOp]
            });

            if (res.status === 200 || res.status === 204) {
              console.log(`Successfully transferred role ${roleId} to owner ${newOwnerId}`);
              success = true;
              break;
            }
          } catch (patchError: any) {
            console.warn(`Patch operation failed:`, patchOp);
            console.warn(`Error details:`, {
              status: patchError?.response?.status,
              statusText: patchError?.response?.statusText,
              data: patchError?.response?.data,
              message: patchError?.message
            });
            lastError = patchError;
            continue;
          }
        }

        if (!success) {
          const errorMsg = lastError?.response?.data?.message || lastError?.response?.data || lastError?.message || 'Unknown error';
          throw new Error(`Failed to update role ${roleId}: ${errorMsg}`);
        }

      } catch (error: any) {
        const errorDetails = error?.response?.data || error;
        console.error(`Error transferring role ${roleId}:`, errorDetails);
        throw new Error(`Role transfer failed for ${roleId}: ${error.message}`);
      }
    }
  }

  /**
   * Transfer ownership of access profiles to a new owner
   */
  async transferAccessProfileOwnership(accessProfileIds: string[], newOwnerId: string): Promise<void> {
    console.log(`Transferring ${accessProfileIds.length} access profiles to owner ${newOwnerId}`);

    for (const apId of accessProfileIds) {
      try {
        console.log(`Attempting to transfer access profile ${apId} to owner ${newOwnerId}`);

        // Get current access profile to understand the owner structure
        const currentAp = await this.getAccessProfileDetails(apId);
        console.log(`Current access profile owner structure:`, currentAp.owner);

        const patchOperations = [
          { op: 'replace' as const, path: '/owner', value: { id: newOwnerId, type: 'IDENTITY' } },
          { op: 'replace' as const, path: '/owner', value: { id: newOwnerId } },
          { op: 'replace' as const, path: '/owner/id', value: newOwnerId }
        ];

        let success = false;
        let lastError;

        for (const patchOp of patchOperations) {
          try {
            const res = await this.sdk.patchAccessProfile({
              id: apId,
              jsonPatchOperationV2025: [patchOp]
            });

            if (res.status === 200 || res.status === 204) {
              console.log(`Successfully transferred access profile ${apId} to owner ${newOwnerId}`);
              success = true;
              break;
            }
          } catch (patchError: any) {
            console.warn(`Access profile patch operation failed:`, patchOp);
            console.warn(`Error details:`, {
              status: patchError?.response?.status,
              statusText: patchError?.response?.statusText,
              data: patchError?.response?.data,
              message: patchError?.message
            });
            lastError = patchError;
            continue;
          }
        }

        if (!success) {
          const errorMsg = lastError?.response?.data?.message || lastError?.response?.data || lastError?.message || 'Unknown error';
          throw new Error(`Failed to update access profile ${apId}: ${errorMsg}`);
        }

      } catch (error: any) {
        const errorDetails = error?.response?.data || error;
        console.error(`Error transferring access profile ${apId}:`, errorDetails);
        throw new Error(`Access profile transfer failed for ${apId}: ${error.message}`);
      }
    }
  }

  /**
   * Transfer ownership of entitlements to a new owner
   */
  async transferEntitlementOwnership(entitlementIds: string[], newOwnerId: string): Promise<void> {
    console.log(`Transferring ${entitlementIds.length} entitlements to owner ${newOwnerId}`);

    for (const entId of entitlementIds) {
      try {
        console.log(`Attempting to transfer entitlement ${entId} to owner ${newOwnerId}`);

        // Get current entitlement to understand the owner structure
        const currentEnt = await this.getEntitlementDetails(entId);
        console.log(`Current entitlement owner structure:`, currentEnt.owner);

        const patchOperations = [
          { op: 'replace' as const, path: '/owner', value: { id: newOwnerId, type: 'IDENTITY' } },
          { op: 'replace' as const, path: '/owner', value: { id: newOwnerId } },
          { op: 'replace' as const, path: '/owner/id', value: newOwnerId }
        ];

        let success = false;
        let lastError;

        for (const patchOp of patchOperations) {
          try {
            const res = await this.sdk.patchEntitlement({
              id: entId,
              jsonPatchOperationV2025: [patchOp]
            });

            if (res.status === 200 || res.status === 204) {
              console.log(`Successfully transferred entitlement ${entId} to owner ${newOwnerId}`);
              success = true;
              break;
            }
          } catch (patchError: any) {
            console.warn(`Entitlement patch operation failed:`, patchOp);
            console.warn(`Error details:`, {
              status: patchError?.response?.status,
              statusText: patchError?.response?.statusText,
              data: patchError?.response?.data,
              message: patchError?.message
            });
            lastError = patchError;
            continue;
          }
        }

        if (!success) {
          const errorMsg = lastError?.response?.data?.message || lastError?.response?.data || lastError?.message || 'Unknown error';
          throw new Error(`Failed to update entitlement ${entId}: ${errorMsg}`);
        }

      } catch (error: any) {
        const errorDetails = error?.response?.data || error;
        console.error(`Error transferring entitlement ${entId}:`, errorDetails);
        throw new Error(`Entitlement transfer failed for ${entId}: ${error.message}`);
      }
    }
  }

  // Access Request Management Methods

  /**
   * Get pending access requests for objects
   */
  async getPendingAccessRequests(objectIds: string[], objectType: 'roles' | 'accessProfiles' | 'entitlements'): Promise<any[]> {
    try {
      console.log(`Fetching pending access requests for ${objectType}:`, objectIds);

      // Build search query based on object type and IDs
      let query = '';
      if (objectType === 'roles') {
        query = objectIds.map(id => `requestedFor.requestedItems.id:"${id}"`).join(' OR ');
      } else if (objectType === 'accessProfiles') {
        query = objectIds.map(id => `requestedFor.requestedItems.id:"${id}"`).join(' OR ');
      } else {
        query = objectIds.map(id => `requestedFor.requestedItems.id:"${id}"`).join(' OR ');
      }

      const searchReq = {
        searchV2025: {
          indices: ['accessrequests'] as any[],
          query: {
            query: `state:Pending AND (${query})`
          },
          sort: ['-created']
        },
        limit: 100
      };

      const { data: requests } = await this.sdk.searchPost(searchReq);
      return requests || [];

    } catch (error) {
      console.error('Error fetching pending access requests:', error);
      return [];
    }
  }

  /**
   * Check if an identity is an approver for specific objects
   */
  async checkApproverStatus(objectId: string, objectType: 'role' | 'accessProfile' | 'entitlement', ownerId: string): Promise<{isApprover: boolean, approvers: any[]}> {
    try {
      let objectDetails: any;

      // Get object details to check approval configuration
      switch (objectType) {
        case 'role':
          objectDetails = await this.getRoleDetails(objectId);
          break;
        case 'accessProfile':
          objectDetails = await this.getAccessProfileDetails(objectId);
          break;
        case 'entitlement':
          objectDetails = await this.getEntitlementDetails(objectId);
          break;
      }

      // Check if the object has access request configuration
      const accessRequestConfig = objectDetails.accessRequestConfig || objectDetails.requestConfig;
      if (!accessRequestConfig) {
        return { isApprover: false, approvers: [] };
      }

      // Extract approvers from the configuration
      const approvers = this.extractApproversFromConfig(accessRequestConfig);

      // Check if the current owner is in the approvers list
      const isApprover = approvers.some(approver => approver.id === ownerId);

      return { isApprover, approvers };

    } catch (error) {
      console.warn(`Could not check approver status for ${objectType} ${objectId}:`, error);
      return { isApprover: false, approvers: [] };
    }
  }

  /**
   * Extract approvers from access request configuration
   */
  private extractApproversFromConfig(config: any): any[] {
    const approvers: any[] = [];

    // Handle different approval configuration structures
    if (config.approvalSchemes) {
      config.approvalSchemes.forEach((scheme: any) => {
        if (scheme.approverType === 'IDENTITY' && scheme.approverId) {
          approvers.push({
            id: scheme.approverId,
            name: scheme.approverName || scheme.approverId,
            type: 'identity'
          });
        } else if (scheme.approverType === 'MANAGER') {
          approvers.push({
            type: 'manager',
            name: 'Manager'
          });
        } else if (scheme.approverType === 'OWNER') {
          approvers.push({
            type: 'owner',
            name: 'Owner'
          });
        }
      });
    }

    // Handle simple approver configurations
    if (config.approvers) {
      config.approvers.forEach((approver: any) => {
        approvers.push({
          id: approver.id,
          name: approver.name || approver.displayName,
          type: 'identity'
        });
      });
    }

    return approvers;
  }

  /**
   * Reassign pending access requests to a new approver
   */
  async reassignAccessRequests(requestIds: string[], newApproverId: string): Promise<void> {
    console.log(`Reassigning ${requestIds.length} access requests to approver ${newApproverId}`);

    // TODO: Implement actual access request reassignment once API structure is confirmed
    // For now, log the intent and simulate the action
    console.log('Access request reassignment simulation:');
    console.log('Request IDs:', requestIds);
    console.log('New Approver ID:', newApproverId);

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Access request reassignment completed (simulated)');
  }

  /**
   * Update approver configuration for an object
   */
  updateObjectApprover(objectId: string, objectType: 'role' | 'accessProfile' | 'entitlement', newApproverId: string): void {
    try {
      // This would require updating the access request configuration
      // Implementation depends on the specific approval workflow structure
      console.log(`Updating approver for ${objectType} ${objectId} to ${newApproverId}`);

      // For now, we'll focus on the access request reassignment
      // Object approver configuration updates would require more complex patch operations

    } catch (error) {
      console.error(`Error updating approver for ${objectType} ${objectId}:`, error);
      throw error;
    }
  }
}
