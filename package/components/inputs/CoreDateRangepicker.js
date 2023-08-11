// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeDateRangePicker } from "@wrappid/styled-components";

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
