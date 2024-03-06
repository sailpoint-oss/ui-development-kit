import { generateAuthLink, getToken } from '$lib/utils/oauth';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { encrypt } from '$lib/encryption';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const baseUrl = data.get('baseUrl');
		const tenantUrl = data.get('tenantUrl');

		if (!baseUrl || !tenantUrl) {
			redirect(302, '/login');
		}

		const session = { baseUrl: baseUrl.toString(), tenantUrl: tenantUrl.toString() };
		console.log('session', session);

		const idnSession = await getToken(cookies);

		if (idnSession) {
			if (idnSession && session.baseUrl.toLowerCase().includes(idnSession.org.toLowerCase())) {
				console.log('Credential Cache Hit');
				redirect(302, '/home');
			} else {
				console.log('Credential Cache Miss');
			}
		}

		cookies.set('session', encrypt(JSON.stringify(session)), {
			path: '/'
		});
		redirect(302, generateAuthLink(tenantUrl.toString()));
	}
} satisfies Actions;

export const load = async ({ parent, locals }) => {
	await parent();
	console.log('locals', locals);
	if (!locals.session || !locals.idnSession) return {};

	if (
		locals.session &&
		locals.idnSession &&
		locals.session.baseUrl.toLowerCase().includes(locals.idnSession.org.toLowerCase())
	) {
		console.log('Session and IDN Session are valid, redirecting to /home');
		redirect(302, '/home');
	}

	return {};
};
