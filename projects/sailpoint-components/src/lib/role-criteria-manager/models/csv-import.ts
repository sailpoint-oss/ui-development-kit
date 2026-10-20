/**
 * Pure, Angular-free helpers for the "Import from CSV" target mode.
 *
 * The CSV only scopes *which* roles to edit — it carries no operations. Each
 * data row identifies an existing role by name and/or id; the parsed refs are
 * resolved against the tenant's roles and fed into the normal selection table,
 * after which the usual Operation -> Preview -> Apply flow takes over.
 *
 * Everything here is a deterministic transform over strings/plain objects (no
 * SDK, no I/O), which keeps it exhaustively unit-testable like the rest of the
 * model layer (`criteria.model.ts`, `criteria-operations.ts`).
 */

/** A single role reference parsed from a CSV data row. */
export interface CsvRoleRef {
  /** 1-based source line number, used in error/unmatched messages. */
  rowNumber: number;
  roleName?: string;
  roleId?: string;
}

/** A row-level parse problem (does not abort the whole import). */
export interface CsvParseError {
  row: number;
  message: string;
}

/** Result of {@link parseRoleListCsv}. */
export interface RoleListCsv {
  refs: CsvRoleRef[];
  errors: CsvParseError[];
}

/**
 * Minimal RFC-4180 CSV parser: returns an array of rows, each an array of
 * string cells. Handles quoted fields (commas/newlines inside quotes), escaped
 * quotes (`""`), CRLF/LF/CR line endings, and a leading UTF-8 BOM. Cells are
 * returned verbatim (no trimming) — callers trim as needed.
 */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  let started = false; // any content seen for the current record?

  const pushField = (): void => {
    row.push(field);
    field = '';
  };
  const pushRow = (): void => {
    rows.push(row);
    row = [];
    started = false;
  };

  let i = 0;
  const n = text.length;
  if (n > 0 && text.charCodeAt(0) === 0xfeff) {
    i = 1; // strip BOM
  }

  for (; i < n; i++) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      started = true;
    } else if (ch === ',') {
      pushField();
      started = true;
    } else if (ch === '\n') {
      pushField();
      pushRow();
    } else if (ch === '\r') {
      if (text[i + 1] === '\n') {
        i++;
      }
      pushField();
      pushRow();
    } else {
      field += ch;
      started = true;
    }
  }

  // Flush a trailing record only when there is pending content (avoids an
  // empty row when the file ends with a newline).
  if (started || field.length > 0 || row.length > 0) {
    pushField();
    pushRow();
  }

  return rows;
}

/** Canonical form for header matching: lower-cased, spaces/underscores removed. */
function normHeader(s: string): string {
  return s.trim().toLowerCase().replace(/[\s_]+/g, '');
}

/**
 * Parse a CSV into role references. Recognizes `RoleName`/`RoleId` headers
 * (case-insensitive; `Name`/`Id` accepted too). When no recognized header is
 * present, the file is treated as headerless and the first column is used as
 * the role name — so a bare one-column list of names works. Blank rows are
 * skipped; rows with neither a name nor an id become a row-level error.
 */
export function parseRoleListCsv(text: string): RoleListCsv {
  const rows = parseCsv(text);
  const refs: CsvRoleRef[] = [];
  const errors: CsvParseError[] = [];
  if (rows.length === 0) {
    return { refs, errors };
  }

  const header = rows[0].map(normHeader);
  const nameIdx = header.findIndex((h) => h === 'rolename' || h === 'name');
  const idIdx = header.findIndex((h) => h === 'roleid' || h === 'id');
  const hasHeader = nameIdx !== -1 || idIdx !== -1;

  const dataRows = hasHeader ? rows.slice(1) : rows;
  const firstLine = hasHeader ? 2 : 1; // 1-based source line of first data row

  dataRows.forEach((cells, idx) => {
    const lineNo = firstLine + idx;
    if (cells.every((c) => c.trim() === '')) {
      return; // skip blank rows
    }

    const roleName = hasHeader
      ? (nameIdx !== -1 ? cells[nameIdx] ?? '' : '').trim()
      : (cells[0] ?? '').trim();
    const roleId = hasHeader && idIdx !== -1 ? (cells[idIdx] ?? '').trim() : '';

    if (!roleName && !roleId) {
      errors.push({
        row: lineNo,
        message: 'row has neither a role name nor a role id',
      });
      return;
    }

    const ref: CsvRoleRef = { rowNumber: lineNo };
    if (roleId) ref.roleId = roleId;
    if (roleName) ref.roleName = roleName;
    refs.push(ref);
  });

  return { refs, errors };
}

/** The minimum a role object needs to be matched against a CSV ref. */
export interface MinimalRole {
  id?: string | null;
  name?: string | null;
}

/** Outcome of matching CSV refs against a set of roles. */
export interface RefMatch<R> {
  matched: { ref: CsvRoleRef; role: R }[];
  unmatched: CsvRoleRef[];
}

/** Human-readable label for an unmatched ref (id preferred, then name). */
export function refLabel(ref: CsvRoleRef): string {
  return ref.roleId ?? ref.roleName ?? `row ${ref.rowNumber}`;
}

/**
 * Resolve CSV refs against a list of roles: exact `roleId` match wins, else
 * exact `roleName` match. A name shared by several roles matches all of them;
 * a role referenced more than once (e.g. by id then name) is emitted once.
 * Refs that match nothing are returned in `unmatched`.
 */
export function matchRolesToRefs<R extends MinimalRole>(
  refs: CsvRoleRef[],
  roles: R[]
): RefMatch<R> {
  const byId = new Map<string, R>();
  const byName = new Map<string, R[]>();
  for (const role of roles) {
    if (role.id) byId.set(role.id, role);
    if (role.name) {
      const list = byName.get(role.name) ?? [];
      list.push(role);
      byName.set(role.name, list);
    }
  }

  const matched: { ref: CsvRoleRef; role: R }[] = [];
  const unmatched: CsvRoleRef[] = [];
  const seen = new Set<R>();

  for (const ref of refs) {
    let found: R[] = [];
    if (ref.roleId && byId.has(ref.roleId)) {
      found = [byId.get(ref.roleId) as R];
    } else if (ref.roleName && byName.has(ref.roleName)) {
      found = byName.get(ref.roleName) as R[];
    }

    if (found.length === 0) {
      unmatched.push(ref);
      continue;
    }
    for (const role of found) {
      if (!seen.has(role)) {
        seen.add(role);
        matched.push({ ref, role });
      }
    }
  }

  return { matched, unmatched };
}
