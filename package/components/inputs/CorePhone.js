// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreInput from "./CoreInput";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CorePhone(props) {
  props = sanitizeComponentProps(CorePhone, props);
  return <CoreInput {...props} type="number" />;
}
CorePhone.validProps = [...CoreInput.validProps];
CorePhone.invalidProps = ["sx", "classes"];