import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-pGtI3Kui.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';

const css$1 = {
  code: ".sliding-text.svelte-1fdnh10.svelte-1fdnh10.svelte-1fdnh10{display:inline-block;position:relative;line-height:1em;height:1em}.sliding-text.svelte-1fdnh10>span.svelte-1fdnh10.svelte-1fdnh10{height:1em;display:inline-block;overflow-y:hidden}.sliding-text.svelte-1fdnh10>span.svelte-1fdnh10>span.svelte-1fdnh10{text-align:center;transition:all var(--interval) var(--ease);position:relative;height:100%;white-space:pre;top:calc(var(--index) * -2em)}",
  map: null
};
const AnimatedCounter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  initialValue ? values.indexOf(initialValue) : index;
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.transitionInterval === void 0 && $$bindings.transitionInterval && transitionInterval !== void 0)
    $$bindings.transitionInterval(transitionInterval);
  if ($$props.startImmediately === void 0 && $$bindings.startImmediately && startImmediately !== void 0)
    $$bindings.startImmediately(startImmediately);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.ease === void 0 && $$bindings.ease && ease !== void 0)
    $$bindings.ease(ease);
  if ($$props.random === void 0 && $$bindings.random && random !== void 0)
    $$bindings.random(random);
  if ($$props.initialValue === void 0 && $$bindings.initialValue && initialValue !== void 0)
    $$bindings.initialValue(initialValue);
  $$result.css.add(css$1);
  contentValues = values.join("\n\n");
  intervalInMs = `${transitionInterval}ms`;
  return `<span class="${"sliding-text " + escape($$props.class, true) + " svelte-1fdnh10"}"><span style="${"--index: " + escape(index, true) + "; --interval: " + escape(intervalInMs, true) + "; --ease:" + escape(ease, true)}" class="svelte-1fdnh10"><span class="svelte-1fdnh10">${escape(contentValues)}</span></span> </span>`;
});
const css = {
  code: ".skills.svelte-1285lhc{display:flex;justify-items:start;align-items:center;flex-wrap:wrap}.custom-skill{display:inline-block;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="grid place-content-center h-[80vh]"><div class="card card-glass z-50 space-y-5 p-4 md:p-10"><div class="skills svelte-1285lhc">${validate_component(AnimatedCounter, "AnimatedCounter").$$render(
    $$result,
    {
      interval: 1500,
      transitionInterval: 10,
      startImmediately: true,
      values: data.counterList,
      random: true,
      class: "custom-skill px-2"
    },
    {},
    {}
  )}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BO1Hy4mz.js.map
