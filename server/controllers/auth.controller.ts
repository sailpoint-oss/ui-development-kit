/**
 * Authentication controller for the UI Development Kit server
 * Contains all authentication-related endpoint implementations
 */

import { Request, Response } from 'express';
import axios from 'axios';
import crypto from 'crypto';
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
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4201';
    res.redirect(`${websiteUrl}/#/home?error=oauth_error&message=` + encodeURIComponent(String(error)));
    return;
  }

  // Validate state parameter from storage
  let stateData: OAuthState | null = null;
  if (state) {
    stateData = await storage.getOAuthState(state as string);
  }

  if (!state || !stateData) {
    console.error('Invalid or missing OAuth state');
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4201';
    res.redirect(`${websiteUrl}/#/home?error=invalid_state`);
    return;
  }

  // OAuth state is single-use
  await storage.deleteOAuthState(state as string);

  if (!stateData.clientSessionId) {
    console.error('OAuth state has no client session');
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4201';
    res.redirect(`${websiteUrl}/#/home?error=invalid_state`);
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

    // Store tokens under a new server-generated session ID, never under the
    // client-supplied ID that started the login (prevents session fixation)
    const authenticatedSessionId = crypto.randomBytes(32).toString('hex');

    const sessionTokenData: TokenData = {
      accessToken: access_token,
      accessExpiry: new Date(Date.now() + expires_in * 1000),
      refreshToken: refresh_token,
      refreshExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
    };

    await storage.setTokenData(authenticatedSessionId, sessionTokenData);

    // Parse JWT to get user info
    const decodedToken = parseJWT(access_token);
    const username = decodedToken.user_name || 'User';

    await storage.setSessionAuth(authenticatedSessionId, {
      isAuthenticated: true,
      username: username
    });

    // The browser that completed the login exchanges this one-time code for the
    // new session ID. The exchange only succeeds from the session that started the login.
    const loginCode = crypto.randomBytes(32).toString('hex');
    await storage.setPendingLogin(loginCode, {
      sessionId: authenticatedSessionId,
      clientSessionId: stateData.clientSessionId
    });

    // Redirect to success URL using the configured website URL
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4201';
    res.redirect(`${websiteUrl}/#/home?success=true&login_code=${loginCode}`);
  } catch (error) {
    console.error('Error in OAuth callback:', error);
    const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:4201';
    res.redirect(`${websiteUrl}/#/home?error=callback_error`);
  }
};

/**
 * Exchange the one-time login code from the OAuth callback for the
 * authenticated session ID
 */
export const completeLogin = async (req: Request, res: Response): Promise<void> => {
  const { loginCode } = req.body || {};

  if (!req.sessionId || typeof loginCode !== 'string' || !loginCode) {
    res.status(400).json({ error: 'Invalid login completion request' });
    return;
  }

  const pending = await storage.consumePendingLogin(loginCode);

  // The code must be redeemed by the same pre-login session that started the login
  if (!pending || pending.clientSessionId !== req.sessionId) {
    res.status(401).json({ error: 'Invalid or expired login code' });
    return;
  }

  // The pre-login session has no further use
  await storage.deleteCsrfSecret(req.sessionId);

  res.json({ sessionId: pending.sessionId });
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

  // Resolve token data exclusively from this request's session
  let sessionTokenData: TokenData | null = req.sessionId
    ? await storage.getTokenData(req.sessionId)
    : null;

  if (!sessionTokenData) {
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
  let accessTokenIsValid = sessionTokenData.accessExpiry > now;
  const canRefresh = sessionTokenData.refreshToken && sessionTokenData.refreshExpiry && sessionTokenData.refreshExpiry > now;

  // If token is expired but we can refresh, attempt to refresh it
  if (!accessTokenIsValid && canRefresh) {
    console.log('Access token expired, attempting to refresh...');

    try {
      const apiBaseUrl = buildSailPointUrl(SERVER_CONFIG.tenantUrl, 'api');
      const tokenEndpoint = `${apiBaseUrl}/oauth/token`;

      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', SERVER_CONFIG.clientId);
      params.append('client_secret', SERVER_CONFIG.clientSecret);
      params.append('refresh_token', sessionTokenData.refreshToken!);

      const refreshResponse = await axios.post(tokenEndpoint, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { access_token, refresh_token, expires_in } = refreshResponse.data;

      // Update token data in session storage only — no module-level writes
      sessionTokenData = {
        accessToken: access_token,
        accessExpiry: new Date(Date.now() + expires_in * 1000),
        refreshToken: refresh_token || sessionTokenData.refreshToken,
        refreshExpiry: sessionTokenData.refreshExpiry
      };

      if (req.sessionId) {
        await storage.setTokenData(req.sessionId, sessionTokenData);
      }

      const decodedToken = parseJWT(access_token);
      const username = decodedToken.user_name || 'User';

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
    expiry: sessionTokenData.accessExpiry,
    needsRefresh: !accessTokenIsValid && <boolean>canRefresh
  };

  res.json(response);
};

/**
 * Logout endpoint
 */
export const logout = async (req: Request, res: Response): Promise<void> => {
  // Clear token data, CSRF secret, and session auth from session storage
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
