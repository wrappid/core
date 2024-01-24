import {
  TOGGLE_LEFT_MENU,
  TOGGLE_LEFT_MENU_ITEM_STATE,
  TOGGLE_RIGHT_MENU
} from "../types/menuTypes";

export const toggleLeftMenuState = (menuState) => {
  return (dispatch) => {
    dispatch({ payload: menuState, type: TOGGLE_LEFT_MENU });
  };
};

export const toggleRightMenuState = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_RIGHT_MENU });
  };
};

export const toggleMenuItemState = (value) => {
  return (dispatch) => {
    dispatch({ payload: value, type: TOGGLE_LEFT_MENU_ITEM_STATE });
  };
};
