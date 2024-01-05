// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeListItemIcon } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemIcon(props) {
  props = sanitizeComponentProps(CoreListItemIcon, props);
  return <NativeListItemIcon {...props} />;
}
