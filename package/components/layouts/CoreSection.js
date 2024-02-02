// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreH5 from "../dataDisplay/CoreH5";
import CoreCard from "../surfaces/CoreCard";
import CoreCardContent from "../surfaces/CoreCardContent";
import CoreCardHeader from "../surfaces/CoreCardHeader";

export default function CoreSection(props) {
  props = sanitizeComponentProps(CoreSection, props);
  const { styleClasses = [], elevated } = props;

  return (
    <CoreCard
      elevated={elevated}
      styleClasses={[CoreClasses.MARGIN.MB2, CoreClasses.PADDING.P0, ...styleClasses]}
    >
      <CoreCardHeader
        styleClasses={[CoreClasses.PADDING.P1]}
        title={props?.heading && <CoreH5>{props?.heading}</CoreH5>}
      />

      <CoreCardContent styleClasses={[]}>{props?.children}</CoreCardContent>
    </CoreCard>
  );
}

CoreSection.validProps = [];
CoreSection.invalidProps = [];
