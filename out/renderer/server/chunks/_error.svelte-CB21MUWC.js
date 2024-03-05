import { c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component } from './ssr-pGtI3Kui.js';
import { p as page, C as CodeBlock } from './stores-CEBzDsQs.js';
import './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import './index2-CcAcUxny.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    console.log($page);
  }
  $$unsubscribe_page();
  return `<div class="p-4"><div class="card p-4"><p class="text-center p-2">WHOOPS! <br> <span class="text-red-500">a ${escape($page.status)} error occurred.</span> <br> If
			you believe this is a bug please submit an issue on
			<a class="underline text-blue-500 hover:text-blue-700" href="https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose" rel="noreferrer" target="_blank" data-svelte-h="svelte-1q72bt6">GitHub</a></p> ${$page.error?.message ? `<p class="py-2">Message: <br><span class="text-red-500">${escape($page.error.message)}</span></p>` : ``} ${$page.error?.urls ? `<p data-svelte-h="svelte-cuvqcc">These links may be helpful:</p> <ul>${each($page.error?.urls, (url) => {
    return `<li>-
						<a class="underline text-blue-500 hover:text-blue-700"${add_attribute("href", url, 0)} rel="noreferrer" target="_blank">${escape(url)}</a> </li>`;
  })}</ul>` : ``} ${$page.error?.context ? `<div class="py-2"><p data-svelte-h="svelte-18zo72r">Context</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "json",
      code: JSON.stringify($page.error?.context, null, 4)
    },
    {},
    {}
  )}</div>` : ``} ${$page.error?.errData ? `<div class="pt-2"><p data-svelte-h="svelte-1i80aqe">Error Data</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "json",
      code: JSON.stringify($page.error?.errData, null, 4)
    },
    {},
    {}
  )}</div>` : ``}</div></div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-CB21MUWC.js.map
