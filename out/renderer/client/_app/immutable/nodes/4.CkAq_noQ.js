import { s as safe_not_equal, e as element, c as claim_element, h as get_svelte_dataset, i as attr, j as insert_hydration, o as noop, g as detach } from "../chunks/scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init } from "../chunks/index.DdnDjIf5.js";
function create_fragment(ctx) {
  let div;
  let textContent = `<p class="text-center px-60">This starter application is meant to be an example of how you can build on top of the
		IdentityNow UI development kit to build your own applications and tools for IdentityNow

		<br/>

		On the left hand side you will see some example pages showcasing some different kinds of pages
		you could build. Each page is meant to be a starting point for you to build your own pages.</p>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-sn1z1p")
        div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "grid place-content-center h-full");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
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
