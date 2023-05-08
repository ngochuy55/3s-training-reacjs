import { SEARCH_RESULT, SEARCH_RELOAD, SEARCH_NAME } from "./constant";

export const setSearchResult = (payload) => ({
  type: SEARCH_RESULT,
  payload,
});
export const setSearchReload = (payload) => ({
  type: SEARCH_RELOAD,
  payload,
});
export const setSearchName = (payload) => ({
  type: SEARCH_NAME,
  payload,
});
