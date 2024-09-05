// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateTimeRangePicker } from "@wrappid/native";

export default function CoreDateTimeRangePicker(props) {
  return (
    <NativeDateTimeRangePicker {...props} />
  );
}
CoreDateTimeRangePicker.validProps = [
  {
    name : "formik",
    types: [{ type: "object" }]
  }
];
CoreDateTimeRangePicker.invalidProps = [];