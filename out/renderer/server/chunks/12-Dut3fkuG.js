import { c as createConfiguration, d as distExports } from './sdk-CZE8e3P6.js';
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

const load = async ({ locals }) => {
  console.log(locals);
  const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
  const api = new distExports.CustomFormsBetaApi(config);
  const formsResp = api.exportFormDefinitionsByTenant();
  const forms = new Promise((resolve) => {
    formsResp.then((response) => {
      resolve(response.data);
    });
  });
  return { forms };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DpEMe2pa.js')).default;
const server_id = "src/routes/home/form-integration/+page.server.ts";
const imports = ["_app/immutable/nodes/12.BCch80zT.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/Progress.3ESwaKmp.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/each.C9vk03ly.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-Dut3fkuG.js.map
