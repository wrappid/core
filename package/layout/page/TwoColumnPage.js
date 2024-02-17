import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreLayoutItem from "../core/CoreLayoutItem";
import TwoColumnLayout from "../TwoColumnLayout";

export default function TwoColumnPage() {
  return (
    <>
      <CoreGrid>

        <CoreTypographyBody1>Component above {TwoColumnLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

        <CoreBox gridProps={{ gridSize: { md: 6 } }}>
          <CoreLayoutItem id={TwoColumnLayout.PLACEHOLDER.COLUMN1}>

          </CoreLayoutItem>
        </CoreBox>

        <CoreBox gridProps={{ gridSize: { md: 6 } }}>
          <CoreLayoutItem id={TwoColumnLayout.PLACEHOLDER.COLUMN2}>

          </CoreLayoutItem>
        </CoreBox>
      </CoreGrid>
    </>
  );
}