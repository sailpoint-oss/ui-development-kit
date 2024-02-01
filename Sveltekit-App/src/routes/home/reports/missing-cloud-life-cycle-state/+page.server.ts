import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getToken } from '$lib/utils/oauth.js';
import { Paginator, SearchApi, type IdentityDocument, type Search } from 'sailpoint-api-client';

export const load = async ({ cookies }) => {
	const search: Search = {
		indices: ['identities'],
		query: {
			query: `NOT _exists_:attributes.cloudLifecycleState`
		},
		sort: ['name']
	};

	const session = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
	const api = new SearchApi(config);
	const searchResp = Paginator.paginateSearchApi(api, search, 100, 20000);

	const reportData = new Promise<IdentityDocument[]>((resolve) => {
		searchResp.then((response) => {
			resolve(response.data);
		});
	});

	return { reportData };
};
