import React from "react";
import CoreClasses from "../../../styles/CoreClasses";
import CoreIcon from "../CoreIcon";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";
import CoreBox from "../../layouts/CoreBox";
import CoreLink from "../../navigation/CoreLink";

export default function CoreIconText(props) {
  const { icon, text, type, link = false, href } = props;

  return (
    (link === true)
    ?
      <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreIcon type={type} style={{ fontSize: 12 }}>{icon}</CoreIcon>

        {/* @todo need to change the "style" below */}
        <CoreLink href={href || "#"} style={{ fontSize: 12 }} styleClasses={[CoreClasses.MARGIN.ML1]}>{text}</CoreLink>
      </CoreBox>
    :
    <CoreTypographyCaption styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
      <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]} type={type} style={{ fontSize: 12 }}>{icon}</CoreIcon>
      
      <CoreTypographyCaption styleClasses={[CoreClasses.MARGIN.ML1, CoreClasses.COLOR.TEXT_SECONDARY]}>{text}</CoreTypographyCaption>
    </CoreTypographyCaption>
  );
}