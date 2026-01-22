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
  bypassTLS?: boolean;
  caCertPath?: string;
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
  
  async callSdkMethod(methodName: string, ...args: unknown[]): Promise<unknown> {
    // Most SDK methods expect the first argument to be the request parameters object
    // For compatibility with the SDK wrapper, pass the first argument directly
    const requestParameters = args[0] || {};
    return this.apiCall(`sdk/${methodName}`, 'POST', { args: requestParameters });
  }
}