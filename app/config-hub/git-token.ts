/**
 * Config Hub GitHub credential handling.
 *
 * The GitHub personal access token is only ever held in the main process and is
 * persisted through Electron's OS-backed safeStorage (see
 * ../authentication/config). The renderer never receives the token: it asks the
 * main process to make GitHub API calls on its behalf and the Authorization
 * header is attached here.
 */

import { deleteSecureValue, getSecureValue, setSecureValue } from '../authentication/config';

/** Key/environment pair used for the secure store filename. */
const TOKEN_KEY = 'config_hub_github_pat';
const TOKEN_SCOPE = 'global';

const GITHUB_API_ORIGIN = 'https://api.github.com';

export interface GitTokenResult {
  success: boolean;
  error?: string;
}

export interface GitHubApiResponse {
  ok: boolean;
  status: number;
  /** Parsed JSON body, or null when the response had no JSON body. */
  body: unknown;
  error?: string;
}

export function setGitToken(token: string): GitTokenResult {
  const trimmed = (token ?? '').trim();
  if (!trimmed) {
    return { success: false, error: 'Token is empty' };
  }
  try {
    setSecureValue(TOKEN_KEY, TOKEN_SCOPE, trimmed);
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to store token';
    return { success: false, error: message };
  }
}

export function deleteGitToken(): GitTokenResult {
  deleteSecureValue(TOKEN_KEY, TOKEN_SCOPE);
  return { success: true };
}

export function hasGitToken(): boolean {
  return !!getGitToken();
}

function getGitToken(): string {
  return getSecureValue(TOKEN_KEY, TOKEN_SCOPE);
}

/**
 * Perform a read-only GitHub REST call with the stored token attached.
 *
 * `apiPath` is a path relative to https://api.github.com (e.g.
 * "/repos/owner/repo/branches"). Absolute URLs are rejected so the renderer
 * cannot direct the credential at an arbitrary host.
 */
export async function githubApiRequest(apiPath: string): Promise<GitHubApiResponse> {
  if (typeof apiPath !== 'string' || !apiPath.startsWith('/') || apiPath.startsWith('//')) {
    return { ok: false, status: 0, body: null, error: 'Invalid GitHub API path' };
  }

  let url: URL;
  try {
    url = new URL(apiPath, GITHUB_API_ORIGIN);
  } catch {
    return { ok: false, status: 0, body: null, error: 'Invalid GitHub API path' };
  }

  if (url.origin !== GITHUB_API_ORIGIN) {
    return { ok: false, status: 0, body: null, error: 'Only api.github.com requests are allowed' };
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'SailPoint-UI-Development-Kit',
  };

  const token = getGitToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url.toString(), { method: 'GET', headers });
    let body: unknown = null;
    const text = await response.text();
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = null;
      }
    }
    return { ok: response.ok, status: response.status, body };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'GitHub request failed';
    return { ok: false, status: 0, body: null, error: message };
  }
}
