// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypographyCaption from "./CoreTypographyCaption";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { getStatusTextColorClass } from "../../utils/tableUtils";

export default function StatusText(props) {
  props = sanitizeComponentProps(StatusText, props);
  const { status, ...restProps } = props;

  return (
    <CoreTypographyCaption
      {...restProps}
      styleClasses={[getStatusTextColorClass(status || ""), CoreClasses.TEXT.TEXT_WEIGHT_BOLD, CoreClasses.TEXT.TEXT_UPPERCASE]}>
      {status || "unknown"}
    </CoreTypographyCaption>
  );
}

StatusText.validProps = [
  ...CoreTypographyCaption.validProps,
  {
    name : "status",
    types: [
      {
        default    : "unknown",
        type       : "string",
        validValues: [
          "active",
          "draft",
          "new",
          "approved",
          "published",
          "inactive",
          "change_requested",
          "review_requested",
          "deleted",
          "rejected",
          "unknown"
        ]
      }
    ],
  },
];

StatusText.invalidProps = [];