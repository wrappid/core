// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import LeftRightDrawerLayout from "../LeftRightDrawerLayout";

export default function LeftRightDrawerPage(){
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_100]}>

        <CoreLayoutItem styleClasses={[CoreClasses.WIDTH.VW_100]} id={LeftRightDrawerLayout.PLACEHOLDER.Header }>
          <CoreTypographyBody1>Header Content</CoreTypographyBody1>
        </CoreLayoutItem>
          
        <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100]}>
          <CoreLayoutItem styleClasses={[CoreClasses.WIDTH.VW_25]} id={LeftRightDrawerLayout.PLACEHOLDER.LeftDrawer }>
            <CoreTypographyBody1>Left DrawerContent</CoreTypographyBody1>
          </CoreLayoutItem>

          <CoreLayoutItem styleClasses={[CoreClasses.WIDTH.VW_50wrappidComponent]} id={LeftRightDrawerLayout.PLACEHOLDER.Content} >
            <CoreTypographyBody1> DrawerContent</CoreTypographyBody1>
          </CoreLayoutItem>

          <CoreLayoutItem styleClasses={[CoreClasses.WIDTH.VW_25]} id={LeftRightDrawerLayout.PLACEHOLDER.RightDrawer }>
            <CoreTypographyBody1>Right DrawerContent</CoreTypographyBody1>
          </CoreLayoutItem>

        </CoreBox>

      </CoreBox>
    </>
  );
}
