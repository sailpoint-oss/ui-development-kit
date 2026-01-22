/**
 * Server configuration for the UI Development Kit
 * Ensures environment variables are loaded before any other modules use them
 */

import dotenv from 'dotenv';
import { ServerConfig } from '../models/types';

// Load environment variables first
dotenv.config();

// Configuration for OAuth - loaded from environment variables
export const SERVER_CONFIG: ServerConfig = {
  tenantUrl: process.env.TENANT_URL || 'http://localhost:3000',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || '',
  redirectUri: process.env.REDIRECT_URI || 'http://localhost:3000/api/oauth/callback',
  scopes: process.env.OAUTH_SCOPES || 'sp:scopes:all'
};