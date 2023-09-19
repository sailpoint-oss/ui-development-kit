import { createConfiguration } from "$lib/sailpoint/sdk";
import type { IdnSession } from "$lib/utils/oauth";
import { SearchApi, type Search, Paginator } from "sailpoint-api-client";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ cookies }) => {

    const session = JSON.parse(cookies.get('session')!)
    const idnSession = <IdnSession>JSON.parse(cookies.get('idnSession')!)

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
    return {val}
}