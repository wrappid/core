import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../components/layouts/CoreBox";
import CoreClasses from "../styles/CoreClasses";

/* Right Drawer with header */
export default function RightDrawerLayout() {

  return (
    <>
      <CoreTypographyBody1>Right Drawr</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={RightDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreLayoutPlaceholder id={RightDrawerLayout.PLACEHOLDER.RightDrawer} />

        <CoreLayoutPlaceholder id={RightDrawerLayout.PLACEHOLDER.Content} />

      </CoreBox>
    </>

  );
}

RightDrawerLayout.PLACEHOLDER = { Content: "rightDrawerContent", Header: "header", RightDrawer: "rightDrawer" };
