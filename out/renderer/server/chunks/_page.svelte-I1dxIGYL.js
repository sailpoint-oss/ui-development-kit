import { c as create_ssr_component, p as is_promise, q as noop, v as validate_component, b as each, e as escape } from './ssr-pGtI3Kui.js';
import { P as Progress } from './Progress-Bh0zkgr8.js';
import { f as formatDate } from './Utils-BGShQy8a.js';
import { g as getModalStore } from './stores2-DhhqrV6P.js';
import './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';
import './index2-CcAcUxny.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getModalStore();
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex justify-center flex-col align-middle gap-2"><div class="card p-4" data-svelte-h="svelte-12bxj29"><p class="text-2xl text-center">List of sources and their most recent aggregation events</p></div> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="card grid h-full place-content-center p-8">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[100px]" }, {}, {})}</div> `;
    }
    return function(sources) {
      return ` <div class="table-container"><table class="table"><thead data-svelte-h="svelte-gj53un"><th>Source Name</th> <th>Type</th> <th>Authoritative</th> <th>Account Aggregations</th> <th>Entitlement Aggregations</th></thead> <tbody>${each(sources, (source) => {
        return `<tr><td>${escape(source.name)}</td> <td>${escape(source.type)}</td> <td class="${[
          "font-bold",
          (source.authoritative ? "text-tertiary-500" : "") + " " + (!source.authoritative ? "text-warning-500" : "")
        ].join(" ").trim()}">${escape(source.authoritative ? "True" : "False")}</td> ${function(__value2) {
          if (is_promise(__value2)) {
            __value2.then(null, noop);
            return ` <td><div class="grid place-content-center">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[80px]" }, {}, {})} </div></td> `;
          }
          return function(eventsMap) {
            return ` <td><div class="flex flex-col gap-2"><button ${!eventsMap.get(source.name)?.accounts.started ? "disabled" : ""} class="btn btn-sm variant-filled-primary text-sm !text-white">Started: ${escape(formatDate(eventsMap.get(source.name)?.accounts.started?.created))}</button> <button class="btn btn-sm variant-filled" ${!eventsMap.get(source.name)?.accounts.passed ? "disabled" : ""}>Passed: ${escape(formatDate(eventsMap.get(source.name)?.accounts.passed?.created))}</button> </div></td> `;
          }(__value2);
        }(data.eventsMap)} ${function(__value2) {
          if (is_promise(__value2)) {
            __value2.then(null, noop);
            return ` <td><div class="grid place-content-center">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[80px]" }, {}, {})} </div></td> `;
          }
          return function(eventsMap) {
            return ` <td><div class="flex flex-col gap-2"><button class="btn btn-sm variant-filled-primary text-sm !text-white" ${!eventsMap.get(source.name)?.entitlements.started ? "disabled" : ""}>Started: ${escape(formatDate(eventsMap.get(source.name)?.entitlements.started?.created))}</button> <button class="btn btn-sm variant-filled" ${!eventsMap.get(source.name)?.entitlements.passed ? "disabled" : ""}>Passed: ${escape(formatDate(eventsMap.get(source.name)?.entitlements.passed?.created))}</button> </div></td> `;
          }(__value2);
        }(data.eventsMap)} </tr>`;
      })}</tbody></table></div> `;
    }(__value);
  }(data.sources)}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-I1dxIGYL.js.map
