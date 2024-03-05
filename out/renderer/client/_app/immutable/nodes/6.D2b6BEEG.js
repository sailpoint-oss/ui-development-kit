import { s as safe_not_equal, e as element, c as claim_element, b as children, g as detach, i as attr, j as insert_hydration, o as noop, t as text, a as space, d as claim_text, f as claim_space, h as get_svelte_dataset, k as append_hydration } from "../chunks/scheduler.fBTsnP2i.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { S as SvelteComponent, i as init } from "../chunks/index.DdnDjIf5.js";
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
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let a;
  let header;
  let p0;
  let t0_value = (
    /*report*/
    ctx[0].name + ""
  );
  let t0;
  let t1;
  let div;
  let h3;
  let textContent = "Summary";
  let t3;
  let article;
  let p1;
  let t4_value = (
    /*report*/
    ctx[0].description + ""
  );
  let t4;
  let t5;
  return {
    key: key_1,
    first: null,
    c() {
      a = element("a");
      header = element("header");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      div = element("div");
      h3 = element("h3");
      h3.textContent = textContent;
      t3 = space();
      article = element("article");
      p1 = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        "data-sveltekit-preload-data": true,
        href: true
      });
      var a_nodes = children(a);
      header = claim_element(a_nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      p0 = claim_element(header_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t1 = claim_space(a_nodes);
      div = claim_element(a_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h3 = claim_element(div_nodes, "H3", {
        class: true,
        "data-toc-ignore": true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(h3) !== "svelte-6huxvk")
        h3.textContent = textContent;
      t3 = claim_space(div_nodes);
      article = claim_element(div_nodes, "ARTICLE", {});
      var article_nodes = children(article);
      p1 = claim_element(article_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, t4_value);
      p1_nodes.forEach(detach);
      article_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t5 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p0, "class", "font-bold text-white uppercase text-center text-xl");
      attr(header, "class", "card-header aspect-[21/9] bg-[#526bf8] flex flex-col justify-center min-h-[105px]");
      attr(h3, "class", "h3");
      attr(h3, "data-toc-ignore", "");
      attr(div, "class", "p-4 space-y-4");
      attr(a, "class", "card card-hover overflow-hidden");
      attr(a, "data-sveltekit-preload-data", "hover");
      attr(
        a,
        "href",
        /*report*/
        ctx[0].url
      );
      this.first = a;
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, header);
      append_hydration(header, p0);
      append_hydration(p0, t0);
      append_hydration(a, t1);
      append_hydration(a, div);
      append_hydration(div, h3);
      append_hydration(div, t3);
      append_hydration(div, article);
      append_hydration(article, p1);
      append_hydration(p1, t4);
      append_hydration(a, t5);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(a);
      }
    }
  };
}
function create_fragment(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_value = ensure_array_like(reports);
  const get_key = (ctx2) => (
    /*report*/
    ctx2[0].url
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "grid gap-2 grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
