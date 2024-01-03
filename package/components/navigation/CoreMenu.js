import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { ThemeContext } from "@wrappid/styles";

import { CoreRouteRegistryContext } from "../../config/contextHandler";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { createMultiLevelMenu } from "../../utils/menuUtil";
import CoreStack from "../layouts/CoreStack";

export default function CoreMenu(props) {
  props = sanitizeComponentProps(CoreMenu, props);
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

  const routeRegistry = useContext(CoreRouteRegistryContext);

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
        theme,
        routeRegistry
      )}
    </CoreStack>
  );
}

CoreMenu.validProps = [
  {
    description: "A ref with imperative actions that can be performed on the menu.",
    name       : "actions",
    types      : [{ default: "", type: "ref" }],
  },
  {
    description: "Side from which the drawer will appear.",
    name       : "anchor",
    types      : [
      {
        default    : "left'",
        type       : "string",
        validValues: ["bottom", "left", "right", "top"],
      },
    ],
  },
  {
    description: "Function called when the items displayed in the menu change.",
    name       : "onItemChange",
    types      : "function",
  },
  {
    description: "The props used for each slot inside the Badge.",
    name       : "slotProps",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: [
          {
            badge: "func",
            root : "func",
          },
        ],
      },
    ],
  },
  {
    description:
      "The components used for each slot inside the Badge. Either a string to use a HTML element or a component.",
    name : "slot",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: [{ badge: "elementType", root: "elementType" }],
      },
    ],
  },
];

CoreMenu.invalidProps = [];
