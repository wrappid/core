// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCardMedia } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCardMedia(props) {
  props = sanitizeComponentProps(CoreCardMedia, props);

  return <NativeCardMedia {...props} />;
}
CoreCardMedia.validProps = [
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "Image to be displayed as a background image. Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.",
    name       : "image",
    types      : [{ type: "string" }],
  },
  {
    description: "An alias for image property. Available only with media components. Media components: video, audio, picture, iframe, img",
    name       : "src",
    types      : [{ type: "string" }],
  },
];
CoreCardMedia.invalidProps = [];
