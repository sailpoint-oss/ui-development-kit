import { createConfiguration } from '$lib/sailpoint/sdk.js';
import {
	CustomFormsBetaApi,
	type ExportFormDefinitionsByTenant200ResponseInnerBeta
} from 'sailpoint-api-client';

export const load = async ({ locals }) => {
	const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);
	const api = new CustomFormsBetaApi(config);

	const formsResp = api.exportFormDefinitionsByTenant();

	const forms = new Promise<ExportFormDefinitionsByTenant200ResponseInnerBeta[]>((resolve) => {
		formsResp.then((response) => {
			resolve(response.data);
		});
	});
	return { forms };
};
