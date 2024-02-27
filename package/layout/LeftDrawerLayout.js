import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../components/layouts/CoreBox";
import CoreClasses from "../styles/CoreClasses";

/* Left Drawer with header */
export default function LeftDrawerLayout() {

  return (
    <>
      <CoreTypographyBody1>Left Drawr</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={LeftDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreLayoutPlaceholder id={LeftDrawerLayout.PLACEHOLDER.Content} />

        <CoreLayoutPlaceholder id={LeftDrawerLayout.PLACEHOLDER.LeftDrawer} />
      </CoreBox>
    </>

  );
}

LeftDrawerLayout.PLACEHOLDER = { Content: "leftDrawerContent", Header: "header", LeftDrawer: "leftDrawer" };
