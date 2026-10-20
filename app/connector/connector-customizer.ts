/**
 * Connector Customizer Deployment API Integration
 * 
 * This module handles creating and uploading SaaS Connector Customizers to SailPoint Identity Security
 * using the SDK generic functions for JSON APIs and fetch for binary uploads
 */

import { getActiveEnvironment, apiConfig } from '../authentication/auth';
import { getGitHubReleaseArtifact } from '../github/github';
import { downloadFile } from './connector';
import { genericGet, genericPost } from '../sailpoint-sdk/sailpoint-sdk';
import * as sdk from 'sailpoint-api-client';

export interface CustomizerDeploymentResponse {
  success: boolean;
  customizerId?: string;
  version?: number;
  error?: string;
}

/**
 * Upload a connector customizer from a GitHub repository URL
 * This function handles the complete deployment flow:
 * 1. Fetches the latest release artifact from GitHub
 * 2. Downloads the zip file
 * 3. Creates the customizer
 * 4. Uploads the customizer zip file
 */
export async function uploadCustomizerFromGitHub(
  githubRepoUrl: string,
  customizerName?: string
): Promise<CustomizerDeploymentResponse> {
  const fs = require('fs');
  const path = require('path');
  const os = require('os');
  let tempFilePath: string | null = null;

  try {
    // Step 1: Fetch the latest release artifact from GitHub
    console.log(`Fetching release artifact from GitHub: ${githubRepoUrl}`);
    const artifactResponse = await getGitHubReleaseArtifact(githubRepoUrl);
    
    if (!artifactResponse.success || !artifactResponse.downloadUrl) {
      return {
        success: false,
        error: artifactResponse.error || 'Failed to fetch GitHub release artifact'
      };
    }

    console.log(`Found release artifact: ${artifactResponse.filename} (${artifactResponse.tagName})`);

    // Step 2: Download the zip file to a temporary location
    if (!artifactResponse.downloadUrl) {
      return {
        success: false,
        error: 'No download URL found in release artifact'
      };
    }

    const tempDir = os.tmpdir();
    tempFilePath = path.join(tempDir, artifactResponse.filename || 'customizer.zip');
    
    if (!tempFilePath) {
      return {
        success: false,
        error: 'Failed to generate temporary file path'
      };
    }
    
    console.log(`Downloading file from: ${artifactResponse.downloadUrl}`);
    const downloadResult = await downloadFile(artifactResponse.downloadUrl, tempFilePath);
    
    if (!downloadResult.success) {
      return {
        success: false,
        error: downloadResult.error || 'Failed to download customizer artifact'
      };
    }

    console.log(`File downloaded successfully to: ${tempFilePath}`);

    // Use the filename (without extension) as the customizer name if not provided
    const finalCustomizerName = customizerName || artifactResponse.filename?.replace(/\.zip$/i, '') || 'Unnamed Customizer';

    // Step 3: Create the customizer
    console.log(`Creating customizer: ${finalCustomizerName}`);
    const createResult = await createCustomizer(finalCustomizerName);
    
    if (!createResult.success || !createResult.customizerId) {
      return {
        success: false,
        error: createResult.error || 'Failed to create customizer'
      };
    }

    console.log(`Customizer created successfully with ID: ${createResult.customizerId}`);

    // Step 4: Upload the customizer zip file
    console.log(`Uploading customizer from: ${tempFilePath}`);
    const uploadResult = await uploadCustomizer(createResult.customizerId, tempFilePath);
    
    if (!uploadResult.success) {
      return {
        success: false,
        error: uploadResult.error || 'Failed to upload customizer',
        customizerId: createResult.customizerId
      };
    }

    console.log(`Customizer uploaded successfully. Version: ${uploadResult.version}`);

    return {
      success: true,
      customizerId: createResult.customizerId,
      version: uploadResult.version
    };

  } catch (error: any) {
    console.error('Error uploading customizer from GitHub:', error);
    return {
      success: false,
      error: error.message || 'Unknown error occurred'
    };
  } finally {
    // Clean up temporary file
    if (tempFilePath) {
      try {
        const fs = require('fs');
        if (fs.existsSync(tempFilePath)) {
          fs.unlinkSync(tempFilePath);
          console.log(`Cleaned up temporary file: ${tempFilePath}`);
        }
      } catch (cleanupError) {
        console.warn(`Failed to clean up temporary file: ${tempFilePath}`, cleanupError);
      }
    }
  }
}

/**
 * Create a connector customizer
 * API: POST /beta/connector-customizers
 */
async function createCustomizer(
  name: string
): Promise<{ success: boolean; customizerId?: string; error?: string }> {
  try {
    console.log(`Creating customizer: ${name}`);

    // Use SDK generic POST to create customizer
    const response = await genericPost({
      path: '/beta/connector-customizers',
      requestBody: { name }
    }, apiConfig);

    if (response.status === 400) {
      console.log('Customizer creation failed with 400, checking if it already exists...');
      
      // Check if customizer with this name already exists
      try {
        const listResponse = await genericGet({
          path: '/beta/connector-customizers'
        }, apiConfig);

        if (listResponse.status === 200 && Array.isArray(listResponse.data)) {
          const existingCustomizer = listResponse.data.find((c: any) => c.name === name);
          
          if (existingCustomizer) {
            console.log(`Customizer "${name}" already exists with ID: ${existingCustomizer.id}`);
            return {
              success: true,
              customizerId: existingCustomizer.id
            };
          }
        }
      } catch (checkError) {
        console.error('Error checking for existing customizer:', checkError);
      }

      return {
        success: false,
        error: `Failed to create customizer. Status: ${response.status} ${response.statusText}\nBody: ${JSON.stringify(response.data)}`
      };
    }

    if (response.status < 200 || response.status >= 300) {
      return {
        success: false,
        error: `Failed to create customizer. Status: ${response.status} ${response.statusText}\nBody: ${JSON.stringify(response.data)}`
      };
    }

    return {
      success: true,
      customizerId: response.data.id
    };

  } catch (error: any) {
    console.error('Error creating customizer:', error);
    return {
      success: false,
      error: error.message || 'Unknown error'
    };
  }
}

/**
 * Upload a customizer zip file
 * API: POST /beta/connector-customizers/{id}/versions
 * Note: Uses fetch for binary upload since SDK doesn't support binary bodies
 */
async function uploadCustomizer(
  customizerId: string,
  filePath: string
): Promise<{ success: boolean; version?: number; error?: string }> {
  try {
    const fs = require('fs');

    console.log(`Uploading customizer to: /beta/connector-customizers/${customizerId}/versions`);

    const fileBuffer = fs.readFileSync(filePath);

    // Get base URL and access token from apiConfig
    const baseUrl = apiConfig.basePath;
    const accessToken = apiConfig.accessToken;

    if (!baseUrl || !accessToken) {
      return {
        success: false,
        error: 'API configuration is missing base URL or access token'
      };
    }

    const url = `${baseUrl}/beta/connector-customizers/${customizerId}/versions`;

    // Use fetch for binary upload with SDK credentials
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/zip'
      },
      body: fileBuffer
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return {
        success: false,
        error: `Failed to upload customizer. Status: ${response.status} ${response.statusText}\nBody: ${errorBody}`
      };
    }

    const customizerVersion = await response.json();
    return {
      success: true,
      version: customizerVersion.version
    };

  } catch (error: any) {
    console.error('Error uploading customizer:', error);
    return {
      success: false,
      error: error.message || 'Unknown error'
    };
  }
}

