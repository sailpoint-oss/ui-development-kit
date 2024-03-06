export const load = async ({ url, locals }) => {
	console.log(`Load runnning for path ${url.pathname}`);

	if (!locals.session || !locals.idnSession || url.pathname === '/logout') {
		return { tokenDetails: undefined };
	}

	return { tokenDetails: locals.tokenDetails };
};
