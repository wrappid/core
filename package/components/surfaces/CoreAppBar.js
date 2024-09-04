// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAppBar } from "@wrappid/native";

import DefaultAppBarContent from "./DefaultAppBarContent";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAppBar(props) {
  props = sanitizeComponentProps(CoreAppBar, props);
  const { advanceMode = false, children, ...restProps } = props;

  return (
    <>
      <NativeAppBar {...restProps}>
        {advanceMode ? children : <DefaultAppBarContent {...props} />}
      </NativeAppBar>
    </>
  );
}

CoreAppBar.validProps = [
  {
    description: "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name       : "color",
    types      : [
      {
        default    : "primary'",
        type       : "string",
        validValues: [
          "inherit",
          "primary",
          "secondary",
          "transparent",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    ],
  },
  {
    description: "If true, the color prop is applied in dark mode.",
    name       : "enableColorOnDark",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, you can customize the appbar children and else the default app bar content will load.",
    name       : "advanceMode",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, you can customize the appbar icon to Show and if false it will hide the icon.",
    name       : "leftMenuEnabled",
    types      : [{ default: true, type: "boolean" }],
  },
  {
    description: "If true, you can customize the logo in appbar to Show and if false it will hide the icon.",
    name       : "logoEnabled",
    types      : [{ default: true, type: "boolean" }],
  },
  {
    description: "If the logo is given it will show the logo in the appbar.",
    name       : "logo",
    types      : [{ type: "string" }],
  },
  {
    description: "The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable.",
    name       : "position",
    types      : [
      {
        default    : "fixed'",
        type       : "string",
        validValues: [
          "alignabsolute",
          "fixed",
          "relative",
          "static",
          "sticky"
        ],
      },
    ],
  },
  {
    name : "handleDrawer",
    types: [{ type: "function" }], 
  },
];

CoreAppBar.invalidProps = [];

