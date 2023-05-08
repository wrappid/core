import React from "react";
import CoreBox from "../layouts/CoreBox";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeDateTimeRangePicker } from "@wrappid/styled-components";
import CoreClasses from "../../styles/CoreClasses";

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
