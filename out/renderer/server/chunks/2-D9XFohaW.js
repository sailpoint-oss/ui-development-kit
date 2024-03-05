import { f as generateAuthLink } from './oauth-Czq1qjCs.js';
import { r as redirect } from './index-DzcLzHBX.js';
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
import 'buffer';
import 'crypto';

const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const baseUrl = data.get("baseUrl");
    const tenantUrl = data.get("tenantUrl");
    if (!baseUrl || !tenantUrl) {
      redirect(302, "/login");
    }
    const session = { baseUrl: baseUrl.toString(), tenantUrl: tenantUrl.toString() };
    console.log("session", session);
    const idnSessionString = cookies.get("idnSession");
    if (idnSessionString) {
      const idnSession = JSON.parse(idnSessionString);
      if (idnSession && session.baseUrl.toLowerCase().includes(idnSession.org.toLowerCase())) {
        console.log("Credential Cache Hit");
        redirect(302, "/home");
      } else {
        console.log("Credential Cache Miss");
      }
    }
    cookies.set("session", JSON.stringify(session), {
      path: "/"
    });
    redirect(302, generateAuthLink(tenantUrl.toString()));
  }
};
const load = async ({ parent, locals }) => {
  await parent();
  console.log("locals", locals);
  if (!locals.hasSession || !locals.hasIdnSession)
    return {};
  if (locals.session && locals.idnSession && locals.session.baseUrl.toLowerCase().includes(locals.idnSession.org.toLowerCase())) {
    redirect(302, "/home");
  }
  return {};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cu2nwh9c.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.D_wMgrjg.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/entry.Cs_QM1XO.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-D9XFohaW.js.map
