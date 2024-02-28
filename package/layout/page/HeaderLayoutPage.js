// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import HeaderLayout from "../../components/layouts/_system/HeaderLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function HeaderLayoutPage() {
  return (
    <>

      <CoreLayoutItem
        id={HeaderLayout.PLACEHOLDER.HEADER} 
        styleClasses={[]}>
        <CoreTypographyBody1>This is header content of HeaderLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem
        id={HeaderLayout.PLACEHOLDER.CONTENT}
        styleClasses={[]}>
        <CoreTypographyBody1>This is content section of HeaderLayout</CoreTypographyBody1>
      </CoreLayoutItem>

    </>
  );
}