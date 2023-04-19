import React from "react";
import CoreBox from "../layouts/CoreBox";
import CoreFormHelperText from "./CoreFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { NativeDateTimeRangePicker } from "@wrappid/styled-components";

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
