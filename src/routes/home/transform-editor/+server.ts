import { createConfiguration } from "$lib/sailpoint/sdk";
import { json, type RequestHandler } from '@sveltejs/kit';
import {
	Paginator,
	TransformsApi
} from 'sailpoint-api-client';

export const GET: RequestHandler = async ({ locals }) => {
	console.log('starting get')
    const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	console.log('got config')
	const api = new TransformsApi(config);

	const transformResp = await Paginator.paginate(api, api.listTransforms, { limit: 1000 });

    return json(transformResp.data, {status: 200})
}