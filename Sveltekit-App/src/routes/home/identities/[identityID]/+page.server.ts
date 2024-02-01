import { createConfiguration } from '$lib/sailpoint/sdk';
import { getSession, getToken } from '$lib/utils/oauth';
import {
	IdentitiesBetaApi,
	SearchApi,
	type EventDocument,
	type IdentityBeta,
	type Search
} from 'sailpoint-api-client';

export const load = async ({ cookies, params }) => {
	const session = await getSession(cookies);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
	const identityApi = new IdentitiesBetaApi(config);
	const searchApi = new SearchApi(config);

	const identityResp = identityApi.getIdentity({ id: params.identityID });

	const identityData = new Promise<IdentityBeta>((resolve) => {
		identityResp
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				throw err;
			});
	});

	const identityEvents = new Promise<EventDocument[]>((resolve) => {
		identityResp.then((response) => {
			const identity = response.data;
			const search: Search = {
				indices: ['events'],
				query: {
					query: `target.name: "${identity.name}"`
				},
				sort: ['created']
			};

			searchApi
				.searchPost({
					search
				})
				.then((response) => {
					resolve(response.data);
				})
				.catch((err) => {
					throw err;
				});
		});
	});

	return { identityData, identityEvents };
};
