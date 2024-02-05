import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getToken } from '$lib/utils/oauth.js';
import { SearchApi, type Search, Paginator, type IdentityDocument } from 'sailpoint-api-client';

export const load = async ({ cookies }) => {
	const search: Search = {
		indices: ['identities'],
		query: {
			query: `@accounts(disabled:false) AND (attributes.cloudLifecycleState:inactive)`
		},
		sort: ['name']
	};

	const session = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
	const api = new SearchApi(config);
	const reportResp = Paginator.paginateSearchApi(api, search, 100, 20000);

	const reportData = new Promise<IdentityDocument[]>((resolve) => {
		reportResp.then((response) => {
			resolve(response.data);
		});
	});

	return { reportData };
};
