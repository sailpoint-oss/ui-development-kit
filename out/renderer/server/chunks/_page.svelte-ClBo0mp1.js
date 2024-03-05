import { c as create_ssr_component } from './ssr-pGtI3Kui.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4"><div class="card p-4">${data.sessionLoggedOut ? `<p class="text-center p-2" data-svelte-h="svelte-vsqarg">Successfully Logged out</p>` : `<p class="text-center p-2" data-svelte-h="svelte-npxz0y">WHOOPS! an error occurred. <br> If you believe this is a bug please submit an issue on
				<a class="underline text-blue-500 hover:text-blue-700" href="https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose" rel="noreferrer" target="_blank">GitHub</a></p>`}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ClBo0mp1.js.map
