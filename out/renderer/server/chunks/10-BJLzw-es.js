import { g as getPage, c as getFilters, a as getLimit, b as getSorters } from './Utils-BGShQy8a.js';
import { c as createConfiguration, d as distExports } from './sdk-CZE8e3P6.js';
import { b as getToken } from './oauth-Czq1qjCs.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-BRrDHEF2.js';
import 'util';
import 'stream';
import 'path';
import 'http';
import 'https';
import 'url';
import 'fs';
import 'assert';
import 'tty';
import 'os';
import 'zlib';
import 'events';
import './index-DzcLzHBX.js';
import 'buffer';
import 'crypto';

const load = async ({ cookies, url }) => {
  const session = JSON.parse(cookies.get("session"));
  const idnSession = await getToken(cookies);
  const config = createConfiguration(session.baseUrl, idnSession.access_token);
  const sourceApi = new distExports.SourcesApi(config);
  const searchApi = new distExports.SearchApi(config);
  const page = getPage(url);
  const filters = getFilters(url);
  const limit = getLimit(url);
  const sorters = getSorters(url);
  const requestParams = {
    filters,
    offset: Number(page) * Number(limit),
    limit: Number(limit),
    sorters,
    count: true
  };
  const apiResponse = sourceApi.listSources(requestParams);
  const sources = new Promise((resolve) => {
    apiResponse.then((response) => {
      resolve(response.data);
    }).catch((err) => {
      throw err;
    });
  });
  const totalCount = new Promise((resolve) => {
    apiResponse.then((response) => {
      resolve(response.headers["x-total-count"]);
    }).catch((err) => {
      throw err;
    });
  });
  const eventNames = [
    "Aggregate Source Account Passed",
    "Aggregate Source Account Started",
    "Aggregate Source Entitlement Passed",
    "Aggregate Source Entitlement Started"
  ];
  const eventsMap = new Promise((resolve) => {
    sources.then(async (sources2) => {
      const sourceEventsMap = /* @__PURE__ */ new Map();
      for (const source of sources2) {
        const allEvents = [];
        const promises = [];
        for (const event of eventNames) {
          const search = {
            indices: ["events"],
            query: {
              query: `target.name: "${source.name}" AND name:"${event}"`
            },
            sort: ["created"]
          };
          promises.push(
            searchApi.searchPost({
              search
            }).then((response) => {
              return response.data;
            }).catch((err) => {
              throw err;
            })
          );
        }
        await Promise.allSettled(promises).then((results) => {
          for (const event of results) {
            if (event.status == "fulfilled" && event.value.length > 0) {
              allEvents.push(event.value[0]);
            }
          }
          const sourceEvents = {
            accounts: { started: void 0, passed: void 0 },
            entitlements: { started: void 0, passed: void 0 }
          };
          for (const event of allEvents) {
            if (event.attributes.sourceName === source.name) {
              switch (event.technicalName) {
                case "SOURCE_ACCOUNT_AGGREGATE_STARTED":
                  if (!sourceEvents.accounts.started) {
                    sourceEvents.accounts.started = event || void 0;
                  }
                  break;
                case "SOURCE_ACCOUNT_AGGREGATE_PASSED":
                  if (!sourceEvents.accounts.passed) {
                    sourceEvents.accounts.passed = event || void 0;
                  }
                  break;
                case "SOURCE_ENTITLEMENT_AGGREGATE_STARTED":
                  if (!sourceEvents.entitlements.started) {
                    sourceEvents.entitlements.started = event || void 0;
                  }
                  break;
                case "SOURCE_ENTITLEMENT_AGGREGATE_PASSED":
                  if (!sourceEvents.entitlements.passed) {
                    sourceEvents.entitlements.passed = event || void 0;
                  }
                  break;
              }
            }
          }
          sourceEventsMap.set(source.name, sourceEvents);
        });
      }
      resolve(sourceEventsMap);
    });
  });
  return { sources, eventsMap, totalCount, params: { page, limit, filters, sorters } };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-I1dxIGYL.js')).default;
const server_id = "src/routes/home/example-pages/source-aggregations/+page.server.ts";
const imports = ["_app/immutable/nodes/10.BxdKtH0u.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/Progress.3ESwaKmp.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/each.C9vk03ly.js","_app/immutable/chunks/Utils.BOVa1qxf.js","_app/immutable/chunks/entry.Cs_QM1XO.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-BJLzw-es.js.map
