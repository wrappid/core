import React from "react";
import { useRef } from "react";
import { CoreClasses } from "@wrappid/styles";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeFilePicker } from "@wrappid/styled-components";

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
      <NativeFilePicker {...props} />
      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreFormControl>
  );
}
