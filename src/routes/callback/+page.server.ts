import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import axios from 'axios';
import { generateAuthLink } from '$lib/utils/oauth';
import { counterList } from './loadinglist';
import { encrypt } from '$lib/encryption';

export const load: PageServerLoad = async ({ url, cookies, locals }) => {
	const code = url.searchParams.get('code');

	if (!code) error(500, { message: 'No Authorization Code Provided' });

	if (!locals.session) error(500, { message: 'No Session Found' });

	const response = await axios
		.post(
			`${locals.session.baseUrl}/oauth/token?grant_type=authorization_code&client_id=sailpoint-cli&code=${code}&redirect_uri=http://localhost:3000/callback`
		)
		.catch(function (err) {
			console.error(err);
			if (err.response) {
				// Request made and server responded
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
				redirect(302, generateAuthLink(locals.session!.tenantUrl));
			} else if (err.request) {
				// The request was made but no response was received
				error(500, { message: 'No Response From IDN' });
			} else {
				// Something happened in setting up the request that triggered an err
				error(500, {
					message: 'Error during Axios Request'
				});
			}
		});

	cookies.set('idnSession', encrypt(JSON.stringify(response.data)), {
		path: '/'
	});

	return { counterList };
};
