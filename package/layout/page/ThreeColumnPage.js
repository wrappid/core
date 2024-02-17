import CoreBox from "../../components/layouts/CoreBox";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreLayoutItem from "../core/CoreLayoutItem";
import ThreeColumnLayout from "../ThreeColumnLayout";

export default function ThreeColumnPage() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: { md: 4 } }}>
        <CoreLayoutItem id={ThreeColumnLayout.PLACEHOLDER.COLUMN1}>

        </CoreLayoutItem>
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { md: 4 } }}>
        <CoreLayoutItem id={ThreeColumnLayout.PLACEHOLDER.COLUMN2}>

        </CoreLayoutItem>
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { md: 4 } }}>
        <CoreLayoutItem id={ThreeColumnLayout.PLACEHOLDER.COLUMN2}>

        </CoreLayoutItem>
      </CoreBox>
    </CoreGrid>
  );
}