import React from "react";
import CoreFormControl from "./CoreFormControl";
import CoreInputLabel from "./CoreInputLabel";
import { NativeSelect } from "@wrappid/styled-components";

export default function CoreSelect(props) {
  const { label } = props;

  return (
    <CoreFormControl>
      <CoreInputLabel id="demo-simple-select-label">{label}</CoreInputLabel>
      <NativeSelect {...props} />
    </CoreFormControl>
  );
}
