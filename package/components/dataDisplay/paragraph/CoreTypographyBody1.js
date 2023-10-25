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
  {
    description:
      "The content of the component need to show as it is like a code block.",
    name: "code",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description: "Set the text-align on the component.",
    name: "align",
    types: [
      {
        default: "inherit",
        type: "string",
        validValues: ["center", "inherit", "justify", "left", "right"],
      },
    ],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name: "component",
    types: [{ type: "elementType" }],
  },
  {
    description: "If true, the text will have a bottom margin.",
    name: "gutterBottom",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description:
      "If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.\
    Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).",
    name: "noWrap",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },

  {
    description: "",
    name: "limitChars",
    types: [{ type: "number" }],
  },
  {
    description: "",
    name: "hideSeeMore",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },
];
CoreTypographyBody1.invalidProps = ["sx", "classes"];
