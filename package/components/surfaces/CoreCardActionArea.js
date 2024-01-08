// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCardActionArea } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCardActionArea(props) {
  props = sanitizeComponentProps(CoreCardActionArea, props);
  return <NativeCardActionArea {...props}>{props.children}</NativeCardActionArea>;
}

CoreCardActionArea.validProps = [];
CoreCardActionArea.invalidProps = ["sx", "classes"];
