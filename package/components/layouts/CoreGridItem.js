// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeGridItem } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreGridItem(props) {
  props = sanitizeComponentProps(CoreGridItem, props);
  return <NativeGridItem props>{props.children}</NativeGridItem>;
}
CoreGridItem.validProps = [];
CoreGridItem.invalidProps = ["sx", "classes"];

