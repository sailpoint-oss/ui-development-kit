import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { Paginator, SearchApi, type IdentityDocument, type Search } from 'sailpoint-api-client';

export const load = async ({ locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const search: Search = {
		indices: ['identities'],
		query: {
			query: `NOT _exists_:attributes.cloudLifecycleState`
		},
		sort: ['name']
	};

	const api = new SearchApi(config);
	const searchResp = Paginator.paginateSearchApi(api, search, 100, 20000);

	const reportData = new Promise<IdentityDocument[]>((resolve) => {
		searchResp.then((response) => {
			resolve(response.data);
		});
	});

	return { reportData };
};
