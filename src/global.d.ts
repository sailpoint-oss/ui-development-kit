export type AuthMethods = "oauth" | "pat";

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

export type PATTokenSet = {
  accessToken: string;
  accessExpiry: Date | string | number;
  clientId: string;
  clientSecret: string;
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

declare global {
  interface Window {
    electronAPI: {
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

    };
  }
}
