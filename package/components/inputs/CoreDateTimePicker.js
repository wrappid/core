import React from "react";
import CoreBox from "../layouts/CoreBox";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeDateTimePicker } from "@wrappid/styled-components";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreDateTimePicker(props) {
  return (
    <CoreBox>
      <NativeDateTimePicker {...props} />
      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
}
