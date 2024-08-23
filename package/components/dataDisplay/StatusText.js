// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypographyCaption from "./CoreTypographyCaption";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { getStatusTextColorClass } from "../../utils/tableUtils";

export default function StatusText(props) {
  props = sanitizeComponentProps(StatusText, props);

  return (
    <CoreTypographyCaption
      {...props}
      styleClasses={[getStatusTextColorClass(props?.status || ""), CoreClasses.TEXT.TEXT_WEIGHT_BOLD, CoreClasses.TEXT.TEXT_UPPERCASE]}>
      {props?.status || "UNKNOWN"}
    </CoreTypographyCaption>
  );
}

StatusText.validProps = [
  {
    name: "status",
    types: [
      {
        default: "UNKNOWN",
        type: "string",
        validValues: [
          "ACTIVE",
          "DRAFT",
          "NEW",
          "APPROVED",
          "PUBLISHED",
          "INACTIVE",
          "CHANGE_REQUESTED",
          "REVIEW_REQUESTED",
          "DELETED",
          "REJECTED",
          "UNKNOWN"
        ]
      }
    ],
  },
];

StatusText.invalidProps = [];