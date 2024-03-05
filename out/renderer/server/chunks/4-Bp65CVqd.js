const load = async ({ locals }) => {
  if (!locals.hasSession)
    return { baseUrl: "", tenantUrl: "" };
  return { session: locals.session };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BCGNlJ8d.js')).default;
const server_id = "src/routes/home/+page.server.ts";
const imports = ["_app/immutable/nodes/4.CkAq_noQ.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/index.DdnDjIf5.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-Bp65CVqd.js.map
