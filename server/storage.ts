/**
 * Shared storage instance for the UI Development Kit server
 * Ensures all modules use the same storage instance
 */

import { createStorage } from './session-storage';

// Create and export a single storage instance
export const storage = createStorage();