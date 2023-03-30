import React from "react";
import { useState } from "react";
import { CoreClasses } from "@wrappid/styles";
import CoreSpan from "../../layouts/CoreSpan";
import CoreLink from "../../navigation/CoreLink";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyCaption(props) {
  const { hideSeeMore = false, limitChars } = props;

  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return limitChars ? (
    <CoreTypography {...props} variant="caption" gutterBottom>
      <CoreSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>
      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink
          styleClasses={[CoreClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}
        >
          {seeMore ? "See more" : "See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography {...props} variant="caption" gutterBottom>
      {props?.children}
    </CoreTypography>
  );
}
