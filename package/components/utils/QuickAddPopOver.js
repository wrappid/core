// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import {
  CoreMenuContext,
  CoreRoutesContext
} from "../../config/contextHandler";
import { MENU_ITEM } from "../../config/menuConstants";
import { queryBuilder } from "../../utils/helper";
import { APP_PLATFORM } from "../../utils/themeUtil";
import CoreMenu from "../navigation/CoreMenu";

export default function QuickAddPopOver(props) {
  const navigate = nativeUseNavigate();
  const menuData = useContext(CoreMenuContext);
  const contextRoutes = useContext(CoreRoutesContext);
  
  let { config } = React.useContext(WrappidDataContext);
  
  const { onClose } = props;

  function getLink(menuItem, contextRoutes) {
    if (menuItem?.type === MENU_ITEM || !menuItem?.type) {
      if (menuItem?.route && contextRoutes && Object.keys(contextRoutes).includes(menuItem?.route)) {
        if (menuItem.params) {
          if (typeof menuItem.params === "string") {
            return contextRoutes[menuItem.route].route + menuItem.params;
          } else {
            let url = queryBuilder(
              contextRoutes[menuItem.route].route,
              menuItem.params
            );

            if (typeof url === "string" && !url.startsWith("/")) {
              url = "/" + url;
            }
            return url;
          }
        } else {
          let url = contextRoutes[menuItem.route].route;

          if (typeof url === "string" && !url.startsWith("/")) {
            url = "/" + url;
          }
          return url;
        }
      } else {
        if (menuItem.link) {
          return menuItem.link;
        }
      }
    }
    return "javascript:void(0)";
  }

  const OnMenuClick = item => {

    if (config?.wrappid?.platform === APP_PLATFORM) {
      navigate(getLink(item, contextRoutes));
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
      displayIcon={true}
    />
  );
}
