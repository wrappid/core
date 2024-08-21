/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAvatar } from "@wrappid/native";

import defaultImage from "../../assets/no_image.png";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAvatar(props) {
  props = sanitizeComponentProps(CoreAvatar, props);

  let src = props?.src && props.src?.length > 0 ? props?.src : defaultImage;

  return <NativeAvatar {...props} src={src} />;
}
CoreAvatar.displayName = "CoreAvatar";
CoreAvatar.validProps = [
  {
    description: "Used in combination with src or srcSet to provide an alt attribute for the rendered img element.",
    name       : "alt",
    types      : [{ type: "string" }]
  },
  {
    description: "The src attribute for the img element.",
    name       : "src",
    types      : [{ type: "string" }]
  },
  {
    description: "The shape of the avatar.",
    name       : "variant",
    types      : [
      {
        default    : "circular",
        type       : "string",
        validValues: ["circular", "rounded", "square"]
      },
      {
        default    : true,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ default: "", type: "elementType" }]
  },
  {
    description: "Attributes applied to the img element if the component is used to display an image. It can be used to listen for the loading error event.",
    name       : "imgProps",
    types      : [{ type: "object" }],
  },
  {
    description: "The sizes attribute for the img element.",
    name       : "sizes",
    types      : [{ type: "string" }],
  },
  {
    description: "The srcSet attribute for the img element. Use this attribute for responsive image display.",
    name       : "srcSet",
    types      : [{ type: "string" }],
  },
];
CoreAvatar.invalidProps = [];