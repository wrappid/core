// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTextField } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

//do not use this component directly this is used for datepicker only internally
export default function CoreTextField(props) {
  props = sanitizeComponentProps(CoreTextField, props);
  return <NativeTextField variant="standard" {...props} />;
}
CoreTextField.validProps = [
  {
    description: "This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the specification.",
    name       : "autoComplete",
    types      : [{ type: "string" }],
  },
  {
    description: "If true, the input element is focused during the first mount.",
    name       : "autoFocus",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name       : "color",
    types      : [
      {
        default    : "primary",
        type       : "string",
        validValues: [
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    ],
  },
  {
    description: "The default value. Use when the component is not controlled.",
    name       : "defaultValue",
    types      : [{ type: "any" }],
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the label is displayed in an error state.",
    name       : "error",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Props applied to the FormHelperText element.",
    name       : "FormHelperTextProps",
    types      : [{ type: "object" }],
  },
  {
    description: "If true, the input will take up the full width of its container.",
    name       : "fullWidth",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The helper text content.",
    name       : "helperText",
    types      : [{ type: "node" }],
  },
  {
    description: "The id of the input element. Use this prop to make label and helperText accessible for screen readers.",
    name       : "id",
    types      : [{ type: "string" }],
  },
  {
    description: "Props applied to the InputLabel element. Pointer events like onClick are enabled if and only if shrink is true.",
    name       : "InputLabelProps",
    types      : [{ type: "object" }],
  },
  {
    description: "Attributes applied to the input element.",
    name       : "inputProps",
    types      : [{ type: "object" }],
  },
  {
    description: "Props applied to the Input element. It will be a FilledInput, OutlinedInput or Input component depending on the variant prop value.",
    name       : "InputProps",
    types      : [{ type: "object" }],
  },
  {
    description: "Pass a ref to the input element.",
    name       : "inputRef",
    types      : [{ type: "ref" }],
  },
  {
    description: "The label content.",
    name       : "label",
    types      : [{ type: "node" }],
  },
  {
    description: "If dense or normal, will adjust vertical spacing of this and contained components.",
    name       : "margin",
    types      : [
      {
        default    : "none",
        type       : "string",
        validValues: ["dense", "none", "normal"],
      },
    ],
  },
  {
    description: "Maximum number of rows to display when multiline option is set to true.",
    name       : "maxRows",
    types      : [{ type: "number" }, { type: "string" }],
  },
  {
    description: "Minimum number of rows to display when multiline option is set to true.",
    name       : "minRows",
    types      : [{ type: "number" }, { type: "string" }],
  },
  {
    description: "If true, a textarea element is rendered instead of an input.",
    name       : "multiline",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Name attribute of the input element.",
    name       : "name",
    types      : [{ type: "string" }],
  },
  {
    description: "Callback fired when the value is changed.Signature:function(event: object) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (string).",
    name       : "onChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback fired when the keyDown event occurs.",
    name       : "onKeyDown",
    types      : [{ type: "function" }],
  },
  {
    description: "The short hint displayed in the input before the user enters a value.",
    name       : "placeholder",
    types      : [{ type: "string" }],
  },
  {
    description: "If true, the label is displayed as required and the input element is required.",
    name       : "required",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Number of rows to display when multiline option is set to true.",
    name       : "rows",
    types      : [{ type: "number" }, { type: "string" }],
    
  },
  {
    description: "Render a Select element while passing the Input element to Select as input parameter. If this option is set you must pass the options of the select as children.",
    name       : "select",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Props applied to the Select element.",
    name       : "SelectProps",
    types      : [{ type: "object" }],
  },
  {
    description: "The size of the component.",
    name       : "size",
    types      : [{ type: "string", validValues: ["medium", "small"] }],
  },
  {
    description: "Type of the input element. It should be a valid HTML5 input type.",
    name       : "type",
    types      : [{ type: "string" }],
  },
  {
    description: "The value of the input element, required for a controlled component.",
    name       : "value",
    types      : [{ type: "any" }],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "outlined",
        type       : "string",
        validValues: ["filled", "outlined", "standard"],
      },
    ],
  },
];
CoreTextField.invalidProps = [];
