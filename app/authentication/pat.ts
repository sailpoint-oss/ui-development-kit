import { getTokenDetails, parseJwt } from "./auth";
import { deleteSecureValue, getConfig, getSecureValue, setSecureValue } from "./config";

/**
 * Stores PAT tokens securely for a given environment
 * @param environment - The environment name to store tokens for
 * @param tokenSet - The token set to store
 */
export function storePATTokens(environment: string, tokenSet: { accessToken: string, accessExpiry: Date }): void {
    try {
        setSecureValue('environments.pat.accesstoken', environment, tokenSet.accessToken);
        setSecureValue('environments.pat.expiry', environment, tokenSet.accessExpiry.toISOString());

        console.log(`PAT tokens stored for environment: ${environment}`);
    } catch (error) {
        console.error('Error storing PAT tokens:', error);
        throw error;
    }
}

/**
 * Deletes PAT tokens for a given environment
 * @param environment - The environment name to delete tokens for
 */
export function deletePATTokens(environment: string): void {
    try {
        deleteSecureValue('environments.pat.accesstoken', environment);
        deleteSecureValue('environments.pat.expiry', environment);
    } catch (error) {
        console.error('Error deleting PAT tokens:', error);
        throw error;
    }
}


/**
 * Deletes client credentials for a given environment
 * @param environment - The environment name to delete credentials for
 */
export function deleteClientCredentials(environment: string): void {
    try {
        deleteSecureValue('environments.pat.clientid', environment);
        deleteSecureValue('environments.pat.clientsecret', environment);
    } catch (error) {
        console.error('Error deleting client credentials:', error);
        throw error;
    }
}

/**
 * Retrieves stored PAT tokens for a given environment
 * @param environment - The environment name to retrieve tokens for
 * @returns Stored PAT tokens or undefined if not found
 */
export function getStoredPATTokens(environment: string): { accessToken: string, accessExpiry: Date, clientId: string, clientSecret: string } | undefined     {
    try {
        const accessToken = getSecureValue('environments.pat.accesstoken', environment);
        const accessExpiry = getSecureValue('environments.pat.expiry', environment);
        const clientId = getSecureValue('environments.pat.clientid', environment);
        const clientSecret = getSecureValue('environments.pat.clientsecret', environment);

        // ClientID and ClientSecret are the bare minimum for PAT, otherwise its just not configured
        if (!clientId || !clientSecret) {
            return undefined;
        }

        return { accessToken, accessExpiry: new Date(accessExpiry), clientId, clientSecret };
    } catch (error) {
        console.error('Error retrieving PAT tokens:', error);
        throw error;
    }
}

/**
* Validates PAT tokens for a given environment
* @param environment - The environment name to validate PAT tokens for
* @returns Token validation result
*/
export function validatePATToken(environment: string) {
    try {
        const storedTokens = getStoredPATTokens(environment);
        if (!storedTokens || !storedTokens.accessToken) {
            console.log(`No PAT tokens found for environment: ${environment}`);
            return { isValid: false, needsRefresh: true };
        }

        const accessTokenDetails = getTokenDetails(storedTokens.accessToken);

        const now = new Date();

        if (accessTokenDetails.expiry < now) {
            return { isValid: false, needsRefresh: true, tokenDetails: accessTokenDetails };
        }

        return {
            isValid: true,
            needsRefresh: false
        };
    } catch (error) {
        console.error(`Error validating PAT token for environment: ${environment}`, error);
        return { isValid: false, needsRefresh: false };
    }
}

/**
 * Refreshes PAT tokens for a given environment using stored client credentials
 * @param environment - The environment name to refresh tokens for
 * @returns Promise resolving to the new token set
 */
export const refreshPATToken = async (environment: string): Promise<void> => {
    try {
      console.log(`Refreshing PAT token for environment: ${environment}`);
  
      const storedTokens = getStoredPATTokens(environment);
        if (!storedTokens) {
            throw new Error('No stored PAT tokens found for environment');
        }
  
      const config = getConfig();
      const envConfig = config.environments[environment];
      if (!envConfig) {
        throw new Error('Environment configuration not found');
      }
  
      const apiUrl = envConfig.baseurl;
      const tokenUrl = `${apiUrl}/oauth/token`;
      const authHeader = Buffer.from(`${storedTokens.clientId}:${storedTokens.clientSecret}`).toString('base64');
  
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authHeader}`,
        },
        body: 'grant_type=client_credentials',
      });
  
      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.status} ${response.statusText}`);
      }
  
      const tokenData = await response.json();
  
      const accessTokenClaims = parseJwt(tokenData.access_token);
      const expiry = new Date(accessTokenClaims.exp * 1000);
  
      const tokenSet = {
        accessToken: tokenData.access_token,
        accessExpiry: expiry,
      };
  
      storePATTokens(environment, tokenSet);
  
      console.log('PAT token refreshed successfully');
    } catch (error) {
      console.error('Error refreshing PAT token:', error);
      throw error;
    }
  };