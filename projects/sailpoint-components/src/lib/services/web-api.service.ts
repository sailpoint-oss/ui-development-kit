import { Injectable } from '@angular/core';

/**
 * Interface that defines all the methods used from window.electronAPI
 * This acts as a contract for implementing web-compatible alternatives
 */
export interface ElectronAPIInterface {
  // Unified authentication and connection
  unifiedLogin: (environment: string) => Promise<{ success: boolean, error?: string, uuid?: string, authUrl?: string }>;
  disconnectFromISC: () => Promise<void>;
  checkAccessTokenStatus: () => Promise<AccessTokenStatus>;
  getCurrentTokenDetails: (environment: string) => Promise<{ tokenDetails: TokenDetails | undefined, error?: string }>;
  
  // Token management
  refreshTokens: () => Promise<{ success: boolean, error?: string }>;
  validateTokens: (environment: string) => Promise<{ isValid: boolean, needsRefresh: boolean, error?: string }>;
  checkOauthCodeFlowComplete: (uuid: string, environment: string) => Promise<{ isComplete: boolean, success?: boolean, error?: string }>;

  // Environment management
  getTenants: () => Promise<Tenant[]>;
  updateEnvironment: (config: UpdateEnvironmentRequest) => Promise<{ success: boolean, error?: string }>;
  deleteEnvironment: (environment: string) => Promise<{ success: boolean, error?: string }>;
  setActiveEnvironment: (environment: string) => Promise<{ success: boolean, error?: string }>;
  
  // Config file management
  readConfig: () => Promise<any>;
  writeConfig: (config: any) => Promise<any>;

  
  // SailPoint SDK functions
  // These are dynamically added and would need to be proxied through the web service
  [key: string]: any;
}

// Supporting Types
export type UpdateEnvironmentRequest = {
  environmentName: string;
  tenantUrl: string;
  baseUrl: string;
  authtype: AuthMethods;
  clientId?: string;
  clientSecret?: string;
}

export type Tenant = {
  active: boolean;
  name: string;
  apiUrl: string;
  tenantUrl: string;
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

@Injectable({
  providedIn: 'root'
})
export class WebApiService implements ElectronAPIInterface {
  private apiUrl = '/api'; // Default API URL, can be configured
  private tenants: Tenant[] = [];
  private authtype: AuthMethods = 'pat';
  private activeEnvironment: string | null = null;
  private tokens: Map<string, TokenSet> = new Map();

  constructor() { }
  
  /**
   * Configure the API URL for the web service
   * @param url - The base URL for the web service API
   */
  setApiUrl(url: string): void {
    this.apiUrl = url;
  }

  /**
   * Helper method to make API calls to the web service
   */
  private async apiCall<T>(endpoint: string, method: string = 'GET', body?: any): Promise<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Includes cookies for session management
    };
    
    if (body) {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API call failed: ${error}`);
    }
    
    return await response.json() as T;
  }

  // Authentication and Connection methods
  async unifiedLogin(environment: string): Promise<{ success: boolean, error?: string, uuid?: string, authUrl?: string }> {
    try {
      const result = await this.apiCall<{ success: boolean, error?: string, uuid?: string, authUrl?: string }>('auth/login', 'POST', { environment });
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

  // Generic method to handle any SailPoint SDK API calls
  // This acts as a catch-all for any SailPoint API functions
  [key: string]: any;
  
  async callSdkMethod(methodName: string, ...args: any[]): Promise<any> {
    return this.apiCall(`sdk/${methodName}`, 'POST', { args });
  }
}