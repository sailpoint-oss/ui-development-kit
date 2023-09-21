import { error, json } from '@sveltejs/kit';
import { createConfiguration } from "$lib/sailpoint/sdk";
import { getToken, type IdnSession } from "$lib/utils/oauth";
import { SearchApi, type Search, Paginator } from "sailpoint-api-client";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, cookies }) {
    try {
        const session = JSON.parse(cookies.get('session')!)
        const idnSession = await getToken(cookies)
        const searchJson = await request.json()
  
        const config = createConfiguration(session.baseUrl, idnSession.access_token)
        let api = new SearchApi(config)
        let search: Search = searchJson
        const val = (await Paginator.paginateSearchApi(api, search, 100, 1000)).data
        //console.log(val)
        return json(val)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

