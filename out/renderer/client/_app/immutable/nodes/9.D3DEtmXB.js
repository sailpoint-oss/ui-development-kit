import { s as safe_not_equal, e as element, a as space, c as claim_element, b as children, h as get_svelte_dataset, f as claim_space, g as detach, i as attr, j as insert_hydration, k as append_hydration, o as noop, n as destroy_each, t as text, d as claim_text, x as listen, l as set_data } from "../chunks/scheduler.fBTsnP2i.js";
import { h as handle_promise, u as update_await_block_branch, P as Progress } from "../chunks/Progress.3ESwaKmp.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { S as SvelteComponent, i as init, t as transition_in, a as transition_out, b as create_component, d as claim_component, m as mount_component, e as destroy_component } from "../chunks/index.DdnDjIf5.js";
import { g as getModalStore, T as TriggerCodeModal, f as formatDate } from "../chunks/Utils.BOVa1qxf.js";
import "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let div;
  let table;
  let thead;
  let textContent = `<th>Name</th> <th>Sources</th> <th>Created</th> <th>Access Count</th> <th>Entitlement Count</th> <th>Role Count</th> <th></th>`;
  let t12;
  let tbody;
  let each_value = ensure_array_like(
    /*reportData*/
    ctx[3]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      thead.innerHTML = textContent;
      t12 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      table = claim_element(div_nodes, "TABLE", { class: true });
      var table_nodes = children(table);
      thead = claim_element(table_nodes, "THEAD", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(thead) !== "svelte-13zfyyz")
        thead.innerHTML = textContent;
      t12 = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", { class: true });
      var tbody_nodes = children(tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(thead, "class", "table-head");
      attr(tbody, "class", "table-body");
      attr(table, "class", "table");
      attr(div, "class", "table-container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(table, t12);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(tbody, null);
        }
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*data, modalStore*/
      3) {
        each_value = ensure_array_like(
          /*reportData*/
          ctx2[3]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(tbody, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  var _a;
  let tr;
  let td0;
  let t0_value = (
    /*identity*/
    ctx[4].displayName + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*identity*/
    ((_a = ctx[4].accounts) == null ? void 0 : _a.map(func).join(", ")) + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = formatDate(
    /*identity*/
    ctx[4].created
  ) + "";
  let t4;
  let t5;
  let td3;
  let t6_value = (
    /*identity*/
    ctx[4].accessCount + ""
  );
  let t6;
  let t7;
  let td4;
  let t8_value = (
    /*identity*/
    ctx[4].entitlementCount + ""
  );
  let t8;
  let t9;
  let td5;
  let t10_value = (
    /*identity*/
    ctx[4].roleCount + ""
  );
  let t10;
  let t11;
  let td6;
  let div;
  let a;
  let t12;
  let a_href_value;
  let t13;
  let button;
  let textContent = "View";
  let t15;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[2](
        /*identity*/
        ctx[4]
      )
    );
  }
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      td4 = element("td");
      t8 = text(t8_value);
      t9 = space();
      td5 = element("td");
      t10 = text(t10_value);
      t11 = space();
      td6 = element("td");
      div = element("div");
      a = element("a");
      t12 = text("Open");
      t13 = space();
      button = element("button");
      button.textContent = textContent;
      t15 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", {});
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      td4 = claim_element(tr_nodes, "TD", {});
      var td4_nodes = children(td4);
      t8 = claim_text(td4_nodes, t8_value);
      td4_nodes.forEach(detach);
      t9 = claim_space(tr_nodes);
      td5 = claim_element(tr_nodes, "TD", {});
      var td5_nodes = children(td5);
      t10 = claim_text(td5_nodes, t10_value);
      td5_nodes.forEach(detach);
      t11 = claim_space(tr_nodes);
      td6 = claim_element(tr_nodes, "TD", {});
      var td6_nodes = children(td6);
      div = claim_element(td6_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        href: true,
        class: true,
        "data-sveltekit-preload-data": true
      });
      var a_nodes = children(a);
      t12 = claim_text(a_nodes, "Open");
      a_nodes.forEach(detach);
      t13 = claim_space(div_nodes);
      button = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-v2pl7n")
        button.textContent = textContent;
      div_nodes.forEach(detach);
      td6_nodes.forEach(detach);
      t15 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = `/home/identities/${/*identity*/
      ctx[4].id}`);
      attr(a, "class", "btn btn-sm variant-filled-primary text-sm !text-white");
      attr(a, "data-sveltekit-preload-data", "hover");
      attr(button, "class", "btn btn-sm variant-filled-primary text-sm !text-white");
      attr(div, "class", "flex flex-col justify-center gap-1");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
      append_hydration(tr, td4);
      append_hydration(td4, t8);
      append_hydration(tr, t9);
      append_hydration(tr, td5);
      append_hydration(td5, t10);
      append_hydration(tr, t11);
      append_hydration(tr, td6);
      append_hydration(td6, div);
      append_hydration(div, a);
      append_hydration(a, t12);
      append_hydration(div, t13);
      append_hydration(div, button);
      append_hydration(tr, t15);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a2;
      ctx = new_ctx;
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*identity*/
      ctx[4].displayName + ""))
        set_data(t0, t0_value);
      if (dirty & /*data*/
      1 && t2_value !== (t2_value = /*identity*/
      ((_a2 = ctx[4].accounts) == null ? void 0 : _a2.map(func).join(", ")) + ""))
        set_data(t2, t2_value);
      if (dirty & /*data*/
      1 && t4_value !== (t4_value = formatDate(
        /*identity*/
        ctx[4].created
      ) + ""))
        set_data(t4, t4_value);
      if (dirty & /*data*/
      1 && t6_value !== (t6_value = /*identity*/
      ctx[4].accessCount + ""))
        set_data(t6, t6_value);
      if (dirty & /*data*/
      1 && t8_value !== (t8_value = /*identity*/
      ctx[4].entitlementCount + ""))
        set_data(t8, t8_value);
      if (dirty & /*data*/
      1 && t10_value !== (t10_value = /*identity*/
      ctx[4].roleCount + ""))
        set_data(t10, t10_value);
      if (dirty & /*data*/
      1 && a_href_value !== (a_href_value = `/home/identities/${/*identity*/
      ctx[4].id}`)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(tr);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_pending_block(ctx) {
  let div;
  let progress;
  let current;
  progress = new Progress({ props: { width: "w-[100px]" } });
  return {
    c() {
      div = element("div");
      create_component(progress.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progress.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "grid h-full place-content-center p-8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(progress, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(progress);
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let div0;
  let textContent = `<p class="text-2xl text-center">Listing of identities that are missing the cloud life cycle state attribute</p>`;
  let t1;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 3,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].reportData, info);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      div0.innerHTML = textContent;
      t1 = space();
      info.block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-1rkz5aa")
        div0.innerHTML = textContent;
      t1 = claim_space(div1_nodes);
      info.block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "card p-4");
      attr(div1, "class", "flex justify-center flex-col align-middle");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div1, t1);
      info.block.m(div1, info.anchor = null);
      info.mount = () => div1;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & /*data*/
      1 && promise !== (promise = /*data*/
      ctx[0].reportData) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
const func = (account) => {
  var _a;
  return (_a = account.source) == null ? void 0 : _a.name;
};
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  console.log(data);
  const modalStore = getModalStore();
  const click_handler = (identity) => TriggerCodeModal(identity, modalStore);
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data, modalStore, click_handler];
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
