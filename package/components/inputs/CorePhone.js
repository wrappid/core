// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreInput from "./CoreInput";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { number } from "yup";

export default function CorePhone(props) {
props = sanitizeComponentProps(CorePhone, props);
return <CoreInput {...props} tyope = "text"
inputProps={{
inputMode: 'numeric',
pattern: "[0-9]*",
min: 1,
// step: 1,
max: 999999999999,
}}
/>;
}
CorePhone.validProps = [...CoreInput.validProps];
CorePhone.invalidProps = [];

