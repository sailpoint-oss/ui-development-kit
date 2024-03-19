import { getFilters, getLimit, getSorters, getPage } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { SourcesApi, type Source, type SourcesApiListSourcesRequest } from 'sailpoint-api-client';

export const load = async ({ url, locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new SourcesApi(config);

	const page = getPage(url);
	const filters = getFilters(url);
	const limit = getLimit(url);
	const sorters = getSorters(url);

	const requestParams: SourcesApiListSourcesRequest = {
		filters,
		offset: Number(page) * Number(limit),
		limit: Number(limit),
		sorters,
		count: true
	};

	const apiResponse = api.listSources(requestParams);

	const sources = new Promise<Source[]>((resolve) => {
		apiResponse
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				throw err;
			});
	});

	const totalCount = new Promise<number>((resolve) => {
		apiResponse
			.then((response) => {
				resolve(response.headers['x-total-count']);
			})
			.catch((err) => {
				throw err;
			});
	});

	return { sources, totalCount, params: { page, limit, filters, sorters } };
};
