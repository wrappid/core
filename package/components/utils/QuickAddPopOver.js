// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { getConfigurationObject } from "@wrappid/styles";

import {
  CoreMenuContext,
  CoreRouteRegistryContext
} from "../../config/contextHandler";
import { MENU_ITEM } from "../../config/menuConstants";
import { queryBuilder } from "../../utils/helper";
import { APP_PLATFORM } from "../../utils/themeUtil";
import CoreMenu from "../inputs/CoreMenu";

export default function QuickAddPopOver(props) {
  const navigate = nativeUseNavigate();
  const menuData = useContext(CoreMenuContext);
  const routeRegistry = useContext(CoreRouteRegistryContext);
  const { onClose } = props;

  function getLink(menuItem, routeRegistry) {
    if (menuItem?.type === MENU_ITEM || !menuItem?.type) {
      if (menuItem?.route && routeRegistry) {
        if (menuItem.params) {
          if (typeof menuItem.params === "string") {
            return routeRegistry[menuItem.route] + menuItem.params;
          } else {
            let url = queryBuilder(
              routeRegistry[menuItem.route],
              menuItem.params
            );

            if (typeof url === "string" && !url.startsWith("/")) {
              url = "/" + url;
            }
            return url;
          }
        } else {
          let url = routeRegistry[menuItem.route];

          if (typeof url === "string" && !url.startsWith("/")) {
            url = "/" + url;
          }
          return url;
        }
      } else {
        if (menuItem.link) {
          return menuItem.link;
        } else {
          return "";
        }
      }
    } else {
      return "javascript:void(0)";
    }
  }

  const OnMenuClick = item => {
    let config = getConfigurationObject();

    if (config?.wrappid?.platform === APP_PLATFORM) {
      navigate(getLink(item, routeRegistry));
    }
    onClose();
  };

  return (
    <CoreMenu
      menu={menuData?.quickAddMenu}
      miniDrawer={false}
      multiLevel={false}
      open={true}
      OnMenuClick={OnMenuClick}
    />
  );
}
