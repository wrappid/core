// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAlertTitle } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAlertTitle(props) {
  props = sanitizeComponentProps(CoreAlertTitle, props);
  return <NativeAlertTitle {...props}>{props.children}</NativeAlertTitle>;
}

CoreAlertTitle.validProps = [];
CoreAlertTitle.invalidProps = [];

