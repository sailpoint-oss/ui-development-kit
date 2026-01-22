#!/usr/bin/env node
/**
 * Generate secure random secrets for JWT and session encryption
 * Usage: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

function generateSecret(length = 64) {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
}

console.log('\n🔐 Generated Secure Secrets for Docker Deployment\n');
console.log('Add these to your .env file:\n');
console.log('JWT_SECRET=' + generateSecret(64));
console.log('SESSION_SECRET=' + generateSecret(64));
console.log('\n⚠️  Keep these secrets secure and never commit them to version control!\n');


