/**
 * Configuration controller for the UI Development Kit server
 * Contains configuration-related endpoint implementations
 */

import { Request, Response } from 'express';
import { ConfigResponse } from '../models/types';

/**
 * Config endpoint
 */
export const getConfig = (req: Request, res: Response): void => {
  const response: ConfigResponse = {
    version: '1.0.0',
    settings: {
      theme: 'light',
      autoRefresh: true
    }
  };

  res.json(response);
};