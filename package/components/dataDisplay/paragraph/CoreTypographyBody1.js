// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { sanitizeComponentProps } from "../../../utils/componentUtil";
import CoreSpan from "../../layouts/CoreSpan";
import CoreLink from "../../navigation/CoreLink";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyBody1(props) {
  props = sanitizeComponentProps(CoreTypographyBody1, props);
  const {
    hideSeeMore = false,
    limitChars,
    styleClasses,
    code,
    align,
    component,
    gutterBottom,
    noWrap,
  } = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <CoreTypography
      code={code}
      align={align}
      component={component}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      variant="body1"
      paragraph={true}
      gutterBottom={true}
    >
      <CoreSpan styleClasses={[...(styleClasses || [])]}>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>

      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink
          onClick={toggleSeeMore}
        >
          {seeMore ? " See more" : " See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography
      {...props}
      variant="body1"
      paragraph={true}
      gutterBottom={true}
    >
      {props?.children}
    </CoreTypography>
  );
}

CoreTypographyBody1.validProps = [
  ...CoreTypography.validProps,
  {
    description:
      "The content of the component need to show as it is like a code block.",
    name: "code",
    types: [{ default: "false", type: "boolean", validValues: [true, false] }],
  },
  {
    description: "",
    name: "limitChars",
    types: [{ type: "number" }],
  },
  {
    description: "",
    name: "hideSeeMore",
    types: [{ default: "false", type: "boolean", validValues: [true, false] }],
  },
];
CoreTypographyBody1.invalidProps = ["sx", "classes"];
