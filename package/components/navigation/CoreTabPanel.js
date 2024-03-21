// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line etc/no-commented-out-code
// import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreBox from "../layouts/CoreBox";

export default function CoreTabPanel(props) {
  // eslint-disable-next-line etc/no-commented-out-code
  // props = sanitizeComponentProps(CoreTabPanel, props);
  const { children, value, index, ...other } = props;

  return (
    <CoreBox
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </CoreBox>
  );
}

CoreTabPanel.validProps = [
  {
    description:
      "The value of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab.",
    name    : "value*",
    required: true,
    types   : [{ default: "", type: "string" }],
  },
];
CoreTabPanel.invalidProps = [];
