import { c as create_ssr_component, p as is_promise, q as noop, v as validate_component, b as each, e as escape, d as add_attribute, l as createEventDispatcher } from './ssr-pGtI3Kui.js';
import './ProgressBar.svelte_svelte_type_style_lang-Lwm3XjGR.js';
import { P as Progress } from './Progress-Bh0zkgr8.js';
import { e as createOnPageChange, h as createOnAmountChange, i as createOnGo, f as formatDate } from './Utils-BGShQy8a.js';
import { g as getModalStore } from './stores2-DhhqrV6P.js';
import './index2-CcAcUxny.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';

const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
const leftAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>`;
const rightAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>`;
const cBase = "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4";
const cLabel = "w-full md:w-auto";
const Paginator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesButtonActive;
  let classesBase;
  let classesLabel;
  let classesSelect;
  let classesControls;
  const dispatch = createEventDispatcher();
  let { settings = {
    page: 0,
    limit: 5,
    size: 0,
    amounts: [1, 2, 5, 10]
  } } = $$props;
  let { disabled = false } = $$props;
  let { showPreviousNextButtons = true } = $$props;
  let { showFirstLastButtons = false } = $$props;
  let { showNumerals = false } = $$props;
  let { maxNumerals = 1 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { select = "select min-w-[150px]" } = $$props;
  let { amountText = "Items" } = $$props;
  let { regionControl = "btn-group" } = $$props;
  let { controlVariant = "variant-filled" } = $$props;
  let { controlSeparator = "" } = $$props;
  let { active = "variant-filled-primary" } = $$props;
  let { buttonClasses = "!px-3 !py-1.5 fill-current" } = $$props;
  let { buttonTextPrevious = leftArrow } = $$props;
  let { buttonTextNext = rightArrow } = $$props;
  let { buttonTextFirst = leftAngles } = $$props;
  let { buttonTextLast = rightAngles } = $$props;
  let { separatorText = "of" } = $$props;
  let { labelFirst = "First page" } = $$props;
  let { labelPrevious = "Previous page" } = $$props;
  let { labelNext = "Next page" } = $$props;
  let { labelLast = "Last page" } = $$props;
  let lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
  let controlPages = getNumerals();
  function onChangeLength() {
    dispatch("amount", settings.limit);
    lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
    if (settings.page > lastPage) {
      settings.page = lastPage;
    }
    controlPages = getNumerals();
  }
  function getFullNumerals() {
    const pages = [];
    for (let index = 0; index <= lastPage; index++) {
      pages.push(index);
    }
    return pages;
  }
  function getNumerals() {
    const pages = [];
    const isWithinLeftSection = settings.page < maxNumerals + 2;
    const isWithinRightSection = settings.page > lastPage - (maxNumerals + 2);
    if (lastPage <= maxNumerals * 2 + 1)
      return getFullNumerals();
    pages.push(0);
    if (!isWithinLeftSection)
      pages.push(-1);
    if (isWithinLeftSection || isWithinRightSection) {
      const sectionStart = isWithinLeftSection ? 1 : lastPage - (maxNumerals + 2);
      const sectionEnd = isWithinRightSection ? lastPage - 1 : maxNumerals + 2;
      for (let i = sectionStart; i <= sectionEnd; i++) {
        pages.push(i);
      }
    } else {
      for (let i = settings.page - maxNumerals; i <= settings.page + maxNumerals; i++) {
        pages.push(i);
      }
    }
    if (!isWithinRightSection)
      pages.push(-1);
    pages.push(lastPage);
    return pages;
  }
  function updateSize(size) {
    lastPage = Math.max(0, Math.ceil(size / settings.limit - 1));
    controlPages = getNumerals();
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.showPreviousNextButtons === void 0 && $$bindings.showPreviousNextButtons && showPreviousNextButtons !== void 0)
    $$bindings.showPreviousNextButtons(showPreviousNextButtons);
  if ($$props.showFirstLastButtons === void 0 && $$bindings.showFirstLastButtons && showFirstLastButtons !== void 0)
    $$bindings.showFirstLastButtons(showFirstLastButtons);
  if ($$props.showNumerals === void 0 && $$bindings.showNumerals && showNumerals !== void 0)
    $$bindings.showNumerals(showNumerals);
  if ($$props.maxNumerals === void 0 && $$bindings.maxNumerals && maxNumerals !== void 0)
    $$bindings.maxNumerals(maxNumerals);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.amountText === void 0 && $$bindings.amountText && amountText !== void 0)
    $$bindings.amountText(amountText);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.controlVariant === void 0 && $$bindings.controlVariant && controlVariant !== void 0)
    $$bindings.controlVariant(controlVariant);
  if ($$props.controlSeparator === void 0 && $$bindings.controlSeparator && controlSeparator !== void 0)
    $$bindings.controlSeparator(controlSeparator);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.buttonClasses === void 0 && $$bindings.buttonClasses && buttonClasses !== void 0)
    $$bindings.buttonClasses(buttonClasses);
  if ($$props.buttonTextPrevious === void 0 && $$bindings.buttonTextPrevious && buttonTextPrevious !== void 0)
    $$bindings.buttonTextPrevious(buttonTextPrevious);
  if ($$props.buttonTextNext === void 0 && $$bindings.buttonTextNext && buttonTextNext !== void 0)
    $$bindings.buttonTextNext(buttonTextNext);
  if ($$props.buttonTextFirst === void 0 && $$bindings.buttonTextFirst && buttonTextFirst !== void 0)
    $$bindings.buttonTextFirst(buttonTextFirst);
  if ($$props.buttonTextLast === void 0 && $$bindings.buttonTextLast && buttonTextLast !== void 0)
    $$bindings.buttonTextLast(buttonTextLast);
  if ($$props.separatorText === void 0 && $$bindings.separatorText && separatorText !== void 0)
    $$bindings.separatorText(separatorText);
  if ($$props.labelFirst === void 0 && $$bindings.labelFirst && labelFirst !== void 0)
    $$bindings.labelFirst(labelFirst);
  if ($$props.labelPrevious === void 0 && $$bindings.labelPrevious && labelPrevious !== void 0)
    $$bindings.labelPrevious(labelPrevious);
  if ($$props.labelNext === void 0 && $$bindings.labelNext && labelNext !== void 0)
    $$bindings.labelNext(labelNext);
  if ($$props.labelLast === void 0 && $$bindings.labelLast && labelLast !== void 0)
    $$bindings.labelLast(labelLast);
  classesButtonActive = (page) => {
    return page === settings.page ? `${active} pointer-events-none` : "";
  };
  {
    onChangeLength();
  }
  {
    updateSize(settings.size);
  }
  classesBase = `${cBase} ${justify} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesSelect = `${select}`;
  classesControls = `${regionControl} ${controlVariant} ${controlSeparator}`;
  return `<div class="${"paginator " + escape(classesBase, true)}" data-testid="paginator"> ${settings.amounts.length ? `<label class="${"paginator-label " + escape(classesLabel, true)}"><select class="${"paginator-select " + escape(classesSelect, true)}" ${disabled ? "disabled" : ""} aria-label="Select Amount">${each(settings.amounts, (amount) => {
    return `<option${add_attribute("value", amount, 0)}>${escape(amount)} ${escape(amountText)}</option>`;
  })}</select></label>` : ``}  <div class="${"paginator-controls " + escape(classesControls, true)}"> ${showFirstLastButtons ? `<button type="button"${add_attribute("aria-label", labelFirst, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || settings.page === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextFirst}<!-- HTML_TAG_END --></button>` : ``}  ${showPreviousNextButtons ? `<button type="button"${add_attribute("aria-label", labelPrevious, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || settings.page === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextPrevious}<!-- HTML_TAG_END --></button>` : ``}  ${showNumerals === false ? ` <button type="button" class="${escape(buttonClasses, true) + " pointer-events-none !text-sm"}">${escape(settings.page * settings.limit + 1)}-${escape(Math.min(settings.page * settings.limit + settings.limit, settings.size))} <span class="opacity-50">${escape(separatorText)} ${escape(settings.size)}</span></button>` : ` ${each(controlPages, (page) => {
    return `<button type="button" ${disabled ? "disabled" : ""} class="${escape(buttonClasses, true) + " " + escape(classesButtonActive(page), true)}">${escape(page >= 0 ? page + 1 : "...")} </button>`;
  })}`}  ${showPreviousNextButtons ? `<button type="button"${add_attribute("aria-label", labelNext, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || (settings.page + 1) * settings.limit >= settings.size ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextNext}<!-- HTML_TAG_END --></button>` : ``}  ${showFirstLastButtons ? `<button type="button"${add_attribute("aria-label", labelLast, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || (settings.page + 1) * settings.limit >= settings.size ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextLast}<!-- HTML_TAG_END --></button>` : ``}</div></div>`;
});
const Paginator_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totalCount = 0 } = $$props;
  let { settings } = $$props;
  let { onPageChange } = $$props;
  let { onAmountChange } = $$props;
  let { onGo } = $$props;
  let { filters = void 0 } = $$props;
  let { sorters = void 0 } = $$props;
  if ($$props.totalCount === void 0 && $$bindings.totalCount && totalCount !== void 0)
    $$bindings.totalCount(totalCount);
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.onPageChange === void 0 && $$bindings.onPageChange && onPageChange !== void 0)
    $$bindings.onPageChange(onPageChange);
  if ($$props.onAmountChange === void 0 && $$bindings.onAmountChange && onAmountChange !== void 0)
    $$bindings.onAmountChange(onAmountChange);
  if ($$props.onGo === void 0 && $$bindings.onGo && onGo !== void 0)
    $$bindings.onGo(onGo);
  if ($$props.filters === void 0 && $$bindings.filters && filters !== void 0)
    $$bindings.filters(filters);
  if ($$props.sorters === void 0 && $$bindings.sorters && sorters !== void 0)
    $$bindings.sorters(sorters);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="p-4 flex flex-row flex-wrap justify-between gap-4"><div class="flex flex-row gap-1">${filters !== void 0 ? `<input class="input" title="Filter" type="text" placeholder="Filter"${add_attribute("value", filters, 0)}>` : ``} ${sorters !== void 0 ? `<input class="input" title="Sorter" type="text" placeholder="Sorter"${add_attribute("value", sorters, 0)}>` : ``} ${filters !== void 0 || sorters !== void 0 ? `<button class="btn variant-filled-primary !text-white" data-svelte-h="svelte-150wg83">Go</button>` : ``}</div> <p class="my-auto">Total Count: ${escape(totalCount)}</p> ${validate_component(Paginator, "Paginator").$$render(
      $$result,
      {
        showNumerals: true,
        maxNumerals: 1,
        showFirstLastButtons: true,
        showPreviousNextButtons: true,
        settings
      },
      {
        settings: ($$value) => {
          settings = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let onPageChange;
  let onAmountChange;
  let onGo;
  let { data } = $$props;
  getModalStore();
  let sorters = data.params.sorters || "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    onPageChange = createOnPageChange({ ...data.params, filters: "", sorters }, "/home/reports/list-of-identities");
    onAmountChange = createOnAmountChange({ ...data.params, filters: "", sorters }, "/home/reports/list-of-identities");
    onGo = createOnGo({ ...data.params, filters: "", sorters }, "/home/reports/list-of-identities");
    $$rendered = `<div class="flex justify-center flex-col align-middle gap-2"><div class="card p-4" data-svelte-h="svelte-jttew8"><p class="text-2xl text-center">List of all identities</p></div> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="grid h-full place-content-center p-8">${validate_component(Progress, "Progress").$$render($$result, { width: "w-[100px]" }, {}, {})}</div> `;
      }
      return function(reportData) {
        return ` ${function(__value2) {
          if (is_promise(__value2)) {
            __value2.then(null, noop);
            return ``;
          }
          return function(totalCount) {
            return ` ${totalCount > 250 || Number(data.params.limit) < totalCount ? `<div class="card p-4">${validate_component(Paginator_1, "Paginator").$$render(
              $$result,
              {
                onAmountChange,
                onGo,
                onPageChange,
                settings: {
                  page: Number(data.params.page),
                  limit: Number(data.params.limit),
                  size: totalCount,
                  amounts: [5, 10, 50, 100, 250]
                },
                totalCount,
                sorters
              },
              {
                sorters: ($$value) => {
                  sorters = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>` : ``} `;
          }(__value2);
        }(data.totalCount)} ${reportData.length === 0 ? `<div class="card p-4" data-svelte-h="svelte-1el8epx"><p class="text-center text-success-500">No inactive identities with access found</p></div>` : `<div class="table-container"><table class="table"><thead class="table-head" data-svelte-h="svelte-4s8hul"><th>Name</th> <th>DisplayName</th> <th>Sources</th> <th>Created</th> <th>Modified</th> <th>Access Count</th> <th>Entitlement Count</th> <th>Role Count</th> <th></th></thead> <tbody class="table-body">${each(reportData, (identity) => {
          return `<tr><td>${escape(identity.name)}</td> <td>${escape(identity.displayName)}</td> <td>${escape(identity.accounts?.map((account) => account.source?.name).join(", "))}</td> <td>${escape(formatDate(identity.created))}</td> <td>${escape(formatDate(identity.modified))}</td> <td>${escape(identity.accessCount)}</td> <td>${escape(identity.entitlementCount)}</td> <td>${escape(identity.roleCount)}</td> <td><div class="flex flex-col justify-center gap-1"><button class="btn btn-sm variant-filled-primary text-sm !text-white" data-svelte-h="svelte-oq65oq">View</button> </div></td> </tr>`;
        })}</tbody></table></div>`} `;
      }(__value);
    }(data.reportData)}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dimc0uDg.js.map
