import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { generateAuthLink } from '$lib/utils/oauth';

export const actions = {
	default: async ({cookies, request, url}) => {
		const data = await request.formData()
        console.log(data)
        const baseUrl = data.get("baseUrl")
        const tenant = data.get("tenant")
        const domain = data.get("domain")
        const tenantUrl = data.get("tenantUrl")
        cookies.set("session", JSON.stringify({baseUrl, tenantUrl}))
        throw redirect(302, generateAuthLink(tenantUrl))
	},
} satisfies Actions;