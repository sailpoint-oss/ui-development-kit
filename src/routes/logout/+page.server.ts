import { generateLogoutLink } from '$lib/utils/oauth.js';

export const load = async ({ cookies, locals }) => {
	cookies.delete('session', {
		path: '/',
		httpOnly: false,
		secure: false
	});

	cookies.delete('idnSession', {
		path: '/',
		httpOnly: false,
		secure: false
	});

	console.log('Logging out');
	console.log('locals', locals);

	return { logoutLink: generateLogoutLink(locals.session.tenantUrl) };
};
