export const load = async ({ locals }) => {
	if (!locals.hasSession) return { baseUrl: '', tenantUrl: '' };

	return { session: locals.session };
};
