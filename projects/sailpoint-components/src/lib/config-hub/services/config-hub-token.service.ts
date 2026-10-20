import { Injectable } from '@angular/core';

// ── Public types ──────────────────────────────────────────────────────────────

export interface SubstitutionPreview {
  /** Token names whose backup value differs from the target vars value (will be replaced). */
  remapped: string[];
  /** Tokenizable fields for this object whose token is absent from the target vars. */
  unmapped: string[];
}

/**
 * Shape of the token-paths.json file stored in the repo.
 * typeAbbreviations: short prefix per SailPoint Identity Security object type (e.g. "ROLE", "SRC", "WF").
 * tokenizablePaths: array of JSON-path arrays per object type.
 */
export interface TokenPathsConfig {
  typeAbbreviations: Record<string, string>;
  tokenizablePaths: Record<string, Array<(string | number)[]>>;
}

// ── Built-in fallback (mirrors token-paths.json) ─────────────────────────────

const BUILTIN_TOKEN_PATHS_CONFIG: TokenPathsConfig = {
  typeAbbreviations: {
    ACCESS_PROFILE:           'AP',
    AUTH_ORG:                 'AUTH',
    CONNECTOR_RULE:           'RULE',
    FORM_DEFINITION:          'FORM',
    GOVERNANCE_GROUP:         'GG',
    IDENTITY_OBJECT_CONFIG:   'IOC',
    IDENTITY_PROFILE:         'IP',
    LIFECYCLE_STATE:          'LC',
    NOTIFICATION_TEMPLATE:    'NT',
    PASSWORD_POLICY:          'PP',
    ROLE:                     'ROLE',
    SEGMENT:                  'SEG',
    SERVICE_DESK_INTEGRATION: 'SDIM',
    SOD_POLICY:               'SOD',
    SOURCE:                   'SRC',
    TAG:                      'TAG',
    TRANSFORM:                'XFORM',
    TRIGGER_SUBSCRIPTION:     'TRIG',
    WORKFLOW:                 'WF',
  },
  tokenizablePaths: {
    SOURCE: [
      ['object', 'connectorAttributes', 'spConnectorInstanceId'],
      ['object', 'connectorAttributes', 'spConnectorSpecId'],
      ['object', 'connectorAttributes', 'host'],
      ['object', 'connectorAttributes', 'token'],
      ['object', 'connectorAttributes', 'clientId'],
      ['object', 'connectorAttributes', 'clientSecret'],
      ['object', 'connectorAttributes', 'url'],
      ['object', 'connectorAttributes', 'user'],
      ['object', 'connectorAttributes', 'baseurl'],
      ['object', 'connectorAttributes', 'username'],
      ['object', 'connectorAttributes', 'password'],
      ['object', 'connectorAttributes', 'sources'],
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
    SERVICE_DESK_INTEGRATION: [
      ['object', 'attributes', 'url'],
      ['object', 'attributes', 'tokenUrl'],
      ['object', 'attributes', 'username'],
      ['object', 'attributes', 'requesterSource'],
      ['object', 'clusterRef', 'id'],
      ['object', 'clusterRef', 'name'],
      ['object', 'ownerRef', 'id'],
      ['object', 'ownerRef', 'name'],
      ['object', 'beforeProvisioningRule', 'id'],
      ['object', 'beforeProvisioningRule', 'name'],
    ],
    AUTH_ORG: [
      ['object', 'orgConfig', 'domain'],
      ['object', 'tenant'],
      ['object', 'serviceProviderConfig', 'federationProtocolDetails', 0, 'alias'],
      ['object', 'serviceProviderConfig', 'federationProtocolDetails', 0, 'callbackUrl'],
      ['object', 'serviceProviderConfig', 'federationProtocolDetails', 0, 'entityId'],
    ],
    IDENTITY_PROFILE: [
      ['object', 'authoritativeSource', 'id'],
      ['object', 'authoritativeSource', 'name'],
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
    LIFECYCLE_STATE: [
      ['object', 'identityProfileRef', 'id'],
      ['object', 'identityProfileRef', 'name'],
    ],
    ACCESS_PROFILE: [
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
      ['object', 'source', 'id'],
      ['object', 'source', 'name'],
    ],
    ROLE: [
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
    GOVERNANCE_GROUP: [
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
    SEGMENT: [
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
    SOD_POLICY: [
      ['object', 'externalPolicyReference'],
      ['object', 'ownerRef', 'id'],
      ['object', 'ownerRef', 'name'],
    ],
    WORKFLOW: [
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
    TRIGGER_SUBSCRIPTION: [['object', 'workflowConfig', 'workflowId']],
    FORM_DEFINITION: [
      ['object', 'owner', 'id'],
      ['object', 'owner', 'name'],
    ],
  },
};

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ConfigHubTokenService {

  // ── YAML parsing ──────────────────────────────────────────────────────────

  /**
   * Parse the simple YAML format produced by `varsToYaml()` in token-utils.mjs.
   * Supports scalar and array values:
   *   KEY: "string value"
   *   KEY:
   *     - "item1"
   */
  parseVarsYaml(content: string): Record<string, string | string[]> {
    const vars: Record<string, string | string[]> = {};
    const lines = content.split(/\r?\n/);
    let currentKey: string | null = null;
    let currentArray: string[] | null = null;

    for (const line of lines) {
      if (currentArray !== null && /^\s+-\s/.test(line)) {
        const raw = line.replace(/^\s+-\s+/, '').trim();
        currentArray.push(
          raw.replace(/^"(.*)"$/s, '$1').replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        );
        continue;
      }
      if (currentArray !== null) {
        vars[currentKey!] = currentArray;
        currentArray = null;
        currentKey = null;
      }
      if (line.trim() === '' || line.trim().startsWith('#')) continue;
      const match = line.match(/^([A-Z][A-Z0-9_]*):\s*(.*)/);
      if (match) {
        const key = match[1];
        const rest = match[2].trim();
        if (rest === '') {
          currentKey = key;
          currentArray = [];
        } else {
          vars[key] = rest
            .replace(/^"(.*)"$/s, '$1')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\');
        }
      }
    }
    if (currentArray !== null && currentKey !== null) {
      vars[currentKey] = currentArray;
    }
    return vars;
  }

  // ── Path-based substitution ───────────────────────────────────────────────
  //
  // This approach mirrors the Node.js scripts: it uses token-paths.json to
  // identify which fields to replace, derives the token name from the object
  // type + name + field path, and looks up the target value directly in the
  // target vars file.  It does NOT need a "source vars" file — the current
  // backup value is read from the backup JSON itself.
  //
  // This is more robust than value-based substitution because it works even
  // when the source vars file is stale (i.e. the backup was updated after the
  // vars were last generated).

  /**
   * Build a human-readable ALL_CAPS_SNAKE token name for a single field,
   * mirroring the naming convention in token-utils.mjs:
   *   {TYPE_ABBR}_{OBJECT_NAME}_{FIELD_SUFFIX}
   * e.g.  ROLE_SALESENGINEERING_OWNER_ID
   *
   * For LIFECYCLE_STATE objects the name segment is prefixed with the parent
   * identity profile name so that "inactive" states in different profiles get
   * distinct tokens (e.g. LC_HR_INACTIVE_... vs LC_FUSION_INACTIVE_...).
   * Pass the full backup envelope as `content` to enable this — if omitted
   * the disambiguation is skipped.
   */
  buildTokenName(
    config: TokenPathsConfig,
    objectType: string,
    objectName: string,
    fieldPath: (string | number)[],
    content?: any,
  ): string {
    const typeAbbr = config.typeAbbreviations[objectType] ?? objectType.slice(0, 4).toUpperCase();
    const namePrefix = this.nameToPrefix(this.qualifiedNameSegment(objectType, objectName, content));
    const suffix = this.fieldSuffix(fieldPath);
    return `${typeAbbr}_${namePrefix}_${suffix}`;
  }

  /**
   * Preview which fields would change when restoring the backup to the target
   * environment described by targetVars.
   *
   * Only covers the static paths defined in token-paths.json (same as the
   * Node.js scripts).  Dynamic paths (workflow step attributes, lifecycle-state
   * account-action source IDs, etc.) are not evaluated here.
   */
  computePathBasedPreview(
    content: any,
    objectType: string,
    objectName: string,
    config: TokenPathsConfig,
    targetVars: Record<string, string | string[]>,
  ): SubstitutionPreview {
    const paths = config.tokenizablePaths[objectType] ?? [];
    const remapped: string[] = [];
    const unmapped: string[] = [];

    for (const path of paths) {
      const currentValue = this.getValueAtPath(content, path);
      if (currentValue === undefined || currentValue === null || currentValue === '') continue;

      const tokenName = this.buildTokenName(config, objectType, objectName, path, content);
      const targetValue = targetVars[tokenName];

      if (targetValue === undefined) {
        unmapped.push(tokenName);
        continue;
      }

      const currentStr = Array.isArray(currentValue) ? JSON.stringify(currentValue) : String(currentValue);
      const targetStr  = Array.isArray(targetValue)  ? JSON.stringify(targetValue)  : String(targetValue);
      if (currentStr !== targetStr) {
        remapped.push(tokenName);
      }
      // else: same value — token is fine, no action needed
    }

    return { remapped, unmapped };
  }

  /**
   * Apply target environment values to a backup object using path-based
   * substitution.  Returns a deep clone with the replaced fields, plus lists
   * of which tokens were remapped and which were missing from targetVars.
   */
  applyPathBasedSubstitution(
    content: any,
    objectType: string,
    objectName: string,
    config: TokenPathsConfig,
    targetVars: Record<string, string | string[]>,
  ): { resolved: any; remapped: string[]; unmapped: string[] } {
    const paths = config.tokenizablePaths[objectType] ?? [];
    const resolved = JSON.parse(JSON.stringify(content));
    const remapped: string[] = [];
    const unmapped: string[] = [];

    for (const path of paths) {
      const currentValue = this.getValueAtPath(content, path);
      if (currentValue === undefined || currentValue === null || currentValue === '') continue;

      const tokenName = this.buildTokenName(config, objectType, objectName, path, content);
      const targetValue = targetVars[tokenName];

      if (targetValue === undefined) {
        unmapped.push(tokenName);
        continue;
      }

      const currentStr = Array.isArray(currentValue) ? JSON.stringify(currentValue) : String(currentValue);
      const targetStr  = Array.isArray(targetValue)  ? JSON.stringify(targetValue)  : String(targetValue);
      if (currentStr === targetStr) continue; // Already correct

      this.setValueAtPath(resolved, path, Array.isArray(targetValue) ? [...targetValue] : String(targetValue));
      remapped.push(tokenName);
    }

    return { resolved, remapped, unmapped };
  }

  /** Return the built-in defaults when the repo has no token-paths.json. */
  getBuiltinConfig(): TokenPathsConfig {
    return BUILTIN_TOKEN_PATHS_CONFIG;
  }

  // ── Token placeholder helpers ─────────────────────────────────────────────

  extractTokenNames(obj: any): string[] {
    const jsonStr = JSON.stringify(obj);
    const matches = [...jsonStr.matchAll(/\{\{([A-Z][A-Z0-9_]*)\}\}/g)];
    return [...new Set(matches.map(m => m[1]))];
  }

  formatToken(name: string): string {
    return `{{${name}}}`;
  }

  // ── Private helpers ───────────────────────────────────────────────────────

  /**
   * Return the name segment used to build a token prefix, mirroring the
   * special-case logic in getTokenPaths() in token-utils.mjs.
   *
   * For LIFECYCLE_STATE the segment is prefixed with the parent identity
   * profile name so that duplicate state names (e.g. "inactive" / "active"
   * appearing under multiple identity profiles) produce distinct tokens:
   *   LC_HR_INACTIVE_...  vs  LC_FUSION_INACTIVE_...
   *
   * For all other types the segment is just the object's own self.name.
   */
  private qualifiedNameSegment(objectType: string, objectName: string, content?: any): string {
    if (objectType === 'LIFECYCLE_STATE' && content) {
      const profileName = content?.object?.identityProfileRef?.name;
      if (profileName) {
        return `${profileName}_${objectName}`;
      }
    }
    return objectName;
  }

  /**
   * Convert a display name to UPPER_SNAKE_CASE, mirroring nameToPrefix() in
   * token-utils.mjs.  e.g. "SalesEngineering" → "SALESENGINEERING"
   */
  private nameToPrefix(name: string): string {
    return String(name)
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  }

  /**
   * Derive the field-name suffix from the tail of a path, mirroring
   * fieldSuffix() in token-utils.mjs.
   * When the last key is "id" or "name", prepend the parent so the result is
   * e.g. "OWNER_ID" / "OWNER_NAME" rather than the ambiguous "ID" / "NAME".
   */
  private fieldSuffix(path: (string | number)[]): string {
    const lastSeg = path[path.length - 1];
    const lastKey = String(lastSeg).toUpperCase().replace(/[^A-Z0-9]+/g, '_');
    if ((lastKey === 'ID' || lastKey === 'NAME') && path.length >= 2) {
      const parentKey = String(path[path.length - 2]).toUpperCase().replace(/[^A-Z0-9]+/g, '_');
      return `${parentKey}_${lastKey}`;
    }
    return lastKey;
  }

  private getValueAtPath(obj: any, path: (string | number)[]): any {
    let cur = obj;
    for (const key of path) {
      if (cur === null || cur === undefined) return undefined;
      cur = cur[key];
    }
    return cur;
  }

  private setValueAtPath(obj: any, path: (string | number)[], value: any): void {
    let cur = obj;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      if (cur[key] === undefined || cur[key] === null) {
        cur[key] = typeof path[i + 1] === 'number' ? [] : {};
      }
      cur = cur[key];
    }
    cur[path[path.length - 1]] = value;
  }
}
