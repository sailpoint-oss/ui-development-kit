export const load = async ({ cookies }) => {
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

	return { sessionLoggedOut: true };
};
