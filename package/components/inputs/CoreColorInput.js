// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeColorInput } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreColorInput(props) {
  props = sanitizeComponentProps(CoreColorInput, props);
  const { error, helperText } = props;

  return (
    <>
      <NativeColorInput {...props} />

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </>

  );
}

CoreColorInput.validProps = [
  {
    description: "The id of the input element.",
    name       : "id",
    types      : [{ type: "string" }],
  },
  {
    description: "If true, the input will indicate an error. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name       : "error",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The value of the input element, required for a controlled component.",
    name       : "value",
    types      : [{ default: "#ffffff", type: "string" }],
  },
  {
    name : "label",
    types: [{ types: "string" }]
  },
  {
    description: "If true, the component is disabled. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name       : "disabled",
    types      : [{ type: "boolean" }],
  },
  {
    description:
      "Callback fired when the value is changed.Signature:function(event: React.ChangeEvent) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (string).",
    name : "onChange",
    types: [{ type: "function" }],
  }
];
CoreColorInput.invalidProps = [];