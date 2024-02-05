import { getSession, getToken } from '$lib/utils/oauth.js';

export const load = async ({ fetch, cookies }) => {
	const V3SpecRes = fetch(
		'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v3.json'
	);

	const BetaSpecRes = fetch(
		'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.beta.json'
	);

	const V3Spec = await V3SpecRes.then((r) => r.json()).then((r) => r.paths);
	const BetaSpec = await BetaSpecRes.then((r) => r.json()).then((r) => r.paths);

	const session = await getSession(cookies);
	const idnSession = await getToken(cookies);

	return { V3Spec, BetaSpec, idnSession, session };
};
