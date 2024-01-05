// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreButton from "./CoreButton";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTextButton(props) {
  props = sanitizeComponentProps(CoreTextButton, props);
  return <CoreButton variant="text" {...props} />;
}

CoreTextButton.validProps = [...CoreButton.validProps];
CoreTextButton.invalidProps = ["sx", "classes"];
