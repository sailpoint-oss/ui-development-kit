/**
 * Normalizes and verifies package-lock.json registry URLs for public npm projects.
 *
 * Internal installs resolve packages through Artifactory, which rewrites resolved
 * URLs in package-lock.json. Before committing or publishing, those URLs must point
 * at registry.npmjs.org so external consumers and CI use the public registry.
 *
 * Usage:
 * - Normalize manually: `node scripts/lockfile.mjs` or `npm run lockfile:normalize`
 * - Normalize on commit: pre-commit hook (internal engineers; see README)
 * - Verify in CI: `node scripts/lockfile.mjs --verify` or `npm run lockfile:verify`
 *
 * Reads NPM_CONFIG_REGISTRY to detect the Artifactory URL to rewrite.
 * Exits 0 on success, 1 on verification failure or processing error.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lockfilePath = path.join(__dirname, '../package-lock.json');
const publicUrl = 'https://registry.npmjs.org/';

/**
 * Returns a RegExp that matches Artifactory registry URL prefixes to rewrite.
 *
 * When NPM_CONFIG_REGISTRY is set to a specific registry URL, that exact URL
 * is matched. Otherwise, a general pattern matches any virtual repository path
 * under the SailPoint JFrog Artifactory instance, regardless of repo name.
 *
 * @returns {RegExp} Pattern matching Artifactory URLs to replace.
 */
function buildArtifactoryPattern() {
  if (process.env.NPM_CONFIG_REGISTRY) {
    const escaped = process.env.NPM_CONFIG_REGISTRY
      .replace(/\/?$/, '/')
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(escaped, 'g');
  }
  return /https:\/\/sailpoint\.jfrog\.io\/artifactory\/api\/npm\/[^/]+\//g;
}

const verify = process.argv.includes('--verify');

/**
 * Finds lockfile entries whose resolved URL does not point at registry.npmjs.org.
 *
 * @param {object} lockfile - Parsed package-lock.json contents.
 * @returns {Array<{name: string, resolved: string}>} Packages with non-public resolved URLs.
 */
function findNonPublicResolved(lockfile) {
  const issues = [];

  if (lockfile.packages) {
    for (const [pkgPath, info] of Object.entries(lockfile.packages)) {
      if (pkgPath === '' || !info.resolved || info.link) continue;
      if (!info.resolved.startsWith(publicUrl)) {
        issues.push({ name: pkgPath, resolved: info.resolved });
      }
    }
  }

  /**
   * Walks the legacy lockfile v2 `dependencies` tree for non-public resolved URLs.
   *
   * @param {object|undefined} deps - Dependency subtree from package-lock.json.
   * @param {string} [prefix=''] - Parent package name for nested issue reporting.
   */
  function checkDependencies(deps, prefix = '') {
    if (!deps) return;

    for (const [name, info] of Object.entries(deps)) {
      if (info.resolved && !info.resolved.startsWith(publicUrl)) {
        issues.push({
          name: prefix ? `${prefix} > ${name}` : name,
          resolved: info.resolved,
        });
      }

      if (info.dependencies) {
        checkDependencies(info.dependencies, name);
      }
    }
  }

  checkDependencies(lockfile.dependencies);
  return issues;
}

try {
  const content = fs.readFileSync(lockfilePath, 'utf8');
  const fixed = content.replace(buildArtifactoryPattern(), publicUrl);

  if (verify) {
    const issues = findNonPublicResolved(JSON.parse(content));

    if (issues.length > 0) {
      for (const { name, resolved } of issues) {
        console.error(`❌ Error: "${name}" resolved to non-public registry: ${resolved}`);
      }
      console.error('\nRun "npm run lockfile:normalize" to fix these URLs.');
      process.exit(1);
    }

    console.log('✅ package-lock.json verification passed (all URLs point to registry.npmjs.org).');
    process.exit(0);
  }

  if (content !== fixed) {
    fs.writeFileSync(lockfilePath, fixed, 'utf8');
    console.log('✅ Normalized package-lock.json to use public registry URLs.');
  } else {
    console.log('✅ package-lock.json already uses public registry URLs.');
  }
} catch (err) {
  console.error('Error processing package-lock.json:', err.message);
  process.exit(1);
}
