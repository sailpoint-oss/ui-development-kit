/**
 * Enhanced test server for the UI Development Kit web version
 * Implements a simplified authentication flow with server-side credentials
 */
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import path from 'path';

// Import middleware
import { csrfProtection, sessionIdMiddleware } from './middleware/auth.middleware';

// Import controllers
import * as authController from './controllers/auth.controller';
import * as sdkController from './controllers/sdk.controller';
import * as configController from './controllers/config.controller';


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy when running in Lambda/API Gateway
if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
  app.set('trust proxy', true);

  // Strip stage name from paths in Lambda environment
  app.use((req, res, next) => {
    // Ensure response object has EventEmitter methods for Lambda compatibility
    if (!res.on || typeof res.on !== 'function') {
      const EventEmitter = require('events');
      Object.setPrototypeOf(res, EventEmitter.prototype);
      EventEmitter.call(res);
    }

    // Remove stage name (like /prod, /dev, /stage) from the beginning of the path
    req.url = req.url.replace(/^\/[^\/]+/, '');
    // Ensure we don't end up with an empty path
    if (!req.url || req.url === '') {
      req.url = '/';
    }
    next();
  });
}

// Middleware (order matters!)
app.use(express.json());
app.use(cookieParser());

// CORS configuration - only enable in development or Lambda environments
if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
  // In Lambda, rely on API Gateway CORS configuration
  app.use(cors({
    origin: true,
    credentials: true
  }));
} else if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  // Only enable CORS in development (when Angular dev server is separate)
  app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true
  }));
}
// In production (Docker), no CORS needed - frontend and backend served from same origin

// Add session ID middleware
app.use(sessionIdMiddleware);

// Rate limiting
const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per minute
  message: { error: 'Too many request attempts. Please try again later.' },
  // In Lambda/API Gateway, trust the proxy and validate properly
  validate: process.env.AWS_LAMBDA_FUNCTION_NAME ? {
    trustProxy: false,
    xForwardedForHeader: false
  } : undefined
});

// Authentication routes
app.post('/api/auth/web-login', rateLimiter, csrfProtection, authController.webLogin);
app.get('/api/oauth/callback', rateLimiter, authController.oauthCallback);
app.get('/api/auth/login-status', rateLimiter, authController.loginStatus);
app.get('/api/auth/status/access/', rateLimiter, authController.accessTokenStatus);
app.post('/api/auth/logout', rateLimiter, csrfProtection, authController.logout);
app.get('/api/auth/csrf-token', rateLimiter, authController.csrfToken);

// SDK routes
app.post('/api/sdk/:methodName', rateLimiter, csrfProtection, sdkController.sdkProxy);

// Config routes
app.get('/api/config', rateLimiter, configController.getConfig);

// Serve static files from Angular build (for Docker/production deployment)
// Only serve static files if not in Lambda environment
if (!process.env.AWS_LAMBDA_FUNCTION_NAME) {
  const staticPath = path.join(__dirname, '../public');
  
  // Serve static assets
  app.use(express.static(staticPath, {
    maxAge: '1y',
    etag: true,
    setHeaders: (res, filePath) => {
      // Cache static assets aggressively
      if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // Don't cache HTML files
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    }
  }));

  // Serve index.html for any other routes (Angular routing)
  // Apply rate limiting for security best practices
  app.get('*', rateLimiter, (req, res) => {
    // Don't serve index.html for API routes
    if (req.url.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

// Export app for Lambda or other environments
export default app;

// Start server only if running directly (not when imported)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Web API server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`OAuth configured for tenant: ${process.env.TENANT_URL || 'localhost'}`);
  });
}