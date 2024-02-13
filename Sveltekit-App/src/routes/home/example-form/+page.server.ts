import { createConfiguration } from '$lib/sailpoint/sdk';
import {
	Paginator,
	SourcesApi,
	type Source,
	type SourcesApiUpdateSourceRequest
} from 'sailpoint-api-client';
import type { Actions } from './$types';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		console.log('default action');
		console.log('data', data);

		const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
		const api = new SourcesApi(config);

		const source = JSON.parse(data.get('source')?.toString() || '{}');
		const updatedDescription = data.get('updatedDescription')?.toString();

		const params: SourcesApiUpdateSourceRequest = {
			id: source.id,
			jsonPatchOperation: [{ op: 'replace', path: '/description', value: updatedDescription }]
		};

		const resp = await api.updateSource(params);

		if (resp.status !== 200) {
			return { status: 'error', error: resp.statusText };
		}

		return { status: 'success' };
	}
} satisfies Actions;

export const load = async ({ locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new SourcesApi(config);

	const sourceResp = Paginator.paginate(api, api.listSources, { limit: 1000 });

	const sources = new Promise<Source[]>((resolve) => {
		sourceResp.then((response) => {
			resolve(response.data);
		});
	});

	return { sources };
};
