// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState } from "react";

import { UtilityClasses } from "@wrappid/styles";

import CoreSpan from "../../layouts/CoreSpan";
import CoreLink from "../../navigation/CoreLink";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyBody1(props) {
  const { hideSeeMore = false, limitChars } = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <CoreTypography {...props} variant="body1" gutterBottom>
      <CoreSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>

      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink
          styleClasses={[UtilityClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}
        >
          {seeMore ? "See more" : "See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography {...props} variant="body1" gutterBottom>
      {props?.children}
    </CoreTypography>
  );
}
