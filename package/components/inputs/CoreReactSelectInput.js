// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeReactSelectInput } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreReactSelectInput(props) {
  props = sanitizeComponentProps(CoreReactSelectInput, props);
  return <NativeReactSelectInput {...props} />;
}
