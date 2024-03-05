import { g as goto } from './client-CQ5E_ugM.js';

function formatDate(date) {
  if (!date)
    return "N/A";
  return new Date(date).toLocaleString();
}
function getLimit(url) {
  return url.searchParams.get("limit") || "5";
}
function getFilters(url) {
  return url.searchParams.get("filters") || "";
}
function getSorters(url) {
  return url.searchParams.get("sorters") || "";
}
function getPage(url) {
  return url.searchParams.get("page") || "0";
}
function createOnPageChange(params, path) {
  return function onPageChange(e) {
    const urlParams = new URLSearchParams();
    urlParams.set("page", e.detail);
    urlParams.set("limit", params.limit);
    urlParams.set("sorters", params.sorters);
    urlParams.set("filters", params.filters);
    console.log(`${path}?${urlParams.toString()}`);
    goto(`${path}?${urlParams.toString()}`);
  };
}
function createOnAmountChange(params, path) {
  return function onAmountChange(e) {
    const urlParams = new URLSearchParams();
    urlParams.set("page", params.page);
    urlParams.set("limit", e.detail);
    urlParams.set("sorters", params.sorters);
    urlParams.set("filters", params.filters);
    console.log(`${path}?${urlParams.toString()}`);
    goto(`${path}?${urlParams.toString()}`);
  };
}
function createOnGo(params, path) {
  return function onGo(e) {
    if (e.type !== "click" && e.key !== "Enter")
      return;
    const urlParams = new URLSearchParams();
    if (params.page != "")
      urlParams.set("page", params.page);
    if (params.limit != "")
      urlParams.set("limit", params.limit);
    if (params.sorters != "")
      urlParams.set("sorters", params.sorters);
    if (params.filters != "")
      urlParams.set("filters", params.filters);
    console.log(`${path}?${urlParams.toString()}`);
    goto(`${path}?${urlParams.toString()}`);
  };
}
function capitalize(s) {
  if (typeof s !== "string")
    return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function parseInitials(name) {
  const initials = name.match(/\b(\w)/g) || ["A", "U"];
  return initials.join("");
}

export { getLimit as a, getSorters as b, getFilters as c, capitalize as d, createOnPageChange as e, formatDate as f, getPage as g, createOnAmountChange as h, createOnGo as i, parseInitials as p };
//# sourceMappingURL=Utils-BGShQy8a.js.map
