import { g as getPage, a as getLimit, b as getSorters } from './Utils-BGShQy8a.js';
import { c as createConfiguration, d as distExports } from './sdk-CZE8e3P6.js';
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

const load = async ({ url, locals }) => {
  const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
  const api = new distExports.SearchApi(config);
  const page = getPage(url);
  const limit = getLimit(url);
  const sorters = getSorters(url);
  const search = {
    indices: ["identities"],
    query: {
      query: `*`
    },
    sort: sorters !== "" ? [sorters] : ["name"]
  };
  const requestParams = {
    search,
    offset: Number(page) * Number(limit),
    limit: Number(limit),
    count: true
  };
  const reportResp = api.searchPost(requestParams);
  const totalCount = new Promise((resolve) => {
    reportResp.then((response) => {
      resolve(response.headers["x-total-count"]);
    });
  });
  const reportData = new Promise((resolve) => {
    reportResp.then((response) => {
      resolve(response.data);
    });
  });
  return { reportData, totalCount, params: { page, limit, sorters } };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dimc0uDg.js')).default;
const server_id = "src/routes/home/example-pages/list-of-identities/+page.server.ts";
const imports = ["_app/immutable/nodes/8.CYfxja1r.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/Progress.3ESwaKmp.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/each.C9vk03ly.js","_app/immutable/chunks/Utils.BOVa1qxf.js","_app/immutable/chunks/entry.Cs_QM1XO.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-D3dEyIJ8.js.map
