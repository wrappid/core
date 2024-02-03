/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeListItemAvatar } from "@wrappid/native";

// eslint-disable-next-line import/no-unresolved
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemAvatar(props) {
  props = sanitizeComponentProps(CoreListItemAvatar, props);
  return <NativeListItemAvatar {...props} />;
}
CoreListItemAvatar.validProps = [];
CoreListItemAvatar.invalidProps = [];