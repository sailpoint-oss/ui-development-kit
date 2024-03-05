const load = async ({ cookies }) => {
  cookies.delete("session", {
    path: "/",
    httpOnly: false,
    secure: false
  });
  cookies.delete("idnSession", {
    path: "/",
    httpOnly: false,
    secure: false
  });
  return { sessionLoggedOut: true };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ClBo0mp1.js')).default;
const server_id = "src/routes/logout/+page.server.ts";
const imports = ["_app/immutable/nodes/13.Wd1JvU4U.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/entry.Cs_QM1XO.js","_app/immutable/chunks/index.D97w0myq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-DjN2ZdXq.js.map
