import { SEARCH_RESULT, SEARCH_RELOAD, SEARCH_NAME } from "./constant";

const initState = {
  searchResult: [],
  searchReload: false,
  searchName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    case SEARCH_RELOAD:
      return {
        ...state,
        searchReload: action.payload,
      };
    case SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };

    default:
      throw new Error("INvalid Action");
  }
}

export { initState };
export default reducer;
