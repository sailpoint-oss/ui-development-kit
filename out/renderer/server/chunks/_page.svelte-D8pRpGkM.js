import { c as create_ssr_component, p as is_promise, q as noop, v as validate_component, b as each, e as escape, d as add_attribute } from './ssr-pGtI3Kui.js';
import { P as Progress } from './Progress-Bh0zkgr8.js';
import { f as formatDate } from './Utils-BGShQy8a.js';
import { g as getModalStore } from './stores2-DhhqrV6P.js';
import './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';
import './index2-CcAcUxny.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  getModalStore();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex justify-center flex-col align-middle gap-2"><div class="card p-4" data-svelte-h="svelte-91ks7m"><p class="text-2xl text-center">Listing of sources and their configured owners</p></div> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="grid h-full place-content-center p-8">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[100px]" }, {}, {})}</div> `;
    }
    return function(sources) {
      return ` <div class="table-container"><table class="table"><thead class="table-head" data-svelte-h="svelte-11ectjk"><th>Source Name</th> <th>Type</th> <th>Modified</th> <th>Created</th> <th>Owner</th> <th></th></thead> <tbody>${each(sources, (source) => {
        return `<tr><td>${escape(source.name)}</td> <td>${escape(source.type)}</td> <td>${escape(formatDate(source.modified))}</td> <td>${escape(formatDate(source.created))}</td> <td>${escape(source.owner.name)}</td> <td class="flex flex-col justify-center gap-1"><a${add_attribute("href", `/home/sources/${source.id}`, 0)} class="btn variant-filled-primary text-sm !text-white" data-sveltekit-preload-data="hover">Open Source</a> <button class="btn variant-filled-primary text-sm !text-white" data-svelte-h="svelte-h788bw">View
								</button></td> </tr>`;
      })}</tbody></table></div> `;
    }(__value);
  }(data.sources)}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D8pRpGkM.js.map
