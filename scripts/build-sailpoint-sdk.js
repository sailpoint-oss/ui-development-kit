#!/usr/bin/env node

/**
 * Builds the SailPoint SDK wrapper files for all three layers (Electron main,
 * Express/web server, Angular renderer).
 *
 * Approach (SDK v2.x):
 *   The generated wrappers are produced by INTROSPECTING the installed
 *   `sailpoint-api-client` package (see scripts/sdk-introspect.js) and rendering
 *   the Mustache templates in mustache_templates/. There is no longer any
 *   openapi-generator / redocly / api-specs step — the installed SDK's compiled
 *   declarations are the single source of truth, so the wrappers always match
 *   whatever SDK version is in package.json.
 *
 * After rendering, postscript.js applies the two hand patches that cannot be
 * expressed in the templates (importSpConfig multipart Content-Type fix and the
 * fetch-based createUploadedConfiguration override).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const Mustache = require('mustache');
const { buildModel } = require('./sdk-introspect');

const ROOT = path.join(__dirname, '..');
const TEMPLATE_DIR = path.join(ROOT, 'mustache_templates');

// Mustache template -> output file (paths relative to repo root).
const RENDER_MAP = [
  { template: 'electron-sdk-wrapper.mustache', output: 'app/sailpoint-sdk/sailpoint-sdk.ts' },
  { template: 'electron-icp-handlers.mustache', output: 'app/sailpoint-sdk/ipc-handlers.ts' },
  { template: 'electron-preload.mustache', output: 'app/sailpoint-sdk/sdk-preload.ts' },
  { template: 'web-sdk-wrapper.mustache', output: 'server/sailpoint-sdk-web.ts' },
  { template: 'sailpoint-sdk-service.mustache', output: 'projects/sailpoint-components/src/lib/sailpoint-sdk.service.ts' },
];

function render(templateName, view) {
  const templatePath = path.join(TEMPLATE_DIR, templateName);
  const template = fs.readFileSync(templatePath, 'utf8');
  // Disable HTML escaping globally is not possible per-call, so type references
  // that contain `<`, `>` use triple-mustache ({{{ }}}) in the templates.
  return Mustache.render(template, view);
}

function buildSdk() {
  try {
    console.log('Introspecting installed sailpoint-api-client...');
    const model = buildModel();
    console.log(
      `  Found ${model.operations.length} operations across ${model.imports.length} typed partitions.`
    );

    console.log('\nRendering wrapper files...');
    for (const { template, output } of RENDER_MAP) {
      const outPath = path.join(ROOT, output);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      const contents = render(template, model);
      fs.writeFileSync(outPath, contents, 'utf8');
      console.log(`  ✅ ${output}`);
    }

    // Apply targeted patches that cannot be expressed in Mustache templates
    // (multipart Content-Type fix for importSpConfig; fetch-based override for
    // createUploadedConfiguration to handle Electron IPC Blob serialisation).
    console.log('\nApplying postscript patches...');
    execSync('node ./mustache_templates/postscript.js', { stdio: 'inherit', cwd: ROOT });

    console.log('\n✅ SailPoint SDK built successfully!');
  } catch (error) {
    console.error('Error building SailPoint SDK:', error);
    process.exit(1);
  }
}

buildSdk();
