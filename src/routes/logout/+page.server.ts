import { generateLogoutLink } from '$lib/utils/oauth.js';

export const load = async ({ cookies, locals }) => {
	cookies.delete('session', {
		path: '/'
	});

	cookies.delete('idnSession', {
		path: '/'
	});

	cookies.delete('tokenDetails', {
		path: '/'
	});

	console.log('Logging out');
	console.log('locals', locals);

	return { logoutLink: generateLogoutLink(locals.session.tenantUrl) };
};
