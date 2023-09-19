import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import axios from 'axios';
import { generateAuthLink, type IdnSession } from '$lib/utils/oauth';
import { counterList } from './loadinglist';




export const load: PageServerLoad = async ({ params, url, cookies }) => {
	const code = url.searchParams.get('code');

	const session = JSON.parse(cookies.get("session")!)

	if (!code) throw error(500, 'No Authorization Code Provided');
	const response = await axios
		.post(
			`${session.baseUrl}/oauth/token?grant_type=authorization_code&client_id=sailpoint-cli&code=${code}&redirect_uri=http://localhost:3000/callback`
		)
		.catch(function (err) {
			if (err.response) {
				// Request made and server responded
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
				// throw error(err.response.status, {
				// 	message: 'IDN Responded with an Error',
				// 	code: JSON.stringify(
				// 		{ data: err.response.data, headers: err.response.headers },
				// 		null,
				// 		' '
				// 	)
				// });
				throw redirect(302, generateAuthLink(session.tenantUrl));
			} else if (err.request) {
				// The request was made but no response was received
				throw error(500, { message: 'No Response From IDN'});
			} else {
				// Something happened in setting up the request that triggered an err
				throw error(500, {
					message: 'Error during Axios Request'
				});
			}
		});

	const idnSession: IdnSession = response.data as IdnSession;

	cookies.set("idnSession", JSON.stringify(idnSession));

	return { idnSession, counterList };
};