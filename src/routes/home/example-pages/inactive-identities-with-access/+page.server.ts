import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { SearchApi, type Search, Paginator, type IdentityDocument } from 'sailpoint-api-client';

export const load = async ({ locals }) => {
	const search: Search = {
		indices: ['identities'],
		query: {
			query: `@accounts(disabled:false) AND (attributes.cloudLifecycleState:inactive)`
		},
		sort: ['name']
	};

	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new SearchApi(config);
	const reportResp = Paginator.paginateSearchApi(api, search, 100, 20000);

	const reportData = new Promise<IdentityDocument[]>((resolve) => {
		reportResp.then((response) => {
			resolve(response.data);
		});
	});

	return { reportData };
};
