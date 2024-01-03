// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeIcon } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export const __IconTypes = {
  FONTAWESOME_V5_REGULAR_ICON: "far",
  FONTAWESOME_V5_SOLID_ICON  : "fas",

  MATERIAL_ICON         : "material-icons",
  // Default support of MUI
  MATERIAL_OUTLINED_ICON: "material-icons-outlined",
  RXICON_V1_REGULAR_ICON: "rxi",
};

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */
export default function CoreIcon(props) {
  props = sanitizeComponentProps(CoreIcon, props);
  const { type, icon, options, sx, ...restProps } = props;

  let tmpType = type || options?.type || __IconTypes.MATERIAL_ICON;
  let tmpIcon = props.children || icon || options?.icon || "";

  const {
    baseClassName,
    children,
    color,
    component,
    fontSize
  } = props;

  return (
    <NativeIcon
      type={tmpType}
      name={tmpIcon}
      baseClassName={baseClassName}
      color={color}
      component={component}
      fontSize={fontSize}
      childrenFlag={
        tmpType === __IconTypes.MATERIAL_ICON || tmpType === __IconTypes.MATERIAL_OUTLINED_ICON
          ? true
          : false
      }
      sx={type === __IconTypes.MATERIAL_ICON ? sx : { ...sx, overflow: "unset" }}
    >
      {children}
    </NativeIcon>
  );

  // return (
  //   <NativeIcon
  //     type={tmpType}
  //     name={tmpIcon}
  //     size={props.size}
  //     childrenFlag={
  //       tmpType === __IconTypes.MATERIAL_ICON || tmpType === __IconTypes.MATERIAL_OUTLINED_ICON
  //         ? true
  //         : false
  //     }
  //     sx={type === __IconTypes.MATERIAL_ICON ? sx : { ...sx, overflow: "unset" }}
  //     styleClasses={props.styleClasses || []}
  //     {...restProps}
  //   />
  // );
}

CoreIcon.validProps = [
  {
    name : "type",
    types: [{ default: __IconTypes.MATERIAL_ICON, type: "string", validValues: [__IconTypes.MATERIAL_ICON, __IconTypes.FONTAWESOME_V5_REGULAR_ICON, __IconTypes.FONTAWESOME_V5_SOLID_ICON] }]
  },
  {
    name : "icon",
    types: [{ type: "string" }]
  },
  {
    name : "options",
    types: [{ type: "object" }]
  },
  {
    description: "The base class applied to the icon. Defaults to 'material-icons', but can be changed to any other base class that suits the icon font you're using (e.g. material-icons-rounded, fas, etc).",
    name       : "baseClassName",
    types      : [
      {
        default: "material-icons",
        type   : "string",
      },
    ],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "inherit",
        type       : "string",
        validValues: [
          "action",
          "disabled",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    ],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description:
      "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",
    name : "fontSize",
    types: [
      {
        default    : "medium",
        type       : "string",
        validValues: ["inherit", "large", "medium", "small"],
      },
    ],
  },
];
CoreIcon.invalidProps = ["sx", "classes"];
