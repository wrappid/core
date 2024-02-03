/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreButton from "./CoreButton";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreContainedButton(props) {
  props = sanitizeComponentProps(CoreContainedButton, props);
  console.log("btn props", props);
  return <CoreButton {...props} variant="contained" color={props?.color || "primary"} />;
}

CoreContainedButton.validProps = [...CoreButton.validProps];
CoreButton.invalidProps = [];
