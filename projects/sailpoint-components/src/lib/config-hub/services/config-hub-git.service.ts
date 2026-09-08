import { Injectable, inject, signal } from '@angular/core';
import { GitRepoSettings, GitCommit, BackupObject, BackupObjectType, CommitFile } from '../models/config-hub.models';
import type { TokenPathsConfig } from './config-hub-token.service';
import { ElectronService } from '../../services/electron.service';

const SETTINGS_KEY = 'config-hub-git-settings';
const GITHUB_API_ORIGIN = 'https://api.github.com';

/**
 * Settings shape that was persisted by older builds. The `pat` field was stored
 * in plaintext localStorage; it is migrated into safeStorage and stripped on
 * load. See `loadSettings`.
 */
type LegacyGitRepoSettings = GitRepoSettings & { pat?: string };

@Injectable({ providedIn: 'root' })
export class ConfigHubGitService {
  readonly settings = signal<GitRepoSettings | null>(null);
  readonly branches = signal<string[]>([]);
  readonly loading = signal(false);

  /** True once a GitHub token is available for API calls. */
  readonly hasToken = signal(false);

  /**
   * Set when a plaintext token was found in localStorage and migrated out of
   * it. The token was readable by any local process, so the user is asked to
   * rotate it.
   */
  readonly migratedPlaintextToken = signal(false);

  private readonly electronService = inject(ElectronService);

  /**
   * Web-mode fallback. Browsers have no OS keychain, so the token is held in
   * memory for the lifetime of the page and never persisted.
   */
  private sessionToken: string | null = null;

  private get isElectron(): boolean {
    return this.electronService.isElectron && !!this.electronService.electronAPI;
  }

  async loadSettings(): Promise<void> {
    let parsed: LegacyGitRepoSettings | null = null;
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      parsed = raw ? (JSON.parse(raw) as LegacyGitRepoSettings) : null;
    } catch {
      parsed = null;
    }

    if (!parsed) {
      this.settings.set(null);
      await this.refreshTokenState();
      return;
    }

    const legacyToken = typeof parsed.pat === 'string' ? parsed.pat.trim() : '';
    const settings = this.stripCredentials(parsed);
    this.settings.set(settings);

    if (legacyToken) {
      // Move the token behind safeStorage and remove the plaintext copy,
      // regardless of whether the migration itself succeeds.
      const result = await this.saveToken(legacyToken);
      this.persist(settings);
      this.migratedPlaintextToken.set(result.success);
    }

    await this.refreshTokenState();
  }

  saveSettings(settings: GitRepoSettings): Promise<{ success: boolean; error?: string }> {
    const sanitized = this.stripCredentials(settings);
    try {
      this.persist(sanitized);
      this.settings.set(sanitized);
      return Promise.resolve({ success: true });
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to save settings';
      return Promise.resolve({ success: false, error: msg });
    }
  }

  // ── Credential handling ───────────────────────────────────────────────────

  /** Store the GitHub token in OS-backed safe storage (Electron only). */
  async saveToken(token: string): Promise<{ success: boolean; error?: string }> {
    const trimmed = token.trim();
    if (!trimmed) return { success: false, error: 'Token is empty' };

    if (!this.isElectron) {
      this.sessionToken = trimmed;
      this.hasToken.set(true);
      return { success: true };
    }

    try {
      const result = await this.electronService.electronAPI.setConfigHubGitToken(trimmed) as
        { success: boolean; error?: string };
      await this.refreshTokenState();
      return result;
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to store token';
      return { success: false, error: msg };
    }
  }

  /** Remove the stored GitHub token. */
  async deleteToken(): Promise<{ success: boolean; error?: string }> {
    this.sessionToken = null;
    if (!this.isElectron) {
      this.hasToken.set(false);
      return { success: true };
    }

    try {
      const result = await this.electronService.electronAPI.deleteConfigHubGitToken() as
        { success: boolean; error?: string };
      await this.refreshTokenState();
      return result;
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to remove token';
      return { success: false, error: msg };
    }
  }

  /** True when credentials survive an app restart (Electron safeStorage). */
  get tokenIsPersisted(): boolean {
    return this.isElectron;
  }

  async refreshTokenState(): Promise<void> {
    if (!this.isElectron) {
      this.hasToken.set(!!this.sessionToken);
      return;
    }
    try {
      this.hasToken.set(await this.electronService.electronAPI.hasConfigHubGitToken() === true);
    } catch {
      this.hasToken.set(false);
    }
  }

  async loadBranches(): Promise<void> {
    const s = this.settings();
    if (!s) return;
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return;
    const data = await this.githubGet<any[]>(`/repos/${owner}/${repo}/branches?per_page=100`);
    this.branches.set(data ? data.map((b: any) => b.name as string) : []);
  }

  async getObjectTypes(): Promise<BackupObjectType[]> {
    const s = this.settings();
    if (!s) return [];
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return [];
    const basePath = s.backupsPath.replace(/^\/|\/$/g, '');
    const items = await this.githubGet<any[]>(
      `/repos/${owner}/${repo}/contents/${basePath}?ref=${encodeURIComponent(s.defaultBranch)}`,
    );
    if (!items) return [];
    return items
      .filter((i: any) => i.type === 'dir')
      .map((i: any) => ({ name: i.name as string, objectCount: 0 }));
  }

  async getObjectsForType(objectType: string): Promise<BackupObject[]> {
    const s = this.settings();
    if (!s) return [];
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return [];
    const basePath = s.backupsPath.replace(/^\/|\/$/g, '');
    const dirPath = `${basePath}/${objectType}`;
    const items = await this.githubGet<any[]>(
      `/repos/${owner}/${repo}/contents/${dirPath}?ref=${encodeURIComponent(s.defaultBranch)}`,
    );
    if (!items) return [];
    return items
      .filter((i: any) => i.type === 'file' && (i.name as string).endsWith('.json'))
      .map((i: any) => ({
        objectType,
        objectId: (i.name as string).replace('.json', ''),
        name: (i.name as string).replace('.json', ''),
      }));
  }

  async getCommitHistory(objectType: string, objectId: string, branch?: string, limit = 30): Promise<GitCommit[]> {
    const s = this.settings();
    if (!s) return [];
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return [];
    const basePath = s.backupsPath.replace(/^\/|\/$/g, '');
    const filePath = `${basePath}/${objectType}/${objectId}.json`;
    const params = new URLSearchParams({ path: filePath, per_page: String(limit) });
    params.set('sha', branch ?? s.defaultBranch);
    const data = await this.githubGet<any[]>(`/repos/${owner}/${repo}/commits?${params}`);
    return this.mapCommits(data);
  }

  async getFileAtCommit(objectType: string, objectId: string, ref: string): Promise<string> {
    const s = this.settings();
    if (!s) return '';
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return '';
    const basePath = s.backupsPath.replace(/^\/|\/$/g, '');
    const filePath = `${basePath}/${objectType}/${objectId}.json`;
    const data = await this.githubGet<{ content?: string }>(
      `/repos/${owner}/${repo}/contents/${filePath}?ref=${encodeURIComponent(ref)}`,
    );
    return this.decodeContent(data?.content);
  }

  async getRecentCommits(limit = 50): Promise<GitCommit[]> {
    const s = this.settings();
    if (!s) return [];
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return [];
    const basePath = s.backupsPath.replace(/^\/|\/$/g, '');
    const params = new URLSearchParams({ sha: s.defaultBranch, path: basePath, per_page: String(limit) });
    const data = await this.githubGet<any[]>(`/repos/${owner}/${repo}/commits?${params}`);
    return this.mapCommits(data);
  }

  async getCommitFiles(sha: string): Promise<CommitFile[]> {
    const s = this.settings();
    if (!s) return [];
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return [];
    const basePath = s.backupsPath.replace(/^\/|\/$/g, '');
    const data = await this.githubGet<{ files?: any[] }>(`/repos/${owner}/${repo}/commits/${sha}`);
    if (!data) return [];
    const escapedBase = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`^${escapedBase}/([^/]+)/([^/]+)\\.json$`);
    const files: CommitFile[] = [];
    for (const f of (data.files ?? [])) {
      const match = (f.filename as string).match(pattern);
      if (match) {
        files.push({
          objectType: match[1],
          objectId: match[2],
          filePath: f.filename as string,
          status: f.status as CommitFile['status'],
        });
      }
    }
    return files;
  }

  // ── Vars (environment variable files) ────────────────────────────────────

  /**
   * Derive the source tenant name from the configured backupsPath.
   * e.g. "backups/beta-15156" → "beta-15156"
   */
  getSourceVarsTenant(): string | null {
    const s = this.settings();
    if (!s) return null;
    const parts = s.backupsPath.replace(/^\/|\/$/g, '').split('/');
    const tenant = parts[parts.length - 1];
    return tenant || null;
  }

  /**
   * List available tenant vars files.
   * Returns tenant names by stripping the `.vars.yaml` suffix.
   */
  async getVarsTenants(): Promise<string[]> {
    const s = this.settings();
    if (!s) return [];
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return [];
    const varsPath = (s.varsPath ?? 'vars').replace(/^\/|\/$/g, '');
    const items = await this.githubGet<any[]>(
      `/repos/${owner}/${repo}/contents/${varsPath}?ref=${encodeURIComponent(s.defaultBranch)}`,
    );
    if (!items) return [];
    return items
      .filter((i: any) => i.type === 'file' && (i.name as string).endsWith('.vars.yaml'))
      .map((i: any) => (i.name as string).replace(/\.vars\.yaml$/, ''));
  }

  /**
   * Fetch and parse token-paths.json from the repo root.
   * Returns null if the file is absent (callers should fall back to the
   * built-in defaults via ConfigHubTokenService.getBuiltinConfig()).
   */
  async getTokenPathsConfig(): Promise<TokenPathsConfig | null> {
    const s = this.settings();
    if (!s) return null;
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return null;
    const data = await this.githubGet<{ content?: string }>(
      `/repos/${owner}/${repo}/contents/token-paths.json?ref=${encodeURIComponent(s.defaultBranch)}`,
    );
    const content = this.decodeContent(data?.content);
    if (!content) return null;
    try {
      return JSON.parse(content) as TokenPathsConfig;
    } catch {
      return null;
    }
  }

  /**
   * Fetch the raw YAML content of a tenant vars file.
   * @param tenant  e.g. "production"  (without .vars.yaml extension)
   */
  async getVarsFile(tenant: string): Promise<string> {
    const s = this.settings();
    if (!s) return '';
    const { owner, repo } = this.parseRepoUrl(s.repoUrl);
    if (!owner || !repo) return '';
    const varsPath = (s.varsPath ?? 'vars').replace(/^\/|\/$/g, '');
    const filePath = `${varsPath}/${tenant}.vars.yaml`;
    const data = await this.githubGet<{ content?: string }>(
      `/repos/${owner}/${repo}/contents/${filePath}?ref=${encodeURIComponent(s.defaultBranch)}`,
    );
    return this.decodeContent(data?.content);
  }

  // ── Utilities ─────────────────────────────────────────────────────────────

  parseRepoUrl(repoUrl: string): { owner: string; repo: string } {
    const clean = repoUrl.trim().replace(/\.git$/, '').replace(/\/$/, '');
    const httpsMatch = clean.match(/github\.com\/([^/]+)\/([^/]+)/i);
    if (httpsMatch) return { owner: httpsMatch[1], repo: httpsMatch[2] };
    const sshMatch = clean.match(/git@github\.com:([^/]+)\/([^/]+)/i);
    if (sshMatch) return { owner: sshMatch[1], repo: sshMatch[2] };
    return { owner: '', repo: '' };
  }

  /**
   * Issue a read-only GitHub API request.
   *
   * In Electron the request is made by the main process so the token stays out
   * of the renderer entirely. In web mode the in-memory session token is used.
   * Returns null on any failure.
   */
  private async githubGet<T>(apiPath: string): Promise<T | null> {
    const path = apiPath.startsWith('/') ? apiPath : `/${apiPath}`;

    if (this.isElectron) {
      try {
        const res = await this.electronService.electronAPI.configHubGitHubRequest(path) as
          { ok: boolean; status: number; body: unknown };
        return res?.ok ? (res.body as T) : null;
      } catch {
        return null;
      }
    }

    try {
      const headers: Record<string, string> = {
        Accept: 'application/vnd.github.v3+json',
      };
      if (this.sessionToken) {
        headers['Authorization'] = `Bearer ${this.sessionToken}`;
      }
      const res = await fetch(`${GITHUB_API_ORIGIN}${path}`, { headers });
      if (!res.ok) return null;
      return await res.json() as T;
    } catch {
      return null;
    }
  }

  /** Drop any credential fields before the settings reach renderer storage. */
  private stripCredentials(settings: GitRepoSettings | LegacyGitRepoSettings): GitRepoSettings {
    const { pat, ...rest } = settings as LegacyGitRepoSettings;
    void pat;
    return rest as GitRepoSettings;
  }

  private persist(settings: GitRepoSettings): void {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  private mapCommits(data: any[] | null): GitCommit[] {
    return (data ?? []).map((c: any) => ({
      sha: c.sha as string,
      message: ((c.commit?.message as string) || '').split('\n')[0],
      author: (c.commit?.author?.name || c.author?.login || 'Unknown') as string,
      timestamp: (c.commit?.author?.date || '') as string,
    }));
  }

  private decodeContent(content: string | undefined): string {
    if (!content) return '';
    try {
      return atob(content.replace(/\n/g, ''));
    } catch {
      return '';
    }
  }
}
