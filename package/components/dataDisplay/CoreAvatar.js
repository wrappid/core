/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeAvatar } from "@wrappid/native";

import defaultImage from "../../assets/no_image.png";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAvatar(props) {
  let sanitizedProps = sanitizeComponentProps(CoreAvatar, props);

  console.log(`----------------sanitizedProps=${Object.keys(sanitizedProps)}`);

  let src = props.src && props.src?.length > 0 ? props.src : defaultImage;

  return <NativeAvatar {...props} src={src} />;
}

CoreAvatar.validProps = [
  {
    description: "Used in combination with src or srcSet to provide an alt attribute for the rendered img element.",
    name: "alt",
    types: [{ type: "string" }]
  },
  {
    description: "The src attribute for the img element.",
    name: "src",
    types: [{}]
  },
  {
    description: "The shape of the avatar.",
    name: "variant",
    types: [
      {
        default: "circular",
        type: String,
        validValues: ["circular", "rounded", "square"]
      },
      {
        default: true,
        type: Boolean,
        validValues: [true, false]
      }
    ]
  }
];
CoreAvatar.invalidProps = ["sx", "classes"];