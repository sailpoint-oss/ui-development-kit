import { getFilters, getLimit, getPage, getSorters } from '$lib/Utils.js';
import { createConfiguration } from '$lib/sailpoint/sdk.js';
import {
	SearchApi,
	SourcesApi,
	type EventDocument,
	type Search,
	type SourcesApiListSourcesRequest,
	type Source
} from 'sailpoint-api-client';

export const load = async ({ url, locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const sourceApi = new SourcesApi(config);
	const searchApi = new SearchApi(config);

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

	const apiResponse = sourceApi.listSources(requestParams);

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

	type SourceEvents = {
		accounts: { started: EventDocument | undefined; passed: EventDocument | undefined };
		entitlements: { started: EventDocument | undefined; passed: EventDocument | undefined };
	};

	const eventNames: string[] = [
		'Aggregate Source Account Passed',
		'Aggregate Source Account Started',
		'Aggregate Source Entitlement Passed',
		'Aggregate Source Entitlement Started'
	];

	const eventsMap = new Promise<Map<string, SourceEvents>>((resolve) => {
		sources.then(async (sources) => {
			const sourceEventsMap = new Map<string, SourceEvents>();

			for (const source of sources) {
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

				await Promise.allSettled(promises).then((results) => {
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

					sourceEventsMap.set(source.name, sourceEvents);
				});
			}

			resolve(sourceEventsMap);
		});
	});

	return { sources, eventsMap, totalCount, params: { page, limit, filters, sorters } };
};
