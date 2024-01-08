// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeListItemIcon } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemIcon(props) {
  props = sanitizeComponentProps(CoreListItemIcon, props);
  return <NativeListItemIcon {...props} />;
}
CoreListItemIcon.validProps = [];
CoreListItemIcon.invalidProps = [];
