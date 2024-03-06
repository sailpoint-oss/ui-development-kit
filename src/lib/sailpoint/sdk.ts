import { Configuration } from 'sailpoint-api-client';

export function createConfiguration(baseUrl: string, token: string) {
	const apiConfig = new Configuration({ baseurl: baseUrl, accessToken: token });
	return apiConfig;
}
