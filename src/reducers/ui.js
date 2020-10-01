import * as types from './../constants/ui';
const initialState = {
  showLoading: false,
  showSideBar: false,
  showDarkMod: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showLoading:
      return {
        ...state,
        showLoading: true,
      };
    case types.hideLoading:
      return {
        ...state,
        showLoading: false,
      };
    case types.showSideBar:
      return {
        ...state,
        showSideBar: true,
      };
    case types.hideSideBar:
      return {
        ...state,
        showSideBar: false,
      };
    case types.SHOW_DARKMOD:
      return {
        ...state,
        showDarkMod: true,
      };
    case types.HIDE_DARKMOD:
      return {
        ...state,
        showDarkMod: false,
      };
    default:
      return state;
  }
};
export default reducer;
