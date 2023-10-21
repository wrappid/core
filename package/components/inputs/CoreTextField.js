// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTextField } from "@wrappid/native";

//do not use this component directly this is used for datepicker only internally
export default function CoreTextField(props) {
  return <NativeTextField variant="standard" {...props} />;
}
CoreTextField.validProps = [
  {
    description:
      "This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the specification.",
    name: "autoComplete",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "If true, the input element is focused during the first mount.",
    name: "autoFocus",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name: "color",
    types: [
      {
        default: "primary",
        type: "string",
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
    name: "defaultValue",
    types: [{ default: "", type: "any" }],
  },
  {
    description: "If true, the component is disabled.",
    name: "disabled",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "If true, the label is displayed in an error state.",
    name: "error",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "Props applied to the FormHelperText element.",
    name: "FormHelperTextProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "If true, the input will take up the full width of its container.",
    name: "fullWidth",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The helper text content.",
    name: "helperText",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "The id of the input element. Use this prop to make label and helperText accessible for screen readers.",
    name: "id",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "Props applied to the InputLabel element. Pointer events like onClick are enabled if and only if shrink is true.",
    name: "InputLabelProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description: "Attributes applied to the input element.",
    name: "inputProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "Props applied to the Input element. It will be a FilledInput, OutlinedInput or Input component depending on the variant prop value.",
    name: "InputProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description: "Pass a ref to the input element.",
    name: "inputRef",
    types: [{ default: "", type: "ref" }],
  },
  {
    description: "The label content.",
    name: "label",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "If dense or normal, will adjust vertical spacing of this and contained components.",
    name: "margin",
    types: [
      {
        default: "none",
        type: "string",
        validValues: ["dense", "none", "normal"],
      },
    ],
  },
  {
    description:
      "Maximum number of rows to display when multiline option is set to true.",
    name: "maxRows",
    types: [{ default: "", type: "number| string" }],
  },
  {
    description:
      "Minimum number of rows to display when multiline option is set to true.",
    name: "minRows",
    types: [{ default: "", type: "number| string" }],
  },
  {
    description: "If true, a textarea element is rendered instead of an input.",
    name: "multiline",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "Name attribute of the input element.",
    name: "name",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "Callback fired when the value is changed.Signature:function(event: object) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (string).",
    name: "onChange",
    types: [{ default: "", type: "func" }],
  },
  {
    description:
      "The short hint displayed in the input before the user enters a value.",
    name: "placeholder",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "If true, the label is displayed as required and the input element is required.",
    name: "required",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "Number of rows to display when multiline option is set to true.",
    name: "rows",
    types: [{ default: "", type: "number| string" }],
  },
  {
    description:
      "Render a Select element while passing the Input element to Select as input parameter. If this option is set you must pass the options of the select as children.",
    name: "select",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "Props applied to the Select element.",
    name: "SelectProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description: "The size of the component.",
    name: "size",
    types: [{ default: "", type: "string", validValues: ["medium", "small"] }],
  },
  {
    description:
      "Type of the input element. It should be a valid HTML5 input type.",
    name: "type",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "The value of the input element, required for a controlled component.",
    name: "value",
    types: [{ default: "", type: "any" }],
  },
  {
    description: "The variant to use.",
    name: "variant",
    types: [
      {
        default: "outlined",
        type: "string",
        validValues: ["filled", "outlined", "standard"],
      },
    ],
  },
];
CoreTextField.invalidProps = ["sx", "classes"];
