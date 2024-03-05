/* eslint-disable import/order */
/* eslint-disable no-console */
import React from "react";

import BlankLayout from "../components/layouts/_system/BlankLayout";
import { ComponentRegistryContext } from "../config/contextHandler";
import ComponentNotFound from "../error/ComponentNotFound";
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";
import CoreClasses from "../styles/CoreClasses";
import CoreBox from "../components/layouts/CoreBox";
import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";

export default function LayoutViewer(props) {
  const { layoutName } = props;
  const componentRegistry = React.useContext(ComponentRegistryContext);

  const renderData = () => {
    /* basic checks for layout */
    let layoutFound = false;

    if (layoutName && Object.keys(componentRegistry).includes(layoutName)) {
      layoutFound = true;
    }

    if (!layoutFound) {
      return React.createElement(BlankLayout(), {}, ComponentNotFound({ componentName: layoutName, layout: true }));
    }

    /* mount layout */
    let LayoutComponent = componentRegistry[layoutName]?.comp();

    /* get layout childrens */
    let layoutChildren = LayoutComponent?.props?.children;
    
    if (layoutChildren && !Array.isArray(layoutChildren)) {
      layoutChildren = [layoutChildren];
    }

    layoutChildren?.forEach((layoutChild, index) => {
      console.log(`layoutChild ${index}`);
      console.log(layoutChild);
    });

    layoutChildren = layoutChildren?.map((layoutChild) => {
      if(layoutChild?.type?.name === CoreLayoutPlaceholder.name){
        return React.createElement(CoreBox, {
          key         : layoutChild?.props?.id,
          styleClasses: [
            ...(layoutChild.props.styleClasses || []), 
            CoreClasses.BG.BG_INFO, 
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_BLACK,
            CoreClasses.PADDING.P1
          ],
        }, <CoreTypographyBody1>
          {`${layoutName} :: ${layoutChild?.props?.id}`}
        </CoreTypographyBody1>);
      } else {
        return layoutChild;
      }
    });

    return layoutChildren;
  }; 

  return (
    <>
      {renderData()}
    </>
  );
}
