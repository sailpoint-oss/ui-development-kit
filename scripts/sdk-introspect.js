#!/usr/bin/env node
'use strict';

/**
 * Introspects the INSTALLED `sailpoint-api-client` package (v2.x) to produce a
 * flat operation model that drives the Mustache wrapper templates.
 *
 * Why introspection instead of openapi-generator?
 *   The v2 SDK is split into ~110 per-service partitions with version-agnostic
 *   class names (`AccountsApi`) and version-suffixed methods (`listAccountsV1`).
 *   Request/model types are NOT re-exported from the top-level barrel — they
 *   live only at the partition sub-path (`sailpoint-api-client/dist/<part>/api`).
 *   Rather than re-running the generator against per-partition specs, we read
 *   the compiled `dist/<partition>/api.d.ts` declarations directly, which is the
 *   authoritative source of truth for whatever SDK version is installed.
 *
 * Classification of partitions:
 *   - generic      -> skipped (the hand-written genericGet/Post/... block in the
 *                     templates covers it; DefaultApi types are top-level).
 *   - nerm         -> `sdk.` prefix (types re-exported via `export *`), methods
 *                     suffixed `Nerm` to avoid collisions with idn operations.
 *   - nermv2025    -> `sdk.` prefix, methods suffixed `NermV2025`.
 *   - everything else (idn) -> types referenced via a per-partition
 *                     `import type * as <alias> from '.../dist/<dir>/api'`.
 */

const fs = require('fs');
const path = require('path');
const { Project } = require('ts-morph');

const SDK_PKG = path.join(__dirname, '..', 'node_modules', 'sailpoint-api-client');
const SDK_DIST = path.join(SDK_PKG, 'dist');

// Partitions handled specially.
const SKIP_PARTITIONS = new Set(['generic']);
const TOP_LEVEL_SUFFIX = { nerm: 'Nerm', nermv2025: 'NermV2025' };

const PRIMITIVES = new Set([
  'string', 'number', 'boolean', 'any', 'void', 'unknown', 'null', 'undefined',
  'Date', 'Blob', 'File', 'ArrayBuffer', 'Uint8Array',
]);

/** kebab-case for IPC channel names. Deterministic; used identically for the
 * handler channel and the preload channel so they always agree. */
function kebab(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Za-z])([0-9])/g, '$1-$2')
    .toLowerCase();
}

/** partition dir (snake_case) -> camelCase import alias, e.g.
 * access_model_metadata -> accessModelMetadataTypes */
function aliasFor(dir) {
  const camel = dir.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
  return camel + 'Types';
}

function stripImportPaths(t) {
  return t.replace(/import\([^)]*\)\./g, '');
}

/** Extract the first type argument of `<marker>...>` doing balanced-bracket
 * parsing and stopping at a top-level comma (AxiosResponse<T, any>). */
function firstTypeArg(text, marker) {
  const i = text.indexOf(marker);
  if (i < 0) return null;
  const start = i + marker.length;
  let depth = 1;
  let j = start;
  for (; j < text.length; j++) {
    const c = text[j];
    if (c === '<') depth++;
    else if (c === '>') { depth--; if (depth === 0) break; }
    else if (c === ',' && depth === 1) break;
  }
  return text.slice(start, j).trim();
}

/** Resolve a class method's response payload type text (e.g. "Account[]",
 * "Accountsasyncresult", "object", "void"). */
function payloadText(method) {
  const t = stripImportPaths(method.getReturnType().getText(method));
  return (
    firstTypeArg(t, 'AxiosResponse<') ??
    firstTypeArg(t, 'AxiosPromise<') ??
    firstTypeArg(t, 'Promise<') ??
    t
  );
}

/**
 * Turn a payload type text into a reference usable in the generated wrapper,
 * qualifying model names with the partition prefix ('' for top-level `sdk.`
 * partitions we pass 'sdk.').
 * Returns e.g. "void", "any", "string", "x.Account", "Array<x.Account>".
 */
function toReturnRef(payload, prefix) {
  if (!payload || payload === 'void' || payload === 'undefined') return 'void';

  let base = payload.trim();
  let isArray = false;

  // Array<X> or X[]
  const arrGeneric = base.match(/^Array<([\s\S]+)>$/);
  if (arrGeneric) { isArray = true; base = arrGeneric[1].trim(); }
  else if (base.endsWith('[]')) { isArray = true; base = base.slice(0, -2).trim(); }

  // Anything that isn't a bare identifier (unions, object literals, nested
  // generics, index signatures) -> fall back to `any`.
  const isBareIdent = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(base);
  let ref;
  if (!isBareIdent || base === 'object') {
    ref = 'any';
  } else if (PRIMITIVES.has(base)) {
    ref = base;
  } else {
    ref = prefix + base; // a model declared in this partition
  }

  return isArray ? `Array<${ref}>` : ref;
}

function buildModel() {
  if (!fs.existsSync(SDK_DIST)) {
    throw new Error(`sailpoint-api-client dist not found at ${SDK_DIST} — run npm install first.`);
  }

  const project = new Project({
    compilerOptions: {
      skipLibCheck: true,
      target: 99, // Latest
      module: 1, // CommonJS
      moduleResolution: 2, // Node
      strict: false,
    },
    skipAddingFilesFromTsConfig: true,
  });

  const partitionDirs = fs
    .readdirSync(SDK_DIST, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(SDK_DIST, d.name, 'api.d.ts')))
    .map((d) => d.name)
    .filter((d) => !SKIP_PARTITIONS.has(d))
    .sort();

  for (const dir of partitionDirs) {
    project.addSourceFileAtPath(path.join(SDK_DIST, dir, 'api.d.ts'));
  }
  project.resolveSourceFileDependencies();

  const operations = [];
  const idnImports = new Map(); // alias -> importPath
  const seenWrapperNames = new Set();

  for (const dir of partitionDirs) {
    const topSuffix = TOP_LEVEL_SUFFIX[dir]; // undefined for idn
    const isTopLevel = topSuffix !== undefined;
    const opSuffix = topSuffix || '';
    const alias = isTopLevel ? null : aliasFor(dir);
    const typePrefix = isTopLevel ? 'sdk.' : `${alias}.`;
    const importPath = isTopLevel ? null : `sailpoint-api-client/dist/${dir}/api`;

    const sf = project.getSourceFileOrThrow(path.join(SDK_DIST, dir, 'api.d.ts'));

    for (const cls of sf.getClasses()) {
      const className = cls.getName();
      if (!className || !className.endsWith('Api')) continue;
      const ext = cls.getExtends();
      if (!ext || ext.getText() !== 'BaseAPI') continue;

      const classRef = `sdk.${className}`;
      const instanceVar = className.toLowerCase();
      let partitionUsed = false;

      for (const method of cls.getInstanceMethods()) {
        if (method.getScope && method.getScope() !== 'public') continue;
        const sdkMethodName = method.getName();
        const wrapperName = sdkMethodName + opSuffix;

        if (seenWrapperNames.has(wrapperName)) {
          console.warn(`  ⚠️  Duplicate wrapper name skipped: ${wrapperName} (${className})`);
          continue;
        }
        seenWrapperNames.add(wrapperName);

        const p0 = method.getParameters()[0];
        const hasParams = !!p0 && p0.getName() === 'requestParameters';
        let requestTypeRef = '';
        let paramOptional = false;
        if (hasParams) {
          const baseType = p0.getTypeNode() ? p0.getTypeNode().getText() : p0.getType().getText(p0);
          requestTypeRef = typePrefix + stripImportPaths(baseType);
          paramOptional = p0.hasInitializer() || p0.isOptional();
          partitionUsed = true;
        }

        const returnTypeRef = toReturnRef(payloadText(method), typePrefix);
        if (!isTopLevel && returnTypeRef.includes(`${alias}.`)) partitionUsed = true;

        operations.push({
          wrapperName,
          sdkMethodName,
          channelName: kebab(wrapperName),
          className,
          classRef,
          instanceVar,
          hasParams,
          paramOptional,
          requestTypeRef,
          returnTypeRef,
        });
      }

      if (partitionUsed && !isTopLevel) idnImports.set(alias, importPath);
    }
  }

  operations.sort((a, b) => a.wrapperName.localeCompare(b.wrapperName));

  const imports = [...idnImports.entries()]
    .map(([alias, importPath]) => ({ alias, importPath }))
    .sort((a, b) => a.alias.localeCompare(b.alias));

  return { operations, imports };
}

module.exports = { buildModel, kebab, aliasFor };

if (require.main === module) {
  const model = require('./sdk-introspect').buildModel();
  console.log(`operations: ${model.operations.length}, idn partitions: ${model.imports.length}`);
  console.log(JSON.stringify(model.operations.slice(0, 5), null, 2));
}
