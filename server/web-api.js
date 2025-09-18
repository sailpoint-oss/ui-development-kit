/**
 * Example Express backend for the UI Development Kit web version
 * This is a starting point that you'll need to expand for a full implementation
 */

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure session storage
// In production, use a proper session store like Redis
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:4200',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Serve static files from the Angular app build
app.use(express.static(path.join(__dirname, '../dist')));

// In-memory storage for development purposes
// In production, use a database
const tenantStore = {};
const tokenStore = {};
let globalAuthType = 'pat';

// File uploads configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Authentication endpoints
app.post('/api/auth/login', async (req, res) => {
  try {
    const { environment } = req.body;
    
    // Get tenant info from store
    const tenant = tenantStore[environment];
    if (!tenant) {
      return res.status(404).json({ success: false, error: 'Environment not found' });
    }
    
    // Perform authentication based on auth type
    if (tenant.authtype === 'pat') {
      // Implement PAT authentication
      // This is a placeholder - implement actual PAT auth logic
      const tokenResponse = await performPATAuthentication(tenant);
      tokenStore[environment] = {
        accessToken: tokenResponse.accessToken,
        accessExpiry: new Date(Date.now() + 3600 * 1000), // 1 hour from now
        clientId: tenant.clientId,
        clientSecret: tenant.clientSecret
      };
    } else {
      // Implement OAuth authentication
      // This is a placeholder - implement actual OAuth flow
      const tokenResponse = await performOAuthAuthentication(tenant);
      tokenStore[environment] = {
        accessToken: tokenResponse.accessToken,
        accessExpiry: new Date(Date.now() + 3600 * 1000), // 1 hour from now
        refreshToken: tokenResponse.refreshToken,
        refreshExpiry: new Date(Date.now() + 30 * 24 * 3600 * 1000) // 30 days from now
      };
    }
    
    // Store active environment in session
    req.session.activeEnvironment = environment;
    
    res.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.activeEnvironment = null;
  res.json({ success: true });
});

app.get('/api/auth/status/access/:environment', (req, res) => {
  const { environment } = req.params;
  const tokenData = tokenStore[environment];
  
  if (!tokenData) {
    return res.json({
      authtype: tenantStore[environment]?.authtype || globalAuthType,
      accessTokenIsValid: false,
      needsRefresh: true
    });
  }
  
  const now = new Date();
  const isValid = tokenData.accessExpiry > now;
  // Consider token needs refresh if it expires in less than 10 minutes
  const needsRefresh = tokenData.accessExpiry < new Date(now.getTime() + 10 * 60 * 1000);
  
  res.json({
    authtype: tenantStore[environment]?.authtype || globalAuthType,
    accessTokenIsValid: isValid,
    expiry: tokenData.accessExpiry,
    needsRefresh
  });
});

app.get('/api/auth/status/refresh/:environment', (req, res) => {
  const { environment } = req.params;
  const tokenData = tokenStore[environment];
  
  if (!tokenData || !tokenData.refreshToken) {
    return res.json({
      authtype: 'oauth',
      refreshTokenIsValid: false,
      needsRefresh: true
    });
  }
  
  const now = new Date();
  const isValid = tokenData.refreshExpiry > now;
  // Consider token needs refresh if it expires in less than 1 day
  const needsRefresh = tokenData.refreshExpiry < new Date(now.getTime() + 24 * 60 * 60 * 1000);
  
  res.json({
    authtype: 'oauth',
    refreshTokenIsValid: isValid,
    expiry: tokenData.refreshExpiry,
    needsRefresh
  });
});

app.get('/api/auth/token-details/:environment', (req, res) => {
  const { environment } = req.params;
  const tokenData = tokenStore[environment];
  
  if (!tokenData || !tokenData.accessToken) {
    return res.json({ tokenDetails: undefined, error: 'No token available' });
  }
  
  try {
    // In a real implementation, decode and validate the JWT token
    const decodedToken = decodeToken(tokenData.accessToken);
    const tokenDetails = {
      ...decodedToken,
      expiry: tokenData.accessExpiry
    };
    
    res.json({ tokenDetails, error: undefined });
  } catch (error) {
    res.json({ tokenDetails: undefined, error: error.message });
  }
});

app.post('/api/auth/refresh', async (req, res) => {
  try {
    const { environment } = req.body;
    const tokenData = tokenStore[environment];
    const tenant = tenantStore[environment];
    
    if (!tokenData || !tenant) {
      return res.status(404).json({ success: false, error: 'Environment or tokens not found' });
    }
    
    if (tenant.authtype === 'pat') {
      // Refresh PAT token
      const tokenResponse = await refreshPATToken(tenant);
      tokenStore[environment] = {
        ...tokenData,
        accessToken: tokenResponse.accessToken,
        accessExpiry: new Date(Date.now() + 3600 * 1000) // 1 hour from now
      };
    } else {
      // Refresh OAuth token
      if (!tokenData.refreshToken) {
        return res.status(400).json({ success: false, error: 'No refresh token available' });
      }
      
      const tokenResponse = await refreshOAuthToken(tenant, tokenData.refreshToken);
      tokenStore[environment] = {
        accessToken: tokenResponse.accessToken,
        accessExpiry: new Date(Date.now() + 3600 * 1000), // 1 hour from now
        refreshToken: tokenResponse.refreshToken || tokenData.refreshToken,
        refreshExpiry: tokenResponse.refreshToken 
          ? new Date(Date.now() + 30 * 24 * 3600 * 1000) // 30 days from now
          : tokenData.refreshExpiry
      };
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/auth/oauth-tokens/:environment', (req, res) => {
  const { environment } = req.params;
  const tokenData = tokenStore[environment];
  
  if (!tokenData || !tokenData.refreshToken) {
    return res.json(undefined);
  }
  
  // Return only OAuth token data
  res.json({
    accessToken: tokenData.accessToken,
    accessExpiry: tokenData.accessExpiry,
    refreshToken: tokenData.refreshToken,
    refreshExpiry: tokenData.refreshExpiry
  });
});

app.get('/api/auth/pat-tokens/:environment', (req, res) => {
  const { environment } = req.params;
  const tokenData = tokenStore[environment];
  const tenant = tenantStore[environment];
  
  if (!tokenData || !tenant || tenant.authtype !== 'pat') {
    return res.json(undefined);
  }
  
  // Return PAT token data
  res.json({
    accessToken: tokenData.accessToken,
    accessExpiry: tokenData.accessExpiry,
    clientId: tenant.clientId,
    clientSecret: tenant.clientSecret
  });
});

app.get('/api/auth/validate-tokens/:environment', async (req, res) => {
  const { environment } = req.params;
  const tokenData = tokenStore[environment];
  
  if (!tokenData) {
    return res.json({ isValid: false, needsRefresh: true });
  }
  
  const now = new Date();
  const isValid = tokenData.accessExpiry > now;
  // Consider token needs refresh if it expires in less than 10 minutes
  const needsRefresh = tokenData.accessExpiry < new Date(now.getTime() + 10 * 60 * 1000);
  
  res.json({ isValid, needsRefresh });
});

app.post('/api/auth/store-credentials', (req, res) => {
  const { environment, clientId, clientSecret } = req.body;
  
  if (!tenantStore[environment]) {
    return res.status(404).json({ error: 'Environment not found' });
  }
  
  // Update tenant with new credentials
  tenantStore[environment] = {
    ...tenantStore[environment],
    clientId,
    clientSecret
  };
  
  res.json({ success: true });
});

app.get('/api/auth/global-type', (req, res) => {
  res.json({ authtype: globalAuthType });
});

app.post('/api/auth/global-type', (req, res) => {
  const { authtype } = req.body;
  
  if (authtype !== 'oauth' && authtype !== 'pat') {
    return res.status(400).json({ error: 'Invalid auth type' });
  }
  
  globalAuthType = authtype;
  res.json({ success: true });
});

// Environment endpoints
app.get('/api/environments', (req, res) => {
  const environments = Object.values(tenantStore);
  res.json(environments);
});

app.post('/api/environments', (req, res) => {
  const { environmentName, tenantUrl, baseUrl, authtype, clientId, clientSecret } = req.body;
  
  if (!environmentName || !tenantUrl || !baseUrl || !authtype) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }
  
  tenantStore[environmentName] = {
    name: environmentName,
    tenantName: environmentName,
    tenantUrl,
    apiUrl: baseUrl,
    authtype,
    clientId,
    clientSecret,
    active: Object.keys(tenantStore).length === 0 // First environment is active by default
  };
  
  res.json({ success: true });
});

app.delete('/api/environments/:environment', (req, res) => {
  const { environment } = req.params;
  
  if (!tenantStore[environment]) {
    return res.status(404).json({ success: false, error: 'Environment not found' });
  }
  
  // If this was the active environment, we need to clear the session
  if (tenantStore[environment].active) {
    req.session.activeEnvironment = null;
    
    // Find another environment to make active
    const remainingEnvironments = Object.keys(tenantStore).filter(name => name !== environment);
    if (remainingEnvironments.length > 0) {
      tenantStore[remainingEnvironments[0]].active = true;
    }
  }
  
  delete tenantStore[environment];
  delete tokenStore[environment];
  
  res.json({ success: true });
});

app.post('/api/environments/active', (req, res) => {
  const { environment } = req.body;
  
  if (!tenantStore[environment]) {
    return res.status(404).json({ success: false, error: 'Environment not found' });
  }
  
  // Clear active flag on all environments
  Object.values(tenantStore).forEach(tenant => {
    tenant.active = false;
  });
  
  // Set the specified environment as active
  tenantStore[environment].active = true;
  req.session.activeEnvironment = environment;
  
  res.json({ success: true });
});

// Config endpoints
app.get('/api/config', (req, res) => {
  // In a real implementation, load from database or file
  res.json({
    version: '1.0.0',
    settings: {
      theme: 'light',
      autoRefresh: true
    }
  });
});

app.post('/api/config', (req, res) => {
  const { config } = req.body;
  // In a real implementation, save to database or file
  res.json(config);
});

// Logo endpoints
app.post('/api/logos', upload.single('logo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    filename: req.file.filename,
    path: req.file.path
  });
});

app.get('/api/logos/:fileName/exists', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, 'uploads', fileName);
  
  const exists = fs.existsSync(filePath);
  res.json(exists);
});

app.get('/api/user-data-path', (req, res) => {
  res.json(path.join(__dirname, 'uploads'));
});

app.get('/api/logos/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, 'uploads', fileName);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Logo not found' });
  }
  
  const fileContent = fs.readFileSync(filePath);
  const base64 = fileContent.toString('base64');
  
  // Get mime type based on file extension
  const ext = path.extname(fileName).toLowerCase();
  let mimeType = 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
  if (ext === '.gif') mimeType = 'image/gif';
  if (ext === '.svg') mimeType = 'image/svg+xml';
  
  const dataUrl = `data:${mimeType};base64,${base64}`;
  res.json(dataUrl);
});

// SDK API proxy endpoint
app.post('/api/sdk/:methodName', async (req, res) => {
  try {
    const { methodName } = req.params;
    const { args } = req.body;
    
    // Get the active environment from the session
    const environment = req.session.activeEnvironment;
    if (!environment || !tokenStore[environment]) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    
    const tenant = tenantStore[environment];
    const token = tokenStore[environment];
    
    // In a real implementation, you would call the SailPoint API
    const response = await callSailPointApi(methodName, args, tenant, token);
    
    res.json(response);
  } catch (error) {
    console.error(`Error calling SDK method:`, error);
    res.status(500).json({ error: error.message });
  }
});

// Serve the Angular app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Helper functions for authentication (placeholder implementations)
async function performPATAuthentication(tenant) {
  // Implement PAT authentication logic
  // This is just a placeholder
  return {
    accessToken: 'pat-token-' + Date.now()
  };
}

async function performOAuthAuthentication(tenant) {
  // Implement OAuth authentication logic
  // This is just a placeholder
  return {
    accessToken: 'oauth-token-' + Date.now(),
    refreshToken: 'refresh-token-' + Date.now()
  };
}

async function refreshPATToken(tenant) {
  // Implement PAT token refresh logic
  // This is just a placeholder
  return {
    accessToken: 'pat-token-' + Date.now()
  };
}

async function refreshOAuthToken(tenant, refreshToken) {
  // Implement OAuth token refresh logic
  // This is just a placeholder
  return {
    accessToken: 'oauth-token-' + Date.now(),
    refreshToken: 'refresh-token-' + Date.now()
  };
}

function decodeToken(token) {
  // In a real implementation, decode and validate the JWT token
  // This is just a placeholder
  return {
    tenant_id: 'sample-tenant',
    pod: 'sample-pod',
    org: 'sample-org',
    identity_id: 'sample-identity',
    user_name: 'sample-user',
    strong_auth: true,
    authorities: ['user'],
    client_id: 'sample-client',
    strong_auth_supported: true,
    scope: ['read', 'write'],
    exp: Math.floor(Date.now() / 1000) + 3600,
    jti: 'sample-jti'
  };
}

async function callSailPointApi(methodName, args, tenant, token) {
  // In a real implementation, you would call the SailPoint API
  // This is just a placeholder
  return {
    data: {
      result: `Mock response for ${methodName}`
    }
  };
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});