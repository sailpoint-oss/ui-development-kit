import { c as create_ssr_component, a as subscribe, d as add_attribute } from './ssr-pGtI3Kui.js';
import { B as BROWSER } from './prod-ssr-DxkyU4_t.js';
import './client-CQ5E_ugM.js';
import { l as localStorageStore } from './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import './exports-DuWZopOC.js';
import './index2-CcAcUxny.js';

const browser = BROWSER;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $domain, $$unsubscribe_domain;
  let $tenant, $$unsubscribe_tenant;
  let $baseUrl, $$unsubscribe_baseUrl;
  let $tenantUrl, $$unsubscribe_tenantUrl;
  let desktop;
  if (window.electron && browser) {
    window.electron.receive("from-main", (data) => {
      desktop = `Received Message "${data}" from Electron`;
      console.log(desktop);
    });
  }
  const tenant = localStorageStore("tenant", "tenant");
  $$unsubscribe_tenant = subscribe(tenant, (value) => $tenant = value);
  const domain = localStorageStore("domain", "identitynow");
  $$unsubscribe_domain = subscribe(domain, (value) => $domain = value);
  const baseUrl = localStorageStore("baseUrl", "https://${tenant}.api.${domain}.com");
  $$unsubscribe_baseUrl = subscribe(baseUrl, (value) => $baseUrl = value);
  const tenantUrl = localStorageStore("tenantUrl", "https://${tenant}.${domain}.com");
  $$unsubscribe_tenantUrl = subscribe(tenantUrl, (value) => $tenantUrl = value);
  {
    baseUrl.set(`https://${$tenant}.api.${$domain}.com`);
  }
  {
    tenantUrl.set(`https://${$tenant}.${$domain}.com`);
  }
  $$unsubscribe_domain();
  $$unsubscribe_tenant();
  $$unsubscribe_baseUrl();
  $$unsubscribe_tenantUrl();
  return `<main class="p-32 h-full"><div class="flex flex-row justify-center" data-svelte-h="svelte-ldyvpw"><img class="h-12 min-w-[590px]" src="/SailPoint-Developer-Community-Lockup.png" alt="sailPoint Logo"></div> <div class=""><div class="text-2xl text-center py-2" data-svelte-h="svelte-mv3ikv">Enter your tenant information to continue</div> <form method="POST" class="flex flex-col gap-4"><label class="">Tenant
				<input name="tenant"${add_attribute("placeholder", `tenant`, 0)} class="input p-2"${add_attribute("value", $tenant, 0)}></label> <label class="">Domain
				<input name="domain"${add_attribute("placeholder", `identitynow`, 0)} class="input p-2"${add_attribute("value", $domain, 0)}></label> <label class="">API Base URL
				<input name="baseUrl"${add_attribute("placeholder", `https://${tenant}.api.${domain}.com`, 0)} class="input p-2"${add_attribute("value", $baseUrl, 0)}></label> <label class="">Tenant URL
				<input name="tenantUrl"${add_attribute("placeholder", `https://${tenant}.identitynow.com`, 0)} class="input p-2"${add_attribute("value", $tenantUrl, 0)}></label> <button type="submit" class="btn variant-filled-primary w-full mt-2 !text-white text-lg" data-svelte-h="svelte-15b9f0n">Login</button></form></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cu2nwh9c.js.map
