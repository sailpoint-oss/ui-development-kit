const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.ico","SailPoint-Developer-Community-Lockup.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BZ7FPyWV.js","app":"_app/immutable/entry/app.DwGgyi7V.js","imports":["_app/immutable/entry/start.BZ7FPyWV.js","_app/immutable/chunks/entry.Cs_QM1XO.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/index.D97w0myq.js","_app/immutable/entry/app.DwGgyi7V.js","_app/immutable/chunks/scheduler.fBTsnP2i.js","_app/immutable/chunks/index.DdnDjIf5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CEG9s5fX.js')),
			__memo(() => import('./chunks/1-DWCTiVZC.js')),
			__memo(() => import('./chunks/2-D9XFohaW.js')),
			__memo(() => import('./chunks/3-Uj3iioGJ.js')),
			__memo(() => import('./chunks/4-Bp65CVqd.js')),
			__memo(() => import('./chunks/5-BAVFZq_D.js')),
			__memo(() => import('./chunks/6-qEmQBeSh.js')),
			__memo(() => import('./chunks/7-BmOe9X4u.js')),
			__memo(() => import('./chunks/8-D3dEyIJ8.js')),
			__memo(() => import('./chunks/9-C0Jj_TGE.js')),
			__memo(() => import('./chunks/10-BJLzw-es.js')),
			__memo(() => import('./chunks/11-YKw6qqVK.js')),
			__memo(() => import('./chunks/12-Dut3fkuG.js')),
			__memo(() => import('./chunks/13-DjN2ZdXq.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/sailpoint/cluster/[clusterID]",
				pattern: /^\/api\/sailpoint\/cluster\/([^/]+?)\/?$/,
				params: [{"name":"clusterID","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C5OB4jRx.js'))
			},
			{
				id: "/api/sailpoint/form/create-instance",
				pattern: /^\/api\/sailpoint\/form\/create-instance\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BTO5U0Sz.js'))
			},
			{
				id: "/callback",
				pattern: /^\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/home/example-form",
				pattern: /^\/home\/example-form\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/home/example-pages",
				pattern: /^\/home\/example-pages\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/home/example-pages/inactive-identities-with-access",
				pattern: /^\/home\/example-pages\/inactive-identities-with-access\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/home/example-pages/list-of-identities",
				pattern: /^\/home\/example-pages\/list-of-identities\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/home/example-pages/missing-cloud-life-cycle-state",
				pattern: /^\/home\/example-pages\/missing-cloud-life-cycle-state\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/home/example-pages/source-aggregations",
				pattern: /^\/home\/example-pages\/source-aggregations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/home/example-pages/source-owner-configured",
				pattern: /^\/home\/example-pages\/source-owner-configured\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/home/form-integration",
				pattern: /^\/home\/form-integration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
