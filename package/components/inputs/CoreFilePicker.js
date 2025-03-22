// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFilePicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreLabel from "../dataDisplay/CoreLabel";
import CoreBox from "../layouts/CoreBox";

export default function CoreFilePicker(props) {
  // -- const inputRef = useRef(null);
  /* -- const handleFileOpen = () => {
    inputRef.current.click();
  }; */

  return (
    <CoreBox>
      <CoreLabel
        error={props.touched && props.error && props.error.length > 0 ? true : false}
        htmlFor={props.id}
      >
        {props.label}
      </CoreLabel>

      <NativeFilePicker {...props} />

      {props.helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </CoreFormHelperText>
      )}

      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}
    </CoreBox>
  );
}
