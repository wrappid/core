import React from "react";
import { getStatusTextColorClass } from "../../../utils/tableUtils";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import { CoreClasses } from "@wrappid/styles";

export default function StatusText(props) {
  const { status } = props;
  return (
    <CoreTypographyCaption
      styleClasses={[
        getStatusTextColorClass(status || ""),
        CoreClasses.TEXT.TEXT_WEIGHT_BOLD,
        CoreClasses.TEXT.TEXT_UPPERCASE,
      ]}
    >
      {status || "UNKNOWN"}
    </CoreTypographyCaption>
  );
}
