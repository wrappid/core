// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateTimePicker } from "@wrappid/native";

export default function CoreDateTimePicker(props) {
  return (
    <NativeDateTimePicker {...props} />
  );
}

CoreDateTimePicker.validProps = [
  {
    name : "formik",
    types: [{ type: "object" }]
  }
];
CoreDateTimePicker.invalidProps = [];