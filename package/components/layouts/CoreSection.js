import React from "react";
import CoreCard from "../surfaces/CoreCard";
import CoreClasses from "../../styles/CoreClasses";
import CoreCardHeader from "../surfaces/CoreCardHeader";
import CoreCardContent from "../surfaces/CoreCardContent";
import CoreH5 from "../dataDisplay/heading/CoreH5";

export default function CoreSection(props) {
  const { styleClasses = [] } = props;

  return (
    <CoreCard
      styleClasses={[
        CoreClasses.MARGIN.MB2,
        CoreClasses.PADDING.P0,
        ...styleClasses,
      ]}
    >
      <CoreCardHeader
        styleClasses={[CoreClasses.PADDING.P1]}
        title={props?.heading && <CoreH5>{props?.heading}</CoreH5>}
      />
      <CoreCardContent styleClasses={[]}>{props?.children}</CoreCardContent>
    </CoreCard>
  );
}
