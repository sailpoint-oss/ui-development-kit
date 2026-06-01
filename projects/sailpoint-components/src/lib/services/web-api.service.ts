import { Injectable, OnDestroy, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom, takeUntil, Subject } from 'rxjs';

// Injection token for web API URL
export const WEB_API_URL = new InjectionToken<string>('WEB_API_URL');

/**
 * Interface that defines all the methods used from window.electronAPI
 * This acts as a contract for implementing web-compatible alternatives
 */
export interface ElectronAPIInterface {
  // Unified authentication and connection
  unifiedLogin: (environment: string) => Promise<{ success: boolean, error?: string, uuid?: string, authUrl?: string, ttl?: number }>;
  disconnectFromISC: () => Promise<void>;
  checkAccessTokenStatus: () => Promise<AccessTokenStatus>;
  getCurrentTokenDetails: (environment: string) => Promise<{ tokenDetails: TokenDetails | undefined, error?: string }>;
  // Token management
  refreshTokens: () => Promise<{ success: boolean, error?: string }>;
  validateTokens: (environment: string) => Promise<{ isValid: boolean, needsRefresh: boolean, error?: string }>;
  checkOauthCodeFlowComplete: (uuid: string, environment: string) => Promise<{ isComplete: boolean, success?: boolean, error?: string }>;
  cancelOAuthCodeFlow: (uuid?: string) => Promise<{ success: boolean }>;

  // Environment management
  getTenants: () => Promise<Tenant[]>;
  updateEnvironment: (config: UpdateEnvironmentRequest) => Promise<{ success: boolean, error?: string }>;
  deleteEnvironment: (environment: string) => Promise<{ success: boolean, error?: string }>;
  setActiveEnvironment: (environment: string) => Promise<{ success: boolean, error?: string }>;
  
  // Config file management
  readConfig: () => Promise<any>;
  writeConfig: (config: any) => Promise<any>;

  // Discourse/CoLab marketplace
  getColabPosts: (filter: FilterConfig, limit?: number) => Promise<ColabPostsResponse>;
  getColabPostsByCategory: (category: ColabCategory, limit?: number) => Promise<ColabPostsResponse>;
  getColabTopicRaw: (topicId: number) => Promise<ColabTopicRawResponse>;
  getColabTopic: (topicId: number) => Promise<ColabTopicResponse>;
  getDiscourseUserTitle: (primaryGroupName: string) => Promise<DiscourseUserTitleResponse>;

  // GitHub operations
  getGitHubReleaseArtifact: (githubRepoUrl: string) => Promise<GitHubReleaseArtifactResponse>;
  listGitHubJsonFiles: (githubRepoUrl: string) => Promise<GitHubFilesResponse>;
  getGitHubFileContent: (downloadUrl: string, filename: string) => Promise<GitHubFileContentResponse>;

  // Config Hub git operations
  getGitRepoSettings: () => Promise<GitRepoSettings | null>;
  saveGitRepoSettings: (settings: GitRepoSettings) => Promise<{ success: boolean; error?: string }>;
  getFileCommitHistory: (owner: string, repo: string, path: string, branch?: string, limit?: number) => Promise<GitCommit[]>;
  getFileAtRef: (owner: string, repo: string, path: string, ref: string) => Promise<string>;

  // Connector deployment
  uploadConnector: (githubRepoUrl: string, connectorAlias?: string) => Promise<ConnectorDeploymentResponse>;
  
  // Connector Customizer Deployment
  uploadCustomizer: (githubRepoUrl: string, customizerName?: string) => Promise<CustomizerDeploymentResponse>;
  
  // SailPoint SDK functions
  // These are dynamically added and would need to be proxied through the web service
  [key: string]: any;
}

// Supporting Types
export type UpdateEnvironmentRequest = {
  environmentName: string;
  tenantUrl: string;
  baseUrl: string;
  nermBaseUrl?: string;
  authtype: AuthMethods;
  clientId?: string;
  clientSecret?: string;
  bypassTLS?: boolean;
  caCertPath?: string;
}

export type Tenant = {
  active: boolean;
  name: string;
  apiUrl: string;
  tenantUrl: string;
  nermBaseUrl?: string;
  clientId?: string;
  clientSecret?: string;
  authtype: AuthMethods;
  tenantName: string;
}

export type TokenSet = {
  accessToken: string;
  accessExpiry: Date;
  refreshToken: string;
  refreshExpiry: Date;
}

export type AccessTokenStatus = {
  authtype: AuthMethods;
  accessTokenIsValid: boolean;
  expiry?: Date;
  needsRefresh: boolean;
}

export type RefreshTokenStatus = {
  authtype: "oauth";
  refreshTokenIsValid: boolean;
  expiry?: Date;
  needsRefresh: boolean;
}

export type AuthPayload = {
  tenant_id: string;
  pod: string;
  org: string;
  identity_id: string;
  user_name: string;
  strong_auth: boolean;
  authorities: string[];
  client_id: string;
  strong_auth_supported: boolean;
  scope: string[];
  exp: number;
  jti: string;
};

export type TokenDetails = {
  expiry: Date;
} & AuthPayload;

// Auth Methods
export type AuthMethods = "oauth" | "pat";

// Discourse/CoLab Types
export interface FilterConfig {
  category: string;
  tags: string[];
}

export interface ColabPost {
  id: number;
  creatorName: string;
  excerpt: string;
  creatorImage: string;
  creatorTitle: string;
  tags: string[];
  image: string;
  link: string;
  title: string;
  views: number;
  liked: number;
  replies: number;
  solution: boolean;
  readTime: number;
  slug: string;
}

export type ColabCategory = 
  | 'workflows'
  | 'saas-connectors'
  | 'saas-connector-customizers'
  | 'community-tools'
  | 'rules'
  | 'transforms'
  | 'iiq-plugins';

export type ColabPostsResponse = {
  success: boolean;
  data?: ColabPost[];
  error?: string;
};

export type ColabTopicRawResponse = {
  success: boolean;
  data?: string;
  error?: string;
};

export type ColabTopicResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

export type DiscourseUserTitleResponse = {
  success: boolean;
  data?: string;
  error?: string;
};

export type GitHubReleaseArtifactResponse = {
  success: boolean;
  downloadUrl?: string;
  filename?: string;
  tagName?: string;
  error?: string;
};

export type GitHubRepoFile = {
  name: string;
  path: string;
  type: 'file' | 'dir';
  download_url: string | null;
  size: number;
};

export type GitHubFilesResponse = {
  success: boolean;
  files?: GitHubRepoFile[];
  error?: string;
};

export type GitHubFileContentResponse = {
  success: boolean;
  content?: string;
  filename?: string;
  error?: string;
};

export type ConnectorDeploymentResponse = {
  success: boolean;
  connectorId?: string;
  version?: number;
  error?: string;
};

export type CustomizerDeploymentResponse = {
  success: boolean;
  customizerId?: string;
  version?: number;
  error?: string;
};

// Config Hub types
export type AuthMethod = 'pat' | 'ssh';

export type GitRepoSettings = {
  repoUrl: string;
  authMethod: AuthMethod;
  pat?: string;
  sshKeyPath?: string;
  defaultBranch: string;
  backupsPath: string;
};

export type GitCommit = {
  sha: string;
  message: string;
  author: string;
  timestamp: string;
};

@Injectable({
  providedIn: 'root'
})
export class WebApiService implements ElectronAPIInterface, OnDestroy {
  private apiUrl: string;
  private tenants: Tenant[] = [];
  private authtype: AuthMethods = 'pat';
  private activeEnvironment: string | null = null;
  private tokens: Map<string, TokenSet> = new Map();
  private csrfToken: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    @Optional() @Inject(WEB_API_URL) webApiUrl: string | null
  ) {
    this.apiUrl = webApiUrl || '/api'; // Use injected URL or fallback
    // Create proxy to handle dynamic SDK method calls
    return new Proxy(this, {
      get(target: WebApiService, prop: string | symbol) {
        if (prop in target || typeof prop === 'symbol') {
          return ((target as unknown) as Record<string | symbol, unknown>)[prop];
        }
        
        // For unknown methods, assume they are SDK methods and proxy them through callSdkMethod
        if (typeof prop === 'string' && prop !== 'constructor') {
          return function(this: WebApiService, ...args: unknown[]) {
            return this.callSdkMethod(prop, ...args);
          }.bind(target);
        }
        
        return undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  /**
   * Configure the API URL for the web service
   * @param url - The base URL for the web service API
   */
  setApiUrl(url: string): void {
    this.apiUrl = url;
  }

  /**
   * Get CSRF token from the server
   */
  private async getCsrfToken(): Promise<string> {
    if (this.csrfToken) {
      return this.csrfToken;
    }

    try {
      // Include session ID header for Lambda compatibility - this ensures
      // the CSRF token is generated using the correct CSRF secret from storage
      let headers = new HttpHeaders();
      const sessionId = localStorage.getItem('custom-session-id');
      if (sessionId) {
        headers = headers.set('x-session-id', sessionId);
      }

      const response = await firstValueFrom(
        this.http.get<{ csrfToken: string }>(`${this.apiUrl}/auth/csrf-token`, {
          headers,
          withCredentials: true
        })
      );

      this.csrfToken = response.csrfToken;
      return response.csrfToken;
    } catch (error) {
      console.error('Error getting CSRF token:', error);
      throw error;
    }
  }

  /**
   * Helper method to make API calls to the web service using Angular HttpClient
   */
  private async apiCall<T>(endpoint: string, method: string = 'GET', body?: unknown): Promise<T> {
    const url = `${this.apiUrl}/${endpoint}`;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Add session ID header for Lambda compatibility
    const sessionId = localStorage.getItem('custom-session-id');
    if (sessionId) {
      headers = headers.set('x-session-id', sessionId);
    }

    // Add CSRF token for non-GET requests
    if (method !== 'GET') {
      try {
        const csrfToken = await this.getCsrfToken();
        headers = headers.set('x-csrf-token', csrfToken);
      } catch (error) {
        console.error('Failed to get CSRF token for request:', error);
        // Continue without CSRF token - let the server handle the error
      }
    }
    
    const options = {
      headers,
      withCredentials: true // Includes cookies for session management
    };
    
    try {
      let response$: Observable<T>;
      
      switch (method.toUpperCase()) {
        case 'GET':
          response$ = this.http.get<T>(url, options);
          break;
        case 'POST':
          response$ = this.http.post<T>(url, body, options);
          break;
        case 'PUT':
          response$ = this.http.put<T>(url, body, options);
          break;
        case 'PATCH':
          response$ = this.http.patch<T>(url, body, options);
          break;
        case 'DELETE':
          response$ = this.http.delete<T>(url, options);
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
      
      return await firstValueFrom(response$.pipe(takeUntil(this.destroy$)));
    } catch (error: any) {
      // Check if the service is being destroyed
      if (this.destroy$.closed) {
        console.warn('API call cancelled due to service destruction');
        throw new Error('Service destroyed');
      }
      
      // Handle CSRF token errors and retry once
      if (error.status === 403 && method !== 'GET' && error.error?.includes?.('CSRF')) {
        this.csrfToken = null; // Clear cached token
        return this.apiCall(endpoint, method, body); // Retry once
      }
      
      console.error('API call failed:', error);
      throw new Error(`API call failed: ${error.message || error}`);
    }
  }

  // Authentication and Connection methods
  async unifiedLogin(environment: string): Promise<{ success: boolean, error?: string, uuid?: string, authUrl?: string, ttl?: number }> {
    try {
      const result = await this.apiCall<{ success: boolean, error?: string, uuid?: string, authUrl?: string, ttl?: number }>('auth/login', 'POST', { environment });
      if (result.success) {
        this.activeEnvironment = environment;
      }
      return result;
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error during login' };
    }
  }

  async disconnectFromISC(): Promise<void> {
    await this.apiCall('auth/logout', 'POST');
    this.activeEnvironment = null;
  }

  async checkAccessTokenStatus(): Promise<AccessTokenStatus> {
    return this.apiCall<AccessTokenStatus>(`auth/status/access/`, 'GET');
  }

  async getCurrentTokenDetails(environment: string): Promise<{ tokenDetails: TokenDetails | undefined, error?: string }> {
    return this.apiCall<{ tokenDetails: TokenDetails | undefined, error?: string }>(`auth/token-details/${environment}`, 'GET');
  }

  // Token Management methods
  async refreshTokens(): Promise<{ success: boolean, error?: string }> {
    return this.apiCall<{ success: boolean, error?: string }>(`auth/refresh`, 'POST', { });
  }

  async validateTokens(environment: string): Promise<{ isValid: boolean, needsRefresh: boolean, error?: string }> {
    return this.apiCall<{ isValid: boolean, needsRefresh: boolean, error?: string }>(`auth/validate-tokens/${environment}`, 'GET');
  }

  async checkOauthCodeFlowComplete(uuid: string, environment: string): Promise<{ isComplete: boolean, success?: boolean, error?: string }> {
    return this.apiCall<{ isComplete: boolean, success?: boolean, error?: string }>(`auth/oauth-flow-complete`, 'POST', { uuid, environment });
  }

  async cancelOAuthCodeFlow(uuid?: string): Promise<{ success: boolean }> {
    return this.apiCall<{ success: boolean }>(`auth/oauth-flow-cancel`, 'POST', { uuid });
  }

  // Environment Management methods
  async getTenants(): Promise<Tenant[]> {
    this.tenants = await this.apiCall<Tenant[]>('environments', 'GET');
    return this.tenants;
  }

  async updateEnvironment(config: UpdateEnvironmentRequest): Promise<{ success: boolean, error?: string }> {
    return this.apiCall<{ success: boolean, error?: string }>('environments', 'POST', config);
  }

  async deleteEnvironment(environment: string): Promise<{ success: boolean, error?: string }> {
    return this.apiCall<{ success: boolean, error?: string }>(`environments/${encodeURIComponent(environment)}`, 'DELETE');
  }

  async setActiveEnvironment(environment: string): Promise<{ success: boolean, error?: string }> {
    const result = await this.apiCall<{ success: boolean, error?: string }>('environments/active', 'POST', { environment });
    if (result.success) {
      this.activeEnvironment = environment;
    }
    return result;
  }

  // Config Management methods
  async readConfig(): Promise<any> {
    return this.apiCall('config', 'GET');
  }

  async writeConfig(config: any): Promise<any> {
    return this.apiCall('config', 'POST', { config });
  }

  // Discourse/CoLab Marketplace methods
  // These make direct calls to Discourse in web mode (no proxy needed - public API)
  
  private readonly discourseBaseUrl = 'https://developer.sailpoint.com/discuss/';
  private readonly developerDomain = 'developer.sailpoint.com';
  private discourseTitleCache = new Map<string, string>();

  private readonly categoryConfigs: Record<ColabCategory, FilterConfig> = {
    'workflows': { category: 'colab', tags: ['workflows'] },
    'saas-connectors': { category: 'colab-saas-connectors', tags: [] },
    'saas-connector-customizers': { category: 'saas-connector-customizers', tags: [] },
    'community-tools': { category: 'colab-community-tools', tags: [] },
    'rules': { category: 'colab-rules', tags: ['identity-security-cloud'] },
    'transforms': { category: 'colab-transforms', tags: [] },
    'iiq-plugins': { category: 'colab-iiq-plugins', tags: [] }
  };

  async getColabPosts(filter: FilterConfig, limit?: number): Promise<ColabPostsResponse> {
    try {
      let filterCategory = 'colab';
      if (filter.category && filter.category !== 'colab') {
        filterCategory += `/${filter.category}`;
      }

      const tagsQuery = filter.tags.length > 0 ? `?tags=${filter.tags.join('+')}` : '';
      const url = `${this.discourseBaseUrl}c/${filterCategory}/l/latest.json${tagsQuery}`;

      const response = await firstValueFrom(this.http.get<any>(url));
      const posts = this.processDiscourseTopics(response, limit);
      return { success: true, data: posts };
    } catch (error) {
      console.error('Error fetching CoLab posts:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch CoLab posts' 
      };
    }
  }

  async getColabPostsByCategory(category: ColabCategory, limit?: number): Promise<ColabPostsResponse> {
    const config = this.categoryConfigs[category];
    if (!config) {
      return { success: false, error: `Unknown category: ${category}` };
    }
    return this.getColabPosts(config, limit);
  }

  async getColabTopicRaw(topicId: number): Promise<ColabTopicRawResponse> {
    try {
      const url = `${this.discourseBaseUrl}raw/${topicId}.json`;
      const response = await firstValueFrom(this.http.get(url, { responseType: 'text' }));
      return { success: true, data: response };
    } catch (error) {
      console.error('Error fetching topic raw:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch topic content' 
      };
    }
  }

  async getColabTopic(topicId: number): Promise<ColabTopicResponse> {
    try {
      const url = `${this.discourseBaseUrl}t/${topicId}.json`;
      const response = await firstValueFrom(this.http.get<any>(url));
      return { success: true, data: response };
    } catch (error) {
      console.error('Error fetching topic:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch topic' 
      };
    }
  }

  async getDiscourseUserTitle(primaryGroupName: string): Promise<DiscourseUserTitleResponse> {
    // Check cache first
    if (this.discourseTitleCache.has(primaryGroupName)) {
      return { success: true, data: this.discourseTitleCache.get(primaryGroupName) };
    }

    try {
      const url = `${this.discourseBaseUrl}g/${primaryGroupName}.json`;
      const response = await firstValueFrom(this.http.get<any>(url));
      const title = (response.group?.title as string) || '';
      this.discourseTitleCache.set(primaryGroupName, title);
      return { success: true, data: title };
    } catch (error) {
      console.error('Error fetching user title:', error);
      this.discourseTitleCache.set(primaryGroupName, '');
      return { success: true, data: '' }; // Return empty string on error
    }
  }

  // GitHub operations
  async getGitHubReleaseArtifact(githubRepoUrl: string): Promise<GitHubReleaseArtifactResponse> {
    try {
      // Parse GitHub URL to extract owner and repo
      const normalized = githubRepoUrl.trim().replace(/\/$/, '');
      const patterns = [
        /github\.com\/([^/]+)\/([^/]+)/i,
        /^([^/]+)\/([^/]+)$/
      ];

      let owner: string | null = null;
      let repo: string | null = null;

      for (const pattern of patterns) {
        const match = normalized.match(pattern);
        if (match && match[1] && match[2]) {
          owner = match[1];
          repo = match[2].replace(/\.git$/, '');
          break;
        }
      }

      if (!owner || !repo) {
        return {
          success: false,
          error: `Invalid GitHub repository URL: ${githubRepoUrl}`
        };
      }

      // Fetch latest release from GitHub API
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
      const response = await firstValueFrom(
        this.http.get<any>(apiUrl, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'SailPoint-UI-Development-Kit'
          }
        })
      );

      if (!response.assets || response.assets.length === 0) {
        return {
          success: false,
          error: `No assets found in release ${response.tag_name}`
        };
      }

      // Find the .zip file
      const zipAsset = response.assets.find((asset: any) => 
        (asset.name as string).toLowerCase().endsWith('.zip')
      );

      if (!zipAsset) {
        return {
          success: false,
          error: `No .zip file found in release ${response.tag_name}`
        };
      }

      return {
        success: true,
        downloadUrl: zipAsset.browser_download_url as string,
        filename: zipAsset.name as string,
        tagName: response.tag_name as string
      };
    } catch (error: any) {
      console.error('Error fetching GitHub release artifact:', error);
      if (error.status === 404) {
        return {
          success: false,
          error: `No releases found for repository`
        };
      }
      return {
        success: false,
      error: error instanceof Error ? error.message : 'Unknown error fetching GitHub release'
    };
  }
  }

  async listGitHubJsonFiles(githubRepoUrl: string): Promise<GitHubFilesResponse> {
    return this.apiCall<GitHubFilesResponse>('github/list-json-files', 'POST', { githubRepoUrl });
  }

  async getGitHubFileContent(downloadUrl: string, filename: string): Promise<GitHubFileContentResponse> {
    return this.apiCall<GitHubFileContentResponse>('github/file-content', 'POST', { downloadUrl, filename });
  }

  // Helper methods for Discourse processing
  private processDiscourseTopics(data: any, limit?: number): ColabPost[] {
    if (!data?.topic_list?.topics) {
      return [];
    }

    const posts: ColabPost[] = [];
    const allTopics = data.topic_list.topics as any[];
    const topics = limit ? allTopics.slice(0, limit) : allTopics;

    for (const topic of topics) {
      if (topic.tags && topic.tags.length > 0) {
        const users = (data.users || []) as any[];
        const poster = this.findOriginalPoster(topic, users);
        posts.push(this.createColabPost(topic, poster));
      }
    }

    return posts;
  }

  private findOriginalPoster(topic: any, users: any[]): any {
    for (const poster of topic.posters || []) {
      if (poster.description?.includes('Original Poster')) {
        return users.find((user: any) => user.id === poster.user_id);
      }
    }
    return users[0];
  }

  private createColabPost(topic: any, user?: any): ColabPost {
    return {
      id: topic.id as number,
      creatorName: (user?.name || user?.username || 'Unknown') as string,
      excerpt: this.styleExcerpt(topic.excerpt as string | undefined),
      creatorImage: this.getAvatarUrl((user?.avatar_template || '') as string),
      creatorTitle: (user?.title || '') as string,
      tags: topic.tags || [],
      image: topic.image_url || '',
      link: `${this.discourseBaseUrl}t/${topic.slug}/${topic.id}`,
      title: this.shortenTitle(topic.title as string),
      views: topic.views || 0,
      liked: topic.like_count || 0,
      replies: topic.posts_count || 0,
      solution: topic.has_accepted_answer || false,
      readTime: 5,
      slug: topic.slug
    };
  }

  private shortenTitle(title: string): string {
    return title.length > 63 ? title.substring(0, 62) + '...' : title;
  }

  private styleExcerpt(excerpt: string | undefined): string {
    if (!excerpt) return '';
    let cleaned = excerpt.replace(/:[^:]*:/g, '');
    const match = cleaned.match(/Description([\s\S]*?)Legal Agreement/);
    if (match) {
      cleaned = match[1].trim();
    }
    cleaned = cleaned.replace('&hellip;', '');
    return cleaned.length > 150 ? cleaned.slice(0, 100) + '...' : cleaned;
  }

  private getAvatarUrl(avatarTemplate: string): string {
    if (!avatarTemplate) return '';
    if (avatarTemplate.includes(this.developerDomain)) {
      return `https://${this.developerDomain}${avatarTemplate.replace('{size}', '120')}`;
    }
    return avatarTemplate.replace('{size}', '120');
  }

  // Config Hub git operations
  async getGitRepoSettings(): Promise<GitRepoSettings | null> {
    try {
      return await this.apiCall<GitRepoSettings | null>('config-hub/git-settings', 'GET');
    } catch {
      return null;
    }
  }

  async saveGitRepoSettings(settings: GitRepoSettings): Promise<{ success: boolean; error?: string }> {
    try {
      return await this.apiCall<{ success: boolean; error?: string }>('config-hub/git-settings', 'POST', settings);
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Failed to save settings' };
    }
  }

  async getFileCommitHistory(owner: string, repo: string, path: string, branch?: string, limit = 30): Promise<GitCommit[]> {
    try {
      const params = new URLSearchParams({ path, per_page: String(limit) });
      if (branch) params.set('sha', branch);
      const url = `https://api.github.com/repos/${owner}/${repo}/commits?${params}`;
      const response = await firstValueFrom(this.http.get<any[]>(url, {
        headers: { Accept: 'application/vnd.github.v3+json', 'User-Agent': 'SailPoint-UI-Development-Kit' }
      }));
      return (response || []).map((c: any) => ({
        sha: c.sha as string,
        message: (c.commit?.message as string || '').split('\n')[0],
        author: (c.commit?.author?.name || c.author?.login || 'Unknown') as string,
        timestamp: (c.commit?.author?.date || '') as string,
      }));
    } catch {
      return [];
    }
  }

  async getFileAtRef(owner: string, repo: string, path: string, ref: string): Promise<string> {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(ref)}`;
      const response = await firstValueFrom(this.http.get<any>(url, {
        headers: { Accept: 'application/vnd.github.v3+json', 'User-Agent': 'SailPoint-UI-Development-Kit' }
      }));
      return atob((response.content as string).replace(/\n/g, ''));
    } catch {
      return '';
    }
  }

  // Connector deployment
  uploadConnector(): Promise<ConnectorDeploymentResponse> {
    // Note: This would need to be proxied through the backend server
    // For now, return an error indicating this is not available in web mode
    return Promise.resolve({
      success: false,
      error: 'Connector deployment is only available in Electron mode'
    });
  }

  // Connector Customizer deployment
  uploadCustomizer(): Promise<CustomizerDeploymentResponse> {
    // Note: This would need to be proxied through the backend server
    // For now, return an error indicating this is not available in web mode
    return Promise.resolve({
      success: false,
      error: 'Customizer deployment is only available in Electron mode'
    });
  }

  // Generic method to handle any SailPoint SDK API calls
  // This acts as a catch-all for any SailPoint API functions
  [key: string]: any;
  
  async callSdkMethod(methodName: string, ...args: unknown[]): Promise<unknown> {
    // Most SDK methods expect the first argument to be the request parameters object
    // For compatibility with the SDK wrapper, pass the first argument directly
    const requestParameters = args[0] || {};
    return this.apiCall(`sdk/${methodName}`, 'POST', { args: requestParameters });
  }
}