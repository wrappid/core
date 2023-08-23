import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation } from "@wrappid/native";

import { ThemeContext } from "../../config/contextHandler";
import CoreClasses from "../../styles/CoreClasses";
import { createMultiLevelMenu } from "../../utils/menuUtil";
import CoreStack from "../layouts/CoreStack";

export default function CoreMenu(props) {
  const {
    menu, //menu data schema
    OnMenuClick, //menu click operation
    miniDrawer, //flag for mini drawer support
    multiLevel, //flag to allow collapse on multi level menu
    open, //menu open/close state for mini drawer
    openCollapse, //item level collapse open on close
    defaultSelection = null, // this is default selection for the item to be pre select
    noNavigation = false,
  } = props;

  let location = {};

  if (!noNavigation) {
    try {
      location = nativeUseLocation();
    } catch (err) {
      // -- console.log("No navigation");
    }
  }
  const [selectedID, setSelectedID] = React.useState(defaultSelection);

  // -- console.log("MENU", menu, openCollapse);
  const theme = useContext(ThemeContext);

  return (
    <CoreStack
      direction="column"
      styleClasses={
        miniDrawer && !open && [CoreClasses.ALIGNMENT.ALIGN_ITEMS_START, CoreClasses.PADDING.PL1]
      }
    >
      {createMultiLevelMenu(
        menu,
        0,
        OnMenuClick,
        miniDrawer,
        multiLevel,
        open,
        openCollapse,
        selectedID,
        setSelectedID,
        location?.pathname,
        theme
      )}
    </CoreStack>
  );
}
