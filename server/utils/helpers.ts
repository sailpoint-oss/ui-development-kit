/**
 * Utility helper functions for the UI Development Kit server
 */

import crypto from 'crypto';
import { OAuthState } from '../models/types';

/**
 * Generate a secure OAuth state parameter with embedded data
 */
export function generateStateParam(data: OAuthState): string {
  const stateObj = JSON.stringify(data);
  const randomBytes = crypto.randomBytes(16).toString('hex');
  return Buffer.from(`${randomBytes}:${stateObj}`).toString('base64');
}

/**
 * Build SailPoint URL with the specified subdomain
 * e.g. "beta-15156.identitynow-demo.com" -> "beta-15156.api.identitynow-demo.com"
 */
export function buildSailPointUrl(tenantUrl: string, subdomain: 'api' | 'login'): string {
  try {
    const url = new URL(tenantUrl);
    const hostParts = url.hostname.split('.');

    // Insert the subdomain after the first part (tenant name)
    if (hostParts.length >= 2) {
      hostParts.splice(1, 0, subdomain);
      url.hostname = hostParts.join('.');
    }

    return url.toString().replace(/\/$/, ''); // Remove trailing slash
  } catch (error) {
    console.error('Error building SailPoint URL:', error);
    throw new Error(`Failed to build ${subdomain} URL from tenant URL: ${tenantUrl}`);
  }
}

/**
 * Parse JWT token to extract payload data
 */
export function parseJWT(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(Buffer.from(base64, 'base64').toString());
  } catch (error) {
    console.error('Failed to parse JWT token:', error);
    return {};
  }
}