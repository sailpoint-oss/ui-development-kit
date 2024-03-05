import { s as safe_not_equal, e as element, c as claim_element, b as children, g as detach, i as attr, j as insert_hydration, k as append_hydration, o as noop, p as onMount, h as get_svelte_dataset } from "../chunks/scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init } from "../chunks/index.DdnDjIf5.js";
import { g as goto } from "../chunks/entry.Cs_QM1XO.js";
function create_else_block(ctx) {
  let p;
  let textContent = `WHOOPS! an error occurred. <br/> If you believe this is a bug please submit an issue on
				<a class="underline text-blue-500 hover:text-blue-700" href="https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose" rel="noreferrer" target="_blank">GitHub</a>`;
  return {
    c() {
      p = element("p");
      p.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-npxz0y")
        p.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(p, "class", "text-center p-2");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_if_block(ctx) {
  let p;
  let textContent = "Successfully Logged out";
  return {
    c() {
      p = element("p");
      p.textContent = textContent;
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-vsqarg")
        p.textContent = textContent;
      this.h();
    },
    h() {
      attr(p, "class", "text-center p-2");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let div0;
  function select_block_type(ctx2, dirty) {
    if (
      /*data*/
      ctx2[0].sessionLoggedOut
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "card p-4");
      attr(div1, "class", "p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if_block.m(div0, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if_block.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  onMount(() => {
    setTimeout(
      async () => {
        console.log("Redirecting to login...");
        goto("/");
      },
      2e3
    );
  });
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Page as component
};
