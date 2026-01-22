# Multi-stage Dockerfile for UI Development Kit
# Builds Angular frontend and Node.js backend in a single container

# Stage 1: Build Angular Application
FROM node:20-alpine AS angular-builder

WORKDIR /app

# Copy root package files
COPY package*.json ./
COPY angular.json ./
COPY angular.webpack.js ./
COPY tsconfig*.json ./

# Copy app directory (needed for electron:tsc step in build process)
COPY app ./app

# Copy projects directory for component library
COPY projects ./projects

# Copy source files
COPY src ./src

# Install all dependencies (including dev dependencies for building)
RUN npm ci

# Build Angular app for web production (same as GitHub Actions)
RUN npm run build -- -c web-production

# Stage 2: Build Server
FROM node:20-alpine AS server-builder

WORKDIR /app/server

# Copy server package files
COPY server/package*.json ./

# Install dependencies
RUN npm ci

# Copy server source files
COPY server ./

# Build TypeScript
RUN npm run build

# Stage 3: Production Runtime
FROM node:20-alpine AS runtime

WORKDIR /app

# Install production dependencies only
COPY server/package*.json ./
RUN npm ci --omit=dev

# Copy built server from server-builder stage
COPY --from=server-builder /app/server/dist ./dist

# Copy server source files needed at runtime
COPY server/web-api.ts ./
COPY server/middleware ./middleware
COPY server/controllers ./controllers
COPY server/config ./config
COPY server/models ./models
COPY server/session-storage.ts ./
COPY server/storage.ts ./
COPY server/utils ./utils

# Copy built Angular app from angular-builder stage
COPY --from=angular-builder /app/dist ./public

# Create uploads directory with proper permissions
RUN mkdir -p /app/uploads && chmod 777 /app/uploads

# Expose port
EXPOSE 3000

# Environment variables with defaults
ENV NODE_ENV=production \
    PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/config', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the server
CMD ["node", "dist/web-api.js"]

