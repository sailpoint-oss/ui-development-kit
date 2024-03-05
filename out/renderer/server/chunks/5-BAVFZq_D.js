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

const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    console.log("default action");
    console.log("data", data);
    const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
    const api = new distExports.SourcesApi(config);
    const source = JSON.parse(data.get("source")?.toString() || "{}");
    const updatedDescription = data.get("updatedDescription")?.toString();
    const params = {
      id: source.id,
      jsonPatchOperation: [{ op: "replace", path: "/description", value: updatedDescription }]
    };
    const resp = await api.updateSource(params);
    if (resp.status !== 200) {
      return { status: "error", error: resp.statusText };
    }
    return { status: "success" };
  }
};
const load = async ({ locals }) => {
  const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
  const api = new distExports.SourcesApi(config);
  const sourceResp = distExports.Paginator.paginate(api, api.listSources, { limit: 1e3 });
  const sources = new Promise((resolve) => {
    sourceResp.then((response) => {
      resolve(response.data);
    });
  });
  return { sources };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ci4ZmJN7.js')).default;
const server_id = "src/routes/home/example-form/+page.server.ts";
const imports = ["_app/immutable/nodes/5.BGkz_cVr.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/Progress.3ESwaKmp.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/each.C9vk03ly.js","_app/immutable/chunks/entry.Cs_QM1XO.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-BAVFZq_D.js.map
