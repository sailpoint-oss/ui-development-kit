import { s as safe_not_equal, e as element, t as text, c as claim_element, b as children, d as claim_text, g as detach, i as attr, K as set_style, j as insert_hydration, k as append_hydration, l as set_data, o as noop, p as onMount, N as assign, O as exclude_internal_props } from "../chunks/scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, t as transition_in, a as transition_out, e as destroy_component } from "../chunks/index.DdnDjIf5.js";
import { i as invalidateAll, g as goto } from "../chunks/entry.Cs_QM1XO.js";
function create_fragment$1(ctx) {
  let span2;
  let span1;
  let span0;
  let t;
  let span2_class_value;
  return {
    c() {
      span2 = element("span");
      span1 = element("span");
      span0 = element("span");
      t = text(
        /*contentValues*/
        ctx[3]
      );
      this.h();
    },
    l(nodes) {
      span2 = claim_element(nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      span1 = claim_element(span2_nodes, "SPAN", { style: true, class: true });
      var span1_nodes = children(span1);
      span0 = claim_element(span1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t = claim_text(
        span0_nodes,
        /*contentValues*/
        ctx[3]
      );
      span0_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      span2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "svelte-1fdnh10");
      set_style(
        span1,
        "--index",
        /*index*/
        ctx[1]
      );
      set_style(
        span1,
        "--interval",
        /*intervalInMs*/
        ctx[2]
      );
      set_style(
        span1,
        "--ease",
        /*ease*/
        ctx[0]
      );
      attr(span1, "class", "svelte-1fdnh10");
      attr(span2, "class", span2_class_value = "sliding-text " + /*$$props*/
      ctx[4].class + " svelte-1fdnh10");
    },
    m(target, anchor) {
      insert_hydration(target, span2, anchor);
      append_hydration(span2, span1);
      append_hydration(span1, span0);
      append_hydration(span0, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*contentValues*/
      8)
        set_data(
          t,
          /*contentValues*/
          ctx2[3]
        );
      if (dirty & /*index*/
      2) {
        set_style(
          span1,
          "--index",
          /*index*/
          ctx2[1]
        );
      }
      if (dirty & /*intervalInMs*/
      4) {
        set_style(
          span1,
          "--interval",
          /*intervalInMs*/
          ctx2[2]
        );
      }
      if (dirty & /*ease*/
      1) {
        set_style(
          span1,
          "--ease",
          /*ease*/
          ctx2[0]
        );
      }
      if (dirty & /*$$props*/
      16 && span2_class_value !== (span2_class_value = "sliding-text " + /*$$props*/
      ctx2[4].class + " svelte-1fdnh10")) {
        attr(span2, "class", span2_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(span2);
      }
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let contentValues;
  let intervalInMs;
  let { values = Array.from({ length: 100 }, (_, i) => new String(i).padStart(3, "0")) } = $$props;
  let { interval = 1e3 } = $$props;
  let { transitionInterval = 700 } = $$props;
  let { startImmediately = false } = $$props;
  let { direction = "down" } = $$props;
  let { loop = true } = $$props;
  let { ease = "cubic-bezier(1, 0, 0, 1)" } = $$props;
  let { random = false } = $$props;
  let { initialValue = void 0 } = $$props;
  let index = direction === "up" ? 0 : values.length - 1;
  let lastIndex = initialValue ? values.indexOf(initialValue) : index;
  onMount(() => {
    const start = () => {
      $$invalidate(1, index = lastIndex + (direction === "up" ? 1 : -1));
      if (!loop && (index === values.length - 1 || index === 0)) {
        clearInterval(timer);
        return;
      }
      if (loop && index === values.length) {
        $$invalidate(1, index = 0);
      }
      if (loop && index === -1) {
        $$invalidate(1, index = values.length - 1);
      }
      if (random) {
        $$invalidate(1, index = Math.floor(Math.random() * values.length));
      }
      lastIndex = index;
    };
    if (startImmediately) {
      start();
    }
    let timer = setInterval(start, interval);
    return () => clearInterval(timer);
  });
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("values" in $$new_props)
      $$invalidate(5, values = $$new_props.values);
    if ("interval" in $$new_props)
      $$invalidate(6, interval = $$new_props.interval);
    if ("transitionInterval" in $$new_props)
      $$invalidate(7, transitionInterval = $$new_props.transitionInterval);
    if ("startImmediately" in $$new_props)
      $$invalidate(8, startImmediately = $$new_props.startImmediately);
    if ("direction" in $$new_props)
      $$invalidate(9, direction = $$new_props.direction);
    if ("loop" in $$new_props)
      $$invalidate(10, loop = $$new_props.loop);
    if ("ease" in $$new_props)
      $$invalidate(0, ease = $$new_props.ease);
    if ("random" in $$new_props)
      $$invalidate(11, random = $$new_props.random);
    if ("initialValue" in $$new_props)
      $$invalidate(12, initialValue = $$new_props.initialValue);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*values*/
    32) {
      $$invalidate(3, contentValues = values.join("\n\n"));
    }
    if ($$self.$$.dirty & /*transitionInterval*/
    128) {
      $$invalidate(2, intervalInMs = `${transitionInterval}ms`);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    ease,
    index,
    intervalInMs,
    contentValues,
    $$props,
    values,
    interval,
    transitionInterval,
    startImmediately,
    direction,
    loop,
    random,
    initialValue
  ];
}
class AnimatedCounter extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      values: 5,
      interval: 6,
      transitionInterval: 7,
      startImmediately: 8,
      direction: 9,
      loop: 10,
      ease: 0,
      random: 11,
      initialValue: 12
    });
  }
}
function create_fragment(ctx) {
  let div2;
  let div1;
  let div0;
  let animatedcounter;
  let current;
  animatedcounter = new AnimatedCounter({
    props: {
      interval: 1500,
      transitionInterval: 10,
      startImmediately: true,
      values: (
        /*data*/
        ctx[0].counterList
      ),
      random: true,
      class: "custom-skill px-2"
    }
  });
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(animatedcounter.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(animatedcounter.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "skills svelte-1285lhc");
      attr(div1, "class", "card card-glass z-50 space-y-5 p-4 md:p-10");
      attr(div2, "class", "grid place-content-center h-[80vh]");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      mount_component(animatedcounter, div0, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const animatedcounter_changes = {};
      if (dirty & /*data*/
      1)
        animatedcounter_changes.values = /*data*/
        ctx2[0].counterList;
      animatedcounter.$set(animatedcounter_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(animatedcounter.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(animatedcounter.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      destroy_component(animatedcounter);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  console.log(data);
  setTimeout(
    async () => {
      if (!data.tokenDetails)
        await invalidateAll();
      goto(`/home`);
    },
    1e3
  );
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
