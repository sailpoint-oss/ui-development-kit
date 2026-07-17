/**
 * Minimal shape for identity search results.
 *
 * The v2 SailPoint SDK's search endpoint returns untyped `object`s, so this
 * local interface preserves the fields the transform-builder UI relies on.
 */
export interface IdentityDocument {
  id: string;
  name: string;
  [key: string]: unknown;
}
