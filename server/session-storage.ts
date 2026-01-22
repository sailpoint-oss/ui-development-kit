/**
 * Session Storage Factory for UI Development Kit
 * Provides abstraction layer for storing session data that needs persistence in Lambda
 * but can use in-memory storage for local development
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

// Type definitions
interface TokenData {
  accessToken: string;
  accessExpiry: Date;
  refreshToken?: string;
  refreshExpiry?: Date;
}

// storage for OAuth state during auth flow
interface OAuthState {
  redirectUrl: string;
  clientSessionId?: string;
}

interface SessionAuth {
  isAuthenticated: boolean;
  username: string;
}

// Storage interface for session data that needs persistence in Lambda
interface SessionStorage {
  getTokenData(sessionId: string): Promise<TokenData | null>;
  setTokenData(sessionId: string, tokenData: TokenData): Promise<void>;
  deleteTokenData(sessionId: string): Promise<void>;
  getOAuthState(stateKey: string): Promise<OAuthState | null>;
  setOAuthState(stateKey: string, stateData: OAuthState, ttlMinutes?: number): Promise<void>;
  deleteOAuthState(stateKey: string): Promise<void>;
  getCsrfSecret(sessionId: string): Promise<string | null>;
  setCsrfSecret(sessionId: string, secret: string): Promise<void>;
  deleteCsrfSecret(sessionId: string): Promise<void>;
  getSessionAuth(sessionId: string): Promise<SessionAuth | null>;
  setSessionAuth(sessionId: string, authData: SessionAuth): Promise<void>;
  deleteSessionAuth(sessionId: string): Promise<void>;
}

// Memory-based storage for local development
class MemoryStorage implements SessionStorage {
  private tokens = new Map<string, TokenData>();
  private oauthStates = new Map<string, { data: OAuthState; expires: number }>();
  private csrfSecrets = new Map<string, string>();
  private sessionAuth = new Map<string, SessionAuth>();

  async getTokenData(sessionId: string): Promise<TokenData | null> {
    return this.tokens.get(sessionId) || null;
  }

  async setTokenData(sessionId: string, tokenData: TokenData): Promise<void> {
    this.tokens.set(sessionId, tokenData);
  }

  async deleteTokenData(sessionId: string): Promise<void> {
    this.tokens.delete(sessionId);
  }

  async getOAuthState(stateKey: string): Promise<OAuthState | null> {
    const entry = this.oauthStates.get(stateKey);
    if (!entry) return null;

    // Check if expired
    if (Date.now() > entry.expires) {
      this.oauthStates.delete(stateKey);
      return null;
    }

    return entry.data;
  }

  async setOAuthState(stateKey: string, stateData: OAuthState, ttlMinutes = 10): Promise<void> {
    const expires = Date.now() + (ttlMinutes * 60 * 1000);
    this.oauthStates.set(stateKey, { data: stateData, expires });
  }

  async deleteOAuthState(stateKey: string): Promise<void> {
    this.oauthStates.delete(stateKey);
  }

  async getCsrfSecret(sessionId: string): Promise<string | null> {
    return this.csrfSecrets.get(sessionId) || null;
  }

  async setCsrfSecret(sessionId: string, secret: string): Promise<void> {
    this.csrfSecrets.set(sessionId, secret);
  }

  async deleteCsrfSecret(sessionId: string): Promise<void> {
    this.csrfSecrets.delete(sessionId);
  }

  async getSessionAuth(sessionId: string): Promise<SessionAuth | null> {
    return this.sessionAuth.get(sessionId) || null;
  }

  async setSessionAuth(sessionId: string, authData: SessionAuth): Promise<void> {
    this.sessionAuth.set(sessionId, authData);
  }

  async deleteSessionAuth(sessionId: string): Promise<void> {
    this.sessionAuth.delete(sessionId);
  }
}

// DynamoDB-based storage for Lambda
class DynamoStorage implements SessionStorage {
  private client: DynamoDBDocumentClient;
  private tableName: string;

  constructor(region: string = 'us-east-1', tableName: string = 'ui-dev-kit-sessions') {
    const dynamoClient = new DynamoDBClient({ region });
    this.client = DynamoDBDocumentClient.from(dynamoClient);
    this.tableName = tableName;
  }

  async getTokenData(sessionId: string): Promise<TokenData | null> {
    try {
      const result = await this.client.send(new GetCommand({
        TableName: this.tableName,
        Key: { pk: `token#${sessionId}`, sk: 'data' }
      }));

      if (!result.Item) return null;

      return {
        accessToken: result.Item.accessToken,
        accessExpiry: new Date(result.Item.accessExpiry),
        refreshToken: result.Item.refreshToken,
        refreshExpiry: result.Item.refreshExpiry ? new Date(result.Item.refreshExpiry) : undefined
      };
    } catch (error) {
      console.error('Error getting token data from DynamoDB:', error);
      return null;
    }
  }

  async setTokenData(sessionId: string, tokenData: TokenData): Promise<void> {
    try {
      await this.client.send(new PutCommand({
        TableName: this.tableName,
        Item: {
          pk: `token#${sessionId}`,
          sk: 'data',
          accessToken: tokenData.accessToken,
          accessExpiry: tokenData.accessExpiry.toISOString(),
          refreshToken: tokenData.refreshToken,
          refreshExpiry: tokenData.refreshExpiry?.toISOString(),
          ttl: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60) // 30 days
        }
      }));
    } catch (error) {
      console.error('Error setting token data in DynamoDB:', error);
    }
  }

  async deleteTokenData(sessionId: string): Promise<void> {
    try {
      await this.client.send(new DeleteCommand({
        TableName: this.tableName,
        Key: { pk: `token#${sessionId}`, sk: 'data' }
      }));
    } catch (error) {
      console.error('Error deleting token data from DynamoDB:', error);
    }
  }

  async getOAuthState(stateKey: string): Promise<OAuthState | null> {
    try {
      const result = await this.client.send(new GetCommand({
        TableName: this.tableName,
        Key: { pk: `oauth#${stateKey}`, sk: 'state' }
      }));

      if (!result.Item) return null;

      return JSON.parse(result.Item.stateData);
    } catch (error) {
      console.error('Error getting OAuth state from DynamoDB:', error);
      return null;
    }
  }

  async setOAuthState(stateKey: string, stateData: OAuthState, ttlMinutes = 10): Promise<void> {
    try {
      await this.client.send(new PutCommand({
        TableName: this.tableName,
        Item: {
          pk: `oauth#${stateKey}`,
          sk: 'state',
          stateData: JSON.stringify(stateData),
          ttl: Math.floor(Date.now() / 1000) + (ttlMinutes * 60)
        }
      }));
    } catch (error) {
      console.error('Error setting OAuth state in DynamoDB:', error);
    }
  }

  async deleteOAuthState(stateKey: string): Promise<void> {
    try {
      await this.client.send(new DeleteCommand({
        TableName: this.tableName,
        Key: { pk: `oauth#${stateKey}`, sk: 'state' }
      }));
    } catch (error) {
      console.error('Error deleting OAuth state from DynamoDB:', error);
    }
  }

  async getCsrfSecret(sessionId: string): Promise<string | null> {
    try {
      const result = await this.client.send(new GetCommand({
        TableName: this.tableName,
        Key: { pk: `csrf#${sessionId}`, sk: 'secret' }
      }));

      const secret = result.Item?.secret || null;
      return secret;
    } catch (error) {
      return null;
    }
  }

  async setCsrfSecret(sessionId: string, secret: string): Promise<void> {
    try {
      await this.client.send(new PutCommand({
        TableName: this.tableName,
        Item: {
          pk: `csrf#${sessionId}`,
          sk: 'secret',
          secret: secret,
          ttl: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
        }
      }));

    } catch (error) {
      console.error('[STORAGE] Error setting CSRF secret in DynamoDB:', error);
    }
  }

  async deleteCsrfSecret(sessionId: string): Promise<void> {
    try {
      await this.client.send(new DeleteCommand({
        TableName: this.tableName,
        Key: { pk: `csrf#${sessionId}`, sk: 'secret' }
      }));
    } catch (error) {
      console.error('Error deleting CSRF secret from DynamoDB:', error);
    }
  }

  async getSessionAuth(sessionId: string): Promise<SessionAuth | null> {
    try {
      const result = await this.client.send(new GetCommand({
        TableName: this.tableName,
        Key: { pk: `auth#${sessionId}`, sk: 'session' }
      }));

      if (!result.Item) return null;

      return {
        isAuthenticated: result.Item.isAuthenticated,
        username: result.Item.username
      };
    } catch (error) {
      console.error('Error getting session auth from DynamoDB:', error);
      return null;
    }
  }

  async setSessionAuth(sessionId: string, authData: SessionAuth): Promise<void> {
    try {
      await this.client.send(new PutCommand({
        TableName: this.tableName,
        Item: {
          pk: `auth#${sessionId}`,
          sk: 'session',
          isAuthenticated: authData.isAuthenticated,
          username: authData.username,
          ttl: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
        }
      }));
    } catch (error) {
      console.error('Error setting session auth in DynamoDB:', error);
    }
  }

  async deleteSessionAuth(sessionId: string): Promise<void> {
    try {
      await this.client.send(new DeleteCommand({
        TableName: this.tableName,
        Key: { pk: `auth#${sessionId}`, sk: 'session' }
      }));
    } catch (error) {
      console.error('Error deleting session auth from DynamoDB:', error);
    }
  }
}

// Storage factory
export const createStorage = (): SessionStorage => {
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return new DynamoStorage(
      process.env.AWS_REGION,
      process.env.DYNAMO_TABLE_NAME
    );
  } else {
    return new MemoryStorage();
  }
};

// Export types for use in main application
export { SessionStorage, TokenData, OAuthState, SessionAuth };