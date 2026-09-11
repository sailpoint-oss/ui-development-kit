export type TokenSet = {
    accessToken: string;
    accessExpiry: Date;
    refreshToken?: string;
    refreshExpiry?: Date;
}

export interface TokenValidationResult {
    isValid: boolean;
    needsRefresh: boolean;
    tokens?: TokenSet;
}

export interface RefreshResponse {
    access_token: string;
    refresh_token: string;
    token_type?: string;
    expires_in?: number;
    scope?: string;
}
