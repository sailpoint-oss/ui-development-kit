import { createConfiguration } from '$lib/sailpoint/sdk';
import {
	Paginator,
	SourcesApi,
	type Source,
	type SourcesApiUpdateSourceRequest
} from 'sailpoint-api-client';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { type AxiosResponse, isAxiosError } from 'axios';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
		const api = new SourcesApi(config);
		try {
			let resp: AxiosResponse<Source, any>
			console.log('updating source')
			resp = await updateSource(data, api);
			return { success: true, source: resp.data};
		} catch (error) {
			if (error && isAxiosError(error) && error.response) {
				return fail(error.response.status, {message: error.message , source: data.get('source')})
			}
		}
	}
} satisfies Actions;

async function updateSource(data: FormData, api: SourcesApi) {
	const source = JSON.parse(data.get('source')?.toString() || '{}');
	const updatedDescription = data.get('updatedSource')


	const params: SourcesApiUpdateSourceRequest = {
		id: source.id,
		jsonPatchOperation: [{ op: 'replace', path: '/description', value: updatedDescription }]
	};

	const resp = await api.updateSource(params);
	return resp;

}
