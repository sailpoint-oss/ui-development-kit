import { s as safe_not_equal, e as element, a as space, c as claim_element, b as children, h as get_svelte_dataset, f as claim_space, g as detach, i as attr, j as insert_hydration, k as append_hydration, o as noop, n as destroy_each, t as text, d as claim_text, A as toggle_class, l as set_data, x as listen, y as run_all } from "../chunks/scheduler.fBTsnP2i.js";
import { h as handle_promise, u as update_await_block_branch, P as Progress } from "../chunks/Progress.3ESwaKmp.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { S as SvelteComponent, i as init, t as transition_in, a as transition_out, g as group_outros, c as check_outros, b as create_component, d as claim_component, m as mount_component, e as destroy_component } from "../chunks/index.DdnDjIf5.js";
import { g as getModalStore, T as TriggerCodeModal, f as formatDate } from "../chunks/Utils.BOVa1qxf.js";
import "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_catch_block_2(ctx) {
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
  let textContent = `<th>Source Name</th> <th>Type</th> <th>Authoritative</th> <th>Account Aggregations</th> <th>Entitlement Aggregations</th>`;
  let t9;
  let tbody;
  let current;
  let each_value = ensure_array_like(
    /*sources*/
    ctx[6]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      thead.innerHTML = textContent;
      t9 = space();
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
      thead = claim_element(table_nodes, "THEAD", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(thead) !== "svelte-gj53un")
        thead.innerHTML = textContent;
      t9 = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", {});
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
      attr(table, "class", "table");
      attr(div, "class", "table-container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(table, t9);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(tbody, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*data, modalStore*/
      3) {
        each_value = ensure_array_like(
          /*sources*/
          ctx2[6]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(tbody, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_catch_block_1(ctx) {
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
function create_then_block_2(ctx) {
  var _a, _b, _c, _d;
  let td;
  let div;
  let button0;
  let t0;
  let t1_value = formatDate(
    /*eventsMap*/
    (_b = (_a = ctx[10].get(
      /*source*/
      ctx[7].name
    )) == null ? void 0 : _a.accounts.started) == null ? void 0 : _b.created
  ) + "";
  let t1;
  let button0_disabled_value;
  let t2;
  let button1;
  let t3;
  let t4_value = formatDate(
    /*eventsMap*/
    (_d = (_c = ctx[10].get(
      /*source*/
      ctx[7].name
    )) == null ? void 0 : _c.accounts.passed) == null ? void 0 : _d.created
  ) + "";
  let t4;
  let button1_disabled_value;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[2](
        /*eventsMap*/
        ctx[10],
        /*source*/
        ctx[7]
      )
    );
  }
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[3](
        /*eventsMap*/
        ctx[10],
        /*source*/
        ctx[7]
      )
    );
  }
  return {
    c() {
      td = element("td");
      div = element("div");
      button0 = element("button");
      t0 = text("Started: ");
      t1 = text(t1_value);
      t2 = space();
      button1 = element("button");
      t3 = text("Passed: ");
      t4 = text(t4_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      div = claim_element(td_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Started: ");
      t1 = claim_text(button0_nodes, t1_value);
      button0_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t3 = claim_text(button1_nodes, "Passed: ");
      t4 = claim_text(button1_nodes, t4_value);
      button1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a2, _b2;
      button0.disabled = button0_disabled_value = !/*eventsMap*/
      ((_a2 = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _a2.accounts.started);
      attr(button0, "class", "btn btn-sm variant-filled-primary text-sm !text-white");
      attr(button1, "class", "btn btn-sm variant-filled");
      button1.disabled = button1_disabled_value = !/*eventsMap*/
      ((_b2 = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _b2.accounts.passed);
      attr(div, "class", "flex flex-col gap-2");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, div);
      append_hydration(div, button0);
      append_hydration(button0, t0);
      append_hydration(button0, t1);
      append_hydration(div, t2);
      append_hydration(div, button1);
      append_hydration(button1, t3);
      append_hydration(button1, t4);
      if (!mounted) {
        dispose = [
          listen(button0, "click", click_handler),
          listen(button1, "click", click_handler_1)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a2, _b2, _c2, _d2, _e, _f;
      ctx = new_ctx;
      if (dirty & /*data*/
      1 && t1_value !== (t1_value = formatDate(
        /*eventsMap*/
        (_b2 = (_a2 = ctx[10].get(
          /*source*/
          ctx[7].name
        )) == null ? void 0 : _a2.accounts.started) == null ? void 0 : _b2.created
      ) + ""))
        set_data(t1, t1_value);
      if (dirty & /*data*/
      1 && button0_disabled_value !== (button0_disabled_value = !/*eventsMap*/
      ((_c2 = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _c2.accounts.started))) {
        button0.disabled = button0_disabled_value;
      }
      if (dirty & /*data*/
      1 && t4_value !== (t4_value = formatDate(
        /*eventsMap*/
        (_e = (_d2 = ctx[10].get(
          /*source*/
          ctx[7].name
        )) == null ? void 0 : _d2.accounts.passed) == null ? void 0 : _e.created
      ) + ""))
        set_data(t4, t4_value);
      if (dirty & /*data*/
      1 && button1_disabled_value !== (button1_disabled_value = !/*eventsMap*/
      ((_f = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _f.accounts.passed))) {
        button1.disabled = button1_disabled_value;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(td);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_pending_block_2(ctx) {
  let td;
  let div;
  let progress;
  let current;
  progress = new Progress({ props: { width: "w-[80px]" } });
  return {
    c() {
      td = element("td");
      div = element("div");
      create_component(progress.$$.fragment);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      div = claim_element(td_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progress.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "grid place-content-center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, div);
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
        detach(td);
      }
      destroy_component(progress);
    }
  };
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
function create_then_block_1(ctx) {
  var _a, _b, _c, _d;
  let td;
  let div;
  let button0;
  let t0;
  let t1_value = formatDate(
    /*eventsMap*/
    (_b = (_a = ctx[10].get(
      /*source*/
      ctx[7].name
    )) == null ? void 0 : _a.entitlements.started) == null ? void 0 : _b.created
  ) + "";
  let t1;
  let button0_disabled_value;
  let t2;
  let button1;
  let t3;
  let t4_value = formatDate(
    /*eventsMap*/
    (_d = (_c = ctx[10].get(
      /*source*/
      ctx[7].name
    )) == null ? void 0 : _c.entitlements.passed) == null ? void 0 : _d.created
  ) + "";
  let t4;
  let button1_disabled_value;
  let mounted;
  let dispose;
  function click_handler_2() {
    return (
      /*click_handler_2*/
      ctx[4](
        /*eventsMap*/
        ctx[10],
        /*source*/
        ctx[7]
      )
    );
  }
  function click_handler_3() {
    return (
      /*click_handler_3*/
      ctx[5](
        /*eventsMap*/
        ctx[10],
        /*source*/
        ctx[7]
      )
    );
  }
  return {
    c() {
      td = element("td");
      div = element("div");
      button0 = element("button");
      t0 = text("Started: ");
      t1 = text(t1_value);
      t2 = space();
      button1 = element("button");
      t3 = text("Passed: ");
      t4 = text(t4_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      div = claim_element(td_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Started: ");
      t1 = claim_text(button0_nodes, t1_value);
      button0_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t3 = claim_text(button1_nodes, "Passed: ");
      t4 = claim_text(button1_nodes, t4_value);
      button1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a2, _b2;
      attr(button0, "class", "btn btn-sm variant-filled-primary text-sm !text-white");
      button0.disabled = button0_disabled_value = !/*eventsMap*/
      ((_a2 = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _a2.entitlements.started);
      attr(button1, "class", "btn btn-sm variant-filled");
      button1.disabled = button1_disabled_value = !/*eventsMap*/
      ((_b2 = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _b2.entitlements.passed);
      attr(div, "class", "flex flex-col gap-2");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, div);
      append_hydration(div, button0);
      append_hydration(button0, t0);
      append_hydration(button0, t1);
      append_hydration(div, t2);
      append_hydration(div, button1);
      append_hydration(button1, t3);
      append_hydration(button1, t4);
      if (!mounted) {
        dispose = [
          listen(button0, "click", click_handler_2),
          listen(button1, "click", click_handler_3)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a2, _b2, _c2, _d2, _e, _f;
      ctx = new_ctx;
      if (dirty & /*data*/
      1 && t1_value !== (t1_value = formatDate(
        /*eventsMap*/
        (_b2 = (_a2 = ctx[10].get(
          /*source*/
          ctx[7].name
        )) == null ? void 0 : _a2.entitlements.started) == null ? void 0 : _b2.created
      ) + ""))
        set_data(t1, t1_value);
      if (dirty & /*data*/
      1 && button0_disabled_value !== (button0_disabled_value = !/*eventsMap*/
      ((_c2 = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _c2.entitlements.started))) {
        button0.disabled = button0_disabled_value;
      }
      if (dirty & /*data*/
      1 && t4_value !== (t4_value = formatDate(
        /*eventsMap*/
        (_e = (_d2 = ctx[10].get(
          /*source*/
          ctx[7].name
        )) == null ? void 0 : _d2.entitlements.passed) == null ? void 0 : _e.created
      ) + ""))
        set_data(t4, t4_value);
      if (dirty & /*data*/
      1 && button1_disabled_value !== (button1_disabled_value = !/*eventsMap*/
      ((_f = ctx[10].get(
        /*source*/
        ctx[7].name
      )) == null ? void 0 : _f.entitlements.passed))) {
        button1.disabled = button1_disabled_value;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(td);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_pending_block_1(ctx) {
  let td;
  let div;
  let progress;
  let current;
  progress = new Progress({ props: { width: "w-[80px]" } });
  return {
    c() {
      td = element("td");
      div = element("div");
      create_component(progress.$$.fragment);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      div = claim_element(td_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progress.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "grid place-content-center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, div);
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
        detach(td);
      }
      destroy_component(progress);
    }
  };
}
function create_each_block(ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*source*/
    ctx[7].name + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*source*/
    ctx[7].type + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*source*/
    ctx[7].authoritative ? "True" : "False"
  );
  let t4;
  let t5;
  let promise;
  let t6;
  let promise_1;
  let t7;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_2,
    then: create_then_block_2,
    catch: create_catch_block_1,
    value: 10,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].eventsMap, info);
  let info_1 = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_1,
    then: create_then_block_1,
    catch: create_catch_block,
    value: 10,
    blocks: [, , ,]
  };
  handle_promise(promise_1 = /*data*/
  ctx[0].eventsMap, info_1);
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
      info.block.c();
      t6 = space();
      info_1.block.c();
      t7 = space();
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
      td2 = claim_element(tr_nodes, "TD", { class: true });
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      info.block.l(tr_nodes);
      t6 = claim_space(tr_nodes);
      info_1.block.l(tr_nodes);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td2, "class", "font-bold");
      toggle_class(
        td2,
        "text-tertiary-500",
        /*source*/
        ctx[7].authoritative
      );
      toggle_class(td2, "text-warning-500", !/*source*/
      ctx[7].authoritative);
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
      info.block.m(tr, info.anchor = null);
      info.mount = () => tr;
      info.anchor = t6;
      append_hydration(tr, t6);
      info_1.block.m(tr, info_1.anchor = null);
      info_1.mount = () => tr;
      info_1.anchor = t7;
      append_hydration(tr, t7);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & /*data*/
      1) && t0_value !== (t0_value = /*source*/
      ctx[7].name + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & /*data*/
      1) && t2_value !== (t2_value = /*source*/
      ctx[7].type + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & /*data*/
      1) && t4_value !== (t4_value = /*source*/
      ctx[7].authoritative ? "True" : "False"))
        set_data(t4, t4_value);
      if (!current || dirty & /*data*/
      1) {
        toggle_class(
          td2,
          "text-tertiary-500",
          /*source*/
          ctx[7].authoritative
        );
      }
      if (!current || dirty & /*data*/
      1) {
        toggle_class(td2, "text-warning-500", !/*source*/
        ctx[7].authoritative);
      }
      info.ctx = ctx;
      if (dirty & /*data*/
      1 && promise !== (promise = /*data*/
      ctx[0].eventsMap) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
      info_1.ctx = ctx;
      if (dirty & /*data*/
      1 && promise_1 !== (promise_1 = /*data*/
      ctx[0].eventsMap) && handle_promise(promise_1, info_1))
        ;
      else {
        update_await_block_branch(info_1, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      transition_in(info_1.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      for (let i = 0; i < 3; i += 1) {
        const block = info_1.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(tr);
      }
      info.block.d();
      info.token = null;
      info = null;
      info_1.block.d();
      info_1.token = null;
      info_1 = null;
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
      attr(div, "class", "card grid h-full place-content-center p-8");
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
  let textContent = `<p class="text-2xl text-center">List of sources and their most recent aggregation events</p>`;
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
    catch: create_catch_block_2,
    value: 6,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].sources, info);
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
      if (get_svelte_dataset(div0) !== "svelte-12bxj29")
        div0.innerHTML = textContent;
      t1 = claim_space(div1_nodes);
      info.block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "card p-4");
      attr(div1, "class", "flex justify-center flex-col align-middle gap-2");
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
      ctx[0].sources) && handle_promise(promise, info))
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
function instance($$self, $$props, $$invalidate) {
  const modalStore = getModalStore();
  let { data } = $$props;
  console.log(data);
  const click_handler = (eventsMap, source) => {
    var _a, _b;
    return ((_a = eventsMap.get(source.name)) == null ? void 0 : _a.accounts.started) && TriggerCodeModal((_b = eventsMap.get(source.name)) == null ? void 0 : _b.accounts.started, modalStore);
  };
  const click_handler_1 = (eventsMap, source) => {
    var _a, _b;
    return ((_a = eventsMap.get(source.name)) == null ? void 0 : _a.accounts.passed) && TriggerCodeModal((_b = eventsMap.get(source.name)) == null ? void 0 : _b.accounts.passed, modalStore);
  };
  const click_handler_2 = (eventsMap, source) => {
    var _a, _b;
    return ((_a = eventsMap.get(source.name)) == null ? void 0 : _a.entitlements.started) && TriggerCodeModal((_b = eventsMap.get(source.name)) == null ? void 0 : _b.entitlements.started, modalStore);
  };
  const click_handler_3 = (eventsMap, source) => {
    var _a, _b;
    return ((_a = eventsMap.get(source.name)) == null ? void 0 : _a.entitlements.passed) && TriggerCodeModal((_b = eventsMap.get(source.name)) == null ? void 0 : _b.entitlements.passed, modalStore);
  };
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [
    data,
    modalStore,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
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
