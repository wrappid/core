import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../components/layouts/CoreBox";
import CoreClasses from "../styles/CoreClasses";

export default function LeftRightDrawerLayout() {

  return (
    <>
      <CoreTypographyBody1>Left Right Drawr</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.WIDTH.VW_100]}>

        <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.LeftDrawer} styleClasses={[CoreClasses.WIDTH.VW_25]} />

        <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.Content} styleClasses={[CoreClasses.WIDTH.VW_50]} />

        <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.RightDrawer} styleClasses={[CoreClasses.WIDTH.VW_25]} />
      </CoreBox>

    </>

  );
}

LeftRightDrawerLayout.PLACEHOLDER = { Content: "leftRightDrawer", Header: "header", LeftDrawer: "leftDrawer", RightDrawer: "rightDrawer" };
