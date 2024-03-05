import { s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as claim_space, g as detach, h as get_svelte_dataset, i as attr, j as insert_hydration, k as append_hydration, l as set_data, m as component_subscribe, n as destroy_each } from "../chunks/scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init, t as transition_in, a as transition_out, c as check_outros, b as create_component, d as claim_component, m as mount_component, e as destroy_component, g as group_outros } from "../chunks/index.DdnDjIf5.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { C as CodeBlock, p as page } from "../chunks/stores.BRlO1dnN.js";
import "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_if_block_3(ctx) {
  let p;
  let t0;
  let br;
  let span;
  let t1_value = (
    /*$page*/
    ctx[0].error.message + ""
  );
  let t1;
  return {
    c() {
      p = element("p");
      t0 = text("Message: ");
      br = element("br");
      span = element("span");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Message: ");
      br = claim_element(p_nodes, "BR", {});
      span = claim_element(p_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text-red-500");
      attr(p, "class", "py-2");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, br);
      append_hydration(p, span);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      1 && t1_value !== (t1_value = /*$page*/
      ctx2[0].error.message + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_if_block_2(ctx) {
  var _a;
  let p;
  let textContent = "These links may be helpful:";
  let t1;
  let ul;
  let each_value = ensure_array_like(
    /*$page*/
    (_a = ctx[0].error) == null ? void 0 : _a.urls
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
    },
    l(nodes) {
      p = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-cuvqcc")
        p.textContent = textContent;
      t1 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & /*$page*/
      1) {
        each_value = ensure_array_like(
          /*$page*/
          (_a2 = ctx2[0].error) == null ? void 0 : _a2.urls
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(p);
        detach(t1);
        detach(ul);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let t0;
  let a;
  let t1_value = (
    /*url*/
    ctx[1] + ""
  );
  let t1;
  let a_href_value;
  let t2;
  return {
    c() {
      li = element("li");
      t0 = text("-\r\n						");
      a = element("a");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, "-\r\n						");
      a = claim_element(li_nodes, "A", {
        class: true,
        href: true,
        rel: true,
        target: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, t1_value);
      a_nodes.forEach(detach);
      t2 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "class", "underline text-blue-500 hover:text-blue-700");
      attr(a, "href", a_href_value = /*url*/
      ctx[1]);
      attr(a, "rel", "noreferrer");
      attr(a, "target", "_blank");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, a);
      append_hydration(a, t1);
      append_hydration(li, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      1 && t1_value !== (t1_value = /*url*/
      ctx2[1] + ""))
        set_data(t1, t1_value);
      if (dirty & /*$page*/
      1 && a_href_value !== (a_href_value = /*url*/
      ctx2[1])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(li);
      }
    }
  };
}
function create_if_block_1(ctx) {
  var _a;
  let div;
  let p;
  let textContent = "Context";
  let t1;
  let codeblock;
  let current;
  codeblock = new CodeBlock({
    props: {
      language: "json",
      code: JSON.stringify(
        /*$page*/
        (_a = ctx[0].error) == null ? void 0 : _a.context,
        null,
        4
      )
    }
  });
  return {
    c() {
      div = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      create_component(codeblock.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-18zo72r")
        p.textContent = textContent;
      t1 = claim_space(div_nodes);
      claim_component(codeblock.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "py-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(div, t1);
      mount_component(codeblock, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2;
      const codeblock_changes = {};
      if (dirty & /*$page*/
      1)
        codeblock_changes.code = JSON.stringify(
          /*$page*/
          (_a2 = ctx2[0].error) == null ? void 0 : _a2.context,
          null,
          4
        );
      codeblock.$set(codeblock_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codeblock.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codeblock.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(codeblock);
    }
  };
}
function create_if_block(ctx) {
  var _a;
  let div;
  let p;
  let textContent = "Error Data";
  let t1;
  let codeblock;
  let current;
  codeblock = new CodeBlock({
    props: {
      language: "json",
      code: JSON.stringify(
        /*$page*/
        (_a = ctx[0].error) == null ? void 0 : _a.errData,
        null,
        4
      )
    }
  });
  return {
    c() {
      div = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      create_component(codeblock.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1i80aqe")
        p.textContent = textContent;
      t1 = claim_space(div_nodes);
      claim_component(codeblock.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "pt-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(div, t1);
      mount_component(codeblock, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2;
      const codeblock_changes = {};
      if (dirty & /*$page*/
      1)
        codeblock_changes.code = JSON.stringify(
          /*$page*/
          (_a2 = ctx2[0].error) == null ? void 0 : _a2.errData,
          null,
          4
        );
      codeblock.$set(codeblock_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codeblock.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codeblock.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(codeblock);
    }
  };
}
function create_fragment(ctx) {
  var _a, _b, _c, _d;
  let div1;
  let div0;
  let p;
  let t0;
  let br0;
  let t1;
  let span;
  let t2;
  let t3_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t3;
  let t4;
  let t5;
  let br1;
  let t6;
  let a;
  let textContent = "GitHub";
  let t8;
  let t9;
  let t10;
  let t11;
  let current;
  let if_block0 = (
    /*$page*/
    ((_a = ctx[0].error) == null ? void 0 : _a.message) && create_if_block_3(ctx)
  );
  let if_block1 = (
    /*$page*/
    ((_b = ctx[0].error) == null ? void 0 : _b.urls) && create_if_block_2(ctx)
  );
  let if_block2 = (
    /*$page*/
    ((_c = ctx[0].error) == null ? void 0 : _c.context) && create_if_block_1(ctx)
  );
  let if_block3 = (
    /*$page*/
    ((_d = ctx[0].error) == null ? void 0 : _d.errData) && create_if_block(ctx)
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      p = element("p");
      t0 = text("WHOOPS! ");
      br0 = element("br");
      t1 = space();
      span = element("span");
      t2 = text("a ");
      t3 = text(t3_value);
      t4 = text(" error occurred.");
      t5 = space();
      br1 = element("br");
      t6 = text(" If\r\n			you believe this is a bug please submit an issue on\r\n			");
      a = element("a");
      a.textContent = textContent;
      t8 = space();
      if (if_block0)
        if_block0.c();
      t9 = space();
      if (if_block1)
        if_block1.c();
      t10 = space();
      if (if_block2)
        if_block2.c();
      t11 = space();
      if (if_block3)
        if_block3.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "WHOOPS! ");
      br0 = claim_element(p_nodes, "BR", {});
      t1 = claim_space(p_nodes);
      span = claim_element(p_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "a ");
      t3 = claim_text(span_nodes, t3_value);
      t4 = claim_text(span_nodes, " error occurred.");
      span_nodes.forEach(detach);
      t5 = claim_space(p_nodes);
      br1 = claim_element(p_nodes, "BR", {});
      t6 = claim_text(p_nodes, " If\r\n			you believe this is a bug please submit an issue on\r\n			");
      a = claim_element(p_nodes, "A", {
        class: true,
        href: true,
        rel: true,
        target: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(a) !== "svelte-1q72bt6")
        a.textContent = textContent;
      p_nodes.forEach(detach);
      t8 = claim_space(div0_nodes);
      if (if_block0)
        if_block0.l(div0_nodes);
      t9 = claim_space(div0_nodes);
      if (if_block1)
        if_block1.l(div0_nodes);
      t10 = claim_space(div0_nodes);
      if (if_block2)
        if_block2.l(div0_nodes);
      t11 = claim_space(div0_nodes);
      if (if_block3)
        if_block3.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text-red-500");
      attr(a, "class", "underline text-blue-500 hover:text-blue-700");
      attr(a, "href", "https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose");
      attr(a, "rel", "noreferrer");
      attr(a, "target", "_blank");
      attr(p, "class", "text-center p-2");
      attr(div0, "class", "card p-4");
      attr(div1, "class", "p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, p);
      append_hydration(p, t0);
      append_hydration(p, br0);
      append_hydration(p, t1);
      append_hydration(p, span);
      append_hydration(span, t2);
      append_hydration(span, t3);
      append_hydration(span, t4);
      append_hydration(p, t5);
      append_hydration(p, br1);
      append_hydration(p, t6);
      append_hydration(p, a);
      append_hydration(div0, t8);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div0, t9);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, t10);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div0, t11);
      if (if_block3)
        if_block3.m(div0, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2, _c2, _d2;
      if ((!current || dirty & /*$page*/
      1) && t3_value !== (t3_value = /*$page*/
      ctx2[0].status + ""))
        set_data(t3, t3_value);
      if (
        /*$page*/
        (_a2 = ctx2[0].error) == null ? void 0 : _a2.message
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3(ctx2);
          if_block0.c();
          if_block0.m(div0, t9);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*$page*/
        (_b2 = ctx2[0].error) == null ? void 0 : _b2.urls
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_2(ctx2);
          if_block1.c();
          if_block1.m(div0, t10);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*$page*/
        (_c2 = ctx2[0].error) == null ? void 0 : _c2.context
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*$page*/
          1) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_1(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div0, t11);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (
        /*$page*/
        (_d2 = ctx2[0].error) == null ? void 0 : _d2.errData
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*$page*/
          1) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div0, null);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block2);
      transition_in(if_block3);
      current = true;
    },
    o(local) {
      transition_out(if_block2);
      transition_out(if_block3);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    1) {
      console.log($page);
    }
  };
  return [$page];
}
class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Error as component
};
