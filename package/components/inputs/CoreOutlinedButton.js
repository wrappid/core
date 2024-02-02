// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreButton from "./CoreButton";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreOutlinedButton(props) {
  props = sanitizeComponentProps(CoreOutlinedButton, props);
  return <CoreButton {...props} variant="outlined" />;
}
CoreOutlinedButton.validProps = [...CoreButton.validProps];
CoreOutlinedButton.invalidProps = [];
