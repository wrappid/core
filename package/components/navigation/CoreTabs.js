// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTabs } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTabs(props) {
  props = sanitizeComponentProps(CoreTabs, props);
  return <NativeTabs {...props} />;
}
CoreTabs.validProps = [
  {
    description:
      "Callback fired when the component mounts. This is useful when you want to trigger an action programmatically. It supports two actions: updateIndicator() and updateScrollButtons()",
    name : "action",
    types: [{ type: "ref" }],
  },
  {
    description:
      "If true, the scroll buttons aren't forced hidden on mobile. By default the scroll buttons are hidden on mobile and takes precedence over scrollButtons.",
    name : "allowScrollButtonsMobile",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description: "The label for the Tabs as a string.",
    name       : "aria-label",
    types      : [{ type: "string" }],
  },
  {
    description:
      "An id or list of ids separated by a space that label the Tabs.",
    name : "aria-labelledby",
    types: [{ type: "string" }],
  },
  {
    description:
      "If true, the tabs are centered. This prop is intended for large views.",
    name : "centered",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
  },
  {
    description: "Determines the color of the indicator.",
    name       : "indicatorColor",
    types      : [
      {
        default    : "primary'",
        type       : "string",
        validValues: ["primary", "secondary"],
      },
    ],
  },
  {
    description:
      "Callback fired when the value changes.Signature:function(event: React.SyntheticEvent, value: any) => voidevent The event source of the callback. Warning: This is a generic event not a change event.value We default to the index of the child (number)",
    name : "onChange",
    types: [{ type: "function" }],
  },
  {
    description: "The component orientation (layout flow direction).",
    name       : "orientation",
    types      : [
      {
        default    : "horizontal'",
        type       : "string",
        validValues: ["horizontal", "vertical"],
      },
    ],
  },
  {
    description: "The component used to render the scroll buttons.",
    name       : "ScrollButtonComponent",
    types      : [{ default: "TabScrollButton", type: "elementType" }],
  },
  {
    description:
      "Determine behavior of scroll buttons when tabs are set to scroll:auto will only present them when not all the items are visible.true will always present them.false will never present them.By default the scroll buttons are hidden on mobile. This behavior can be disabled with allowScrollButtonsMobile.",
    name : "scrollButtons",
    types: [
      {
        default    : "auto'",
        type       : "string",
        validValues: ["auto", "false", "true"],
      },
    ],
  },
  {
    description:
      "If true the selected tab changes on focus. Otherwise it only changes on activation.",
    name : "selectionFollowsFocus",
    types: [{ default: "", type: "boolean" }],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.",
    name : "slotProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["ScrollButtonComponent{ endScrollButtonIcon?: func| object, startScrollButtonIcon?: func| object }"],
      },
    ],
  },
  {
    description: "The components used for each slot inside.",
    name       : "slots",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: ["scrollButtons{ EndScrollButtonIcon?: elementType, StartScrollButtonIcon?: elementType }"],
      },
    ],
  },
  {
    description: "Props applied to the tab indicator element.",
    name       : "TabIndicatorProps",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description: "Props applied to the TabScrollButton element.",
    name       : "TabScrollButtonProps",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description: "Determines the color of the Tab.",
    name       : "textColor",
    types      : [
      {
        default    : "primary'",
        type       : "string",
        validValues: ["nherit", "primary", "secondary"],
      },
    ],
  },
  {
    description:
      "The value of the currently selected Tab. If you don't want any selected Tab, you can set this prop to false.",
    name : "value",
    types: [{ type: "any" }],
  },
  {
    description:
      "Determines additional display behavior of the tabs:scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.standard will render the default state.",
    name : "variant",
    types: [
      {
        default    : "standard'",
        type       : "string",
        validValues: ["fullWidth", "scrollable", "standard"],
      },
    ],
  },
  {
    description:
      "If true, the scrollbar is visible. It can be useful when displaying a long vertical list of tabs.",
    name : "visibleScrollbar",
    types: [{ default: false, type: "boolean" }],
  },
];
CoreTabs.invalidProps = ["sx", "classes"];
