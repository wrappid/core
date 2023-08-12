// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateTimeRangePicker } from "@wrappid/styled-components";

import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDateTimeRangePicker(props) {
  return (
    <CoreBox>
      <NativeDateTimeRangePicker {...props} />

      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
}
