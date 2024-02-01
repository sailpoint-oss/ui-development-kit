import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { getToken } from '$lib/utils/oauth.js';
import { SearchApi, SourcesApi, type EventDocument, type Search } from 'sailpoint-api-client';

export const load = async ({ cookies, params }) => {
	const session = JSON.parse(cookies.get('session')!);
	const idnSession = await getToken(cookies);

	const config = createConfiguration(session.baseUrl, idnSession.access_token);
	const sourceApi = new SourcesApi(config);
	const searchApi = new SearchApi(config);

	const sourceResp = await sourceApi.getSource({ id: params.sourceID });

	const source = sourceResp.data;

	type SourceEvents = {
		accounts: { started: EventDocument | undefined; passed: EventDocument | undefined };
		entitlements: { started: EventDocument | undefined; passed: EventDocument | undefined };
	};

	const sourceEvents = new Promise<SourceEvents>((resolve) => {
		const eventNames: string[] = [
			'Aggregate Source Account Passed',
			'Aggregate Source Account Started',
			'Aggregate Source Entitlement Passed',
			'Aggregate Source Entitlement Started'
		];

		const allEvents: EventDocument[] = [];

		const promises: Promise<EventDocument[]>[] = [];

		for (const event of eventNames) {
			const search: Search = {
				indices: ['events'],
				query: {
					query: `target.name: "${source.name}" AND name:"${event}"`
				},
				sort: ['created']
			};

			promises.push(
				searchApi
					.searchPost({
						search
					})
					.then((response) => {
						return response.data;
					})
					.catch((err) => {
						throw err;
					})
			);
		}

		Promise.allSettled(promises).then((results) => {
			for (const event of results) {
				if (event.status == 'fulfilled' && event.value.length > 0) {
					allEvents.push(event.value[0]);
				}
			}

			const sourceEvents: SourceEvents = {
				accounts: { started: undefined, passed: undefined },
				entitlements: { started: undefined, passed: undefined }
			};

			for (const event of allEvents) {
				if (event.attributes!.sourceName === source.name) {
					switch (event.technicalName) {
						case 'SOURCE_ACCOUNT_AGGREGATE_STARTED':
							if (!sourceEvents.accounts.started) {
								sourceEvents.accounts.started = event || undefined;
							}
							break;
						case 'SOURCE_ACCOUNT_AGGREGATE_PASSED':
							if (!sourceEvents.accounts.passed) {
								sourceEvents.accounts.passed = event || undefined;
							}
							break;
						case 'SOURCE_ENTITLEMENT_AGGREGATE_STARTED':
							if (!sourceEvents.entitlements.started) {
								sourceEvents.entitlements.started = event || undefined;
							}
							break;
						case 'SOURCE_ENTITLEMENT_AGGREGATE_PASSED':
							if (!sourceEvents.entitlements.passed) {
								sourceEvents.entitlements.passed = event || undefined;
							}
							break;

						default:
							break;
					}
				}
			}

			resolve(sourceEvents);
		});
	});

	return { source, sourceEvents };
};
