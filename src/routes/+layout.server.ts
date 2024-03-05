export const load = async ({ url, locals }) => {
	if (
		!locals.hasSession ||
		!locals.hasIdnSession ||
		url.pathname === '/logout'
	) {
		return { tokenDetails: undefined };
	}

	return { tokenDetails: locals.tokenDetails };
};
