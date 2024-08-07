// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreInput from "./CoreInput";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTextarea(props) {
  props = sanitizeComponentProps(CoreTextarea, props);

  return (
    <CoreInput
      {...props}
      multiline={true}
      minRows={3}
      maxRows={6}
      inputProps={{ style: { resize: "vertical" } }}
    />
  );
}

CoreTextarea.validProps = [...CoreInput.validProps];
CoreTextarea.invalidProps = [];
