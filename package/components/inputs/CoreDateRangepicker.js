import React from "react";
// import CoreBox from "../layouts/CoreBox";
import { NativeDateRangePicker } from "@wrappid/styled-components";
// import CoreFormHelperText from "./CoreFormHelperText";
// import { CoreClasses } from "@wrappid/styles";

export default function CoreDateRangepicker(props) {
  return (
    // <CoreBox>
    <NativeDateRangePicker {...props} />
    // <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
    //   {props.helperText}
    // </CoreFormHelperText>
    // </CoreBox>
  );
}
