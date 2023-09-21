import { error, json } from '@sveltejs/kit';
import { createConfiguration } from "$lib/sailpoint/sdk";
import { getToken, type IdnSession } from "$lib/utils/oauth";
import { SearchApi, type Search, Paginator } from "sailpoint-api-client";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, cookies }) {
    try {
        const session = JSON.parse(cookies.get('session')!)
        //const idnSession = <IdnSession>JSON.parse(cookies.get('idnSession')!)
        const idnSession = await getToken(cookies)

        const config = createConfiguration(session.baseUrl, idnSession.access_token)
        let api = new SearchApi(config)
        let search: Search = {
            indices: [
                "events"
            ],
            query: {
                query: `name: "Create Account Failed" AND created: [now-90d TO now]`
            },
            sort: ["created"]
        }
        const val = (await Paginator.paginateSearchApi(api, search, 100, 1000)).data
        //console.log(val)
        return json(val)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

