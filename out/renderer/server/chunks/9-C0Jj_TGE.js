import { c as createConfiguration, d as distExports } from './sdk-CZE8e3P6.js';
import { b as getToken } from './oauth-Czq1qjCs.js';
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

const load = async ({ cookies }) => {
  const search = {
    indices: ["identities"],
    query: {
      query: `NOT _exists_:attributes.cloudLifecycleState`
    },
    sort: ["name"]
  };
  const session = JSON.parse(cookies.get("session"));
  const idnSession = await getToken(cookies);
  const config = createConfiguration(session.baseUrl, idnSession.access_token);
  const api = new distExports.SearchApi(config);
  const searchResp = distExports.Paginator.paginateSearchApi(api, search, 100, 2e4);
  const reportData = new Promise((resolve) => {
    searchResp.then((response) => {
      resolve(response.data);
    });
  });
  return { reportData };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-JrNxjdIn.js')).default;
const server_id = "src/routes/home/example-pages/missing-cloud-life-cycle-state/+page.server.ts";
const imports = ["_app/immutable/nodes/9.D3DEtmXB.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/Progress.3ESwaKmp.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/each.C9vk03ly.js","_app/immutable/chunks/Utils.BOVa1qxf.js","_app/immutable/chunks/entry.Cs_QM1XO.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-C0Jj_TGE.js.map
