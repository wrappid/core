// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved

import CoreTypography from "./CoreTypography";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreSpan from "../layouts/CoreSpan";
import CoreLink from "../navigation/CoreLink";

export default function CoreTypographyOverline(props) {
  props = sanitizeComponentProps(CoreTypographyOverline, props);
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
      {...restProps}
    >
      <CoreSpan styleClasses={[...(styleClasses || [])]}>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>

      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink onClick={toggleSeeMore}>
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
CoreTypographyOverline.validProps = [
  ...CoreTypography.validProps,
  {
    description:
      "The content of the component need to show as it is like a code block.",
    name : "code",
    types: [{ default: "false", type: "boolean", validValues: [true, false] }],
  },
  {
    description: "",
    name       : "limitChars",
    types      : [{ type: "number" }],
  },
  {
    description: "",
    name       : "hideSeeMore",
    types      : [{ default: "false", type: "boolean", validValues: [true, false] }],
  },
];
CoreTypographyOverline.invalidProps = ["sx", "classes"];
