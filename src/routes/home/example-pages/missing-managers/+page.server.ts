import { getLimit, getPage, getSorters } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { SearchApi, type IdentityDocument, type Search, type SearchApiSearchPostRequest } from 'sailpoint-api-client';

export const load = async ({ url, locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new SearchApi(config);
	
	const page = getPage(url);
	const limit = getLimit(url);
	const sorters = getSorters(url);

	const search: Search = {
		indices: ['identities'],
		query: {
			query: `NOT _exists_:manager.id AND attributes.cloudLifecycleState:active`
		},
		sort: ['name']
	};

	const requestParams: SearchApiSearchPostRequest = {
		search,
		offset: Number(page) * Number(limit),
		limit: Number(limit),
		count: true
	};

	const reportResp = api.searchPost(requestParams);

	const reportData = new Promise<IdentityDocument[]>((resolve) => {
		reportResp.then((response) => {
			resolve(response.data);
		});
	});

	const totalCount = new Promise<number>((resolve) => {
		reportResp.then((response) => {
			resolve(response.headers['x-total-count']);
		});
	});

	return { reportData, totalCount, params: {page, limit, sorters}};
};
