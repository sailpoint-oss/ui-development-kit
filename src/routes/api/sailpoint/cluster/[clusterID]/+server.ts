import { createConfiguration } from '$lib/sailpoint/sdk';
import { getToken } from '$lib/utils/oauth';
import { json } from '@sveltejs/kit';
import { ManagedClustersBetaApi } from 'sailpoint-api-client';

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies, params }) {
	// Generic SDK setup
	const session = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);

	// Route specific SDK call
	const api = new ManagedClustersBetaApi(config);

	const val = await api.getManagedCluster({ id: params.clusterID });
	// console.log(val);
	return json(val.data);
}
