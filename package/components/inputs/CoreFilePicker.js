import React from "react";
import { useRef } from "react";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";
import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeFilePicker } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreIcon from "../dataDisplay/CoreIcon";

export default function CoreFilePicker(props) {
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    inputRef.current.click();
  };
  return (
    <CoreFormControl>
      <CoreLabel
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        htmlFor={props.id}
      >
        {props.label}
      </CoreLabel>
      <CoreBox
        styleClasses={[
          CoreClasses.BORDER.BORDER_SECONDARY_LIGHT,
          CoreClasses.HEIGHT.H_25,
          CoreClasses.HEIGHT.W_50,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        ]}
      >
        <CoreIcon fontSize={"small"}>{"add"}</CoreIcon>
        <NativeFilePicker {...props} />
      </CoreBox>
    </CoreFormControl>
  );
}
