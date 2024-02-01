// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAvatarGroup } from "@wrappid/native";
import { number } from "yup";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAvatarGroup(props) {
  const { children, ...restProps } = sanitizeComponentProps(CoreAvatarGroup, props);

  return (
    <NativeAvatarGroup {...restProps}>{children}</NativeAvatarGroup>
  );
}

CoreAvatarGroup.validProps = [
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name       : "componentsProps",
    types      : [{ default: {}, type: "{ additionalAvatar?: object }" }]
  },
  {
    description: "Max avatars to show before +x.",
    name       : "max",
    types      : [{ default: 5, type: "number" }]
  },
  {
    description: "custom renderer of extraAvatarsSignature:function(surplus: number) => React.ReactNodesurplus number of extra avatarsReturns: custom element to display",
    name       : "renderSurplus",
    types      : [{ default: "", type: "function" }]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the componentsProps prop, which will be deprecated in the future.",
    name       : "slotProps",
    types      : [{ default: {}, type: "object" }]
  },
  {
    description: "Spacing between avatars.",
    name       : "spacing",
    types      : [{ default: "medium", type: "string", validValues: ["medium", "small"] }]
  },
  {
    description: "The total number of avatars. Used for calculating the number of extra avatars.",
    name       : "total",
    types      : [{ default: "children.length", type: "number" }]
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types: [{
      default: "circular", type: "string", validValues: ["circular", "rounded", "square"] }]
  }
];
CoreAvatarGroup.invalidProps = [];