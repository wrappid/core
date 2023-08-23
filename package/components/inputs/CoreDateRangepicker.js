// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateRangePicker } from "@wrappid/native";

import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDateRangepicker(props) {
  return (
    <CoreBox>
      <NativeDateRangePicker {...props} />

      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
}
