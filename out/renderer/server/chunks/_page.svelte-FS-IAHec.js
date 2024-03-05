import { c as create_ssr_component, b as each, d as add_attribute, e as escape } from './ssr-pGtI3Kui.js';

const reports = [
  {
    url: "/home/example-pages/list-of-identities",
    name: "List of Identities",
    description: "This report will show all identities in the system"
  },
  {
    url: "/home/example-pages/inactive-identities-with-access",
    name: "Inactive Identities With Access",
    description: "This report will show all identities that are inactive but still have access in sources"
  },
  {
    url: "/home/example-pages/missing-cloud-life-cycle-state",
    name: "Missing Cloud Life Cycle State",
    description: "This report will show all identities that are missing a cloud life cycle state"
  },
  {
    url: "/home/example-pages/source-owner-configured",
    name: "Source Owner Configured",
    description: "This report will show all sources and their configured owners"
  },
  {
    url: "/home/example-pages/source-aggregations",
    name: "Source Aggregations",
    description: "This report will show all sources and their most recent aggregation events"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid gap-2 grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">${each(reports, (report) => {
    return `<a class="card card-hover overflow-hidden" data-sveltekit-preload-data="hover"${add_attribute("href", report.url, 0)}><header class="card-header aspect-[21/9] bg-[#526bf8] flex flex-col justify-center min-h-[105px]"><p class="font-bold text-white uppercase text-center text-xl">${escape(report.name)} </p></header> <div class="p-4 space-y-4"><h3 class="h3" data-toc-ignore data-svelte-h="svelte-6huxvk">Summary</h3> <article><p>${escape(report.description)}</p> </article></div> </a>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-FS-IAHec.js.map
