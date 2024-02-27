import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import RightDrawerLayout from "../LeftDrawerLayout";

export default function RightDrawerLayoutPage() {
  return (
    <>

      <CoreBox id={RightDrawerLayout.PLACEHOLDER.Header} styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_100]}>
        <CoreLayoutItem styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_25, CoreClasses.BG.BG_INFO_DARK]}>
          <CoreTypographyBody1>Header component</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.WIDTH.VW_100]}>
          <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.Content} styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_75]}>
            <CoreTypographyBody1>Right drawer component</CoreTypographyBody1>
          </CoreLayoutItem>

          <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.RightDrawer} styleClasses={[CoreClasses.WIDTH.VW_75, CoreClasses.HEIGHT.VH_75]}>
            <CoreTypographyBody1>Right side component</CoreTypographyBody1>
          </CoreLayoutItem>       
        </CoreBox>
      </CoreBox>
      
    </>
  );
}