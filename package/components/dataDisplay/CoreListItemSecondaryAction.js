/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeListItemSecondaryAction } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemSecondaryAction(props) {
  props = sanitizeComponentProps(CoreListItemSecondaryAction, props);
  return <NativeListItemSecondaryAction {...props} />;
}
CoreListItemSecondaryAction.validProps = [];
CoreListItemSecondaryAction.invalidProps = [];