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
import CoreGrid from "../components/layouts/CoreGrid";
import CoreContainedButton from "../components/inputs/CoreContainedButton";

export default function LayoutViewer(props) {
  const { layoutName, layoutType, showInfo, setShowInfo, potrait } = props;

  console.log(potrait);
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
      if (layoutChild?.type?.name === CoreLayoutPlaceholder.name) {
        return React.createElement(CoreBox, {
          key         : layoutChild?.props?.id,
          styleClasses: [...(layoutChild.props.styleClasses || []), CoreClasses.LAYOUT.VIEWER_BORDER],
        }, <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.ALIGN_ITEMS_CENTER]}>
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
      <CoreGrid>

        <CoreBox gridProps={{ gridSize: 2 }} styleClasses={[CoreClasses.WIDTH.W_100]}>

          <CoreContainedButton OnClick={() => setShowInfo((prevState) => !prevState)} >
            show Info
          </CoreContainedButton>

          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreIcon
            type="__IconTypes.MATERIAL_ICON"
            icon="!"
            color="primary"
            fontSize="large">
          </CoreIcon> */}

          {showInfo && <CoreTypographyBody1>Details</CoreTypographyBody1>}
        </CoreBox>

        <CoreBox gridProps={{ gridSize: 10 }}>
          <CoreBox styleClasses={[
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.PADDING.P1,
            CoreClasses.SHADOW.SMALL,
            layoutType === "Web" && CoreClasses.WIDTH.W_100,
            layoutType === "Tablet" && CoreClasses.WIDTH.W_100,
            layoutType === "Mobile" && CoreClasses.WIDTH.W_100,
            (layoutType === "Web" && potrait === true) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_4_3, //Potrait
            (layoutType === "Tablet" && potrait === true) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, //Potrait
            (layoutType === "Mobile" && potrait === true) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, //Potrait
            (layoutType === "Web" && potrait === false) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_4, // Landscape
            (layoutType === "Tablet" && potrait === false) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, // Landscape
            (layoutType === "Mobile" && potrait === false) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, // Landscape
          ]}>
            {renderData()}
          </CoreBox>
        </CoreBox>

      </CoreGrid>
    </>
  );
}
