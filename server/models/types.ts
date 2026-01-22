/**
 * Type definitions for the UI Development Kit server
 */

export interface TokenData {
  accessToken: string;
  accessExpiry: Date;
  refreshToken?: string;
  refreshExpiry?: Date;
}

export interface OAuthState {
  redirectUrl: string;
  clientSessionId?: string;
}

export interface ServerConfig {
  tenantUrl: string;
  apiUrl: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string;
}

export interface AuthResponse {
  success: boolean;
  authUrl?: string;
  error?: string;
}

export interface LoginStatusResponse {
  isLoggedIn: boolean;
  username?: string;
}

export interface TokenStatusResponse {
  authtype: 'oauth';
  accessTokenIsValid: boolean;
  needsRefresh: boolean;
  expiry?: Date;
}

export interface CSRFTokenResponse {
  csrfToken: string;
}

export interface ConfigResponse {
  version: string;
  settings: {
    theme: string;
    autoRefresh: boolean;
  };
}

export interface SDKRequest {
  methodName: string;
  args?: any;
}

// Request augmentation for session ID
declare module 'express-serve-static-core' {
  interface Request {
    sessionId?: string;
  }
}