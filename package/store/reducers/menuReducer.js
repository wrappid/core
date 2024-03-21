import { LOGOUT_SUCCESS } from "../types/authTypes";
import {
  BUILD_MENU_ROLE_PERMISSIONS,
  TOGGLE_LEFT_MENU,
  TOGGLE_LEFT_MENU_ITEM_STATE,
  TOGGLE_RIGHT_MENU
} from "../types/menuTypes";

const initState = {
  collapse     : {},
  leftMenuOpen : true,
  menu         : [],
  rightMenuOpen: false,
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case BUILD_MENU_ROLE_PERMISSIONS: {
      let data = [];

      if (action?.payload?.data?.permissions) {
        data = action.payload.data.permissions;
      }
      return {
        ...state,
        menu: data,
      };
    }

    case TOGGLE_LEFT_MENU:
      return {
        ...state,
        leftMenuOpen:
          action.payload !== null && action.payload !== undefined
            ? action.payload
            : !state.leftMenuOpen,
      };

    case TOGGLE_LEFT_MENU_ITEM_STATE:
      return {
        ...state,
        collapse: {
          ...state?.collapse,
          [action.payload.id]: state.collapse
            ? !state.collapse[action.payload.id]
            : true,
        },
      };

    case TOGGLE_RIGHT_MENU:
      return {
        ...state,
        rightMenuOpen: !state.rightMenuOpen,
      };

    case LOGOUT_SUCCESS:
      return initState;

    default:
      return state;
  }
};

export default menuReducer;
