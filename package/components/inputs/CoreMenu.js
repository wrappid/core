import React from "react";
import { nativeUseLocation } from "@wrappid/styled-components";
import { createMultiLevelMenu } from "../../utils/menuUtil";
import { CoreClasses } from "@wrappid/styles";
import CoreStack from "../layouts/CoreStack";

export default function NativeMenu(props) {
  const location = nativeUseLocation();

  const {
    menu, //menu data schema
    OnMenuClick, //menu click operation
    miniDrawer, //flag for mini drawer support
    multiLevel, //flag to allow collapse on multi level menu
    open, //menu open/close state for mini drawer
    openCollapse, //item level collapse open on close
    defaultSelection = null, // this is default selection for the item to be pre select
  } = props;

  const [selectedID, setSelectedID] = React.useState(defaultSelection);
  console.log("MENU", menu, openCollapse);

  return (
    <CoreStack
      direction="column"
      styleClasses={
        miniDrawer &&
        !open && [
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
          CoreClasses.PADDING.PL1,
        ]
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
        location.pathname
      )}
    </CoreStack>
  );
}
