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

export interface LambdaUUIDResponse {
    id: string;
    authURL: string;
    baseURL: string;
    pickupSecret: string;
    ttl?: number;
}

export interface TokenResponse {
    baseURL: string;
    id: string;
    tokenInfo: string | EncryptedTokenData;
}

export interface RefreshResponse {
    access_token: string;
    refresh_token: string;
    token_type?: string;
    expires_in?: number;
    scope?: string;
}

export interface EncryptedTokenData {
    version: string;
    algorithm: {
        symmetric: string;
        asymmetric: string;
    };
    data: {
        ciphertext: string;
        encryptedKey: string;
        iv: string;
        authTag: string;
    };
}