// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../../styles/CoreClasses";
import CoreBox from "../../layouts/CoreBox";
import CoreLink from "../../navigation/CoreLink";
import CoreIcon from "../CoreIcon";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";

export default function CoreIconText(props) {
  const { icon, text, type, link = false, href } = props;

  return link === true ? (
    <CoreBox
      styleClasses={[CoreClasses?.FLEX?.DIRECTION_ROW, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}>
      <CoreBox>
        <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]} type={type}>
          {icon}
        </CoreIcon>
      </CoreBox>

      {/* @todo need to change the "style" below */}
      <CoreLink
        href={href || "#"}
        style={{ fontSize: 12 }}
        styleClasses={[CoreClasses.MARGIN.ML1]}>
        {text}
      </CoreLink>
    </CoreBox>
  ) : (
    <CoreBox
      styleClasses={[CoreClasses?.FLEX?.DIRECTION_ROW, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}>
      <CoreBox>
        <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]} type={type}>
          {icon}
        </CoreIcon>
      </CoreBox>

      <CoreTypographyCaption
        styleClasses={[CoreClasses.MARGIN.ML1, CoreClasses.COLOR.TEXT_SECONDARY_DARK]}>
        {text}
      </CoreTypographyCaption>
    </CoreBox>
  );
}
