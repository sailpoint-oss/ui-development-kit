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
  getModalStore();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex justify-center flex-col align-middle gap-2"><div class="card p-4" data-svelte-h="svelte-f8eoy7"><p class="text-2xl text-center">List of all identities that are inactive but still have access in sources</p></div> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="grid h-full place-content-center p-8">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[100px]" }, {}, {})}</div> `;
    }
    return function(reportData) {
      return ` ${reportData.length === 0 ? `<div class="card p-4" data-svelte-h="svelte-1el8epx"><p class="text-center text-success-500">No inactive identities with access found</p></div>` : `<div class="table-container"><table class="table"><thead class="table-head" data-svelte-h="svelte-6gb8sd"><th>Name</th> <th>Sources</th> <th>Created</th> <th>Modified</th> <th>Access Count</th> <th>Entitlement Count</th> <th>Role Count</th> <th></th></thead> <tbody class="table-body">${each(reportData, (identity) => {
        return `<tr><td>${escape(identity.displayName)}</td> <td>${escape(identity.accounts?.map((account) => account.source?.name).join(", "))}</td> <td>${escape(formatDate(identity.created))}</td> <td>${escape(formatDate(identity.modified))}</td> <td>${escape(identity.accessCount)}</td> <td>${escape(identity.entitlementCount)}</td> <td>${escape(identity.roleCount)}</td> <td><div class="flex flex-col justify-center gap-1"><a${add_attribute("href", `/home/identities/${identity.id}`, 0)} class="btn btn-sm variant-filled-primary text-sm !text-white" data-sveltekit-preload-data="hover">Open</a> <button class="btn btn-sm variant-filled-primary text-sm !text-white" data-svelte-h="svelte-oq65oq">View</button> </div></td> </tr>`;
      })}</tbody></table></div>`} `;
    }(__value);
  }(data.reportData)}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CGFGtE07.js.map
