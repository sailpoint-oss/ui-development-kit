import { c as create_ssr_component, d as add_attribute, p as is_promise, q as noop, v as validate_component, b as each, e as escape } from './ssr-pGtI3Kui.js';
import { P as Progress } from './Progress-Bh0zkgr8.js';
import './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import './index2-CcAcUxny.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let dialog;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<dialog class="card p-8 dark:text-white"${add_attribute("this", dialog, 0)}><div class="flex flex-col gap-4">${``} ${`${``} <button class="btn variant-filled-primary">${`Create form link`}</button>`} <button class="btn variant-filled-warning" data-svelte-h="svelte-1bxgjoy">Close</button></div></dialog> <div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="flex flex-row justify-center">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[80px]" }, {}, {})}</div> `;
    }
    return function(forms) {
      return ` <div class="flex flex-row">${each(forms, (form) => {
        return `<div class="card flex flex-col p-4 gap-4">${form.object ? `<p id="name" class="text-center">Name: ${escape(form.object?.name)} </p>` : ``} <p>ID: ${escape(form.object?.id)}</p> <p>Description: <br> ${escape(form.object?.description)}</p> <div><p data-svelte-h="svelte-zyoigh">Form Inputs:</p> ${form.object?.formInput ? `${each(form.object?.formInput, (input) => {
          return `<p class="">${escape(input.label)} </p>`;
        })}` : ``}</div> <button class="btn variant-filled-primary" data-svelte-h="svelte-14fmnxe">Assign form</button> </div>`;
      })}</div> `;
    }(__value);
  }(data.forms)}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DpEMe2pa.js.map
