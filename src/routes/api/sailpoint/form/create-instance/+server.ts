// src/routes/api/post.ts

import { createConfiguration } from '$lib/sailpoint/sdk.js';
import { error, json } from '@sveltejs/kit';
import {
	CustomFormsBetaApi,
	type CustomFormsBetaApiCreateFormInstanceRequest
} from 'sailpoint-api-client';

export const POST = async ({ request, locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new CustomFormsBetaApi(config);

	const { formDefinitionId, formInput } = await request.json();

	if (!formDefinitionId || !formInput) {
		error(400, 'formDefinitionId and formInput are required');
	}

	const expireDate = new Date();
	expireDate.setDate(expireDate.getDate() + 1);

	const formInstance: CustomFormsBetaApiCreateFormInstanceRequest = {
		body: {
			createdBy: {
				id: 'BOOYAH',
				type: 'SOURCE'
			},
			expire: expireDate.toISOString(),
			formDefinitionId: formDefinitionId,
			formInput: {
				...formInput
			},
			recipients: [
				{
					id: locals.idnSession?.identity_id,
					type: 'IDENTITY'
				}
			],
			standAloneForm: true,
			state: 'ASSIGNED',
			ttl: 1571827560
		}
	};

	const formInstanceResp = await api.createFormInstance(formInstance);

	// Process the request body and perform any necessary operations
	// ...

	// Return the response
	return json({ formDefinitionId, formInput, formInstanceResp: formInstanceResp.data });
};
