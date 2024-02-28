// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import FixedHeaderLayout from "../../components/layouts/_system/FixedHeaderLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function FixedHeaderLayoutPage() {
  return (
    <>  
      <CoreLayoutItem
        id={FixedHeaderLayout.PLACEHOLDER.HEADER}
        styleClasses={[]}>
        <CoreTypographyBody1>This is header section of FixedHeaderLayout</CoreTypographyBody1>
      </CoreLayoutItem>
    
      <CoreLayoutItem
        id={FixedHeaderLayout.PLACEHOLDER.CONTENT}
        styleClasses={[]}>
        <CoreTypographyBody1>
          This is content section of FixedHeaderLayout
        </CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}