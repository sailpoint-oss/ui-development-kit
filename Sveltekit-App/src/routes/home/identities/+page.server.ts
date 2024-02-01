import { getFilters, getLimit, getPage, getSorters } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getSession, getToken } from '$lib/utils/oauth.js';
import { error } from '@sveltejs/kit';
import {
	IdentitiesBetaApi,
	type IdentitiesBetaApiListIdentitiesRequest,
	type IdentityBeta
} from 'sailpoint-api-client';

export const load = async ({ cookies, url }) => {
	const session = await getSession(cookies);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
	const api = new IdentitiesBetaApi(config);

	const page = getPage(url);
	const filters = getFilters(url);
	const limit = getLimit(url);
	const sorters = getSorters(url);

	const requestParams: IdentitiesBetaApiListIdentitiesRequest = {
		filters,
		offset: Number(page) * Number(limit),
		limit: Number(limit),
		sorters,
		count: true
	};

	const apiResponse = api.listIdentities(requestParams);

	const totalCount = new Promise<number>((resolve) => {
		apiResponse.then((response) => {
			resolve(response.headers['x-total-count']);
		});
	});

	const identities = new Promise<IdentityBeta[]>((resolve) => {
		apiResponse
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				error(500, {
					message:
						'an error occurred while fetching identities. Please examine your filters and and sorters and try again.',
					context: { params: { page, limit, filters, sorters } },
					urls: [
						'https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results'
					],
					errData: err.response.data
				});
			});
	});

	return {
		totalCount,
		identities,
		params: { page, limit, filters, sorters }
	};
};
