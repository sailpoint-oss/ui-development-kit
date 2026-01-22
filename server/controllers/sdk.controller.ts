/**
 * SDK controller for the UI Development Kit server
 * Contains SDK-related endpoint implementations
 */

import { Request, Response } from 'express';
import { storage } from '../storage';
import { SERVER_CONFIG } from '../config/server.config';
import { getTokenData, setTokenData } from './auth.controller';
import { buildSailPointUrl } from '../utils/helpers';



/**
 * SDK API proxy endpoint
 */
export const sdkProxy = async (req: Request, res: Response): Promise<void> => {
  const { methodName } = req.params;
  const { args } = req.body;

  // Check if user is authenticated
  let isAuthenticated = false;

  if (req.sessionId) {
    const authData = await storage.getSessionAuth(req.sessionId);
    if (authData) {
      isAuthenticated = authData.isAuthenticated;
    }
  }

  if (!isAuthenticated) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }

  // Get token data from storage
  let currentTokenData = getTokenData();
  if (!currentTokenData && req.sessionId) {
    currentTokenData = await storage.getTokenData(req.sessionId);
    if (currentTokenData) {
      setTokenData(currentTokenData); // Update global for local development
    }
  }

  if (!currentTokenData) {
    res.status(401).json({ error: 'No token data found' });
    return;
  }

  const now = new Date();
  if (currentTokenData.accessExpiry <= now) {
    res.status(401).json({ error: 'Access token expired' });
    return;
  }

  try {
    const { executeSdkMethod } = require('../sailpoint-sdk-web');

    // Build API base path
    let basePath = '';
    try {
      basePath = buildSailPointUrl(SERVER_CONFIG.tenantUrl, 'api');
    } catch (error) {
      console.error('Failed to construct API base path:', error);
    }

    // Execute the SDK method
    const result = await executeSdkMethod(
      methodName,
      args || {},
      currentTokenData.accessToken,
      basePath
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: 'SDK method execution failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};