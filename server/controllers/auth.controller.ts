/**
 * Authentication controller for the UI Development Kit server
 * Contains all authentication-related endpoint implementations
 */

import { Request, Response } from 'express';
import axios from 'axios';
import Tokens from 'csrf';
import { storage } from '../storage';
import { SERVER_CONFIG } from '../config/server.config';
import { generateStateParam, buildSailPointUrl, parseJWT } from '../utils/helpers';
import {
  TokenData,
  OAuthState,
  AuthResponse,
  LoginStatusResponse,
  TokenStatusResponse,
  CSRFTokenResponse
} from '../models/types';

// Initialize CSRF tokens
const tokens = new Tokens();

// In-memory token storage for session-based approach
let tokenData: TokenData | null = null;


/**
 * Initiate OAuth web login flow
 */
export const webLogin = async (req: Request, res: Response): Promise<void> => {
  if (!req.sessionId) {
    res.status(400).json({ error: 'No session ID found' });
    return;
  }

  // Generate and store state parameter
  const stateData: OAuthState = {
    redirectUrl: '/home',
    clientSessionId: req.sessionId
  };

  const state = generateStateParam(stateData);
  await storage.setOAuthState(state, stateData, 10);

  // Build the OAuth URL using the SailPoint login domain
  const loginBaseUrl = buildSailPointUrl(SERVER_CONFIG.tenantUrl, 'login');
  const authUrl = `${loginBaseUrl}/oauth/authorize?client_id=${SERVER_CONFIG.clientId}&response_type=code&redirect_uri=${encodeURIComponent(SERVER_CONFIG.redirectUri)}&scope=${encodeURIComponent(SERVER_CONFIG.scopes)}&state=${encodeURIComponent(state)}`;

  const response: AuthResponse = {
    success: true,
    authUrl
  };

  res.json(response);
};

/**
 * OAuth callback handler
 */
export const oauthCallback = async (req: Request, res: Response): Promise<void> => {
  const { code, state, error } = req.query;

  // Check if error was returned
  if (error) {
    console.error('OAuth error:', error);
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4200';
    res.redirect(`${websiteUrl}/home?error=oauth_error&message=` + encodeURIComponent(String(error)));
    return;
  }

  // Validate state parameter from storage
  let stateData: OAuthState | null = null;
  if (state) {
    stateData = await storage.getOAuthState(state as string);
  }

  if (!state || !stateData) {
    console.error('Invalid or missing OAuth state');
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4200';
    res.redirect(`${websiteUrl}/home?error=invalid_state`);
    return;
  }

  try {
    const apiBaseUrl = buildSailPointUrl(SERVER_CONFIG.tenantUrl, 'api');
    const tokenEndpoint = `${apiBaseUrl}/oauth/token`;

    // Using form-urlencoded format as required by OAuth2 spec
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', SERVER_CONFIG.clientId);
    params.append('client_secret', SERVER_CONFIG.clientSecret);
    params.append('code', code!.toString());
    params.append('redirect_uri', SERVER_CONFIG.redirectUri);

    const tokenResponse = await axios.post(tokenEndpoint, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    // Store token information
    tokenData = {
      accessToken: access_token,
      accessExpiry: new Date(Date.now() + expires_in * 1000),
      refreshToken: refresh_token,
      refreshExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
    };

    // Store token data using client session ID from OAuth state
    if (stateData.clientSessionId) {
      await storage.setTokenData(stateData.clientSessionId, tokenData);
    }

    // Parse JWT to get user info
    const decodedToken = parseJWT(access_token);
    const username = decodedToken.user_name || 'User';

    // Store session auth
    if (stateData.clientSessionId) {
      await storage.setSessionAuth(stateData.clientSessionId, {
        isAuthenticated: true,
        username: username
      });
    }

    // Clear OAuth state from storage
    if (state) {
      await storage.deleteOAuthState(state as string);
    }

    // Redirect to success URL using the configured website URL
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4200';
    res.redirect(`${websiteUrl}/home?success=true`);
  } catch (error) {
    console.error('Error in OAuth callback:', error);
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4200';
    res.redirect(`${websiteUrl}/home?error=callback_error`);
  }
};

/**
 * Check login status
 */
export const loginStatus = async (req: Request, res: Response): Promise<void> => {
  let isAuthenticated = false;
  let username: string | undefined;

  if (req.sessionId) {
    const authData = await storage.getSessionAuth(req.sessionId);
    if (authData) {
      isAuthenticated = authData.isAuthenticated;
      username = authData.username;
    }
  }

  const response: LoginStatusResponse = {
    isLoggedIn: isAuthenticated,
    username: username
  };

  res.json(response);
};

/**
 * Check access token status and auto-refresh if needed
 */
export const accessTokenStatus = async (req: Request, res: Response): Promise<void> => {
  let isAuthenticated = false;

  if (req.sessionId) {
    const authData = await storage.getSessionAuth(req.sessionId);
    if (authData) {
      isAuthenticated = authData.isAuthenticated;
    }
  }

  if (!isAuthenticated) {
    const response: TokenStatusResponse = {
      authtype: 'oauth' as const,
      accessTokenIsValid: false,
      needsRefresh: false
    };
    res.json(response);
    return;
  }

  // Get token data from storage
  if (!tokenData && req.sessionId) {
    tokenData = await storage.getTokenData(req.sessionId);
  }

  if (!tokenData) {
    const response: TokenStatusResponse = {
      authtype: 'oauth' as const,
      accessTokenIsValid: false,
      needsRefresh: false
    };
    res.json(response);
    return;
  }

  // Check if access token is still valid
  const now = new Date();
  let accessTokenIsValid = tokenData.accessExpiry > now;
  const canRefresh = tokenData.refreshToken && tokenData.refreshExpiry && tokenData.refreshExpiry > now;

  // If token is expired but we can refresh, attempt to refresh it
  if (!accessTokenIsValid && canRefresh) {
    console.log('Access token expired, attempting to refresh...');

    try {
      // Use the SailPoint token refresh endpoint
      const apiBaseUrl = buildSailPointUrl(SERVER_CONFIG.tenantUrl, 'api');
      const tokenEndpoint = `${apiBaseUrl}/oauth/token`;

      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', SERVER_CONFIG.clientId);
      params.append('client_secret', SERVER_CONFIG.clientSecret);
      params.append('refresh_token', tokenData.refreshToken!);

      const refreshResponse = await axios.post(tokenEndpoint, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { access_token, refresh_token, expires_in } = refreshResponse.data;

      // Update token data with new tokens
      tokenData = {
        accessToken: access_token,
        accessExpiry: new Date(Date.now() + expires_in * 1000),
        refreshToken: refresh_token || tokenData.refreshToken,
        refreshExpiry: tokenData.refreshExpiry
      };

      // Update storage
      if (req.sessionId) {
        await storage.setTokenData(req.sessionId, tokenData);
      }

      // Parse JWT to update user info if needed
      const decodedToken = parseJWT(access_token);
      const username = decodedToken.user_name || 'User';

      // Update session auth with new username
      if (req.sessionId) {
        await storage.setSessionAuth(req.sessionId, {
          isAuthenticated: true,
          username: username
        });
      }

      accessTokenIsValid = true;
      console.log('Token refreshed successfully');
    } catch (refreshError) {
      console.error('Failed to refresh token:', refreshError);
      accessTokenIsValid = false;
    }
  }

  const response: TokenStatusResponse = {
    authtype: 'oauth' as const,
    accessTokenIsValid,
    expiry: tokenData.accessExpiry,
    needsRefresh: !accessTokenIsValid && <boolean>canRefresh
  };

  res.json(response);
};

/**
 * Logout endpoint
 */
export const logout = async (req: Request, res: Response): Promise<void> => {
  // Clear token data, CSRF secret, and session auth from memory and storage
  tokenData = null;
  if (req.sessionId) {
    await storage.deleteTokenData(req.sessionId);
    await storage.deleteCsrfSecret(req.sessionId);
    await storage.deleteSessionAuth(req.sessionId);
  }

  res.json({ success: true });
};

/**
 * CSRF token endpoint
 */
export const csrfToken = async (req: Request, res: Response): Promise<void> => {
  if (!req.sessionId) {
    res.status(400).json({ error: 'No session ID found' });
    return;
  }

  // Get or create CSRF secret
  let csrfSecret = await storage.getCsrfSecret(req.sessionId);

  if (!csrfSecret) {
    csrfSecret = tokens.secretSync();
    await storage.setCsrfSecret(req.sessionId, csrfSecret);
  }

  // Generate CSRF token
  const csrfTokenValue = tokens.create(csrfSecret);
  const response: CSRFTokenResponse = {
    csrfToken: csrfTokenValue
  };

  res.json(response);
};

// Export token data getter for SDK controller
export const getTokenData = (): TokenData | null => tokenData;
export const setTokenData = (data: TokenData | null): void => {
  tokenData = data;
};