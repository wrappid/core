// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved

import CoreTypography from "./CoreTypography";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreSpan from "../layouts/CoreSpan";
import CoreLink from "../navigation/CoreLink";

export default function CoreTypographySubtitle1(props) {
  props = sanitizeComponentProps(CoreTypographySubtitle1, props);
  const {
    hideSeeMore = false,
    limitChars,
    styleClasses,
    ...restProps
  } = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <CoreTypography
      variant="caption"
      paragraph={true}
      gutterBottom={true}
      styleClasses={styleClasses}
      {...restProps}
    >
      <CoreSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>

      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink onClick={toggleSeeMore} styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER]}>
          {seeMore ? " See more" : " See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography
      variant="caption"
      paragraph={true}
      gutterBottom={true}
      styleClasses={styleClasses}
      {...restProps}
    >
      {props?.children}
    </CoreTypography>
  );
}
CoreTypographySubtitle1.validProps = [
  ...CoreTypography.validProps,
  {
    description: "The content of the component need to show as it is like a code block.",
    name       : "code",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    name : "limitChars",
    types: [{ type: "number" }],
  },
  {
    name : "hideSeeMore",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },
];
CoreTypographySubtitle1.invalidProps = [];
