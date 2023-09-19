export function generateAuthLink(tenantUrl: string) {
	return `${tenantUrl}/oauth/authorize?client_id=sailpoint-cli&response_type=code&redirect_uri=http://localhost:3000/callback`;
}

export type IdnSession = {
	access_token: string;
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