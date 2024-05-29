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
    displayIcon = false, //flag to display menu item icon or not
    open, //menu open/close state for mini drawer
    openCollapse = {}, //item level collapse open on close
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
        routeRegistry, 
        displayIcon
      )}
    </CoreStack>
  );
}

CoreMenu.validProps = [
  { name: "menu", types: [{ type: "object" }] }, 
  { name: "OnMenuClick", types: [{ type: "function" }] }, 
  { name: "miniDrawer", types: [{ type: "boolean" }] }, 
  { name: "multiLevel", types: [{ type: "boolean" }] }, 
  { name: "open", types: [{ type: "boolean" }] }, 
  { name: "openCollapse", types: [{ type: "object" }] }, 
  { name: "defaultSelection", types: [{ type: "object" }] }, 
  { name: "noNavigation", types: [{ type: "boolean" }] }, 
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [{ type: "boolean" }],
  },
  {
    description:
      "An HTML element, PopoverVirtualElement, or a function that returns either. It's used to set the position of the popover.",
    name : "anchorEl",
    types: [{ default: "", type: "HTML element| func" }],
  },
  {
    description: "If true, the list item is focused during the first mount. Focus will also be triggered if the value changes from false to true.",
    name       : "autoFocus",
    types      : [
      {
        default    : true,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {  
    description: "Props applied to the MenuList element.",
    name       : "MenuListProps",
    types      : [
      {
        default: {},
        type   : "object"
      }
    ]
  },
  {
    description: "Callback fired when the component requests to be closed.",
    name       : "onClose", 
    types      : [{ type: "function" }]
  }, 
  {
    description: "classes prop applied to the Popover element.",
    name       : "PopoverClasses", 
    types      : [{ type: "object" }] 
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
  {
    description:
      "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.",
    name : "transitionDuration",
    types: [
      {
        default: "auto",
        type   : "number \
      | { appear?: number, enter?: number, exit?: number }",
      },
    ],
  },
  {
    description:
      "Props applied to the transition element. By default, the element is based on this Transition component.",
    name : "TransitionProps",
    types: [{ type: "object" }],
  },
  {
    description:
      "Props applied to the menu item whether to display icon infront of menu item label. By default, the displayIcon is false",
    name : "displayIcon",
    types: [{ type: "boolean" }],
  }
];

CoreMenu.invalidProps = [];
