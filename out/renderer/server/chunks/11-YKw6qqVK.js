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
  const api = new distExports.SourcesApi(config);
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
  const apiResponse = api.listSources(requestParams);
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
  return { sources, totalCount, params: { page, limit, filters, sorters } };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D8pRpGkM.js')).default;
const server_id = "src/routes/home/example-pages/source-owner-configured/+page.server.ts";
const imports = ["_app/immutable/nodes/11._qLJ3IUL.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/Progress.3ESwaKmp.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/each.C9vk03ly.js","_app/immutable/chunks/Utils.BOVa1qxf.js","_app/immutable/chunks/entry.Cs_QM1XO.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-YKw6qqVK.js.map
