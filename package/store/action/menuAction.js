import {
  TOGGLE_LEFT_MENU,
  TOGGLE_LEFT_MENU_ITEM_STATE,
  TOGGLE_RIGHT_MENU,
} from "../types/menuTypes";

export const toggleLeftMenuState = (v) => {
  return (dispatch) => {
    dispatch({ payload: v, type: TOGGLE_LEFT_MENU });
  };
};

export const toggleRightMenuState = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_RIGHT_MENU });
  };
};

export const toggleMenuItemState = (v) => {
  return (dispatch) => {
    dispatch({ payload: v, type: TOGGLE_LEFT_MENU_ITEM_STATE });
  };
};
