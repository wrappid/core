// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import CoreSpan from "../../layouts/CoreSpan";
import CoreLink from "../../navigation/CoreLink";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyBody2(props) {
  const { hideSeeMore = false, limitChars, styleClasses } = props;

  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return limitChars ? (
    <CoreTypography {...props} variant="body2" gutterBottom>
      <CoreSpan styleClasses={[...(styleClasses || [])]}>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>

      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink
          styleClasses={[UtilityClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}>
          {seeMore ? "See more" : "See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography {...props} variant="body2" gutterBottom>
      {props?.children}
    </CoreTypography>
  );
}

CoreTypographyBody2.validProps = [
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
    types: [{ default: "false", type: "bool" }],
  },
  {
    description:
      "If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.\
    Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).",
    name: "noWrap",
    types: [{ default: "false", type: "bool" }],
  },

  {
    description: "",
    name: "limitChars",
    types: [{ type: "number" }],
  },
  {
    description: "",
    name: "hideSeeMore",
    types: [{ default: "false", type: "bool" }],
  },
];
CoreTypographyBody2.invalidProps = ["sx", "classes"];

