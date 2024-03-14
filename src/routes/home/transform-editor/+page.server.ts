import { createConfiguration } from '$lib/sailpoint/sdk';
import {
	Paginator,
	SourcesApi,
	type Source,
	type SourcesApiUpdateSourceRequest,
	TransformsApi,
	type TransformRead,
	type TransformsApiUpdateTransformRequest,
	type TransformsApiCreateTransformRequest
} from 'sailpoint-api-client';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { type AxiosResponse, isAxiosError } from 'axios';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
		const api = new TransformsApi(config);
		try {
			let resp: AxiosResponse<TransformRead, any>
			if ( JSON.parse(data.get('transform')?.toString() || '{}').id === undefined) {
				console.log('creating new transform')
				resp = await createNewTransform(data, api);
			} else {
				console.log('updating transform')
				resp = await updateTransform(data, api);
			}
	
	
			return { success: true, transform: data.get('updatedTransform')};
		} catch (error) {
			if (error && isAxiosError(error) && error.response) {
				return fail(error.response.status, {message: error.message})
			}
		}
	}
} satisfies Actions;

async function updateTransform(data: FormData, api: TransformsApi) {
	const transform = JSON.parse(data.get('transform')?.toString() || '{}');
	const updatedTransform = JSON.parse(data.get('updatedTransform')?.toString()!);


	const params: TransformsApiUpdateTransformRequest= {
		id: transform.id,
		transform: updatedTransform
	};

	const resp = await api.updateTransform(params);
	return resp;

}

async function createNewTransform(data: FormData, api: TransformsApi) {
	const updatedTransform = JSON.parse(data.get('updatedTransform')?.toString()!);


	const params: TransformsApiCreateTransformRequest= {
		transform: updatedTransform
	};

	const resp = await api.createTransform(params);
	return resp;

}