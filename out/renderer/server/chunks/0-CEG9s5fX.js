const load = async ({ url, locals }) => {
  if (!locals.hasSession || !locals.hasIdnSession || url.pathname === "/logout") {
    return { tokenDetails: void 0 };
  }
  return { tokenDetails: locals.tokenDetails };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-LzGJOOI2.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.CbrYeH4U.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/index.DdnDjIf5.js","_app/immutable/chunks/each.C9vk03ly.js","_app/immutable/chunks/stores.BRlO1dnN.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/chunks/entry.Cs_QM1XO.js","_app/immutable/chunks/Utils.BOVa1qxf.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js"];
const stylesheets = ["_app/immutable/assets/0.AUToJKdW.css","_app/immutable/assets/ProgressBar.DtHVHfix.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-CEG9s5fX.js.map
