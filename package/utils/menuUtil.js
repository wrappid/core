// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getNativeMenuItem } from "@wrappid/native";

import {
  MENU_HEADER_ITEM,
  MENU_ITEM,
  MENU_ITEM_BUTTON,
  MENU_ITEM_ICON,
  MENU_ITEM_TEXT,
  MENU_ITEM_WRAPPER,
  MENU_PARENT_ITEM,
  MENU_SEPERATOR
} from "../config/menuConstants";

export function createMultiLevelMenu(
  menu,
  level,
  OnMenuClick,
  miniDrawer,
  multiLevel,
  open,
  openCollapse,
  selectedID,
  setSelectedID,
  locationPathname,
  theme,
  routeRegistry
) {
  return menu?.map((itemData) => {
    return (
      <>
        {getNativeMenuItem(
          itemData,
          level,
          OnMenuClick,
          miniDrawer,
          open,
          selectedID,
          setSelectedID,
          locationPathname,
          theme,
          {
            MENU_HEADER_ITEM,
            MENU_ITEM,
            MENU_ITEM_BUTTON,
            MENU_ITEM_ICON,
            MENU_ITEM_TEXT,
            MENU_ITEM_WRAPPER,
            MENU_PARENT_ITEM,
            MENU_SEPERATOR,
          },
          routeRegistry
        )}

        {multiLevel &&
          itemData?.Children &&
          itemData?.Children.length > 0 &&
          openCollapse[itemData.id] &&
          createMultiLevelMenu(
            itemData?.Children,
            level + 1,
            OnMenuClick,
            miniDrawer,
            multiLevel,
            open,
            openCollapse,
            selectedID,
            setSelectedID,
            locationPathname,
            theme,
            {
              MENU_HEADER_ITEM,
              MENU_ITEM,
              MENU_ITEM_BUTTON,
              MENU_ITEM_ICON,
              MENU_ITEM_TEXT,
              MENU_ITEM_WRAPPER,
              MENU_PARENT_ITEM,
              MENU_SEPERATOR,
            },
            routeRegistry
          )}
      </>
    );
  });
}
