import {
	checkIdnSession,
	checkSession,
	checkToken,
	getSession,
	getToken,
	getTokenDetails,
	lastCheckedToken
} from '$lib/utils/oauth';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const hasSession = checkSession(event.cookies);
	const hasIdnSession = checkIdnSession(event.cookies);
	event.locals.hasSession = hasSession;
	event.locals.hasIdnSession = hasIdnSession;

	if (hasSession) {
		event.locals.session = getSession(event.cookies);

		if (hasIdnSession) {
			event.locals.idnSession = await getToken(event.cookies);
			const lastToken = lastCheckedToken(event.cookies);
			if (lastToken != '' && lastToken === event.locals.idnSession.access_token) {
				event.locals.tokenDetails = getTokenDetails(event.cookies);
			} else {
				event.locals.tokenDetails = await checkToken(
					event.locals.session.baseUrl,
					event.locals.idnSession.access_token
				);
				event.cookies.set('tokenDetails', JSON.stringify(event.locals.tokenDetails), {
					path: '/',
					httpOnly: false,
					secure: false
				});
			}
		}
	}

	if (event.url.pathname.startsWith('/home') || event.url.pathname.startsWith('/api')) {
		if (!hasSession || !hasIdnSession) {
			redirect(302, '/');
		}
	}

	const response = await resolve(event);
	return response;
};
