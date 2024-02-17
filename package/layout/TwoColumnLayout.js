import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
import CoreBox from "../components/layouts/CoreBox";
import CoreGrid from "../components/layouts/CoreGrid";

export default function TwoColumnLayout() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: { md: 6 } }}>
        <CoreLayoutPlaceholder id={TwoColumnLayout.PLACEHOLDER.COLUMN1}>

        </CoreLayoutPlaceholder>
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { md: 6 } }}>
        <CoreLayoutPlaceholder id={TwoColumnLayout.PLACEHOLDER.COLUMN2}>

        </CoreLayoutPlaceholder>
      </CoreBox>
    </CoreGrid>
  );
}
TwoColumnLayout.PLACEHOLDER = { COLUMN1: "column1", COLUMN2: "column2" };