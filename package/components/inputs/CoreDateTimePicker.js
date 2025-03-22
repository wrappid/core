// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateTimePicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDateTimePicker(props) {
  const { error, helperText, ...restProps } = props;

  return (
    <CoreBox>
      <NativeDateTimePicker {...restProps} />

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
      
      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}
    </CoreBox>
  );
}

CoreDateTimePicker.validProps = [
  {
    name : "formik",
    types: [{ type: "object" }]
  }
];
CoreDateTimePicker.invalidProps = [];