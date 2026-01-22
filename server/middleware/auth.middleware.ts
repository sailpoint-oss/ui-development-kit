/**
 * Authentication middleware for the UI Development Kit server
 */

import { Request, Response, NextFunction } from 'express';
import Tokens from 'csrf';
import { storage } from '../storage';

// Initialize CSRF tokens
const tokens = new Tokens();

/**
 * CSRF protection middleware
 */
export const csrfProtection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // Skip CSRF for GET requests and OAuth callback
  if (req.method === 'GET' || req.path === '/api/oauth/callback') {
    return next();
  }

  if (!req.sessionId) {
    res.status(403).json({ error: 'No session ID found. Please refresh and try again.' });
    return;
  }

  const csrfSecret = await storage.getCsrfSecret(req.sessionId);
  if (!csrfSecret) {
    res.status(403).json({ error: 'No CSRF token available. Please refresh and try again.' });
    return;
  }

  const token = req.headers['x-csrf-token'] as string || req.body._csrf;
  if (!token || !tokens.verify(csrfSecret, token)) {
    res.status(403).json({ error: 'Invalid CSRF token' });
    return;
  }
  next();
};

/**
 * Session ID middleware - extracts session ID from headers
 */
export const sessionIdMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Get session ID from header (sent by Angular app)
  const sessionId = req.headers['x-session-id'] as string;
  if (sessionId) {
    req.sessionId = sessionId;
  }
  next();
};