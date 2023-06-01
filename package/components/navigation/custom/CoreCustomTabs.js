import React from "react";
import { NativeCustomTabs } from "@wrappid/styled-components";
import { mergedComponentRegistry } from "../../../layout/PageContainer";
import CoreClasses from "../../../styles/CoreClasses";


export default function CoreCustomTabs(props) {
  return (
    <NativeCustomTabs
      props={props}
      tabsClasses={[
        CoreClasses.MARGIN.MB1,
        CoreClasses.POSITION.STICKY_TOP,
        CoreClasses.BG.BG_WHITE,
        CoreClasses.OVERFLOW.OVERFLOW_X_SCROLL,
        CoreClasses.WIDTH.W_100,
      ]}
      tabPanelClasses={[CoreClasses.PADDING.P0]}
      componentRegistry={mergedComponentRegistry}
    />
  )
}