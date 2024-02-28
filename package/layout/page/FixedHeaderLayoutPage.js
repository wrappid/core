// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import FixedHeaderLayout from "../FixedHeaderLayout";

export default function FixedHeaderLayoutPage() {
  return (
    <>  
      <CoreLayoutItem
        id={FixedHeaderLayout.PLACEHOLDER.HEADER}
        styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_25, CoreClasses.BG.BG_SECONDARY, CoreClasses.POSITION.POSITION_FIXED]}>
      </CoreLayoutItem>
    
      <CoreLayoutItem
        id={FixedHeaderLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_75, CoreClasses.BG.BG_WARNING, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL]}>
      </CoreLayoutItem>
    </>
  );
}