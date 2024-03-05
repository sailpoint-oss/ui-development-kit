import { c as create_ssr_component, a as subscribe, p as is_promise, q as noop, v as validate_component, b as each, e as escape, d as add_attribute } from './ssr-pGtI3Kui.js';
import './client-CQ5E_ugM.js';
import { P as Progress } from './Progress-Bh0zkgr8.js';
import { l as localStorageStore } from './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import './exports-DuWZopOC.js';
import './index2-CcAcUxny.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedSource, $$unsubscribe_selectedSource;
  let $updatedDescription, $$unsubscribe_updatedDescription;
  let { data } = $$props;
  const selectedSource = localStorageStore("selectedSource", void 0);
  $$unsubscribe_selectedSource = subscribe(selectedSource, (value) => $selectedSource = value);
  const updatedDescription = localStorageStore("updatedDescription", "");
  $$unsubscribe_updatedDescription = subscribe(updatedDescription, (value) => $updatedDescription = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    console.log($selectedSource);
  }
  $$unsubscribe_selectedSource();
  $$unsubscribe_updatedDescription();
  return `<div class="flex justify-center flex-col align-middle gap-2"><div class="card p-4" data-svelte-h="svelte-xch8ds"><p class="text-2xl text-center">Example Form</p></div> <form method="POST" class="card p-4"><p class="text-2xl text-center" data-svelte-h="svelte-emhize">Update Source Description</p> <div class="flex flex-col gap-4">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="flex flex-row justify-center">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[100px]" }, {}, {})}</div> `;
    }
    return function(sources) {
      return ` <label><span data-svelte-h="svelte-16rs0he">Sources:</span> <select name="source" placeholder="Select a source" class="select"><option hidden disabled value="Select a source" data-svelte-h="svelte-1dm9jri">Select a source</option>${each(sources, (source) => {
        let sourceString = JSON.stringify(source);
        return ` <option${add_attribute("value", sourceString, 0)} ${$selectedSource === sourceString ? "selected" : ""}>${escape(source.name)} - ${escape(source.type)} </option>`;
      })}</select></label> <label><span data-svelte-h="svelte-n5lbfe">Description:</span> <textarea name="updatedDescription" class="textarea">${escape($updatedDescription || "")}</textarea></label> `;
    }(__value);
  }(data.sources)} <button type="submit" class="btn variant-filled" data-svelte-h="svelte-x5avbw">Submit</button></div></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ci4ZmJN7.js.map
