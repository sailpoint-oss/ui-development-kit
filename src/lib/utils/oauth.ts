import type { Cookies } from '@sveltejs/kit';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import { error, redirect } from '@sveltejs/kit';

export function generateAuthLink(tenantUrl: string) {
	return `${tenantUrl}/oauth/authorize?client_id=sailpoint-cli&response_type=code&redirect_uri=http://localhost:3000/callback`;
}

export type IdnSession = {
	access_token: string;
	refresh_token: string;
	claims_supported: string;
	expires_in: string;
	identity_id: string;
	internal: string;
	jti: string;
	org: string;
	pod: string;
	scope: string;
	strong_auth: string;
	strong_auth_supported: string;
	tenant_id: string;
	token_type: string;
};

export async function refreshToken(apiUrl: string, refreshToken: string): Promise<IdnSession> {
	let url = `${apiUrl}/oauth/token?grant_type=refresh_token&client_id=sailpoint-cli&refresh_token=${refreshToken}`
	const response = await axios
	.post(
		url
	)
	.catch(function (err) {
		if (err.response) {
			// Request made and server responded
			console.log(err.response.data);
			console.log(err.response.status);
			console.log(err.response.headers);
		}
		return undefined
	});
	if (response) {
		console.log(response.data)
	}
	const idnSession: IdnSession = response!.data as IdnSession;
	return idnSession
}

export function getToken(cookies: Cookies): Promise<IdnSession> {
	
	const idnSession = <IdnSession>JSON.parse(cookies.get('idnSession')!)
	const session = JSON.parse(cookies.get('session')!)
	if (!idnSession && session) {
		throw redirect(302, generateAuthLink(session.tenantUrl))
	}
	if (!idnSession && !session) {
		throw redirect(302, "/")
	}
	if (isJwtExpired(idnSession.access_token)) {
		console.log("refreshing token")
		return refreshToken(session.baseUrl, idnSession.refresh_token)
	} else {
		console.log("token is good")
		return Promise.resolve(idnSession)
	}

}

function isJwtExpired(token: string): boolean {
	try {
	  const decodedToken: any = jwt.decode(token, { complete: true });
	  if (!decodedToken || !decodedToken.payload || !decodedToken.payload.exp) {
		// The token is missing the expiration claim ('exp') or is not a valid JWT.
		return true; // Treat as expired for safety.
	  }
  
	  // Get the expiration timestamp from the token.
	  const expirationTimestamp = decodedToken.payload.exp;
  
	  // Get the current timestamp.
	  const currentTimestamp = Math.floor(Date.now() / 1000);
  
	  // Check if the token has expired.
	  return currentTimestamp >= expirationTimestamp;
	} catch (error) {
	  // An error occurred during decoding.
	  return true; // Treat as expired for safety.
	}
  }